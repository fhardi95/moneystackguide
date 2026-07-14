import Link from "next/link";
import { categories } from "@/lib/articles";

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl font-semibold text-ink tracking-tight">
              MoneyStack<span className="text-gold">Guide</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 font-body text-sm text-ink/80">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="flex md:hidden gap-4 overflow-x-auto pb-3 font-body text-sm text-ink/80">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="whitespace-nowrap hover:text-primary transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
