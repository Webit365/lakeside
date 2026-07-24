import type { Metadata } from "next";
import Link from "next/link";
import { site, serviceAreas } from "@/lib/site";
import { SectionHeading, CtaBand, TrustBar } from "@/components/sections";
import { PhotoSlot } from "@/components/Media";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { MapPinIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title: "Service Areas | Landscaping & Snow Plowing Across Northern NY",
  description:
    "Lakeside Outdoor Services covers Watertown, Fort Drum, Clayton, Alexandria Bay, the Thousand Islands & surrounding Northern New York communities for landscaping and snow management.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />

      <section className="relative overflow-hidden bg-pine-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #0a1d15, #1e4e35)" }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]} light />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Serving Watertown &amp; the North Country
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pine-100">
            We keep a concentrated service area around Watertown and Fort Drum on
            purpose — it&apos;s how we respond fast and reliably to every property
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
              call — we may still be able to help.
            </p>
            <Link href="/contact" className="btn-pine btn-lg mt-6">
              Check availability for my property
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
          <PhotoSlot
            theme="commercial"
            className="aspect-square w-full"
            icon={<MapPinIcon />}
            label={`${site.address.city} · Fort Drum · Thousand Islands`}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
