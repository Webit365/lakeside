import Link from "next/link";
import { site } from "@/lib/site";
import {
  ShieldIcon,
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
} from "./icons";

/** Section heading block with eyebrow + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
      )}
    </div>
  );
}

const trustItems = [
  { icon: ShieldIcon, label: "Fully Insured", sub: "COI on request" },
  { icon: ClockIcon, label: "Since 2010", sub: "15+ years local" },
  { icon: TruckIcon, label: "Digitally Dispatched", sub: "Tracked trucks" },
  { icon: MapPinIcon, label: "Watertown-Based", sub: "Fast response" },
];

/** Thin trust bar of credibility badges. */
export function TrustBar() {
  return (
    <section className="border-y border-pine-100 bg-pine-50/60">
      <div className="container-x grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white text-pine-700 shadow-card">
              <t.icon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-ink">
                {t.label}
              </span>
              <span className="block text-xs text-ink-muted">{t.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Full-width gold/pine CTA band. */
export function CtaBand({
  title = "Get a free, no-obligation estimate",
  subtitle = "Tell us about your property and we'll get you a fast, honest quote. Commercial contracts and quality residential service welcome.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #93cdfd 0, transparent 40%), radial-gradient(circle at 80% 80%, #f9bd24 0, transparent 45%)",
        }}
      />
      <div className="container-x relative flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-pine-100">{subtitle}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary btn-lg">
            Request My Quote
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a href={site.phone.href} className="btn-white btn-lg">
            <PhoneIcon className="h-5 w-5" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

// First entry is a real, verified Google review. The other two are clearly
// labeled layout placeholders — paste your favorite real Google reviews here
// (reviewer first name + last initial + town) to replace them.
const reviews = [
  {
    text: "The best company out there!",
    name: "Samantha W.",
    detail: "Google review · Watertown",
    real: true,
  },
  {
    text: "Add a real review here — a commercial client praising reliable, on-time plowing and salting all winter works especially well for converting other businesses.",
    name: "Your review here",
    detail: "Commercial · Watertown",
    real: false,
  },
  {
    text: "Add a real review here — a residential customer praising detailed, professional lawn care reinforces the quality positioning.",
    name: "Your review here",
    detail: "Residential · Northern NY",
    real: false,
  },
];

export function Reviews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6" />
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-ink-muted">
            Rated {site.rating.value}★ from {site.rating.count} reviews across
            Northern NY
          </p>
          <SectionHeading
            align="center"
            title="Trusted by businesses and homeowners across the North Country"
            className="mt-4"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`card flex flex-col p-6 ${
                r.real ? "" : "border-dashed opacity-70"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                {!r.real && (
                  <span className="rounded bg-pine-50 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-ink-muted">
                    Sample slot
                  </span>
                )}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-soft">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-pine-100 pt-4">
                <span className="block text-sm font-bold text-ink">
                  {r.name}
                </span>
                <span className="block text-xs text-ink-muted">{r.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          Showing your real {site.rating.value}★ Google rating ({site.rating.count}{" "}
          reviews). Replace the two “sample slot” cards with your favorite real
          reviews — see <code>src/components/sections.tsx</code>.
        </p>
      </div>
    </section>
  );
}

/** Checklist bullet used throughout. */
export function Ticked({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-pine-100 text-pine-700">
        <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <span className="text-ink-soft">{children}</span>
    </li>
  );
}
