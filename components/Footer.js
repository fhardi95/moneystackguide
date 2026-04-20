import Link from 'next/link'
import { articles, categories } from '@/lib/articles'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Group articles by category for footer links
  const creditCards = articles.filter(a => a.category === 'credit-cards').slice(0, 3)
  const investing = articles.filter(a => a.category === 'investing').slice(0, 3)
  const mortgages = articles.filter(a => a.category === 'mortgages').slice(0, 3)
  const savings = articles.filter(a => a.category === 'savings').slice(0, 3)

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Money Stack Guide home">
              Money<span>Stack</span>Guide
            </Link>
            <p className={styles.tagline}>
              Smart finance guides for real life. Helping UK readers make better money decisions since 2025.
            </p>
          </div>

          {/* Navigation columns — internal links for SEO */}
          <nav className={styles.nav} aria-label="Footer navigation">

            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>Categories</h3>
              {categories.map(cat => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className={styles.navLink}>
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>

            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>Credit Cards</h3>
              {creditCards.map(a => (
                <Link key={a.slug} href={`/article/${a.slug}`} className={styles.navLink}>
                  {a.title.split('—')[0].trim()}
                </Link>
              ))}
              <Link href="/category/credit-cards" className={styles.navLinkMore}>All credit card guides →</Link>
            </div>

            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>Investing</h3>
              {investing.map(a => (
                <Link key={a.slug} href={`/article/${a.slug}`} className={styles.navLink}>
                  {a.title.split('—')[0].trim()}
                </Link>
              ))}
              <Link href="/category/investing" className={styles.navLinkMore}>All investing guides →</Link>
            </div>

            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>Company</h3>
              <Link href="/" className={styles.navLink}>About Us</Link>
              <Link href="/" className={styles.navLink}>Contact</Link>
              <Link href="/" className={styles.navLink}>Advertise</Link>
              <Link href="/" className={styles.navLink}>Privacy Policy</Link>
              <Link href="/" className={styles.navLink}>Terms of Service</Link>
              <Link href="/sitemap.xml" className={styles.navLink}>Sitemap</Link>
            </div>

          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            © {currentYear} moneystackguide.com — All rights reserved.
          </div>
          <div className={styles.disclaimer}>
            Money Stack Guide is an independent comparison and information website. We may receive commission when you apply for financial products through our links. This does not affect our editorial independence or the integrity of our reviews. Content is for informational purposes only and does not constitute financial advice. Always read full terms before applying for any financial product. Your home may be repossessed if you do not keep up repayments on a mortgage. Credit is subject to status and eligibility.
          </div>
        </div>
      </div>
    </footer>
  )
}
