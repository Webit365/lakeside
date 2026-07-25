import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  BuildingIcon,
  ShieldIcon,
  ClockIcon,
  TruckIcon,
  SnowIcon,
  LeafIcon,
  PhoneIcon,
} from "@/components/icons";
import { SectionHeading, CtaBand, Reviews } from "@/components/sections";
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

export const metadata: Metadata = pageMeta({
  title:
    "Commercial Landscaping & Snow Plowing in Watertown, NY | Lakeside Outdoor Services",
  description:
    "Commercial landscaping, snow plowing, salting & property maintenance for Watertown & Northern NY businesses. Retail, medical, industrial & Fort Drum-area properties. Insured, documented, reliable. Call (315) 777-1809.",
  path: "/commercial-landscaping-watertown-ny",
});

const segments = [
  {
    icon: BuildingIcon,
    title: "Retail & Property Management",
    body: "Shopping plazas, retail lots, HOAs, and apartment complexes. Lanes and storefronts open, cart corrals clear, grounds maintained to protect foot traffic and tenant satisfaction.",
  },
  {
    icon: TruckIcon,
    title: "Industrial & Fort Drum Area",
    body: "Warehouses, industrial parks, and large facilities. Dock approaches and truck lanes cleared wide enough for 53-foot trailers, at any hour, in any accumulation.",
  },
  {
    icon: ShieldIcon,
    title: "Medical, Office & Banks",
    body: "Liability-sensitive properties where a clear, salted entrance isn't optional. ADA-access paths, documented ice control, and early-morning clearing before your doors open.",
  },
  {
    icon: ClockIcon,
    title: "Restaurants & Small Commercial",
    body: "Storefronts, gas stations, and restaurants that live and die on early-morning access. Reliable clearing so you're open and safe when your first customers arrive.",
  },
];

