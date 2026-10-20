import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";

const PATH = "/best-neighborhoods-near-fort-liberty";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "Best Neighborhoods Near Fort Liberty",
  description:
    "Honest neighborhood-by-neighborhood breakdown for Fort Liberty military families: Spring Lake, Hope Mills, Haymount, Linden, Cameron, Sanford, Raeford.",
  path: PATH,
  ogType: "article",
});

const neighborhoods = [
  {
    name: "Spring Lake",
    slug: "spring-lake",
    commute: "5-15 minutes to the All American gate. One of the closest residential areas to a Fort Liberty gate. Slightly longer to other gates depending on your duty location.",
    price: "$150K-$300K typical for entry-level inventory. Newer subdivisions push toward $300K+. Strong VA buyer market.",
    schools: "Cumberland County Schools. Spring Lake area elementary options have meaningful military-family support given the constant PCS rotation.",
    vibe: "Heavy active-duty population. Inventory turns fast during PCS season. Mix of older homes and newer construction.",
    bestFor: "Active-duty soldiers who want the shortest possible commute, junior-enlisted households on tighter budgets, and first-time VA buyers.",
    flag: "Inventory moves fast. Be ready to make decisions during summer PCS season.",
  },
  {
    name: "Hope Mills",
    slug: "hope-mills",
    commute: "15-25 minutes to most Fort Liberty gates. Slightly longer commute traded for more space and established neighborhoods.",
    price: "$200K-$400K range. More lot for the dollar than Spring Lake. Newer construction in the upper end.",
    schools: "Cumberland County Schools, with established elementary, middle, and high school options well-regarded by local families.",
    vibe: "Family-oriented suburb with established neighborhoods and a town center. Less PCS-rotational than Spring Lake; more long-term residents.",
    bestFor: "Families with school-age kids who want stable schools, soldiers planning longer tours or post-retirement settlement.",
    flag: "Some properties sit in flood-prone zones along Rockfish Creek and tributaries. Verify flood-zone status before offering.",
  },
  {
    name: "Haymount and historic Fayetteville",
    slug: "haymount",
    commute: "10-20 minutes to most Fort Liberty gates depending on traffic.",
    price: "$300K-$600K+ depending on age, size, and lot. Character-rich older inventory; some restored historic homes push higher.",
    schools: "Cumberland County Schools. Magnet program access is a real differentiator for academically-focused families.",
    vibe: "Walkable, character-heavy, popular with senior NCOs, officers, retirees, and Fayetteville professionals. Older housing stock means VA appraisal condition reviews matter more.",
    bestFor: "Buyers who value character and walkability, senior-rank households, retirees staying in the area post-service.",
    flag: "Older homes can have deferred maintenance issues that trigger VA Minimum Property Requirement re-inspections. A buyer's agent who knows VA MPRs is essential.",
  },
  {
    name: "Linden and northern Cumberland",
    slug: "linden",
    commute: "15-25 minutes to Fort Liberty depending on which gate. Rural roads, lighter traffic.",
    price: "$200K-$500K with significant variance by lot size and home age. Larger acreage available throughout.",
    schools: "Cumberland County Schools. Smaller schools, tighter community feel.",
    vibe: "Real Carolina country. Larger lots, quieter, popular with senior NCOs and officers wanting space without the city density.",
    bestFor: "Families who want acreage, soldiers planning post-retirement settlement, buyers who prioritize space over commute time.",
    flag: "Some properties have private wells and septic systems. VA requires specific testing on both. Factor inspection costs accordingly.",
  },
  {
    name: "Cameron and Sanford",
    slug: "cameron-sanford",
    commute: "25-40 minutes to Fort Liberty gates depending on exact location and traffic.",
    price: "$200K-$450K typical. Sanford in particular has been growing, with newer subdivisions adding to the inventory.",
    schools: "Lee County Schools (Sanford) and Harnett County Schools (Cameron). Both have solid military-family integration.",
    vibe: "Smaller-town feel, real value for the dollar, popular with families planning to stay post-retirement.",
    bestFor: "Buyers wanting more space and lower cost, soldiers with longer tours or planning to retire in the area, civilians commuting to either Fort Liberty or the Triangle.",
    flag: "The longer commute matters. If you'll be driving the gate at 0500 every day, this isn't your neighborhood.",
  },
  {
    name: "Raeford and Hoke County",
    slug: "raeford",
    commute: "20-30 minutes to Fort Liberty's western gates.",
    price: "$200K-$400K typical. Newer subdivisions have added inventory variety.",
    schools: "Hoke County Schools. Smaller district with strong military-family support.",
    vibe: "Quiet, growing, more rural than Fayetteville proper. Mix of military families and civilians.",
    bestFor: "Buyers who want newer construction at competitive prices, soldiers stationed on the western side of base, families wanting smaller-school environments.",
    flag: "New construction often comes with HOA fees and required builder warranties. Read disclosure documents carefully before signing.",
  },
  {
    name: "Pinehurst and Southern Pines (Moore County)",
    slug: "pinehurst",
    commute: "35-50 minutes to Fort Liberty depending on gate and traffic. Worth it for the right family; not ideal for daily 0500 commuters.",
    price: "$300K-$800K+ with significant range. Pinehurst proper carries a real premium driven by golf and lifestyle demand.",
    schools: "Moore County Schools. Highly regarded across the district.",
    vibe: "Resort/golf community appeal, established neighborhoods, popular with senior officers and retirees. Different feel from Fayetteville proper.",
    bestFor: "Senior officers and retirees, families prioritizing schools and lifestyle, post-service buyers staying in the area.",
    flag: "Commute to Fort Liberty can be punishing during PCS season traffic. Consider this if you'll need to be on base early most days.",
  },
];

