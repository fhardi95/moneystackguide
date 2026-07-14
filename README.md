# MoneyStackGuide

A Next.js 14 (App Router) financial blog for **moneystackguide.com**, covering credit cards, making money, starting a business, and making money with AI. Built for fast Google indexing: static generation, per-article SEO metadata, JSON-LD structured data, sitemap.xml, and robots.txt.

## What's included

- **4 complete, published-ready articles** (1,200+ words each), one per category, each with:
  - A unique, keyword-targeted SEO title (`<title>` tag)
  - A unique meta description (150-160 characters)
  - Semantic H2/H3 structure, tables, and an FAQ section (good for featured snippets)
  - `Article` + `BreadcrumbList` JSON-LD schema
- **4 category hub pages** (`/credit-cards`, `/make-money-online`, `/start-a-business`, `/ai-money`)
- **Homepage** and **/blog** index page
- **Auto-generated `sitemap.xml` and `robots.txt`** (`app/sitemap.ts`, `app/robots.ts`)
- A distinct visual identity: deep green + gold palette, serif/sans pairing, "stacked card" motif tying back to the "stack" in the name

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploying (Vercel)

```bash
npm run build   # sanity check before pushing
```

Push to GitHub, connect the repo to Vercel, and point moneystackguide.com at it in your project's Domains settings.

## How to add a new article

1. Add a metadata entry to `lib/articles.ts`: slug, category, `seoTitle`, `metaDescription`, `h1`, `excerpt`, dates, `readTime`, and a `contentFile` key.
2. Create `lib/content/<contentFile>.ts` exporting an HTML string (see existing files for the pattern).
3. Register it in `lib/content/index.ts`.
4. Done - the article page, its listing card, its category page, and the sitemap all update automatically.

## SEO checklist already handled

- Unique title + meta description per page
- Canonical URLs everywhere
- Semantic heading hierarchy
- Fast static generation (no client-side fetch delays for crawlers)
- Article schema with datePublished/dateModified
- Internal linking between articles and from category pages
- Mobile-responsive by default

## Content strategy: getting "easy traffic"

Broad head terms like "best credit cards" or "how to make money" are dominated by huge, aged sites (MSE, NerdWallet, Forbes). A brand-new domain won't rank for those quickly. The realistic path to early traffic is long-tail, specific, high-intent titles, lower volume individually, but far less competition.

The 4 included articles were scoped this way on purpose. Next ~20 articles to prioritize:

### Credit Cards
- 0% purchase credit cards explained: how they work and when to switch
- Balance transfer cards UK: how to actually pay off debt faster
- Credit card vs charge card: what's the real difference
- How credit utilisation affects your score (with real examples)
- Student credit cards UK: what to look for

### Make Money
- How to make money on Vinted: a beginner's complete guide
- Best cashback apps UK compared (2026)
- How much can you realistically earn dog walking
- Freelance writing rates: what beginners should actually charge
- How to make money renting out your driveway or parking space

### Start a Business
- How to register as a sole trader in the UK: step-by-step
- How to validate a business idea before spending anything
- Sole trader vs limited company: which is right for you
- How to price your service when you have no experience
- Free tools every new business owner should use in year one

### AI & Money
- Best AI tools for freelancers in 2026 (tested)
- How to build a simple AI-powered tool with no coding experience
- AI content policy: what Google actually penalizes vs allows
- How to use AI for a small business without it feeling generic
- Can you make money selling AI art? An honest answer

Publish 2-3 articles a week in the early months. Consistency and depth within these 4 categories will do more for rankings than breadth across unrelated topics.
