import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.shortBrand,
    description:
      "Commercial & residential landscaping and snow management in Watertown & Northern NY.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e4e35",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
