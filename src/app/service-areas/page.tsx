import type { Metadata } from "next";
import Link from "next/link";
import { site, serviceAreas } from "@/lib/site";
import { SectionHeading, CtaBand, TrustBar } from "@/components/sections";
import { FaqSection } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { MapPinIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title: "Service Areas | Landscaping & Snow Plowing Across Northern NY",
  description:
    "Lakeside Outdoor Services covers Watertown, Fort Drum, Clayton, Alexandria Bay, the Thousand Islands & surrounding Northern New York communities for landscaping and snow management.",
  path: "/service-areas",
});

const areaFaqs = [
  {
    q: "Do you offer snow removal near me in Fort Drum?",
    a: "Yes. Fort Drum and the neighboring communities of Evans Mills, Black River, and Calcium are a core part of our route. We plow and salt for rental properties, local businesses, and homeowners across the Fort Drum area, with 24/7 response through winter storms so your driveway or lot is clear when you need to get moving.",
  },
  {
    q: "Which towns does Lakeside Outdoor Services plow and landscape?",
    a: "We serve Watertown, Fort Drum, Evans Mills, Black River, Adams, Carthage, Clayton, Cape Vincent, Alexandria Bay, Wellesley Island, Sackets Harbor, Brownville, Calcium, Dexter, and the Thousand Islands. We keep the route concentrated in and around Jefferson County on purpose, because a tighter footprint means faster, more reliable service for everyone on it.",
  },
  {
    q: "How fast can you reach my property during a lake-effect storm?",
    a: "Fast, because we don't stretch our crews across three counties. During a storm our trucks run assigned priority routes continuously and cycle back as the snow keeps falling, rather than waiting for a set depth or a phone call. The difference between a plow company eight minutes away and one 40 minutes away is whether your property is open at 7am.",
  },
  {
    q: "Do you provide snow plowing in the Thousand Islands, Clayton, and Alexandria Bay?",
    a: "Yes. We cover Clayton, Cape Vincent, Alexandria Bay, and Wellesley Island. River-community properties, including seasonal homes and waterfront businesses, get the same continuous storm coverage and seasonal-contract options as the rest of our route.",
  },
  {
    q: "My town isn't on your list. Can you still help?",
    a: "If you're near Watertown, call or text Dave at (315) 777-1809 before you assume the answer is no. We sometimes take on properties just outside the core route when it fits our schedule, especially commercial sites and seasonal snow contracts.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ]),
          faqSchema(areaFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #081a2b, #155681)" }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]} light />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Serving Watertown &amp; the North Country
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-frost-100">
            We keep a concentrated service area around Watertown and Fort Drum on
            purpose, it&apos;s how we respond fast and reliably to every property
            on our route, storm after storm.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Communities we proudly serve"
              intro="From Watertown and Fort Drum out to the Thousand Islands, we cover the towns and communities of Jefferson County and Northern New York."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-xl border border-pine-100 bg-white px-3 py-2.5 text-sm font-medium text-ink-soft shadow-sm"
                >
                  <MapPinIcon className="h-4 w-4 flex-shrink-0 text-pine-500" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-muted">
              Don&apos;t see your town? If you&apos;re near Watertown, give us a
              call, we may still be able to help.
            </p>
            <Link href="/contact" className="btn-pine btn-lg mt-6">
              Check availability for my property
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
          <Photo
            src="/photos/fleet-plows.jpg"
            alt={`Lakeside plow trucks serving ${site.address.city}, Fort Drum, and the Thousand Islands`}
            className="aspect-square w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <FaqSection
        faqs={areaFaqs}
        eyebrow="Service areas"
        title="Snow removal & landscaping near you"
      />

      <CtaBand />
    </>
  );
}
