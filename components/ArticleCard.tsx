import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-white border border-line rounded-sm p-6 shadow-stack hover:-translate-y-1 hover:shadow-none transition-all duration-200"
    >
      <span className="inline-block font-body text-xs font-semibold uppercase tracking-wide text-gold mb-3">
        {article.category}
      </span>
      <h3 className="font-display text-xl font-semibold text-ink leading-snug group-hover:text-primary transition-colors">
        {article.h1}
      </h3>
      <p className="mt-3 font-body text-sm text-slate-soft leading-relaxed">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-3 font-body text-xs text-slate-soft/80">
        <span>{article.readTime}</span>
        <span aria-hidden="true">&middot;</span>
        <span>Updated {new Date(article.updatedISO).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
      </div>
    </Link>
  );
}
