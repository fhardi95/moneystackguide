import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Make Money Guides — Realistic Side Income Ideas",
  description:
    "Realistic ways to earn extra income: side hustles, freelancing, digital products, and passive income ideas, with honest income estimates.",
  alternates: { canonical: "/make-money-online" },
};

export default function MakeMoneyPage() {
  const items = getArticlesByCategory("make-money-online");
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        Guides
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
        Make Money
      </h1>
      <p className="font-body text-slate-soft max-w-xl mb-10 leading-relaxed">
        Realistic ways to earn extra income, from quick side hustles to
        longer-term passive income ideas, with honest estimates of what they
        actually pay.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
