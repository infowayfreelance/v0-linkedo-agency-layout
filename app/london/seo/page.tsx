"use client"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Chip } from "@/components/ui/chip"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const challenges = [
  {
    title: "High Competition",
    description: "London's market is saturated. Stand out from thousands of competitors in your industry.",
  },
  {
    title: "Local vs National",
    description: "Balance local London visibility with national UK reach for maximum impact.",
  },
  {
    title: "Multi-Location Targeting",
    description: "Reach customers across different London boroughs and surrounding areas.",
  },
  {
    title: "Trust Building",
    description: "Establish credibility with London's discerning B2B buyers and decision-makers.",
  },
]

const localSeoServices = [
  {
    iconName: "MapPin",
    title: "Google Business Profile",
    description: "Optimize your GBP listing for London-specific searches and local pack rankings.",
    href: "#",
  },
  {
    iconName: "Building2",
    title: "Local Citations",
    description: "Build consistent NAP citations across UK directories and London business listings.",
    href: "#",
  },
  {
    iconName: "FileText",
    title: "London-Focused Content",
    description: "Create location-specific content that resonates with London audiences.",
    href: "#",
  },
  {
    iconName: "Star",
    title: "Review Management",
    description: "Build and manage reviews on Google, Trustpilot, and industry-specific platforms.",
    href: "#",
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "London Market Analysis",
    description: "Analyze your local competition and identify London-specific keyword opportunities.",
  },
  {
    iconName: "PenTool",
    title: "Local Strategy",
    description: "Develop a customized SEO plan targeting London boroughs and surrounding areas.",
  },
  {
    iconName: "Rocket",
    title: "Implementation",
    description: "Optimize your Google Business Profile, local citations, and on-page SEO.",
  },
  {
    iconName: "TrendingUp",
    title: "Track & Refine",
    description: "Monitor local rankings and continuously improve your London visibility.",
  },
]

const faqs = [
  {
    "question": "How is London SEO different from general SEO?",
    "answer": "The principles are the same, but London is far more competitive and much more local. Rankings, especially in the map pack, vary by borough, so London SEO puts more weight on local relevance, Google Business Profile, citations and content for the specific areas you serve."
  },
  {
    "question": "Which London areas can you target?",
    "answer": "Any borough or district you genuinely serve, from Westminster, the City and Canary Wharf to Camden, Islington, Hackney, Croydon and the outer boroughs. We focus on the areas that bring you customers rather than trying to rank everywhere at once."
  },
  {
    "question": "How long until I see local ranking improvements?",
    "answer": "Technical and on-page fixes can be live within weeks, but ranking changes usually take months and depend on your site's history and the competition for your keywords. We report progress monthly so you can see what's moving."
  },
  {
    "question": "Do you help with Google Business Profile management?",
    "answer": "Yes. Local SEO includes Google Business Profile optimisation: categories, services, service area, photos and posts, alongside consistent citations across UK directories."
  },
  {
    "question": "How much do SEO services in London cost?",
    "answer": "It depends on the scope: how many pages and locations, how competitive your market is, and whether you need content and link building as well as technical work. See our pricing page or book a free audit for a recommendation based on your site."
  },
  {
    "question": "Do you guarantee first-page rankings?",
    "answer": "No. Nobody can guarantee rankings, because Google decides its results. Be wary of anyone who does. We commit to the work, the plan and honest reporting."
  },
  {
    "question": "Can you help my business appear in AI search results?",
    "answer": "Yes. We structure your pages, schema and content so they're clear and easy for AI assistants like ChatGPT and Google's AI Overviews to understand, which is built on the same foundations as good SEO."
  },
  {
    "question": "Do I need to be based in London to work with you?",
    "answer": "No. We work with businesses across the UK. See all the locations we cover."
  }
]
const includedServices = [
  {
    "title": "SEO audit",
    "description": "A full technical and on-page audit before any work starts, so the plan is based on your site rather than a template."
  },
  {
    "title": "Keyword and competitor research",
    "description": "London and borough-level keywords, search intent and the gaps your competitors are filling."
  },
  {
    "title": "On-page optimisation",
    "description": "Titles, meta descriptions, headings, internal links and content updates on the pages that matter most."
  },
  {
    "title": "Local SEO",
    "description": "Google Business Profile optimisation, consistent NAP citations and location content for the areas you serve."
  },
  {
    "title": "Link building and digital PR",
    "description": "Relevant, white-hat outreach to earn links from real websites."
  },
  {
    "title": "Monthly reporting",
    "description": "Rankings, traffic and enquiries in a clear report, with the next month's priorities."
  }
]
const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "SEO Services London", serviceType: "Search engine optimisation",
  areaServed: { "@type": "City", name: "London" },
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  url: "https://linkedo.co.uk/london/seo",
}
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
}
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://linkedo.co.uk/locations" },
    { "@type": "ListItem", position: 3, name: "London", item: "https://linkedo.co.uk/london" },
    { "@type": "ListItem", position: 4, name: "SEO", item: "https://linkedo.co.uk/london/seo" },
  ],
}

