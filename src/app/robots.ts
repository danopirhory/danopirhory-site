import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt generator.
 *
 * - Allows all user agents to crawl the full site.
 * - Disallows Next.js internal routes (`/_next/`) and API endpoints
 *   (`/api/`) from being indexed directly.
 * - Advertises the sitemap so search engines and AI crawlers can find it
 *   without an explicit submission.
 *
 * Note: the non-standard `host` directive was removed - it's not part of
 * the official Robots Exclusion Protocol or Next's `MetadataRoute.Robots`
 * schema, and no major crawler relies on it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
