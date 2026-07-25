import type { Metadata } from "next";
import Link from "next/link";
import { site, serviceAreas } from "@/lib/site";
import { services } from "@/lib/services";
import { serviceIcons } from "@/components/icons";
import {
  SectionHeading,
  TrustBar,
  CtaBand,
  Reviews,
} from "@/components/sections";
import { FaqSection } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { PhoneLink } from "@/components/PhoneLink";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  ArrowRightIcon,
  BuildingIcon,
  HomeIcon,
  CheckIcon,
  StarIcon,
  ShieldIcon,
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  SnowIcon,
  LeafIcon,
} from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title:
    "Commercial Landscaping & Snow Plowing in Watertown, NY | Lakeside Outdoor Services",
  description:
    "Watertown, NY's trusted local company for commercial & residential landscaping, snow plowing, salting & property maintenance across Northern New York. Fully insured since 2010. Free estimates — (315) 777-1809.",
  path: "/",
});

const homeFaqs = [
  {
    q: "What areas does Lakeside Outdoor Services cover?",
    a: "We serve Watertown, Fort Drum, and the surrounding Northern New York communities — including Evans Mills, Black River, Adams, Carthage, Clayton, Cape Vincent, Alexandria Bay, and the Thousand Islands. We deliberately keep a concentrated service area so we can respond fast.",
  },
  {
    q: "Do you handle both commercial and residential properties?",
    a: "Yes. We specialize in commercial landscaping and snow management for businesses, property managers, and commercial lots, and we also serve quality-focused homeowners who want dependable, professional service. No job is too big or too small.",
  },
  {
    q: "Can I use one company for both landscaping and snow removal?",
    a: "Absolutely — most of our clients do. Using one trusted local company for summer grounds care and winter snow management means seamless year-round coverage, a single point of contact, and no gaps in service.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Lakeside Outdoor Services is fully insured. We provide certificates of insurance to commercial clients and property managers who need one on file.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or text Dave directly at (315) 777-1809 or request a free, no-obligation estimate through our online form. We'll learn about your property and get you an honest quote quickly.",
  },
];

const winterServices = services.filter((s) => s.season === "winter");
const summerServices = services.filter(
  (s) => s.season === "summer" || s.season === "year-round"
);

