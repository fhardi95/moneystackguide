import { articles, categories } from '@/lib/articles'

export default function sitemap() {
  const baseUrl = 'https://moneystackguide.com'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const categoryPages = categories.map(cat => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const articlePages = articles.map(article => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...articlePages]
}
