/**
 * Single source of truth for brand + contact data.
 *
 * Portfolio copy: contact details, license numbers, employer branding and
 * social links below are placeholders (555 phone, example.com email,
 * "Example Mortgage Company", "#" social links).
 *
 * Used by:
 * - <Header />, <Footer /> for display copy and CTAs
 * - lib/seo.ts for metadata defaults
 * - lib/schema.ts for JSON-LD structured data
 * - <ComplianceNotice /> for licensing disclosures
 * - <CTA />, <ContactCTAStrip />, etc. for the centralized "Get in Touch"
 *   label and href
 *
 * Note on phone:
 * In production the public phone should match the Google Business Profile
 * exactly, for NAP (Name / Address / Phone) consistency across the website,
 * GBP, and directory citations - a core local-SEO ranking signal. It feeds
 * structured data (schema.ts) and the click-to-call link in the footer.
 */
export const site = {
  name: "Dan Opirhory",
  /** Visible brand text in the header and footer. Kept separate from
   *  `name` so titles, schema, and sentence-level copy stay clean. */
  brandLabel: "Dan Opirhory Mortgage Advisor",
  legalName: "Example Mortgage Company",
  tagline: "Veteran discipline. Investor strategy.",
  description:
    "Army Veteran and mortgage loan officer specializing in VA, investment, and luxury financing across NC, SC, TX, TN, and GA. Disciplined execution, investor-sharp strategy - Dan Opirhory at Example Mortgage Company.",

  url: "https://www.danopirhory.com",

  email: "hello@example.com",

  /**
   * Public phone. `display` is the human format; `tel` is E.164 for tel:
   * links and JSON-LD `telephone`.
   */
  phone: {
    display: "(555) 010-0100",
    tel: "+15550100100",
  },

  nmlsId: "NMLS #0000000",
  companyNmls: "Company NMLS #0000000",

  /**
   * External application URL (the lender's online application portal).
   * Every "Apply Now" / "Get Pre-Approved" CTA on the site points here.
   * Buttons that detect an http(s) href open this in a new tab with
   * proper security attributes automatically.
   */
  applicationUrl: "https://example.com/apply",

  /**
   * Centralized contact CTA - used by Header, Hero, CTA, ContactCTAStrip, etc.
   * Edit the label here to update every "Get in Touch" button on the site.
   */
  contactCta: {
    label: "Get in Touch",
    href: "/contact",
  },

  /**
   * Public profile of the loan officer. Drives the Person JSON-LD on
   * every page and the visible bio on /about.
   */
  loanOfficer: {
    jobTitle: "Mortgage Loan Officer",
    bio: "Dan Opirhory is a veteran mortgage loan officer who helps military families use their VA benefit, and helps investors and first-time buyers structure financing around a long-term plan. He brings a disciplined, numbers-driven, and service-minded approach to every mortgage conversation.",
    headshotUrl: "/images/headshot.jpg",
  },

  address: {
    street: "123 Example St, Suite 100",
    city: "Fayetteville",
    state: "NC",
    zip: "00000",
  },

  /** Placeholder social links. "#" values are filtered out of JSON-LD
   *  `sameAs` in lib/schema.ts. */
  socials: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },

  licensingDisclosure:
    "Example Mortgage Company LLC | NMLS ID #0000000 | www.nmlsconsumeraccess.org | Licensed in NC, SC, TX, TN, and GA | 123 Example St, Suite 100, Fayetteville, NC 00000 | (555) 010-0100",
  equalHousingDisclosure:
    "Equal Housing Opportunity. Example Mortgage Company is an equal housing lender.",
} as const;
