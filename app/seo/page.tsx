"use client"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { StatCard } from "@/components/ui/stat-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const seoPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/seo#service",
  name: "SEO Services",
  alternateName: "Search Engine Optimisation",
  url: "https://linkedo.co.uk/seo",
  description: "SEO services for UK businesses: technical fixes, on-page optimisation, local SEO, content and white-hat link building, with monthly performance reports.",
  serviceType: "Search Engine Optimisation",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: ["Technical SEO", "On-Page SEO", "Local SEO", "Link Building", "Keyword Research", "SEO Analytics and Reporting", "AI Search Visibility"].map((name) => ({
      "@type": "Offer", itemOffered: { "@type": "Service", name },
    })),
  },
}

const faqs = [
  {
    "question": "How long does it take to see SEO results?",
    "answer": "It depends on where your site starts, how competitive your market is and how quickly changes can be made. Technical fixes can be picked up as soon as Google recrawls the pages, but rankings and enquiries usually build over months rather than weeks. After the audit we give you a realistic estimate for your site instead of a fixed promise."
  },
  {
    "question": "Do you guarantee first page rankings?",
    "answer": "No. No one can guarantee a number one ranking on Google, and Google's own advice is to be wary of anyone who does. What we can promise is a clear plan, white-hat work that follows Google's guidelines, and honest monthly reporting on rankings, traffic and enquiries."
  },
  {
    "question": "What's included in your monthly SEO service?",
    "answer": "Technical SEO monitoring and fixes, on-page and content optimisation, keyword tracking, competitor checks, link building through digital PR and useful content, and a monthly performance report. The exact mix depends on what the audit shows will help your site most."
  },
  {
    "question": "How do you approach link building?",
    "answer": "We earn links by creating content and resources other sites want to reference, and through digital PR and outreach to relevant publications. We don't buy links, swap links or place keyword-stuffed guest posts, because Google's spam policies treat those as link schemes that can harm your site."
  },
  {
    "question": "How much do SEO services cost?",
    "answer": "It depends on the size of your site, the competition in your market and how much work is needed each month. You can see our starting prices on our pricing page, and we'll confirm the scope after a free audit so you know exactly what you're paying for."
  },
  {
    "question": "Do you offer local SEO?",
    "answer": "Yes. For businesses that serve customers in a town, city or region, we work on your Google Business Profile, local landing pages, consistent business details across directories, and content built around the areas you cover."
  },
  {
    "question": "Can you help my business show up in AI search?",
    "answer": "Google says there are no extra requirements to appear in AI Overviews or AI Mode beyond normal SEO best practices. So we focus on the same foundations: pages Google can crawl and index, clear answers to the questions your customers ask, accurate structured data and an up-to-date Business Profile."
  },
  {
    "question": "Do you work with businesses across the UK?",
    "answer": "Yes. We work remotely with businesses across the UK, and we have dedicated pages for many cities and regions. Tell us where your customers are and we'll build the keyword and content plan around those areas."
  }
]

const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/seo#faq",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

const seoBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://linkedo.co.uk/seo" },
  ],
}

const whoIsFor = [
  "B2B companies looking to increase organic lead generation",
  "SaaS businesses wanting to rank for high-intent keywords",
  "E-commerce stores aiming to outrank competitors",
  "Professional services firms building thought leadership",
  "Startups needing to establish search visibility fast",
]

const seoServices = [
  {
    iconName: "Settings",
    title: "Technical SEO",
    description: "Site speed optimisation, crawlability fixes, schema markup and Core Web Vitals improvements.",
    href: "#",
  },
  {
    iconName: "FileText",
    title: "On-Page SEO",
    description: "Content optimisation, keyword mapping, internal linking and meta tag optimisation.",
    href: "#",
  },
  {
    iconName: "MapPin",
    title: "Local SEO",
    description: "Google Business Profile optimisation, local citations and location-based content strategy.",
    href: "#",
  },
  {
    iconName: "Link",
    title: "Link Building",
    description: "Digital PR, outreach and useful content that relevant sites want to link to. No paid or swapped links.",
    href: "#",
  },
  {
    iconName: "Search",
    title: "Keyword Research",
    description: "In-depth analysis to find high-value, low-competition keywords for your niche.",
    href: "#",
  },
  {
    iconName: "BarChart3",
    title: "SEO Analytics",
    description: "Custom dashboards, ranking tracking, and monthly performance reports.",
    href: "#",
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance and competitive landscape.",
  },
  {
    iconName: "PenTool",
    title: "Strategy Development",
    description: "Custom SEO roadmap with prioritised actions and target keywords.",
  },
  {
    iconName: "Rocket",
    title: "Implementation",
    description: "Carry out technical fixes, content optimisation and link building campaigns.",
  },
  {
    iconName: "TrendingUp",
    title: "Monitor & Optimise",
    description: "Track rankings, analyse results and refine the strategy.",
  },
]

