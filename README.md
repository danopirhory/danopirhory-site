# danopirhory.com

SEO-focused marketing site for a North Carolina mortgage loan officer, with a
focus on VA loans for military families near Fort Liberty, Camp Lejeune,
Cherry Point and Seymour Johnson AFB. Live at danopirhory.com.

Built by Dan Opirhory with AI-assisted development (Claude). This is a
portfolio copy: credentials, analytics IDs and private configuration have
been removed, and the git history starts fresh. Contact details, license
numbers, employer branding, client reviews and photos of people are
placeholders.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (CSS-first config), Framer Motion
- `next/font` for self-hosted Inter + Fraunces
- Resend for the contact form, deployed on Vercel

## What's in it

- **Loan program pages** (VA, FHA, conventional, DSCR and more) driven by typed
  content in `src/lib/loanPrograms.ts`
- **City and military-base landing pages** (`src/lib/locations.ts`,
  `src/lib/military-bases.ts`) plus long-form VA guides and county loan-limit pages
- **Resources / articles** rendered from `src/lib/articles.ts` via `resources/[slug]`
- **Structured data**: WebSite, LocalBusiness and Person JSON-LD linked by `@id`
  (`src/lib/schema.ts`), plus sitemap, robots, manifest and generated OG images
- **Live reviews**: server-side fetch and parse of a public reviews page with
  24-hour ISR revalidation and a typed fallback snapshot (`src/lib/fetchReviews.ts`;
  set `REVIEWS_SOURCE_URL` to enable the live fetch)
- **Contact API** (`src/app/api/contact/route.ts`) with validation and Resend delivery
- **IndexNow script** (`scripts/indexnow.mjs`) to push new URLs to search engines
- Analytics tags (GA4, Ahrefs, Meta Pixel) that render only when configured

## Project layout

```
src/
  app/          routes (App Router), API route, sitemap/robots/manifest
  components/   layout, sections, forms, templates, motion, ui
  lib/          site config, content data, schema, SEO helpers, reviews
scripts/        IndexNow submitter
```

Brand, contact details and disclosures live in `src/lib/site.ts`; navigation
in `src/lib/nav.ts`.

## Local development

```bash
npm install
cp .env.example .env.local   # all values optional for local dev
npm run dev
```

Open http://localhost:3000.

```bash
npm run build      # production build
npm run lint       # ESLint
npm run indexnow   # submit sitemap URLs (needs INDEXNOW_KEY)
```
