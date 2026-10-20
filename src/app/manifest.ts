import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Web app manifest. Served at `/manifest.webmanifest`. Next.js picks this
 * up via file convention and links it in <head> automatically.
 *
 * Keep theme_color in sync with `--color-ink` in globals.css.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6", // --color-cream
    theme_color: "#0b1b2b", // --color-ink
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
