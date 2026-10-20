import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articles } from "@/lib/articles";

export function InsightsPreview() {
  // Three most recent posts. Featured is fine to include, it's just a
  // preview on the homepage, not the resources index.
  const posts = articles.slice(0, 3);

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <Eyebrow>Insights</Eyebrow>
          <Heading level={2} className="mt-4">
            Notes from the closing table.
          </Heading>
        </div>
        <Link
          href="/resources"
          className="text-sm text-ink/70 underline underline-offset-4 hover:text-ink"
        >
          All articles →
        </Link>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="border-t border-line pt-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
              <time>{post.date}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="mt-4 font-display text-xl leading-snug text-ink">
              <Link
                href={`/resources/${post.slug}`}
                className="underline-offset-4 hover:underline decoration-ink/30"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              href={`/resources/${post.slug}`}
              className="mt-5 inline-block text-sm text-ink/60 hover:text-ink"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
