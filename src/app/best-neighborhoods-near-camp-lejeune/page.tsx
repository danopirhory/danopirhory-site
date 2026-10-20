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

const PATH = "/best-neighborhoods-near-camp-lejeune";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "Best Neighborhoods Near Camp Lejeune",
  description:
    "Neighborhood breakdown for Camp Lejeune military families: commute, prices, schools, and vibe for Piney Green, Hubert, Sneads Ferry, and more.",
  path: PATH,
  ogType: "article",
});

const neighborhoods = [
  {
    name: "Piney Green",
    slug: "piney-green",
    commute: "5-15 minutes to Piney Green Gate (one of the closest residential areas to a Lejeune gate). 15-25 minutes to main side depending on traffic.",
    price: "Roughly $200K-$400K for typical 3-bed, 2-bath single-family homes. Some newer construction in the upper end of that range.",
    schools: "Onslow County Schools, generally well-regarded elementary options with good military-family support given the constant rotation of student-families.",
    vibe: "Heavy active-duty Marine population. Inventory turns fast around PCS season. Mix of 1990s-2010s family homes and newer subdivisions.",
    bestFor: "Active-duty Marines who want the shortest possible commute, families with younger kids who value Onslow elementary options, and first-time buyers using a VA loan at the entry-level price band.",
    flag: "Inventory moves fast. Be ready to make decisions quickly during summer PCS season.",
  },
  {
    name: "Hubert",
    slug: "hubert",
    commute: "10-20 minutes to Camp Lejeune main gates. Slightly farther east than Piney Green; commute is more variable depending on which side of base you work on.",
    price: "$250K-$500K range, with more lot for the dollar than Piney Green. Older inventory tends to be the more affordable end; newer builds push toward the top.",
    schools: "Onslow County Schools. Hubert Elementary serves much of the area; high school is typically Swansboro High.",
    vibe: "Quieter, more spread out, slightly less PCS-rotational than Piney Green. Mix of established families and active-duty households who want a bit more space.",
    bestFor: "Families who want larger lots without leaving easy striking distance of base, and buyers who prioritize space over the absolute shortest commute.",
    flag: "Some properties sit in or near flood-prone zones along the New River. Flood-zone verification belongs in your pre-offer checklist.",
  },
  {
    name: "Sneads Ferry",
    slug: "sneads-ferry",
    commute: "15-25 minutes to Camp Lejeune's Holcomb Boulevard or Wallace Creek gates depending on traffic and exact location. Coastal traffic in summer can extend this.",
    price: "Wide spread: $300K-$500K inland, $500K-$1.5M+ closer to the water and Topsail Island. VA jumbo territory at the top end.",
    schools: "Onslow County Schools. Coastal Elementary, Dixon Middle, Dixon High serve much of the area; some buyers prefer specific zones.",
    vibe: "Mix of working military families inland and higher-end coastal inventory near the water. Strong appeal to senior NCOs, officers, and Marines who want beach proximity.",
    bestFor: "Buyers who want coastal access, Marines stationed on the south side of base, and full-entitlement VA buyers looking at jumbo price points without bringing a down payment.",
    flag: "Coastal pricing can be deceptive: wind, hail, and flood insurance can dramatically affect the real monthly cost. Always get insurance quotes during the inspection period.",
  },
  {
    name: "Swansboro",
    slug: "swansboro",
    commute: "25-35 minutes to main-side Camp Lejeune. Worth it for the right family; not ideal if you're driving the gate every day at 0600.",
    price: "$300K-$700K typical. Older waterfront inventory can push higher; inland new construction sits in the middle of that range.",
    schools: "Onslow County Schools. Swansboro Elementary, Middle, and High School are all generally well-regarded.",
    vibe: "Coastal small town with real character. Popular with retiring Veterans and second-career military families. More established neighborhood feel than the closer-in PCS-rotation areas.",
    bestFor: "Retirees, families with school-age kids who want a stable community, and Marines who don't mind a longer commute for a better quality-of-life setup.",
    flag: "Older housing stock means VA appraisal condition issues come up more often than in newer inventory. Choose a buyer's agent who knows VA Minimum Property Requirements.",
  },
  {
    name: "Richlands",
    slug: "richlands",
    commute: "20-30 minutes to most Camp Lejeune gates. Rural feel, lighter traffic, but not a 5-minute commute to anywhere.",
    price: "$200K-$450K range. Larger acreage available at the upper end. Surprisingly affordable for buyers coming from higher-cost markets.",
    schools: "Onslow County Schools. Richlands Elementary, Middle, and High School. Generally solid; smaller than the city schools.",
    vibe: "Rural, quieter, slower-paced. Popular with senior NCOs and officers who want space without the coastal premium. Real Carolina country feel.",
    bestFor: "Families who want acreage, buyers who value space and quiet over commute time, and military households who plan to stay in the area post-retirement.",
    flag: "Some properties have private wells and septic systems. VA requires specific testing on both. Factor inspection costs accordingly.",
  },
  {
    name: "Midway Park",
    slug: "midway-park",
    commute: "5 minutes to base: Midway Park is essentially adjacent to Lejeune. Many families walk or bike to gates.",
    price: "$150K-$300K typical. Older housing stock, smaller homes, more affordable entry point.",
    schools: "Onslow County Schools, with several DoD-affiliated school options on or near base.",
    vibe: "Heavily military-populated, walkable to base, older homes, tight-knit feel. Strong sense of community among Marine families.",
    bestFor: "Active-duty Marines who want the shortest possible commute, junior-enlisted households on tighter budgets, and buyers who value walkability to base over square footage.",
    flag: "Older inventory means VA appraisal condition issues are more common. Budget for inspection-driven repairs in your offer math.",
  },
  {
    name: "Holly Ridge",
    slug: "holly-ridge",
    commute: "20-30 minutes to Camp Lejeune's southern gates depending on route. Commute through Sneads Ferry can extend in beach traffic.",
    price: "$250K-$550K range, with newer subdivision inventory often in the $300K-$450K band. Coastal proximity adds premium near Topsail.",
    schools: "Onslow County Schools. Coastal Elementary, Dixon Middle, Dixon High for much of Holly Ridge.",
    vibe: "Growing area with significant new construction, popular with Marines who want a newer home on a slightly longer commute. Mix of military families and civilians.",
    bestFor: "Buyers who prefer new construction, families with young kids who want newer schools and amenities, and Marines on the south side of base.",
    flag: "New construction can have HOA fees and required builder warranties. Read the disclosure documents carefully before signing.",
  },
];

