"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon, BuildingIcon, HomeIcon } from "./icons";

type Mode = "residential" | "commercial";
type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Snow Plowing",
  "Salting & De-Icing",
  "Snow Removal / Hauling",
  "Lawn Mowing & Maintenance",
  "Landscape Design & Install",
  "Property Maintenance",
  "Spring / Fall Cleanup",
  "Top Soil / Gravel / Grading",
];

const inputCls =
  "w-full rounded-xl border border-pine-200 bg-white px-4 py-3 text-ink shadow-sm outline-none transition-colors placeholder:text-ink-muted/60 focus:border-pine-500 focus:ring-4 focus:ring-pine-100";
const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

export function QuoteForm() {
  const params = useSearchParams();
  const [mode, setMode] = useState<Mode>("residential");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (params.get("type") === "commercial") setMode("commercial");
  }, [params]);

  const toggleService = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = { type: mode, services: selected.join(", ") };
    fd.forEach((v, k) => {
      if (typeof v === "string") payload[k] = v;
    });

    try {
      const res = await fetch("/api/quote", {
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
          Request received — thank you!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-ink-muted">
          {site.phone.contactName} will review your details and get back to you
          with a quote shortly. Need to talk now? Give us a call.
        </p>
        <a href={site.phone.href} className="btn-pine btn-lg mx-auto mt-6">
          <PhoneIcon className="h-5 w-5" />
          Call {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-pine-100 bg-white p-6 shadow-card sm:p-8">
      {/* Mode toggle */}
      <div className="grid grid-cols-2 gap-2 rounded-xl bg-pine-50 p-1.5">
        <button
          type="button"
          onClick={() => setMode("residential")}
          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
            mode === "residential"
              ? "bg-white text-pine-800 shadow-card"
              : "text-ink-muted hover:text-ink"
          }`}
          aria-pressed={mode === "residential"}
        >
          <HomeIcon className="h-5 w-5" /> Residential
        </button>
        <button
          type="button"
          onClick={() => setMode("commercial")}
          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
            mode === "commercial"
              ? "bg-white text-pine-800 shadow-card"
              : "text-ink-muted hover:text-ink"
          }`}
          aria-pressed={mode === "commercial"}
        >
          <BuildingIcon className="h-5 w-5" /> Commercial
        </button>
      </div>

      <p className="mt-4 text-sm text-ink-muted">
        {mode === "commercial"
          ? "Tell us about your property and we'll prepare a commercial bid. Fields marked * are required."
          : "Quick quote — fill this out and we'll get right back to you. Fields marked * are required."}
      </p>

      {/* Honeypot (hidden) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            {mode === "commercial" ? "Contact name" : "Name"} *
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Jane Smith" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone *
          </label>
          <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="(315) 555-0123" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email {mode === "commercial" ? "*" : ""}
          </label>
          <input id="email" name="email" type="email" required={mode === "commercial"} className={inputCls} placeholder="you@email.com" autoComplete="email" />
        </div>
        {mode === "commercial" ? (
          <div>
            <label htmlFor="company" className={labelCls}>
              Company / property name
            </label>
            <input id="company" name="company" className={inputCls} placeholder="Northside Plaza LLC" autoComplete="organization" />
          </div>
        ) : (
          <div>
            <label htmlFor="propertyType" className={labelCls}>
              Property type
            </label>
            <select id="propertyType" name="propertyType" className={inputCls} defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Single-family home</option>
              <option>Townhome / condo</option>
              <option>Multi-family / rental</option>
              <option>Other</option>
            </select>
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelCls}>
            Property address {mode === "commercial" ? "*" : ""}
          </label>
          <input id="address" name="address" required={mode === "commercial"} className={inputCls} placeholder="123 Main St, Watertown, NY" autoComplete="street-address" />
        </div>

        {mode === "commercial" && (
          <>
            <div>
              <label htmlFor="propertySize" className={labelCls}>
                Property size / # of lots
              </label>
              <input id="propertySize" name="propertySize" className={inputCls} placeholder="e.g. 2-acre lot, 3 entrances" />
            </div>
            <div>
              <label htmlFor="timeline" className={labelCls}>
                Timeline
              </label>
              <select id="timeline" name="timeline" className={inputCls} defaultValue="">
                <option value="" disabled>Select…</option>
                <option>ASAP</option>
                <option>Before this winter season</option>
                <option>This spring / summer</option>
                <option>Planning ahead</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Services multi-select */}
      <fieldset className="mt-5">
        <legend className={labelCls}>Services you&apos;re interested in</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const on = selected.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  on
                    ? "border-pine-600 bg-pine-600 text-white"
                    : "border-pine-200 bg-white text-ink-soft hover:border-pine-400"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          Anything else we should know?
        </label>
        <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Tell us about your property, current pain points, or specific needs…" />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error} You can also call us directly at{" "}
          <a href={site.phone.href} className="underline">{site.phone.display}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary btn-lg mt-6 w-full"
      >
        {status === "submitting" ? "Sending…" : mode === "commercial" ? "Request My Commercial Bid" : "Get My Free Quote"}
      </button>

      <p className="mt-3 text-center text-xs text-ink-muted">
        No spam, no obligation. We&apos;ll only use your info to prepare your
        quote and follow up.
      </p>
    </form>
  );
}
