import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Credit Card Guides — Compare, Build & Use Cards Wisely",
  description:
    "Honest, jargon-free credit card guides: building credit, choosing the right card, avoiding fees, and using credit responsibly.",
  alternates: { canonical: "/credit-cards" },
};

export default function CreditCardsPage() {
  const items = getArticlesByCategory("credit-cards");
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        Guides
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
        Credit Cards
      </h1>
      <p className="font-body text-slate-soft max-w-xl mb-10 leading-relaxed">
        Honest, jargon-free guides to choosing, using, and getting more from
        credit cards, whether you&apos;re building credit from scratch or trying
        to avoid unnecessary fees.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
