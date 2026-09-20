import type { ContentBlock } from "./types"

const aiSeoContent: ContentBlock[] = [
  { type: "h2", text: "Introduction" },
  {
    type: "p",
    text: "People now use Google and AI tools such as ChatGPT, Gemini, Perplexity, and Copilot to find answers and businesses.",
  },
  {
    type: "p",
    text: "So, what is AI SEO? It means making your website easy for search engines and AI tools to find, understand, and trust. This may help it appear in generated answers and normal search results.",
  },
  {
    type: "p",
    text: "It builds on normal SEO foundations, including useful content, a fast website, clear business details, and trusted backlinks.",
  },
  {
    type: "p",
    text: "This guide explains how AI SEO works and what your UK small business can do to improve its visibility.",
  },

  { type: "h2", text: "What Is AI SEO" },
  {
    type: "p",
    text: "AI SEO means improving your website so AI-powered search tools can find, understand, and use its information.",
  },
  {
    type: "p",
    text: "Google AI Overviews, ChatGPT, Gemini, Perplexity, and Copilot may combine information from several websites into one answer. They may also show links or mention useful businesses.",
  },
  { type: "p", text: "For example, imagine you run a plumbing company in Manchester. A person might ask:" },
  { type: "p", text: "“Who can repair a leaking boiler near me on Sunday?”" },
  {
    type: "p",
    text: "Clear services, opening hours, locations, reviews, and helpful answers make the business easier to understand.",
  },
  {
    type: "p",
    text: "Google says its normal SEO guidance still applies to AI search features. No special method guarantees inclusion in AI Overviews or AI Mode.",
  },
  {
    type: "p",
    text: "AI SEO simply adds more focus to clear answers, reliable information, real experience, and consistent business details.",
  },
  { type: "source", text: "Source: Google Search Central – AI features and your website" },

  { type: "h2", text: "Why AI SEO Matters in 2026" },
  { type: "p", text: "People can now ask detailed questions in Google or an AI tool and receive a direct answer." },
  { type: "p", text: "For example, someone may search:" },
  { type: "p", text: "“Which emergency electrician in Bristol is open on Sunday and serves my area?”" },
  {
    type: "p",
    text: "An AI tool may compare service pages, profiles, reviews, and directories before mentioning a business or linking to it.",
  },
  { type: "p", text: "A small business may therefore appear as a source, link, local result, or brand mention." },
  {
    type: "p",
    text: "Visibility is not guaranteed. Results vary by user, location, question, and available information. AI SEO aims to make your business clear, useful, and trustworthy.",
  },
  { type: "source", text: "Source: Google AI Overviews" },

  { type: "h2", text: "How AI Search Works" },
  { type: "p", text: "AI search first tries to understand the topic, location, and need behind a question." },
  {
    type: "p",
    text: "It may break a detailed question into smaller searches. This is called query fan-out. A mobile tyre query might trigger searches about location, hours, reviews, and availability.",
  },
  {
    type: "p",
    text: "It then finds possible sources, such as websites, business profiles, product listings, and reviews.",
  },
  {
    type: "p",
    text: "It compares the information and produces an answer that may include links, citations, products, places, or businesses.",
  },
  { type: "p", text: "Different platforms use different systems:" },
  {
    type: "ul",
    items: [
      "Google AI Overviews and AI Mode use Google's search systems and web index.",
      "ChatGPT search can search the web and show links to supporting sources.",
      "Gemini can use Google's services and search information.",
      "Perplexity normally provides numbered citations with its answers.",
      "Copilot can use Bing search results to support some responses.",
    ],
  },
  { type: "p", text: "Sources and answers can change with the prompt, location, available data, and time." },
  { type: "source", text: "Sources: Google AI features guidance and OpenAI introduction to ChatGPT search" },

  { type: "h2", text: "AI SEO vs Traditional SEO" },
  {
    type: "p",
    text: "Traditional SEO targets normal search results. AI SEO also targets generated answers, citations, and brand mentions.",
  },
  {
    type: "p",
    text: "Both need crawlable pages, useful content, relevant links, good performance, and trusted information.",
  },
  { type: "p", text: "The main difference is where the content may appear and how it may be used." },
  {
    type: "table",
    headers: ["Area", "Traditional SEO", "AI SEO"],
    rows: [
      ["Main goal", "Appear in search results", "Appear in AI-generated answers"],
      ["Content focus", "Keywords and search intent", "Questions, answers, context, and evidence"],
      ["Possible result", "Ranking and website click", "Citation, mention, recommendation, or click"],
      ["Important signals", "Relevance, quality, links, and usability", "The same foundations, plus clear and well-supported answers"],
      ["Measurement", "Rankings, clicks, leads, and sales", "Citations, mentions, referral visits, leads, and sales"],
    ],
  },
  { type: "p", text: "A page still needs strong SEO foundations to compete for AI visibility." },
  { type: "p", text: "Google confirms that its usual SEO guidance applies to AI Overviews and AI Mode." },
  { type: "source", text: "Source: Google guide to optimising for generative AI search" },

  { type: "h2", text: "What GEO, AEO, and LLMO Mean" },
  { type: "p", text: "You may see several terms used when people discuss AI SEO:" },
  {
    type: "ul",
    items: [
      "GEO means Generative Engine Optimisation. It aims to improve how often content appears or gets cited in AI-generated answers.",
      "AEO means Answer Engine Optimisation. It focuses on giving clear, direct answers to common questions.",
      "LLMO means Large Language Model Optimisation. It aims to help tools such as ChatGPT understand and mention a business, brand, or website.",
    ],
  },
  {
    type: "p",
    text: "The work overlaps. All three may involve useful content, clear headings, direct answers, evidence, and accurate business details.",
  },
  { type: "p", text: "These terms are not fully standardised and do not describe separate ranking systems." },
  { type: "p", text: "Small businesses should focus on strong SEO and accurate, easy-to-understand content." },
  { type: "source", text: "Source: GEO – Generative Engine Optimization research paper" },

  { type: "h2", text: "How AI Systems Choose Sources" },
  {
    type: "p",
    text: "AI systems do not publish a complete source-selection formula. Still, several qualities can make content easier to find and trust.",
  },
  { type: "h3", text: "The page must be accessible" },
  {
    type: "p",
    text: "Search engines must be able to crawl and index the page without technical blocks or broken links.",
  },
  { type: "h3", text: "The content must answer the question" },
  {
    type: "p",
    text: "The page should match the question. Clear headings, short answers, useful details, and internal links explain the topic.",
  },
  { type: "h3", text: "The information should be trustworthy" },
  {
    type: "p",
    text: "Show real knowledge through accurate facts, original examples, author details, service processes, and reliable sources. Update old information.",
  },
  { type: "h3", text: "Business details should be consistent" },
  {
    type: "p",
    text: "Your business name, address, phone number, opening hours, and services should match across your website, business profiles, and trusted directories.",
  },
  {
    type: "p",
    text: "Genuine reviews, local citations, news coverage, and relevant backlinks may support your reputation. Avoid fake reviews and spam links.",
  },
  {
    type: "p",
    text: "Schema markup can clarify page details, but it cannot guarantee a ranking, rich result, or AI citation.",
  },
  {
    type: "source",
    text: "Sources: Google SEO Starter Guide, Google helpful content guidance and Google structured data policies",
  },

  { type: "h2", text: "How a UK Small Business Can Improve AI Visibility" },
  {
    type: "p",
    text: "Start with basic SEO. Important pages should be crawlable, indexed, mobile-friendly, secure, fast, and easy to navigate.",
  },
  {
    type: "p",
    text: "Create a useful page for each service or topic. Avoid weak location pages that only change the town name.",
  },
  {
    type: "p",
    text: "Answer questions found in calls, emails, reviews, support messages, and Search Console. Put a short answer and useful detail below each clear heading.",
  },
  { type: "p", text: "Add first-hand knowledge that other websites may not have. This could include:" },
  {
    type: "ul",
    items: [
      "How your service works",
      "Factors that affect the price",
      "Common customer mistakes",
      "Real photographs",
      "Local examples",
      "Short case studies",
      "Advice from an experienced team member",
    ],
  },
  {
    type: "p",
    text: "Keep your name, address, phone number, services, and hours consistent across your website, Google Business Profile, Bing Places, and trusted directories.",
  },
  {
    type: "p",
    text: "Ask for honest reviews and seek relevant trade listings, local coverage, partnerships, and trusted links.",
  },
  {
    type: "p",
    text: "Use schema that matches visible content, such as LocalBusiness, Organisation, Service, Article, or Breadcrumb. It can aid understanding but cannot guarantee visibility.",
  },
  {
    type: "p",
    text: "If technical checks, content planning, and tracking become difficult, professional help with AI search optimisation may be useful. Before choosing support, ask what work will be completed and how results will be measured.",
  },

  { type: "h2", text: "Practical AI SEO Checklist for UK Small Businesses" },
  { type: "p", text: "Use this checklist to review your website and online presence." },
  { type: "h3", text: "Technical checks" },
  {
    type: "ul",
    items: [
      "Make sure important pages can be crawled and indexed.",
      "Improve slow pages and fix broken links.",
      "Set up Google Search Console and Bing Webmaster Tools.",
    ],
  },
  { type: "h3", text: "Content checks" },
  {
    type: "ul",
    items: [
      "Give every page one clear purpose.",
      "Use headings that accurately describe each section.",
      "Place a short, direct answer below important questions.",
      "Add real examples, useful details, and reliable sources.",
      "Link related pages together naturally.",
    ],
  },
  { type: "h3", text: "Business trust checks" },
  {
    type: "ul",
    items: [
      "Keep your contact details and opening hours accurate.",
      "Show genuine reviews and first-hand experience.",
      "Earn relevant mentions and backlinks naturally.",
    ],
  },
  { type: "h3", text: "Measurement checks" },
  {
    type: "ul",
    items: [
      "Track impressions, clicks, leads, calls, and sales.",
      "Check referral visits from AI tools.",
      "Record important AI citations and brand mentions.",
    ],
  },

  { type: "h2", text: "Mini Audit Example for a Local Heating Company" },
  {
    type: "p",
    text: "Imagine a heating company in Leeds has a page for emergency boiler repairs. The page begins with a long company introduction and gives no clear answer about availability, service areas, or costs.",
  },
  { type: "p", text: "The business could improve the page like this:" },
  {
    type: "table",
    headers: ["Page element", "Before", "Improved version"],
    rows: [
      ["Heading", "Welcome to Our Website", "Emergency Boiler Repair in Leeds"],
      ["Opening", "General company history", "Direct answer about the repair service"],
      ["Cost details", "No information", "Factors that affect the final cost"],
      ["Evidence", "Unsupported claims", "Real process, experience and photos"],
      ["Internal links", "None", "Links to servicing and contact pages"],
      ["Business details", "Inconsistent", "Matching details across trusted profiles"],
    ],
  },
  {
    type: "p",
    text: "These changes make the page clearer and more useful. They may improve its chance of being found and understood, but they cannot guarantee an AI citation, ranking, enquiry, or sale.",
  },

  { type: "h2", text: "How to Measure AI SEO Results" },
  { type: "p", text: "Measure AI visibility with several signals rather than one number." },
  {
    type: "p",
    text: "Record each citation or brand mention, including the platform, question, date, cited page, and link. Repeat the searches because results change.",
  },
  {
    type: "p",
    text: "Check analytics for AI referrals, but remember that some visits may not be identified correctly.",
  },
  { type: "p", text: "You should also track normal search data in Google Search Console:" },
  { type: "ul", items: ["Impressions", "Clicks", "Search queries", "Landing pages", "Click-through rate"] },
  {
    type: "p",
    text: "Google includes traffic from its AI search features in the overall Performance report. However, it does not provide a complete separate report for every type of AI result.",
  },
  {
    type: "p",
    text: "Track calls, forms, bookings, qualified leads, and sales. A mention has limited value if it does not support a business goal.",
  },
  {
    type: "p",
    text: "Results vary by question, location, language, user, and time. Third-party tools use samples, so treat their reports as estimates.",
  },
  { type: "source", text: "Source: Google Search Central AI features and Search Console reporting" },

  { type: "h2", text: "Common AI SEO Myths and False Promises" },
  { type: "h3", text: "AI SEO replaces normal SEO" },
  {
    type: "p",
    text: "It does not. Crawling, indexing, useful content, website quality, internal links, and backlinks still matter.",
  },
  { type: "h3", text: "Adding FAQs guarantees an AI citation" },
  {
    type: "p",
    text: "FAQs can help readers find clear answers, but no page format guarantees inclusion in an AI response.",
  },
  { type: "h3", text: "Schema markup guarantees AI visibility" },
  { type: "p", text: "Schema helps search systems understand page information. It does not guarantee a ranking, citation, or rich result." },
  { type: "h3", text: "An agency can guarantee AI rankings" },
  {
    type: "p",
    text: "No provider can guarantee that Google, ChatGPT, Gemini, Perplexity, or Copilot will cite or recommend a business. These systems change, and their answers may vary between users and questions.",
  },
  {
    type: "p",
    text: "Be careful with anyone promising fixed AI rankings, guaranteed citations, instant traffic, or a certain number of leads.",
  },

  { type: "h2", text: "A Simple 30-Day AI SEO Action Plan" },
  { type: "h3", text: "Week 1: Check your website" },
  {
    type: "p",
    text: "Check crawling, indexing, mobile use, speed, broken links, analytics, Search Console, and Bing Webmaster Tools.",
  },
  { type: "h3", text: "Week 2: Improve one important page" },
  {
    type: "p",
    text: "Improve one valuable page with a clear heading, direct answer, evidence, and internal links.",
  },
  { type: "h3", text: "Week 3: Build trust" },
  {
    type: "p",
    text: "Correct business listings, improve your About page, request honest reviews, and seek relevant local mentions.",
  },
  { type: "h3", text: "Week 4: Measure and repeat" },
  { type: "p", text: "Record search results, AI referrals, enquiries, and sales. Use the findings to choose the next page." },

  { type: "h2", text: "What AI SEO Cannot Guarantee" },
  { type: "p", text: "AI SEO may improve discovery and understanding, but it cannot guarantee:" },
  {
    type: "ul",
    items: [
      "Inclusion in an AI-generated answer",
      "A citation or clickable link",
      "A fixed ranking or position",
      "A business recommendation",
      "More website traffic",
      "More enquiries or sales",
      "The same answer for every user",
      "Permanent visibility",
    ],
  },
  { type: "p", text: "Responses change with the question, location, sources, user, and platform updates." },
  {
    type: "p",
    text: "Aim to improve eligibility, clarity, trust, and usefulness. Review results over time instead of judging one prompt.",
  },

  { type: "h2", text: "Final Thoughts" },
  { type: "p", text: "AI SEO builds on traditional SEO rather than replacing it." },
  {
    type: "p",
    text: "Make your site accessible, answer real questions, show experience, and keep business details accurate. Earn honest reviews, mentions, and relevant links.",
  },
  { type: "p", text: "Clear content that helps people is also easier for search and AI tools to understand." },
  {
    type: "p",
    text: "Improve one important page at a time. Measure real outcomes, such as enquiries and sales, and adjust your work using the results.",
  },

  { type: "h2", text: "Frequently Asked Questions" },
  { type: "h3", text: "What is AI SEO in simple words?" },
  {
    type: "p",
    text: "AI SEO makes your website easier for search engines and AI tools to find, understand, trust, and use.",
  },
  { type: "h3", text: "How is AI SEO different from traditional SEO?" },
  {
    type: "p",
    text: "Traditional SEO targets search results. AI SEO also targets citations, mentions, and generated answers. Both use the same foundations.",
  },
  { type: "h3", text: "Does AI SEO replace normal SEO?" },
  { type: "p", text: "No. Technical SEO, indexing, useful content, links, and website quality remain essential." },
  { type: "h3", text: "Can AI SEO help a small business?" },
  {
    type: "p",
    text: "It may improve discovery across search and AI tools, but it cannot guarantee traffic, enquiries, or sales.",
  },
  { type: "h3", text: "How can my website appear in Google AI Overviews?" },
  {
    type: "p",
    text: "Publish useful content, follow SEO guidance, and allow Google to crawl and index the page. Inclusion is not guaranteed.",
  },
  { type: "h3", text: "Can I rank my business in ChatGPT?" },
  {
    type: "p",
    text: "ChatGPT has no fixed ranking list. A business may be cited for some questions, but results change.",
  },
  { type: "h3", text: "Do backlinks still matter for AI search?" },
  {
    type: "p",
    text: "Relevant backlinks may support discovery and reputation, but they cannot guarantee use by an AI tool.",
  },
  { type: "h3", text: "Does schema markup guarantee AI visibility?" },
  { type: "p", text: "No. Schema can clarify content, but it cannot guarantee a citation, recommendation, or special result." },
  { type: "h3", text: "How long does AI SEO take?" },
  {
    type: "p",
    text: "There is no fixed timeline. It depends on your site, competition, content, reputation, and processing time.",
  },
  { type: "h3", text: "How can I measure AI SEO results?" },
  {
    type: "p",
    text: "Track citations, mentions, referrals, impressions, clicks, leads, and conversions. No single metric shows the full result.",
  },
]

export const aiSeoPost = {
  slug: "what-is-ai-seo",
  title: "What Is AI SEO: A Practical Guide for UK Small Businesses in 2026",
  excerpt: "A beginner-friendly guide to improving visibility in Google and AI search tools.",
  category: "SEO",
  date: "2026-01-15",
  readTime: "12 min read",
  image: "/content-optimization-editor-showing-seo-improvemen.jpg",
  author: {
    name: "Sarah Johnson",
    role: "SEO Director",
    avatar: "/professional-woman-diverse.png",
  },
  content: aiSeoContent,
}
