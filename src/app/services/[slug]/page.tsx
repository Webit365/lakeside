import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService, serviceSlugs } from "@/lib/services";
import { site } from "@/lib/site";
import { serviceIcons } from "@/components/icons";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ShieldIcon,
  ClockIcon,
} from "@/components/icons";
import { SectionHeading, CtaBand } from "@/components/sections";
import { FaqSection } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { PhoneLink } from "@/components/PhoneLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  pageMeta,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

// Real photo per service (public/photos). Falls back to the fleet lineup.
const photoForSlug: Record<string, { src: string; alt: string }> = {
  "commercial-snow-plowing": {
    src: "/photos/commercial-plowing-lot.jpg",
    alt: "Lakeside plow truck clearing a commercial parking lot in Watertown NY",
  },
  "snow-plowing": {
    src: "/photos/commercial-plowing-night.jpg",
    alt: "Lakeside snow plowing a lot at night in Northern New York",
  },
  "snow-removal": {
    src: "/photos/commercial-plaza-snow.jpg",
    alt: "Snow removal at a commercial plaza during a Northern NY storm",
  },
  "salting-de-icing": {
    src: "/photos/commercial-plowing-night.jpg",
    alt: "Commercial lot treated for snow and ice by Lakeside in Watertown NY",
  },
  "lawn-mowing-maintenance": {
    src: "/photos/commercial-lawn.jpg",
    alt: "Freshly striped commercial lawn mowed by Lakeside in Watertown NY",
  },
  "landscape-design-installation": {
    src: "/photos/residential-beds.jpg",
    alt: "Fresh mulch beds and landscaping at a Northern NY home",
  },
  "property-maintenance": {
    src: "/photos/commercial-lawn.jpg",
    alt: "Well-maintained commercial grounds cared for year-round by Lakeside",
  },
  "spring-fall-cleanups": {
    src: "/photos/residential-beds.jpg",
    alt: "Tidy, cleaned-up landscape beds at a Watertown NY property",
  },
  "topsoil-gravel-grading": {
    src: "/photos/residential-beds.jpg",
    alt: "Graded beds and fresh groundwork by Lakeside Outdoor Services",
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = serviceIcons[slug as keyof typeof serviceIcons];

  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter(Boolean) as typeof services;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.navLabel },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.navLabel,
            description: service.metaDescription,
            path: `/services/${slug}`,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-pine-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              service.season === "winter"
                ? "linear-gradient(120deg, #0a1d15 0%, #172a54 100%)"
                : "linear-gradient(120deg, #0a1d15 0%, #1e4e35 100%)",
          }}
        />
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {Icon && <Icon className="h-4 w-4" />}
                {service.heroKicker}
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
                {service.h1}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-pine-100">
                {service.heroSubhead}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary btn-lg">
                  Get My Free Quote
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <PhoneLink
                  className="btn-ghost-light btn-lg"
                  iconClassName="h-5 w-5"
                  label={`Call ${site.phone.display}`}
                />
              </div>
            </div>
            <Photo
              src={(photoForSlug[slug] ?? { src: "/photos/fleet-lineup.jpg" }).src}
              alt={
                (photoForSlug[slug] ?? { alt: `${service.navLabel} by Lakeside Outdoor Services` }).alt
              }
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="prose-lake max-w-none text-lg">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-pine-50 px-3 py-1.5 text-sm font-semibold text-pine-800">
                <ShieldIcon className="h-4 w-4" /> Fully insured
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-pine-50 px-3 py-1.5 text-sm font-semibold text-pine-800">
                <ClockIcon className="h-4 w-4" /> Reliable scheduling
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-pine-50 px-3 py-1.5 text-sm font-semibold text-pine-800">
                Serving {site.address.city} & NNY
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.highlights.map((h) => (
              <div key={h.title} className="card p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold-100 text-gold-700">
                  <CheckIcon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="mt-3 font-bold text-ink">{h.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="bg-pine-50/50 py-14 sm:py-20">
        <div className="container-x max-w-4xl">
          {service.blocks.map((block) => (
            <div key={block.h2} className="prose-lake mb-10 max-w-none last:mb-0">
              <h2>{block.h2}</h2>
              {block.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {block.bullets && (
                <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="border-y border-pine-100 bg-white py-12">
        <div className="container-x flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Ready to get started with {service.navLabel.toLowerCase()}?
            </h2>
            <p className="mt-1.5 text-ink-muted">
              Free, no-obligation estimate for your property in {site.address.city} or
              the surrounding area.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary btn-lg">
              Request My Quote
            </Link>
            <a href={site.phone.href} className="btn-outline btn-lg">
              <PhoneIcon className="h-5 w-5" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={service.faqs}
        title={`${service.navLabel} — questions & answers`}
      />

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-pine-50/50 py-14">
          <div className="container-x">
            <SectionHeading eyebrow="Related services" title="You may also need" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const RIcon = serviceIcons[r.slug as keyof typeof serviceIcons];
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-pine-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                      {RIcon && <RIcon className="h-6 w-6" />}
                    </span>
                    <span>
                      <span className="block font-bold text-ink">
                        {r.navLabel}
                      </span>
                      <span className="mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-pine-700 group-hover:gap-2">
                        Learn more <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