const caseStudies = [
  {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    description: "How we helped a B2B SaaS company triple their organic traffic in 6 months.",
    image: "/saas-dashboard-analytics.jpg",
    tags: ["SEO", "Content Marketing"],
    href: "/case-studies/techflow",
  },
  {
    title: "Page 1 Rankings for 50+ Keywords",
    client: "Legal Partners LLP",
    description: "Dominating search results in a competitive legal services market.",
    image: "/legal-office-professional.jpg",
    tags: ["SEO", "Local SEO"],
    href: "/case-studies",
  },
]

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. You can expect to see initial improvements within 3-4 months, with significant results typically appearing after 6-12 months. The timeline depends on your industry competition, current site authority, and the aggressiveness of the strategy.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "No ethical SEO agency can guarantee specific rankings, as Google's algorithm considers hundreds of factors outside our control. What we do guarantee is following best practices, transparent reporting, and a data-driven approach that consistently delivers measurable improvements.",
  },
  {
    question: "What's included in your monthly SEO service?",
    answer:
      "Our monthly service includes technical SEO monitoring and fixes, content optimization, link building outreach, keyword tracking, competitor analysis, and detailed monthly reports. We also provide ongoing consultation and strategy adjustments based on performance data.",
  },
  {
    question: "How do you approach link building?",
    answer:
      "We focus on quality over quantity, building links through guest posting on relevant industry publications, digital PR campaigns, and creating linkable assets like original research and tools. We never engage in black-hat tactics that could harm your site.",
  },
]

