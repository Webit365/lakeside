import { site } from "@/lib/site";

/**
 * Live Google reviews via Featurable (https://featurable.com).
 *
 * Featurable is a free relay that mirrors a Google Business Profile's reviews
 * and exposes them as JSON, refreshing roughly every 24h. We fetch server-side
 * (so there's no third-party script and no hit to page-speed) and render the
 * real reviews into our own card design.
 *
 * Setup: create a free widget at featurable.com, connect the Google profile,
 * then Embed → API to copy the widget ID. Set it as FEATURABLE_WIDGET_ID in
 * the environment (e.g. Vercel → Settings → Environment Variables). Until it's
 * set, the site falls back to the verified review(s) in FALLBACK_REVIEWS, it
 * never shows placeholder or fabricated reviews.
 */

export type GoogleReview = {
  id: string;
  name: string;
  text: string;
  rating: number;
  detail: string;
};

export type ReviewsData = {
  reviews: GoogleReview[];
  averageRating: number;
  totalCount: number;
};

// Shape returned by the Featurable v1 widget endpoint. Every field is treated
// as optional so a change on their side degrades to the fallback, never a crash.
type FeaturableReview = {
  reviewId?: string | null;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
    isAnonymous?: boolean;
  };
  starRating?: number;
  comment?: string;
  createTime?: string | null;
};

type FeaturableResponse = {
  success?: boolean;
  reviews?: FeaturableReview[];
  averageRating?: number;
  totalReviewCount?: number;
};

const WIDGET_ID = process.env.FEATURABLE_WIDGET_ID?.trim();
const ENDPOINT = "https://api.featurable.com/v1/widgets";

const MAX_REVIEWS = 6; // keep the section tight
const MIN_RATING = 5; // only surface 5★ reviews as social proof
const MAX_CHARS = 220; // trim very long reviews to a teaser + link to Google

/**
 * Verified 5-star Google reviews, shown when the live Featurable feed isn't
 * configured or is down. These are real reviews from the Google Business
 * Profile (verified from the public listing, Aug 2026), lightly cleaned for
 * typos only. Do not add anything that isn't a genuine review.
 */
export const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    id: "kamdin-h",
    name: "Kamdin H.",
    text: "I contacted them and within the same evening got a phone call back. The team at Lakeside Outdoor Services was extremely easy to work with, explained what I needed done, and got it done the next day for a reasonable price. I can't thank them enough or recommend someone better.",
    rating: 5,
    detail: "Verified Google review",
  },
  {
    id: "wade-s",
    name: "Wade S.",
    text: "Dave is great at what he does and has always gone above and beyond for my wife and her crazy ideas and wants.",
    rating: 5,
    detail: "Verified Google review",
  },
  {
    id: "samantha-w",
    name: "Samantha W.",
    text: "The best company out there!",
    rating: 5,
    detail: "Verified Google review",
  },
];

function trim(text: string): string {
  const clean = text.trim();
  if (clean.length <= MAX_CHARS) return clean;
  const cut = clean.slice(0, MAX_CHARS);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 120 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

/**
 * Fetch live Google reviews. Returns null (so the caller uses the fallback) if
 * the widget isn't configured, the request fails, or nothing usable comes back.
 */
export async function getGoogleReviews(): Promise<ReviewsData | null> {
  if (!WIDGET_ID) return null;

  try {
    const res = await fetch(`${ENDPOINT}/${WIDGET_ID}`, {
      // Featurable refreshes its cache ~daily; match that so we don't refetch
      // on every request while still staying current.
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as FeaturableResponse;
    if (!data?.success || !Array.isArray(data.reviews)) return null;

    const reviews = data.reviews
      .filter(
        (r) =>
          (r.comment ?? "").trim().length > 0 &&
          (r.starRating ?? 0) >= MIN_RATING,
      )
      .sort((a, b) => (b.starRating ?? 0) - (a.starRating ?? 0))
      .slice(0, MAX_REVIEWS)
      .map(
        (r, i): GoogleReview => ({
          id: r.reviewId || `google-review-${i}`,
          name: r.reviewer?.displayName?.trim() || "Google reviewer",
          text: trim(r.comment ?? ""),
          rating: Math.min(5, Math.max(1, Math.round(r.starRating ?? 5))),
          detail: "Verified Google review",
        }),
      );

    if (reviews.length === 0) return null;

    return {
      reviews,
      averageRating: data.averageRating ?? site.rating.value,
      totalCount: data.totalReviewCount ?? site.rating.count,
    };
  } catch {
    return null;
  }
}