const faqs = [
  {
    q: "Which Camp Lejeune neighborhood has the shortest commute?",
    a: "Midway Park is essentially adjacent to base and Piney Green is one of the closest residential areas to a Lejeune gate. Both put you within 5-15 minutes of a gate depending on which side of base you work on. The tradeoff is older housing stock and tighter inventory in both areas.",
  },
  {
    q: "Where do most active-duty Marine families live near Camp Lejeune?",
    a: "Piney Green, Midway Park, Hubert, and Sneads Ferry collectively absorb most of the active-duty Marine housing demand outside the base. Piney Green and Midway Park lean junior-enlisted and shortest-commute; Hubert and Sneads Ferry trend toward more established or senior families.",
  },
  {
    q: "Are Onslow County schools good for military kids?",
    a: "Onslow County Schools serve a heavily military-rotational population, which means they have real systems in place for transferring students, supporting deployment-affected families, and integrating newcomers mid-year. Quality varies by specific school within the district. Research the elementary your prospective home is zoned for, since that's usually the longest-term assignment.",
  },
  {
    q: "What about coastal flood-zone risk in these neighborhoods?",
    a: "Hubert (along the New River), parts of Sneads Ferry, Holly Ridge, and Swansboro all have areas of mapped flood exposure. This affects insurance cost, sometimes substantially. Always confirm flood-zone status through FEMA and get a real flood-insurance quote before you finalize an offer.",
  },
  {
    q: "Should I buy in a neighborhood I haven't visited if I'm PCS'ing in?",
    a: "It's possible (I've helped plenty of buyers close on homes they've only seen via video tour), but it's safer with a buyer's agent who knows the area intimately and who walks the property for you. The neighborhoods near Camp Lejeune all feel different in person; second-best is a fast house-hunting trip during the contract period if you can swing it.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Best Neighborhoods Near Camp Lejeune for Military Families",
    description:
      "Neighborhood-by-neighborhood breakdown for Camp Lejeune military families covering commute, price range, schools, and lifestyle for the seven most-asked-about areas.",
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
      { "@type": "Place", name: "Camp Lejeune" },
      { "@type": "Place", name: "Jacksonville, NC" },
      { "@type": "Place", name: "Onslow County, NC" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best neighborhoods near Camp Lejeune for military families",
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
            label: "VA Loans - Jacksonville, NC",
            href: "/va-loans-jacksonville-nc",
          },
          { label: "Best Neighborhoods Near Camp Lejeune" },
        ]}
        eyebrow="Camp Lejeune neighborhoods"
        title="Best neighborhoods near Camp Lejeune for military families."
        lead="Seven areas Marines and Navy families actually buy in, with honest commute, price, school, and vibe notes from a Veteran loan officer who runs deals across all of them."
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
            Picking the wrong neighborhood is the most common
            non-financial regret I hear from Camp Lejeune buyers. The
            mortgage closes fine, the loan works, the move-in goes
            smoothly, and then six months in they realize they bought
            in the wrong area for their commute, their kids&apos;
            schools, or their off-duty life.
          </p>
          <p>
            This is the neighborhood breakdown I share with active-duty
            Marines, Navy corpsmen, and military families when
            they&apos;re trying to figure out where to actually buy.
            Seven areas, each with consistent sub-sections so you can
            compare apples to apples: commute, price range, schools,
            who it&apos;s best for, and what to watch out for.
          </p>
          <p>
            For broader context on financing your purchase, see my{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              complete VA loan guide for Camp Lejeune &amp; Jacksonville
            </Link>
            . If you&apos;re mid-PCS and trying to time the purchase,
            see{" "}
            <Link
              href="/pcs-camp-lejeune-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              how to PCS to Camp Lejeune and buy a home with a VA loan
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
              {n.name}, NC.
            </Heading>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-base uppercase tracking-[0.14em] text-muted">
                  Commute to Camp Lejeune
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
            How to actually pick the right one for your family.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Three questions, in order, that usually point Camp
              Lejeune families toward the right neighborhood:
            </p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>Which gate do you actually use?</strong>{" "}
                Commute to a specific gate matters more than commute
                to base in general. Piney Green Gate users have
                different optimal neighborhoods than Wallace Creek or
                Holcomb Boulevard users.
              </li>
              <li>
                <strong>How long is your tour?</strong> A 2-year tour
                pushes toward shorter commute and easier resale
                (Piney Green, Midway Park). A 4-year tour with intent
                to extend opens up Swansboro, Richlands, or
                established Hubert.
              </li>
              <li>
                <strong>What do your weekends look like?</strong>{" "}
                Beach-every-weekend families lean Sneads Ferry, Holly
                Ridge, or Swansboro. Stay-on-base families don&apos;t
                pay the coastal premium for amenities they
                won&apos;t use.
              </li>
            </ol>
            <p>
              When you&apos;re ready to weigh financing options
              against neighborhood choice, see{" "}
              <Link
                href="/va-loan-vs-conventional-loan"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA loan vs. conventional loan
              </Link>{" "}
              for the product-side decision, and{" "}
              <Link
                href="/va-loan-limits-onslow-county-nc"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA loan limits in Onslow County
              </Link>{" "}
              for the entitlement math at higher Sneads Ferry/Topsail
              price points.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: Camp Lejeune neighborhoods.
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
            Picking a neighborhood isn&apos;t separate from picking a
            loan: they&apos;re the same decision viewed from two
            angles. As a Veteran who runs Camp Lejeune VA scenarios
            every week, I can help you line up the financing with the
            actual neighborhood and price point you&apos;re looking
            at, before you start writing offers.
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
            More from the Camp Lejeune VA series:{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loans in Jacksonville
            </Link>
            {" · "}
            <Link
              href="/va-loan-limits-onslow-county-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loan limits
            </Link>
            {" · "}
            <Link
              href="/pcs-camp-lejeune-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              PCS to Camp Lejeune
            </Link>
            {" · "}
            <Link
              href="/va-loan-vs-conventional-loan"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA vs. conventional
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