const differentiators = [
  {
    icon: MapPinIcon,
    title: "Fast local response",
    body: "A concentrated route around Watertown & Fort Drum means we reach your property quickly — even in a heavy lake-effect event.",
  },
  {
    icon: ClockIcon,
    title: "On time, every time",
    body: "Digitally dispatched, depth-triggered service. Lots and driveways cleared before you open — you never have to call.",
  },
  {
    icon: ShieldIcon,
    title: "Fully insured & documented",
    body: "COI on file, service logs for every commercial visit — the paper trail your risk manager and GL carrier want.",
  },
  {
    icon: TruckIcon,
    title: "Professional crews",
    body: "Careful, responsible drivers and detail-oriented landscapers who treat your property like it's their own.",
  },
  {
    icon: StarIcon,
    title: "15+ years, trusted local",
    body: "Serving Northern NY since 2010 with a reputation built on reliability — not the lowest bid.",
  },
  {
    icon: CheckIcon,
    title: "One vendor, all seasons",
    body: "Landscaping, mowing, cleanups, plowing, and salting under one roof. Seamless year-round property care.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(homeFaqs),
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #081a2b 0%, #103a5f 45%, #172a54 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(147,205,253,0.35) 0, transparent 35%), radial-gradient(circle at 10% 90%, rgba(249,189,36,0.25) 0, transparent 40%)",
          }}
        />
        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-pine-500" />
              Watertown &amp; Northern NY · Since {site.foundedYear}
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              Year-Round Property Care in{" "}
              <span className="text-gold-400">Watertown, NY</span>
            </h1>
            <p className="mt-4 font-display text-xl font-bold text-gold-400 sm:text-2xl">
              Your Property. Our Priority. Every Season.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-frost-100">
              The trusted choice for residential and commercial property care in
              Watertown, NY. From landscaping, lawn care, and grounds maintenance
              to dependable snow plowing and ice management, we keep your property
              looking its best and operating safely year-round. Fully insured,
              digitally dispatched, and fast to respond.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-ghost-light btn-lg">
                Get My Free Quote
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <PhoneLink
                className="btn-primary btn-lg"
                iconClassName="h-5 w-5"
                label={`Call or Text ${site.phone.contactName} · ${site.phone.display}`}
              />
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-frost-100">
              {[
                "Free, no-obligation estimates",
                "Commercial & residential",
                "Seasonal contracts available",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon
                    className="h-5 w-5 text-gold-400"
                    strokeWidth={2.5}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual — the Lakeside crew, with floating rating */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <Photo
              src="/photos/crew-team.jpg"
              alt="The Lakeside Outdoor Services crew in Watertown, New York"
              className="aspect-[3/2] w-full"
              rounded="rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-pine-100 bg-white px-5 py-3.5 shadow-lift">
              <div className="flex -space-x-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">
                  {site.rating.value}/5 · {site.rating.count}+ reviews
                </p>
                <p className="text-xs text-ink-muted">
                  Trusted across the North Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ===== TWO PATHS: Commercial (emphasis) + Residential ===== */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Who we serve"
            title="Property care built for how you use it"
            intro="Whether you're protecting a commercial investment or maintaining a home you're proud of, you get the same thing: reliable, professional service from a local team that shows up."
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Commercial — emphasized */}
            <div className="group relative overflow-hidden rounded-2xl bg-frost-900 p-8 text-white shadow-lift sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-2xl"
                style={{ background: "#3b8ef6" }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                  Our specialty
                </span>
                <div className="mt-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                  <BuildingIcon className="h-8 w-8 text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                  Commercial Landscaping &amp; Snow Management
                </h3>
                <p className="mt-3 text-frost-100">
                  Retail plazas, offices, medical, industrial, restaurants, and
                  property-management portfolios. Cleared before you open,
                  maintained to protect your image, documented to protect your
                  liability.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-pine-50">
                  {[
                    "Seasonal snow contracts & priority response",
                    "Salting & de-icing for slip-and-fall protection",
                    "Year-round grounds care & curb appeal",
                    "Certificates of insurance & service logs",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckIcon
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400"
                        strokeWidth={2.5}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/commercial-landscaping-watertown-ny"
                    className="btn-primary btn-md"
                  >
                    Explore Commercial Services
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact?type=commercial"
                    className="btn-ghost-light btn-md"
                  >
                    Request a Bid
                  </Link>
                </div>
              </div>
            </div>

            {/* Residential */}
            <div className="relative overflow-hidden rounded-2xl border border-pine-100 bg-white p-8 shadow-card sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-pine-50">
                <HomeIcon className="h-8 w-8 text-pine-700" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                Residential Landscaping &amp; Snow
              </h3>
              <p className="mt-3 text-ink-muted">
                For homeowners who want it done right — not just done. Reliable
                mowing and detailed lawn care, custom landscaping, and
                dependable driveway plowing from a crew that respects your
                property.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                {[
                  "Weekly mowing with a clean, detailed finish",
                  "Landscape design, planting & bed refreshes",
                  "Spring & fall cleanups",
                  "Reliable driveway snow plowing & salting",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckIcon
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600"
                      strokeWidth={2.5}
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/residential-landscaping-watertown-ny"
                  className="btn-pine btn-md"
                >
                  Explore Residential Services
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline btn-md">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Complete landscaping & snow services"
            intro="Every service is available for both commercial and residential properties across Watertown and Northern New York."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-pine-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl ${
                        s.season === "winter"
                          ? "bg-frost-50 text-frost-600"
                          : "bg-pine-50 text-pine-700"
                      }`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {s.navLabel}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-ink-muted">
                    {s.heroSubhead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pine-700 group-hover:gap-2.5">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-all" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== YEAR-ROUND COVERAGE ===== */}
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Year-round partner"
              title="One trusted local company for every season"
              intro="Stop juggling contractors. We keep your property sharp in summer and safe in winter — with a single point of contact and no gaps in coverage."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-pine-100 bg-frost-50/50 p-5">
                <div className="flex items-center gap-2 font-bold text-pine-800">
                  <LeafIcon className="h-5 w-5" />
                  Spring – Fall
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {summerServices.map((s) => (
                    <li key={s.slug} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-pine-500" />
                      {s.navLabel}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-frost-100 bg-frost-50/50 p-5">
                <div className="flex items-center gap-2 font-bold text-frost-700">
                  <SnowIcon className="h-5 w-5" />
                  Winter
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {winterServices.map((s) => (
                    <li key={s.slug} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-frost-500" />
                      {s.navLabel}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href="/services/property-maintenance"
              className="btn-pine btn-md mt-8"
            >
              See year-round maintenance
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo
              src="/photos/residential-lawn.jpg"
              alt="Freshly striped residential lawn maintained by Lakeside in Watertown NY"
              className="aspect-square"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
            <Photo
              src="/photos/commercial-plowing-lot.jpg"
              alt="Lakeside plow truck servicing a commercial parking lot"
              className="mt-6 aspect-square"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
            <Photo
              src="/photos/commercial-plaza-snow.jpg"
              alt="Snow and ice management at a Watertown commercial plaza"
              className="aspect-square"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
            <Photo
              src="/photos/fleet-lineup.jpg"
              alt="Lakeside's fleet of digitally dispatched plow trucks"
              className="mt-6 aspect-square"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-frost-950 py-16 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Lakeside"
            title={
              <span className="text-white">
                Why property owners choose us over the low bid
              </span>
            }
            intro={
              <span className="text-frost-100">
                We compete on reliability, not price. For the businesses and
                homeowners who value good service, that&apos;s exactly the point.
              </span>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-frost-200">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Getting started is simple"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Request your estimate",
                body: "Call or text Dave or fill out the quick form. Tell us about your property and what you need.",
              },
              {
                step: "2",
                title: "Get a clear, honest quote",
                body: "We assess your site and give you a straightforward quote — seasonal or per-service, no surprises.",
              },
              {
                step: "3",
                title: "Sit back — it's handled",
                body: "Our crews show up on schedule and keep your property sharp and safe, season after season.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-pine-100 bg-white p-7 shadow-card"
              >
                <span className="absolute -top-4 left-7 grid h-9 w-9 place-items-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-ink shadow-card">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <PhoneLink
              className="btn-pine btn-lg"
              iconClassName="h-5 w-5"
              label={`Call or Text ${site.phone.contactName} Now · ${site.phone.display}`}
            />
          </div>
        </div>
      </section>

      <Reviews />

      {/* ===== SERVICE AREA ===== */}
      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Proudly serving Watertown & the North Country"
              intro="We keep a concentrated service area on purpose — it's how we respond fast and clear your property before the competition even arrives."
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm font-medium text-ink-soft"
                >
                  <MapPinIcon className="h-4 w-4 flex-shrink-0 text-pine-500" />
                  {area}
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="btn-outline btn-md mt-8">
              View all service areas
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <Photo
            src="/photos/salter-truck.jpg"
            alt="Lakeside Outdoor Services truck with salt spreader serving Watertown, Fort Drum, and the Thousand Islands"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <CtaBand />

      <FaqSection faqs={homeFaqs} />
    </>
  );
}
