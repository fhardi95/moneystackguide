import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticlesByCategory, categories, articles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import styles from './page.module.css'

export async function generateStaticParams() {
  return categories.map(cat => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }) {
  const category = categories.find(c => c.slug === params.slug)
  if (!category) return { title: 'Not Found' }

  const title = `Best ${category.name} UK 2025 — Expert Guides & Comparisons`
  const description = `Compare the best ${category.name.toLowerCase()} options in the UK for 2025. Expert-reviewed guides, tips and comparisons to help you find the right ${category.name.toLowerCase()} product for your needs and save money.`

  return {
    title,
    description,
    keywords: [
      `best ${category.name.toLowerCase()} UK`,
      `${category.name.toLowerCase()} 2025`,
      `${category.name.toLowerCase()} comparison`,
      'UK personal finance',
      'Money Stack Guide',
    ],
    alternates: {
      canonical: `https://moneystackguide.com/category/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://moneystackguide.com/category/${params.slug}`,
      type: 'website',
      siteName: 'Money Stack Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function CategoryPage({ params }) {
  const category = categories.find(c => c.slug === params.slug)
  if (!category) notFound()

  const categoryArticles = getArticlesByCategory(params.slug)
  const otherCategories = categories.filter(c => c.slug !== params.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://moneystackguide.com' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://moneystackguide.com/category/${params.slug}` },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Guides — Money Stack Guide`,
    description: `Expert ${category.name.toLowerCase()} guides for UK readers`,
    url: `https://moneystackguide.com/category/${params.slug}`,
    breadcrumb: breadcrumbSchema,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* CATEGORY HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true"> › </li>
              <li aria-current="page">{category.name}</li>
            </ol>
          </nav>

          <div className={styles.icon} aria-hidden="true">{category.icon}</div>
          <p className={styles.headerLabel}>Category</p>

          {/* H1 — primary page heading with keyword */}
          <h1 className={styles.headerTitle}>
            Best {category.name} UK 2025
          </h1>

          <p className={styles.headerSub}>
            Expert-reviewed {category.name.toLowerCase()} guides, comparisons and advice for UK readers — all updated regularly so you always get the most accurate information.
          </p>

          <div className={styles.headerMeta}>
            <span>{category.count} guides</span>
            <span>·</span>
            <span>Updated April 2025</span>
            <span>·</span>
            <span>✅ Expert reviewed</span>
          </div>
        </div>
      </header>

      <div className="container">

        {/* ARTICLES */}
        <section className="section" aria-labelledby="articles-heading">
          {categoryArticles.length > 0 ? (
            <>
              <p className="section-label">All Guides</p>
              <h2 className="section-title" id="articles-heading">
                {category.name} Articles &amp; Comparisons
              </h2>
              <div className={styles.grid}>
                {categoryArticles.map(article => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon} aria-hidden="true">{category.icon}</div>
              <h2>More {category.name} guides coming soon</h2>
              <p>We are working on expert-reviewed {category.name.toLowerCase()} content. Subscribe to our newsletter to be notified when new guides go live.</p>
              <Link href="/" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Browse All Guides
              </Link>
            </div>
          )}
        </section>

        {/* INTERNAL LINKS — other categories for bot crawlability */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="other-cats-heading">
          <p className="section-label">Explore More</p>
          <h2 className="section-title" id="other-cats-heading">Other Finance Categories</h2>
          <nav aria-label="Other finance categories">
            <ul className={styles.catGrid} style={{ listStyle: 'none', padding: 0 }}>
              {otherCategories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className={styles.catCard}>
                    <span className={styles.catIcon} aria-hidden="true">{cat.icon}</span>
                    <div>
                      <div className={styles.catName}>{cat.name}</div>
                      <div className={styles.catCount}>{cat.count} guides</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* QUICK LINKS — all article titles in this category for bots */}
        {categoryArticles.length > 0 && (
          <section className="section" style={{ paddingTop: 0 }} aria-labelledby="quicklinks-heading">
            <p className="section-label">Quick Links</p>
            <h2 className="section-title" id="quicklinks-heading">All {category.name} Guides</h2>
            <ul className={styles.quickLinks}>
              {categoryArticles.map(article => (
                <li key={article.slug}>
                  <Link href={`/article/${article.slug}`} className={styles.quickLink}>
                    <span aria-hidden="true">{article.icon}</span>
                    <span>{article.title}</span>
                    <span className={styles.quickLinkMeta}>{article.readTime}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>

      <Newsletter />
    </>
  )
}
