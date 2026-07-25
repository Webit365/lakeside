import Link from "next/link";
import { site, serviceAreas } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-pine-950 text-pine-100">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-5 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready for reliable service you don&apos;t have to think about?
            </h2>
            <p className="mt-2 text-pine-200">
              Free, no-obligation estimates for commercial and residential
              properties across Northern NY.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary btn-lg">
              Get My Free Quote
            </Link>
            <a href={site.phone.href} className="btn-ghost-light btn-lg">
              <PhoneIcon className="h-5 w-5" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pine-200/90">
            Commercial &amp; residential landscaping, snow plowing, and property
            maintenance in Watertown &amp; Northern New York. Fully insured,
            digitally dispatched, trusted since {site.foundedYear}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              Fully Insured
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              Since {site.foundedYear}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              Locally Owned
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/commercial-landscaping-watertown-ny"
                className="text-pine-200 hover:text-white"
              >
                Commercial Landscaping
              </Link>
            </li>
            <li>
              <Link
                href="/residential-landscaping-watertown-ny"
                className="text-pine-200 hover:text-white"
              >
                Residential Landscaping
              </Link>
            </li>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-pine-200 hover:text-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {serviceAreas.slice(0, 12).map((area) => (
              <li key={area} className="text-pine-200">
                {area}
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="mt-3 inline-block text-sm font-semibold text-gold-300 hover:text-gold-200"
          >
            View all areas →
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href={site.phone.href}
                className="flex items-start gap-3 text-pine-100 hover:text-white"
              >
                <PhoneIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-300" />
                <span>
                  <span className="block font-semibold">
                    {site.phone.display}
                  </span>
                  <span className="text-xs text-pine-300">
                    Ask for {site.phone.contactName}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-pine-100 hover:text-white"
              >
                <MailIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-300" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-pine-200">
              <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-300" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
            <li className="flex items-start gap-3 text-pine-200">
              <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-300" />
              <span>{site.hours.display}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-pine-300 md:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-pine-400">
            Landscaping &amp; Snow Management · Watertown, NY &amp; the North
            Country
          </p>
        </div>
      </div>
    </footer>
  );
}
