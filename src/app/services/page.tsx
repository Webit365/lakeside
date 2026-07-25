import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { serviceIcons, ArrowRightIcon, SnowIcon, LeafIcon } from "@/components/icons";
import { SectionHeading, CtaBand, TrustBar } from "@/components/sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Services | Landscaping & Snow Management in Watertown, NY",
  description:
    "Full-service commercial & residential landscaping, snow plowing, salting, lawn care, and property maintenance across Watertown & Northern New York. Explore all services.",
  path: "/services",
});

const winter = services.filter((s) => s.season === "winter");
const summer = services.filter((s) => s.season !== "winter");

function Grid({ list }: { list: typeof services }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => {
        const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
        return (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex flex-col rounded-2xl border border-pine-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-xl ${
                s.season === "winter"
                  ? "bg-frost-50 text-frost-600"
                  : "bg-pine-50 text-pine-700"
              }`}
            >
              {Icon && <Icon className="h-6 w-6" />}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {s.navLabel}
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink-muted">{s.heroSubhead}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pine-700 group-hover:gap-2.5">
              Learn more <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #081a2b, #155681)" }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} light />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Complete landscaping &amp; snow services for Northern NY
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-frost-100">
            Everything your property needs, all year, from one trusted local
            company. Available for both commercial and residential properties in
            Watertown, Fort Drum, and the surrounding communities.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Winter services"
            title={
              <span className="flex items-center gap-3">
                <SnowIcon className="h-8 w-8 text-frost-500" /> Snow &amp; ice
                management
              </span>
            }
            intro="Keep your property open, accessible, and safe through every Northern New York winter."
          />
          <Grid list={winter} />
        </div>
      </section>

      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Warm-season services"
            title={
              <span className="flex items-center gap-3">
                <LeafIcon className="h-8 w-8 text-pine-600" /> Landscaping &amp;
                grounds care
              </span>
            }
            intro="Professional landscaping and lawn care that keeps your property sharp from spring through fall."
          />
          <Grid list={summer} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
