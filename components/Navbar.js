'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Credit Cards', slug: 'credit-cards' },
  { label: 'Student Loans', slug: 'student-loans' },
  { label: 'Investing', slug: 'investing' },
  { label: 'Mortgages', slug: 'mortgages' },
  { label: 'Budgeting', slug: 'budgeting' },
  { label: 'Savings', slug: 'savings' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Money Stack Guide home">
          Money<span>Stack</span>Guide
        </Link>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {navItems.map(item => {
            const isActive = pathname === `/category/${item.slug}`
            return (
              <Link
                key={item.slug}
                href={`/category/${item.slug}`}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={() => setOpen(false)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/#newsletter" className={styles.cta} onClick={() => setOpen(false)}>
            Free Newsletter
          </Link>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>
    </nav>
  )
}
