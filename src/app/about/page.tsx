import type { Metadata } from "next";
import { site } from "@/lib/site";
import { SectionHeading, CtaBand, Reviews } from "@/components/sections";
import { Photo } from "@/components/Photo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import {
  ShieldIcon,
  MapPinIcon,
  ClockIcon,
  LeafIcon,
  ArrowRightIcon,
} from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "About Lakeside Outdoor Services | Watertown, NY",
  description:
    "Locally owned and operated since 2010, Lakeside Outdoor Services is Watertown NY's trusted company for commercial & residential landscaping and snow management. Meet the team behind the reliability.",
  path: "/about",
});

const values = [
  {
    icon: ClockIcon,
    title: "Reliability first",
    body: "We compete on showing up, on time, every storm, every service day. That's the whole promise.",
  },
  {
    icon: MapPinIcon,
    title: "Local & concentrated",
    body: "A tight service area around Watertown & Fort Drum means faster response and crews who know your property.",
  },
  {
    icon: ShieldIcon,
    title: "Professional & insured",
    body: "Fully insured, digitally dispatched, with documented service. The standard commercial clients expect.",
  },
  {
    icon: LeafIcon,
    title: "Quality over the low bid",
    body: "We're for customers who value good work, the detail and care that a cheap operator can't deliver.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="relative overflow-hidden bg-frost-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, #081a2b, #155681)" }}
        />
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} light />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Trusted in Watertown since {site.foundedYear}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-frost-100">
            Locally owned, professionally run, and built on a simple idea: do
            great work, show up when you say you will, and treat every property
            like it matters.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-lake max-w-none text-lg">
            <p>
              {site.legalName} has been caring for properties across Watertown
              and Northern New York since {site.foundedYear}. What started as a
              dependable snow plowing operation has grown into a full-service
              landscaping and property maintenance company, but the reason
              customers stay with us hasn&apos;t changed: we&apos;re reliable.
            </p>
            <p>
              We deliberately keep a concentrated service area in and around
              Watertown and Fort Drum. That focus is our advantage. When a
              lake-effect storm buries the region, our trucks reach your property
              fast, no delays, no excuses. And in summer, that same local
              commitment means consistent, detailed grounds care from crews who
              know your property.
            </p>
            <p>
              Whether you&apos;re a business protecting your image and liability
              or a homeowner who simply wants it done right, you get the same
              thing from us: professional, insured, dependable service from a
              team that answers the phone. Ask for {site.phone.contactName}.
            </p>
            <PhoneLink
              className="btn-pine btn-lg not-prose mt-2"
              iconClassName="h-5 w-5"
              label={`Call or Text ${site.phone.contactName} · ${site.phone.display}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo
              src="/photos/residential-lawn.jpg"
              alt="A freshly striped residential lawn cared for by Lakeside in Watertown NY"
              className="aspect-[3/4]"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
            <Photo
              src="/photos/fleet-lineup.jpg"
              alt="Lakeside Outdoor Services plow truck fleet, serving Watertown since 2010"
              className="mt-8 aspect-[3/4]"
              sizes="(max-width: 1024px) 45vw, 24vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-4 sm:pb-6">
        <div className="container-x">
          <figure className="mx-auto max-w-4xl">
            <Photo
              src="/photos/crew-truck.jpg"
              alt="The Lakeside Outdoor Services team by the truck in Watertown, New York"
              className="aspect-[16/9] w-full"
              rounded="rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <figcaption className="mt-3 text-center text-sm text-ink-muted">
              The Lakeside crew, the people who show up for your property, every
              season.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-frost-50/50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind the reliability"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-pine-700 text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="btn-primary btn-lg">
              Work with a company you can count on
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      <CtaBand />
    </>
  );
}
