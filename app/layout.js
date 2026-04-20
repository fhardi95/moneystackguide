import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.moneystackguide.com'),
  
  verification: {
    google: 'i9I3gKlXjvyvejYRC9Ch-9k7Ywfu76GczNV2IAwMOd0',
  },
  
  title: {
    default: 'Money Stack Guide — Smart Finance for Real Life',
    template: '%s',
  },
  description: 'Expert guides on credit cards, student loans, investing, mortgages and budgeting. Make smarter money decisions with Money Stack Guide — trusted by 50,000+ UK readers.',
  keywords: ['credit cards UK', 'student loans UK', 'investing UK', 'mortgages UK', 'budgeting tips', 'savings accounts UK', 'personal finance UK'],
  authors: [{ name: 'Money Stack Guide', url: 'https://www.moneystackguide.com' }],
  creator: 'Money Stack Guide',
  publisher: 'Money Stack Guide',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.moneystackguide.com',
    siteName: 'Money Stack Guide',
    title: 'Money Stack Guide — Smart Finance for Real Life',
    description: 'Expert guides on credit cards, student loans, investing, mortgages and budgeting. Trusted by 50,000+ UK readers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Stack Guide — Smart Finance for Real Life',
    description: 'Expert guides on credit cards, student loans, investing, mortgages and budgeting.',
    site: '@moneystackguide',
  },
  alternates: {
    canonical: 'https://www.moneystackguide.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Money Stack Guide',
              url: 'https://www.moneystackguide.com',
              description: 'Expert finance guides for UK readers',
              publisher: {
                '@type': 'Organization',
                name: 'Money Stack Guide',
                url: 'https://www.moneystackguide.com',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.moneystackguide.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link" style={{
          position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'
        }}>
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
