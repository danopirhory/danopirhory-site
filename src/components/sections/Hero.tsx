import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { site } from "@/lib/site";
import { REVIEWS_SOURCE_URL } from "@/lib/reviews";
import { getReviews } from "@/lib/fetchReviews";

/**
 * Cinematic dark hero. Centered composition: pill eyebrow,
 * Fraunces-serif headline, supporting copy, two pill CTAs, slim
 * trust row, then verified-reviews marquee below.
 *
 * No portrait/lifestyle image inside the hero on this revision - the
 * dark SaaS look reads strongest type-led against a subtle grid
 * backdrop. The fixed-position cutout (`<FixedCutout />` in the root
 * layout) still appears on mobile and on non-home pages.
 */
export async function Hero() {
  const reviews = await getReviews();

  return (
    <section
      data-hero="home"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden lg:min-h-[calc(100svh-4.5rem)]"
    >
      {/* Faint technical grid, feathered via radial mask so it dissolves
          to the page background near the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50"
      />
      {/* Soft champagne glow anchored top-center, very subtle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl"
      />

      <Container className="relative z-10 py-12 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left column - copy / CTAs / trust row */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <Image
                src="/images/logo-horizontal.png"
                alt="Example Mortgage Company logo"
                width={1600}
                height={200}
                priority
                sizes="(min-width: 1024px) 260px, 200px"
                className="mx-auto h-auto w-[200px] lg:mx-0 lg:w-[260px]"
              />
            </FadeIn>

            <FadeIn delay={0.03}>
              <Eyebrow className="mt-6">
                Army Veteran · North Carolina Mortgage Lender
              </Eyebrow>
            </FadeIn>

            <FadeIn delay={0.05}>
              <Heading
                level={1}
                className="mt-5 text-balance text-[2rem] leading-[1.05] md:text-6xl lg:text-7xl"
              >
                Mortgage lending with veteran discipline and investor
                strategy.
              </Heading>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty md:text-lg lg:mx-0">
                Whether you&apos;re buying your first home with a VA loan,
                structuring an investment deal, or financing a luxury
                property in North Carolina (or in SC, TX, TN, or GA),
                you get a disciplined process, sharp numbers, and a
                strategy built around where you&apos;re going, not just
                where you are.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10 lg:justify-start">
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
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted lg:mt-12 lg:justify-start">
                <span>Army Veteran</span>
                <span aria-hidden="true" className="text-line">·</span>
                <span className="text-accent">★★★★★ 5.0</span>
                <span aria-hidden="true" className="text-line">·</span>
                <span>{site.nmlsId}</span>
                <span aria-hidden="true" className="text-line">·</span>
                <span>NC · SC · TX · TN · GA</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                <SocialLink
                  href={site.socials.linkedin}
                  label="LinkedIn"
                  path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
                <SocialLink
                  href={site.socials.facebook}
                  label="Facebook"
                  path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
                <SocialLink
                  href={site.socials.instagram}
                  label="Instagram"
                  path="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right column - featured photo, transparent PNG with only
              a soft champagne glow behind it (no glass frame). */}
          <FadeIn delay={0.1} className="hidden lg:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 bg-accent/[0.06] blur-3xl"
              />
              <Image
                src="/images/Hero.png"
                alt="Portrait placeholder"
                width={2048}
                height={2048}
                priority
                quality={95}
                sizes="(min-width: 1024px) 56vw, 0px"
                className="relative h-auto w-full origin-right scale-[1.35] object-contain"
              />
            </div>
          </FadeIn>
        </div>

        {/* Verified reviews band - slimmer label, marquee below. */}
        <FadeIn delay={0.3}>
          <div className="mt-20 lg:mt-24">
            <div className="flex flex-wrap items-end justify-between gap-3 px-1">
              <Eyebrow>Client reviews</Eyebrow>
              <a
                href={REVIEWS_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.18em] text-ink-soft underline underline-offset-4 decoration-line hover:text-accent hover:decoration-accent"
              >
                See more ↗
              </a>
            </div>
            <div className="mt-6">
              <ReviewCarousel reviews={reviews} />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  path,
}: {
  href: string;
  label: string;
  path: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line/80 text-ink-soft transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </a>
  );
}
