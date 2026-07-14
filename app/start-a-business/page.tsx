import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Start a Business Guides — Step-by-Step, Low-Budget",
  description:
    "Step-by-step guides for launching a business on a small budget: validating ideas, finding your first customer, and growing without debt.",
  alternates: { canonical: "/start-a-business" },
};

export default function StartABusinessPage() {
  const items = getArticlesByCategory("start-a-business");
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        Guides
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
        Start a Business
      </h1>
      <p className="font-body text-slate-soft max-w-xl mb-10 leading-relaxed">
        Step-by-step guides for launching a real business on a small budget,
        from validating your idea to landing your first paying customer.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
