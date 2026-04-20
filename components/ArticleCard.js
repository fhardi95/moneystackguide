import Link from 'next/link'
import styles from './ArticleCard.module.css'

export default function ArticleCard({ article, featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <Link href={`/article/${article.slug}`} className={styles.link} aria-label={`Read: ${article.title}`}>
        <div className={styles.imgWrap} style={{ background: article.gradient }}>
          <span className={styles.icon} aria-hidden="true">{article.icon}</span>
          <span className={styles.pill}>{article.categoryName}</span>
        </div>
        <div className={styles.body}>
          <p className={styles.cat}>{article.categoryName}</p>
          <h3 className={styles.title}>{article.title}</h3>
          {featured && <p className={styles.excerpt}>{article.excerpt}</p>}
          <div className={styles.meta}>
            <time dateTime={article.date}>{article.date}</time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          {featured && <span className={styles.readMore} aria-hidden="true">Read the full guide →</span>}
        </div>
      </Link>
    </article>
  )
}
