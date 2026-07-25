"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires GA4 events when a visitor clicks a call link (tel:) or a quote CTA
 * (a link to /contact). Uses event delegation on the document, so every call
 * and quote button across the site is tracked without per-button wiring.
 *
 * Events (mark these as Key Events in GA4 to count them as conversions):
 *   - call_click   → any tel: link (header, hero, footer, mobile bar, etc.)
 *   - quote_click  → any "Get a Quote / Free Quote" button (links to /contact)
 */
export function CtaTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (typeof window.gtag !== "function") return;
      const target = e.target as Element | null;
      const a = target?.closest("a");
      if (!a) return;

      const href = a.getAttribute("href") || "";
      const label = (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
      const params = {
        link_text: label,
        link_url: href,
        page_path: window.location.pathname,
      };

      if (href.startsWith("tel:")) {
        window.gtag("event", "call_click", params);
      } else if (
        href === "/contact" ||
        href.startsWith("/contact?") ||
        href.startsWith("/contact/")
      ) {
        window.gtag("event", "quote_click", params);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
