import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "AI & Money Guides — Real Ways to Earn With AI Tools",
  description:
    "How to actually use AI tools to earn, save, and build income streams, with honest breakdowns of what works and what doesn't.",
  alternates: { canonical: "/ai-money" },
};

export default function AiMoneyPage() {
  const items = getArticlesByCategory("ai-money");
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        Guides
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
        AI &amp; Money
      </h1>
      <p className="font-body text-slate-soft max-w-xl mb-10 leading-relaxed">
        How to actually use AI tools to earn, save time, and build income
        streams, with honest breakdowns of what genuinely works right now.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
