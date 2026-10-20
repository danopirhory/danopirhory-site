import type { Metadata } from "next";
import { site } from "./site";

/**
 * Build page-level metadata that inherits the global defaults.
 *
 * - `title` is passed as a string so the root layout's `title.template`
 *   ("%s - Dan Opirhory") applies to the <title> tag automatically.
 * - `openGraph.title` and `twitter.title` are set explicitly with the brand
 *   suffix because Next.js does not apply the template to those fields.
 * - `alternates.canonical` is set to the absolute URL so every indexed
 *   page has a single, self-referencing canonical - blocks duplicate
 *   content issues from URL parameters or trailing-slash variants.
 * - `openGraph.type` defaults to `"website"` but can be overridden to
 *   `"article"` from article pages without re-stating the rest.
 *
 * The OpenGraph/Twitter image is intentionally NOT set here - the file
 * convention at `app/opengraph-image.tsx` handles it globally, and
 * individual routes can override by dropping their own
 * `opengraph-image.(jpg|png|tsx)` into that segment.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogType = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  ogType?: "website" | "article" | "profile";
}): Metadata {
  const url = `${site.url}${path}`;
  const desc = description ?? site.description;
  const fullTitle = `${title} - ${site.name}`;

  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: fullTitle,
  };

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      type: ogType,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/opengraph-image"],
    },
  };
}
