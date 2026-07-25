import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  HomeIcon,
  MowerIcon,
  LeafIcon,
  SnowIcon,
  StarIcon,
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
    "Residential Landscaping & Lawn Care in Watertown, NY | Lakeside Outdoor Services",
  description:
    "Professional residential landscaping, lawn mowing, and snow plowing in Watertown & Northern NY. For homeowners who want it done right — reliable, detailed, and dependable. Call (315) 777-1809.",
  path: "/residential-landscaping-watertown-ny",
});

const residentialFaqs = [
  {
    q: "Do you offer weekly lawn mowing for homeowners?",
    a: "Yes. Most residential clients are on a consistent weekly schedule so their lawn stays sharp all season. We set a service day and handle mowing, trimming, edging, and blowing off walks and drives every visit.",
  },
  {
    q: "Will the same crew take care of my property each time?",
    a: "We keep a concentrated local route and consistent crews, so the people caring for your property get to know it — how you like it done and what needs attention. That consistency is a big part of the quality difference.",
  },
  {
    q: "Can you handle my lawn in summer and plow my driveway in winter?",
    a: "Absolutely. Many homeowners use us year-round — mowing and landscaping in the warm months, dependable driveway snow plowing and salting in winter. One trusted local company, no gaps.",
  },
  {
    q: "Do you do landscape design and new plantings, or just maintenance?",
    a: "Both. We design and install custom landscaping — beds, plantings, mulch, and grading — and we maintain existing landscapes. Whether you want a refresh or a full redesign, we can help.",
  },
  {
    q: "How quickly will you plow my driveway after a storm?",
    a: "Because we keep a tight service area around Watertown and Fort Drum, our response is fast. We clear during and after storms based on your trigger depth, prioritizing getting you out for work on time.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Residential Landscaping & Lawn Care",
            description: metadata.description as string,
            path: "/residential-landscaping-watertown-ny",
          }),
          faqSchema(residentialFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Residential",
              path: "/residential-landscaping-watertown-ny",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #081a2b 0%, #155681 100%)" }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Residential" }]}
            light
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                <HomeIcon className="h-4 w-4" /> Residential Services
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] text-white sm:text-5xl">
                Residential Landscaping &amp; Lawn Care in Watertown, NY
              </h1>
              <p className="mt-5 max-w-xl text-lg text-frost-100">
                For homeowners who want it done right — not just done. Reliable
                mowing with a detailed finish, custom landscaping, and
                dependable driveway plowing from a local crew that treats your
                property with care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary btn-lg">
                  Get My Free Quote
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <PhoneLink
                  className="btn-ghost-light btn-lg"
                  iconClassName="h-5 w-5"
                  label={`Call ${site.phone.contactName} · ${site.phone.display}`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Photo
                src="/photos/residential-beds.jpg"
                alt="Freshly mulched beds and manicured landscaping at a Northern NY home"
                className="aspect-[3/4]"
                sizes="(max-width: 1024px) 45vw, 24vw"
                priority
              />
              <Photo
                src="/photos/residential-lawn.jpg"
                alt="A freshly striped residential lawn mowed by Lakeside in Watertown NY"
                className="mt-8 aspect-[3/4]"
                sizes="(max-width: 1024px) 45vw, 24vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="The quality difference"
            title="Service worth paying for"
            intro="You want your property cared for, not just cut. That's the standard we hold — the detail, reliability, and respect a good home deserves."
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MowerIcon,
                title: "Detailed, not rushed",
                body: "Clean edges, tidy trimming, and clippings blown off every walk and drive. Your property looks genuinely cared for, every visit.",
              },
              {
                icon: StarIcon,
                title: "Reliable & consistent",
                body: "The same crew, the same day, week after week. No no-shows, no guessing when your lawn will get done.",
              },
              {
                icon: CheckIcon,
                title: "One call, all seasons",
                body: "Mowing and landscaping in summer, plowing and salting in winter. Your whole property handled by one team you trust.",
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

      {/* SERVICES */}
      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Residential services" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Lawn Mowing & Maintenance", "/services/lawn-mowing-maintenance", MowerIcon],
              ["Landscape Design & Install", "/services/landscape-design-installation", LeafIcon],
              ["Spring & Fall Cleanups", "/services/spring-fall-cleanups", LeafIcon],
              ["Snow Plowing", "/services/snow-plowing", SnowIcon],
              ["Salting & De-Icing", "/services/salting-de-icing", SnowIcon],
              ["Top Soil, Gravel & Grading", "/services/topsoil-gravel-grading", HomeIcon],
            ].map(([label, href, Icon]) => {
              const I = Icon as typeof MowerIcon;
              return (
                <Link
                  key={href as string}
                  href={href as string}
                  className="group flex items-center gap-4 rounded-2xl border border-pine-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700">
                    <I className="h-6 w-6" />
                  </span>
                  <span className="font-bold text-ink">{label as string}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection
        faqs={residentialFaqs}
        eyebrow="Residential FAQ"
        title="Residential landscaping & snow — questions answered"
      />

      <CtaBand
        title="Give your property the care it deserves"
        subtitle="Free, no-obligation estimates for homeowners across Watertown and Northern New York."
      />
    </>
  );
}