const faqs = [
  {
    q: "Which Fort Liberty neighborhood has the shortest commute?",
    a: "Spring Lake is the closest residential community to a major Fort Liberty gate (the All American gate) and consistently has the shortest commute for most active-duty soldiers. Haymount and central Fayetteville also offer reasonable commutes depending on which gate you use.",
  },
  {
    q: "Where do most active-duty soldiers at Fort Liberty live?",
    a: "Spring Lake and Hope Mills collectively absorb the majority of active-duty soldier housing demand outside the base. Spring Lake leans junior-enlisted and shortest-commute; Hope Mills trends toward more established families.",
  },
  {
    q: "Are Cumberland County schools good for military kids?",
    a: "Cumberland County Schools serve a heavily military-rotational population and have real systems for transferring students, supporting deployment-affected families, and integrating newcomers mid-year. Quality varies by specific school within the district. Research the elementary your prospective home is zoned for since that's usually the longest-term assignment.",
  },
  {
    q: "Should I buy in Pinehurst if I work at Fort Liberty?",
    a: "Possible, but think carefully. Pinehurst offers a meaningfully different lifestyle and stronger schools, but the commute can be punishing during PCS-season traffic. If you only need to be on base a few days a week or you're senior enough to accommodate a longer commute, it can work. For most active-duty soldiers, the commute math doesn't favor it.",
  },
  {
    q: "What about flood risk in these neighborhoods?",
    a: "Hope Mills (along Rockfish Creek), parts of Spring Lake, and some Linden properties have areas of flood exposure. Always confirm flood-zone status through FEMA and get a real flood-insurance quote before finalizing an offer. It can meaningfully affect your monthly housing cost.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Best Neighborhoods Near Fort Liberty for Military Families",
    description:
      "Neighborhood-by-neighborhood breakdown for Fort Liberty military families covering commute, price range, schools, and lifestyle for the most-asked-about areas.",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
    inLanguage: "en-US",
    articleSection: "Local Market",
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#business` },
    about: [
      { "@type": "Place", name: "Fort Liberty" },
      { "@type": "Place", name: "Fayetteville, NC" },
      { "@type": "Place", name: "Cumberland County, NC" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best neighborhoods near Fort Liberty for military families",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: neighborhoods.length,
    itemListElement: neighborhoods.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Place",
        name: `${n.name}, NC`,
        description: n.bestFor,
        address: {
          "@type": "PostalAddress",
          addressLocality: n.name,
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
    })),
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(itemListSchema)} />
      <script {...jsonLd(faqPageSchema(faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "VA Loans - Fayetteville, NC",
            href: "/va-loans-fayetteville-nc",
          },
          { label: "Best Neighborhoods Near Fort Liberty" },
        ]}
        eyebrow="Fort Liberty neighborhoods"
        title="Best neighborhoods near Fort Liberty for military families."
        lead="Seven areas Fort Liberty soldiers and military families actually buy in, with honest commute, price, school, and vibe notes from a Veteran loan officer who lives in Fayetteville and runs deals across all of them."
      >
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          Last updated: {LAST_UPDATED_DISPLAY} · By {site.name}, U.S. Army Veteran &amp; Mortgage Loan Officer
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={site.applicationUrl} size="lg">
            Get Pre-Approved
          </Button>
          <Button
            href={site.contactCta.href}
            size="lg"
            variant="secondary"
          >
            {site.contactCta.label}
          </Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Picking the wrong neighborhood is the most common non-financial regret
            I hear from Fort Liberty buyers. The mortgage closes fine, the loan
            works, the move-in goes smoothly, and then six months in they
            realize they bought in the wrong area for their commute, their
            kids&apos; schools, or their off-duty life.
          </p>
          <p>
            This is the breakdown I share with active-duty soldiers, retiring
            service members, and military families when they&apos;re trying to
            figure out where to actually buy in the Fort Liberty market. Seven
            areas, each with consistent sub-sections so you can compare apples
            to apples.
          </p>
          <p>
            For broader context on financing your purchase, see{" "}
            <Link
              href="/va-loans-fayetteville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loans in Fayetteville, NC
            </Link>
            . For PCS-specific timing,{" "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              the Fort Liberty VA loan guide
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Neighborhoods */}
      {neighborhoods.map((n, i) => (
        <Section
          key={n.slug}
          className={i % 2 === 0 ? "bg-paper" : ""}
          id={n.slug}
        >
          <div className="max-w-3xl">
            <Eyebrow>Neighborhood {i + 1} of {neighborhoods.length}</Eyebrow>
            <Heading level={2} className="mt-4">
              {n.name}.
            </Heading>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Commute to Fort Liberty
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  {n.commute}
                </p>
              </div>
              <div>
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Price range
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  {n.price}
                </p>
              </div>
              <div>
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Schools
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  {n.schools}
                </p>
              </div>
              <div>
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Vibe
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  {n.vibe}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Who it&apos;s best for
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  {n.bestFor}
                </p>
              </div>
              <div className="md:col-span-2 rounded-md border border-line bg-cream/50 px-5 py-4">
                <h3 className="font-display text-sm uppercase tracking-[0.14em] text-muted">
                  What to watch out for
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink/80">
                  {n.flag}
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* How to choose */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>How to choose</Eyebrow>
          <Heading level={2} className="mt-4">
            Three questions to anchor the decision.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>Which gate do you actually use?</strong> All American
                Freeway gate users have different optimal neighborhoods than
                soldiers entering through other gates.
              </li>
              <li>
                <strong>How long is your tour?</strong> Short tour pushes toward
                Spring Lake or Haymount for shortest commute and easier resale.
                Longer tour or post-retirement intent opens Hope Mills, Linden,
                Sanford, or Pinehurst.
              </li>
              <li>
                <strong>What do your kids&apos; schools matter most for?</strong>{" "}
                Magnet access, smaller districts, specific academic programs.
                Each maps to a different neighborhood.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: Fort Liberty neighborhoods.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The right fit</Eyebrow>
          <Heading level={2} className="mt-4">
            The right home is the one your loan and your life both fit.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            As a Veteran who runs Fort Liberty VA scenarios every week, I can
            help you line up the financing with the actual neighborhood and
            price point you&apos;re considering, before you start writing
            offers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.applicationUrl} size="lg">
              Get Pre-Approved
            </Button>
            <Button
              href={site.contactCta.href}
              size="lg"
              variant="secondary"
            >
              {site.contactCta.label}
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">
            More from the Fort Liberty series:{" "}
            <Link
              href="/va-loans-fayetteville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fayetteville VA pillar
            </Link>
            {" · "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fort Liberty PCS guide
            </Link>
            {" · "}
            <Link
              href="/va-loan-limits-cumberland-county-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Cumberland County limits
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
