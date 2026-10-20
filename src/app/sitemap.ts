import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { loanPrograms } from "@/lib/loanPrograms";
import { locations } from "@/lib/locations";

/**
 * Static routes with assigned priorities. Homepage gets 1.0, the top-level
 * content hubs (loan-programs, service-areas, resources, contact) get 0.8
 * to signal they're the most important internal destinations. Secondary
 * pages get 0.6; legal pages get 0.3.
 */
const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/loan-programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-areas", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/va-loans-jacksonville-nc",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/va-loan-limits-onslow-county-nc",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/pcs-camp-lejeune-va-loan-guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/va-loan-vs-conventional-loan",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/best-neighborhoods-near-camp-lejeune",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  // Initiative B - Fort Liberty / Fayetteville cluster
  {
    path: "/va-loans-fayetteville-nc",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/fort-liberty-va-loan-guide",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/best-neighborhoods-near-fort-liberty",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/va-loan-limits-cumberland-county-nc",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  // Initiative B - Other NC bases
  {
    path: "/va-loans-cherry-point-nc",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/seymour-johnson-afb-va-loan-guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  // Initiative B - Cross-cutting
  {
    path: "/va-loan-pcs-checklist",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/funding-fee-waiver-disabled-veterans",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-realtors", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/loan-programs/first-time-homebuyer",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/loan-programs/relocation",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

/**
 * Parses an article's display date like "March 2026" into a Date. Falls
 * back to the current date if the input is malformed, safer than
 * throwing at build time.
 */
function parseArticleDate(display: string): Date {
  const parsed = new Date(display);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${site.url}${path}`,
      lastModified: buildTime,
      changeFrequency,
      priority,
    }),
  );

  const loanProgramEntries: MetadataRoute.Sitemap = Object.values(
    loanPrograms,
  ).map((p) => ({
    url: `${site.url}/loan-programs/${p.slug}`,
    lastModified: buildTime,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = Object.values(locations).map(
    (l) => ({
      url: `${site.url}/service-areas/${l.slug}`,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  // Articles use their own published date as `lastModified`, so Google
  // doesn't see every article as freshly updated on every deploy, which
  // would dilute the "freshness" signal for articles that actually ship.
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/resources/${a.slug}`,
    lastModified: parseArticleDate(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...loanProgramEntries,
    ...locationEntries,
    ...articleEntries,
  ];
}
