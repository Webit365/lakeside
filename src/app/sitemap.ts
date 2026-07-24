import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/lib/services";
import { baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/commercial-landscaping-watertown-ny", priority: 0.95, freq: "weekly" },
    { path: "/residential-landscaping-watertown-ny", priority: 0.9, freq: "weekly" },
    { path: "/services", priority: 0.8, freq: "monthly" },
    { path: "/service-areas", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
  ];

  const servicePaths = serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.85,
    freq: "monthly" as const,
  }));

  return [...staticPaths, ...servicePaths].map((p) => ({
    url: `${baseUrl}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
