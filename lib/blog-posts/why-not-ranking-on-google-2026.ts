import type { ContentBlock } from "./types"

const notRankingContent: ContentBlock[] = [
  {
    type: "p",
    text: "In March 2026, Google completed its most volatile core update ever. Nearly 80% of top-3 search positions changed hands during the rollout.",
  },
  {
    type: "p",
    text: "If your traffic dropped recently — or your rankings look fine but clicks are falling — this guide is for you.",
  },
  {
    type: "p",
    text: "AI Overviews now appear on ~50% of US searches, cutting organic CTR by up to 61%. The reasons businesses fail to rank in 2026 are specific and fixable. At Linkedo Agency, this is the work we do every day.",
  },
  {
    type: "image",
    src: "/blog/why-not-ranking-on-google-2026/seo-algorithm-volatility.webp",
    alt: "Digital marketing team analyzing fluctuating SEO graphs and Google algorithm updates",
    title: "SEO Volatility During Google Algorithm Updates",
    caption: "A marketing team reviewing unstable rankings and traffic fluctuations caused by algorithm changes.",
  },

  { type: "h2", text: "1. What Google Changed in 2025–2026" },
  {
    type: "p",
    text: "Google ran three major core updates in 2025 — March, June, and December — plus a spam update in August. The March 2026 Core Update was the most disruptive on record: 79.5% of top-3 URLs shifted positions.",
  },
  {
    type: "p",
    text: "And 24% of pages ranking in the top 10 dropped out of the top 100 entirely (Search Engine Land).",
  },
  {
    type: "p",
    text: "The pattern is consistent across every update: Google rewards genuine expertise, real authority, and helpful content. Sites with thin content or outdated SEO tactics are the ones losing ground.",
  },
  { type: "source", text: "Reference: developers.google.com/search/docs/appearance/core-updates" },

  {
    type: "image",
    src: "/blog/why-not-ranking-on-google-2026/building-seo-authority-trust.webp",
    alt: "Digital marketing expert presenting SEO strategy with trust signals and backlink growth charts",
    title: "Building SEO Authority and Trust Strategy",
    caption: "An expert marketer explaining SEO strategy focused on authority, trust, and content quality.",
  },

  { type: "h2", text: "2. AI Overviews & AI Mode Are Stealing Your Traffic" },
  {
    type: "p",
    text: "Even if your rankings have not dropped, your traffic might still be falling. AI Overviews appear on ~50% of US searches and reduce click-through rates by 34–61%.",
  },
  {
    type: "p",
    text: "This is the \"great decoupling\" — rankings stay steady while traffic quietly disappears. Google AI Mode goes further: 75M daily users, 1B+ queries/month.",
  },
  { type: "p", text: "Only 14% of URLs cited in AI Mode rank in the traditional top 10 (Semrush)." },
  { type: "p", text: "Businesses cited in AI Overviews earn 35% more organic clicks than non-cited competitors." },
  {
    type: "p",
    text: "To get cited: use Q&A format, strong E-E-A-T, structured data (FAQPage, Article), and fresh content.",
  },

  {
    type: "image",
    src: "/blog/why-not-ranking-on-google-2026/seo-problem-diagnosis.webp",
    alt: "Woman analyzing SEO issues like indexing, backlinks, and Core Web Vitals on laptop",
    title: "SEO Problem Analysis and Website Optimization",
    caption: "A marketer reviewing multiple SEO issues affecting website performance.",
  },

  { type: "h2", text: "3. Seven Reasons Your Business Is Not Ranking in 2026" },

  { type: "h3", text: "1. Your Site Is Not Indexed" },
  {
    type: "p",
    text: "If Google cannot find and crawl your pages, nothing else matters. Check with site:yourdomain.com and Google Search Console URL Inspection.",
  },
  { type: "p", text: "Common causes: robots.txt blocks, noindex tags, broken XML sitemaps." },

  { type: "h3", text: "2. Thin or Generic Content" },
  {
    type: "p",
    text: "After March 2026, Google is far better at detecting content that adds no real value. If your pages are short and generic, they will not rank — regardless of keyword usage.",
  },
  { type: "p", text: "Google's key question for every page: does this genuinely help the person searching?" },

  { type: "h3", text: "3. No E-E-A-T Signals" },
  { type: "p", text: "E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness." },
  {
    type: "p",
    text: "Missing author bios, no credentials, and an anonymous About page all send weak trust signals. Add named authors, real credentials, and visible proof of expertise across your site.",
  },

  { type: "h3", text: "4. Failing Core Web Vitals" },
  {
    type: "p",
    text: "LCP under 2.5s, INP under 200ms, CLS under 0.1 — these are confirmed ranking signals.",
  },
  {
    type: "p",
    text: "Pages failing these benchmarks, especially on mobile, face a direct ranking disadvantage. Check your scores free at Google PageSpeed Insights.",
  },

  { type: "h3", text: "5. Wrong Search Intent" },
  {
    type: "p",
    text: "You can target the right keyword but the completely wrong format. Search your keyword and look at what Google already ranks — guides, service pages, or comparisons?",
  },
  {
    type: "p",
    text: "Match that format. A service page rarely beats an informational guide on an informational query.",
  },

  { type: "h3", text: "6. Weak or Toxic Backlinks" },
  {
    type: "p",
    text: "The #1 result has on average 3.8x more backlinks than positions 2–10 (Backlinko).",
  },
  { type: "p", text: "In 2026, quality and topical relevance matter far more than volume." },
  { type: "p", text: "Audit your profile with a tool such as Ahrefs Webmaster Tools." },

  { type: "h3", text: "7. Neglected Google Business Profile" },
  { type: "p", text: "GBP signals drive 32% of local pack rankings." },
  {
    type: "p",
    text: "Wrong primary category, no photos, zero reviews — all hurt your local visibility. Treat your GBP like a second website. For local search, it effectively is one.",
  },

  {
    type: "image",
    src: "/blog/why-not-ranking-on-google-2026/seo-action-plan-checklist.webp",
    alt: "Marketer working on laptop with 8-step SEO checklist and performance growth indicators",
    title: "Complete SEO Action Plan for Website Growth",
    caption: "A structured SEO checklist showing progress toward improved rankings and traffic.",
  },

  { type: "h2", text: "4. How to Fix It Fast: 8-Step Action Plan" },
  {
    type: "ul",
    items: [
      "Indexing check. Use GSC URL Inspection and site:yourdomain.com. Fix crawl errors before anything else.",
      "Fix Core Web Vitals. Run PageSpeed Insights on key pages. Focus on LCP and INP on mobile.",
      "On-page SEO basics. Every key page needs a keyword-focused title tag, one H1, and a clean heading structure.",
      "Strengthen E-E-A-T. Add author bios, credentials, and an updated About page. Make your expertise visible.",
      "Match search intent. Search your keywords and align your page format to what Google already rewards.",
      "Build quality backlinks. Disavow toxic links. Earn contextual links through original content and genuine outreach.",
      "Optimise your GBP. Set the correct primary category. Keep NAP consistent everywhere. Build a review habit.",
      "Add schema markup. Implement LocalBusiness, FAQPage, and Article schema on relevant pages.",
    ],
  },

  { type: "h2", text: "5. Hit by the March 2026 Core Update? Here's What to Do" },
  { type: "p", text: "First, confirm the cause. Compare GSC data for March 15–26 vs. April 1–12." },
  {
    type: "p",
    text: "A clear drop aligned with March 27 means the update is likely responsible. Do not delete affected pages — that removes the authority they have already built.",
  },
  {
    type: "p",
    text: "Instead, audit them for E-E-A-T gaps, thin content, and intent mismatch. Improve properly — not a surface refresh, but a real content upgrade.",
  },
  {
    type: "p",
    text: "Recovery may not show until the next core update. Consistent improvement is the strategy. If you are unsure where to start, Linkedo Agency offers independent SEO audits to find what is holding you back.",
  },

  { type: "h2", text: "6. SEO Is Not Dead — But Your Old Strategy Might Be" },
  {
    type: "p",
    text: "Google still holds ~90% of global search market share. Organic traffic still converts better than almost any other channel.",
  },
  { type: "p", text: "SEO is not dead — the quality bar has simply risen." },
  {
    type: "p",
    text: "In 2026, the winning strategy runs on two tracks: traditional SEO and Generative Engine Optimisation (GEO). GEO means structuring content so AI tools — Overviews, ChatGPT, Perplexity — trust it enough to cite.",
  },
  {
    type: "p",
    text: "The fundamentals of both are largely the same: expertise, trust, and genuinely useful content. At Linkedo Agency, we combine technical SEO, content strategy, E-E-A-T, and GEO into one plan.",
  },

  { type: "h2", text: "Frequently Asked Questions" },
  { type: "h3", text: "Why is my business not ranking even though I have a website?" },
  {
    type: "p",
    text: "A website alone does not earn rankings. Google needs to index it, find trustworthy content, and see enough authority to rank it above competitors. Indexing errors, thin content, missing backlinks, and weak trust signals are the most common blockers.",
  },
  { type: "h3", text: "How long does it take to rank on Google in 2026?" },
  {
    type: "p",
    text: "Most businesses see early movement in 3–6 months on less competitive keywords. Competitive terms typically take 6–12 months of consistent effort. Only 5.7% of new pages reach the top 10 within their first year — consistency matters most.",
  },
  { type: "h3", text: "Are AI Overviews hurting my organic traffic?" },
  {
    type: "p",
    text: "For many businesses, yes — CTR drops significantly when an AI Overview appears. But businesses cited inside AI Overviews earn 35% more clicks than non-cited competitors. Optimise to be cited, not just ranked.",
  },
  { type: "h3", text: "Why is my Google Business Profile not showing on Maps?" },
  {
    type: "p",
    text: "Most common causes: incorrect primary category, inconsistent NAP, and too few reviews. Fix the primary category first — it is the single highest-weighted local ranking factor. Then ensure your name, address, and phone number are identical everywhere online.",
  },

  {
    type: "image",
    src: "/blog/why-not-ranking-on-google-2026/seo-growth-success.webp",
    alt: "Business owner and marketing expert reviewing growth charts showing improved SEO performance",
    title: "SEO Growth and Business Success Strategy",
    caption: "A business owner collaborating with an expert to achieve strong SEO growth and results.",
  },

  { type: "h2", text: "Conclusion" },
  { type: "p", text: "Ranking on Google in 2026 is harder because the quality bar has genuinely risen." },
  {
    type: "p",
    text: "The seven reasons in this guide — indexing, content, E-E-A-T, Core Web Vitals, intent, backlinks, GBP — are all fixable.",
  },
  {
    type: "p",
    text: "The businesses winning in 2026 stopped gaming Google and started genuinely serving their searchers.",
  },
  {
    type: "p",
    text: "That shift — from algorithm tricks to earning real trust — is what separates growing brands from the rest.",
  },
]

export const notRankingPost = {
  slug: "why-not-ranking-on-google-2026",
  title: "Why Your Business Is Not Ranking on Google in 2026 (And How to Fix It Fast)",
  excerpt:
    "Google's most volatile core update ever reshuffled 80% of top-3 rankings. Here are the seven specific, fixable reasons businesses lose visibility in 2026 — and an 8-step action plan to recover.",
  category: "SEO",
  date: "2026-10-10",
  readTime: "9 min read",
  image: "/blog/why-not-ranking-on-google-2026/hero.webp",
  author: {
    name: "Junaid Mazhar",
    role: "SEO Director",
    avatar: "/blog/what-is-ai-seo/junaid-mazhar.png",
  },
  content: notRankingContent,
}
