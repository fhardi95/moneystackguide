import styles from '../static-pages.module.css'

export const metadata = {
  title: 'Privacy Policy — Money Stack Guide',
  description: 'Money Stack Guide Privacy Policy. How we collect, use and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.',
  alternates: {
    canonical: 'https://moneystackguide.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          How we collect, use and protect your personal data.
        </p>
        <p className={styles.updated}>Last updated: 20 April 2026</p>
      </header>

      <div className={styles.body}>

        <h2>1. Who We Are</h2>
        <p>
          Money Stack Guide (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website moneystackguide.com. We are the data controller responsible for your personal data collected through this website.
        </p>
        <p>
          For any privacy-related enquiries, please contact us at privacy@moneystackguide.com.
        </p>

        <h2>2. What Data We Collect</h2>
        <p>We may collect the following categories of personal data:</p>

        <h3>Data you provide directly</h3>
        <ul>
          <li>Name and email address when you subscribe to our newsletter</li>
          <li>Name, email address and message content when you contact us via our contact form</li>
          <li>Any other information you choose to include in communications with us</li>
        </ul>

        <h3>Data collected automatically</h3>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Browser type, version and operating system</li>
          <li>Pages visited, time spent on pages and navigation path</li>
          <li>Referring website or search query that brought you to our site</li>
          <li>Device type and screen resolution</li>
        </ul>

        <h3>Cookies and tracking</h3>
        <p>
          We use cookies and similar tracking technologies. See Section 7 for full details of the cookies we use and how to control them.
        </p>

        <h2>3. How We Use Your Data</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul>
          <li><strong>Newsletter delivery:</strong> To send you our weekly email newsletter if you have subscribed. Legal basis: consent.</li>
          <li><strong>Responding to enquiries:</strong> To respond to messages sent via our contact form. Legal basis: legitimate interests.</li>
          <li><strong>Analytics:</strong> To understand how visitors use our website and improve our content. Legal basis: legitimate interests.</li>
          <li><strong>Advertising:</strong> To serve relevant advertisements and measure their effectiveness. Legal basis: consent.</li>
          <li><strong>Legal compliance:</strong> To comply with legal obligations where required. Legal basis: legal obligation.</li>
        </ul>

        <h2>4. How We Share Your Data</h2>
        <p>
          We do not sell your personal data to third parties. We may share your data with:
        </p>
        <ul>
          <li><strong>Email service providers</strong> who manage our newsletter distribution (e.g. Mailchimp). These providers process data on our behalf under data processing agreements.</li>
          <li><strong>Analytics providers</strong> such as Google Analytics to help us understand website usage. Data is anonymised where possible.</li>
          <li><strong>Advertising partners</strong> who serve ads on our website, subject to your cookie consent preferences.</li>
          <li><strong>Legal authorities</strong> if required to do so by law or in response to valid legal process.</li>
        </ul>

        <h2>5. Affiliate Links and Third-Party Websites</h2>
        <p>
          Our website contains affiliate links to third-party financial product providers. When you click these links, you will leave our website and the privacy policy of the destination website will apply. We are not responsible for the privacy practices of third-party websites.
        </p>
        <p>
          Affiliate partners may set their own cookies when you visit their sites through our links. We have no control over these cookies.
        </p>

        <h2>6. Data Retention</h2>
        <p>We retain personal data for the following periods:</p>
        <ul>
          <li><strong>Newsletter subscribers:</strong> Until you unsubscribe, after which we delete your data within 30 days</li>
          <li><strong>Contact form submissions:</strong> Up to 2 years from the date of submission</li>
          <li><strong>Analytics data:</strong> As determined by our analytics providers&apos; data retention settings (typically 14 to 26 months)</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>We use the following categories of cookies:</p>

        <div className={styles.card}>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>⚙️</span>
            <div>
              <div className={styles.infoTitle}>Strictly necessary cookies</div>
              <div className={styles.infoText}>Essential for the website to function. Cannot be disabled. No personal data is collected through these cookies.</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📊</span>
            <div>
              <div className={styles.infoTitle}>Analytics cookies</div>
              <div className={styles.infoText}>Help us understand how visitors interact with our website. Set by Google Analytics. You can opt out via your cookie preferences or at tools.google.com/dlpage/gaoptout.</div>
            </div>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>📣</span>
            <div>
              <div className={styles.infoTitle}>Advertising cookies</div>
              <div className={styles.infoText}>Used to serve relevant advertisements. Set by our advertising partners. Require your consent before being placed.</div>
            </div>
          </div>
        </div>

        <p>
          You can manage your cookie preferences at any time by adjusting your browser settings. Note that disabling certain cookies may affect the functionality of our website.
        </p>

        <h2>8. Your Rights Under UK GDPR</h2>
        <p>Under UK data protection law, you have the following rights:</p>
        <ul>
          <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Right to rectification:</strong> Request correction of inaccurate personal data</li>
          <li><strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances</li>
          <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data</li>
          <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at privacy@moneystackguide.com. We will respond within 30 days.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk if you believe we have mishandled your personal data.
        </p>

        <h2>9. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. Our website uses HTTPS encryption for all data transmission. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>10. International Data Transfers</h2>
        <p>
          Some of our service providers (including analytics and email platforms) may process data outside the UK. Where this occurs, we ensure appropriate safeguards are in place including Standard Contractual Clauses approved by the ICO.
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          Our website is not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will indicate the date of the most recent update at the top of this page. Continued use of our website after any changes constitutes your acceptance of the updated policy.
        </p>

        <h2>13. Contact</h2>
        <p>
          For any questions about this Privacy Policy or to exercise your data rights, please contact us at privacy@moneystackguide.com or via our <a href="/contact">contact page</a>.
        </p>

      </div>
    </div>
  )
}
