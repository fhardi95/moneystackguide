import Link from 'next/link'
import { categories } from '@/lib/articles'

export const metadata = {
  title: 'Page Not Found — Money Stack Guide',
  description: 'The page you are looking for does not exist. Browse our finance guides.',
}

export default function NotFound() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '6rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💸</div>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '2.5rem',
        color: '#fff',
        marginBottom: '1rem',
      }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
        The page you are looking for does not exist or has been moved. Browse our finance guides below.
      </p>

      <Link href="/" className="btn-primary" style={{ marginBottom: '3rem', display: 'inline-block' }}>
        Back to Home
      </Link>

      <nav aria-label="Browse categories">
        <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Browse by Category
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                fontSize: '13px',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
