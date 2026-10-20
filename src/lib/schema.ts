/**
 * JSON-LD schema builders for structured data.
 *
 * Each function returns a plain object that should be serialized with
 * JSON.stringify() and injected via <script type="application/ld+json">.
 * Keep these as functions (not constants) so they can use current values
 * from site.ts and per-page data at render time.
 *
 * Entity graph:
 *   FinancialService (#business)
 *     └── founder → Person (#person)
 *
 * Both inject globally via the root layout, so every page carries the
 * full entity graph for search engines and AI crawlers.
 *
 * Note: `telephone` (site.phone.tel) is published on both schemas. In
 * production it should match the Google Business Profile exactly, so
 * search engines can reconcile the website entity with the GBP +
 * directory citations (NAP consistency).
 */

import { site } from "./site";
import type { Article } from "./articles";
import { reviews } from "./reviews";

const PERSON_ID = `${site.url}/#person`;
const BUSINESS_ID = `${site.url}/#business`;

/**
 * Aggregate rating computed from the live `reviews` snapshot so the
 * published JSON-LD always matches the count and average of the reviews
 * actually rendered on the page. If the snapshot is empty, the function
 * returns `undefined` - don't emit a rating you can't back up.
 */
function computeAggregateRating() {
  if (!reviews.length) return undefined;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  const average = total / reviews.length;
  return {
    "@type": "AggregateRating",
    ratingValue: average.toFixed(1),
    reviewCount: reviews.length,
    ratingCount: reviews.length,
    bestRating: "5",
    worstRating: "1",
  };
}

/**
 * Per-review schema entries so Google can attach reviewer names + quotes
 * to the business's rich-result card, not just an average. Only emit
 * these for genuine reviews (see the note in lib/reviews.ts).
 */
function reviewsAsSchema() {
  return reviews.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
    datePublished: (() => {
      const d = new Date(r.date);
      return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
    })(),
    reviewBody: r.quote,
  }));
}

/**
 * The loan officer as a real person. Used by search engines and LLMs to
 * identify the human entity behind the business. Edit display values in
 * `site.loanOfficer` (lib/site.ts).
 */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    givenName: "Dan",
    familyName: "Opirhory",
    jobTitle: site.loanOfficer.jobTitle,
    description: site.loanOfficer.bio,
    image: `${site.url}${site.loanOfficer.headshotUrl}`,
    url: `${site.url}/about`,
    email: site.email,
    telephone: site.phone.tel,
    worksFor: { "@id": BUSINESS_ID },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NMLS",
      value: site.nmlsId.replace(/[^0-9]/g, ""),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "US",
    },
    knowsAbout: [
      "Mortgage lending",
      "VA loans",
      "FHA loans",
      "USDA loans",
      "Conventional mortgages",
      "Jumbo loans",
      "DSCR loans",
      "First-time homebuyer programs",
      "North Carolina real estate",
      "South Carolina real estate",
      "Texas real estate",
      "Tennessee real estate",
      "Georgia real estate",
    ],
    sameAs: (
      [
        site.socials.linkedin,
        site.socials.facebook,
        site.socials.instagram,
      ] as string[]
    ).filter((u) => u && u !== "#"),
  };
}

/**
 * The mortgage practice as a financial service business.
 *
 * Schema.org doesn't have a "MortgageBroker" type - `FinancialService` is
 * the closest official type. We add `additionalType` (a Wikipedia URL is
 * the established convention) and `serviceType` so search engines and
 * AI crawlers can recognize the mortgage-broker specialization.
 */
export function localBusinessSchema() {
  // Logo = team/brand mark (horizontal lockup). Image = headshot,
  // since that's the "primary representative photo" Google's
  // FinancialService schema expects, and the brand mark is better
  // served via the dedicated `logo` field.
  const logo = `${site.url}/images/logo-horizontal.png`;
  const image = `${site.url}${site.loanOfficer.headshotUrl}`;
  const aggregateRating = computeAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": ["Service", "FinancialService"],
    "@id": BUSINESS_ID,
    additionalType: "https://en.wikipedia.org/wiki/Mortgage_broker",
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    email: site.email,
    telephone: site.phone.tel,
    image,
    logo,
    priceRange: "$$",
    serviceType: [
      "Mortgage origination",
      "Home loan pre-approval",
      "Mortgage refinancing",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "South Carolina" },
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Tennessee" },
      { "@type": "State", name: "Georgia" },
      { "@type": "City", name: "Wilmington" },
      { "@type": "City", name: "Leland" },
      { "@type": "City", name: "Hampstead" },
      { "@type": "City", name: "Jacksonville" },
      { "@type": "City", name: "Raleigh" },
    ],
    knowsAbout: [
      "Mortgage loans",
      "VA loans",
      "FHA loans",
      "USDA loans",
      "Conventional loans",
      "Jumbo loans",
      "DSCR loans",
      "First-time homebuyer loans",
      "Mortgage refinancing",
      "Home financing",
    ],
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    // Link the business entity to the company's regulator ID so Google
    // can match the practice against the public NMLS record.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NMLS",
      value: site.companyNmls.replace(/[^0-9]/g, ""),
    },
    ...(aggregateRating && { aggregateRating }),
    ...(reviews.length && { review: reviewsAsSchema() }),
    sameAs: (
      [
        site.socials.linkedin,
        site.socials.facebook,
        site.socials.instagram,
      ] as string[]
    ).filter((u) => u && u !== "#"),
  };
}

/**
 * Parses an article's display date (e.g. "March 2026") into ISO 8601,
 * which is what Google expects for `datePublished` / `dateModified`.
 * Returns `undefined` on parse failure so the schema validator doesn't
 * choke on a garbage value.
 */
function toISODate(display: string): string | undefined {
  const parsed = new Date(display);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

export function articleSchema(article: Article) {
  const articleUrl = `${site.url}/resources/${article.slug}`;
  const isoDate = toISODate(article.date);
  const isoModified = article.lastUpdated
    ? toISODate(article.lastUpdated) ?? isoDate
    : isoDate;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    ...(isoDate && { datePublished: isoDate, dateModified: isoModified }),
    author: { "@id": PERSON_ID },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    // Uses the auto-generated per-route OG image so each article shares
    // a branded 1200×630 card. Next.js serves it at `<route>/opengraph-image`.
    image: `${articleUrl}/opengraph-image`,
    articleSection: article.category,
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(
  items: { label: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && { item: `${site.url}${item.href}` }),
    })),
  };
}

/**
 * WebSite entity for the domain. The `potentialAction` with SearchAction
 * tells Google the site supports site-search - sometimes earns a search
 * box directly under the organic result for branded queries ("dan
 * opirhory"). Even when it doesn't, the WebSite entity strengthens the
 * domain's entity graph.
 *
 * Inject once in the root layout - never duplicate on subpages.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/resources?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/**
 * Inline helper: returns the props for a <script> tag carrying the given
 * JSON-LD document. Usage:
 *
 *   <script {...jsonLd(localBusinessSchema())} />
 */
export function jsonLd(data: object) {
  return {
    type: "application/ld+json" as const,
    // Replace < with its unicode escape to prevent XSS injection via
    // malicious strings embedded in the JSON-LD payload. This follows the
    // recommendation in the local Next.js 16 JSON-LD guide.
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
