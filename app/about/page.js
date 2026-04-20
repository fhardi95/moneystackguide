import Link from 'next/link'
import styles from '../static-pages.module.css'

export const metadata = {
  title: 'About Us — Money Stack Guide',
  description: 'Money Stack Guide is an independent UK personal finance website helping 50,000+ readers make smarter decisions about credit cards, loans, investing, mortgages and savings.',
  alternates: {
    canonical: 'https://moneystackguide.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Who We Are</p>
        <h1 className={styles.title}>About Money Stack Guide</h1>
        <p className={styles.subtitle}>
          Independent, honest finance guides for real people in the UK — no jargon, no bank funding, no agenda.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.statCard}>
          <div className={styles.statNum}>50K+</div>
          <div className={styles.statLabel}>Monthly readers</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>46+</div>
          <div className={styles.statLabel}>Expert guides</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>2025</div>
          <div className={styles.statLabel}>Founded</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>100%</div>
          <div className={styles.statLabel}>Independent</div>
        </div>
      </div>

      <div className={styles.body}>
        <h2>Our Mission</h2>
        <p>
          Money Stack Guide exists to make UK personal finance simple, clear and actionable. The financial services industry is complex by design — full of jargon, fine print and products that benefit providers more than consumers. We cut through all of that.
        </p>
        <p>
          Every guide we publish is written with one goal: to give you the information you need to make a confident, well-informed financial decision. Whether you are choosing your first credit card, trying to understand your student loan, planning to invest, or buying your first home — we want to be the most useful resource you find.
        </p>

        <h2>What We Cover</h2>
        <p>
          We publish expert-reviewed guides across six core personal finance categories:
        </p>
        <ul>
          <li><strong>Credit Cards</strong> — cashback, balance transfers, rewards, travel and credit building</li>
          <li><strong>Student Loans</strong> — Plan 2, Plan 5, repayment calculators and student budgeting</li>
          <li><strong>Investing</strong> — ISAs, index funds, ETFs, SIPPs and robo-advisors</li>
          <li><strong>Mortgages</strong> — first-time buyers, remortgaging, buy-to-let and shared ownership</li>
          <li><strong>Budgeting</strong> — debt repayment, saving strategies and money management</li>
          <li><strong>Savings</strong> — high-interest accounts, fixed-rate bonds, LISAs and Premium Bonds</li>
        </ul>

        <h2>Our Editorial Standards</h2>
        <p>
          Every piece of content on Money Stack Guide is written and reviewed by people who understand UK personal finance. We follow these principles without exception:
        </p>

        <div className={styles.card}>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>🔍</span>
            <div>
              <div className={styles.infoTitle}>Research-first</div>
              <div className={styles.infoText}>Every guide is based on thorough research of current products, rates and regulations. We update content regularly to reflect market changes.</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>⚖️</span>
            <div>
              <div className={styles.infoTitle}>Editorially independent</div>
              <div className={styles.infoText}>Affiliate relationships never influence which products we recommend. If we receive commission for a product, we say so — but it does not affect our editorial verdict.</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>🎯</span>
            <div>
              <div className={styles.infoTitle}>Reader-focused</div>
              <div className={styles.infoText}>We write for ordinary people, not financial professionals. Plain language, real examples and practical recommendations — not academic theory.</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📅</span>
            <div>
              <div className={styles.infoTitle}>Regularly updated</div>
              <div className={styles.infoText}>Financial products, rates and regulations change constantly. We review and update our guides regularly so you always have accurate information.</div>
            </div>
          </div>
        </div>

        <h2>How We Make Money</h2>
        <p>
          Money Stack Guide is free to use and always will be. We fund the site through affiliate commissions — when you apply for a financial product through one of our links, we may receive a fee from the provider. This does not cost you anything extra and does not affect the products we recommend or the rates you receive.
        </p>
        <p>
          We also display advertising on some pages. We do not accept advertorial content or paid-for editorial placements. All recommendations are based solely on our independent assessment.
        </p>

        <h2>Contact and Feedback</h2>
        <p>
          We welcome feedback, corrections and suggestions. If you spot an error, have a question, or want to share your experience with a financial product we have covered, please get in touch via our <Link href="/contact">contact page</Link>.
        </p>
        <p>
          If you are a financial services company interested in advertising or partnership opportunities, visit our <Link href="/advertise">advertising page</Link> for more information.
        </p>

        <div className={styles.card} style={{ marginTop: '2rem' }}>
          <p className={styles.cardTitle}>Disclaimer</p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            The content on Money Stack Guide is for informational purposes only and does not constitute financial advice. Always read the full terms and conditions of any financial product before applying. Your personal circumstances will affect which products are suitable for you. If you need personalised financial advice, please consult a qualified independent financial adviser.
          </p>
        </div>
      </div>
    </div>
  )
}