export default function LondonSEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]).replace(/</g, "\\u003c") }} />
      {/* Hero */}
      <Section className="pt-8">
        <div className="max-w-4xl">
          <Chip variant="primary" className="mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            London, UK
          </Chip>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            SEO Services in <span className="text-gradient-primary">London</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Linkedo helps London businesses get found on Google, in the map pack and in AI search, with technical fixes,
            on-page optimisation, local SEO and content built around what your customers actually search for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <AnimatedButton size="lg">
                Get a Free London SEO Audit
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
            <Link href="/blog/why-not-ranking-on-google-2026">
              <AnimatedButton variant="secondary" size="lg">
                Why a Site Isn't Ranking
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* Challenges */}
      <Section eyebrow="London Challenges" title="Problems We Solve for London Businesses">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Local SEO Services */}
      <Section
        eyebrow="Local SEO"
        title="London-Focused SEO Services"
        description="Specialized strategies for ranking in London's competitive market."
        gradient
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localSeoServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section title="SEO Services for London Businesses"><div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>London search is crowded. Most commercial searches return national brands, directories and dozens of local competitors, and the map pack changes depending on where in London the searcher is standing. Good SEO in London means getting the basics right on every page, then building the local relevance and authority that competitors with bigger budgets don't always bother with.</p>
        <p>Our <Link href="/seo" className="text-primary underline">SEO service</Link> covers technical SEO (site speed, crawlability, schema and Core Web Vitals), on-page SEO (content, keyword mapping, internal links and meta tags), local SEO, link building and keyword research, with reporting you can follow without being an SEO specialist.</p>
        <p>Every London business starts from a different position. An established retailer may need better product and category pages, while a new consultancy might first need clear service pages and a site that search engines can crawl. We review the website before recommending priorities, rather than treating every business as if it needs the same monthly tasks.</p>
        <p>Our work connects each search topic with the page that should answer it. That helps customers find useful information and makes it easier to see whether changes are bringing relevant visits and enquiries. If your site already attracts visitors but not customers, we look at the pages and contact steps before recommending more content.</p>
        <p>For a wider digital strategy, explore our <Link href="/london" className="text-primary underline">digital marketing agency in London</Link> page. You can also <Link href="/contact" className="text-primary underline">contact Linkedo</Link> to discuss what is holding your website back.</p>
      </div></Section>

      <Section title="Local SEO Across London Boroughs and Business Districts"><div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>London isn't one market. Someone searching in Croydon sees different map results from someone in Shoreditch, and a firm serving the City of London and Canary Wharf competes differently from a trade business covering north London boroughs.</p>
        <p>We plan local SEO around the areas you actually serve: borough or district landing pages where they're useful, a Google Business Profile that matches your real service area, consistent citations, and content that answers questions people in those areas ask. Typical targets include Westminster, the City of London, Camden, Islington, Hackney, Shoreditch, Canary Wharf, Southwark, Croydon and the outer boroughs, depending on your business.</p>
        <p>A service-area business should describe where it really operates. A business with several genuine premises may need separate pages with useful details for each one. Neither approach calls for made-up offices, repeated town-name pages or claims about areas that the business cannot serve.</p>
        <p>We also check whether the business name, contact details, services and opening hours are consistent where customers find them. Local SEO is not only about adding a location to a title. It is about helping the right person find an accurate answer and take the next step.</p>
        <p>For other UK markets, see the <Link href="/locations" className="text-primary underline">locations</Link> we cover.</p>
      </div></Section>

      <Section title="SEO for Google and AI Search"><div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>More people now ask ChatGPT, Perplexity or Google's AI Overviews before they click a result. These tools lean on the same foundations as good SEO: clear, accurate pages, structured data, and content that answers a question directly. We build those foundations into your pages so they're easier for both search engines and AI assistants to understand and cite. Read more in our guide to <Link href="/blog/what-is-ai-seo" className="text-primary underline">what AI SEO is</Link>.</p>
        <p>AI citations and search rankings are not guaranteed. A useful first step is to check whether important pages answer customer questions clearly, identify the business accurately and link to relevant services. We can then track search visibility, enquiries and any observable AI referrals separately.</p>
      </div></Section>

      <Section title="Who Our London SEO Service Is For"><div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>B2B companies that want more organic leads, SaaS businesses targeting high-intent keywords, ecommerce stores competing for product and category searches, professional services firms building visibility for their expertise, and startups that need to establish search visibility.</p>
        <p>If you're unsure whether SEO is the right channel, we'll say so in your free audit. Sometimes <Link href="/google-ads" className="text-primary underline">Google Ads</Link> is the faster first step.</p>
        <p>We can also help teams that already have writers or developers. In that case, the priority may be an independent audit, a clear keyword map and practical guidance for the people who will implement the changes. The right scope depends on your website and resources.</p>
      </div></Section>

      <Section title="How Long SEO Takes in London"><div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
        <p>SEO isn't instant, and in a market as competitive as London it takes consistent work. Technical fixes and on-page changes can be made in the first weeks, but rankings usually move over months rather than days, depending on your site's starting point and how competitive your keywords are. No honest agency can guarantee first-page rankings, because no one controls Google's results. What we commit to is a clear plan, the work done every month, and transparent reporting.</p>
        <p>Early work often includes checking indexing, identifying pages that need improvement and agreeing which searches matter most. Later reviews compare changes in search visibility with the work completed and the enquiries received. We explain what can be measured and where the evidence is limited.</p>
        <p>There is no fixed timetable for every London business. A site with serious technical problems needs different work from a site that is already accessible but faces established competitors. We discuss priorities before work begins and keep the plan open to review.</p>
      </div></Section>

      {/* Services included */}
      <Section eyebrow="Our Services" title="What's Included in Our London SEO Service">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {includedServices.map(service => (
            <div key={service.title} className="p-6 rounded-xl bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Our Approach"
        title="How Our London SEO Process Works"
        description="A tailored process for London's unique market."
      >
        <ProcessTimeline steps={processSteps} />
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="London SEO Questions">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
          <div hidden aria-hidden="true">{faqs.map(f => <p key={f.question}>{f.answer}</p>)}</div>
          <p className="mt-6 text-sm text-muted-foreground">See our <Link href="/pricing" className="text-primary underline">pricing</Link> and all the <Link href="/locations" className="text-primary underline">locations</Link> we cover.</p>
        </div>
      </Section>

      {/* CTA */}
      <Section gradient>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get a Free London SEO Audit</h2>
          <p className="text-muted-foreground mb-8">
            Get a free SEO audit and discover how to outrank your London competitors.
          </p>
          <Link href="/contact">
            <AnimatedButton size="lg">
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </div>
  )
}
