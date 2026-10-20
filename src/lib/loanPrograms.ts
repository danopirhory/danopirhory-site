/**
 * Source of truth for all loan program SEO landing pages.
 *
 * Each entry drives one page via <LoanProgramTemplate />. Adding a new
 * program is: add an entry here + create a 15-line page file that
 * imports the template. Nothing else changes.
 */

import { site } from "./site";

export type LoanProgramFit = {
  title: string;
  body: string;
};

export type LoanProgramFAQ = {
  q: string;
  a: string;
};

export type LoanProgramRelated = {
  label: string;
  href: string;
  note: string;
};

export type LoanProgram = {
  slug: string;
  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };

  overviewEyebrow: string;
  overviewHeading: string;
  overviewBody: string[];

  fitHeading: string;
  fitIntro?: string;
  fitItems: LoanProgramFit[];

  prosHeading: string;
  pros: string[];
  considerationsHeading: string;
  considerations: string[];

  faqHeading: string;
  faqs: LoanProgramFAQ[];

  relatedHeading: string;
  related: LoanProgramRelated[];

  /** Used on the /loan-programs overview grid. */
  card: {
    body: string;
    who: string;
  };
};

export const loanPrograms = {
  conventional: {
    slug: "conventional",
    metaTitle: "Conventional Loans NC - 3% Down, Cancellable PMI",
    metaDescription:
      "Conventional mortgage financing in NC: fixed and adjustable rates for buyers with solid credit, move-up borrowers, and investment properties.",

    eyebrow: "Conventional Loans",
    title: "The most common mortgage. When it fits, it fits well.",
    lead: "Conventional loans are the default choice for most North Carolina buyers with stable income and decent credit. They offer flexibility, competitive rates, and the cleanest long-term cost structure available.",
    primaryCta: { label: "Get Pre-Approved", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What a conventional loan actually is.",
    overviewBody: [
      "A conventional loan is any mortgage that isn't backed by a government program like VA, FHA, or USDA. They're offered by private lenders and conform to guidelines set by Fannie Mae and Freddie Mac, the two entities that buy most conventional loans on the secondary market.",
      "Because they're not insured by a government agency, conventional loans lean harder on your credit profile, income, and assets. In exchange, they reward strong borrowers with better rates, more flexibility, and no mandatory mortgage insurance once you reach 20% equity.",
      "For most North Carolina buyers with 5-20% down and a credit score above 680, conventional is the first option to consider. It's not the only one, but it's usually the benchmark everything else gets compared against.",
    ],

    fitHeading: "Who conventional loans fit best",
    fitIntro:
      "If you see yourself in any of these, conventional is worth a serious look as your primary option.",
    fitItems: [
      {
        title: "Solid credit and stable income",
        body: "If your credit is in good shape and your income is steady, conventional usually gives you the best combination of rate, flexibility, and long-term cost.",
      },
      {
        title: "20% down (or a plan to get there)",
        body: "Buyers with 20% down skip private mortgage insurance entirely. With less down, PMI is in play, but it drops off automatically once you hit equity thresholds.",
      },
      {
        title: "Move-up buyers",
        body: "Selling your current home and scaling up? Conventional is usually the cleanest fit, and there are strategies for bridging the timing if your new home closes before your old one sells.",
      },
      {
        title: "Investors and second-home buyers",
        body: "Conventional is typically the only game in town for non-owner-occupied purchases. I handle the extra underwriting scrutiny these loans require so you don't feel it.",
      },
    ],

    prosHeading: "What conventional loans do well",
    pros: [
      "Competitive rates for borrowers with strong credit",
      "No mandatory mortgage insurance once you reach 20% equity",
      "Higher loan limits than FHA in most North Carolina counties",
      "Allowed for primary homes, second homes, and investment properties",
      "Flexible term options: 15, 20, 25, or 30 year, fixed or adjustable",
      "Gift funds and first-time buyer grant programs still permitted in many cases",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "Stricter credit score requirements than FHA, typically 620+ for approval, 680+ for best pricing",
      "PMI is required if you put less than 20% down, though it drops off automatically at 78% LTV",
      "Debt-to-income ratios are less forgiving than FHA or VA",
      "Documentation can be heavier for self-employed borrowers",
      "Less flexibility on past credit events compared to government programs",
    ],

    faqHeading: "Conventional loan questions I hear a lot",
    faqs: [
      {
        q: "How much down payment do I actually need?",
        a: "The true minimum for a conventional loan is 3% for qualified first-time buyers through programs like HomeReady or Home Possible. More commonly, buyers put down 5-10%. Twenty percent is the threshold where private mortgage insurance disappears, not the minimum to qualify.",
      },
      {
        q: "When does PMI go away?",
        a: "By law, lenders must cancel PMI automatically once your loan hits 78% loan-to-value based on the original purchase price. You can also request cancellation at 80% LTV, which is often faster. I walk every client through this timeline so you're not paying PMI longer than you have to.",
      },
      {
        q: "Can I use a conventional loan for an investment property?",
        a: "Yes, conventional loans are often the only option for non-owner-occupied purchases. You'll typically need 15-25% down, stronger reserves, and a slightly higher rate compared to primary residence financing.",
      },
      {
        q: "Is a 15-year conventional loan worth it?",
        a: "It depends. You'll pay less total interest and build equity faster, but the monthly payment is significantly higher. For most buyers, a 30-year loan with optional extra principal payments gives you both flexibility and the ability to pay it down on your own schedule.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "FHA Loans",
        href: "/loan-programs/fha",
        note: "Lower credit or smaller down payment? FHA might be a better starting point.",
      },
      {
        label: "VA Loans",
        href: "/loan-programs/va",
        note: "If you're a Veteran, a VA loan is almost always worth comparing against conventional.",
      },
      {
        label: "Jumbo Loans",
        href: "/loan-programs/jumbo",
        note: "Buying above the conforming loan limit? You're in jumbo territory.",
      },
    ],

    card: {
      body: "Competitive fixed and adjustable-rate loans for buyers with solid credit and stable income.",
      who: "For move-up buyers, investors, and strong financial profiles.",
    },
  },

  fha: {
    slug: "fha",
    metaTitle: "FHA Loans NC - 3.5% Down, 580+ Credit OK",
    metaDescription:
      "FHA home loans in North Carolina: flexible credit, low down payments, and a program built to make homeownership accessible.",

    eyebrow: "FHA Loans",
    title: "Flexibility that opens doors.",
    lead: "FHA loans are backed by the Federal Housing Administration and designed to help buyers who don't quite fit inside the conventional box: lower credit, smaller down payments, or higher debt ratios. They're one of the most useful tools in the toolbox.",
    primaryCta: { label: "Check FHA Eligibility", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What an FHA loan actually is.",
    overviewBody: [
      "An FHA loan is a mortgage insured by the Federal Housing Administration. That insurance protects the lender if the loan defaults, which is why FHA loans can afford to approve borrowers that conventional programs would turn away.",
      "The borrower still pays for that insurance, in the form of an upfront mortgage insurance premium (rolled into the loan) and a monthly premium that stays in place for most of the loan's life. It's the trade-off for the flexibility FHA provides.",
      "For a lot of first-time buyers, credit rebuilders, and moderate-income families, FHA is the program that actually makes homeownership possible. I help clients figure out when it's the right call, and when refinancing out of FHA later will save them real money.",
    ],

    fitHeading: "Who FHA loans fit best",
    fitIntro:
      "FHA isn't the right answer for everyone, but for these situations it's often the strongest option on the table.",
    fitItems: [
      {
        title: "First-time buyers with lean savings",
        body: "Down payments start at 3.5%, and gift funds from family are fully permitted, so relatives can cover all or part of your down payment.",
      },
      {
        title: "Buyers rebuilding credit",
        body: "FHA guidelines are more forgiving than conventional on past bankruptcies, foreclosures, and collections. If you've recovered from a setback, FHA may be the door that opens.",
      },
      {
        title: "Higher debt-to-income scenarios",
        body: "FHA can stretch further on DTI than most conventional programs, often the difference between a yes and a no when the math is tight.",
      },
      {
        title: "Multi-unit owner occupants",
        body: "Buying a 2-4 unit home and living in one of the units? FHA is usually the cleanest path: same low down payment, same flexibility.",
      },
    ],

    prosHeading: "What FHA loans do well",
    pros: [
      "Down payments as low as 3.5% with credit scores of 580+",
      "More forgiving credit requirements than conventional: some cases approved with scores as low as 500 with 10% down",
      "Higher debt-to-income ratios allowed than most conventional programs",
      "Gift funds fully permitted from family and other approved sources",
      "Available for 2-4 unit properties when you live in one of the units",
      "Can be refinanced into conventional later to drop mortgage insurance",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "Mortgage insurance is required upfront (1.75% of loan amount) and monthly for most FHA loans",
      "In most cases, FHA mortgage insurance stays for the life of the loan. You'd need to refinance into conventional to remove it",
      "Property must meet FHA minimum standards, which means some fixer-uppers won't qualify without a 203(k) loan",
      "FHA county loan limits can be lower than conventional limits in higher-cost areas",
      "Only allowed for primary residences: no investment properties or pure second homes",
    ],

    faqHeading: "FHA loan questions I hear a lot",
    faqs: [
      {
        q: "Can I put 3.5% down if my credit isn't perfect?",
        a: "Yes, with a 580 credit score or higher, you qualify for the 3.5% down payment option. Between 500 and 579, you'll typically need 10% down. Below 500, FHA isn't an option. I always pull credit before we plan down payment strategy.",
      },
      {
        q: "How long do I have to keep FHA mortgage insurance?",
        a: "For most FHA loans originated today, the monthly mortgage insurance stays for the full loan term. It doesn't automatically drop off at 20% equity the way conventional PMI does. The way out is to refinance into a conventional loan once your credit and equity support it.",
      },
      {
        q: "Can I use an FHA loan to buy a fixer-upper?",
        a: "Sometimes, but there's a specific product called an FHA 203(k) loan that bundles purchase and renovation costs into one mortgage. Standard FHA loans require the home to meet minimum property standards at closing, so anything that needs significant work typically needs the 203(k) route.",
      },
      {
        q: "Are FHA loan rates higher than conventional?",
        a: "Base rates are often comparable, and sometimes FHA rates are actually lower for borrowers with moderate credit. The total cost difference comes from mortgage insurance, not rate alone. I'll run both scenarios side by side so you can see the full picture.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "Conventional Loans",
        href: "/loan-programs/conventional",
        note: "If your credit is strong enough, conventional often costs less over time.",
      },
      {
        label: "VA Loans",
        href: "/loan-programs/va",
        note: "If you're eligible for a VA loan, it's almost always a better option than FHA.",
      },
      {
        label: "First-Time Homebuyer",
        href: "/loan-programs/first-time-homebuyer",
        note: "FHA is a common path for first-time buyers. Here's the full guide.",
      },
    ],

    card: {
      body: "Flexible credit and down-payment requirements that work for a wide range of buyers.",
      who: "For buyers rebuilding credit or working with a smaller down payment.",
    },
  },

  va: {
    slug: "va",
    metaTitle: "VA Loans North Carolina - 0% Down for Veterans",
    metaDescription:
      "VA home loans in North Carolina: zero-down, no monthly PMI, and built around the benefit veterans earned. Full VA loan guidance from a trusted NC advisor.",

    eyebrow: "VA Loans",
    title: "Your VA benefit, used the right way.",
    lead: "VA loans are one of the strongest home financing programs available, and most veterans only use a fraction of what the program actually offers. Here's how to get the full value out of your benefit.",
    primaryCta: { label: "Start Your VA Loan", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What a VA loan actually is.",
    overviewBody: [
      "A VA loan is a mortgage partially guaranteed by the U.S. Department of Veterans Affairs. The VA doesn't lend the money directly. Private lenders originate the loan, and the VA backs a portion of it, which is why we can offer terms nobody else can match.",
      "For eligible veterans, active-duty service members, and qualified surviving spouses, the VA loan is often the best mortgage they'll ever have access to: zero down, no monthly mortgage insurance, competitive rates, and a benefit that can be reused.",
      "The headline is always the zero-down part. But the real value is in the features nobody tells you about: no PMI, assumability, reusable entitlement, and underwriting that's genuinely friendlier than conventional.",
    ],

    fitHeading: "Who VA loans fit best",
    fitIntro:
      "If you're eligible, a VA loan is almost always worth comparing against every other option on the table.",
    fitItems: [
      {
        title: "Veterans and active-duty service members",
        body: "If you've served on active duty for the required period, you likely qualify. I'll pull your Certificate of Eligibility early to confirm entitlement.",
      },
      {
        title: "National Guard and Reserves",
        body: "Members with qualifying service time are often eligible, even if you're not active duty today. Always worth checking before you assume you're not eligible.",
      },
      {
        title: "Surviving spouses",
        body: "In many cases, surviving spouses of service members who died in service or from service-connected conditions retain the VA loan benefit.",
      },
      {
        title: "PCS moves and military families",
        body: "VA loans are particularly valuable for buyers facing PCS timelines. The underwriting and flexibility are built for exactly this situation.",
      },
    ],

    prosHeading: "What VA loans do well",
    pros: [
      "Zero down payment: finance 100% of the home's value",
      "No monthly mortgage insurance, ever: a major savings compared to FHA and conventional with less than 20% down",
      "Competitive interest rates, typically lower than comparable conventional loans",
      "VA loans are assumable, a potential advantage when you sell in a higher-rate environment",
      "Your VA entitlement can be restored and reused on future purchases",
      "More forgiving underwriting on DTI, credit, and reserves than conventional",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "A one-time VA funding fee applies, usually rolled into the loan (waived for veterans with service-connected disabilities)",
      "Only available for primary residences: no investment properties or pure second homes",
      "The property must meet VA minimum property requirements, which can rule out some fixer-uppers",
      "Eligibility must be verified through a Certificate of Eligibility. I handle this for you",
      "Some sellers are still unfamiliar with VA loans and may need reassurance; a well-prepared pre-approval helps",
    ],

    faqHeading: "VA loan questions I hear a lot",
    faqs: [
      {
        q: "How do I know if I'm eligible?",
        a: "Eligibility depends on your length and type of service. I'll help you request your Certificate of Eligibility from the VA directly. It takes about 24 hours in most cases and confirms exactly what benefit you have available.",
      },
      {
        q: "Can I use my VA loan more than once?",
        a: "Yes. Your entitlement can be restored after you sell the property and pay off the loan, and in some situations you can even hold two VA loans simultaneously. It's one of the most underused features of the program.",
      },
      {
        q: "What is the VA funding fee, and can I avoid it?",
        a: "The funding fee is a one-time cost that keeps the VA loan program running without taxpayer support. It's typically 2.15% of the loan amount for first-time users, less if you put money down. It's waived entirely for veterans with service-connected disabilities, and it can be rolled into the loan so you don't pay out of pocket.",
      },
      {
        q: "Are VA loans harder to close than conventional?",
        a: "When they're handled by someone who knows the program, no. They close in the same 21-30 day window. Problems usually come from loan officers who aren't familiar with VA-specific requirements. I do a lot of VA loans, and most of mine close on time without drama.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "Conventional Loans",
        href: "/loan-programs/conventional",
        note: "Sometimes conventional is worth comparing even when you qualify for VA. I'll help you see both sides.",
      },
      {
        label: "FHA Loans",
        href: "/loan-programs/fha",
        note: "For situations where VA isn't an option, FHA is usually the next best alternative.",
      },
      {
        label: "Jacksonville, NC",
        href: "/service-areas/jacksonville-nc",
        note: "Stationed at Camp Lejeune or nearby? Here's what you should know about the local market.",
      },
    ],

    card: {
      body: "Zero-down financing for veterans and active-duty service members, with no private mortgage insurance.",
      who: "For eligible military buyers who want to maximize their benefit.",
    },
  },

  usda: {
    slug: "usda",
    metaTitle: "USDA Loans NC - 0% Down in Eligible Rural Areas",
    metaDescription:
      "USDA zero-down mortgage financing for eligible rural and suburban North Carolina buyers. Built for moderate-income homebuyers in qualified areas.",

    eyebrow: "USDA Loans",
    title: "Zero down in the right ZIP code.",
    lead: "USDA loans are one of the best-kept secrets in North Carolina home financing: zero down, below-market mortgage insurance, and available in more places than most buyers realize.",
    primaryCta: { label: "Check USDA Eligibility", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What a USDA loan actually is.",
    overviewBody: [
      "A USDA loan, officially a USDA Rural Development Guaranteed Housing Loan, is a zero-down mortgage backed by the U.S. Department of Agriculture. The name is a little misleading. It's not just for farms or remote rural properties. It's available in a surprising number of suburban towns across North Carolina.",
      "The program was built to encourage homeownership in communities outside major metros. If you're buying in a USDA-eligible area and your household income is within the program's limits, you may be able to purchase a home with zero down, lower mortgage insurance than FHA, and competitive rates.",
      "It's a strong program when it fits. The hard part is knowing where it applies and whether your income qualifies. Those are the two main filters, and I'll check both before we go further.",
    ],

    fitHeading: "Who USDA loans fit best",
    fitIntro:
      "USDA has specific eligibility rules, but when a buyer meets them, it's often the cheapest way to buy a home.",
    fitItems: [
      {
        title: "Buyers in USDA-eligible areas",
        body: "A lot of small towns and even larger suburbs across North Carolina qualify: Leland, Hampstead, and many communities outside the Triangle and Charlotte all have eligible pockets.",
      },
      {
        title: "Moderate-income households",
        body: "USDA has county-level income limits. They're higher than most people think, and the program specifically targets working families who might not qualify for other zero-down options.",
      },
      {
        title: "First-time and repeat buyers",
        body: "You don't need to be a first-time buyer to use USDA. The program works for anyone who meets the location and income tests and plans to occupy the home.",
      },
      {
        title: "Buyers with limited savings",
        body: "Because there's no down payment requirement, USDA is often the fastest path to closing for buyers who have income but haven't saved a large down payment.",
      },
    ],

    prosHeading: "What USDA loans do well",
    pros: [
      "Zero down payment: 100% financing",
      "Lower mortgage insurance cost than FHA, both upfront and monthly",
      "Competitive fixed-rate 30-year terms",
      "Flexible credit guidelines, with manual underwrites possible for lower scores",
      "No strict first-time buyer requirement",
      "Available across more of North Carolina than most buyers expect",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "Property must be in a USDA-eligible area. Check the USDA eligibility map before making an offer",
      "Household income must be at or below the county limit (typically 115% of area median income)",
      "Only for primary residences: no investment properties or second homes",
      "Property must meet USDA's condition standards, similar to FHA",
      "Closing can be slightly slower because USDA final approval happens at the state office level",
    ],

    faqHeading: "USDA loan questions I hear a lot",
    faqs: [
      {
        q: "How do I know if a home is in a USDA-eligible area?",
        a: "The USDA maintains an interactive map online that shows eligibility by address. I'll check it for any property you're considering before you invest time in an offer. Some neighborhoods will surprise you, especially in growing suburbs where the eligibility line hasn't been updated yet.",
      },
      {
        q: "What are the income limits in North Carolina?",
        a: "Limits vary by county and household size, typically in the $110,000-$150,000 range for a family of four, though it depends on the county. I'll pull the current limit for your specific area and compare it to your qualifying income.",
      },
      {
        q: "Is USDA better than FHA?",
        a: "For eligible buyers, often yes: zero down versus 3.5%, and lower mortgage insurance costs. But USDA has stricter location and income rules. If you qualify for both, USDA usually wins on total cost.",
      },
      {
        q: "How long does a USDA loan take to close?",
        a: "Most USDA loans close in 30-45 days. The extra time compared to conventional comes from USDA's final state-level review. As long as the file is clean and the timeline is planned correctly, it's not a problem.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "FHA Loans",
        href: "/loan-programs/fha",
        note: "If you don't qualify for USDA by location or income, FHA is usually the next best option.",
      },
      {
        label: "First-Time Homebuyer",
        href: "/loan-programs/first-time-homebuyer",
        note: "USDA is a common tool for first-time buyers. Here's the full guide to buying your first home.",
      },
      {
        label: "Leland, NC",
        href: "/service-areas/leland-nc",
        note: "Large portions of Leland qualify for USDA, one of the best markets for this program in coastal NC.",
      },
    ],

    card: {
      body: "Zero-down financing in qualified rural and suburban areas across North Carolina.",
      who: "For moderate-income buyers in USDA-eligible neighborhoods.",
    },
  },

  jumbo: {
    slug: "jumbo",
    metaTitle: "Jumbo Loans NC - Financing Above $766,550",
    metaDescription:
      "Jumbo loans for higher-priced homes in North Carolina: competitive rates, careful underwriting, and a process built around serious buyers.",

    eyebrow: "Jumbo Loans",
    title: "Mortgages that start where conforming ends.",
    lead: "Jumbo loans finance homes above the conforming loan limit, where the rules shift, the underwriting gets tighter, and having a lender who actually knows the space starts to matter more.",
    primaryCta: { label: "Get Pre-Approved", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What a jumbo loan actually is.",
    overviewBody: [
      "A jumbo loan is any mortgage that exceeds the conforming loan limit set annually by the Federal Housing Finance Agency. In most of North Carolina, that limit currently sits in the mid-$700,000s for a single-family home. Loans above that amount fall into jumbo territory.",
      "Because jumbo loans aren't eligible to be sold to Fannie Mae or Freddie Mac, lenders either keep them on their own books or sell them to private investors. That changes how they're priced, how strict the underwriting is, and which lenders will even offer them.",
      "For move-up buyers, high-earning professionals, and families purchasing in higher-cost areas, jumbo financing is the tool for buying the home you actually want. I work with several jumbo investors and help clients find the right fit based on credit, reserves, and long-term plans.",
    ],

    fitHeading: "Who jumbo loans fit best",
    fitIntro:
      "Jumbo buyers tend to have more going on financially. The underwriting reflects that.",
    fitItems: [
      {
        title: "Move-up buyers in strong markets",
        body: "Selling your current home and scaling up to something significantly larger usually means jumbo territory, especially in Wilmington, Raleigh, and the Charlotte metro.",
      },
      {
        title: "High earners with complex income",
        body: "Bonus income, RSUs, partnership distributions, self-employment. Jumbo underwriting can handle all of it, but it requires a loan officer who knows how to document it properly.",
      },
      {
        title: "Buyers with strong assets",
        body: "Jumbo lenders want to see reserves, typically 6-12 months of mortgage payments after closing. If you have them, jumbo becomes straightforward.",
      },
      {
        title: "Second-home purchases",
        body: "Higher-priced vacation and second homes almost always need jumbo financing. The underwriting is a step more rigorous, but the options are there.",
      },
    ],

    prosHeading: "What jumbo loans do well",
    pros: [
      "Access to loan amounts above conforming limits: no cap on purchase price beyond lender guidelines",
      "Competitive rates for strong borrowers, sometimes even lower than conforming for the most qualified profiles",
      "Flexible term options, including fixed, ARM, and interest-only products",
      "Can be used for primary residences, second homes, and some investment properties",
      "Specialized programs available for professionals (physicians, attorneys, executives)",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "Stricter credit score requirements, typically 700+ for approval, 740+ for best pricing",
      "Larger down payment expectations, often 10-20% minimum, sometimes higher",
      "Significant cash reserves required after closing (often 6-12 months of PITI)",
      "Debt-to-income ratios watched closely, usually capped around 43-45%",
      "More documentation than conforming loans, especially for self-employed borrowers",
      "Rates can shift more dramatically with market changes than conforming loans",
    ],

    faqHeading: "Jumbo loan questions I hear a lot",
    faqs: [
      {
        q: "What's the jumbo loan limit in North Carolina?",
        a: "In 2026, the conforming limit for a single-family home in most NC counties is around $766,000. Anything above that is jumbo. A few higher-cost counties have slightly higher limits. I'll confirm the current number for your specific county when we talk.",
      },
      {
        q: "How much down payment do I need for a jumbo loan?",
        a: "Most jumbo programs require at least 10% down, with 20% being the most common. Some specialized programs go as low as 5% down for very strong borrowers. The down payment directly affects your rate and the reserves required.",
      },
      {
        q: "Are jumbo rates higher than conforming?",
        a: "Not always. For strong borrowers with significant reserves, jumbo rates can actually be competitive with or lower than conforming rates. It depends on the investor, your profile, and the market that week. I always compare both when both are available.",
      },
      {
        q: "Can I use a jumbo loan for an investment property?",
        a: "Yes, but it's more restrictive. You'll need a larger down payment (often 25% or more), stronger reserves, and a more compelling overall file. Some jumbo investors don't do investment properties at all. Part of my job is knowing which ones will.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "Conventional Loans",
        href: "/loan-programs/conventional",
        note: "For loan amounts below the jumbo threshold, conventional is usually the right starting point.",
      },
      {
        label: "DSCR / Investor Loans",
        href: "/loan-programs/dscr",
        note: "Buying investment property? DSCR is another path worth comparing against jumbo.",
      },
      {
        label: "Wilmington, NC",
        href: "/service-areas/wilmington-nc",
        note: "Wilmington is where I see jumbo financing come up most often in coastal NC.",
      },
    ],

    card: {
      body: "Financing for higher-priced homes above the conforming loan limit.",
      who: "For move-up buyers, luxury purchases, and high-cost markets.",
    },
  },

  dscr: {
    slug: "dscr",
    metaTitle: "DSCR Loans NC - Qualify on Rental Income, Not W-2s",
    metaDescription:
      "DSCR loans for North Carolina real estate investors: qualify based on property cash flow, not personal income. Scale your portfolio without the W-2 hassle.",

    eyebrow: "DSCR / Investor Loans",
    title: "Loans that qualify the property, not you.",
    lead: "DSCR loans let investors qualify based on the rental income the property produces, not personal W-2s, tax returns, or DTI ratios. For serious investors scaling a portfolio, it's often the only tool that makes sense.",
    primaryCta: { label: "Explore DSCR Options", href: site.applicationUrl },
    secondaryCta: { label: "Ask a Question", href: "/contact" },

    overviewEyebrow: "Overview",
    overviewHeading: "What a DSCR loan actually is.",
    overviewBody: [
      "DSCR stands for Debt Service Coverage Ratio, a number that measures whether a property's rental income is enough to cover its mortgage payment. If the rent is $2,500 and the full monthly payment (principal, interest, taxes, insurance, HOA) is $2,000, the DSCR is 1.25. Most DSCR lenders look for a ratio of at least 1.0, meaning the property pays for itself.",
      "The key difference from conventional investment loans is what they don't ask for. No tax returns. No W-2s. No personal DTI calculation. The underwriter looks at the property's rent, your credit, and your reserves, and that's it.",
      "This matters for investors because traditional qualification starts to break down once you own several properties. Conventional lenders add the properties to your personal DTI, which eventually makes it impossible to qualify for the next deal even when the numbers clearly work. DSCR skips that trap entirely.",
    ],

    fitHeading: "Who DSCR loans fit best",
    fitIntro:
      "DSCR is a niche product. When it fits, nothing else does, and when it doesn't fit, it's usually the wrong choice.",
    fitItems: [
      {
        title: "Portfolio investors",
        body: "If you already own several rentals and conventional lenders are starting to push back, DSCR lets you keep buying without the usual DTI bottleneck.",
      },
      {
        title: "Self-employed investors",
        body: "If your tax returns look complicated or your write-offs make your qualifying income look small, DSCR lets the property speak for itself.",
      },
      {
        title: "Short-term rental buyers",
        body: "DSCR lenders can qualify using projected short-term rental income in approved markets, a major advantage for Airbnb investors in Wilmington, Raleigh, and the mountains.",
      },
      {
        title: "LLC purchases",
        body: "DSCR loans are typically closed in the name of an LLC, which most investors prefer for liability and accounting reasons.",
      },
    ],

    prosHeading: "What DSCR loans do well",
    pros: [
      "No personal income documentation: no tax returns, W-2s, or pay stubs",
      "Property cash flow is the primary qualifier",
      "Can be closed in the name of an LLC or entity",
      "No limit on the number of financed properties you can hold",
      "Faster underwriting than conventional investment loans in most cases",
      "Short-term rental income is accepted by many DSCR investors",
    ],
    considerationsHeading: "Things to keep in mind",
    considerations: [
      "Interest rates are higher than conventional investment loans, often by 1-2%",
      "Down payment requirements are typically 20-25% minimum",
      "Credit score requirements are strong, usually 680+ for best pricing",
      "Prepayment penalties are common during the first few years",
      "Only for investment properties: no owner-occupied financing",
      "Reserve requirements vary but are often 3-6 months of PITI per property",
    ],

    faqHeading: "DSCR loan questions I hear a lot",
    faqs: [
      {
        q: "How is the DSCR calculated?",
        a: "The property's monthly gross rent is divided by the monthly PITIA (principal, interest, taxes, insurance, HOA). A 1.0 DSCR means the property exactly covers its payment. Most DSCR lenders want at least 1.0, and the best pricing usually kicks in at 1.25 or higher.",
      },
      {
        q: "Do I need personal income to qualify for a DSCR loan?",
        a: "No, that's the whole point. DSCR underwriting is focused on the property's cash flow, your credit score, and your reserves. You don't need to document personal income at all, which is what makes it powerful for self-employed and portfolio investors.",
      },
      {
        q: "Can I use projected rent if the property isn't rented yet?",
        a: "Yes. Lenders typically rely on a market rent schedule completed by the appraiser, essentially a professional estimate of what the property should rent for. For short-term rentals, some lenders use AirDNA or similar platforms to project income.",
      },
      {
        q: "Can I use a DSCR loan for a property I plan to live in?",
        a: "No. DSCR loans are strictly for investment properties. Mixing in an owner-occupied strategy can create serious problems, including fraud implications. If you want to live there, we use a different loan.",
      },
    ],

    relatedHeading: "Related programs",
    related: [
      {
        label: "Conventional Loans",
        href: "/loan-programs/conventional",
        note: "For new investors with 1-3 properties, conventional is usually cheaper than DSCR.",
      },
      {
        label: "Jumbo Loans",
        href: "/loan-programs/jumbo",
        note: "Higher-priced investment properties may need jumbo financing instead of (or alongside) DSCR.",
      },
      {
        label: "DSCR loans in North Carolina: 2026 guide",
        href: "/resources/dscr-loans-north-carolina",
        note: "A deeper walkthrough: the qualification math, LLC vesting, and short-term rental financing on the NC coast.",
      },
      {
        label: "For Realtors",
        href: "/for-realtors",
        note: "I work with investor-focused agents regularly. Here's how we partner on investment deals.",
      },
    ],

    card: {
      body: "Qualify off property cash flow instead of personal income, built for real estate investors.",
      who: "For portfolio investors, self-employed buyers, and STR operators.",
    },
  },
} satisfies Record<string, LoanProgram>;

export type LoanProgramSlug = keyof typeof loanPrograms;

export function getLoanProgram(slug: LoanProgramSlug): LoanProgram {
  return loanPrograms[slug];
}