export default function SEOServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={seoPageSchema} />
      <SchemaMarkup schema={seoFaqSchema} />
      <SchemaMarkup schema={seoBreadcrumbSchema} />
      {/* Hero */}
      <Section className="pt-8">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "SEO Services" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              SEO Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              SEO Services for UK Businesses
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Linkedo helps UK businesses get found on Google and in AI search, with technical fixes, on-page optimisation,
              local SEO and content built around what your customers actually search for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Get a Free SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/case-studies">
                <AnimatedButton variant="secondary" size="lg">
                  View Case Studies
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
              <Image
                src="/seo-ranking-dashboard-with-keyword-positions-and-t.jpg"
                alt="SEO Performance Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="Technical" label="Crawl, speed and schema fixes first" />
              <StatCard value="On-page" label="Titles, content and internal links" />
              <StatCard value="Local" label="Google Business Profile and local pages" />
              <StatCard value="Reporting" label="Clear monthly performance reports" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section eyebrow="Who This Is For" title="Is SEO Right for Your Business?">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8"
        >
          <ul className="space-y-4">
            {whoIsFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>

      {/* What We Do */}
      <Section
        eyebrow="What We Do"
        title="Comprehensive SEO Services"
        description="Everything we do to help your site earn more visibility in search."
        gradient
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Keyword Strategy Visualization Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Keyword Strategy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Target the Right Keywords</h2>
            <p className="text-muted-foreground mb-6">
              Our keyword research uncovers high-value opportunities your competitors are missing, helping you rank for
              terms that drive qualified traffic.
            </p>
            <ul className="space-y-3">
              {[
                "Search volume analysis",
                "Keyword difficulty scoring",
                "Search intent mapping",
                "Competitive gap analysis",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/keyword-research-spreadsheet-with-search-volume-an.jpg" alt="Keyword Research Analysis" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Visual Analytics Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Data-Driven Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Track Your Growth with Real-Time Analytics
            </h2>
            <p className="text-muted-foreground mb-6">
              Our custom dashboards give you complete visibility into your SEO performance, including keyword rankings,
              traffic trends, and conversion metrics.
            </p>
            <ul className="space-y-3">
              {["Real-time ranking tracking", "Competitor analysis", "Traffic source breakdown", "ROI reporting"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-card/50 border border-border/50 p-6 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Organic Traffic Growth</span>
                <span className="text-primary font-semibold">Example report</span>
              </div>
              <div className="h-40 flex items-end justify-around gap-2 px-2">
                {[30, 35, 42, 38, 55, 62, 58, 75, 82, 78, 90, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-cyan-400"
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Dec</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Content Optimization Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/content-optimization-editor-showing-seo-improvemen.jpg" alt="Content Optimization" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Content Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Optimise Every Page for Maximum Impact
            </h2>
            <p className="text-muted-foreground mb-6">
              We don't just create content—we optimise it to rank higher, engage readers and help visitors take the next step.
            <p className="text-muted-foreground mt-4">
              Try our free <Link href="/meta-title-generator" className="text-primary underline underline-offset-4">meta title generator</Link> and{" "}
              <Link href="/meta-description-generator" className="text-primary underline underline-offset-4">meta description generator</Link>.
            </p>
            </p>
            <ul className="space-y-3">
              {[
                "Title and meta optimisation",
                "Header hierarchy improvement",
                "Internal linking strategy",
                "Content gap filling",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section
        eyebrow="Our Process"
        title="How We Deliver SEO Results"
        description="A clear four-step process, so you always know what we're working on and why."
      >
        <ProcessTimeline steps={processSteps} />
      </Section>

      <Section eyebrow="Search fundamentals" title="How Google Decides Who Ranks">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>Google ranks pages it can crawl and index, that answer the search clearly, and that people and other websites find genuinely useful. Its <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">Search Essentials</a> set out the technical requirements, the spam policies to avoid and the key best practices, and that's the rulebook we work to.</p>
          <p>In practice that means three things. First, Google has to be able to find and understand your pages: no blocked sections, broken links or duplicate versions of the same page. Second, each important page needs to match what people are searching for, with a clear title, helpful content and the details a customer needs to make a decision. Third, your site needs real signals of trust, such as an accurate Google Business Profile, consistent business details and links from relevant sites. Shortcuts like buying links or publishing pages stuffed with keywords break <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">Google's spam policies</a> and can lose you rankings, so we don't use them.</p>
        </div>
      </Section>
      <Section eyebrow="AI search" title="SEO for AI Search and AI Overviews">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>More searches now show an AI Overview or an AI Mode answer before the usual results. Google says there are <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">no extra requirements to appear in these AI features</a> beyond normal SEO best practices, and no special files or schema are needed. So the work that helps you rank also helps you get cited: pages that can be crawled and indexed, short and direct answers to the questions your customers ask, accurate structured data and an up-to-date Business Profile.</p>
          <p>We check how your key pages show up for the questions your customers ask, tighten the answers on those pages and track the results in Search Console. Read more in our guide to <Link href="/blog/what-is-ai-seo" className="text-primary underline underline-offset-4">what AI SEO means for UK small businesses</Link>.</p>
        </div>
      </Section>
      <Section eyebrow="Planning your SEO" title="What Affects the Cost of SEO">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>SEO pricing depends on the work your site actually needs, not on a fixed package. The main factors are:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Size and condition of your site:</strong> a small brochure site with a few technical issues needs less work than a large site with hundreds of pages to fix.</li>
            <li><strong>Competition:</strong> ranking for a national, high-competition term takes more content and authority than ranking in one town.</li>
            <li><strong>Local or national focus:</strong> local SEO centres on your Business Profile and area pages; national SEO needs broader content and links.</li>
            <li><strong>How much content is needed:</strong> new service pages, location pages or guides add to the monthly workload.</li>
          </ul>
          <p>You can see our starting prices on the <Link href="/pricing" className="text-primary underline underline-offset-4">pricing page</Link>. After a <Link href="/contact" className="text-primary underline underline-offset-4">free SEO audit</Link> we'll confirm the scope in writing, so you know what you're paying for each month.</p>
        </div>
      </Section>
      <Section eyebrow="Choosing an agency" title="How to Choose an SEO Agency">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>Whoever you work with, ask them to explain what they'll change on your site, why, and how they'll measure it. A good SEO audit gives you realistic estimates and the work involved, not promises. Google's own advice on <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">hiring an SEO</a> is a useful checklist.</p>
          <p>Red flags to watch for:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Guaranteed rankings.</strong> No one can guarantee a number one position on Google.</li>
            <li><strong>Claims of a "special relationship" with Google</strong> or "priority submission".</li>
            <li><strong>Secrecy.</strong> If an agency won't tell you what links they're building or what they're changing, walk away.</li>
            <li><strong>Cheap bulk links.</strong> Paid links, link networks and spammy guest posts can lead to ranking losses.</li>
            <li><strong>Reports with no business metrics.</strong> Rankings matter, but you should also see traffic and enquiries.</li>
          </ul>
          <p>If your site isn't showing up at all, our article on <Link href="/blog/why-not-ranking-on-google-2026" className="text-primary underline underline-offset-4">why your business is not ranking on Google</Link> covers the most common causes.</p>
        </div>
      </Section>

      {/* Case Studies */}
      <Section
        eyebrow="Results"
        title="SEO Success Stories"
        description="See how we've helped businesses like yours achieve remarkable growth."
        gradient
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="SEO Questions Answered">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} forceMount />
        </div>
      </Section>

      {/* CTA */}
      <Section gradient>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Improve Your Rankings?</h2>
          <p className="text-muted-foreground mb-8">
            Get a free SEO audit and discover exactly what's holding your website back from ranking higher.
          </p>
          <Link href="/contact">
            <AnimatedButton size="lg">
              Get Your Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>

      {/* Related Locations */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <RelatedLinks
            title="Available in These UK Locations"
            links={[
              { label: "London", href: "/london" },
              { label: "Manchester", href: "/manchester" },
              { label: "Birmingham", href: "/birmingham" },
              { label: "Bristol", href: "/bristol" },
              { label: "View All Locations", href: "/locations" },
            ]}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Also see <Link href="/london/seo" className="text-primary underline underline-offset-4">SEO services in London</Link>.
          </p>
        </div>
      </Section>
    </div>
  )
}
