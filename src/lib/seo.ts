import type { Metadata } from "next";
import { site, serviceAreas } from "./site";

const sameAs = [site.social.google, site.social.facebook, site.social.instagram].filter(
  Boolean
);

const baseUrl = site.url.replace(/\/$/, "");

const defaultOgImage = {
  url: "/og-cover.jpg",
  width: 1200,
  height: 630,
  alt: "The Lakeside Outdoor Services crew and truck in Watertown, NY",
};

/** Build canonical + OG metadata for a page. */
export function pageMeta({
  title,
  description,
  path,
  images,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}: {
  title: string;
  description: string;
  path: string;
  images?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}): Metadata {
  // Next normalizes the root canonical to no trailing slash (trailingSlash:false),
  // so keep canonical/OG/sitemap all consistent on the no-slash form.
  const url = `${baseUrl}${path === "/" ? "" : path}`;
  const ogImages = images ? images.map((src) => ({ url: src })) : [defaultOgImage];
  const twitterImages = images ?? [defaultOgImage.url];
  return {
    // Absolute prevents the layout's "%s | Brand" template from double-appending
    // the brand, since these titles already include it where wanted.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
      siteName: site.legalName,
      locale: "en_US",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? ogTitle ?? title,
      description: twitterDescription ?? ogDescription ?? description,
      images: twitterImages,
    },
  };
}

const geo = serviceAreas.map((name) => ({
  "@type": "City",
  name: `${name}, NY`,
}));

/** LocalBusiness schema — the core local-SEO entity. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": `${baseUrl}/#business`,
    name: site.legalName,
    alternateName: site.shortBrand,
    description:
      "Commercial and residential landscaping, snow plowing, salting, and property maintenance serving Watertown and Northern New York since 2010.",
    url: baseUrl,
    telephone: site.phone.e164,
    email: site.email,
    ...(sameAs.length ? { sameAs } : {}),
    foundingDate: String(site.foundedYear),
    priceRange: "$$",
    image: `${baseUrl}/og-cover.jpg`,
    logo: `${baseUrl}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    areaServed: geo,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    knowsAbout: [
      "Landscaping",
      "Lawn Mowing",
      "Lawn Maintenance",
      "Property Maintenance",
      "Snow Plowing",
      "Snow Removal",
      "Salting",
      "Ice Management",
      "Commercial Landscaping",
      "Residential Landscaping",
    ],
  };
}

/** Service schema for a service page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${baseUrl}${path}`,
    serviceType: name,
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: geo,
    audience: {
      "@type": "Audience",
      audienceType: "Commercial and residential property owners",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${baseUrl}${it.path}`,
    })),
  };
}

export { baseUrl };
