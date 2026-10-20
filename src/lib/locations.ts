/**
 * Source of truth for local SEO landing pages (city-level).
 *
 * Each entry drives one page via <LocationTemplate />. Unique, substantive
 * local knowledge per location, no thin duplicate content. If a location
 * doesn't have real local context, don't add it here.
 */

import type { LoanProgramSlug } from "./loanPrograms";

export type LocationMarketNote = {
  title: string;
  body: string;
};

export type LocationScenario = {
  title: string;
  body: string;
};

export type LocationFAQ = {
  q: string;
  a: string;
};

export type LocationProgram = {
  slug: LoanProgramSlug;
  why: string;
};

export type Location = {
  slug: string;
  metaTitle: string;
  metaDescription: string;

  city: string;
  state: string;
  region: string;

  eyebrow: string;
  title: string;
  lead: string;

  introHeading: string;
  introBody: string[];

  marketHeading: string;
  marketNotes: LocationMarketNote[];

  scenariosHeading: string;
  scenariosIntro?: string;
  scenarios: LocationScenario[];

  programsHeading: string;
  programs: LocationProgram[];

  faqHeading: string;
  faqs: LocationFAQ[];

  /** Optional curated reading list of article slugs. The template renders
   *  these as internal links beneath the FAQ. Each slug must match an
   *  entry in `lib/articles.ts`. */
  relatedArticleSlugs?: string[];
};

