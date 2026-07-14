import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import contentMap from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `https://moneystackguide.com/blog/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      type: "article",
      publishedTime: article.dateISO,
      modifiedTime: article.updatedISO,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const html = contentMap[article.contentFile];
  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    datePublished: article.dateISO,
    dateModified: article.updatedISO,
    author: {
      "@type": "Organization",
      name: "MoneyStackGuide",
    },
    publisher: {
      "@type": "Organization",
      name: "MoneyStackGuide",
      url: "https://moneystackguide.com",
    },
    mainEntityOfPage: `https://moneystackguide.com/blog/${article.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://moneystackguide.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `https://moneystackguide.com/${article.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.h1,
        item: `https://moneystackguide.com/blog/${article.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="font-body text-xs text-slate-soft mb-6 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href={`/${article.categorySlug}`} className="hover:text-primary">
          {article.category}
        </Link>
      </nav>

      <span className="inline-block font-body text-xs font-semibold uppercase tracking-wide text-gold mb-3">
        {article.category}
      </span>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
        {article.h1}
      </h1>
      <div className="mt-4 flex items-center gap-3 font-body text-sm text-slate-soft">
        <span>{article.readTime}</span>
        <span aria-hidden="true">&middot;</span>
        <span>
          Updated{" "}
          {new Date(article.updatedISO).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <div
        className="prose-article mt-10"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-16 pt-10 border-t border-line">
        <h2 className="font-display text-xl font-semibold text-ink mb-6">
          Read next
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block border border-line bg-white rounded-sm p-5 hover:border-primary transition-colors"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-wide text-gold">
                {a.category}
              </span>
              <h3 className="font-display text-base font-semibold text-ink mt-2 leading-snug">
                {a.h1}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
