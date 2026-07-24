"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneLink } from "./PhoneLink";
import { PhoneIcon, ArrowRightIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-pine-900 text-pine-100 md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="font-medium">
            Serving Watertown, Fort Drum &amp; Northern New York since{" "}
            {site.foundedYear}
          </p>
          <div className="flex items-center gap-5">
            <span className="text-pine-200/80">{site.hours.display}</span>
            <PhoneLink className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-gold-300" />
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled
            ? "border-pine-100 bg-white/95 shadow-card backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.75rem]">
          <Logo />

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:bg-pine-50 hover:text-pine-800"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-pine-100 bg-white p-2 shadow-lift">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-pine-50"
                        >
                          <span className="block text-sm font-semibold text-ink">
                            {c.label}
                          </span>
                          {c.desc && (
                            <span className="mt-0.5 block text-xs text-ink-muted">
                              {c.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:bg-pine-50 hover:text-pine-800"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <PhoneLink className="btn-outline btn-md" iconClassName="h-4 w-4" />
            <Link href="/contact" className="btn-gold btn-md">
              Free Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <PhoneLink
              className="btn-pine btn-md !px-3"
              iconClassName="h-5 w-5"
              showLabel={false}
            />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-xl border border-pine-200 text-ink"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                    open ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                    open ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="container-x py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div
                key={item.label}
                className="border-b border-pine-100 py-1"
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenGroup((g) =>
                          g === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-base font-bold text-ink"
                      aria-expanded={openGroup === item.label}
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 transition-transform ${
                          openGroup === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" />
                      </svg>
                    </button>
                    {openGroup === item.label && (
                      <div className="pb-2 pl-3">
                        <Link
                          href={item.href}
                          className="block py-2 text-sm font-semibold text-pine-700"
                        >
                          All {item.label} →
                        </Link>
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block py-2 text-sm text-ink-soft"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/contact" className="btn-gold btn-lg w-full">
                Get My Free Quote
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a
                href={site.phone.href}
                className="btn-pine btn-lg w-full"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone.contactName} · {site.phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
