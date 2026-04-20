'use client'

import { useState } from 'react'
import styles from '../static-pages.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Get in Touch</p>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Have a question, spotted an error, or want to share feedback? We read every message and aim to respond within two business days.
        </p>
      </header>

      <div className={styles.body}>

        {/* Contact methods */}
        <div className={styles.card}>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>✉️</span>
            <div>
              <div className={styles.infoTitle}>General enquiries</div>
              <div className={styles.infoText}>Questions about our content, corrections, or feedback — use the form below or email hello@moneystackguide.com</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📰</span>
            <div>
              <div className={styles.infoTitle}>Press and media</div>
              <div className={styles.infoText}>Journalist enquiries, expert commentary requests or media partnerships — press@moneystackguide.com</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📣</span>
            <div>
              <div className={styles.infoTitle}>Advertising and partnerships</div>
              <div className={styles.infoText}>Commercial enquiries — see our <a href="/advertise">advertising page</a> for full details and packages</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>⚠️</span>
            <div>
              <div className={styles.infoTitle}>Report an error</div>
              <div className={styles.infoText}>Spotted inaccurate information? Please let us know — we take factual accuracy seriously and will investigate promptly</div>
            </div>
          </div>
        </div>

        <h2>Send Us a Message</h2>

        {submitted ? (
          <div className={styles.successBox}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
            <strong>Message received — thank you!</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '14px', opacity: 0.8 }}>
              We aim to respond within two business days. Check your spam folder if you do not hear back.
            </p>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit} aria-label="Contact form">
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">Your name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                className={styles.formSelect}
                value={form.subject}
                onChange={handleChange}
              >
                <option value="">Select a subject...</option>
                <option value="general">General question</option>
                <option value="error">Report an error</option>
                <option value="feedback">Content feedback</option>
                <option value="press">Press and media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message →
            </button>

            <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '0.5rem' }}>
              We will never share your details with third parties. See our <a href="/privacy-policy" style={{ color: 'var(--gold)' }}>Privacy Policy</a>.
            </p>
          </form>
        )}

        <div className={styles.card} style={{ marginTop: '2rem' }}>
          <p className={styles.cardTitle}>Response times</p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            We aim to respond to all enquiries within two business days. During busy periods it may take slightly longer. We do not provide personal financial advice — for tailored guidance please consult a qualified independent financial adviser regulated by the FCA.
          </p>
        </div>
      </div>
    </div>
  )
}
