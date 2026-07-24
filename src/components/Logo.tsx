import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Text-based wordmark logo. Fast, sharp on every screen, and no image request.
 * To swap in Dave's real logo: drop the file in /public and replace the inner
 * markup with a next/image <Image src="/logo.svg" ... />.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl shadow-card ${
          light ? "bg-white/15 backdrop-blur" : "bg-pine-700"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          {/* Pine tree over a lake line */}
          <path
            d="M12 3l4 6h-2.5l3 4.5H13V17h-2v-3.5H7.5l3-4.5H8l4-6Z"
            fill={light ? "#ffffff" : "#f9bd24"}
          />
          <path
            d="M4 19c1.5-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0"
            stroke={light ? "#ffffff" : "#93cdfd"}
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Lakeside
        </span>
        <span
          className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/70" : "text-pine-600"
          }`}
        >
          Outdoor Services
        </span>
      </span>
    </Link>
  );
}
