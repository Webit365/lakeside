import type { FAQ } from "@/lib/services";
import { SectionHeading } from "./sections";

/** Accessible FAQ using native <details> — no JS, great for SEO + speed. */
export function FaqSection({
  faqs,
  eyebrow = "Questions",
  title = "Frequently asked questions",
}: {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
        <div className="mt-10 divide-y divide-pine-100 rounded-2xl border border-pine-100">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 py-1 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-bold text-ink marker:content-none">
                {f.q}
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-pine-50 text-pine-700 transition-transform group-open:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
