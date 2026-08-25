import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneLink } from "@/components/PhoneLink";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-pine-700">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page may have moved. Let&apos;s get you back on track, or just give
        {" "}
        {site.phone.contactName} a call.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-pine btn-lg">
          Back to home
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
        <PhoneLink className="btn-outline btn-lg" iconClassName="h-5 w-5" />
      </div>
    </section>
  );
}
