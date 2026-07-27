import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getGoogleReviews, FALLBACK_REVIEWS } from "@/lib/reviews";
import {
  ShieldIcon,
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
} from "./icons";

/** Section heading block with eyebrow + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
      )}
    </div>
  );
}

const trustItems = [
  { icon: ShieldIcon, label: "Fully Insured", sub: "COI on request" },
  { icon: ClockIcon, label: "Since 2010", sub: "15+ years local" },
  { icon: TruckIcon, label: "Digitally Dispatched", sub: "Tracked trucks" },
  { icon: MapPinIcon, label: "Watertown-Based", sub: "Fast response" },
];

/** Thin trust bar of credibility badges. */
export function TrustBar() {
  return (
    <section className="border-y border-pine-100 bg-pine-50/60">
      <div className="container-x grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white text-pine-700 shadow-card">
              <t.icon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-ink">
                {t.label}
              </span>
              <span className="block text-xs text-ink-muted">{t.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Full-width gold/pine CTA band. */
export function CtaBand({
  title = "Get a free, no-obligation estimate",
  subtitle = "Tell us about your property and we'll get you a fast, honest quote. Commercial contracts and quality residential service welcome.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-frost-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #93cdfd 0, transparent 40%), radial-gradient(circle at 80% 80%, #f9bd24 0, transparent 45%)",
        }}
      />
      <Image
        src="/brand/lakeside-mark.png"
        alt=""
        aria-hidden="true"
        width={288}
        height={288}
        className="pointer-events-none absolute -right-8 top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-[0.07] md:block"
      />
      <div className="container-x relative flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-frost-100">{subtitle}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary btn-lg">
            Request My Quote
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a href={site.phone.href} className="btn-white btn-lg">
            <PhoneIcon className="h-5 w-5" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

export async function Reviews() {
  // Live Google reviews (server-side, cached ~24h). Falls back to verified
  // review(s) when the Featurable widget isn't configured — never placeholders.
  const live = await getGoogleReviews();
  const reviews = live?.reviews ?? FALLBACK_REVIEWS;
  const averageRating = live?.averageRating ?? site.rating.value;
  const totalCount = live?.totalCount ?? site.rating.count;

  // Keep a 1- or 2-review fallback from looking sparse in a 3-up grid.
  const gridClass =
    reviews.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : reviews.length === 2
        ? "sm:grid-cols-2 max-w-3xl mx-auto"
        : "max-w-md mx-auto";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6" />
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-ink-muted">
            Rated {averageRating}★ from {totalCount} Google reviews across
            Northern NY
          </p>
          <SectionHeading
            align="center"
            title="Trusted by businesses and homeowners across the North Country"
            className="mt-4"
          />
        </div>

        <div className={`mt-12 grid gap-6 ${gridClass}`}>
          {reviews.map((r) => (
            <figure key={r.id} className="card flex flex-col p-6">
              <div
                className="flex gap-0.5 text-gold-500"
                aria-label={`${r.rating} out of 5 stars`}
              >
                {Array.from({ length: r.rating }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-soft">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-pine-100 pt-4">
                <span className="block text-sm font-bold text-ink">
                  {r.name}
                </span>
                <span className="block text-xs text-ink-muted">{r.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          <a
            href={site.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-frost-700 underline-offset-2 hover:underline"
          >
            Read all {totalCount} reviews on Google →
          </a>
        </p>
      </div>
    </section>
  );
}

/** Checklist bullet used throughout. */
export function Ticked({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-pine-100 text-pine-700">
        <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <span className="text-ink-soft">{children}</span>
    </li>
  );
}
