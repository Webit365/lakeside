import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ApplyForm } from "@/components/ApplyForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema, baseUrl } from "@/lib/seo";
import {
  ArrowRightIcon,
  PhoneIcon,
  CheckIcon,
  DollarIcon,
  ClockIcon,
  UsersIcon,
  ShovelIcon,
  WheelLoaderIcon,
  TruckIcon,
  MapPinIcon,
  SnowIcon,
} from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title:
    "Now Hiring — Winter Snow Removal Jobs in Watertown, NY | Lakeside Outdoor Services",
  description:
    "Lakeside Outdoor Services is hiring for winter snow removal in Watertown, NY: loader operators, small equipment operators, and shovelers. Great pay, steady work. Apply online or call (315) 777-1809.",
  path: "/careers",
});

const positions = [
  {
    icon: WheelLoaderIcon,
    title: "Loader Operators",
    body: "Run wheel loaders and heavy equipment clearing commercial lots and snow piles. Experience preferred — reliability required.",
  },
  {
    icon: TruckIcon,
    title: "Small Equipment Operators",
    body: "Operate skid steers, compact loaders, and plow rigs at properties across the North Country. We'll train the right person.",
  },
  {
    icon: ShovelIcon,
    title: "Shovelers",
    body: "Hand-clear walkways, entrances, and tight spots the machines can't reach. Great entry point to join the crew.",
  },
];

const perks = [
  {
    icon: DollarIcon,
    title: "Great pay",
    body: "Competitive wages that respect the hours and the weather you work in.",
  },
  {
    icon: ClockIcon,
    title: "Steady work",
    body: "Consistent winter hours with a busy, established local company — not a one-storm gig.",
  },
  {
    icon: UsersIcon,
    title: "Be part of a team",
    body: "Join a crew that keeps Watertown moving all winter and takes pride in doing it right.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Winter Snow Removal Crew (Loader Operators, Small Equipment Operators, Shovelers)",
            description:
              "Lakeside Outdoor Services is hiring for winter snow removal in Watertown and Northern New York. Open positions include loader operators, small equipment operators, and shovelers. Great pay and steady work with an established local company.",
            datePosted: "2026-08-25",
            employmentType: ["PART_TIME", "FULL_TIME", "SEASONAL"],
            hiringOrganization: {
              "@type": "Organization",
              name: site.legalName,
              sameAs: baseUrl,
              logo: `${baseUrl}/icon.svg`,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: site.address.city,
                addressRegion: site.address.state,
                postalCode: site.address.zip,
                addressCountry: site.address.country,
              },
            },
            applicantLocationRequirements: {
              "@type": "Country",
              name: "US",
            },
            industry: "Snow Removal / Landscaping",
          },
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
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Careers" }]}
            light
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-gold-400" />
            Now Hiring · Winter Snow Removal
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
            Join our team and make an impact{" "}
            <span className="text-gold-400">this winter</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-frost-100">
            Lakeside Outdoor Services is hiring for winter snow removal across
            Watertown &amp; Northern New York. Great pay, steady work, and a
            crew that keeps the North Country moving. Apply in two minutes below.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#apply" className="btn-primary btn-lg">
              Apply Today
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={site.phone.href} className="btn-ghost-light btn-lg">
              <PhoneIcon className="h-5 w-5" />
              Call {site.phone.display}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-frost-100">
            {[
              "Great pay",
              "Steady winter work",
              "Watertown, NY & the North Country",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gold-400" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Open positions</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Winter snow removal positions available
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Whether you run heavy equipment or want to grab a shovel and get to
              work, there&apos;s a spot on the crew. No job is too big or too
              small.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {positions.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-pine-100 bg-white p-7 shadow-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-frost-50 text-frost-600">
                  <p.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{p.body}</p>
                <Link
                  href={`/careers?position=${encodeURIComponent(
                    p.title.replace(/s$/, "")
                  )}#apply`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-pine-700 hover:gap-2.5"
                >
                  Apply for this role
                  <ArrowRightIcon className="h-4 w-4 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WORK HERE ===== */}
      <section className="bg-pine-50/50 py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Why Lakeside</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              A good place to put in an honest day&apos;s work
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-pine-100 bg-white p-7 shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400/15 text-gold-600">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION ===== */}
      <section id="apply" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Left rail */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-pine-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-pine-800">
              <SnowIcon className="h-4 w-4" />
              Hiring now
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Ready to join the crew?
            </h2>
            <p className="mt-3 text-ink-muted">
              Send us your info and {site.phone.contactName} will follow up about
              next steps. Prefer to talk? Call anytime.
            </p>

            <a
              href={site.phone.href}
              className="mt-6 flex items-center gap-4 rounded-2xl bg-pine-800 p-5 text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-gold-400 text-ink">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-frost-200">
                  Call {site.phone.contactName} about a job
                </span>
                <span className="block font-display text-2xl font-bold">
                  {site.phone.display}
                </span>
              </span>
            </a>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600" />
                Based in {site.address.city}, {site.address.state} — serving the
                North Country
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <CheckIcon
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600"
                  strokeWidth={2.5}
                />
                Locally owned and operated since {site.foundedYear}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <CheckIcon
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600"
                  strokeWidth={2.5}
                />
                New to the work? We train the right people
              </li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <Suspense
              fallback={
                <div className="rounded-2xl border border-pine-100 bg-white p-8 shadow-card">
                  <div className="h-6 w-40 animate-pulse rounded bg-pine-100" />
                  <div className="mt-4 h-40 animate-pulse rounded bg-pine-50" />
                </div>
              }
            >
              <ApplyForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