const commercialFaqs = [
  {
    q: "Do you provide certificates of insurance for commercial contracts?",
    a: "Yes. Lakeside Outdoor Services is fully insured and we provide certificates of insurance to any commercial client, property manager, or landlord who requires one on file before work begins.",
  },
  {
    q: "Can I bundle summer landscaping and winter snow into one contract?",
    a: "Yes, and most commercial clients prefer it. A year-round agreement covers grounds care, mowing, and cleanups in the warm months and snow plowing, salting, and de-icing in winter — one vendor, one point of contact, seamless coverage.",
  },
  {
    q: "How do you handle snow removal for large commercial lots?",
    a: "We map your property before winter — priority routes, snow-stacking zones, fire lanes, and drainage — then execute the same plan every storm with digitally dispatched trucks. When lots run out of room to push, we add loader relocation and off-site hauling to recover parking.",
  },
  {
    q: "Do you offer seasonal contracts with fixed pricing?",
    a: "Yes. Seasonal snow contracts give you predictable budgeting regardless of how heavy the winter gets. Per-push and per-event options are also available. We'll recommend the structure that best fits your property's risk and cash flow.",
  },
  {
    q: "What size commercial properties do you service?",
    a: "From single storefronts to multi-acre parking lots and property-management portfolios. We keep a concentrated service area around Watertown and Fort Drum specifically so we can respond quickly and reliably to every client on our route.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Commercial Landscaping & Snow Management",
            description: metadata.description as string,
            path: "/commercial-landscaping-watertown-ny",
          }),
          faqSchema(commercialFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Commercial",
              path: "/commercial-landscaping-watertown-ny",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #081a2b 0%, #103a5f 40%, #172a54 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(147,205,253,0.4) 0, transparent 35%), radial-gradient(circle at 15% 90%, rgba(249,189,36,0.3) 0, transparent 40%)",
          }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Commercial" }]}
            light
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                Our Specialty
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] text-white sm:text-5xl">
                Commercial Landscaping &amp; Snow Plowing in Watertown, NY
              </h1>
              <p className="mt-5 max-w-xl text-lg text-frost-100">
                Protect your property, your image, and your liability with a
                trusted local company. We keep Watertown and Northern NY
                businesses open, accessible, and looking their best — every
                season, documented and dependable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?type=commercial" className="btn-primary btn-lg">
                  Request a Commercial Bid
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <PhoneLink
                  className="btn-ghost-light btn-lg"
                  iconClassName="h-5 w-5"
                  label={`Call or Text ${site.phone.contactName} · ${site.phone.display}`}
                />
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-frost-100">
                {[
                  "Fully insured · COI on request",
                  "Seasonal contracts",
                  "Documented service logs",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-gold-400" strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Photo
                src="/photos/commercial-lawn.jpg"
                alt="Commercial grounds maintained by Lakeside in Watertown NY"
                className="aspect-[3/4]"
                sizes="(max-width: 1024px) 45vw, 24vw"
                priority
              />
              <Photo
                src="/photos/commercial-plowing-lot.jpg"
                alt="Lakeside clearing a commercial parking lot in Northern NY"
                className="mt-8 aspect-[3/4]"
                sizes="(max-width: 1024px) 45vw, 24vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Why businesses choose Lakeside"
            title="Commercial-grade reliability, backed by paperwork"
            intro="When your property is your business, service can't be a gamble. Here's what a professional commercial partner gives you that a low bidder can't."
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ClockIcon,
                title: "Open before you open",
                body: "Depth-triggered dispatch and early-morning clearing mean your lot is ready before staff and customers arrive. You never have to call.",
              },
              {
                icon: ShieldIcon,
                title: "Liability protection",
                body: "Documented salting and de-icing with service logs — one of the strongest defenses against slip-and-fall claims.",
              },
              {
                icon: CheckIcon,
                title: "One vendor, all year",
                body: "Landscaping, mowing, cleanups, plowing, and salting under one contract. A single point of contact who knows your property.",
              },
            ].map((v) => (
              <div key={v.title} className="card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-pine-700 text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-ink-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for your type of property"
            intro="Every commercial property has different pressures. We tailor the plan to yours."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {segments.map((s) => (
              <div
                key={s.title}
                className="flex gap-5 rounded-2xl border border-pine-100 bg-white p-6 shadow-card"
              >
                <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                  <s.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SPLIT */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-frost-100 bg-frost-50/40 p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-frost-600 text-white">
                <SnowIcon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-bold text-ink">
                Commercial Snow &amp; Ice
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                ["Commercial Snow Plowing", "/services/commercial-snow-plowing"],
                ["Salting & De-Icing", "/services/salting-de-icing"],
                ["Snow Removal & Hauling", "/services/snow-removal"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 font-semibold text-ink shadow-card transition-transform hover:translate-x-1"
                  >
                    {label}
                    <ArrowRightIcon className="h-5 w-5 text-frost-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-pine-100 bg-pine-50/40 p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-pine-700 text-white">
                <LeafIcon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-bold text-ink">
                Commercial Landscaping
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                ["Lawn Mowing & Maintenance", "/services/lawn-mowing-maintenance"],
                ["Landscape Design & Install", "/services/landscape-design-installation"],
                ["Property Maintenance", "/services/property-maintenance"],
                ["Spring & Fall Cleanups", "/services/spring-fall-cleanups"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 font-semibold text-ink shadow-card transition-transform hover:translate-x-1"
                  >
                    {label}
                    <ArrowRightIcon className="h-5 w-5 text-pine-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BID CTA */}
      <section className="bg-frost-900 py-14">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Put your property on our route this season
            </h2>
            <p className="mt-2 text-frost-100">
              Tell us about your site and we&apos;ll prepare a clear commercial
              bid — snow, landscaping, or full year-round coverage.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact?type=commercial" className="btn-primary btn-lg">
              Request a Bid
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={site.phone.href} className="btn-white btn-lg">
              <PhoneIcon className="h-5 w-5" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection
        faqs={commercialFaqs}
        eyebrow="Commercial FAQ"
        title="Commercial landscaping & snow — questions answered"
      />

      <CtaBand
        title="Serving commercial properties across Watertown & the North Country"
        subtitle="Retail, medical, office, industrial, and Fort Drum-area facilities. Insured, documented, and dependable."
      />
    </>
  );
}
