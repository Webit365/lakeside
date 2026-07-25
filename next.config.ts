import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    // When you add real photos, next/image will optimize them automatically.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Preserve equity from the previous WordPress site's URLs. The old blog
    // (/tips-tricks/) has no 1:1 equivalent on the new site, so send it to the
    // closest topical match (services) rather than the homepage.
    // NOTE: add precise per-URL 301s here once the old sitemap / Search Console
    // "Pages" export is available — see SEO report.
    return [
      { source: "/tips-tricks", destination: "/services", permanent: true },
      { source: "/tips-tricks/:slug*", destination: "/services", permanent: true },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
