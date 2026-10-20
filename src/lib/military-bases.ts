/**
 * Source of truth for base-specific VA loan guide pages.
 *
 * Each entry drives one page via <MilitaryBaseTemplate />. Add a new
 * base by adding an entry here + creating a thin route file under
 * /app/<slug>/page.tsx that imports the template. Nothing else changes.
 *
 * Word-count target per base: ~1,500-1,800 words rendered. The data
 * shape provides space for hand-tuned base-specific paragraphs in
 * `intro`, `whyVa`, `process`, `localMarket`, and `pcsTiming` -
 * everything else (eligibility, mistakes) is shared boilerplate that
 * the template renders in a consistent voice.
 */

import {
  CONFORMING_LIMIT_DISPLAY,
  CONFORMING_LIMIT_YEAR,
} from "./loanLimits";

export type BaseProcessStep = {
  n: string;
  title: string;
  body: string;
};

export type BaseNeighborhoodNote = {
  name: string;
  body: string;
};

export type BaseFAQ = { q: string; a: string };

export type MilitaryBase = {
  readonly slug: string;
  readonly metaTitle: string;
  readonly metaDescription: string;

  readonly baseName: string;
  readonly branch: string;
  readonly baseAlsoKnownAs?: string;
  readonly county: string;
  readonly state: string;
  readonly primaryTown: string;
  readonly nearbyTowns: readonly string[];

  /** Hero copy */
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;

  /** Intro paragraphs establishing local + Veteran credibility. */
  readonly intro: readonly string[];

  /** "Why a VA loan matters at this base" - bullet list of points. */
  readonly whyVa: readonly string[];

  /** PCS timeline - phased checklist. */
  readonly process: readonly BaseProcessStep[];

  /** Local market overview - short paragraphs about housing rhythm. */
  readonly localMarketHeading: string;
  readonly localMarket: readonly string[];

  /** Neighborhood notes - short cards per neighborhood. */
  readonly neighborhoodsHeading: string;
  readonly neighborhoods: readonly BaseNeighborhoodNote[];

  /** PCS-specific guidance for this base. */
  readonly pcsHeading: string;
  readonly pcsBody: readonly string[];

  /** Local market mistakes / what to avoid. */
  readonly mistakesHeading: string;
  readonly mistakes: readonly string[];

  /** FAQ - feeds FAQPage JSON-LD. */
  readonly faqs: readonly BaseFAQ[];

  /** Related-pages cross-link slugs. */
  readonly related: readonly {
    readonly href: string;
    readonly label: string;
    readonly note: string;
  }[];
};

