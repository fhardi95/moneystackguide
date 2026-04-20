import Link from 'next/link'
import styles from '../static-pages.module.css'

export const metadata = {
  title: 'Advertise With Us — Money Stack Guide',
  description: 'Reach 50,000+ UK personal finance readers every month. Advertising and partnership opportunities with Money Stack Guide — display ads, sponsored content and affiliate programmes.',
  alternates: {
    canonical: 'https://moneystackguide.com/advertise',
  },
}

export default function AdvertisePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Work With Us</p>
        <h1 className={styles.title}>Advertise on Money Stack Guide</h1>
        <p className={styles.subtitle}>
          Reach an engaged audience of UK readers actively researching personal finance decisions — credit cards, mortgages, investments and more.
        </p>
      </header>

      <div className={styles.body}>

        <div className={styles.grid}>
          <div className={styles.statCard}>
            <div className={styles.statNum}>50K+</div>
            <div className={styles.statLabel}>Monthly readers</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>4.2 min</div>
            <div className={styles.statLabel}>Avg. time on page</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>78%</div>
            <div className={styles.statLabel}>UK audience</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>High</div>
            <div className={styles.statLabel}>Purchase intent</div>
          </div>
        </div>

        <h2>Our Audience</h2>
        <p>
          Money Stack Guide readers are actively looking to make financial decisions — comparing credit cards, researching mortgages, choosing investment platforms or finding the best savings rates. This is a high-intent audience at the point of purchase consideration.
        </p>

        <div className={styles.card}>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>👥</span>
            <div>
              <div className={styles.infoTitle}>Demographics</div>
              <div className={styles.infoText}>25 to 45 year old UK adults, mix of professionals and first-time buyers, high disposable income, actively managing personal finances</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>🔍</span>
            <div>
              <div className={styles.infoTitle}>Traffic sources</div>
              <div className={styles.infoText}>Primarily organic search from high-intent queries — &quot;best credit cards UK&quot;, &quot;student loan repayment&quot;, &quot;how to invest&quot; and similar commercial and informational terms</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📱</span>
            <div>
              <div className={styles.infoTitle}>Device split</div>
              <div className={styles.infoText}>55% mobile, 35% desktop, 10% tablet — all pages are fully responsive and optimised across devices</div>
            </div>
          </div>
        </div>

        <h2>Advertising Packages</h2>

        <div className={styles.adPackageGrid}>
          <div className={styles.adPackage}>
            <div className={styles.adPackageName}>Display Ads</div>
            <div className={styles.adPackagePrice}>CPM pricing</div>
            <ul className={styles.adPackageFeatures}>
              <li>Banner placements site-wide</li>
              <li>Category page targeting</li>
              <li>Mobile and desktop formats</li>
              <li>Monthly reporting</li>
            </ul>
          </div>

          <div className={styles.adPackage} style={{ borderColor: 'var(--gold)' }}>
            <div className={styles.adPackageName}>Sponsored Content</div>
            <div className={styles.adPackagePrice}>Per article</div>
            <ul className={styles.adPackageFeatures}>
              <li>Clearly labelled sponsored</li>
              <li>Written by our editorial team</li>
              <li>Permanent placement</li>
              <li>SEO benefits included</li>
              <li>Social promotion</li>
            </ul>
          </div>

          <div className={styles.adPackage}>
            <div className={styles.adPackageName}>Affiliate Programme</div>
            <div className={styles.adPackagePrice}>CPA pricing</div>
            <ul className={styles.adPackageFeatures}>
              <li>Pay per approved application</li>
              <li>Deep links in relevant guides</li>
              <li>Performance tracking</li>
              <li>Monthly payouts</li>
            </ul>
          </div>
        </div>

        <h2>Our Editorial Policy on Advertising</h2>
        <p>
          We maintain a strict separation between commercial relationships and editorial content. Paid placements are always clearly labelled. We do not accept payment to change editorial recommendations, alter review scores or suppress negative information about any product or provider.
        </p>
        <p>
          We will not advertise products that we believe are harmful to consumers — including high-cost short-term credit, unregulated investments or products from providers with poor customer outcomes records.
        </p>

        <h2>Get In Touch</h2>
        <p>
          For advertising enquiries, rate cards and a media pack, please contact our commercial team. We typically respond within one business day.
        </p>

        <div className={styles.card}>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>✉️</span>
            <div>
              <div className={styles.infoTitle}>Commercial enquiries</div>
              <div className={styles.infoText}>advertise@moneystackguide.com — please include your company name, product category and estimated monthly budget</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📞</span>
            <div>
              <div className={styles.infoTitle}>Prefer a call?</div>
              <div className={styles.infoText}>Use the <Link href="/contact" style={{ color: 'var(--gold)' }}>contact form</Link> to request a callback and we will arrange a convenient time</div>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ marginTop: '1.5rem' }}>
          <p className={styles.cardTitle}>Disclaimer</p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            Money Stack Guide is an independent publication. All advertising relationships are clearly disclosed to readers. Advertising does not influence editorial coverage, product recommendations or review outcomes. We comply with ASA and CAP guidelines on advertising disclosure.
          </p>
        </div>
      </div>
    </div>
  )
}
