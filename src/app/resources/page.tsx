import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import {
  articles,
  getFeaturedArticle,
  getNonFeaturedArticles,
} from "@/lib/articles";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Clear, strategic writing on mortgages, home buying, and real estate investing, from a loan officer who'd rather educate than sell.",
  path: "/resources",
});

const categories = [
  "All",
  ...Array.from(new Set(articles.map((a) => a.category))),
];

export default function ResourcesPage() {
  const featured = getFeaturedArticle();
  const posts = getNonFeaturedArticles();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
        eyebrow="Insights"
        title="Notes from the closing table."
        lead="Clear, strategic writing on mortgages, buying in North Carolina, and the decisions that quietly shape your long-term financial picture."
      />

      <Section className="pt-0">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/Consult with MLO.png"
            alt="Image placeholder"
            width={1200}
            height={900}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <ul
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((c, i) => (
            <li key={c}>
              <button
                type="button"
                aria-pressed={i === 0}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  i === 0
                    ? "border-ink bg-ink text-cream"
                    : "border-line bg-paper text-ink/75 hover:border-ink/40"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <Eyebrow>Featured</Eyebrow>
          <Link
            href={`/resources/${featured.slug}`}
            className="group mt-6 block border-t border-line pt-10"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
                <Badge variant="outline">{featured.category}</Badge>
                <time>{featured.date}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl leading-tight text-ink underline-offset-4 decoration-ink/30 group-hover:underline md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-block text-sm text-ink/60 group-hover:text-ink">
                Read featured article →
              </span>
            </div>
          </Link>
        </div>
      </Section>

      <Section className="bg-paper">
        <Eyebrow>All articles</Eyebrow>
        <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              article={{
                title: post.title,
                excerpt: post.excerpt,
                href: `/resources/${post.slug}`,
                date: post.date,
                readTime: post.readTime,
                category: post.category,
              }}
            />
          ))}
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