export const militaryBases = {
  "fort-liberty": {
    slug: "fort-liberty-va-loan-guide",
    metaTitle: "Fort Liberty VA Loan Guide - Fayetteville, NC",
    metaDescription:
      "VA loan and PCS guide for Fort Liberty (Fort Bragg): eligibility, process, Fayetteville market notes, and timing from a local Army Veteran.",

    baseName: "Fort Liberty",
    branch: "U.S. Army",
    baseAlsoKnownAs: "Fort Bragg",
    county: "Cumberland County",
    state: "NC",
    primaryTown: "Fayetteville",
    nearbyTowns: [
      "Spring Lake",
      "Hope Mills",
      "Linden",
      "Cameron",
      "Sanford",
      "Raeford",
    ],

    eyebrow: "Fort Liberty · Fayetteville, NC",
    title: "The complete VA loan guide for Fort Liberty soldiers and their families.",
    lead: "Written by a U.S. Army Veteran who works with Fort Liberty families every week. Real eligibility rules, the actual PCS-to-keys timeline, local Cumberland County market notes, and the mistakes that cost service members money.",

    intro: [
      "I'm Dan Opirhory, a U.S. Army Veteran and a mortgage loan officer with Example Mortgage Company. My office is in Fayetteville. Fort Liberty is my immediate backyard, and a meaningful share of the buyers I work with are active-duty soldiers, retired service members, or military families PCS'ing in or out of the post.",
      "This guide is what I wish every Fort Liberty soldier read before their first conversation with a lender. It covers what the VA loan actually does, who's eligible, the step-by-step process at a Fayetteville-area pace, what the Cumberland County market looks like for VA buyers right now, and how to time a purchase against PCS orders. No fluff, no upsell, no rate-bait.",
    ],

    whyVa: [
      "Zero down payment with full entitlement. Most active-duty soldiers and recent Veterans qualify for full entitlement, which means the VA loan funds 100% of the purchase price up to your entitlement limit. Earnest money and inspection costs only, no 5% or 20% down.",
      "No private mortgage insurance, ever. Conventional loans below 20% down add PMI, which can run $100-$300+ per month. VA loans skip it entirely.",
      "Competitive interest rates. The VA's guarantee reduces lender risk and that savings is passed to you.",
      "Funding fee waivers for service-connected disability. If you have a disability rating, the funding fee is fully waived. For many soldiers retiring from Fort Liberty, this is thousands of dollars off the cash-to-close.",
      "Reusable benefit. The VA loan isn't a one-shot deal. You can use it, sell, restore entitlement, and use it again. Second-tier entitlement also exists for PCS-without-sale scenarios.",
      "Assumable. A future buyer can assume your VA loan at your locked-in rate, a meaningful asset in a high-rate environment.",
    ],

    process: [
      {
        n: "01",
        title: "Pull your COE",
        body: "I can request your Certificate of Eligibility through the VA's automated system, usually same-day for active-duty soldiers and within a day for most Veterans.",
      },
      {
        n: "02",
        title: "Get fully underwritten pre-approval",
        body: "Income, assets, credit, and DTI verified up front. Not a soft pre-qual. The pre-approval letter you take to a Fayetteville-area listing carries real weight when paired with documented underwriting.",
      },
      {
        n: "03",
        title: "Build a realistic budget",
        body: "Cumberland County property taxes, Fayetteville-area homeowners insurance, the VA funding fee (or your waiver), HOA dues if applicable. We size the target payment against your BAH so the home works financially.",
      },
      {
        n: "04",
        title: "House hunt with a local agent",
        body: "Spring Lake, Hope Mills, Haymount, Linden, Sanford: different neighborhoods, different commutes, different price points. A Fayetteville agent who works with military families is worth more than a generic referral.",
      },
      {
        n: "05",
        title: "Offer and contract",
        body: "Your buyer's agent writes the offer. I provide the pre-approval letter and the seller-concession math so the listing agent can compare cleanly to any conventional offers.",
      },
      {
        n: "06",
        title: "VA appraisal and inspection",
        body: "VA appraisers in the Cumberland County area are familiar with the Minimum Property Requirements. We run the appraisal in parallel with your separate buyer-paid home inspection.",
      },
      {
        n: "07",
        title: "Underwriting, clear-to-close, and sign",
        body: "Final document review, title work, insurance binding. Closing Disclosure issued at least 3 business days before closing. Sign at the closing table, get keys, occupy within 60 days.",
      },
    ],

    localMarketHeading: "What the Cumberland County market looks like for VA buyers.",
    localMarket: [
      "Fayetteville and the surrounding Cumberland County market is one of the most VA-friendly housing markets in the country. The volume of active-duty buyers, Veterans, and military families means listing agents understand VA offers, builders know how to structure spec inventory for VA appraisals, and the local appraisal panel handles VA condition reviews routinely.",
      "Pricing is meaningfully more accessible than the coastal NC markets. Entry-level inventory in Spring Lake, Hope Mills, and parts of Fayetteville sits well below the conforming loan limit, which means most full-entitlement VA buyers never bump into the limit math at all. Higher-end inventory in Haymount, the historic downtown, and rural areas like Linden and Cameron pushes into the $500K+ range, still well within full-entitlement territory.",
      "Inventory rhythm is heavily influenced by PCS season. Late spring and early summer see the most movement; winter is quieter. Buyers who can shop in the off-season often get more breathing room on price and inspection negotiations.",
    ],

    neighborhoodsHeading: "Where Fort Liberty soldiers actually buy.",
    neighborhoods: [
      {
        name: "Spring Lake",
        body: "Closest residential community to the All American gate. Heavy active-duty population, fast PCS-driven inventory turnover, mostly single-family entry-level pricing.",
      },
      {
        name: "Hope Mills",
        body: "South Fayetteville, popular with families who want established schools and more lot space. Slightly longer commute than Spring Lake but better value on home size.",
      },
      {
        name: "Haymount and historic Fayetteville",
        body: "Older inventory, character-rich, popular with senior NCOs, officers, and retirees. VA appraisal condition reviews matter more here given the older housing stock.",
      },
      {
        name: "Linden and northern Cumberland",
        body: "Rural, larger acreage, real Carolina country feel. Popular with senior NCOs and officers who want space without the city density.",
      },
      {
        name: "Cameron and Sanford",
        body: "North of base, slightly longer commute, real value for the dollar. Popular with families who plan to stay post-retirement.",
      },
      {
        name: "Raeford and Hoke County",
        body: "West of base, quiet, growing. Conventional and VA both work well here; some new construction with builder warranties to factor in.",
      },
    ],

    pcsHeading: "PCS timing for Fort Liberty: don't compress what doesn't need to be compressed.",
    pcsBody: [
      "Fort Liberty PCS volume is enormous. The base sees thousands of inbound and outbound moves every year, which means the local lending and real estate ecosystem is well-equipped, but it also means inventory near the base moves fast during peak PCS months.",
      "If you have orders to Fort Liberty, start the VA loan process the day you have orders in hand. Pre-approval can typically be issued in 24-48 hours once documents are uploaded. House hunting can run remotely if you can't take a house-hunting trip. Most of the active-duty buyers I work with close within 30 days of contract.",
      "If you're already at Fort Liberty and house-hunting from a temporary rental or on-base lodging: skip the slow start. Get pre-approved this week. Inventory in the most-popular gates-adjacent neighborhoods turns within days during PCS season.",
    ],

    mistakesHeading: "What Fort Liberty buyers most commonly get wrong.",
    mistakes: [
      "Assuming the VA loan is slower than conventional. With a VA-fluent lender and a buyer's agent who knows VA MPRs, 30-day closes are normal in the Fayetteville market.",
      "Choosing a national lender with no Fort Liberty experience. Local pricing math, NC attorney closing requirements, and Cumberland County recording timing all matter.",
      "Skipping the funding-fee waiver because the disability rating paperwork \"isn't done yet.\" If you're close to a rating decision, talk to your lender about timing. Sometimes a short wait saves thousands.",
      "Opening new credit during the file (truck loan, store financing, co-signed loan). Wait until you have keys.",
      "Hiding orders changes from your lender. PCS modifications mid-file are manageable when we know early. They become deal-killers when they surface in the final week.",
    ],

    faqs: [
      {
        q: "Is Fort Liberty the same as Fort Bragg?",
        a: "Yes. Fort Bragg was officially redesignated as Fort Liberty in June 2023, then reverted to Fort Bragg in 2025 under a different naming honor. Locally, soldiers and residents commonly use both names. The base, the housing market, and the VA loan process are exactly the same regardless of name.",
      },
      {
        q: "Can active-duty soldiers at Fort Liberty buy with a VA loan?",
        a: "Yes. Active-duty soldiers generally become VA-eligible after 90 continuous days of active service. Most Fort Liberty soldiers I work with have been past that threshold for a long time. We can pull your COE electronically and have you pre-approved in 24-48 hours.",
      },
      {
        q: "What are the VA loan limits in Cumberland County?",
        a: `Cumberland County is a standard-cost county, so the FHFA conforming loan limit applies. For ${CONFORMING_LIMIT_YEAR} that figure is ${CONFORMING_LIMIT_DISPLAY}. With full entitlement, no limit applies at all on a $0-down purchase. With partial entitlement, the limit governs the threshold above which you'd need a down payment.`,
      },
      {
        q: "Do builders in the Fayetteville area work with VA buyers?",
        a: "Yes. The Fayetteville-area new construction market is heavily VA-experienced. Most large builders write contracts that work cleanly with VA financing and seller concessions. Confirm with your buyer's agent that the specific builder and community are VA-friendly before writing.",
      },
      {
        q: "How does my BAH affect VA loan qualification at Fort Liberty?",
        a: "Cumberland County BAH varies by rank and dependent status, and it's real income that VA underwriting absolutely counts. We typically size your target monthly payment at or near your BAH so the home effectively pays for itself.",
      },
      {
        q: "Should I buy or rent when I PCS to Fort Liberty?",
        a: "Honest answer: depends on your tour length and your financial picture. On a 3-year tour, the math is usually close. On a 4-year tour or with intent to extend, buying typically wins financially because of the VA loan's $0-down structure and the absence of PMI. Run real numbers. Don't take a generic blog's word for it.",
      },
      {
        q: "Can I use the VA loan benefit if I'm retiring from Fort Liberty?",
        a: "Yes. Retiring service members are some of the most under-served VA buyers. If you're staying in NC after retirement, your VA benefit doesn't expire, and many retiring soldiers have a service-connected disability rating that fully waives the funding fee. Worth a 30-minute conversation before you commit to a home.",
      },
    ],

    related: [
      {
        href: "/loan-programs/va",
        label: "VA loans overview",
        note: "The full VA program page with eligibility, process, and FAQs.",
      },
      {
        href: "/best-neighborhoods-near-fort-liberty",
        label: "Best neighborhoods near Fort Liberty",
        note: "Neighborhood-by-neighborhood breakdown for military families.",
      },
      {
        href: "/va-loan-limits-cumberland-county-nc",
        label: "VA loan limits in Cumberland County",
        note: "2026 limits, full vs. partial entitlement, jumbo VA math.",
      },
      {
        href: "/va-loans-fayetteville-nc",
        label: "VA loans in Fayetteville, NC",
        note: "The broader Fayetteville VA financing pillar.",
      },
      {
        href: "/pcs-camp-lejeune-va-loan-guide",
        label: "PCS guide (Camp Lejeune)",
        note: "Same week-by-week framework if you're moving inter-base.",
      },
      {
        href: "/funding-fee-waiver-disabled-veterans",
        label: "Funding fee waiver for disabled Veterans",
        note: "Specific disability-rating waiver mechanics and timing.",
      },
    ],
  },

  "cherry-point": {
    slug: "va-loans-cherry-point-nc",
    metaTitle: "Cherry Point VA Loans - Havelock NC Mortgage Guide",
    metaDescription:
      "Cherry Point VA loans: eligibility, process, Carteret/Craven market notes, and PCS timing for Havelock-area Marines from a Veteran loan officer.",

    baseName: "MCAS Cherry Point",
    branch: "U.S. Marine Corps",
    county: "Craven County",
    state: "NC",
    primaryTown: "Havelock",
    nearbyTowns: [
      "New Bern",
      "Newport",
      "Morehead City",
      "Beaufort",
      "Atlantic Beach",
    ],

    eyebrow: "MCAS Cherry Point · Havelock, NC",
    title: "VA loans for Marines and sailors at MCAS Cherry Point.",
    lead: "A focused VA loan guide for the Cherry Point and Havelock market: eligibility, process, local Craven and Carteret County notes, and PCS timing from an Army Veteran who runs VA scenarios for coastal NC every week.",

    intro: [
      "I'm Dan Opirhory, a U.S. Army Veteran and a mortgage loan officer with Example Mortgage Company. I work with VA-eligible buyers across NC, including a steady volume of Marines, sailors, and military families in the Havelock and Cherry Point area.",
      "This guide covers what the VA loan does, who's eligible, the local Craven and Carteret County market for VA buyers, and how to time a purchase around PCS to or from Cherry Point. For the broader VA loan strategy, the same fundamentals apply across all NC bases, but the local rhythm here is different from Camp Lejeune or Fort Liberty, and that's where I focus.",
    ],

    whyVa: [
      "Zero down payment with full entitlement. Preserves cash for the realities of a coastal-NC PCS move.",
      "No private mortgage insurance, ever. Saves $100-$300+ per month versus a comparable conventional loan with low down.",
      "Competitive interest rates backed by the VA guarantee.",
      "Funding fee waivers for Veterans with service-connected disability ratings.",
      "Reusable benefit. Important for Marines holding a previous home from a prior duty station.",
      "Assumable in a high-rate environment, a real selling-point asset when you eventually leave Cherry Point.",
    ],

    process: [
      {
        n: "01",
        title: "Pull your COE",
        body: "I can pull your Certificate of Eligibility electronically, usually same-day for active-duty service members.",
      },
      {
        n: "02",
        title: "Verified pre-approval",
        body: "Real underwriting up front, not a soft pre-qual. The pre-approval letter has to compete with conventional offers in a coastal market.",
      },
      {
        n: "03",
        title: "Build the budget around coastal realities",
        body: "Wind and hail insurance, flood-zone exposure for properties near the Neuse River or Bogue Sound. These are real costs that matter at the offer stage, not at closing.",
      },
      {
        n: "04",
        title: "House hunt with a coastal-NC agent",
        body: "Havelock, New Bern, Newport, Morehead City: different markets, different rhythms. Pick an agent who knows VA MPRs and the local insurance landscape.",
      },
      {
        n: "05",
        title: "Offer with seller-concession math built in",
        body: "VA allows up to 4% in seller concessions plus closing-cost contributions. We structure the offer so the listing agent can take a clean number to the seller.",
      },
      {
        n: "06",
        title: "VA appraisal and home inspection",
        body: "Coastal properties sometimes carry condition issues that trigger MPR re-inspections. A buyer's agent who knows the local appraisal panel saves real time here.",
      },
      {
        n: "07",
        title: "Close and occupy",
        body: "Sign at the title company. Occupy within 60 days. Most VA closings I run in this area hit 30 days from contract.",
      },
    ],

    localMarketHeading: "The Havelock and Craven County market for VA buyers.",
    localMarket: [
      "Havelock is the immediate Cherry Point bedroom community. Most active-duty Marines and sailors live within a 10-15 minute commute of base. Pricing is meaningfully more accessible than the Wilmington or Topsail markets to the south, which makes Cherry Point one of the better cost-of-living trade-offs in coastal NC for VA-eligible buyers.",
      "New Bern is the historic city to the northwest, popular with senior NCOs, officers, and military families who want more inventory variety, established schools, and proximity to the Neuse River. Newport, Morehead City, and the Carteret County beaches sit east, with a higher coastal premium and longer commute.",
      "Inventory rhythm tracks PCS season and tourist season. Spring and early summer see the most listings; coastal pricing in Carteret County peaks in summer when tourist demand pushes up second-home and rental investment activity.",
    ],

    neighborhoodsHeading: "Where Cherry Point service members actually live.",
    neighborhoods: [
      {
        name: "Havelock proper",
        body: "Closest to base. Mix of newer subdivisions and older inventory. Heavy active-duty population, fast PCS-driven turnover.",
      },
      {
        name: "New Bern",
        body: "20-30 minutes northwest. Historic, walkable downtown, strong school districts, broader inventory. Popular with families and retirees.",
      },
      {
        name: "Newport",
        body: "20 minutes east. Quieter, more rural, often better value for larger lots.",
      },
      {
        name: "Morehead City and Atlantic Beach",
        body: "30-40 minutes east, coastal premium. Popular with senior NCOs and officers wanting beach proximity. Wind and flood insurance considerations matter most here.",
      },
      {
        name: "Beaufort",
        body: "35-45 minutes east. Historic, walkable waterfront, character-heavy. Older housing stock means VA appraisal condition issues come up more often.",
      },
    ],

    pcsHeading: "PCS to Cherry Point: tighter inventory, faster decisions.",
    pcsBody: [
      "MCAS Cherry Point is a smaller base than Camp Lejeune or Fort Liberty, which means the local housing market has less depth. Inventory in Havelock turns fast during PCS season, and the alternatives (New Bern, Newport, Morehead City) each have their own dynamics.",
      "If you have orders to Cherry Point, start the VA loan process the day you have orders. Pre-approval can be issued in 24-48 hours. Get a buyer's agent in the area lined up early. Agents who specialize in VA buyers in Havelock are a tighter pool than at the larger bases, but they exist and they're worth finding.",
      "If you're already at Cherry Point in temporary lodging or a rental, get pre-approved this week. Don't try to do the lender shopping after you find a home. The timeline doesn't work in this market.",
    ],

    mistakesHeading: "What Cherry Point VA buyers most commonly get wrong.",
    mistakes: [
      "Underestimating coastal insurance cost. Wind, hail, and flood coverage can dramatically affect your real monthly cost. Get insurance quotes during inspection, not at the Closing Disclosure stage.",
      "Buying in Atlantic Beach or Morehead City for the lifestyle, then realizing the daily commute to Cherry Point in summer beach traffic is brutal.",
      "Choosing an out-of-area lender with no Craven County experience. Local appraisal turnaround, attorney closing requirements, and insurance vendor relationships all matter.",
      "Skipping the home inspection because the VA appraisal exists. The two serve completely different purposes. Always pay for the buyer's home inspection separately.",
      "Hiding PCS modifications from your lender. Mid-file orders changes are manageable when we know early.",
    ],

    faqs: [
      {
        q: "Is Cherry Point's housing market expensive?",
        a: "Compared to Wilmington or Topsail, no. Havelock and Craven County pricing is meaningfully more accessible. Compared to inland NC, slightly more because of coastal premium and insurance costs. For most active-duty Marines and sailors, Cherry Point is one of the better cost-of-living markets in coastal NC.",
      },
      {
        q: "Can I use a VA loan for a property in Atlantic Beach or Morehead City?",
        a: "Yes, if it's your primary residence. Coastal properties in Carteret County qualify for VA financing the same as inland properties. Wind, hail, and flood insurance requirements apply and can affect your monthly payment math significantly. Confirm coverage costs during the contract period.",
      },
      {
        q: "How long does the VA appraisal take in Craven County?",
        a: "Generally 7-14 days from order. The local VA panel covers the area well. Slowdowns happen when the property has condition issues that trigger Minimum Property Requirement re-inspections, especially in older Beaufort or downtown New Bern inventory.",
      },
      {
        q: "Do sellers in Havelock accept VA offers?",
        a: "Yes. Havelock has one of the highest concentrations of VA-experienced sellers and listing agents in the state. The local market understands VA. The fix for any pushback is a strong, fully-underwritten pre-approval letter.",
      },
      {
        q: "What are the VA loan limits in Craven County for 2026?",
        a: `Craven County is a standard-cost county. The FHFA baseline conforming loan limit for ${CONFORMING_LIMIT_YEAR} is ${CONFORMING_LIMIT_DISPLAY}. With full entitlement, no limit applies at all on a $0-down purchase. With partial entitlement, the limit governs the threshold above which you'd need a down payment.`,
      },
      {
        q: "Should I buy in Havelock or commute from New Bern?",
        a: "Personal call. Havelock is the shortest commute and the highest concentration of military families. New Bern offers more inventory variety, established schools, and a different lifestyle. Run both options against your priorities. There's no universal right answer.",
      },
    ],

    related: [
      {
        href: "/loan-programs/va",
        label: "VA loans overview",
        note: "The full VA program page with eligibility, process, and FAQs.",
      },
      {
        href: "/va-loans-jacksonville-nc",
        label: "VA loans in Jacksonville (Camp Lejeune)",
        note: "If you're inter-base PCS-ing within coastal NC.",
      },
      {
        href: "/pcs-camp-lejeune-va-loan-guide",
        label: "PCS week-by-week framework",
        note: "Same timeline structure applies to a Cherry Point PCS.",
      },
      {
        href: "/funding-fee-waiver-disabled-veterans",
        label: "Funding fee waiver for disabled Veterans",
        note: "Specific waiver mechanics and timing.",
      },
    ],
  },

  "seymour-johnson": {
    slug: "seymour-johnson-afb-va-loan-guide",
    metaTitle: "Seymour Johnson AFB VA Loan Guide - Goldsboro NC",
    metaDescription:
      "VA loan guide for Seymour Johnson AFB and Goldsboro, NC: eligibility, process, Wayne County market notes, and PCS timing from an Army Veteran.",

    baseName: "Seymour Johnson Air Force Base",
    branch: "U.S. Air Force",
    county: "Wayne County",
    state: "NC",
    primaryTown: "Goldsboro",
    nearbyTowns: [
      "Mount Olive",
      "Pikeville",
      "La Grange",
      "Princeton",
    ],

    eyebrow: "Seymour Johnson AFB · Goldsboro, NC",
    title: "VA loans for airmen at Seymour Johnson AFB.",
    lead: "A focused VA loan guide for the Seymour Johnson and Goldsboro market: eligibility, process, local Wayne County notes, and PCS timing from an Army Veteran loan officer who works with airmen across NC.",

    intro: [
      "I'm Dan Opirhory, a U.S. Army Veteran and a mortgage loan officer with Example Mortgage Company. Cross-service recognition is the rule, not the exception. Every Veteran deserves a lender who actually understands the VA program. I work with airmen, NCOs, and Air Force families at Seymour Johnson the same way I work with soldiers at Fort Liberty and Marines at Camp Lejeune.",
      "Seymour Johnson AFB sits in Wayne County, a smaller and quieter NC market than the larger bases, which means the housing math is often friendlier and the inventory rhythm is more relaxed. This guide covers what the VA loan does, eligibility, the local Goldsboro market, and how to plan a purchase around PCS or post-service settlement.",
    ],

    whyVa: [
      "Zero down payment with full entitlement.",
      "No private mortgage insurance, ever. Saves $100-$300+ per month versus comparable conventional financing.",
      "Competitive interest rates backed by the VA guarantee.",
      "Funding fee waivers for service-connected disability ratings.",
      "Reusable benefit, including second-tier entitlement for PCS-without-sale scenarios.",
      "Assumable. Meaningful asset when you sell, especially in higher-rate environments.",
    ],

    process: [
      {
        n: "01",
        title: "Pull your COE",
        body: "Same-day or next-day for active-duty airmen. I can pull it electronically through the VA's automated system.",
      },
      {
        n: "02",
        title: "Verified pre-approval",
        body: "Documents reviewed up front. The Goldsboro market is competitive in pockets. A clean pre-approval matters.",
      },
      {
        n: "03",
        title: "Realistic budget against BAH",
        body: "Wayne County BAH varies by rank and dependent status. We size the target payment so the home effectively pays for itself.",
      },
      {
        n: "04",
        title: "House hunt with a local agent",
        body: "Goldsboro proper, Mount Olive, Pikeville, La Grange: different price points, different commutes. A local agent saves time.",
      },
      {
        n: "05",
        title: "Offer and contract",
        body: "Pre-approval letter, seller-concession math, and a clean contract. The Wayne County market is generally less competitive than Raleigh or Charlotte. Offers usually come together cleanly.",
      },
      {
        n: "06",
        title: "VA appraisal and inspection",
        body: "Standard 7-14 day VA appraisal turnaround in Wayne County. Always pay separately for the buyer's home inspection.",
      },
      {
        n: "07",
        title: "Close and occupy",
        body: "Sign at the title company. Occupy within 60 days. Most VA closings hit 30 days from contract in this market.",
      },
    ],

    localMarketHeading: "The Goldsboro and Wayne County market for VA buyers.",
    localMarket: [
      "Goldsboro is meaningfully more affordable than the Triangle or coastal NC markets. Entry-level inventory in the city core sits in the $150K-$250K range; established family homes in newer subdivisions push into the $300K-$400K range; rural inventory in Mount Olive and the surrounding county can offer larger acreage at competitive prices. The conforming loan limit is rarely a constraint for Wayne County VA buyers.",
      "The Air Force community at Seymour Johnson is smaller and more stable than the Army's PCS rotation at Fort Liberty, which means the local market has slightly less velocity-driven turnover. Listing agents who work with military families know the program well, but the volume is lower than at the larger NC bases.",
      "For airmen looking at long-term settlement post-service, Wayne County offers strong value. Several retired airmen I've worked with have stayed in the Goldsboro area after separation, leveraging the VA loan benefit for a primary-residence purchase and the Wayne County tax base for sustainable cost-of-living.",
    ],

    neighborhoodsHeading: "Where Seymour Johnson airmen actually live.",
    neighborhoods: [
      {
        name: "Goldsboro city core",
        body: "Closest to base, mix of older and newer inventory, walkable in pockets. Entry-level pricing for most VA buyers.",
      },
      {
        name: "South Goldsboro and newer subdivisions",
        body: "Newer construction, family-oriented, popular with airmen with school-age kids. Slightly longer commute than the city core.",
      },
      {
        name: "Mount Olive",
        body: "20 minutes south, smaller-town feel, college presence. Popular with families wanting more space.",
      },
      {
        name: "Pikeville and northern Wayne",
        body: "North of Goldsboro, rural, larger lots. Real value for the dollar.",
      },
      {
        name: "La Grange",
        body: "East of Goldsboro into Lenoir County. Quieter, more rural, often the right answer for buyers who prioritize space.",
      },
    ],

    pcsHeading: "PCS to Seymour Johnson: smaller market, more breathing room.",
    pcsBody: [
      "Seymour Johnson PCS volume is lower than the Marine and Army bases in NC, which means the local housing market has more breathing room. Inventory turns at a more sustainable pace, listing agents have time to work offers carefully, and the urgency of a Camp Lejeune or Fort Liberty PCS just isn't present here.",
      "If you have orders, start the VA loan process when you have orders in hand: pre-approval in 24-48 hours, house hunt at your pace, close in 30 days. The market generally accommodates a calmer timeline.",
      "If you're settling in the area post-service: the VA benefit doesn't expire. Many of the post-service airmen I work with leverage a fully-waived funding fee (service-connected disability rating) for a $0-down primary-residence purchase that simply isn't available through any other loan product.",
    ],

    mistakesHeading: "What Seymour Johnson VA buyers most commonly get wrong.",
    mistakes: [
      "Assuming a smaller market means lower-quality lenders. Local Wayne County banking is strong and several NC-licensed lenders (including this one) work the Seymour Johnson market regularly.",
      "Treating the lower price point as license to skip a verified pre-approval. The math still matters, and a verified letter still wins offers, even in a less competitive market.",
      "Underestimating Wayne County property tax variation. The county rate plus city tax (for properties inside Goldsboro city limits) can meaningfully affect your monthly payment math.",
      "Skipping the funding-fee waiver for an in-process disability rating. If your rating is close, talk to your lender about timing.",
      "Choosing a generic national lender over a NC-experienced one. NC attorney-closing requirements and Wayne County recording timing both matter.",
    ],

    faqs: [
      {
        q: "Is Goldsboro affordable for active-duty airmen?",
        a: "Yes, especially compared to the Triangle, Charlotte, or coastal NC markets. Entry-level Goldsboro homes regularly sit in the $150K-$250K range, and your BAH typically covers the full mortgage payment with room to spare for most rank-and-dependent combinations.",
      },
      {
        q: "What are the VA loan limits in Wayne County?",
        a: `Wayne County is a standard-cost county. The ${CONFORMING_LIMIT_YEAR} FHFA baseline conforming loan limit is ${CONFORMING_LIMIT_DISPLAY}. With full entitlement, no limit applies on a $0-down purchase. With partial entitlement, the limit governs the threshold above which you'd need a down payment.`,
      },
      {
        q: "How long does the VA appraisal take in Wayne County?",
        a: "Generally 7-14 days from order. The local VA panel covers the area well. Slowdowns are usually condition-driven (older inventory, deferred maintenance) rather than appraiser availability.",
      },
      {
        q: "Can I use a VA loan to buy in Mount Olive or rural Wayne County?",
        a: "Yes. Properties in Mount Olive, Pikeville, La Grange, and rural Wayne County all qualify for VA financing as primary residences. Properties on private wells and septic systems trigger specific VA testing requirements. Factor those inspection costs into your contract period.",
      },
      {
        q: "Will my BAH cover a typical Goldsboro mortgage payment?",
        a: "For most active-duty rank-and-dependent combinations, yes, and often with margin. Entry-level Goldsboro homes commonly carry mortgage payments well below the local BAH rate, which makes the home essentially self-funding.",
      },
      {
        q: "Should I buy in Goldsboro or commute from a smaller town like Mount Olive?",
        a: "Personal call. Goldsboro is the shortest commute and the highest concentration of military families. Mount Olive and the surrounding rural areas offer more space at lower cost. Run both options against your priorities. The math often favors whichever lifestyle you actually prefer.",
      },
    ],

    related: [
      {
        href: "/loan-programs/va",
        label: "VA loans overview",
        note: "The full VA program page with eligibility, process, and FAQs.",
      },
      {
        href: "/pcs-camp-lejeune-va-loan-guide",
        label: "PCS week-by-week framework",
        note: "Same timeline structure applies to a Seymour Johnson PCS.",
      },
      {
        href: "/funding-fee-waiver-disabled-veterans",
        label: "Funding fee waiver for disabled Veterans",
        note: "Specific disability-rating waiver mechanics.",
      },
      {
        href: "/va-loan-pcs-checklist",
        label: "Universal VA loan PCS checklist",
        note: "Phase-by-phase action items regardless of base.",
      },
    ],
  },
} as const;

export type MilitaryBaseSlug = keyof typeof militaryBases;
