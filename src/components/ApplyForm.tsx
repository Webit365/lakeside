"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const positionOptions = [
  "Loader Operator",
  "Small Equipment Operator",
  "Shoveler",
  "Snow Plow Driver",
  "Landscaping / Lawn Crew",
  "Not sure, open to anything",
];

const inputCls =
  "w-full rounded-xl border border-pine-200 bg-white px-4 py-3 text-ink shadow-sm outline-none transition-colors placeholder:text-ink-muted/60 focus:border-pine-500 focus:ring-4 focus:ring-pine-100";
const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

export function ApplyForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  // Time-trap: first-render time on the client, used to reject instant bot
  // submissions (see /api/apply). Refs aren't hydrated, so this is the real
  // time the visitor's browser rendered the form.
  const mountedAt = useRef(Date.now());

  // Allow deep-linking a pre-selected position, e.g. /careers?position=Shoveler
  useEffect(() => {
    const p = params.get("position");
    if (p && positionOptions.includes(p)) setSelected([p]);
  }, [params]);

  const togglePosition = (p: string) =>
    setSelected((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {
      positions: selected.join(", "),
      elapsed: String(Date.now() - mountedAt.current),
    };
    fd.forEach((v, k) => {
      if (typeof v === "string") payload[k] = v;
    });

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      setSelected([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-pine-200 bg-pine-50 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-pine-600 text-white">
          <CheckIcon className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">
          Application received, thank you!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-ink-muted">
          {site.phone.contactName} will review your info and reach out about next
          steps. Want to talk sooner? Give us a call, we&apos;re hiring now.
        </p>
        <a href={site.phone.href} className="btn-pine btn-lg mx-auto mt-6">
          <PhoneIcon className="h-5 w-5" />
          Call {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-pine-100 bg-white p-6 shadow-card sm:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-ink">
        Apply today
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Fill this out and {site.phone.contactName} will get right back to you.
        Fields marked * are required. Prefer to call?{" "}
        <a href={site.phone.href} className="font-semibold text-pine-700 underline">
          {site.phone.display}
        </a>
      </p>

      {/* Honeypot (hidden) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputCls}
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputCls}
            placeholder="(315) 555-0123"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={inputCls}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="town" className={labelCls}>
            Town you live in
          </label>
          <input
            id="town"
            name="town"
            className={inputCls}
            placeholder="Watertown, NY"
          />
        </div>
      </div>

      {/* Positions multi-select */}
      <fieldset className="mt-5">
        <legend className={labelCls}>Position(s) you&apos;re interested in</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {positionOptions.map((p) => {
            const on = selected.includes(p);
            return (
              <button
                type="button"
                key={p}
                onClick={() => togglePosition(p)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  on
                    ? "border-pine-600 bg-pine-600 text-white"
                    : "border-pine-200 bg-white text-ink-soft hover:border-pine-400"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="license" className={labelCls}>
            Valid driver&apos;s license?
          </label>
          <select
            id="license"
            name="license"
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Yes</option>
            <option>Yes, CDL</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="availability" className={labelCls}>
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Winter / seasonal snow work</option>
            <option>Year-round</option>
            <option>Weekends only</option>
            <option>On-call for snow events</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="experience" className={labelCls}>
          Relevant experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          className={inputCls}
          placeholder="Tell us about any equipment you've run (loaders, skid steers, plow trucks), snow removal, landscaping, or general labor experience. New to the work? Tell us that too, we train."
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error} You can also call us directly at{" "}
          <a href={site.phone.href} className="underline">
            {site.phone.display}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary btn-lg mt-6 w-full"
      >
        {status === "submitting" ? "Sending…" : "Submit My Application"}
      </button>

      <p className="mt-3 text-center text-xs text-ink-muted">
        We&apos;ll only use your info to consider you for a position and follow
        up. Lakeside Outdoor Services is an equal opportunity employer.
      </p>
    </form>
  );
}
