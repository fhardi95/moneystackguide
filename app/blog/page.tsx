import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "All Guides",
  description:
    "Every guide on MoneyStackGuide: credit cards, making money, starting a business, and earning with AI.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-2">
        All guides
      </h1>
      <p className="font-body text-slate-soft mb-10">
        Every guide we&apos;ve published, newest first.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {sorted.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
