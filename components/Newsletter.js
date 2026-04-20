'use client'

import { useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className={styles.section} id="newsletter" aria-labelledby="newsletter-heading">
      <div className={styles.box}>
        <div className={styles.badge} aria-hidden="true">📬 Weekly Newsletter</div>

        <h2 className={styles.title} id="newsletter-heading">
          Get the Weekly Money Stack
        </h2>

        <p className={styles.sub}>
          Best deals, new guides and money-saving tips delivered every Monday. Free, no spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <div className={styles.success} role="alert">
            ✅ You&apos;re in! Check your inbox for a confirmation email.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              autoComplete="email"
            />
            <button type="submit" className={styles.btn}>
              Subscribe Free
            </button>
          </form>
        )}

        <p className={styles.disclaimer}>
          50,000+ UK readers trust Money Stack Guide. We never sell your data.
        </p>
      </div>
    </section>
  )
}