export const locations = {
  "wilmington-nc": {
    slug: "wilmington-nc",
    metaTitle: "Wilmington, NC Mortgage Lender | VA, FHA & Conventional Loans",
    metaDescription:
      "Local mortgage lender for Wilmington, NC buyers: VA, FHA, conventional, second-home, and relocation loans in coastal North Carolina.",

    city: "Wilmington",
    state: "NC",
    region: "Coastal North Carolina",

    eyebrow: "Wilmington, NC",
    title: "Home financing in Wilmington, done the right way.",
    lead: "Wilmington is one of the most active markets in coastal North Carolina, and one of the most varied. From downtown historic homes to beachfront condos to new construction out toward Porters Neck, every deal has its own rhythm. Here's how I help.",

    introHeading: "A market with real range.",
    introBody: [
      "Wilmington isn't one market. It's several stacked on top of each other. You've got a walkable downtown with 100-year-old homes that require careful lending. You've got Wrightsville Beach and Figure Eight with high-end second homes and condo association quirks. You've got Landfall and Porters Neck with move-up families looking at new construction. And you've got buyers coming from out of state who need someone to walk them through how coastal properties actually work.",
      "The common thread: every Wilmington buyer benefits from a lender who knows the area's specifics. Flood zones, wind insurance, condo project approvals, and second-home financing rules all matter more here than they do inland. Getting those details wrong at the last minute is how deals fall apart.",
      "I work with Wilmington buyers across the full spectrum: first-time locals, relocating families, and investors picking up short-term rentals. The goal is always the same: clear guidance, no surprises, and a closing that actually happens on time.",
    ],

    marketHeading: "What Wilmington buyers should know.",
    marketNotes: [
      {
        title: "Flood zones matter",
        body: "A lot of Wilmington properties sit in mapped flood zones. We check this before you write an offer so you know what flood insurance will actually cost and how it affects your monthly payment.",
      },
      {
        title: "Wind and hail insurance",
        body: "Coastal properties face additional insurance requirements. I work with local agents who can quote accurately and quickly so your pre-approval holds up under real numbers.",
      },
      {
        title: "Condo financing gets tricky",
        body: "Not every Wilmington condo complex is eligible for every loan type. Some are warrantable, some aren't, and the VA and FHA approval lists change. I verify before you commit.",
      },
    ],

    scenariosHeading: "Common Wilmington buyer scenarios.",
    scenariosIntro:
      "These are the situations I see most often from buyers in the Wilmington area.",
    scenarios: [
      {
        title: "Relocating from the Northeast or Midwest",
        body: "Wilmington is a top landing spot for buyers moving from higher-cost areas. I help coordinate remote document collection, timing with your current home sale, and understanding what your budget actually buys here.",
      },
      {
        title: "Second-home and vacation purchases",
        body: "Beach-area second homes have specific financing rules: tighter reserves, slightly higher rates, and sometimes condo project requirements. I make sure all of it is lined up before closing gets tight.",
      },
      {
        title: "Investors buying short-term rentals",
        body: "Wilmington is a strong short-term rental market, particularly near the beaches. DSCR loans and conventional investment financing are both in play depending on your portfolio and credit profile.",
      },
      {
        title: "First-time buyers in the city core",
        body: "Entry-level Wilmington buyers often look at areas like Monkey Junction, Ogden, and south Wilmington. FHA and conventional 3% down programs are usually the right tools here.",
      },
    ],

    programsHeading: "Programs that come up most in Wilmington.",
    programs: [
      {
        slug: "conventional",
        why: "Move-up buyers and second-home purchases are typically conventional territory, the most flexible option for the majority of Wilmington price points.",
      },
      {
        slug: "jumbo",
        why: "Homes in Landfall, Wrightsville Beach, and Figure Eight frequently land above conforming limits. Jumbo handles the gap with competitive pricing for strong borrowers.",
      },
      {
        slug: "dscr",
        why: "For Wilmington's robust short-term rental market, DSCR loans let investors qualify off projected rental income instead of personal W-2s.",
      },
    ],

    faqHeading: "Common questions from Wilmington buyers.",
    faqs: [
      {
        q: "Is now a good time to buy in Wilmington?",
        a: "That depends more on your personal situation than on the market. Wilmington prices have stabilized after several years of sharp growth, and inventory is better than it was. I can run the math on buying versus renting for your specific numbers so you can make the call with real data.",
      },
      {
        q: "How much should I budget for flood insurance?",
        a: "It varies enormously by property. A home in a preferred risk zone might cost $400-$800 per year. A home in a high-risk coastal flood zone can easily hit $3,000 or more. Before you write an offer, we'll get a quote so you know exactly what to expect.",
      },
      {
        q: "Can I buy a short-term rental in Wilmington as my first investment?",
        a: "Yes, but plan carefully. Conventional investment loans and DSCR both work for first-time STR buyers. Local rental regulations also matter. Wilmington and the surrounding beach towns each have their own rules about short-term rentals, and we should understand them before you commit.",
      },
      {
        q: "Do I have to live in Wilmington to work with you?",
        a: "No. I work with relocation buyers regularly. Most of my process is remote, from document collection through closing. As long as you're buying in North Carolina, I can help.",
      },
    ],

    relatedArticleSlugs: ["relocating-to-nc", "how-much-house-can-you-afford", "strong-pre-approval"],
  },

  "leland-nc": {
    slug: "leland-nc",
    metaTitle: "Leland, NC Mortgage Lender | USDA, VA & First-Time Buyer Loans",
    metaDescription:
      "Local mortgage lender for Leland, NC buyers: USDA zero-down, VA, first-time buyer, and relocation loans in Brunswick County.",

    city: "Leland",
    state: "NC",
    region: "Brunswick County",

    eyebrow: "Leland, NC",
    title: "Financing a move to Leland, without the guesswork.",
    lead: "Leland has quietly become one of the fastest-growing markets in coastal North Carolina. Planned communities like Brunswick Forest, Magnolia Greens, and Compass Pointe are drawing buyers from across the country, and each one has its own financing quirks worth knowing about.",

    introHeading: "The Wilmington overflow market.",
    introBody: [
      "Leland is often the answer buyers arrive at after Wilmington gets too expensive. Sitting just across the Cape Fear River, Leland offers newer construction, more space, and a growing list of amenity-rich planned communities, at price points that still leave room in the budget.",
      "What makes Leland interesting from a financing perspective is the mix of buyer profiles and the USDA eligibility. Portions of Leland still qualify for USDA's zero-down rural development program, a major advantage for first-time and moderate-income buyers. Other parts of Leland sit just outside the eligibility map, and knowing which side of the line a specific address falls on matters.",
      "I work with Leland buyers across the range: retirees moving into Brunswick Forest, young families in Magnolia Greens, first-time buyers hunting for USDA-eligible homes, and relocators coming down from the Northeast. The common thread is wanting a lender who actually knows the local landscape.",
    ],

    marketHeading: "What Leland buyers should know.",
    marketNotes: [
      {
        title: "USDA eligibility varies block by block",
        body: "Some Leland neighborhoods qualify for zero-down USDA financing, others don't. I check any address you're considering before you make an offer.",
      },
      {
        title: "HOA dues and capital contributions",
        body: "Most Leland planned communities have meaningful HOA dues and one-time capital contributions at closing. I build these into your monthly payment so there are no surprises.",
      },
      {
        title: "Insurance is typically easier here",
        body: "Compared to homes directly on the coast, Leland properties usually get better insurance pricing: less wind exposure and lower flood risk in most neighborhoods.",
      },
    ],

    scenariosHeading: "Common Leland buyer scenarios.",
    scenariosIntro:
      "These are the situations I see most often from buyers in the Leland area.",
    scenarios: [
      {
        title: "Retirees from the Northeast",
        body: "Leland attracts a significant number of retirement buyers downsizing from higher-cost states. I help coordinate the sale-purchase timing and understand how retirement income qualifies on a mortgage application.",
      },
      {
        title: "First-time buyers priced out of Wilmington",
        body: "When Wilmington gets too expensive, Leland is often the next stop. FHA, USDA, and conventional 3% down programs all come into play here. The right choice depends on the address and your profile.",
      },
      {
        title: "Young families in planned communities",
        body: "Magnolia Greens, Brunswick Forest, and Compass Pointe all attract growing families. Move-up financing, bridge strategies, and new construction timelines are the common conversations.",
      },
      {
        title: "Relocation buyers from corporate moves",
        body: "The Wilmington metro is a regional employment hub, and Leland's newer inventory appeals to relocators. I handle the remote timing and document collection so the buy-before-sell sequencing works.",
      },
    ],

    programsHeading: "Programs that come up most in Leland.",
    programs: [
      {
        slug: "usda",
        why: "Leland is one of the best markets in the Wilmington area for USDA financing: zero down and below-market mortgage insurance in eligible ZIPs.",
      },
      {
        slug: "conventional",
        why: "For planned-community move-ups and buyers above the USDA income limits, conventional is typically the default choice.",
      },
      {
        slug: "fha",
        why: "FHA is a common path for first-time Leland buyers who don't qualify for USDA: still low down and more flexible credit guidelines.",
      },
    ],

    faqHeading: "Common questions from Leland buyers.",
    faqs: [
      {
        q: "Does my Leland address qualify for USDA?",
        a: "It depends on exactly where the property sits. The USDA eligibility map covers a lot of Leland but not all of it, and the line isn't always where buyers expect. I check any address before you invest time in an offer.",
      },
      {
        q: "Are Brunswick Forest homes harder to finance?",
        a: "Not harder, but the HOA dues and one-time capital contributions need to be built into your budget carefully. Some new construction deals in the community have specific lender requirements. I work with buyers there regularly and know what to watch for.",
      },
      {
        q: "Is Leland a good investment market?",
        a: "It's gotten more competitive. Short-term rentals are limited in most Leland neighborhoods due to HOA restrictions, so most investor activity here is long-term rental. DSCR and conventional investment loans both work. The returns depend heavily on the specific property.",
      },
      {
        q: "How do I compare Leland financing to Wilmington?",
        a: "The main difference isn't the loan itself. It's the insurance, HOA, and occasionally USDA eligibility. Rate and program options are usually similar. I can run a full cost comparison between two specific properties side by side if you're still deciding between the two markets.",
      },
    ],

    relatedArticleSlugs: ["relocating-to-nc", "how-much-house-can-you-afford", "mortgage-fees"],
  },

  "hampstead-nc": {
    slug: "hampstead-nc",
    metaTitle: "Hampstead, NC Mortgage Lender | Waterfront & Coastal Home Loans",
    metaDescription:
      "Local mortgage lender for Hampstead, NC: waterfront home loans, move-up buyers, and relocation financing along the Pender County coast.",

    city: "Hampstead",
    state: "NC",
    region: "Pender County Coast",

    eyebrow: "Hampstead, NC",
    title: "Waterfront financing, handled carefully.",
    lead: "Hampstead sits on the US-17 corridor north of Wilmington, with Intracoastal Waterway access, quiet neighborhoods, and a lot of buyers drawn to coastal living without Wilmington's traffic. The financing is often more nuanced than buyers expect.",

    introHeading: "Coastal without the crowds.",
    introBody: [
      "Hampstead is the kind of market where the home itself often drives the financing strategy. Waterfront and water-access properties, private docks, older coastal homes mixed with newer construction in developments like Olde Point, Belvedere Plantation, and Topsail Greens. Each one has its own considerations.",
      "The typical Hampstead buyer either works in Wilmington and wants space and quiet, or is relocating for the coastal lifestyle and the easier access to Topsail Island. Retirement buyers are a major part of the market, and second-home purchases are common.",
      "From a financing perspective, the main things to watch are wind and flood insurance, waterfront property underwriting (especially appraisal challenges), and, for second-home buyers, the documentation around reserves and primary residence tests. Getting those right the first time is what keeps deals moving.",
    ],

    marketHeading: "What Hampstead buyers should know.",
    marketNotes: [
      {
        title: "Waterfront appraisals take extra care",
        body: "Unique properties can be harder to appraise. I work with experienced coastal appraisers and prepare buyers for the possibility of adjustments before they happen.",
      },
      {
        title: "Insurance matters more here",
        body: "Properties closer to the Intracoastal Waterway face higher wind and flood costs. Getting insurance quotes early protects your pre-approval and your closing timeline.",
      },
      {
        title: "Second-home rules apply often",
        body: "Many Hampstead purchases are second homes. The financing is straightforward if you understand the documentation rules up front, and frustrating if you don't.",
      },
    ],

    scenariosHeading: "Common Hampstead buyer scenarios.",
    scenariosIntro:
      "These are the buyer profiles I see most often in the Hampstead area.",
    scenarios: [
      {
        title: "Retirees and pre-retirees",
        body: "Hampstead attracts a lot of buyers in the 55-70 range looking for coastal retirement. Retirement income qualification can be tricky: Social Security, pensions, and distributions all document differently. I walk you through exactly what's needed.",
      },
      {
        title: "Wilmington professionals wanting space",
        body: "Professionals commuting into Wilmington often choose Hampstead for the lifestyle trade-off: more house, less traffic. Conventional financing is usually the cleanest fit.",
      },
      {
        title: "Second-home and vacation buyers",
        body: "Properties near the Intracoastal or within reach of Topsail Island are popular as vacation homes. Second-home underwriting has specific rules and reserve requirements we plan around early.",
      },
      {
        title: "Waterfront move-up buyers",
        body: "Moving up into a waterfront home, especially with dock access, adds layers: unique property underwriting, insurance complexity, and sometimes jumbo territory. Planning beats scrambling.",
      },
    ],

    programsHeading: "Programs that come up most in Hampstead.",
    programs: [
      {
        slug: "conventional",
        why: "The default for Hampstead second homes, retiree moves, and move-up buyers, flexible enough to handle most of what this market throws at it.",
      },
      {
        slug: "jumbo",
        why: "Waterfront and higher-end Hampstead properties frequently cross conforming loan limits. Jumbo is where these deals live.",
      },
      {
        slug: "va",
        why: "Many Hampstead buyers are military: retired, active, or connected to Camp Lejeune nearby. VA loans remain one of the strongest tools in this market.",
      },
    ],

    faqHeading: "Common questions from Hampstead buyers.",
    faqs: [
      {
        q: "Can I finance a waterfront home with dock access?",
        a: "Yes, but the property needs to appraise as residential (not commercial), and the dock has to meet specific guidelines. Private docks are usually fine; shared slips and marina memberships sometimes complicate things. I ask the right questions early so we don't hit a surprise in underwriting.",
      },
      {
        q: "What's different about second-home financing?",
        a: "Second homes require slightly higher down payments than primary residences (usually 10% or more), better credit, and stronger reserves. They also need to be far enough from your primary home to qualify as a legitimate second home under lender guidelines. I'll map this out before we apply.",
      },
      {
        q: "How bad is insurance in Hampstead?",
        a: "Better than directly on the coast, worse than inland. Much of it depends on the specific property, elevation, and distance from water. I connect clients with local insurance agents who can quote accurately in 24-48 hours.",
      },
      {
        q: "Is Hampstead growing?",
        a: "Steadily, yes. The US-17 corridor is seeing continued development, and new inventory is coming online in established communities and new builds. Pricing has remained more reasonable than Wilmington proper.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "relocating-to-nc", "credit-mistakes"],
  },

  "jacksonville-nc": {
    slug: "jacksonville-nc",
    metaTitle: "Jacksonville NC VA Loans - Camp Lejeune Mortgages",
    metaDescription:
      "VA loan guidance for Jacksonville, NC and Camp Lejeune buyers. Fast, reliable mortgage support for military families, PCS moves, and investor purchases.",

    city: "Jacksonville",
    state: "NC",
    region: "Camp Lejeune / Onslow County",

    eyebrow: "Jacksonville, NC",
    title: "The Camp Lejeune market, done right.",
    lead: "Jacksonville is one of the most VA-heavy markets in the country. Camp Lejeune shapes everything, from buyer profiles to timelines to the specific rhythms of PCS moves. A loan officer who doesn't live in that rhythm is a liability. I do.",

    introHeading: "A military market with its own rules.",
    introBody: [
      "Jacksonville's housing market runs on the schedule of the base. PCS cycles drive buying and selling activity. Rental demand stays consistent year-round because of the steady rotation of service members. Most purchases are VA loans. And timing is always, always, a factor.",
      "What matters in this market isn't just knowing VA loans. It's knowing how PCS timelines work, how to structure pre-approvals around uncertain move dates, how to handle the sequence when you're selling a Jacksonville home while buying at your next duty station, and how investor buyers can build strong rental portfolios in a market with reliable demand.",
      "I work with Jacksonville buyers on both sides: military families using their VA benefit to buy a primary residence, and investors, often veterans themselves, picking up rentals near the base. The strategy looks different for each, but the core principle is the same: plan the timeline carefully, verify everything upfront, and execute on time.",
    ],

    marketHeading: "What Jacksonville buyers should know.",
    marketNotes: [
      {
        title: "VA is the default, not the exception",
        body: "Most buyers here use VA. Your pre-approval needs to come from a lender who does these loans regularly, not as a side product.",
      },
      {
        title: "PCS timelines require flexibility",
        body: "Orders change. Move dates slip. A good process builds in contingency so your closing doesn't become the thing standing between you and your next assignment.",
      },
      {
        title: "Investor activity is steady",
        body: "Rental demand stays consistent because of the base. DSCR loans and conventional investment financing both have a role. The right choice depends on your portfolio.",
      },
    ],

    scenariosHeading: "Common Jacksonville buyer scenarios.",
    scenariosIntro:
      "These are the profiles I see most often in the Jacksonville area.",
    scenarios: [
      {
        title: "Active-duty PCS buyers",
        body: "You've got orders, a timeline, and a BAH number you're working with. I help structure a VA pre-approval that works with your move schedule and sets you up to close on the other end without a gap.",
      },
      {
        title: "Veterans buying rentals near base",
        body: "Once your VA loan is paid off or you've restored entitlement, buying investment rentals in the Jacksonville area is a popular strategy. Conventional and DSCR both come into play depending on your situation.",
      },
      {
        title: "Selling one VA home while buying another",
        body: "Moving to a new duty station while keeping (or selling) your Jacksonville home is a specific sequencing challenge. I've walked many families through it.",
      },
      {
        title: "First-time buyers using their benefit",
        body: "A lot of junior enlisted are first-time buyers, first-time VA users, and first-time anything. The value I add is explaining everything in plain terms and making sure the loan officer experience doesn't add stress to an already-busy life.",
      },
    ],

    programsHeading: "Programs that come up most in Jacksonville.",
    programs: [
      {
        slug: "va",
        why: "VA is the overwhelming majority of Jacksonville purchases, and for good reason. It's the strongest program for eligible buyers in this market.",
      },
      {
        slug: "conventional",
        why: "For non-eligible buyers or for veterans buying a second property that isn't VA eligible, conventional is usually the default.",
      },
      {
        slug: "dscr",
        why: "For veterans building rental portfolios in the Jacksonville area, DSCR loans skip the DTI ceiling that eventually limits conventional financing.",
      },
    ],

    faqHeading: "Common questions from Jacksonville buyers.",
    faqs: [
      {
        q: "How do you handle PCS timing with a VA loan?",
        a: "Carefully. We get your Certificate of Eligibility early, verify your BAH or orders, and build a timeline that accounts for likely delays. I stay in contact with your command or relocation coordinator if needed. The goal is zero gap between your move date and your close date.",
      },
      {
        q: "Can I use my VA loan at my next duty station if I still own my Jacksonville home?",
        a: "Often yes. Your VA entitlement can sometimes be split across two loans at once. It depends on your remaining entitlement and the property values involved. I'll run the math specifically for your situation before you commit to a plan.",
      },
      {
        q: "Is Jacksonville a good investment market?",
        a: "For long-term rentals near base, yes. Demand is consistent and tenant turnover is predictable. Short-term rentals are less relevant here than in Wilmington. DSCR loans work well for portfolio investors scaling up.",
      },
      {
        q: "Do I need to use my VA loan for my first home?",
        a: "Not necessarily. VA is usually the best option for eligible buyers, but conventional or USDA can occasionally be a better fit depending on the situation. I'll compare both before making a recommendation: no product bias, just the math.",
      },
    ],

    relatedArticleSlugs: ["va-loan-hidden-benefits", "strong-pre-approval", "credit-mistakes"],
  },

  "raleigh-nc": {
    slug: "raleigh-nc",
    metaTitle: "Raleigh, NC Mortgage Lender | First-Time, VA & Investment Loans",
    metaDescription:
      "Local mortgage lender for Raleigh, NC buyers: first-time buyer, VA, relocation, and investment property loans across the Triangle.",

    city: "Raleigh",
    state: "NC",
    region: "The Triangle",

    eyebrow: "Raleigh, NC",
    title: "Raleigh home financing, built for a fast market.",
    lead: "Raleigh is one of the most competitive housing markets in the Southeast. Tech jobs, an excellent university system, and a steady flow of relocators have made offers tight and timelines short. The lender you pick actually matters here.",

    introHeading: "A market that rewards preparation.",
    introBody: [
      "Raleigh doesn't reward lazy financing. Multiple offers are common. Closing timelines are tight. Sellers and listing agents scrutinize pre-approvals carefully. A verified pre-approval from a lender who will actually close on time can be the difference between winning a home and being the second-place offer for the third time in a month.",
      "The buyer mix here is broad. First-time buyers competing in a tough market. Tech professionals relocating from higher-cost metros. Triangle-wide move-up families. Investors building rental portfolios in a job-growth market with strong long-term fundamentals. Each group has different needs, and different leverage points.",
      "My approach in Raleigh is to get the financing tight before you start touring homes. That means a real pre-approval with documentation verified, a clear strategy for how your offer will stand out, and a commitment to close on time even when the timeline is aggressive. No surprises is the whole game here.",
    ],

    marketHeading: "What Raleigh buyers should know.",
    marketNotes: [
      {
        title: "Strong pre-approvals win",
        body: "In a multi-offer market, your pre-approval letter is part of your offer. Mine are verified, not self-reported, and listing agents notice the difference.",
      },
      {
        title: "Appraisal gaps are common",
        body: "In competitive segments, you may need to offer above asking and cover a potential appraisal gap. I help you understand what that means for your financing and your cash.",
      },
      {
        title: "Timelines are tight",
        body: "Two-week closings happen in Raleigh. My process is built to handle that when the situation calls for it, without cutting corners.",
      },
    ],

    scenariosHeading: "Common Raleigh buyer scenarios.",
    scenariosIntro:
      "These are the profiles I work with most often in the Triangle.",
    scenarios: [
      {
        title: "Tech professionals relocating from HCOL areas",
        body: "Coming from the Bay Area, Seattle, Boston, or New York? Your qualifying income, stock compensation, and equity from your current home all factor in differently. I structure applications to capture the full picture.",
      },
      {
        title: "First-time buyers in a competitive market",
        body: "First-time buying in Raleigh is harder than it used to be, but the tools are still there. FHA, conventional 3-5% down, and down payment assistance programs all have roles depending on the situation.",
      },
      {
        title: "Move-up families within the Triangle",
        body: "Selling a starter home in Cary and moving up to a larger home in North Raleigh is a common arc. Bridge financing, contingent offers, and timing strategy are all conversations I've had many times.",
      },
      {
        title: "Investors building long-term rental portfolios",
        body: "Raleigh's population growth makes it a strong long-term rental market. DSCR loans and conventional investment financing both have a place depending on where you are in your portfolio journey.",
      },
    ],

    programsHeading: "Programs that come up most in Raleigh.",
    programs: [
      {
        slug: "conventional",
        why: "The clear default for most Raleigh buyers: move-up families, relocators with solid credit, and investors early in their portfolio.",
      },
      {
        slug: "jumbo",
        why: "Higher-end Raleigh neighborhoods like North Hills, Five Points, and parts of Cary frequently land above conforming loan limits.",
      },
      {
        slug: "dscr",
        why: "For investors scaling Raleigh rental portfolios past the conventional DTI ceiling, DSCR is the natural next tool.",
      },
    ],

    faqHeading: "Common questions from Raleigh buyers.",
    faqs: [
      {
        q: "How do I make my offer stand out in Raleigh?",
        a: "A verified pre-approval, shorter financing contingency windows when appropriate, and a loan officer willing to call the listing agent directly to vouch for your file. In competitive situations, I do all three, and it matters.",
      },
      {
        q: "What's the jumbo threshold in Raleigh?",
        a: "Wake County's conforming loan limit is roughly in line with most of NC: mid-$700,000s for a single-family home in 2026. Above that, you're in jumbo territory, which is its own conversation.",
      },
      {
        q: "Can I use out-of-state stock or bonus income to qualify?",
        a: "Usually yes, with proper documentation. RSUs, bonus history, and commission income all have specific rules about how they're averaged and counted. I've worked with a lot of relocating tech professionals and know how to structure the file.",
      },
      {
        q: "Is now a good time to buy in Raleigh?",
        a: "Raleigh's long-term fundamentals remain strong: job growth, population growth, and a diverse economy. The short-term market moves with rates and inventory. I'll help you run the buy-versus-rent math for your specific numbers rather than guess at the market.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "mortgage-fees", "when-to-refinance"],
  },
  "fayetteville-nc": {
    slug: "fayetteville-nc",
    metaTitle: "Fayetteville, NC Mortgage Lender | VA Loans Near Fort Bragg",
    metaDescription:
      "Fayetteville-based mortgage lender for Fort Bragg families: VA loans, PCS timelines, first-time buyers, and investment properties in Cumberland County.",

    city: "Fayetteville",
    state: "NC",
    region: "Fort Bragg / Cumberland County",

    eyebrow: "Fayetteville, NC",
    title: "Your lender is actually in Fayetteville.",
    lead: "My office is in Fayetteville, minutes from Fort Bragg's gates. Fayetteville is a market I don't just serve remotely. I work here, and the VA loan rhythm of this market is the core of my practice.",

    introHeading: "A hometown market, not a mailing address.",
    introBody: [
      "Fayetteville runs on Fort Bragg (formerly Fort Liberty). PCS season drives the calendar, BAH drives the budgets, and VA loans drive the majority of purchases. The market rewards lenders who understand orders, entitlement math, and the reality that military timelines change without warning.",
      "Because my office is physically in Fayetteville, I see this market at street level: which neighborhoods junior enlisted families actually buy in, where field-grade officers look off Ramsey Street versus out toward Hope Mills and Raeford, and how the rental market behaves when a unit rotates.",
      "I work with active-duty buyers using their benefit for the first time, veterans settling here after their last duty station, and investors, many of them former military, building rental portfolios around one of the most stable tenant bases in the country.",
    ],

    marketHeading: "What Fayetteville buyers should know.",
    marketNotes: [
      {
        title: "VA fluency is non-negotiable",
        body: "Most purchases here are VA. Your lender should know Certificates of Eligibility, funding fee waivers, and split entitlement cold, because listing agents in this market can tell when they don't.",
      },
      {
        title: "Neighborhood range is wide",
        body: "Fayetteville prices span from entry-level starter homes to established neighborhoods like Kings Grant and Gates Four. The right loan structure depends heavily on which segment you're buying in.",
      },
      {
        title: "Rental demand is structural",
        body: "The base guarantees tenant turnover and steady demand. That makes Fayetteville one of the more forgiving markets in NC for first-time landlords, if the numbers are run honestly.",
      },
    ],

    scenariosHeading: "Common Fayetteville buyer scenarios.",
    scenariosIntro:
      "These are the situations I see most often around Fort Bragg.",
    scenarios: [
      {
        title: "First-time VA buyers on orders",
        body: "You have orders to Bragg, a BAH number, and maybe a few weeks to figure out housing. I structure VA pre-approvals around your report date and keep the file ready to close the moment you find the house.",
      },
      {
        title: "Retiring or separating service members staying local",
        body: "A lot of soldiers finish their career at Bragg and stay. Transition timing matters: qualifying with terminal leave income, a new civilian job, or VA disability income each documents differently.",
      },
      {
        title: "Veterans converting a residence into a rental",
        body: "Buy with VA, live in it, PCS or move up, then rent it out. It's the classic Fayetteville portfolio starter. I help plan entitlement restoration so your next purchase isn't boxed in.",
      },
      {
        title: "Investors buying near the base",
        body: "Fayetteville's price-to-rent ratios attract out-of-state and local investors alike. DSCR and conventional investment loans both work here; the right one depends on your portfolio and tax picture.",
      },
    ],

    programsHeading: "Programs that come up most in Fayetteville.",
    programs: [
      {
        slug: "va",
        why: "This is a VA market first. For eligible buyers, zero down and no monthly mortgage insurance is very hard to beat at Fayetteville price points.",
      },
      {
        slug: "conventional",
        why: "For non-military buyers and for veterans buying second properties, conventional fills the gap with flexible terms.",
      },
      {
        slug: "dscr",
        why: "Investors scaling Fayetteville rental portfolios past the conventional DTI ceiling use DSCR to qualify off the property's rent instead of personal income.",
      },
    ],

    faqHeading: "Common questions from Fayetteville buyers.",
    faqs: [
      {
        q: "Can we start my loan before I arrive at Fort Bragg?",
        a: "Yes. With orders in hand, we can complete your pre-approval remotely, shop with your agent virtually, and line up closing near your report date. Most of my PCS buyers do the bulk of the process before they ever set foot in North Carolina.",
      },
      {
        q: "Does BAH count as income for my mortgage?",
        a: "Yes. BAH and BAS are grossed into your qualifying income, and because BAH is non-taxable, it often counts for more than buyers expect. I'll show you exactly what your entitlements support before you shop.",
      },
      {
        q: "Is Fayetteville a good market for a first investment property?",
        a: "It's one of the better ones in the state for cash flow. Steady military rental demand, reasonable purchase prices, and predictable turnover. The catch is property management and tenant cycling, which I encourage every first-time investor to budget for honestly.",
      },
      {
        q: "What if my orders change mid-purchase?",
        a: "It happens, and VA contracts in military towns generally anticipate it. We build your timeline with contingency, and if orders shift, we adjust the close date or restructure. You won't be the first buyer I've walked through a mid-contract PCS change.",
      },
    ],

    relatedArticleSlugs: ["va-loan-hidden-benefits", "strong-pre-approval", "dscr-loans-north-carolina"],
  },

  "southern-pines-pinehurst-nc": {
    slug: "southern-pines-pinehurst-nc",
    metaTitle: "Southern Pines & Pinehurst, NC Mortgage Lender | VA & Jumbo",
    metaDescription:
      "Mortgage lender for Southern Pines, Pinehurst, and Aberdeen, NC: VA loans for special operations families, golf-community jumbo loans, and retirement moves in Moore County.",

    city: "Southern Pines & Pinehurst",
    state: "NC",
    region: "Moore County / The Sandhills",

    eyebrow: "Southern Pines & Pinehurst, NC",
    title: "The Sandhills market, from golf cottages to horse farms.",
    lead: "Moore County is two markets wearing one zip code: a world-class golf destination drawing retirees and second-home buyers, and the quiet home base for special operations families commuting to Fort Bragg. I finance both, and they work very differently.",

    introHeading: "Golf country with a military backbone.",
    introBody: [
      "Pinehurst's championship courses put Moore County on the national map, and every U.S. Open cycle brings a fresh wave of buyers who fell in love with the area on a golf trip. That side of the market is conventional and jumbo territory: golf-front homes, gated communities like Forest Creek and CCNC, and retirement relocations from the Northeast.",
      "The other side is quieter but just as important. Southern Pines and Aberdeen have long been the preferred home base for special operations soldiers and aviators stationed at Fort Bragg who want good schools and small-town life worth the commute up US-1. That side of the market runs on VA loans and PCS timelines.",
      "Then there's the horse country: Southern Pines' equestrian properties with acreage, barns, and outbuildings that require a lender who understands how unique properties appraise and underwrite. Cookie-cutter lending breaks down fast out here.",
    ],

    marketHeading: "What Moore County buyers should know.",
    marketNotes: [
      {
        title: "Acreage and outbuildings change the underwriting",
        body: "Horse farms and large-lot properties need appraisers with real comparable sales and lenders who know how to document mixed-use acreage. I line both up before you offer.",
      },
      {
        title: "Golf community fees are part of your payment",
        body: "Club initiation fees, mandatory memberships, and HOA dues vary widely between Pinehurst-area communities. We build the real all-in monthly cost before you commit.",
      },
      {
        title: "VA works here more than people assume",
        body: "Plenty of Moore County sellers and agents see VA offers weekly thanks to the Fort Bragg community. A well-prepared VA offer competes just fine in this market.",
      },
    ],

    scenariosHeading: "Common Sandhills buyer scenarios.",
    scenariosIntro:
      "These are the profiles I see most often in Southern Pines, Pinehurst, and Aberdeen.",
    scenarios: [
      {
        title: "Special operations families buying near Southern Pines",
        body: "The commute to Bragg is the trade for schools, space, and community. VA loans dominate here, often at price points above the typical Fayetteville purchase, and entitlement math matters.",
      },
      {
        title: "Golf retirees relocating from out of state",
        body: "Buying in Pinehurst on retirement income, asset depletion, or the proceeds of a northern home sale each qualifies differently. I structure the file around how you actually hold your wealth.",
      },
      {
        title: "Second-home buyers who visit for the golf",
        body: "A Pinehurst cottage used a few weeks a year is classic second-home financing: 10%+ down, reserve requirements, and occupancy rules we plan around up front.",
      },
      {
        title: "Equestrian and acreage purchases",
        body: "Farms with barns, fencing, and acreage need careful structuring, sometimes conventional, sometimes jumbo, occasionally with appraisal contingencies built in. Preparation is everything.",
      },
    ],

    programsHeading: "Programs that come up most in the Sandhills.",
    programs: [
      {
        slug: "va",
        why: "The Fort Bragg special operations community makes Southern Pines and Aberdeen a steady VA market, and I run these files constantly.",
      },
      {
        slug: "jumbo",
        why: "Golf-front homes in Pinehurst's premier communities and larger equestrian estates regularly clear conforming limits.",
      },
      {
        slug: "conventional",
        why: "The workhorse for retirement relocations, second homes, and move-up buyers throughout Moore County.",
      },
    ],

    faqHeading: "Common questions from Moore County buyers.",
    faqs: [
      {
        q: "Can I use a VA loan for a home in Southern Pines while stationed at Fort Bragg?",
        a: "Yes. VA occupancy rules allow a reasonable commute, and the Bragg-to-Southern Pines pattern is long established. Your BAH is set by your duty station, and we build your budget around it.",
      },
      {
        q: "How do golf community memberships affect my loan?",
        a: "Mandatory club dues count toward your monthly obligations, and some communities require initiation fees at closing. Optional memberships don't count against you. I confirm the structure for the specific community before we finalize numbers.",
      },
      {
        q: "Can you finance a horse farm?",
        a: "Usually, yes, as long as the property is primarily residential. The appraisal is the key: acreage, barns, and outbuildings need the right comparables. Properties with significant commercial boarding operations are a different conversation, and it's worth having early.",
      },
      {
        q: "Is Pinehurst overpriced after the U.S. Open attention?",
        a: "National attention has firmed up prices, but Moore County still compares favorably to golf destinations in Florida or Arizona. Whether a specific property is worth it comes down to the appraisal and your plans. I'll give you a straight read, not a sales pitch.",
      },
    ],

    relatedArticleSlugs: ["va-loan-hidden-benefits", "relocating-to-nc", "how-much-house-can-you-afford"],
  },

  "charlotte-nc": {
    slug: "charlotte-nc",
    metaTitle: "Charlotte, NC Mortgage Lender | Jumbo, Conventional & VA Loans",
    metaDescription:
      "Mortgage lender for Charlotte, NC buyers: jumbo loans, conventional, first-time buyer programs, and investment property financing across Mecklenburg County.",

    city: "Charlotte",
    state: "NC",
    region: "Mecklenburg County / Metro Charlotte",

    eyebrow: "Charlotte, NC",
    title: "Charlotte financing that keeps pace with the market.",
    lead: "Charlotte is North Carolina's biggest, fastest-moving market: a banking hub with relocators arriving weekly, a wide spread of price points, and neighborhoods that behave like separate cities. Winning here starts with financing that's ready before you shop.",

    introHeading: "A big-city market with big-city stakes.",
    introBody: [
      "Charlotte's market splits sharply by neighborhood. Myers Park, Eastover, and Dilworth run deep into jumbo territory. SouthPark and Ballantyne serve move-up families. NoDa and Plaza Midwood draw younger buyers into a competitive mid-range. And areas like Steele Creek, University City, and the towns ringing the city, Matthews, Huntersville, Mint Hill, are where first-time budgets stretch furthest.",
      "The buyer flow is relentless: banking and finance professionals transferring in, corporate relocations, and out-of-state buyers arbitraging costs from bigger metros. Sellers see strong offers regularly, which means your pre-approval has to hold up to scrutiny and your lender has to close on schedule.",
      "I work with Charlotte buyers remotely and efficiently: verified pre-approvals, honest budget math including Mecklenburg's property taxes and HOA structures, and a process built for the two-to-three-week closings this market sometimes demands.",
    ],

    marketHeading: "What Charlotte buyers should know.",
    marketNotes: [
      {
        title: "Jumbo starts earlier than you think",
        body: "In Charlotte's premier neighborhoods, crossing the conforming loan limit is routine. Jumbo underwriting has different reserve and documentation rules, and planning for them early keeps offers clean.",
      },
      {
        title: "RSU and bonus income is common here",
        body: "Banking-sector compensation leans on bonuses and equity. How that income is averaged and documented can swing your qualifying number significantly. Structure matters.",
      },
      {
        title: "The suburbs are their own markets",
        body: "Fort Mill and Rock Hill are across the state line with different taxes; Huntersville, Matthews, and Concord each price differently. I help you compare true monthly costs, not just list prices.",
      },
    ],

    scenariosHeading: "Common Charlotte buyer scenarios.",
    scenariosIntro:
      "These are the profiles I work with most often in the Charlotte metro.",
    scenarios: [
      {
        title: "Finance professionals relocating for work",
        body: "Bonus-heavy compensation, equity awards, and relocation packages all have documentation rules. I structure files so your full compensation actually counts.",
      },
      {
        title: "First-time buyers pushed to the edges",
        body: "Entry-level Charlotte means the ring suburbs and up-and-coming corridors. FHA, conventional low-down, and down payment assistance all have a role depending on the address and your profile.",
      },
      {
        title: "Move-up buyers into SouthPark and beyond",
        body: "Selling one Charlotte home to buy another means sequencing: contingent offers, bridge strategies, or recasting after your sale closes. I map the options before you list.",
      },
      {
        title: "Investors targeting a growth metro",
        body: "Charlotte's population growth supports long-term rentals across a range of price points. DSCR and conventional investment loans both work; portfolio strategy decides which.",
      },
    ],

    programsHeading: "Programs that come up most in Charlotte.",
    programs: [
      {
        slug: "conventional",
        why: "The default for most Charlotte purchases, from first homes in the suburbs to move-up buys inside the loop.",
      },
      {
        slug: "jumbo",
        why: "Myers Park, Eastover, Dilworth, and much of SouthPark price above conforming limits. Jumbo is standard equipment in this market.",
      },
      {
        slug: "dscr",
        why: "For investors scaling in a high-growth metro, DSCR qualifies the property on its rent, sidestepping personal DTI limits.",
      },
    ],

    faqHeading: "Common questions from Charlotte buyers.",
    faqs: [
      {
        q: "Do I need a Charlotte-based lender to buy in Charlotte?",
        a: "No. You need an NC-licensed lender who closes on time and structures your file correctly. My process is built for remote execution, and listing agents care about the quality of the pre-approval, not the office address.",
      },
      {
        q: "How does my bonus or RSU income count?",
        a: "Generally, bonus income needs a history, usually two years, and is averaged; vesting RSUs can count with the right documentation. The difference between counting it and not counting it can change your budget by six figures, so we get it right up front.",
      },
      {
        q: "Should I look at Fort Mill or Rock Hill instead?",
        a: "South Carolina's lower property taxes make the math genuinely different across the state line. I'm happy to run a true side-by-side monthly cost comparison for specific properties, taxes, insurance, and HOA included.",
      },
      {
        q: "Is Charlotte still a good investment market?",
        a: "The fundamentals, job growth, in-migration, and a diversified economy, remain strong. Cash flow is tighter than in smaller NC markets, so Charlotte investing tends to be an appreciation-plus-modest-yield play. I'll help you run honest numbers on any specific property.",
      },
    ],

    relatedArticleSlugs: ["relocating-to-nc", "how-much-house-can-you-afford", "dscr-loans-north-carolina"],
  },

  "belmont-nc": {
    slug: "belmont-nc",
    metaTitle: "Belmont, NC Mortgage Lender | First-Time & Move-Up Home Loans",
    metaDescription:
      "Mortgage lender for Belmont, NC buyers: first-time buyer programs, conventional and FHA loans, and Lake Wylie-area financing in Gaston County.",

    city: "Belmont",
    state: "NC",
    region: "Gaston County / West of Charlotte",

    eyebrow: "Belmont, NC",
    title: "Belmont: small-town Main Street, big-city paycheck.",
    lead: "Belmont has become one of the Charlotte area's most sought-after small towns: a walkable historic downtown, Catawba River and Lake Wylie access, and a commute to Uptown that beats most of Charlotte's own suburbs. The secret is out, and the market shows it.",

    introHeading: "The west side's favorite zip code.",
    introBody: [
      "For years, buyers priced out of Charlotte looked north and south. Now they look west. Belmont's Main Street, its riverfront parks, and its genuinely charming downtown have turned a former mill town into a destination, with new construction filling in around historic neighborhoods.",
      "The buyer mix reflects that arc: young families leaving Charlotte apartments for their first house, move-up buyers wanting the downtown-Belmont lifestyle, and buyers chasing Lake Wylie water access at prices below the Lake Norman equivalent.",
      "Financing here is refreshingly practical. Conventional and FHA cover most of the market, first-time buyer programs stretch further than they do in Mecklenburg, and the occasional waterfront or luxury build brings jumbo into play. My job is matching the tool to the address.",
    ],

    marketHeading: "What Belmont buyers should know.",
    marketNotes: [
      {
        title: "Gaston County taxes work in your favor",
        body: "Property tax rates and assessed values in Gaston County generally run below Mecklenburg's, which quietly improves your monthly payment versus a comparable Charlotte address.",
      },
      {
        title: "Old mill homes need careful eyes",
        body: "Belmont's historic housing stock is a big part of its charm, and older homes can raise appraisal condition notes or repair negotiations. We plan for that before it stalls a closing.",
      },
      {
        title: "Lake Wylie proximity is a value play",
        body: "Water-access and waterfront properties around Lake Wylie price below Lake Norman equivalents, but bring dock permits, HOA rules, and occasionally jumbo financing into the conversation.",
      },
    ],

    scenariosHeading: "Common Belmont buyer scenarios.",
    scenariosIntro: "These are the profiles I see most often in Belmont and greater Gaston County.",
    scenarios: [
      {
        title: "First-time buyers leaving Charlotte rents",
        body: "Belmont and neighboring Mount Holly and Cramerton are where Charlotte-area first-time budgets become real houses. FHA and conventional low-down programs are the usual tools.",
      },
      {
        title: "Move-up families targeting downtown Belmont",
        body: "The blocks around Main Street carry a premium and move quickly. A verified pre-approval and clean offer structure matter more here than anywhere else in Gaston County.",
      },
      {
        title: "Lake Wylie water-access buyers",
        body: "Waterfront and water-access homes involve dock rights, HOA specifics, and sometimes jumbo loan amounts. Getting the details verified early keeps the deal smooth.",
      },
      {
        title: "Commuters comparing Belmont to Charlotte suburbs",
        body: "I regularly run side-by-side monthly cost comparisons, tax rates, insurance, HOA, so buyers can see exactly what Belmont saves (or costs) versus Steele Creek or Huntersville.",
      },
    ],

    programsHeading: "Programs that come up most in Belmont.",
    programs: [
      {
        slug: "conventional",
        why: "The default for most Belmont purchases, and conventional 3-5% down options keep first-time buyers competitive.",
      },
      {
        slug: "fha",
        why: "For buyers with thinner credit or smaller savings, FHA keeps Belmont attainable, especially in the entry-level segment.",
      },
      {
        slug: "jumbo",
        why: "New luxury construction and Lake Wylie waterfront occasionally push past conforming limits.",
      },
    ],

    faqHeading: "Common questions from Belmont buyers.",
    faqs: [
      {
        q: "Is Belmont cheaper than Charlotte?",
        a: "Generally yes, for comparable homes, and Gaston County's lower tax rates compound the savings monthly. Downtown Belmont proper has developed its own premium, though. The honest comparison is address-by-address, and I'm glad to run it.",
      },
      {
        q: "Are older Belmont homes harder to finance?",
        a: "Not usually, but appraisers will note condition issues on century-old homes, things like roofs, wiring, or foundations, and some loan types care more than others. If you're eyeing a fixer, we'll pick the loan program accordingly before you offer.",
      },
      {
        q: "Can I buy on Lake Wylie with a conventional loan?",
        a: "Often yes. Waterfront pushes prices up, but plenty of Lake Wylie-area homes sit within conforming limits. Above that, jumbo takes over. Dock rights and HOA restrictions are the details we verify early.",
      },
      {
        q: "Do first-time buyer programs work in Gaston County?",
        a: "Yes, and often better than in Mecklenburg, since income limits and price caps stretch further at Gaston County price points. NC Home Advantage and similar assistance programs are worth checking for any first-time Belmont buyer.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "credit-mistakes", "mortgage-fees"],
  },

  "durham-nc": {
    slug: "durham-nc",
    metaTitle: "Durham, NC Mortgage Lender | First-Time, Conventional & FHA",
    metaDescription:
      "Mortgage lender for Durham, NC buyers: first-time buyer loans, conventional and FHA programs, historic home financing, and investment loans in the Bull City.",

    city: "Durham",
    state: "NC",
    region: "The Triangle / Bull City",

    eyebrow: "Durham, NC",
    title: "Durham deals move fast. Your financing should too.",
    lead: "Durham pairs a booming research-and-tech economy with one of the most character-rich housing stocks in the state, from 1920s bungalows near Duke to new townhomes rising around downtown. It's a competitive market with quirks worth knowing.",

    introHeading: "The Triangle's most interesting market.",
    introBody: [
      "Durham's economy runs on Duke University, Duke Health, and the Research Triangle Park corridor, a steady engine of relocating researchers, medical residents, and tech workers who all need housing at once. Combine that with Durham's cultural pull and you get a market where good homes draw multiple offers quickly.",
      "The housing stock is the wrinkle. Durham's historic neighborhoods, Trinity Park, Watts-Hillandale, Old North Durham, are full of older homes where appraisal condition notes, knob-and-tube wiring, and repair negotiations are part of the game. Newer construction in southern Durham and along the county line plays by simpler rules.",
      "I help Durham buyers compete: verified pre-approvals that hold up against multiple offers, loan structures that fit older homes, and honest guidance for first-time buyers navigating the Triangle's tightest inventory.",
    ],

    marketHeading: "What Durham buyers should know.",
    marketNotes: [
      {
        title: "Older homes shape the loan choice",
        body: "Some loan programs are stricter about property condition than others. For Durham's historic bungalows, picking the right program before you offer prevents ugly surprises after the appraisal.",
      },
      {
        title: "Medical and academic income has its own rules",
        body: "Residents, fellows, and new faculty often qualify on employment contracts before their start date. Grant-funded and stipend income documents differently. I know these files well.",
      },
      {
        title: "Multiple offers are the norm in core neighborhoods",
        body: "In Trinity Park or near downtown, a strong verified pre-approval and clean terms decide who wins. Financing preparation is offer strategy here.",
      },
    ],

    scenariosHeading: "Common Durham buyer scenarios.",
    scenariosIntro: "These are the profiles I work with most often in Durham.",
    scenarios: [
      {
        title: "Medical residents and new Duke hires",
        body: "Qualifying on a signed contract before your first paycheck is possible with the right structure. I've built these files for residents, fellows, and faculty relocating to Duke and RTP employers.",
      },
      {
        title: "First-time buyers in a tight market",
        body: "Durham's entry-level inventory moves fast. FHA, conventional low-down, and NC down payment assistance each have a place; preparation and speed win the house.",
      },
      {
        title: "Buyers taking on a historic home",
        body: "Falling for a 1925 bungalow is easy; financing one takes planning. We match the loan program to the home's condition and build inspection findings into the strategy.",
      },
      {
        title: "Investors near Duke and downtown",
        body: "Student, medical, and young-professional rental demand keeps Durham's rental market deep. DSCR and conventional investment loans both fit, depending on your portfolio.",
      },
    ],

    programsHeading: "Programs that come up most in Durham.",
    programs: [
      {
        slug: "conventional",
        why: "The default for most Durham buyers, and conventional's flexibility on condition helps with older housing stock.",
      },
      {
        slug: "fha",
        why: "A strong first-time buyer tool in Durham's entry-level segment, when the property's condition supports it.",
      },
      {
        slug: "dscr",
        why: "For investors building around Duke and downtown rental demand, DSCR qualifies on the property's income, not yours.",
      },
    ],

    faqHeading: "Common questions from Durham buyers.",
    faqs: [
      {
        q: "Can I get a mortgage before my Duke job starts?",
        a: "Often yes. With a signed employment contract and a start date typically within 60-90 days of closing, many programs will qualify you on the future income. Residents and new faculty do this all the time. The documentation has to be structured correctly, and that's my job.",
      },
      {
        q: "Will an old Durham home pass the appraisal?",
        a: "Usually, but appraisers flag genuine condition issues, and some programs require repairs before closing. If the inspection turns up old wiring or roof wear, we decide together whether to negotiate repairs, switch programs, or walk. Knowing the options is the advantage.",
      },
      {
        q: "How do I compete against cash offers in Durham?",
        a: "Speed and certainty. A fully underwritten pre-approval, tight contingency windows where appropriate, and a lender who calls the listing agent to vouch for the file. You can't out-cash a cash buyer, but you can out-certain most of them.",
      },
      {
        q: "Is Durham or Raleigh better for investment property?",
        a: "Both have strong fundamentals. Durham typically offers slightly lower entry prices and deep rental demand from the university and medical systems; Raleigh offers broader appreciation. I'll run the numbers on specific properties rather than generalize.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "strong-pre-approval", "dscr-loans-north-carolina"],
  },

  "wrightsville-beach-nc": {
    slug: "wrightsville-beach-nc",
    metaTitle: "Wrightsville Beach, NC Mortgage Lender | Jumbo & Second Homes",
    metaDescription:
      "Mortgage lender for Wrightsville Beach, NC: jumbo loans, second-home financing, condo approvals, and coastal insurance guidance for beach buyers.",

    city: "Wrightsville Beach",
    state: "NC",
    region: "New Hanover County Coast",

    eyebrow: "Wrightsville Beach, NC",
    title: "Wrightsville Beach financing, without the surprises.",
    lead: "Wrightsville is the crown jewel of the Wilmington-area beaches, and its financing reflects it: jumbo loan amounts, second-home underwriting, condo association scrutiny, and coastal insurance that has to be verified early. This is a detail market.",

    introHeading: "A premium market with premium details.",
    introBody: [
      "Wrightsville Beach real estate is scarce by design. A small island, limited inventory, and national demand keep prices among the highest on the North Carolina coast. Most purchases here are second homes or long-hold family properties, and most loan amounts land in jumbo territory.",
      "The details are where deals live or die. Condo and townhome projects each have their own budgets, insurance master policies, and rental profiles that lenders scrutinize. Flood and wind insurance must be quoted early, because they materially change the monthly payment. And second-home underwriting brings reserve and occupancy rules that first-time beach buyers rarely expect.",
      "I've built my coastal process around verifying all of it up front: the condo project, the insurance stack, the appraisal comparables, so that by the time you're under contract, the financing is the calm part of the deal.",
    ],

    marketHeading: "What Wrightsville Beach buyers should know.",
    marketNotes: [
      {
        title: "Assume jumbo until proven otherwise",
        body: "Most single-family and many condo purchases here exceed conforming limits. Jumbo brings stricter reserve and documentation standards. We prepare for them from day one.",
      },
      {
        title: "The condo project matters as much as the unit",
        body: "Lenders underwrite the whole association: budget health, insurance coverage, rental ratios, and litigation. I vet the project before you commit earnest money.",
      },
      {
        title: "Insurance is a make-or-break number",
        body: "Flood plus wind-and-hail on an island property is a real line item. We get quotes during your due diligence window, not at the closing table.",
      },
    ],

    scenariosHeading: "Common Wrightsville Beach buyer scenarios.",
    scenariosIntro:
      "These are the purchases I see most often on the island.",
    scenarios: [
      {
        title: "Second-home buyers from inland NC and beyond",
        body: "The classic Wrightsville purchase: a family beach home used spring through fall. Second-home jumbo financing with 10-20% down and documented reserves is the usual structure.",
      },
      {
        title: "Move-up buyers going oceanfront or soundfront",
        body: "Trading up on the island means bigger loan amounts, tougher appraisals with few comparables, and insurance diligence. Preparation keeps it smooth.",
      },
      {
        title: "Condo buyers near the waterfront",
        body: "From Channel Walk to oceanfront towers, every project has its own lending profile. Some are warrantable, some aren't, and the answer determines your loan options and rate.",
      },
      {
        title: "Buyers weighing rental income potential",
        body: "Wrightsville Beach regulates short-term rentals more tightly than neighboring beach towns. If rental income is part of your plan, we confirm the rules and structure the loan, second home versus investment, honestly.",
      },
    ],

    programsHeading: "Programs that come up most at Wrightsville Beach.",
    programs: [
      {
        slug: "jumbo",
        why: "The dominant loan type on the island. Strong borrowers get competitive jumbo terms, and preparation makes the difference.",
      },
      {
        slug: "conventional",
        why: "Some condos and smaller cottages still fit conforming limits, and conventional second-home financing is well-trodden ground.",
      },
      {
        slug: "dscr",
        why: "For true investment purchases where rental income drives the deal, DSCR sidesteps personal DTI and qualifies on the property.",
      },
    ],

    faqHeading: "Common questions from Wrightsville Beach buyers.",
    faqs: [
      {
        q: "How much down do I need for a Wrightsville Beach second home?",
        a: "Plan on 10% minimum for conforming second-home loans and typically 20% or more for jumbo second homes, plus reserves. The exact number depends on the loan size and your overall profile. I'll give you a real figure once we look at your situation.",
      },
      {
        q: "What does insurance actually cost on the island?",
        a: "It varies widely by elevation, construction, and coverage, but combined flood and wind policies on island properties routinely run several thousand dollars a year and sometimes well beyond. We quote the specific property early so your budget is built on real numbers.",
      },
      {
        q: "Can I rent my Wrightsville Beach home when I'm not using it?",
        a: "Occasional rental of a second home is generally allowed by lenders, but the town's rental rules and your loan's occupancy classification both matter. If rental income is central to your plan, we should finance it as an investment property from the start. Misclassifying occupancy is not a corner worth cutting.",
      },
      {
        q: "Why did my friend's beach condo loan fall apart?",
        a: "Nine times out of ten: the condo project, not the borrower. Association budgets, master insurance gaps, or rental ratios can sink a loan late in the process. I review the project documents during due diligence specifically to avoid that outcome.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "mortgage-fees", "dscr-loans-north-carolina"],
  },

  "carolina-beach-nc": {
    slug: "carolina-beach-nc",
    metaTitle: "Carolina Beach, NC Mortgage Lender | Second Home & DSCR Loans",
    metaDescription:
      "Mortgage lender for Carolina Beach and Kure Beach, NC: second-home loans, DSCR investment financing for short-term rentals, and condo lending on Pleasure Island.",

    city: "Carolina Beach",
    state: "NC",
    region: "Pleasure Island / New Hanover County",

    eyebrow: "Carolina Beach, NC",
    title: "Pleasure Island's most practical beach market.",
    lead: "Carolina Beach is where the Wilmington area's beach dreams stay attainable: a working boardwalk town with condos, cottages, and one of the most active short-term rental markets on the NC coast. The financing options here are broader than most buyers realize.",

    introHeading: "The attainable beach, and the investable one.",
    introBody: [
      "Carolina Beach occupies a distinct niche: more affordable than Wrightsville, more developed than Topsail, and famously friendly to short-term rentals. That combination draws two big buyer groups, families buying a second home they'll partly rent, and investors running the numbers on year-round STR income.",
      "The island's housing mix spans boardwalk-area condos, canal homes with boat docks, classic cottages, and newer townhome construction, with Kure Beach's quieter blocks just down the road. Each property type carries its own lending details: condo project reviews, flood zones, and rental-income documentation chief among them.",
      "I finance Carolina Beach purchases across the spectrum: straightforward second homes, DSCR loans sized on projected rental income, and primary residences for the year-round islanders who make the town work.",
    ],

    marketHeading: "What Carolina Beach buyers should know.",
    marketNotes: [
      {
        title: "STR income can drive the loan",
        body: "Carolina Beach's established short-term rental market means DSCR lenders can underwrite off credible projected rents. Good rental comps make good loans.",
      },
      {
        title: "Second home versus investment matters",
        body: "How you'll actually use the property determines the honest loan classification, and the rate and down payment that come with it. We get this right up front.",
      },
      {
        title: "Condo and flood diligence still applies",
        body: "Boardwalk-area condo projects and low-lying canal streets need the same project review and early flood quotes as any coastal purchase.",
      },
    ],

    scenariosHeading: "Common Carolina Beach buyer scenarios.",
    scenariosIntro:
      "These are the purchases I see most often on Pleasure Island.",
    scenarios: [
      {
        title: "Families buying a rent-when-away beach home",
        body: "The classic Carolina Beach play: a second home the family uses in summer and rents shoulder seasons. Structuring the loan honestly around that plan is the key conversation.",
      },
      {
        title: "STR investors running the numbers",
        body: "Full-time vacation rentals near the boardwalk and beach accesses can pencil well. DSCR loans qualify off the property's rental income, ideal when your W-2 is already committed elsewhere.",
      },
      {
        title: "Canal-home buyers with boats",
        body: "Carolina Beach's canal neighborhoods add dock and bulkhead considerations to the appraisal and insurance stack. I've seen the wrinkles and plan for them.",
      },
      {
        title: "Year-round residents and retirees",
        body: "Plenty of buyers live on the island full time. Primary-residence financing opens lower down payments and better rates, including VA for the area's many veterans.",
      },
    ],

    programsHeading: "Programs that come up most at Carolina Beach.",
    programs: [
      {
        slug: "dscr",
        why: "The go-to for STR investors here: qualification based on the property's rental income in one of NC's most proven vacation-rental markets.",
      },
      {
        slug: "conventional",
        why: "Second homes and primary residences alike run on conventional financing, still the most flexible tool on the island.",
      },
      {
        slug: "va",
        why: "For eligible veterans buying a primary residence on Pleasure Island, VA's zero-down structure is unbeatable.",
      },
    ],

    faqHeading: "Common questions from Carolina Beach buyers.",
    faqs: [
      {
        q: "Can I count future Airbnb income to qualify?",
        a: "On a DSCR loan, yes. Qualification runs on the property's actual or market-supported rental income rather than your personal income. On conventional second-home loans, projected STR income generally doesn't count, which is why loan choice depends on your real plan for the property.",
      },
      {
        q: "Is Carolina Beach actually STR-friendly?",
        a: "It has one of the more established short-term rental markets on the NC coast, which is exactly why rental comps are strong enough to support DSCR lending. Local rules do evolve, so we confirm current registration requirements during due diligence.",
      },
      {
        q: "What's the real difference in cost between second-home and investment financing?",
        a: "Investment loans typically carry somewhat higher rates and down payments than second-home loans. The temptation to stretch the second-home label is real, and a mistake. Occupancy misrepresentation is mortgage fraud. I'll structure whichever your actual use supports, and make the numbers work honestly.",
      },
      {
        q: "How does flood insurance work on Pleasure Island?",
        a: "Much of the island is in mapped flood zones, and costs vary block by block with elevation. Elevation certificates can meaningfully lower premiums. We quote the specific property early, because the difference between zones can swing your payment by hundreds a month.",
      },
    ],

    relatedArticleSlugs: ["dscr-loans-north-carolina", "how-much-house-can-you-afford", "mortgage-fees"],
  },

  "surf-city-nc": {
    slug: "surf-city-nc",
    metaTitle: "Surf City, NC Mortgage Lender | Beach Home & VA Loans",
    metaDescription:
      "Mortgage lender for Surf City, NC on Topsail Island: second-home and vacation rental loans, VA financing for Camp Lejeune families, and coastal lending guidance.",

    city: "Surf City",
    state: "NC",
    region: "Topsail Island / Pender County",

    eyebrow: "Surf City, NC",
    title: "Surf City: Topsail Island's front door.",
    lead: "Surf City is the hub of Topsail Island, the bridge, the shops, and the busiest stretch of a beach town that families from Raleigh to Camp Lejeune call their summer home. It's also one of the most balanced beach markets on the coast for buyers and investors alike.",

    introHeading: "A beach town with two anchors.",
    introBody: [
      "Surf City draws from two directions at once. From the west come Triangle and Fayetteville families buying vacation homes within a two-hour drive. From the south comes the Camp Lejeune community, Marines and sailors stationed twenty minutes away, some buying primary residences in the mainland Surf City area, others planting a flag on the island for the long term.",
      "That mix keeps the market lively across price points: soundside cottages and canal homes, oceanfront duplexes that rent hard all summer, and newer construction on the mainland side of the swing bridge where year-round living is the point.",
      "Financing spans just as wide: VA loans for the military community, second-home conventional for vacation buyers, and DSCR for investors chasing Topsail's strong summer rental season. Flood zones and wind coverage apply island-wide, and I make sure they're priced in before you offer.",
    ],

    marketHeading: "What Surf City buyers should know.",
    marketNotes: [
      {
        title: "Island versus mainland changes everything",
        body: "Surf City spans both sides of the Intracoastal. Island properties carry heavier insurance and flood considerations; mainland neighborhoods play more like standard suburban lending with beach access.",
      },
      {
        title: "Summer rental income is real but seasonal",
        body: "Topsail rentals earn most of their year between Memorial Day and Labor Day. DSCR underwriting handles seasonality, but honest annualized numbers matter.",
      },
      {
        title: "The Lejeune connection runs deep",
        body: "VA buyers are a constant presence here. Sellers and agents know the loan type well, and a properly prepared VA offer competes without discount.",
      },
    ],

    scenariosHeading: "Common Surf City buyer scenarios.",
    scenariosIntro:
      "These are the purchases I see most often in the Surf City area.",
    scenarios: [
      {
        title: "Camp Lejeune families buying primary residences",
        body: "Mainland Surf City and nearby Holly Ridge (including the Coastal Carolina corridor) are popular duty-station home bases. VA zero-down financing fits perfectly, and I build timelines around PCS reality.",
      },
      {
        title: "Vacation-home buyers from inland NC",
        body: "The classic Topsail purchase: a soundside or mid-island cottage for family summers. Second-home conventional financing with early insurance quotes is the standard play.",
      },
      {
        title: "Investors targeting the summer rental season",
        body: "Oceanfront and near-beach homes with proven rental history can support DSCR financing. I help pressure-test the revenue assumptions before you rely on them.",
      },
      {
        title: "Buyers choosing between Topsail towns",
        body: "Surf City versus Topsail Beach versus North Topsail carries real differences in rental rules, insurance, and flood exposure. I'll walk you through the lending side of that choice.",
      },
    ],

    programsHeading: "Programs that come up most in Surf City.",
    programs: [
      {
        slug: "va",
        why: "The Camp Lejeune community makes VA a fixture here, zero down for eligible buyers on primary residences, island or mainland.",
      },
      {
        slug: "conventional",
        why: "Second-home purchases, the heart of the Topsail market, run on conventional financing with second-home underwriting.",
      },
      {
        slug: "dscr",
        why: "For investors buying proven summer rentals, DSCR qualifies the property on its income and keeps your personal DTI out of it.",
      },
    ],

    faqHeading: "Common questions from Surf City buyers.",
    faqs: [
      {
        q: "Can I use my VA loan for a house in Surf City while stationed at Lejeune?",
        a: "Yes, for a primary residence, and the commute from Surf City to the back gate is a well-worn path. VA won't finance a pure vacation home, but if you'll genuinely live there, it's likely the strongest financing available to you.",
      },
      {
        q: "How seasonal is Topsail rental income?",
        a: "Very. Peak weeks from June through August carry the year, with shoulder-season weekends helping. A credible annual projection, not an extrapolated July, is what a DSCR lender will underwrite and what your own budget should assume.",
      },
      {
        q: "What insurance should I budget for on the island?",
        a: "Wind-and-hail plus flood coverage on top of a standard homeowner policy. Costs depend on elevation, construction year, and location on the island. We gather real quotes during due diligence so the monthly payment you approve is the one you'll actually pay.",
      },
      {
        q: "Island or mainland, which is the better buy?",
        a: "It depends on the goal. Island properties carry the rental income and the insurance costs; mainland homes offer year-round practicality and simpler lending. I'll run true monthly cost comparisons on specific properties so the trade-off is concrete.",
      },
    ],

    relatedArticleSlugs: ["va-loan-hidden-benefits", "dscr-loans-north-carolina", "how-much-house-can-you-afford"],
  },

  "topsail-island-nc": {
    slug: "topsail-island-nc",
    metaTitle: "Topsail Island, NC Mortgage Lender | Beach & Second Home Loans",
    metaDescription:
      "Mortgage lender for Topsail Beach and North Topsail Beach, NC: second-home loans, coastal insurance guidance, CBRA zone lending, and vacation rental financing.",

    city: "Topsail Island",
    state: "NC",
    region: "Topsail Beach / North Topsail Beach",

    eyebrow: "Topsail Island, NC",
    title: "The quiet ends of Topsail, financed carefully.",
    lead: "Beyond Surf City's bustle, Topsail Island stretches into two quieter markets: Topsail Beach at the southern tip and North Topsail Beach up by the Lejeune boundary. They're beautiful, lightly developed, and home to some of the most consequential fine print in coastal lending.",

    introHeading: "Two ends of one island, two different rulebooks.",
    introBody: [
      "Topsail Beach, at the island's southern end, is the old-family cottage market: low-rise, low-key, and largely owner-occupied or lightly rented. North Topsail Beach, at the northern end, offers some of the most affordable oceanfront in North Carolina, and carries the most important caveat on the coast.",
      "Large portions of North Topsail Beach sit inside federally designated Coastal Barrier Resources Act (CBRA) zones, where federal flood insurance through the NFIP is not available. Lending there is absolutely possible, but the flood coverage must come from private carriers, and the cost and availability of that coverage has to be verified before you go under contract, not after.",
      "This is exactly the kind of detail that makes or breaks coastal deals, and exactly why I front-load the diligence: flood zone determination, CBRA mapping, insurance quotes, and realistic rental projections, all before your earnest money is at risk.",
    ],

    marketHeading: "What Topsail Island buyers should know.",
    marketNotes: [
      {
        title: "CBRA zones change the insurance math",
        body: "In designated CBRA areas of North Topsail Beach, federal flood insurance isn't available and private flood coverage is required. We confirm the designation and get quotes before you commit.",
      },
      {
        title: "Erosion and elevation matter to lenders",
        body: "Oceanfront underwriting considers the property's position, elevation, and history. Appraisals on the island's quieter ends can involve limited comparables and extra care.",
      },
      {
        title: "Rental rules differ town by town",
        body: "Topsail Beach and North Topsail Beach each set their own rental and development rules, distinct from Surf City's. If income is part of your plan, we verify the rules for the specific town.",
      },
    ],

    scenariosHeading: "Common Topsail Island buyer scenarios.",
    scenariosIntro:
      "These are the purchases I see most often on the island's quieter ends.",
    scenarios: [
      {
        title: "Long-hold family cottage buyers in Topsail Beach",
        body: "The southern end attracts buyers planning to keep a home for decades. Second-home conventional financing with careful insurance planning is the standard structure.",
      },
      {
        title: "Value hunters eyeing North Topsail oceanfront",
        body: "The price-per-oceanfront-foot draws attention, and the CBRA/private-flood details determine whether a specific deal actually works. I sort that out before you're committed.",
      },
      {
        title: "Investors weighing quieter rental markets",
        body: "Both towns rent well in summer at lower acquisition costs than Wrightsville or Carolina Beach. DSCR and conventional investment loans both apply; insurance costs decide the real returns.",
      },
      {
        title: "Military families near the Lejeune boundary",
        body: "North Topsail's northern reaches sit minutes from Camp Lejeune's back gate. For eligible buyers making the island a primary residence, VA financing can work, with the same insurance diligence.",
      },
    ],

    programsHeading: "Programs that come up most on Topsail Island.",
    programs: [
      {
        slug: "conventional",
        why: "Second-home and investment purchases on both ends of the island run primarily on conventional financing.",
      },
      {
        slug: "jumbo",
        why: "Larger oceanfront homes, especially in Topsail Beach, can clear conforming limits and move into jumbo territory.",
      },
      {
        slug: "dscr",
        why: "For rental-focused purchases, DSCR underwrites the property's income, useful when insurance-heavy carrying costs demand honest cash-flow math.",
      },
    ],

    faqHeading: "Common questions from Topsail Island buyers.",
    faqs: [
      {
        q: "What is a CBRA zone and why does it matter?",
        a: "The Coastal Barrier Resources Act designates certain undeveloped coastal areas where federal spending, including NFIP flood insurance, is restricted. Parts of North Topsail Beach fall inside these zones. Homes there can still be bought and financed, but flood coverage must come from private insurers, which affects cost, availability, and resale. We check the maps for any address before you offer.",
      },
      {
        q: "Can I still get a mortgage in North Topsail Beach?",
        a: "Yes. Lenders require flood coverage in mapped flood zones, and in CBRA areas that means a private flood policy. The keys are confirming a quote early and making sure the coverage meets the lender's requirements. It's added diligence, not a dead end.",
      },
      {
        q: "Is North Topsail oceanfront really a bargain?",
        a: "The purchase prices are genuinely lower than comparable oceanfront elsewhere on the coast. The honest analysis adds private flood premiums, wind coverage, and erosion considerations to the math. Sometimes it still pencils beautifully; sometimes it doesn't. I'll help you run it straight.",
      },
      {
        q: "How is Topsail Beach different from Surf City for buyers?",
        a: "Topsail Beach is quieter, more residential, with its own town rules on rentals and development. Financing is similar, second-home conventional dominates, but the market moves slower and inventory is thinner. Patience and a ready pre-approval are the strategy.",
      },
    ],

    relatedArticleSlugs: ["how-much-house-can-you-afford", "dscr-loans-north-carolina", "mortgage-fees"],
  },

} satisfies Record<string, Location>;

export type LocationSlug = keyof typeof locations;

export function getLocation(slug: LocationSlug): Location {
  return locations[slug];
}
