import Link from "next/link";
import type { Metadata } from "next";
import { articles, categories } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "MoneyStackGuide — Credit Cards, Side Income & Business Guides",
  description:
    "Independent, jargon-free money guidance: credit cards, making money, starting a business, and earning with AI. Practical guides, no hype.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const latest = [...articles].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Money, explained plainly
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[1.1] max-w-2xl">
            Build your money, one honest guide at a time.
          </h1>
          <p className="mt-6 font-body text-lg text-slate-soft max-w-xl leading-relaxed">
            Real guidance on credit cards, side income, starting a business, and
            making money with AI. No hype, no filler, just what actually
            works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="font-body text-sm font-medium px-4 py-2 border border-line bg-white rounded-sm hover:border-primary hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Latest guides
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="bg-primary text-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 grid md:grid-cols-3 gap-8">
          {categories.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="group">
              <h3 className="font-display text-xl font-semibold group-hover:text-gold-light transition-colors">
                {c.name}
              </h3>
              <p className="mt-2 font-body text-sm text-paper/75 leading-relaxed">
                {c.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
