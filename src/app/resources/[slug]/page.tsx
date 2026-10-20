import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Accordion } from "@/components/ui/Accordion";
import { ComplianceNotice } from "@/components/ui/ComplianceNotice";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { articleSchema, faqPageSchema, jsonLd } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.metaDescription ?? article.excerpt,
    path: `/resources/${article.slug}`,
    ogType: "article",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/resources" },
    { label: article.title },
  ];

  return (
    <>
      {/* Article schema. Breadcrumb schema is auto-injected by <PageHero />. */}
      <script {...jsonLd(articleSchema(article))} />
      {article.faqs && article.faqs.length > 0 && (
        <script {...jsonLd(faqPageSchema(article.faqs))} />
      )}

      <PageHero
        breadcrumbs={crumbs}
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
      >
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
          <Badge variant="outline">{article.category}</Badge>
          <time>{article.date}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          {article.lastUpdated && (
            <>
              <span aria-hidden="true">·</span>
              <span>Updated {article.lastUpdated}</span>
            </>
          )}
        </div>
      </PageHero>

      <Section>
        <article className="mx-auto max-w-2xl">
          <div className="text-ink/80 leading-relaxed">
            {article.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-12 mb-4 font-display text-2xl md:text-3xl text-ink leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 font-display text-xl text-ink leading-snug"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="mt-5 space-y-2 pl-6 list-disc text-lg leading-relaxed marker:text-ink/40"
                  >
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                const tone = block.tone ?? "info";
                return (
                  <aside
                    key={i}
                    className={
                      "mt-6 rounded-md border px-5 py-4 text-base leading-relaxed " +
                      (tone === "warn"
                        ? "border-ink/30 bg-cream text-ink/85"
                        : "border-line bg-paper text-ink/80")
                    }
                  >
                    {block.text}
                  </aside>
                );
              }
              return (
                <p key={i} className="mt-5 text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug">
                Frequently asked questions
              </h2>
              <Accordion items={article.faqs} className="mt-8" />
            </div>
          )}

          <ComplianceNotice className="mt-14" />

          <div className="mt-16 border-t border-line pt-8 text-sm text-muted">
            <Link
              href="/resources"
              className="hover:text-ink"
            >
              ← All articles
            </Link>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section className="bg-paper">
          <Eyebrow>Keep reading</Eyebrow>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {related.map((post) => (
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
      )}

      <ContactCTAStrip />
    </>
  );
}
