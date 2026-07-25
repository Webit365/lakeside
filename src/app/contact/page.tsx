import type { Metadata } from "next";
import { Suspense } from "react";
import { site, serviceAreas } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { Photo } from "@/components/Photo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ShieldIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = pageMeta({
  title: "Contact Us & Free Quote | Lakeside Outdoor Services, Watertown NY",
  description:
    "Request a free, no-obligation quote for landscaping, snow plowing, or property maintenance in Watertown & Northern NY. Call (315) 777-1809 or fill out our quick form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #081a2b 0%, #103a5f 50%, #172a54 100%)" }}
        />
        <div className="container-x relative py-12 lg:py-16">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} light />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Get your free, no-obligation quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-frost-100">
            Commercial or residential — tell us about your property and we&apos;ll
            get you an honest quote fast. Prefer to talk? Call or Text {site.phone.contactName}{" "}
            directly.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Contact details */}
          <div className="lg:sticky lg:top-28">
            <a
              href={site.phone.href}
              className="flex items-center gap-4 rounded-2xl bg-pine-800 p-5 text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-gold-400 text-ink">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-frost-200">
                  Call or Text {site.phone.contactName} now
                </span>
                <span className="block font-display text-2xl font-bold">
                  {site.phone.display}
                </span>
              </span>
            </a>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600" />
                <span>
                  <span className="block text-sm font-semibold text-ink">Email</span>
                  <a href={`mailto:${site.email}`} className="text-pine-700 hover:underline">
                    {site.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600" />
                <span>
                  <span className="block text-sm font-semibold text-ink">Location</span>
                  <span className="text-ink-muted">
                    {site.address.street}, {site.address.city}, {site.address.state}{" "}
                    {site.address.zip}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600" />
                <span>
                  <span className="block text-sm font-semibold text-ink">Hours</span>
                  <span className="text-ink-muted">{site.hours.display}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-pine-600" />
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    Fully insured
                  </span>
                  <span className="text-ink-muted">
                    Certificates of insurance available on request
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-pine-100 bg-frost-50/50 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-pine-700">
                Serving
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink-soft shadow-sm"
                  >
                    <CheckIcon className="h-3 w-3 text-pine-500" strokeWidth={3} />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <Photo
              src="/photos/crew-truck.jpg"
              alt="The Lakeside Outdoor Services team ready to help in Watertown NY"
              className="mt-6 aspect-[16/9] w-full"
              rounded="rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
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
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
