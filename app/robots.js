export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.moneystackguide.com/sitemap.xml',
    sitemap: 'https://www.moneystackguide.com/sitemap_.xml',
    host: 'https://www.moneystackguide.com',
  }
}
