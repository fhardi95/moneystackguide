export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://moneystackguide.com/sitemap.xml',
    host: 'https://moneystackguide.com',
  }
}
