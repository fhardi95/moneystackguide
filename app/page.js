import Link from 'next/link'
import { getFeaturedArticles, getRecentArticles, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import styles from './page.module.css'

export const metadata = {
  title: 'Money Stack Guide — UK Personal Finance Guides 2026',
  description: 'UK Credit Cards, ISAs, Mortgages & Savings Accounts Compared – Best Rates, Expert Reviews & Money-Saving Tips (2026)',
  alternates: {
    canonical: 'https://www.moneystackguide.com',
  },
  openGraph: {
    title: 'Money Stack Guide — UK Personal Finance Guides 2026',
    description: 'Compare the best credit cards, student loans, ISAs, mortgages and savings accounts in the UK. Trusted by 50,000+ readers.',
    url: 'https://www.moneystackguide.com',
    type: 'website',
  },
}

export default function HomePage() {
  const featured = getFeaturedArticles()
  const recent = getRecentArticles(6)

  return (
    <>
      {/* HERO */}
      <section className={styles.hero} aria-label="Site introduction">
        <div className={styles.heroBadge}>
          <span className={styles.dot} aria-hidden="true" />
          Trusted by 50,000+ UK readers
        </div>

        {/* H1 — most important on-page heading */}
        <h1 className={styles.heroTitle}>
          The UK&apos;s Smartest Guide to{' '}
          <em>Building Your Money Stack</em>
        </h1>

        <p className={styles.heroSub}>
          Expert-reviewed guides on credit cards, student loans, investing, mortgages and savings — so you can make confident financial decisions and keep more of your money.
        </p>

        <nav className={styles.heroCtas} aria-label="Quick navigation">
          <Link href="/category/credit-cards" className="btn-primary">Browse All Guides</Link>
          <Link href="/article/best-credit-cards-uk-2025" className="btn-outline">Best Credit Cards 2025 →</Link>
        </nav>
      </section>

      {/* STATS */}
      <div className={styles.statsBar} role="list" aria-label="Site statistics">
        {[
          { num: '200+', label: 'Finance Guides' },
          { num: '£2.4M', label: 'Saved by Readers' },
          { num: '4.9★', label: 'Trust Score' },
          { num: 'Weekly', label: 'Updated Picks' },
        ].map(s => (
          <div key={s.label} className={styles.stat} role="listitem">
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURED GUIDES */}
      <div className="container">
        <section className="section" aria-labelledby="featured-heading">
          <p className="section-label">Editor&apos;s Picks</p>
          <h2 className="section-title" id="featured-heading">Featured Money Guides</h2>
          <div className={styles.featuredGrid}>
            {featured.map(article => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="categories-heading">
          <p className="section-label">Browse by Topic</p>
          <h2 className="section-title" id="categories-heading">All Finance Categories</h2>
          <nav aria-label="Finance categories">
            <ul className={styles.catGrid} style={{ listStyle: 'none' }}>
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className={styles.catCard}>
                    <span className={styles.catIcon} aria-hidden="true">{cat.icon}</span>
                    <span className={styles.catName}>{cat.name}</span>
                    <span className={styles.catCount}>{cat.count} guides</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* RECENT ARTICLES */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="latest-heading">
          <p className="section-label">Latest</p>
          <h2 className="section-title" id="latest-heading">Popular Money Guides</h2>
          <div className={styles.articlesGrid}>
            {recent.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/category/credit-cards" className="btn-outline">View All Articles →</Link>
          </div>
        </section>

        {/* INTERNAL LINKS SECTION — helps bots reach all pages */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="topics-heading">
          <p className="section-label">Quick Links</p>
          <h2 className="section-title" id="topics-heading">Explore by Topic</h2>
          <div className={styles.topicLinks}>
            {categories.map(cat => (
              <div key={cat.slug} className={styles.topicGroup}>
                <h3 className={styles.topicGroupTitle}>
                  <Link href={`/category/${cat.slug}`}>{cat.icon} {cat.name}</Link>
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Newsletter />
    </>
  )
}
