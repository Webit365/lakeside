import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/** Fixed bottom action bar on mobile — always-visible call + quote CTAs. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-pine-100 bg-white/95 p-2.5 backdrop-blur lg:hidden">
      <a href={site.phone.href} className="btn-pine btn-md" data-cta="call">
        <PhoneIcon className="h-5 w-5" />
        Call Now
      </a>
      <Link href="/contact" className="btn-primary btn-md">
        Free Quote
      </Link>
    </div>
  );
}
