import type { InternalLinkSuggestion, SearchIntent } from "./types"

export interface SectionPoolItem {
  heading: string
  guidance: string
  subpoints?: string[]
  /** Nested H4s under the first subpoint, used sparingly for genuinely deep topics. */
  deepDive?: string[]
}

export interface CtaOption {
  text: string
  href: string
  intents: SearchIntent[]
}

export interface CategoryProfile {
  id: string
  triggers: string[]
  sections: SectionPoolItem[]
  questions: string[]
  faqs: { q: string; a: string }[]
  internalLinks: InternalLinkSuggestion[]
  ctas: CtaOption[]
  enhancementIdeas: string[]
}

// {subject} = the cleaned topic/primary keyword phrase, lowercase, no leading article.
// {Subject} = same, capitalised first letter.

export const CATEGORIES: CategoryProfile[] = [
  {
    id: "seo",
    triggers: [
      "seo",
      "search engine",
      "ranking",
      "rank on google",
      "organic traffic",
      "serp",
      "backlink",
      "keyword research",
      "google search",
      "search intent",
      "crawl",
    ],
    sections: [
      {
        heading: "Technical SEO Audit",
        guidance: "Cover how to assess crawlability, indexing status, site architecture, and mobile usability before any content or keyword work begins.",
        subpoints: ["Checking Indexing Status in Google Search Console", "Fixing Crawl Errors and Broken Links", "Reviewing Site Structure and Internal Navigation"],
        deepDive: ["Submitting and Monitoring Your XML Sitemap", "Resolving Duplicate Content and Canonical Issues"],
      },
      {
        heading: "Keyword Research",
        guidance: "Explain how to find keywords with real search volume and achievable difficulty, grouped by theme rather than treated as a flat list.",
        subpoints: ["Finding Keyword Opportunities with Search Volume Data", "Grouping Keywords by Topic Clusters", "Assessing Keyword Difficulty Realistically"],
      },
      {
        heading: "Search Intent",
        guidance: "Explain why matching content format to what the searcher actually wants (information, comparison, or purchase) matters more than keyword density.",
        subpoints: ["Identifying Informational vs Commercial Intent", "Matching Content Format to the SERP"],
      },
      {
        heading: "On-Page SEO",
        guidance: "Cover title tags, headings, meta descriptions, image alt text, and natural keyword placement without stuffing.",
        subpoints: ["Writing SEO-Friendly Titles and Meta Descriptions", "Structuring Headings for Readability and Relevance", "Optimising Images and Alt Text"],
      },
      {
        heading: "Internal Linking",
        guidance: "Explain how linking related pages together passes authority and helps both users and search engines understand site structure.",
        subpoints: ["Building Topic Clusters with Pillar Pages", "Using Descriptive Anchor Text"],
      },
      {
        heading: "Page Speed",
        guidance: "Cover Core Web Vitals, image compression, and hosting choices that affect load time and rankings.",
        subpoints: ["Improving Largest Contentful Paint (LCP)", "Reducing Unused JavaScript and CSS"],
      },
      {
        heading: "Content Optimisation",
        guidance: "Explain how to update existing pages with better depth, structure, and freshness instead of only publishing new content.",
        subpoints: ["Refreshing Outdated Content for Relevance", "Adding Depth Competitors Are Missing"],
      },
      {
        heading: "Backlinks",
        guidance: "Cover realistic, white-hat ways to earn links, such as digital PR, guest contributions, and resource-worthy content.",
        subpoints: ["Earning Links Through Digital PR", "Evaluating Link Quality Over Quantity"],
      },
      {
        heading: "Google Search Console",
        guidance: "Explain how to use Search Console data to find quick wins, monitor indexing, and track which queries are already close to ranking.",
        subpoints: ["Finding Quick-Win Keywords in Performance Reports", "Monitoring Core Web Vitals and Coverage"],
      },
      {
        heading: "Measuring SEO Performance",
        guidance: "Cover the metrics that actually matter for tracking progress, beyond vanity rankings.",
        subpoints: ["Tracking Organic Traffic and Conversions", "Setting Realistic Timelines for Results"],
      },
      {
        heading: "Local SEO Considerations",
        guidance: "Cover Google Business Profile optimisation and local citations where relevant to the topic.",
        subpoints: ["Optimising Your Google Business Profile", "Building Consistent Local Citations"],
      },
      {
        heading: "Mobile and Core Web Vitals",
        guidance: "Explain how mobile-first indexing and user experience signals factor into modern rankings.",
      },
    ],
    questions: [
      "What is the fastest way to see results from {subject}?",
      "How long does {subject} typically take to show measurable results?",
      "What tools are best for {subject}?",
      "Can {subject} be done without hiring an agency?",
      "How often should {subject} be reviewed or updated?",
      "What are the most common mistakes businesses make with {subject}?",
      "Does {subject} still matter with AI-powered search results?",
      "How is {subject} measured or tracked over time?",
      "What's the difference between on-page and off-page factors in {subject}?",
      "How much should a business budget for {subject}?",
    ],
    faqs: [
      { q: "Is {subject} a one-time task or an ongoing process?", a: "It's ongoing — search algorithms, competitors, and user behaviour change constantly, so results need to be monitored and refined over time." },
      { q: "How soon will I see results from {subject}?", a: "Most sites start seeing early movement within 8-12 weeks, with more significant results typically appearing over 4-6 months." },
      { q: "Do I need technical skills to work on {subject}?", a: "Basic changes can be made with a CMS, but deeper technical fixes often benefit from developer or specialist support." },
      { q: "What's the biggest ranking factor in {subject} right now?", a: "There's no single factor — relevance, content quality, technical health, and trustworthy backlinks all work together." },
      { q: "Can paid ads replace the need for {subject}?", a: "No — paid ads stop driving traffic the moment spend stops, while strong organic visibility compounds over time." },
      { q: "How do I know if my current approach to {subject} is working?", a: "Track organic traffic, keyword rankings, and — most importantly — conversions from organic visitors over a consistent reporting period." },
      { q: "Is {subject} different for small businesses versus large companies?", a: "The fundamentals are the same, but small businesses often get faster wins by focusing on specific, less competitive niches first." },
    ],
    internalLinks: [
      { type: "Related service page", label: "SEO Services", href: "/seo" },
      { type: "Relevant free tool", label: "Meta Title Generator", href: "/meta-title-generator" },
      { type: "Relevant free tool", label: "Meta Description Generator", href: "/meta-description-generator" },
      { type: "Supporting blog post", label: "A related post on technical SEO fundamentals" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
    ],
    ctas: [
      { text: "Get a free SEO audit from Linkedo", href: "/seo", intents: ["commercial", "transactional"] },
      { text: "Explore our SEO services", href: "/seo", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "Before/after ranking or traffic screenshots",
      "A checklist readers can follow step by step",
      "Statistics on organic search behaviour",
      "A comparison table of tools or approaches",
      "An expert quote on a common misconception",
    ],
  },

  {
    id: "web-development",
    triggers: ["website", "web design", "web development", "landing page", "page speed", "cms", "wordpress", "web app", "ux", "ui design", "responsive"],
    sections: [
      {
        heading: "Planning and Goal Setting",
        guidance: "Explain how to define the purpose, audience, and success metrics for the site or page before any design work starts.",
        subpoints: ["Defining the Primary Goal of the Project", "Understanding Your Target Audience's Needs"],
      },
      {
        heading: "Information Architecture",
        guidance: "Cover how to structure navigation and page hierarchy so users (and search engines) can find what they need quickly.",
        subpoints: ["Mapping Out a Logical Site Structure", "Designing Intuitive Navigation"],
      },
      {
        heading: "User Experience (UX) Design",
        guidance: "Explain the principles behind layouts that guide visitors toward the intended action without friction.",
        subpoints: ["Designing Clear Visual Hierarchy", "Reducing Friction in Key User Flows"],
      },
      {
        heading: "Mobile Responsiveness",
        guidance: "Cover why mobile-first design is essential and what breaks most often on smaller screens.",
        subpoints: ["Testing Across Real Device Sizes", "Avoiding Common Mobile Layout Pitfalls"],
      },
      {
        heading: "Page Speed and Performance",
        guidance: "Explain how image optimisation, code minification, and hosting choices impact load time and conversions.",
        subpoints: ["Optimising Images Without Losing Quality", "Reducing Render-Blocking Resources"],
        deepDive: ["Choosing a Fast, Reliable Hosting Provider", "Implementing Lazy Loading for Below-the-Fold Content"],
      },
      {
        heading: "Accessibility Best Practices",
        guidance: "Cover colour contrast, alt text, keyboard navigation, and why accessible design benefits every visitor.",
      },
      {
        heading: "Choosing the Right Platform or CMS",
        guidance: "Compare the trade-offs between custom builds, WordPress, and modern frameworks based on the project's needs.",
      },
      {
        heading: "On-Site SEO Fundamentals",
        guidance: "Explain how clean code, semantic HTML, and proper metadata give the new site a head start in search.",
      },
      {
        heading: "Conversion-Focused Design",
        guidance: "Cover how calls-to-action, trust signals, and page layout work together to turn visitors into leads.",
        subpoints: ["Placing Calls-to-Action Where Users Actually Look", "Building Trust with Social Proof"],
      },
      {
        heading: "Testing and Quality Assurance",
        guidance: "Cover cross-browser testing, broken link checks, and form testing before launch.",
      },
      {
        heading: "Launch Checklist",
        guidance: "Give a practical rundown of what to verify (redirects, analytics, SSL, sitemaps) right before going live.",
      },
      {
        heading: "Maintenance After Launch",
        guidance: "Explain what ongoing upkeep (security updates, backups, performance monitoring) actually involves.",
      },
    ],
    questions: [
      "How long does it take to build {subject}?",
      "How much does {subject} typically cost?",
      "What platform is best suited for {subject}?",
      "Do I need a developer, or can I use a website builder?",
      "How do I make sure {subject} loads quickly?",
      "What should I check before launching {subject}?",
      "How often should {subject} be updated after launch?",
      "What's the difference between a template and a custom build?",
      "How does {subject} affect SEO performance?",
    ],
    faqs: [
      { q: "Do I need custom development, or will a template work?", a: "Templates work well for simple sites, but custom development gives more control over performance, branding, and scalability as the business grows." },
      { q: "How long should {subject} realistically take?", a: "A straightforward project can take a few weeks, while more complex builds with custom functionality often take two to three months." },
      { q: "Will a new site hurt my existing search rankings?", a: "Only if redirects and technical SEO aren't handled correctly during migration — planning this in advance avoids ranking drops." },
      { q: "What's the biggest mistake businesses make with {subject}?", a: "Skipping the planning phase and jumping straight into design, which usually leads to a site that looks good but doesn't convert." },
      { q: "Does {subject} need to be mobile-first?", a: "Yes — the majority of traffic on most sites now comes from mobile, and Google indexes the mobile version by default." },
      { q: "How much ongoing maintenance does a website need?", a: "Regular security updates, backups, and periodic performance checks are the minimum — more if the site runs on a CMS with plugins." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Web Development Services", href: "/web-development" },
      { type: "Relevant free tool", label: "UTM Builder", href: "/utm-builder" },
      { type: "Supporting blog post", label: "A related post on website performance" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
    ],
    ctas: [
      { text: "Get a free website consultation from Linkedo", href: "/web-development", intents: ["commercial", "transactional"] },
      { text: "Explore our web development services", href: "/web-development", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "Before/after screenshots of the design",
      "A checklist readers can follow step by step",
      "A comparison table of platforms or tools",
      "Performance benchmark statistics",
      "Wireframe or layout examples",
    ],
  },

  {
    id: "advertising",
    triggers: ["google ads", "ppc", "paid search", "facebook ads", "meta ads", "instagram ads", "ad campaign", "cost per click", "advertising", "ad spend", "roas"],
    sections: [
      {
        heading: "Setting Clear Campaign Goals",
        guidance: "Explain how to define whether the campaign is optimising for leads, sales, or brand awareness before building anything.",
        subpoints: ["Choosing the Right Campaign Objective", "Setting a Realistic Budget and Timeline"],
      },
      {
        heading: "Audience Targeting",
        guidance: "Cover how to define and narrow an audience using demographics, interests, and behaviour without being too broad or too narrow.",
        subpoints: ["Building Audience Personas from Real Data", "Using Lookalike or Similar Audiences"],
      },
      {
        heading: "Keyword and Placement Research",
        guidance: "Explain how to find the right search terms or ad placements that match buying intent.",
        subpoints: ["Identifying High-Intent Search Terms", "Avoiding Wasted Spend with Negative Keywords"],
      },
      {
        heading: "Ad Copy and Creative",
        guidance: "Cover what makes ad copy and visuals stop the scroll and drive clicks without feeling like clickbait.",
        subpoints: ["Writing Headlines That Match Search Intent", "Testing Multiple Creative Variations"],
      },
      {
        heading: "Landing Page Alignment",
        guidance: "Explain why the ad and the landing page must match in message and offer to avoid high bounce rates.",
      },
      {
        heading: "Bid Strategy and Budget Allocation",
        guidance: "Cover manual versus automated bidding and how to allocate budget across campaigns based on performance.",
      },
      {
        heading: "Conversion Tracking Setup",
        guidance: "Explain how to set up proper tracking so performance data can actually be trusted and optimised against.",
        subpoints: ["Setting Up Conversion Events Correctly", "Connecting Analytics to Ad Platforms"],
      },
      {
        heading: "A/B Testing Campaigns",
        guidance: "Cover how to test one variable at a time (headline, image, audience) to isolate what's actually improving performance.",
      },
      {
        heading: "Analysing Performance Data",
        guidance: "Explain which metrics matter most (CTR, CPA, ROAS) and how to read them together, not in isolation.",
      },
      {
        heading: "Scaling What Works",
        guidance: "Cover how to increase budget on winning campaigns without breaking the algorithm's learning phase.",
      },
      {
        heading: "Common Budget-Wasting Mistakes",
        guidance: "Cover the avoidable errors (broad match without negatives, ignoring frequency caps, no landing page testing) that drain ad spend.",
      },
    ],
    questions: [
      "How much budget is needed to get started with {subject}?",
      "How long before {subject} starts generating results?",
      "What's a good cost per click or cost per lead for {subject}?",
      "Should I run {subject} manually or use automated bidding?",
      "How do I know if {subject} is actually profitable?",
      "What's the biggest reason {subject} campaigns fail?",
      "How often should {subject} campaigns be reviewed?",
      "Can {subject} work alongside organic marketing efforts?",
    ],
    faqs: [
      { q: "What budget should I start with for {subject}?", a: "It depends on the industry, but starting with enough budget to gather at least 30-50 conversions per campaign gives the algorithm meaningful data to optimise against." },
      { q: "How quickly will {subject} show results?", a: "Some traffic appears immediately, but reliable performance data usually takes two to four weeks as the algorithm exits its learning phase." },
      { q: "Is {subject} better than organic marketing?", a: "They work best together — paid campaigns drive immediate traffic while organic efforts build long-term, lower-cost visibility." },
      { q: "Why is my cost per click so high?", a: "This is usually down to low ad relevance, a mismatched landing page, or targeting an audience that's too broad or too competitive." },
      { q: "Do I need a landing page, or can I send traffic to my homepage?", a: "A dedicated landing page that matches the ad's message almost always converts better than sending traffic to a general homepage." },
      { q: "How do I avoid wasting budget on {subject}?", a: "Set up conversion tracking from day one, use negative keywords, and review performance weekly rather than letting campaigns run unmonitored." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Google Ads Management", href: "/google-ads" },
      { type: "Related service page", label: "Meta Ads Management", href: "/meta-ads" },
      { type: "Relevant free tool", label: "UTM Builder", href: "/utm-builder" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
      { type: "Supporting blog post", label: "A related post on campaign optimisation" },
    ],
    ctas: [
      { text: "Get a free ads account review from Linkedo", href: "/google-ads", intents: ["commercial", "transactional"] },
      { text: "Explore our paid advertising services", href: "/google-ads", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "Screenshots of real ad examples",
      "A comparison table of bidding strategies",
      "Performance benchmark statistics by industry",
      "A budget-planning checklist or template",
      "An expert quote on common targeting mistakes",
    ],
  },

  {
    id: "content-marketing",
    triggers: ["content marketing", "blog", "copywriting", "content strategy", "content calendar", "storytelling", "editorial"],
    sections: [
      {
        heading: "Defining Content Goals and Audience",
        guidance: "Explain how to anchor every piece of content to a clear business goal and a specific reader, not a general audience.",
        subpoints: ["Identifying What the Reader Actually Needs", "Aligning Content Goals with Business Outcomes"],
      },
      {
        heading: "Researching What Already Ranks or Resonates",
        guidance: "Cover how to analyse existing top-performing content before creating something new, to avoid duplicating what already exists.",
      },
      {
        heading: "Building a Content Calendar",
        guidance: "Explain how to plan topics, formats, and publishing cadence so content stays consistent rather than reactive.",
        subpoints: ["Balancing Evergreen and Timely Content", "Setting a Sustainable Publishing Frequency"],
      },
      {
        heading: "Structuring Content for Readability",
        guidance: "Cover formatting choices (short paragraphs, subheadings, bullet points) that keep readers engaged on the page.",
      },
      {
        heading: "Writing in a Distinct Brand Voice",
        guidance: "Explain how to keep tone consistent across writers and formats so content feels recognisably from the same brand.",
      },
      {
        heading: "Adding Original Insight and Data",
        guidance: "Cover why first-hand experience, original research, or expert commentary sets content apart from AI-generated competitors.",
      },
      {
        heading: "Optimising Content for Search",
        guidance: "Explain how to naturally incorporate keywords and search intent without sacrificing readability.",
      },
      {
        heading: "Repurposing Content Across Channels",
        guidance: "Cover how a single piece of content can be adapted into social posts, email, or video without starting from scratch each time.",
      },
      {
        heading: "Measuring Content Performance",
        guidance: "Cover which metrics (time on page, shares, conversions) actually indicate whether content is working.",
      },
      {
        heading: "Updating and Refreshing Older Content",
        guidance: "Explain why revisiting and improving existing content often delivers better ROI than publishing constantly new pieces.",
      },
    ],
    questions: [
      "How often should content be published for {subject} to work?",
      "What makes content actually rank or get shared for {subject}?",
      "How long should a piece of content about {subject} be?",
      "Should {subject} be handled in-house or outsourced?",
      "How is success measured in {subject}?",
      "What's the difference between content marketing and copywriting?",
      "How much does professional help with {subject} typically cost?",
    ],
    faqs: [
      { q: "How often should I publish content as part of {subject}?", a: "Consistency matters more than frequency — one well-researched piece a week outperforms daily low-effort posts over time." },
      { q: "Do I need a huge budget to get started with {subject}?", a: "No — a focused strategy on a few high-value topics can outperform a scattered approach with a much larger budget." },
      { q: "How do I know if my content is actually working?", a: "Track engagement (time on page, scroll depth) alongside business metrics like leads or sign-ups generated, not just traffic volume." },
      { q: "Should every piece of content target a keyword?", a: "Not necessarily — some content exists to build trust or brand awareness, but most should still align with real search demand where possible." },
      { q: "How long does it take to see results from {subject}?", a: "Expect a gradual build — most businesses see meaningful traction after three to six months of consistent publishing." },
    ],
    internalLinks: [
      { type: "Related service page", label: "SEO Services", href: "/seo" },
      { type: "Relevant free tool", label: "Blog Outline Generator", href: "/blog-outline-generator" },
      { type: "Relevant free tool", label: "Meta Description Generator", href: "/meta-description-generator" },
      { type: "Supporting blog post", label: "A related post on content strategy" },
    ],
    ctas: [
      { text: "Talk to Linkedo about a content strategy", href: "/seo", intents: ["commercial", "transactional"] },
      { text: "Explore our content and SEO services", href: "/seo", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "A content calendar template",
      "Statistics on content engagement",
      "Before/after examples of refreshed content",
      "A checklist for publishing a new piece",
      "An expert quote on brand voice",
    ],
  },

  {
    id: "branding",
    triggers: ["brand", "branding", "logo", "brand identity", "rebrand", "brand strategy", "brand guidelines"],
    sections: [
      {
        heading: "Defining Brand Purpose and Values",
        guidance: "Explain how to articulate why the business exists beyond profit, since this shapes every other brand decision.",
      },
      {
        heading: "Understanding Your Target Audience",
        guidance: "Cover how audience research shapes tone, visual style, and messaging choices.",
      },
      {
        heading: "Competitive Positioning",
        guidance: "Explain how to identify what makes the brand genuinely different from competitors in the same space.",
      },
      {
        heading: "Visual Identity Design",
        guidance: "Cover logo, colour palette, and typography choices and how they should reflect brand personality, not just trends.",
        subpoints: ["Choosing a Colour Palette That Reflects Brand Personality", "Selecting Typography for Consistency"],
      },
      {
        heading: "Brand Voice and Messaging",
        guidance: "Explain how to define a consistent tone of voice that works across website, social, and customer service.",
      },
      {
        heading: "Building Brand Guidelines",
        guidance: "Cover why documenting rules for logo use, colour, and tone keeps the brand consistent as a team grows.",
      },
      {
        heading: "Rolling Out the Brand Consistently",
        guidance: "Explain how to apply the new identity across website, packaging, social, and marketing materials without inconsistencies.",
      },
      {
        heading: "Measuring Brand Perception",
        guidance: "Cover how to gauge whether the brand is actually landing with its audience, through surveys, reviews, or engagement data.",
      },
    ],
    questions: [
      "How much does {subject} typically cost?",
      "How long does {subject} usually take from start to finish?",
      "How do I know if my current brand needs a refresh?",
      "What's the difference between a logo and a brand identity?",
      "How do I keep {subject} consistent across different platforms?",
      "Should {subject} be handled by an agency or in-house?",
    ],
    faqs: [
      { q: "How do I know if I need a full rebrand or just a refresh?", a: "If the core business and values haven't changed, a visual refresh is usually enough — a full rebrand is better reserved for a genuine shift in direction or audience." },
      { q: "How long does {subject} typically take?", a: "A focused project can take four to eight weeks, while a comprehensive rebrand with full guidelines often takes two to three months." },
      { q: "Does {subject} actually affect sales?", a: "Yes — consistent, trustworthy branding directly influences whether potential customers feel confident choosing a business over competitors." },
      { q: "What's included in a typical brand guidelines document?", a: "Logo usage rules, colour codes, typography, tone of voice, and examples of correct and incorrect application across different materials." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Branding Services", href: "/branding" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
      { type: "Supporting blog post", label: "A related post on brand strategy" },
    ],
    ctas: [
      { text: "Talk to Linkedo about your brand", href: "/branding", intents: ["commercial", "transactional"] },
      { text: "Explore our branding services", href: "/branding", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "Before/after brand identity examples",
      "A brand guidelines checklist",
      "Colour palette and typography visuals",
      "Statistics on brand trust and purchasing decisions",
    ],
  },

  {
    id: "ecommerce",
    triggers: ["ecommerce", "e-commerce", "online store", "shopify", "product page", "cart abandonment", "checkout"],
    sections: [
      {
        heading: "Product Page Optimisation",
        guidance: "Cover the elements (images, descriptions, reviews, trust badges) that turn a product page visit into a purchase.",
        subpoints: ["Writing Product Descriptions That Convert", "Using Reviews and Social Proof Effectively"],
      },
      {
        heading: "Simplifying the Checkout Process",
        guidance: "Explain how to remove friction points that cause cart abandonment, such as forced account creation or hidden fees.",
      },
      {
        heading: "Site Search and Navigation",
        guidance: "Cover how intuitive category structure and on-site search help shoppers find products faster.",
      },
      {
        heading: "Mobile Shopping Experience",
        guidance: "Explain why mobile-optimised checkout and browsing are essential given how much ecommerce traffic is mobile.",
      },
      {
        heading: "Email and Cart Abandonment Recovery",
        guidance: "Cover how automated email sequences can recover a meaningful share of abandoned carts.",
      },
      {
        heading: "Product Photography and Visual Merchandising",
        guidance: "Explain how image quality and consistency affect perceived trust and conversion rates.",
      },
      {
        heading: "Pricing and Promotion Strategy",
        guidance: "Cover how to use discounts, bundles, or urgency without eroding margins or brand perception.",
      },
      {
        heading: "Shipping and Returns Policy",
        guidance: "Explain how clear, fair policies reduce pre-purchase hesitation and support hooks.",
      },
      {
        heading: "Post-Purchase Customer Experience",
        guidance: "Cover order confirmation, follow-up, and retention tactics that turn one-time buyers into repeat customers.",
      },
      {
        heading: "Tracking Ecommerce Performance",
        guidance: "Cover the key metrics (conversion rate, average order value, cart abandonment rate) worth monitoring regularly.",
      },
    ],
    questions: [
      "What's the average conversion rate I should expect for {subject}?",
      "How do I reduce cart abandonment for {subject}?",
      "What platform is best suited for {subject}?",
      "How important are product reviews for {subject}?",
      "How do I compete with larger retailers on {subject}?",
      "What's the best way to handle returns for {subject}?",
    ],
    faqs: [
      { q: "What's a good conversion rate for an online store?", a: "Most ecommerce stores convert between 1-3% of visitors, though this varies significantly by industry and price point." },
      { q: "How do I reduce cart abandonment?", a: "Simplify checkout to as few steps as possible, show shipping costs early, and send a timely follow-up email to shoppers who didn't complete their purchase." },
      { q: "Do product reviews really affect sales?", a: "Yes — products with genuine reviews consistently convert better, as reviews reduce the perceived risk of buying from an unfamiliar store." },
      { q: "Should I offer free shipping?", a: "Where margins allow, yes — unexpected shipping costs at checkout are one of the most common reasons shoppers abandon their cart." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Web Development Services", href: "/web-development" },
      { type: "Related service page", label: "Google Ads Management", href: "/google-ads" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
      { type: "Supporting blog post", label: "A related post on conversion optimisation" },
    ],
    ctas: [
      { text: "Get a free ecommerce site review from Linkedo", href: "/web-development", intents: ["commercial", "transactional"] },
      { text: "Explore our ecommerce services", href: "/web-development", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "A checkout flow comparison or walkthrough",
      "Statistics on cart abandonment rates",
      "Before/after product page examples",
      "A conversion rate benchmark table by industry",
    ],
  },

  {
    id: "social-media",
    triggers: ["social media", "instagram", "tiktok", "linkedin", "facebook page", "twitter", "x platform", "social strategy", "influencer"],
    sections: [
      {
        heading: "Choosing the Right Platforms",
        guidance: "Explain how to decide which platforms actually reach the target audience, rather than trying to be active everywhere.",
      },
      {
        heading: "Defining a Content Pillar Strategy",
        guidance: "Cover how to organise content into recurring themes so posting stays consistent and on-brand.",
      },
      {
        heading: "Building a Posting Schedule",
        guidance: "Explain how to plan a realistic, sustainable posting cadence rather than burning out after a strong first month.",
      },
      {
        heading: "Creating Scroll-Stopping Visuals",
        guidance: "Cover what separates content that gets engagement from content that gets scrolled past.",
      },
      {
        heading: "Writing Captions That Drive Engagement",
        guidance: "Explain how to write captions that invite comments and shares rather than just describing the image.",
      },
      {
        heading: "Community Management and Engagement",
        guidance: "Cover why responding to comments and messages promptly directly affects reach and trust.",
      },
      {
        heading: "Using Paid Social to Extend Reach",
        guidance: "Explain how boosting or running ads can amplify organic content that's already performing well.",
      },
      {
        heading: "Working with Influencers or Creators",
        guidance: "Cover how to identify the right partners and measure whether a collaboration actually delivers value.",
      },
      {
        heading: "Tracking Social Media Performance",
        guidance: "Cover which metrics (engagement rate, saves, link clicks) actually indicate progress toward business goals.",
      },
    ],
    questions: [
      "How often should I post for {subject} to work?",
      "Which platform is best suited for {subject}?",
      "How do I grow a following organically for {subject}?",
      "Should I use paid promotion alongside {subject}?",
      "How do I measure success in {subject}?",
      "How much time does {subject} realistically require each week?",
    ],
    faqs: [
      { q: "How often should I post on social media?", a: "Consistency beats frequency — three to five well-made posts a week usually outperforms daily low-effort content." },
      { q: "Do I need to be on every platform?", a: "No — it's far more effective to be genuinely active on one or two platforms where your audience actually spends time." },
      { q: "How long does it take to grow a following?", a: "Organic growth is gradual; most accounts see meaningful traction after three to six months of consistent, audience-focused content." },
      { q: "Is paid social media advertising worth it?", a: "Yes, when used to amplify content that's already resonating organically rather than to compensate for weak content." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Meta Ads Management", href: "/meta-ads" },
      { type: "Related service page", label: "Branding Services", href: "/branding" },
      { type: "Supporting blog post", label: "A related post on social content strategy" },
    ],
    ctas: [
      { text: "Talk to Linkedo about your social strategy", href: "/meta-ads", intents: ["commercial", "transactional"] },
      { text: "Explore our paid social services", href: "/meta-ads", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "Examples of high-performing post formats",
      "A content pillar planning template",
      "Statistics on engagement rates by platform",
      "A posting schedule checklist",
    ],
  },

  {
    id: "business",
    triggers: ["business", "startup", "entrepreneur", "small business", "business plan", "scaling", "growth strategy"],
    sections: [
      {
        heading: "Validating the Core Idea",
        guidance: "Explain how to test demand before investing heavily, through early customer conversations or a minimum viable offer.",
      },
      {
        heading: "Understanding the Target Market",
        guidance: "Cover how to define who the business actually serves and what problem it solves for them specifically.",
      },
      {
        heading: "Setting Up the Right Foundations",
        guidance: "Cover the practical early decisions (structure, finances, tools) that save headaches later.",
      },
      {
        heading: "Building a Realistic Growth Plan",
        guidance: "Explain how to set achievable milestones rather than vague, unmeasurable goals.",
      },
      {
        heading: "Marketing on a Limited Budget",
        guidance: "Cover practical, low-cost ways to get early traction before a bigger marketing budget is available.",
      },
      {
        heading: "Building Systems and Processes",
        guidance: "Explain why documenting repeatable processes early makes it easier to delegate and scale later.",
      },
      {
        heading: "Managing Cash Flow",
        guidance: "Cover why cash flow, not just profitability, is what actually determines whether a business survives its early years.",
      },
      {
        heading: "Hiring the Right People at the Right Time",
        guidance: "Explain how to decide when to bring on help versus outsourcing or staying lean.",
      },
      {
        heading: "Common Pitfalls to Avoid",
        guidance: "Cover the specific, avoidable mistakes that commonly derail growth at this stage.",
      },
      {
        heading: "Measuring What Actually Matters",
        guidance: "Explain which metrics genuinely reflect business health versus vanity numbers that look good but mean little.",
      },
    ],
    questions: [
      "How much capital is typically needed for {subject}?",
      "What's the biggest risk involved in {subject}?",
      "How long does it take to see traction with {subject}?",
      "Should {subject} be bootstrapped or funded externally?",
      "What's the first step someone should take with {subject}?",
      "How do I know if {subject} is working?",
    ],
    faqs: [
      { q: "How much money do I need to get started?", a: "This varies hugely by industry, but validating demand with a small, lean offer before investing heavily is almost always the safer path." },
      { q: "How long before a new venture becomes profitable?", a: "Most businesses take twelve to eighteen months to reach consistent profitability, though this varies by industry and starting capital." },
      { q: "Is it better to bootstrap or seek investment early?", a: "Bootstrapping keeps full control and forces discipline, while outside funding can accelerate growth if there's a clear, scalable model to fund." },
      { q: "What's the most common reason early-stage businesses fail?", a: "Running out of cash — often caused by underestimating costs or overestimating how quickly revenue will arrive." },
    ],
    internalLinks: [
      { type: "Related service page", label: "Digital Consulting", href: "/consulting" },
      { type: "Case study", label: "Case Studies", href: "/case-studies" },
      { type: "Supporting blog post", label: "A related post on early-stage growth strategy" },
    ],
    ctas: [
      { text: "Book a free consultation with Linkedo", href: "/consulting", intents: ["commercial", "transactional"] },
      { text: "Explore our consulting services", href: "/consulting", intents: ["informational", "navigational", "auto"] },
    ],
    enhancementIdeas: [
      "A simple planning template or checklist",
      "Statistics on business survival rates",
      "A real-world example or case study",
      "An expert quote on a common early mistake",
    ],
  },
]

export const GENERAL_SECTIONS: SectionPoolItem[] = [
  {
    heading: "Understanding {Subject}",
    guidance: "Give the reader the essential context they need before going further — what it involves and why it's relevant to them right now.",
  },
  {
    heading: "Why {Subject} Matters",
    guidance: "Explain the real-world impact of getting this right, backed by a concrete reason rather than a generic claim.",
  },
  {
    heading: "Key Factors to Consider",
    guidance: "Cover the specific variables that genuinely change the approach, not a generic checklist.",
  },
  {
    heading: "A Practical, Step-by-Step Approach",
    guidance: "Break the process into clear, sequential actions the reader can actually follow.",
    subpoints: ["Getting Started the Right Way", "Avoiding the Most Common Early Mistakes"],
  },
  {
    heading: "Tools and Resources That Help",
    guidance: "Recommend specific categories of tools or resources that make the process easier, with reasoning for each.",
  },
  {
    heading: "Common Challenges and How to Solve Them",
    guidance: "Address the specific obstacles readers are likely to run into and give a real solution for each, not a vague warning.",
  },
  {
    heading: "Real-World Examples",
    guidance: "Illustrate the advice with a concrete, specific example rather than an abstract description.",
  },
  {
    heading: "How to Measure Success",
    guidance: "Explain what a good outcome actually looks like and how to track progress toward it.",
  },
  {
    heading: "Expert Tips for Better Results",
    guidance: "Share a handful of less obvious, higher-impact tips that go beyond the basics already covered.",
  },
  {
    heading: "Looking Ahead",
    guidance: "Close with what's changing in this space and what the reader should keep an eye on next.",
  },
]

export const GENERAL_PROFILE: Omit<CategoryProfile, "id" | "triggers" | "sections"> = {
  questions: [
    "What's the best way to get started with {subject}?",
    "How long does {subject} usually take?",
    "What mistakes should I avoid with {subject}?",
    "Do I need professional help with {subject}, or can I do it myself?",
    "How much does {subject} typically cost?",
    "How do I know if {subject} is working?",
    "What tools or resources help most with {subject}?",
    "How often should {subject} be revisited or updated?",
  ],
  faqs: [
    { q: "How long does {subject} typically take?", a: "It depends on scope and starting point, but most people see meaningful progress within a few weeks of focused effort." },
    { q: "Is professional help worth it for {subject}?", a: "It depends on available time and expertise — professional support typically speeds up results and avoids costly early mistakes." },
    { q: "What's the most common mistake people make?", a: "Trying to do everything at once instead of focusing on the highest-impact actions first." },
    { q: "How do I measure whether {subject} is working?", a: "Set one or two clear, specific metrics upfront and track them consistently rather than judging by feel." },
  ],
  internalLinks: [
    { type: "Related service page", label: "Our Services", href: "/services" },
    { type: "Supporting blog post", label: "A related post from the Linkedo blog" },
    { type: "Relevant free tool", label: "Free AI Tools", href: "/free-ai-tools-online" },
  ],
  ctas: [
    { text: "Contact Linkedo for professional help", href: "/contact", intents: ["commercial", "transactional"] },
    { text: "Explore our services", href: "/services", intents: ["informational", "navigational", "auto"] },
  ],
  enhancementIdeas: [
    "A step-by-step checklist",
    "Real-world examples",
    "Relevant statistics or data",
    "An expert quote or tip",
    "A simple comparison table",
  ],
}
