import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import logo from "../../public/brand/lakeside-logo.png";

/**
 * Real Lakeside Outdoor Services logo.
 * - On light backgrounds (header) it sits directly on the page.
 * - On dark backgrounds (footer, variant="light") the logo's black wordmark
 *   needs a light backing, so we place it on a subtle white chip.
 */
export function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <span
        className={
          light
            ? "inline-flex rounded-xl bg-white px-3 py-2 shadow-card"
            : "inline-flex"
        }
      >
        <Image
          src={logo}
          alt={`${site.legalName} logo`}
          priority={priority}
          className="h-10 w-auto lg:h-11"
          sizes="(max-width: 1024px) 160px, 176px"
        />
      </span>
    </Link>
  );
}
