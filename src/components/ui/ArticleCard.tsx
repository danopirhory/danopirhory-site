import Link from "next/link";
import { cn } from "@/lib/utils";

export type Article = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  readTime: string;
  category?: string;
};

/**
 * Blog / insights post card. Used on the `/resources` index grid.
 * `<InsightsPreview>` on the homepage keeps its own inline layout to stay
 * optimized for the 3-up homepage preview - intentional divergence.
 */
export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <article className={cn("group border-t border-line pt-6", className)}>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted">
        {article.category && (
          <>
            <span className="text-ink/70">{article.category}</span>
            <span aria-hidden="true">·</span>
          </>
        )}
        <time>{article.date}</time>
        <span aria-hidden="true">·</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug text-ink">
        <Link
          href={article.href}
          className="underline-offset-4 decoration-ink/30 hover:underline"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-ink/70 leading-relaxed">
        {article.excerpt}
      </p>
      <Link
        href={article.href}
        className="mt-5 inline-block text-sm text-ink/60 hover:text-ink"
      >
        Read article →
      </Link>
    </article>
  );
}
