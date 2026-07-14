export type Category =
  | "Credit Cards"
  | "Make Money"
  | "Start a Business"
  | "AI & Money";

export interface Article {
  slug: string;
  category: Category;
  categorySlug: string;
  seoTitle: string; // <title> tag, 50-60 chars
  metaDescription: string; // 150-160 chars
  h1: string; // on-page headline (can differ slightly from seoTitle)
  excerpt: string; // used on cards / listing pages
  dateISO: string;
  updatedISO: string;
  readTime: string;
  contentFile: string; // key into lib/content
}

export const categories: { name: Category; slug: string; blurb: string }[] = [
  {
    name: "Credit Cards",
    slug: "credit-cards",
    blurb: "Honest, jargon-free guides to choosing, using, and getting more from credit cards.",
  },
  {
    name: "Make Money",
    slug: "make-money-online",
    blurb: "Realistic ways to earn extra income, from side hustles to passive income ideas.",
  },
  {
    name: "Start a Business",
    slug: "start-a-business",
    blurb: "Step-by-step guides for launching a business on a small budget.",
  },
  {
    name: "AI & Money",
    slug: "ai-money",
    blurb: "How to actually use AI tools to earn, save, and build income streams.",
  },
];

export const articles: Article[] = [
  {
    slug: "credit-cards-for-bad-credit-uk",
    category: "Credit Cards",
    categorySlug: "credit-cards",
    seoTitle: "Credit Cards for Bad Credit UK 2026: Best Options to Rebuild Fast",
    metaDescription:
      "Struggling with bad credit? Compare the best UK credit cards for bad credit in 2026, learn how they work, and follow our 5-step plan to rebuild your credit score fast.",
    h1: "Credit Cards for Bad Credit in the UK: How to Rebuild Your Score in 2026",
    excerpt:
      "A practical guide to credit builder cards, how they work, what they really cost, and the fastest legitimate way to repair a damaged credit score.",
    dateISO: "2026-07-01",
    updatedISO: "2026-07-01",
    readTime: "9 min read",
    contentFile: "credit-cards-for-bad-credit-uk",
  },
  {
    slug: "ways-to-make-extra-money-from-home",
    category: "Make Money",
    categorySlug: "make-money-online",
    seoTitle: "35 Realistic Ways to Make Extra Money From Home in 2026",
    metaDescription:
      "Skip the hype. These 35 ways to make extra money from home in 2026 are things real people actually earn from, with honest income estimates and how to start each one.",
    h1: "35 Realistic Ways to Make Extra Money From Home in 2026",
    excerpt:
      "No get-rich-quick nonsense. A categorised, honest list of side hustles you can realistically start this month, with what they actually pay.",
    dateISO: "2026-07-05",
    updatedISO: "2026-07-05",
    readTime: "11 min read",
    contentFile: "ways-to-make-extra-money-from-home",
  },
  {
    slug: "how-to-start-a-business-with-no-money",
    category: "Start a Business",
    categorySlug: "start-a-business",
    seoTitle: "How to Start a Business With No Money: 2026 Step-by-Step Guide",
    metaDescription:
      "You don't need savings to start a business. This step-by-step guide shows exactly how to launch with £0 to £100, validate an idea, and get your first paying customer.",
    h1: "How to Start a Business With No Money: A Step-by-Step Guide",
    excerpt:
      "A practical, no-fluff roadmap for launching a real business on a near-zero budget, from picking an idea to landing your first customer.",
    dateISO: "2026-07-08",
    updatedISO: "2026-07-08",
    readTime: "10 min read",
    contentFile: "how-to-start-a-business-with-no-money",
  },
  {
    slug: "how-to-make-money-with-ai",
    category: "AI & Money",
    categorySlug: "ai-money",
    seoTitle: "How to Make Money With AI in 2026: 14 Real Methods That Work",
    metaDescription:
      "From AI-assisted freelancing to selling AI-made digital products, here are 14 genuine ways to make money with AI in 2026, including tools, income potential, and getting started.",
    h1: "How to Make Money With AI in 2026: 14 Methods That Actually Work",
    excerpt:
      "Cut through the AI hustle-bro noise. Here's what actually generates income with AI tools right now, and how to get started with each one this week.",
    dateISO: "2026-07-12",
    updatedISO: "2026-07-12",
    readTime: "12 min read",
    contentFile: "how-to-make-money-with-ai",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((a) => a.categorySlug === categorySlug);
}
