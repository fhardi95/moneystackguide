import Link from "next/link";
import { categories } from "@/lib/articles";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-5 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-semibold">
            MoneyStack<span className="text-gold-light">Guide</span>
          </span>
          <p className="mt-3 text-sm text-paper/70 font-body max-w-xs">
            Practical, jargon-free money guidance: credit cards, side income,
            starting a business, and using AI to earn. No hype, just what
            actually works.
          </p>
        </div>
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-paper/60 mb-3">
            Guides
          </h3>
          <ul className="space-y-2 font-body text-sm text-paper/80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:text-gold-light transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-paper/60 mb-3">
            About
          </h3>
          <p className="text-sm text-paper/70 font-body">
            MoneyStackGuide publishes independent money guidance. We don&apos;t
            offer personalised financial advice, always do your own research
            before making financial decisions.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-5xl px-5 py-5 text-xs text-paper/50 font-body flex flex-wrap justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} MoneyStackGuide. All rights reserved.</span>
          <span>moneystackguide.com</span>
        </div>
      </div>
    </footer>
  );
}
