import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getRecentArticles, getArticlesByCategory, categories, articles } from '@/lib/articles'
import Newsletter from '@/components/Newsletter'
import ArticleCard from '@/components/ArticleCard'
import ArticleContent from '@/components/ArticleContent'
import styles from './page.module.css'

export async function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Not Found' }

  const title = `${article.title}`
  const description = article.metaDescription

  return {
    title,
    description,
    keywords: [
      article.categoryName,
      'UK personal finance',
      article.title.split(' ').slice(0, 4).join(' '),
      'Money Stack Guide',
    ],
    alternates: {
      canonical: `https://moneystackguide.com/article/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://moneystackguide.com/article/${slug}`,
      type: 'article',
      publishedTime: article.date,
      section: article.categoryName,
      siteName: 'Money Stack Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getArticlesByCategory(article.category)
    .filter(a => a.slug !== slug)
    .slice(0, 3)

  const allRecent = getRecentArticles(3).filter(a => a.slug !== slug)
  const relatedArticles = related.length > 0 ? related : allRecent

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Money Stack Guide',
      url: 'https://moneystackguide.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Money Stack Guide',
      url: 'https://moneystackguide.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://moneystackguide.com/article/${slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://moneystackguide.com' },
      { '@type': 'ListItem', position: 2, name: article.categoryName, item: `https://moneystackguide.com/category/${article.category}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://moneystackguide.com/article/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className={styles.page}>
        <div className={styles.heroWrap} style={{ background: article.gradient }} role="banner">
          <span className={styles.heroIcon} aria-hidden="true">{article.icon}</span>
        </div>

        <div className={styles.layout}>
          <article className={styles.article} itemScope itemType="https://schema.org/Article">

            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <ol className={styles.breadcrumbList}>
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true"> › </li>
                <li><Link href={`/category/${article.category}`}>{article.categoryName}</Link></li>
                <li aria-hidden="true"> › </li>
                <li aria-current="page">{article.categoryName} Guide</li>
              </ol>
            </nav>

            <p className={styles.catBadge}>{article.categoryName}</p>

            <h1 className={styles.title} itemProp="headline">{article.title}</h1>

            <div className={styles.meta}>
              <time dateTime={article.date} itemProp="datePublished">📅 {article.date}</time>
              <span>⏱ {article.readTime}</span>
              <span>✅ Expert reviewed</span>
            </div>

            <p className={styles.lead} itemProp="description">{article.excerpt}</p>

            <div className={styles.divider} aria-hidden="true" />

            <ArticleContent content={article.content} />

            <div className={styles.internalLinks}>
              <h2 className={styles.internalLinksTitle}>More {article.categoryName} Guides</h2>
              <ul className={styles.internalLinksList}>
                {getArticlesByCategory(article.category)
                  .filter(a => a.slug !== slug)
                  .slice(0, 5)
                  .map(a => (
                    <li key={a.slug}>
                      <Link href={`/article/${a.slug}`} className={styles.internalLink}>
                        {a.icon} {a.title}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href={`/category/${article.category}`} className={styles.internalLinkAll}>
                    View all {article.categoryName} guides →
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.disclaimer}>
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial advice. Always check the latest rates and terms directly with providers. Your personal circumstances will affect which products are suitable for you. Money Stack Guide may receive commission when you apply for products via our links.
            </div>
          </article>

          <aside className={styles.sidebar} aria-label="Sidebar navigation">
            <nav className={styles.sideCard} aria-label="Browse categories">
              <h2 className={styles.sideCardTitle}>Browse Categories</h2>
              <ul style={{ listStyle: 'none' }}>
                {categories.map(cat => (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className={`${styles.sideLink} ${cat.slug === article.category ? styles.sideLinkActive : ''}`}
                    >
                      <span aria-hidden="true">{cat.icon}</span>
                      <span>{cat.name}</span>
                      <span className={styles.sideLinkCount}>{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.sideCard}>
              <h2 className={styles.sideCardTitle}>Popular Guides</h2>
              <ul style={{ listStyle: 'none' }}>
                {getRecentArticles(5).filter(a => a.slug !== slug).slice(0, 4).map(a => (
                  <li key={a.slug} style={{ marginBottom: '0.75rem' }}>
                    <Link href={`/article/${a.slug}`} className={styles.popularLink}>
                      <span style={{ fontSize: '1rem' }}>{a.icon}</span>
                      <span>{a.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>💡 Quick Tip</h3>
              <p className={styles.sideCardText}>
                Always use a soft eligibility checker before applying for any credit product — it will not affect your credit score.
              </p>
            </div>
          </aside>
        </div>

        <div className="container">
          <section className="section" aria-labelledby="related-heading">
            <p className="section-label">Keep Reading</p>
            <h2 className="section-title" id="related-heading">Related {article.categoryName} Guides</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        </div>

        <Newsletter />
      </div>
    </>
  )
}
