/**
 * Single source of truth for insights/blog posts.
 *
 * The homepage preview, the resources index, and the dynamic
 * /resources/[slug] page all read from this file. When a real CMS lands,
 * swap this module for a fetch - the shape is what matters.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string; tone?: "info" | "warn" };

export type ArticleFAQ = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** Overrides `excerpt` as the SEO meta description when set. Use when
   * the excerpt is too long for a description (>160 chars) or reads
   * better as a teaser than as a search snippet. */
  metaDescription?: string;
  date: string;
  /** Optional last-updated display string (e.g. "April 2026"). When
   * present, surfaces on the article page and feeds dateModified in
   * the JSON-LD. Falls back to `date` when omitted. */
  lastUpdated?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  body: ArticleBlock[];
  /** Optional FAQ block. When present, the renderer appends an
   * accordion at the end of the article body and injects FAQPage
   * JSON-LD so the questions are eligible for rich results. */
  faqs?: ArticleFAQ[];
};

export const articles: Article[] = [
  {
    slug: "how-much-house-can-you-afford",
    title: "How much house can you really afford in North Carolina?",
    excerpt:
      "Affordability isn't just the number a calculator spits out. Here's a smarter framework for thinking about your real budget, one that accounts for the life you actually want to live, not just the payment you technically qualify for.",
    metaDescription:
      "A smarter framework for thinking about how much house you can really afford in North Carolina, beyond what the calculator says you qualify for.",
    date: "March 2026",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "First-Time Buyers",
    featured: true,
    body: [
      {
        type: "p",
        text: "Every first-time buyer I work with asks some version of the same question: how much can we afford? And almost every mortgage calculator answers a different one. What they tell you is the maximum amount a bank will lend you, which is very different from the amount you should actually borrow.",
      },
      {
        type: "h2",
        text: "Start with the life you want, not the max",
      },
      {
        type: "p",
        text: "Before I run a single number, I ask clients what they want their life to look like five years after closing. Travel? Retirement savings? Supporting a parent? Eating out without checking the balance? The right mortgage is the one that still lets you say yes to the things that matter, not the one that just fits inside a debt-to-income ratio.",
      },
      {
        type: "h2",
        text: "The three numbers that actually matter",
      },
      {
        type: "p",
        text: "Your debt-to-income ratio, your comfortable monthly payment, and your cash reserves after closing. DTI is what the lender cares about. The comfortable payment is what you care about. Reserves are what protect you when life happens. If any one of those three is tight, the loan is probably too aggressive.",
      },
      {
        type: "h2",
        text: "A real-numbers example",
      },
      {
        type: "p",
        text: "Let's make this concrete. A North Carolina household earning $90,000 a year with a $400/month car payment and $200/month in student loans walks into three different conversations and gets three different answers.",
      },
      {
        type: "h3",
        text: "Conventional",
      },
      {
        type: "p",
        text: "A conventional underwriter looks at the standard 45-50% DTI ceiling. With $7,500/month in gross income and $600/month in existing debts, the maximum mortgage payment that fits is roughly $3,000-$3,150. Translate that to a 30-year fixed at typical current pricing, plus taxes and insurance, and you land somewhere in the $400,000-$430,000 home-price range with 5-10% down.",
      },
      {
        type: "h3",
        text: "FHA",
      },
      {
        type: "p",
        text: "FHA's residual-income and DTI guidelines are slightly more flexible, especially with strong credit. Same household, same debts, FHA might stretch the qualifying number to a $440,000-$460,000 purchase. Sounds great until you remember FHA carries mortgage insurance for the life of most loans. That monthly cost takes a meaningful bite out of the savings.",
      },
      {
        type: "h3",
        text: "VA",
      },
      {
        type: "p",
        text: "If either spouse is VA-eligible, the VA's residual-income test often allows the highest qualifying number, sometimes $450,000+ on the same income/debt profile, with $0 down and no mortgage insurance. The funding fee applies (waived for service-connected disability), but the long-term math usually wins.",
      },
      {
        type: "callout",
        text: "Notice the spread: same family, same income, same debts, three answers ranging from $400K to $450K+. The loan program matters as much as the income, but none of those numbers is the right answer. The right answer is probably $385K, which leaves room for the life you actually want.",
      },
      {
        type: "h2",
        text: "Common affordability mistakes",
      },
      {
        type: "ul",
        items: [
          "Treating the lender's maximum as the target. The maximum is the ceiling. Your target should be the comfortable monthly payment that lets you keep saving for retirement, college, and the next car.",
          "Forgetting taxes and insurance in the back-of-the-napkin math. North Carolina property taxes vary widely by county, and homeowners insurance for coastal NC is meaningfully higher than inland.",
          "Underestimating reserves. Most lenders want to see 2-6 months of payments in reserve after closing. Buyers who close with their last dollar in the bank are one car repair away from a hard month.",
          "Ignoring HOA dues. New construction subdivisions in NC commonly carry $50-$300/month HOA fees that get tacked onto your real housing cost.",
          "Not stress-testing for job change. If you're 24 months from a planned career move or PCS, your affordability calculation should bake in that volatility.",
        ],
      },
      {
        type: "h2",
        text: "The NCHFA angle most NC buyers don't ask about",
      },
      {
        type: "p",
        text: "The North Carolina Housing Finance Agency (NCHFA) runs first-time buyer assistance programs that are dramatically under-used in this market. The headline product is a down payment assistance loan, typically up to a few percent of the purchase price, paired with a first-mortgage that can be FHA, VA, USDA, or conventional. There are also specific products for first-time buyers in qualifying counties.",
      },
      {
        type: "p",
        text: "The catch is income limits. NCHFA programs are gated by county-level income caps that change annually. A buyer in Mecklenburg County has a different income ceiling than a buyer in Onslow or Pitt. The cap usually scales with household size. If you're earning under roughly $80,000-$110,000 depending on the county, it's worth asking specifically whether NCHFA fits. Most lenders won't bring it up if you don't.",
      },
      {
        type: "callout",
        text: "If you might qualify for NCHFA, ask before you write your offer, not after. Combining NCHFA assistance with a VA or FHA first mortgage can be the difference between needing $15,000 cash to close and needing closer to $5,000.",
      },
      {
        type: "h2",
        text: "How I handle this with clients",
      },
      {
        type: "p",
        text: "We build a picture from the bottom up. What does your month actually look like? What will change when you own instead of rent? What are you saving toward? Then we work backward into a payment that feels calm, not stretched. The loan amount is the last number we calculate, not the first.",
      },
      {
        type: "p",
        text: "That's the version of affordability that lets you sleep well after the keys are in your hand. And it's the conversation every first-time buyer deserves to have before they start touring homes.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're a first-time buyer in NC, the highest-leverage step is a real conversation with a lender who'll start from your budget instead of the bank's maximum. Send me the four numbers (gross household income, existing monthly debts, target down payment, and what feels like a comfortable monthly housing cost) and I'll run live scenarios across loan types so you can see the same family run three different ways. Get pre-approved when you're ready.",
      },
    ],
    faqs: [
      {
        q: "Is the 28/36 rule still useful?",
        a: "It's a reasonable starting point: keep total housing costs under 28% of gross income and total debt payments under 36%. But it was built for a different era of interest rates and property tax levels. Use it as a sanity check, not a target. Plenty of buyers who fit the 28/36 rule on paper still end up house-poor.",
      },
      {
        q: "How much should I have left in savings after closing?",
        a: "Most lenders want to see at least 2 months of mortgage payments in reserve. Practically, I encourage clients to aim for 3-6 months of total household expenses available after they bring cash to close. Closing with literally your last dollar is one bad month away from real stress.",
      },
      {
        q: "Do property taxes really vary that much by NC county?",
        a: "Yes. Property tax rates differ meaningfully across counties, and even within the same county a city tax can apply on top of the county rate. Coastal counties also tend to push insurance costs higher. Always pull the actual property's tax record before finalizing your monthly payment math.",
      },
      {
        q: "Should I stretch to buy a 'forever home' my first time?",
        a: "Sometimes. If you're confident you'll be in NC for 7+ years and the home meets your family's needs as it grows, stretching slightly can be worth it. If you're more likely to move in 3-5 years, buy comfortably and let the next purchase be the stretch.",
      },
      {
        q: "What's the income limit for NCHFA programs?",
        a: "It varies by county and household size and adjusts annually. Roughly speaking, single buyers earning under $80K-$95K and households earning under $95K-$110K (depending on county) often qualify. Always confirm the live limits, and don't assume you don't qualify until a lender actually checks.",
      },
      {
        q: "Should I include my spouse's income on the mortgage?",
        a: "Usually yes, but not always. If your spouse has weaker credit, including their income but not them on the loan can sometimes get you better pricing, though it depends on the loan type and lender. Run both scenarios before deciding.",
      },
    ],
  },
  {
    slug: "dscr-loans-north-carolina",
    title: "DSCR loans in North Carolina: the 2026 investor's guide",
    excerpt:
      "Conventional lenders cap your debt-to-income and want two years of tax returns. DSCR loans qualify the property instead, which is why they've become the workhorse of North Carolina portfolio growth. Here's how they actually work.",
    metaDescription:
      "How DSCR loans work for North Carolina investors: the qualification math, LLC vesting, short-term rental financing, and when DSCR beats conventional.",
    date: "July 2026",
    readTime: "7 min read",
    category: "Investment",
    body: [
      {
        type: "p",
        text: "If you've bought more than a couple of rental properties, you've probably hit the wall: conventional lenders cap how much debt-to-income they'll allow, they want two years of tax returns, and every write-off that saves you money in April works against you at the loan desk. DSCR loans exist to solve exactly that problem, and for North Carolina investors, from Wilmington short-term rentals to Fayetteville buy-and-holds, they've become the workhorse of portfolio growth.",
      },
      {
        type: "h2",
        text: "What a DSCR loan actually is",
      },
      {
        type: "p",
        text: "DSCR stands for debt service coverage ratio. Instead of qualifying you, your W-2, your tax returns, your personal debt-to-income, the lender qualifies the property itself.",
      },
      {
        type: "callout",
        text: "The formula: monthly rental income divided by the full monthly payment (principal, interest, taxes, insurance, and any HOA). A property renting for $2,400 against a $2,000 all-in payment has a DSCR of 1.20, so it covers its own debt with 20% to spare.",
      },
      {
        type: "p",
        text: "A ratio of 1.0 means the property exactly covers its payment, and anything higher is cash flow positive on paper. Programs vary in how low they'll go, with some accepting a DSCR as low as 0.75. What stays constant is the rest: no tax returns, no employment verification, no personal debt-to-income calculation. The deal stands on its own.",
      },
      {
        type: "h2",
        text: "What North Carolina investors should expect",
      },
      {
        type: "p",
        text: "Every program differs, but the shape is consistent: loan amounts from roughly $100K into the millions, rates modestly higher than conventional (the price you pay for the flexibility), and structures that include 30-year fixed, interest-only options, and ARMs. What unites them is the underwriting, where the property's cash flow carries the file instead of your personal income.",
      },
      {
        type: "p",
        text: "Two features matter enormously for portfolio builders. First, you can close in an LLC, which conventional loans generally don't allow, and most serious investors want that liability separation. Second, there's no cap on the number of financed properties, unlike conventional's ten-property limit that in practice becomes a wall around four to six.",
      },
      {
        type: "h2",
        text: "Short-term rentals: the coastal NC angle",
      },
      {
        type: "p",
        text: "Here's where North Carolina gets interesting. Wilmington, Carolina Beach, Oak Island, Topsail, and the Crystal Coast all have active short-term rental markets, and many DSCR programs will underwrite short-term rental income, using either market rent from an appraisal, a 12-month rental history, or projected income from recognized data providers.",
      },
      {
        type: "callout",
        tone: "warn",
        text: "Two cautions from the closing table. Lenders differ widely in how they treat short-term rental income, so the program you choose matters more than the headline rate. And every beach town has its own short-term rental ordinance, with permit requirements, rental caps, and zoning overlays, so verify the town's rules before you write the offer, not after.",
      },
      {
        type: "h2",
        text: "DSCR vs. conventional: when each wins",
      },
      {
        type: "p",
        text: "Conventional still wins when you qualify cleanly: if your debt-to-income has room, your tax returns are strong, and you're under the financed-property limit, conventional pricing is better. DSCR wins when you're self-employed with aggressive write-offs, scaling past the conventional property caps, buying in an LLC, moving fast on a deal, or buying a short-term rental that conventional underwriting won't touch.",
      },
      {
        type: "p",
        text: "The mistake I see most often: investors assume they can't qualify conventionally and pay the DSCR premium unnecessarily, or the reverse, burning weeks trying to force a conventional file that was never going to work. Run both paths before you commit. That comparison takes me about a day.",
      },
      {
        type: "h2",
        text: "How the process works with me",
      },
      {
        type: "p",
        text: "Same discipline as every file I run: we talk through the deal and your portfolio goals, I price it across DSCR and conventional options, you get a verified pre-approval within 24 hours, and we close on schedule, typically 21 to 30 days. I lend across NC, SC, TX, TN, and GA, so multi-state portfolios stay under one roof.",
      },
      {
        type: "p",
        text: "If you're running numbers on a deal, reach out before you lock into a path. I'll tell you honestly which one prices better for your situation.",
      },
    ],
    faqs: [
      {
        q: "What DSCR ratio do I need to qualify?",
        a: "It varies by program. A ratio of 1.0 means the rent exactly covers the full payment, and some programs go as low as 0.75. A stronger ratio generally means better terms, but the property's cash flow is what drives the decision.",
      },
      {
        q: "Do I have to show my personal income for a DSCR loan?",
        a: "No. DSCR loans qualify on the property's rental income against its payment, not your W-2, tax returns, or personal debt-to-income. That's exactly what makes them work for self-employed investors and anyone scaling past conventional limits.",
      },
      {
        q: "Can I close a DSCR loan in an LLC?",
        a: "Yes, and it's one of the main reasons investors choose DSCR. Conventional loans generally require you to hold title personally, while DSCR programs let you close in an LLC for liability separation, which most portfolio builders want.",
      },
      {
        q: "Do DSCR loans work for short-term rentals on the NC coast?",
        a: "Many do. Programs vary in how they credit short-term rental income, using market rent, a 12-month history, or projected figures from data providers. Because lenders differ so much here, the program you pick matters more than the rate, and you should always confirm the local short-term rental ordinance first.",
      },
      {
        q: "Is a DSCR loan better than a conventional loan?",
        a: "It depends. Conventional is usually cheaper if you qualify cleanly and are under the financed-property limit. DSCR wins when you're self-employed with heavy write-offs, scaling past conventional caps, buying in an LLC, or financing a short-term rental. It's worth pricing both before you decide.",
      },
    ],
  },
  {
    slug: "va-loan-hidden-benefits",
    title: "VA loan benefits most veterans miss",
    excerpt:
      "The zero-down part gets the headlines. But the real value is in the features nobody tells you about, and when to actually use them.",
    date: "February 2026",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "VA Loans",
    body: [
      {
        type: "p",
        text: "When I sit down with a Veteran buyer, the conversation almost always opens with \"I know VA loans are zero down.\" That's true, and it's great. But it's also the least interesting thing about the program. As an Army Veteran who runs VA scenarios every week, I've seen far too many service members and Veterans leave thousands of dollars on the table because they treated the VA loan like a single-feature product instead of the multi-tool benefit it actually is.",
      },
      {
        type: "h2",
        text: "No monthly mortgage insurance, ever",
      },
      {
        type: "p",
        text: "Conventional buyers with less than 20% down pay private mortgage insurance every month until they hit equity thresholds. FHA borrowers pay it for the life of the loan in most cases. VA buyers pay none. On a $400,000 loan, that's often $150-$250 a month that stays in your pocket, every month, for as long as you own the home.",
      },
      {
        type: "p",
        text: "Run the math over a five-year hold and you're looking at roughly $9,000-$15,000 in PMI savings versus a comparable conventional loan with low down. That's a real number. It pays for the funding fee several times over for most non-disabled borrowers, and it's pure savings for anyone with a disability waiver.",
      },
      {
        type: "h2",
        text: "The funding fee isn't always the villain",
      },
      {
        type: "p",
        text: "The one real cost on a VA loan is the funding fee, rolled into the loan. It sounds scary until you compare it to PMI over time, and it's waived entirely for Veterans with service-connected disabilities. For most borrowers, the math still comes out well ahead of any other low-down option.",
      },
      {
        type: "p",
        text: "The fee scales by down payment, first-versus-subsequent use, and service category. First-use buyers with $0 down pay more than first-use buyers putting 5% or 10% down. Subsequent users pay more than first-time users. Reservists and Guard members historically had a slightly different schedule than active-duty service members, though recent changes have flattened most of that difference. Confirm your live fee before you assume.",
      },
      {
        type: "h2",
        text: "Specific Veteran subgroups, specific math",
      },
      {
        type: "p",
        text: "The VA benefit doesn't pay off the same way for every Veteran. Here's how it actually plays out for the four subgroups I work with most often.",
      },
      {
        type: "h3",
        text: "Active-duty service members on PCS orders",
      },
      {
        type: "p",
        text: "If you're PCS-ing into a market (Camp Lejeune, Fort Liberty, Cherry Point, Seymour Johnson), the VA loan's $0-down structure is the single biggest cash-preserving move you can make. PCS moves drain savings. Keeping 5-20% in your account instead of dumping it on a down payment is what lets you absorb DITY-move overruns, deposit on a rental on the back end, and emergency car repairs in your first six months.",
      },
      {
        type: "h3",
        text: "Veterans with a service-connected disability rating",
      },
      {
        type: "p",
        text: "The funding-fee waiver is the single most under-used part of the VA program. If you have a service-connected disability rating, you pay zero funding fee. Combined with no PMI, that's a mortgage product with literally no mortgage-insurance cost in any form, something no other loan type in the market offers. If you have a pending disability rating that hasn't been finalized, talk to your lender about timing: there are some scenarios where waiting a few weeks for the rating to land saves thousands.",
      },
      {
        type: "h3",
        text: "Surviving spouses receiving DIC",
      },
      {
        type: "p",
        text: "Surviving spouses of service members who died in the line of duty (or from a service-connected disability) may be eligible for VA loan benefits, including the funding-fee waiver. There are remarriage rules and DIC eligibility rules that affect this. It's the most under-used VA benefit in my market and one I take particular care with. Most surviving spouses I talk to had no idea the benefit was theirs to use.",
      },
      {
        type: "h3",
        text: "Reserve and National Guard members",
      },
      {
        type: "p",
        text: "Eligibility for Reservists and Guard members generally kicks in after six years of service or 90 days of federal active-duty call-up. The benefit math is the same once you qualify: same $0-down, same no-PMI, same assumability. If you've been drilling for years and assumed VA wasn't for you, double-check; you may have crossed the eligibility threshold without realizing it.",
      },
      {
        type: "h2",
        text: "You can reuse your benefit",
      },
      {
        type: "p",
        text: "A lot of Veterans think the VA loan is a one-shot deal. It's not. You can restore your entitlement after selling, and in some cases you can even carry two VA loans at the same time. If you're PCS-ing or moving up, this is worth a 20-minute conversation before you assume you need to go conventional.",
      },
      {
        type: "p",
        text: "The most common reuse scenario I see in the Camp Lejeune market: a Marine bought with VA at their previous duty station, got PCS'd to North Carolina without selling, and now wants to buy here too. Second-tier entitlement math kicks in. It's doable but requires a real entitlement calculation before you make an offer. Don't trust generic online answers on this one.",
      },
      {
        type: "h2",
        text: "Assumable loans - the quiet superpower",
      },
      {
        type: "p",
        text: "VA loans are assumable. If rates rise, that feature becomes a real asset when you go to sell. A buyer can take over your low-rate loan instead of financing at the current market rate, which can widen your pool of interested buyers dramatically. Most Veterans don't find out about this until it's too late to plan around it.",
      },
      {
        type: "p",
        text: "In a high-rate environment, a 4% assumable loan against a market full of 7% new originations is a competitive moat. Listing agents in the Jacksonville and Fayetteville markets have started to put \"VA assumable\" in MLS descriptions because they know it's a selling point. If you bought with a low VA rate and you're thinking about selling, that's worth raising with your agent before they list.",
      },
      {
        type: "h2",
        text: "Common mistakes Veterans make with the VA benefit",
      },
      {
        type: "ul",
        items: [
          "Assuming the VA benefit is a one-time use. Restoration of entitlement after a sale is routine.",
          "Skipping the funding-fee waiver because the disability paperwork \"isn't done yet.\" Sometimes a short wait saves thousands.",
          "Choosing a lender who runs maybe one VA file a quarter. VA-fluent lenders close faster and avoid the appraisal-driven delays that fuel the \"VA is slow\" myth.",
          "Letting a listing agent's bias against VA offers go unanswered. A clean, fully-underwritten VA pre-approval competes with conventional. The fix is the strength of the file, not the loan type.",
          "Using the VA benefit on a property that conventional would handle just as well. Sometimes preserving entitlement for a future purchase is the smarter move.",
        ],
      },
      {
        type: "callout",
        text: "Want a side-by-side on whether VA actually wins for your specific scenario? See VA loan vs. conventional loan. It walks through the cases where each one is the right call.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're a Veteran or active-duty service member in NC and you haven't pulled your Certificate of Eligibility, that's the single highest-leverage thing you can do today. I can pull it electronically in most cases within a single business day. Once you know your live entitlement, every other decision (full vs. partial entitlement math, funding-fee scenarios, disability waiver timing) gets dramatically easier.",
      },
      {
        type: "p",
        text: "For the broader strategy on using a VA loan in the Camp Lejeune market, see the complete VA loan guide for Jacksonville, NC. For the side-by-side on whether VA is actually your best product, see VA loan vs. conventional loan. When you're ready, get pre-approved or send me a message. I'll run your real numbers, not a generic average.",
      },
    ],
    faqs: [
      {
        q: "Do I have to put any money down on a VA loan?",
        a: "No. With full entitlement, the VA loan funds 100% of the purchase price up to your entitlement limit. You'll still need earnest money and inspection costs, but no down payment on the loan itself. Partial-entitlement scenarios at higher price points can require a small down payment for the portion above the conforming limit.",
      },
      {
        q: "Is the VA funding fee waived for all disabled Veterans?",
        a: "It's waived for Veterans with a service-connected disability rating who would otherwise be entitled to compensation. It's also waived for surviving spouses receiving DIC and Purple Heart recipients on active duty. If your rating is pending, talk to your lender about timing before you close.",
      },
      {
        q: "Can I use a VA loan more than once?",
        a: "Yes. VA loan benefits are reusable. After selling a VA-financed home, your entitlement is restored. In some cases (typically PCS without sale), you can hold two VA loans at the same time using second-tier entitlement.",
      },
      {
        q: "Are VA loans really assumable?",
        a: "Yes, a creditworthy buyer can take over your existing VA loan at your locked-in rate. The assumption process requires lender approval and the buyer must qualify under VA guidelines. In a rising-rate environment, this is a meaningful selling-point asset.",
      },
      {
        q: "Why do some sellers reject VA offers?",
        a: "Almost always outdated information about VA appraisals or VA closing-cost rules. The fix is a clean, fully-underwritten pre-approval and a buyer's agent who can articulate the offer to the listing side. A VA offer with a strong file competes with conventional in this market.",
      },
      {
        q: "What credit score do I need for a VA loan?",
        a: "The VA itself doesn't set a minimum credit score. Lenders set their own minimums, typically 580-620. Higher scores get better pricing. If your credit is borderline, we can run scenarios to see whether a few months of credit-rebuilding moves you into a meaningfully better rate bracket.",
      },
      {
        q: "Can a surviving spouse use the VA loan benefit?",
        a: "In many cases, yes. Surviving spouses of service members who died in the line of duty or from a service-connected disability may be eligible, often with the funding fee waived. Remarriage rules and DIC eligibility apply. It's the most under-used VA benefit in my market, worth a 15-minute call to confirm whether you qualify.",
      },
    ],
  },
  {
    slug: "relocating-to-nc",
    title: "Relocating to North Carolina? Start here.",
    excerpt:
      "Out-of-state buyers face unique timing challenges. Here's how to finance a home you haven't physically seen yet, without the anxiety.",
    date: "February 2026",
    lastUpdated: "April 2026",
    readTime: "9 min read",
    category: "Relocation",
    body: [
      {
        type: "p",
        text: "Relocating to NC is one of my favorite parts of this job, and also one of the trickiest. You're managing a move, a new job, sometimes a family, and on top of all that you're trying to buy a home in a market you don't live in yet. Here's how I help clients keep their heads above water.",
      },
      {
        type: "h2",
        text: "Get pre-approved before you start the listing search",
      },
      {
        type: "p",
        text: "Out-of-state buyers often wait until they find a home they love to start the financing conversation. That's usually too late. A verified pre-approval done two or three weeks ahead of your search gives you a realistic budget, a letter your offers will need, and time to clean up anything surprising in your credit or income documentation.",
      },
      {
        type: "h2",
        text: "Coordinate lease timing and closing carefully",
      },
      {
        type: "p",
        text: "One of the most stressful parts of relocating is the gap (or overlap) between your current lease and your NC closing. We work backward from your must-move-by date and map out realistic contract and closing windows, so you're not double-paying for months or scrambling for temporary housing.",
      },
      {
        type: "h2",
        text: "Remote document collection, done right",
      },
      {
        type: "p",
        text: "Everything in my process is built to work remotely: secure document upload, e-sign, virtual closings where your title company allows them. You should never need to fly in just to sign paperwork. You might fly in for the home inspection. That's different.",
      },
      {
        type: "h2",
        text: "The out-of-state buyer's checklist",
      },
      {
        type: "p",
        text: "Print this. Tape it to your fridge. The relocation buyers I work with who hit closing without a panicked week worked some version of this list 60-90 days out.",
      },
      {
        type: "ul",
        items: [
          "Confirm your lease end date, and your earliest break-without-penalty date if you might need to move sooner.",
          "Calculate the month-to-month overlap or gap between your current lease and your NC closing target. Plan housing for it now, not later.",
          "Pull your credit yourself before any lender pulls it for you. Address surprises proactively.",
          "Gather two months of bank statements, two years of W-2s, two recent pay stubs, and (if self-employed) two years of personal and business tax returns. Have them in a single folder ready to upload.",
          "Confirm whether your title company supports remote online notarization (RON). Availability varies by county and by title underwriter, and not every NC closing can be fully remote.",
          "Identify a buyer's agent in your target NC market before you start touring. Your lender and your agent should be talking to each other early.",
          "Set up MLS alerts in 1-2 specific submarkets, not the whole state. Narrow the funnel to where you'll actually buy.",
          "Plan one in-person visit if at all possible, for inspection or final walk-through. Sight-unseen purchases work, but reduce risk where you can.",
          "Get homeowners insurance quotes during the inspection period, especially in coastal counties where wind and flood coverage drives real cost variance.",
          "Update your driver's license, voter registration, and DEERS or other employment records on your post-move timeline, not the day before closing.",
        ],
      },
      {
        type: "h2",
        text: "Know the NC market you're moving to",
      },
      {
        type: "p",
        text: "North Carolina is not one market. The submarkets behave differently in pricing, inventory rhythm, and the kind of buyer who wins offers. Here's the abbreviated lay of the land for the five most-asked-about NC destinations.",
      },
      {
        type: "h3",
        text: "Wilmington and the coast",
      },
      {
        type: "p",
        text: "Wilmington, Wrightsville Beach, Carolina Beach, and the surrounding coastal towns. Mix of historic downtown homes, beach condos with HOA quirks, new construction toward Porters Neck, and high-end second homes in Landfall and Figure Eight. Flood zones, wind insurance, and condo-project approvals matter more here than almost anywhere else inland. Strong landing spot for buyers from the Northeast and Midwest looking for coastal access at a price point well below Florida.",
      },
      {
        type: "h3",
        text: "Raleigh-Durham and the Triangle",
      },
      {
        type: "p",
        text: "Raleigh, Durham, Cary, Chapel Hill, Apex, Holly Springs, Wake Forest. Tech-and-research-driven economy, a high concentration of relocating professionals, fast-moving inventory, competitive offer environments. Pricing has stabilized after several years of sharp growth but the Triangle still rewards buyers with a clean, fully-underwritten pre-approval and a buyer's agent who knows the submarket.",
      },
      {
        type: "h3",
        text: "Charlotte",
      },
      {
        type: "p",
        text: "The biggest NC metro by population and the financial hub. Strong corporate relocation pipeline, neighborhood character that varies wildly between intown areas (NoDa, Plaza Midwood, South End) and the surrounding suburbs (Ballantyne, Matthews, Huntersville, Concord). New construction is a meaningful piece of the inventory. Charlotte buyers should pay extra attention to which Mecklenburg County submarket they're actually targeting. Generic 'Charlotte' search criteria miss the point.",
      },
      {
        type: "h3",
        text: "The Triad",
      },
      {
        type: "p",
        text: "Greensboro, Winston-Salem, High Point, and the surrounding towns. More affordable than the Triangle or Charlotte for an equivalent home, growing slower, and often the right answer for relocating families who prioritize cost-of-living and space over the highest-velocity job markets. Solid choice for remote workers who don't need to be in Raleigh or Charlotte for work.",
      },
      {
        type: "h3",
        text: "Asheville and the western mountains",
      },
      {
        type: "p",
        text: "Different economy, different inventory, different rhythm. Asheville rewards buyers willing to act fast on the right property and patient otherwise. Inventory turns at its own pace. Tourism, retiree, and lifestyle-relocator demand keeps pricing higher than the rest of NC outside the coastal premium markets. If you're going west, work with an agent who actually lives there.",
      },
      {
        type: "h2",
        text: "Common relocation mistakes",
      },
      {
        type: "ul",
        items: [
          "Waiting until you arrive to start pre-approval. The contract-to-close timeline you need is harder to hit on a cold start.",
          "Picking a national lender who has no NC-specific knowledge. Property tax math, wind insurance quirks, and county-by-county recording timing all matter.",
          "Underestimating temporary housing cost. A 30-day extended-stay or short-term rental in NC can easily run $4,000+. Bake it into your relocation budget.",
          "Going under contract on a sight-unseen home without a knowledgeable buyer's agent walking it for you. Use video tours plus a real human's eyes.",
          "Forgetting that your current home sale (if any) needs to dovetail with your NC purchase. Bridge financing, contingent offers, and sale-leaseback arrangements all exist for a reason.",
        ],
      },
      {
        type: "callout",
        text: "If your relocation is military (PCS to Camp Lejeune, Fort Liberty, Cherry Point, or Seymour Johnson), the timing math is different. The PCS-specific guides on this site walk through the week-by-week version with VA loan integration.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "Send me your relocation timeline: current address, target NC market, your move-by date, and any income or job-change variables. I'll map a finance plan against it within a day. Pre-approval can typically start the same week and finish in two to three. Get pre-approved when you're ready, or send me a message first and we'll talk through the moving parts.",
      },
    ],
    faqs: [
      {
        q: "Can I close on an NC home before I physically move here?",
        a: "Yes, in most cases. The lender requires occupancy intent within a reasonable window (typically 60 days), but you can absolutely close while still living in another state and move in afterward. We coordinate the timeline so the closing date and your move date line up.",
      },
      {
        q: "Do I need to fly to NC to close?",
        a: "Often no. Many NC counties and title companies support remote online notarization (RON), and even where RON isn't available, a mobile notary can come to you for the signing. The key is asking your title company specifically about your county and your closing. Availability isn't universal.",
      },
      {
        q: "How early should I start pre-approval before relocating?",
        a: "60-90 days out is comfortable. 30 days is doable but tight. The earlier you start, the more flexibility you have to address credit surprises, time the market, and avoid cold-start scrambles when you find the right home.",
      },
      {
        q: "Will my out-of-state lender work in NC?",
        a: "Maybe, but with significant downsides. Lenders licensed in NC understand the state's specific tax math, recording timing, insurance requirements, and county-by-county quirks. A national lender with no NC experience can get a deal done, but slower and with more friction than a lender who runs NC files every week.",
      },
      {
        q: "Should I rent first and buy later?",
        a: "Sometimes. If you're moving for a job that has any meaningful chance of not working out (new role, new industry, new company you haven't worked at before), renting for 6-12 months is genuinely the safer call. If you're confident in the move, buying immediately preserves cash by avoiding double moves and lets you start building equity sooner.",
      },
      {
        q: "What if my employer is paying for my relocation?",
        a: "Document everything. Many corporate relocation packages include lender programs, closing-cost reimbursement, or guaranteed buyout of your current home. Read the package carefully and share it with your NC lender on day one. Some of those benefits affect the structure of your purchase.",
      },
    ],
  },
  {
    slug: "strong-pre-approval",
    title: "What a strong pre-approval actually looks like",
    excerpt:
      "Not all pre-approvals are equal. Here's what separates the ones that win offers from the ones that don't, and what to ask your lender.",
    date: "January 2026",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "First-Time Buyers",
    body: [
      {
        type: "p",
        text: "A pre-approval letter is one piece of paper. But behind that paper, there's a massive difference between a lender who verified your income and assets, and one who took your word for it over a five-minute phone call. Listing agents can tell the difference. So can the sellers they advise.",
      },
      {
        type: "h2",
        text: "What actually gets verified",
      },
      {
        type: "p",
        text: "A real pre-approval means I've already looked at your W-2s, pay stubs, tax returns if applicable, bank statements, and credit report. I've run the numbers against specific loan programs. I know your DTI, your cash to close, and your reserves. If something's going to cause a problem in underwriting, I want to find it now, not three days before closing.",
      },
      {
        type: "h2",
        text: "Conditions that hide real risk",
      },
      {
        type: "p",
        text: "Every pre-approval has conditions. The question is whether those conditions are routine (appraisal, final income verification) or red flags (unverified self-employment income, gift funds that haven't been traced, recent large deposits). A sharp loan officer reads those conditions back to you in plain English so you know what still needs to happen.",
      },
      {
        type: "h2",
        text: "Verified pre-approval vs. generic letter - side by side",
      },
      {
        type: "p",
        text: "Most online lenders issue what I'd call a generic letter. It's usually a soft pre-qualification dressed up to look like a pre-approval. Listing agents have learned to spot the difference. Here's what each one actually contains.",
      },
      {
        type: "h3",
        text: "What a verified pre-approval contains",
      },
      {
        type: "ul",
        items: [
          "Income reviewed against actual documents (W-2s, pay stubs, two years of tax returns for self-employed borrowers).",
          "Assets verified through actual bank statements with sourcing of any large recent deposits.",
          "Credit report pulled and reviewed by the loan officer, not just an automated score.",
          "Debt-to-income ratio calculated against the specific loan program you'd use.",
          "Run through automated underwriting (DU or LP) with an approve/eligible response.",
          "Conditions clearly stated: which ones are routine, which still carry risk.",
          "Specific maximum purchase price, down payment, and monthly payment scenarios.",
          "Lender contact information so the listing agent can call and confirm in real time.",
        ],
      },
      {
        type: "h3",
        text: "What a generic letter usually contains",
      },
      {
        type: "ul",
        items: [
          "A self-reported income figure the lender hasn't verified.",
          "A credit score band, not an actual review of your credit report.",
          "A purchase price ceiling based on a rough DTI estimate.",
          "Boilerplate \"subject to verification of income, assets, and credit\" language that means nothing has actually been verified.",
          "No mention of the specific loan program or scenario.",
          "Sometimes no callable lender contact, just an automated email signature.",
        ],
      },
      {
        type: "callout",
        text: "On a competitive offer in the Triangle or Charlotte, a generic letter loses to a verified pre-approval almost every time, even when the generic letter quotes a higher price. Listing agents know which lenders close on time and which letters fall apart in underwriting.",
      },
      {
        type: "h2",
        text: "Three questions to ask your lender",
      },
      {
        type: "p",
        text: "Have you looked at my actual documents, or am I self-reporting? Have you run this through automated underwriting? What specific conditions are on my letter, and which ones could still derail the loan? If your lender can't answer those clearly, the letter isn't worth much when offer time comes.",
      },
      {
        type: "h2",
        text: "Common pre-approval mistakes",
      },
      {
        type: "ul",
        items: [
          "Treating an online pre-qual as a pre-approval. They are not the same product.",
          "Letting your pre-approval expire mid-search. Most letters are good for 60-90 days; if your search runs longer, refresh proactively.",
          "Opening new credit during your pre-approval window. New car, new credit card, even a co-signed loan can shift your DTI.",
          "Switching jobs without telling your lender. Some changes are fine. Many are not.",
          "Trusting a pre-approval from a lender who doesn't run files in your specific market. Local pricing, tax math, and condo-project quirks all matter.",
        ],
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're touring homes with a generic letter, replace it before you find one you love. A verified pre-approval takes 24-48 hours once you upload documents and is the single biggest competitive advantage you can give your offer. Get pre-approved when you're ready, or send me a message first and we'll talk through the documents you'll need.",
      },
    ],
    faqs: [
      {
        q: "How long does a pre-approval take?",
        a: "A real, document-verified pre-approval typically takes 24-48 hours once you've uploaded your income, asset, and credit documents. A soft pre-qualification can be issued in minutes, but it isn't worth much when offer time comes.",
      },
      {
        q: "How long is a pre-approval valid?",
        a: "Most pre-approval letters are good for 60-90 days. After that, the lender needs updated income and asset documentation to refresh it. If your search is running long, ask for a refresh before the letter expires.",
      },
      {
        q: "Will getting pre-approved hurt my credit score?",
        a: "There's a small, temporary impact from the credit pull, usually a few points that recover within a couple of months. Multiple mortgage credit pulls within a 14-45 day window are typically counted as a single inquiry by the scoring models, so shopping around doesn't compound the hit.",
      },
      {
        q: "Can I get pre-approved with an offer letter from a new job?",
        a: "Often yes. Many lenders will count income from a written offer letter, especially if you're starting in the same field at similar pay. Self-employment changes, commission-based new roles, and probationary periods all add complexity. Always disclose the change up front.",
      },
      {
        q: "Should I get pre-approved by more than one lender?",
        a: "Pre-qualified, sure, for rate shopping. Fully pre-approved, generally no. Multiple full underwrites is overkill. Pick one lender you trust, get fully pre-approved with them, and use the rate-shopping window to compare pricing without re-running full files.",
      },
      {
        q: "What if my pre-approval is for less than the home I want?",
        a: "Three options: increase your down payment to lower the loan amount, pay down existing debt to free up DTI room, or look at a different loan program (VA and FHA sometimes allow higher qualifying numbers than conventional). Don't lie to push the number up. Underwriting will catch it.",
      },
    ],
  },
  {
    slug: "mortgage-fees",
    title: "The 4 mortgage fees buyers underestimate",
    excerpt:
      "The headline rate tells you one thing. Here's what to ask about the fees that quietly move the needle on your total cost.",
    date: "January 2026",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "Education",
    body: [
      {
        type: "p",
        text: "Buyers shop rates. I get it: the rate is the thing you can compare across lenders in about ten seconds. But rate is only part of the story. The fees attached to a loan can swing the total cost by thousands, and not every lender explains them the same way.",
      },
      {
        type: "h2",
        text: "Origination and discount points",
      },
      {
        type: "p",
        text: "Origination is what the lender charges to make the loan. Discount points are what you pay to buy down your rate. They both look like percentages of the loan, but they do different things, and they're the first place to check when one lender's rate looks dramatically better than another's.",
      },
      {
        type: "h2",
        text: "Third-party fees",
      },
      {
        type: "p",
        text: "Appraisal, credit report, title, settlement, recording fees. Most of these go to vendors, not the lender, which is why they don't vary much between loan officers. But they're real costs, and some shoppers forget they exist until they see the final numbers at the closing table.",
      },
      {
        type: "h2",
        text: "Prepaids",
      },
      {
        type: "p",
        text: "This is the category that surprises people most. Prepaids are things like initial escrow deposits, prepaid interest from closing to the end of the month, and the first year of homeowners insurance. They feel like fees, but they're really advance payments on things you'd be paying anyway. Still, they hit your cash-to-close number hard.",
      },
      {
        type: "h2",
        text: "Mortgage insurance and government-backed program fees",
      },
      {
        type: "p",
        text: "If you're putting less than 20% down on a conventional loan, you'll have private mortgage insurance, sometimes paid up front as a single premium, more commonly added monthly. FHA loans carry an upfront mortgage insurance premium plus monthly MIP. VA loans have the funding fee (often financed into the loan, waived for service-connected disability). USDA loans have their own guarantee fee. None of these are exotic, but every one of them quietly affects your total cost, and lenders explain them differently.",
      },
      {
        type: "h2",
        text: "Real-numbers example: $400,000 NC purchase",
      },
      {
        type: "p",
        text: "Here's the rough closing-cost breakdown for a typical $400,000 conventional purchase in North Carolina with 5% down. Numbers vary by lender, county, title company, and program, but the order of magnitude and the line-item structure stay consistent. Use this to sanity-check any Loan Estimate you receive.",
      },
      {
        type: "h3",
        text: "Lender-controlled fees (Loan Estimate Section A)",
      },
      {
        type: "ul",
        items: [
          "Origination / underwriting fee: $1,000-$1,800",
          "Processing fee: $300-$600 (sometimes bundled with underwriting)",
          "Discount points (optional, if you buy down the rate): 0-2% of loan amount",
        ],
      },
      {
        type: "h3",
        text: "Third-party services (Section B and C)",
      },
      {
        type: "ul",
        items: [
          "Appraisal: $550-$750 in most NC counties; higher for complex or coastal properties",
          "Credit report: $50-$100",
          "Title insurance (lender's policy required, owner's optional but recommended): roughly $1,200-$2,000 combined on a $400K purchase",
          "Settlement / attorney closing fee: $600-$1,000 (NC requires an attorney closing)",
          "Recording fees and transfer taxes: $200-$400",
          "Survey (if required): $400-$700",
        ],
      },
      {
        type: "h3",
        text: "Prepaids and escrow setup (Section F and G)",
      },
      {
        type: "ul",
        items: [
          "Homeowners insurance (first year, paid at closing): $900-$2,500+ depending on coastal exposure",
          "Prepaid mortgage interest from closing to month-end: $200-$1,200 depending on closing date",
          "Property tax escrow (typically 2-4 months reserved): $400-$2,000+ depending on county",
          "Initial homeowners insurance escrow (usually 2 months): $150-$400",
        ],
      },
      {
        type: "callout",
        text: "Roll it up and the total cash to close on a $400K NC purchase with 5% down typically lands somewhere between $25,000 and $30,000. That's $20,000 down payment plus roughly $5,000-$10,000 in fees and prepaids. Knowing this in advance is the difference between a calm closing and a scramble.",
      },
      {
        type: "h2",
        text: "Common fee mistakes",
      },
      {
        type: "ul",
        items: [
          "Comparing rate quotes from different lenders without comparing fees. A 0.125% lower rate with $3,000 more in origination is usually a worse deal.",
          "Treating the APR as the whole story. APR captures most fees but excludes prepaids and some third-party costs, useful but not complete.",
          "Letting a lender quote a 'no closing costs' loan without asking how they're paying for it. Usually it's a higher rate, paid for the life of the loan.",
          "Ignoring rate-lock-extension fees. If your closing slips past your lock period, an extension can cost real money. Ask up front what the lender's policy is.",
          "Forgetting the buyer-paid home inspection ($400-$700). It's not on the Loan Estimate but it's still cash you'll spend during the contract period.",
        ],
      },
      {
        type: "h2",
        text: "What to compare",
      },
      {
        type: "p",
        text: "Ask every lender for a full Loan Estimate, not just a rate quote. Compare the \"A\" section (origination), the APR (which includes most fees baked in), and the total cash to close. That's the apples-to-apples comparison, and it's the only one worth making.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're rate-shopping, ask each lender for a written Loan Estimate against the same scenario: same loan amount, same purchase price, same down payment, same property type. Compare line by line, not headline to headline. When you're ready to get a real quote built against your actual numbers, get pre-approved or send me a message and I'll walk you through what each fee on the page actually does.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between origination fee and discount points?",
        a: "Origination is what the lender charges to make the loan. It's their compensation. Discount points are an optional cost you pay to buy down your interest rate. Both look like percentages of the loan amount on the Loan Estimate, but they serve different purposes. A lender may quote a low rate that comes with mandatory discount points; another may quote a slightly higher rate with no points. Compare total cost over your expected hold period.",
      },
      {
        q: "Are 'no closing cost' loans actually free?",
        a: "No. The lender either covers the closing costs by giving you a higher interest rate (lender credit) or rolls them into the loan amount. Either way, you pay over time. For short holds (3-5 years) a no-closing-cost loan can win on total cost. For long holds, paying the closing costs up front and getting the lower rate usually wins.",
      },
      {
        q: "Can I negotiate mortgage fees?",
        a: "Some: origination, processing, and underwriting fees are sometimes negotiable, especially with a strong borrower profile. Third-party fees (appraisal, title, recording) are largely fixed because they go to vendors, not the lender. The biggest leverage is shopping multiple lenders against the same scenario and asking each to match the lowest credible quote.",
      },
      {
        q: "Why are NC closing costs different from other states?",
        a: "North Carolina requires an attorney to handle real estate closings, which adds a settlement fee that title-only states don't have. NC also has its own transfer tax and recording fee structure. Total closing costs in NC are roughly comparable to most other states, just allocated differently across line items.",
      },
      {
        q: "What is the funding fee on a VA loan and is it really mandatory?",
        a: "The VA funding fee is a one-time charge that funds the VA loan program. It's typically rolled into the loan, not paid in cash. It's fully waived for Veterans with a service-connected disability rating, surviving spouses receiving DIC, and Purple Heart recipients on active duty. For everyone else, it's mandatory but offset by the program's no-PMI savings over time.",
      },
      {
        q: "How much should homeowners insurance cost in NC?",
        a: "Inland NC typically runs $900-$1,500 per year for a standard $400,000 home. Coastal NC (within 10-20 miles of the coast) often runs $1,500-$3,000+ because of wind and hail coverage. Properties in mapped flood zones add a separate flood insurance policy on top, which can range from a few hundred dollars to several thousand annually depending on risk classification.",
      },
    ],
  },
  {
    slug: "when-to-refinance",
    title: "When refinancing actually makes sense",
    excerpt:
      "Break-even math you can run in five minutes, plus a few scenarios where it doesn't add up even when the new rate looks great.",
    date: "December 2025",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "Refinance",
    body: [
      {
        type: "p",
        text: "Every time rates drop, my phone lights up with the same question: should I refinance? Sometimes the answer is obvious. Usually it's not. The honest version requires doing the math, and being willing to walk away if the math doesn't work.",
      },
      {
        type: "h2",
        text: "The break-even calculation",
      },
      {
        type: "p",
        text: "Take the total cost of the refinance (lender fees, title, appraisal, prepaids) and divide by your monthly savings. That's how many months it takes to break even. If you plan to keep the home longer than that, refinancing probably makes sense. If you don't, it probably doesn't. This is the whole calculation, and it takes five minutes.",
      },
      {
        type: "h2",
        text: "A worked example",
      },
      {
        type: "p",
        text: "Let's run an actual scenario. You took out a $350,000 mortgage at 7.25% three years ago. Rates have dropped to 6.0%. Should you refinance?",
      },
      {
        type: "h3",
        text: "Step 1: estimate your monthly savings",
      },
      {
        type: "p",
        text: "On the original $350,000 at 7.25%, your monthly principal-and-interest payment is roughly $2,388. After three years of payments, your remaining balance is around $337,000. Refinancing $337,000 at 6.0% on a fresh 30-year drops the principal-and-interest payment to about $2,021. Monthly savings: roughly $367.",
      },
      {
        type: "h3",
        text: "Step 2: estimate refinance costs",
      },
      {
        type: "p",
        text: "Refinance closing costs typically run $4,000-$6,000 on a loan of this size in NC, depending on lender fees, title charges, and prepaids. For this example, call it $5,000.",
      },
      {
        type: "h3",
        text: "Step 3: divide costs by monthly savings",
      },
      {
        type: "p",
        text: "$5,000 divided by $367 in monthly savings = roughly 14 months to break even. If you plan to keep the home longer than 14 months, the refinance pays off. If you might move in less than that, it doesn't.",
      },
      {
        type: "callout",
        text: "Two important caveats: (1) the rough math above ignores the fact that you reset your amortization clock: you're now paying a higher proportion of interest in the early years again. (2) If you finance the closing costs into the loan instead of paying out of pocket, the break-even shifts because you're now paying interest on those costs over 30 years.",
      },
      {
        type: "h2",
        text: "Cash-out refinance math is different",
      },
      {
        type: "p",
        text: "If you're pulling equity out for a real purpose (paying off high-interest debt, funding a renovation that adds value), the break-even math shifts. You're not just comparing rates, you're comparing the all-in cost of capital against your alternatives. Sometimes the rate goes up slightly and the refi still makes perfect sense.",
      },
      {
        type: "p",
        text: "Example: replacing $30,000 of credit card debt at 22% APR by adding it to your mortgage at 6%. Even if your new mortgage rate is slightly higher than your old one, the savings on the credit card interest alone usually justifies the move, provided you don't run the cards back up. The discipline question matters as much as the math.",
      },
      {
        type: "h2",
        text: "Scenarios where it doesn't pay",
      },
      {
        type: "p",
        text: "Refinancing isn't free, and the marketing around \"how much you'll save\" usually skips the situations where the math turns negative. Here are the cases where I tell clients to stay put.",
      },
      {
        type: "h3",
        text: "You're 10+ years into a 30-year loan",
      },
      {
        type: "p",
        text: "Even at a meaningfully lower rate, resetting your amortization clock back to 30 years often costs more total interest than just paying the existing loan to term. If the refi-to-30 saves $150 a month but adds $40,000 in lifetime interest, that's not a win. A refinance into a 15- or 20-year term can fix this, but only if the new payment fits your budget.",
      },
      {
        type: "h3",
        text: "Your rate drop is under 0.5%",
      },
      {
        type: "p",
        text: "On most loan sizes, a sub-50-basis-point rate drop produces a break-even period that's longer than most homeowners stay in their home. Wait for a bigger drop or a meaningful change in your situation (cash-out need, term change, removing PMI).",
      },
      {
        type: "h3",
        text: "You might move in the next 18 months",
      },
      {
        type: "p",
        text: "Refinance break-even is typically 12-24 months on a meaningful rate drop. If you're likely to move sooner, you'll pay closing costs to set up a loan you'll abandon before recouping them. The exception is a free or near-free streamline refinance, which exists for some VA and FHA loans.",
      },
      {
        type: "h3",
        text: "Removing PMI is the only goal",
      },
      {
        type: "p",
        text: "If you've hit 20% equity on a conventional loan and your only motivation is dropping PMI, you usually don't need a full refinance. Request automatic PMI cancellation from your servicer once you reach 78% LTV (or request it at 80%). That's a phone call, not a $5,000 transaction.",
      },
      {
        type: "h2",
        text: "Common refinance mistakes",
      },
      {
        type: "ul",
        items: [
          "Refinancing every time rates dip without recalculating the break-even.",
          "Rolling closing costs into the loan and forgetting that you're now paying 30 years of interest on those costs.",
          "Resetting a 30-year loan you're 10+ years into without considering a 15- or 20-year refi instead.",
          "Cash-out refinancing to pay off debt without changing the spending pattern that created the debt.",
          "Not shopping the refi: the lender who originated your purchase isn't automatically the best refi option.",
        ],
      },
      {
        type: "h2",
        text: "Special case: VA streamline refinance (IRRRL)",
      },
      {
        type: "p",
        text: "If you have an existing VA loan, the Interest Rate Reduction Refinance Loan (IRRRL) is meaningfully cheaper than a full refinance. No new appraisal in most cases, no income re-verification, lower closing costs, and a lower funding fee than a typical refi. The break-even math on an IRRRL is usually a fraction of a conventional refinance, often single-digit months.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're considering a refinance, send me your current loan amount, current rate, current monthly payment (principal and interest only), and the rate you're being quoted. I'll run the actual break-even and tell you honestly whether it's worth doing. The best refinance is sometimes the one you skip, and you deserve a lender who'll tell you that.",
      },
    ],
    faqs: [
      {
        q: "How big does the rate drop need to be to make refinancing worth it?",
        a: "There's no single threshold. The old rule of thumb was 1%, but that was built for a different fee environment. The honest answer is run the break-even: total refinance costs divided by monthly savings equals the months to break even. If your hold period is longer than the break-even, it's worth doing. Sometimes 0.5% is enough; sometimes 1% isn't.",
      },
      {
        q: "Should I roll closing costs into the loan or pay them at closing?",
        a: "Depends on your cash position and how long you'll keep the loan. Paying out of pocket means you start saving immediately and pay no interest on the closing costs. Rolling them in preserves cash but means you'll pay interest on those costs for the life of the loan, which can erode the long-term savings if you keep the loan to term.",
      },
      {
        q: "Will refinancing hurt my credit score?",
        a: "Slightly and temporarily. The credit pull typically costs a few points; the new account replaces the old one in your credit mix. Within a few months, scores generally recover. Multiple mortgage credit pulls within a 14-45 day shopping window are typically counted as a single inquiry by FICO models.",
      },
      {
        q: "Can I refinance if I have a VA loan?",
        a: "Yes, and you have two paths. A VA Interest Rate Reduction Refinance Loan (IRRRL) is the streamlined option: lower fees, no new appraisal in most cases, fast turnaround. A VA cash-out refinance is the full-underwrite version that lets you pull equity. Both reuse your VA entitlement.",
      },
      {
        q: "What if my home value has dropped since I bought?",
        a: "Conventional refinances generally require equity. If you're underwater, options are limited: a streamline refi (FHA Streamline or VA IRRRL) sometimes works without a new appraisal. Otherwise, the realistic answer is wait for the market or build equity through extra principal payments before refinancing.",
      },
      {
        q: "Is now a good time to refinance?",
        a: "Honest answer: it depends on your specific loan, your current rate, your hold expectation, and what rates have actually done. Don't trust generic 'rates dropped, you should refinance' marketing. Run your specific break-even. It's the only calculation that gives you the real answer.",
      },
    ],
  },
  {
    slug: "credit-mistakes",
    title: "Credit mistakes to avoid before closing",
    excerpt:
      "The biggest deal-breakers happen between application and closing, and most of them are completely avoidable if you know what to watch for.",
    date: "December 2025",
    lastUpdated: "April 2026",
    readTime: "8 min read",
    category: "Education",
    body: [
      {
        type: "p",
        text: "I've seen more than one clean, approved loan nearly fall apart in the final week because a buyer did something that felt harmless. Here are the ones that come up most often, and, just as importantly, what you can do to recover if you've already made one of them.",
      },
      {
        type: "h2",
        text: "Don't open new credit accounts",
      },
      {
        type: "p",
        text: "That store card at the checkout counter, the car loan for the new truck, the \"interest free for 24 months\" couch financing. All of it shows up on your credit report and changes your DTI. Lenders pull credit again right before closing. Anything new can force a re-underwrite, or in the worst case, a full reapproval.",
      },
      {
        type: "h3",
        text: "If you've already opened new credit",
      },
      {
        type: "p",
        text: "Tell your loan officer immediately. Don't wait for the pre-closing credit pull to surface it. We can usually re-run the numbers with the new debt added: sometimes the file still works, sometimes it requires paying off the new account before closing, sometimes it requires a different loan structure. The earlier we know, the more options we have. The worst version of this is when underwriting catches it 48 hours before closing.",
      },
      {
        type: "h2",
        text: "Don't close old accounts either",
      },
      {
        type: "p",
        text: "The opposite also hurts. Closing a long-standing credit card shortens your credit history and raises your utilization, which can drop your score. If a loan officer tells you to leave your credit completely alone until closing, they mean completely.",
      },
      {
        type: "h3",
        text: "If you've already closed an account",
      },
      {
        type: "p",
        text: "The damage isn't always reversible. Some card issuers will reopen a recently closed account if you call within 30-60 days; many won't. Either way, tell your loan officer so we can pull a fresh credit report and see whether your score actually moved. In a lot of cases the impact is smaller than people fear, but we need to know.",
      },
      {
        type: "h2",
        text: "Don't change jobs without talking to me first",
      },
      {
        type: "p",
        text: "A job change isn't automatically a deal-killer, but it often is if it happens at the wrong moment or involves a pay structure change. If you get a new job offer during your transaction, tell your loan officer before you accept. We can usually plan around it. We can't fix it after the fact.",
      },
      {
        type: "h3",
        text: "If you've already accepted a new job",
      },
      {
        type: "p",
        text: "It depends on the type of change. Same field, similar pay, W-2 employee: usually fine, sometimes with a written offer letter and verification of start date. Switching from W-2 to 1099 (or vice versa), going from base salary to commission, or changing industries: much harder. Some scenarios require waiting until you have new pay stubs in hand before closing, which can mean delaying the closing date or restructuring the contract.",
      },
      {
        type: "h2",
        text: "Don't make large unexplained deposits",
      },
      {
        type: "p",
        text: "Underwriting will source every deposit over a small threshold (typically $1,000 or 50% of your monthly income, depending on the loan type). Cash deposits, Venmo transfers, gifts not properly documented, sales of personal property without receipts. All of these can delay the file or get the funds excluded from your reserves.",
      },
      {
        type: "h3",
        text: "If you've already made a large deposit",
      },
      {
        type: "p",
        text: "Document the source immediately. Cash deposits from undocumented sources are usually unrecoverable: those funds typically can't be used at closing. Gift funds need a signed gift letter from the donor plus their bank statement showing the funds came from their account. Sales of personal property need a bill of sale and ideally some evidence the property existed (photos, prior receipts). The earlier you start gathering documentation, the better.",
      },
      {
        type: "h2",
        text: "Don't co-sign a loan for someone else",
      },
      {
        type: "p",
        text: "Co-signing means you're legally responsible for the debt, and underwriting treats it as your debt. A buddy's car loan, your kid's apartment lease, anything you've put your name on shows up on your credit report and counts against your DTI for mortgage qualification.",
      },
      {
        type: "h3",
        text: "If you've already co-signed",
      },
      {
        type: "p",
        text: "Disclose it up front and bring documentation showing the primary borrower's payment history. Some loan types allow co-signed debt to be excluded from your DTI if you can document the primary borrower has been making payments on time for 12 months. The documentation requirement is real: bank statements showing the payments came from their account, not yours. Don't try to hide a co-signed obligation; it's on your credit report and underwriting will find it.",
      },
      {
        type: "h2",
        text: "Don't pay off old collections without asking first",
      },
      {
        type: "p",
        text: "Counterintuitively, paying off an old collection can actually drop your credit score temporarily because it updates the account's last-activity date. If your collection is more than a few years old and you're 60 days from closing, the smart move is often to leave it alone, document it as paid through the closing process if needed, and address it after you have keys.",
      },
      {
        type: "h3",
        text: "If you've already paid off a collection",
      },
      {
        type: "p",
        text: "Pull a fresh credit report and tell your loan officer. The score impact is usually short-lived: within a few months scores typically rebound. If the timing of your closing is tight, your loan officer may be able to do a rapid rescore (a paid service that gets credit bureaus to update faster than the normal monthly cycle), which can pull a slightly weakened score back into the lender's required range.",
      },
      {
        type: "h2",
        text: "The complete don't-do-this list",
      },
      {
        type: "ul",
        items: [
          "Don't apply for new credit (cards, auto loans, store financing).",
          "Don't close old credit accounts, especially long-standing ones.",
          "Don't change jobs without telling your loan officer first.",
          "Don't make large cash deposits or accept large undocumented gifts.",
          "Don't co-sign a loan for anyone, even temporarily.",
          "Don't pay off old collections in the 60 days before closing without checking first.",
          "Don't move money between accounts without keeping documentation.",
          "Don't miss any payments, even on debts you're planning to pay off through closing.",
        ],
      },
      {
        type: "callout",
        text: "Rule of thumb: from the day you apply to the day you close, treat your financial life like it's frozen. Make every payment on time, change nothing structural, and call your loan officer before doing anything you're unsure about. A 30-second phone call beats a re-underwrite.",
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "If you're in the middle of a transaction and you've already done one of these, send me the details. Most credit slip-ups are recoverable when caught early. The worst-case scenarios are the ones underwriting catches at the last minute. Get pre-approved when you're ready, or send me a message first and I'll walk you through what to watch for in your specific situation.",
      },
    ],
    faqs: [
      {
        q: "How often does the lender pull my credit during the process?",
        a: "Typically twice: once at application and once just before closing. Some lenders also do a soft check mid-process. Any meaningful change between the two pulls (new accounts, new debts, big balance changes) can trigger a re-underwrite.",
      },
      {
        q: "Will checking my own credit hurt my score?",
        a: "No. Checking your own credit through a free service or from one of the bureaus directly is a soft inquiry and doesn't affect your score. The hard inquiries that ding your score are the ones triggered when a lender or credit issuer pulls your report for a new application.",
      },
      {
        q: "What credit score do I need to qualify for a mortgage in NC?",
        a: "Depends on the program. VA has no set minimum, with most lenders looking for 580-620. FHA usually starts at 580 (sometimes 500 with 10% down). Conventional generally requires 620, with best pricing at 740+. USDA typically needs 640. The right program for your credit is part of what we figure out together.",
      },
      {
        q: "Can I dispute items on my credit report during the loan process?",
        a: "Generally no. Active credit disputes can actually pause the loan because lenders can't proceed when an account is in dispute status. If you spot something inaccurate, talk to your loan officer first. Sometimes the right move is to address it after closing rather than during.",
      },
      {
        q: "How quickly can a credit issue be fixed?",
        a: "It depends on the issue. A late payment that's actually your fault stays on your report for seven years (though its impact fades). A late payment that's the creditor's error can sometimes be removed within 30-45 days through a goodwill letter or dispute. A rapid rescore (paid service) can update bureau records in 3-10 business days for time-sensitive corrections.",
      },
      {
        q: "What if my partner has bad credit and I have good credit?",
        a: "Multiple options. You can sometimes apply with only your income and credit (the property still goes in both names if you want). You can apply jointly and accept the impact on pricing. Or you can spend a few months working on the lower score before applying. Run the scenarios both ways before deciding.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getNonFeaturedArticles(): Article[] {
  return articles.filter((a) => !a.featured);
}

export function getRelatedArticles(
  slug: string,
  count = 3,
): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, count);

  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, count);
}
