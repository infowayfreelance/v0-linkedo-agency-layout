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
  name: "SEO Optimisation Services",
  alternateName: "Search Engine Optimisation",
  url: "https://linkedo.co.uk/seo",
  description:
    "Data-driven SEO strategies that improve your search rankings, drive organic traffic, and generate qualified leads for your business.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Search Engine Optimisation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Page SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keyword Research" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Analytics" } },
    ],
  },
}

const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term strategy. You can expect to see initial improvements within 3-4 months, with significant results typically appearing after 6-12 months. The timeline depends on your industry competition, current site authority, and the aggressiveness of the strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical SEO agency can guarantee specific rankings, as Google's algorithm considers hundreds of factors outside our control. What we do guarantee is following best practices, transparent reporting, and a data-driven approach that consistently delivers measurable improvements.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in your monthly SEO service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our monthly service includes technical SEO monitoring and fixes, content optimisation, link building outreach, keyword tracking, competitor analysis, and detailed monthly reports. We also provide ongoing consultation and strategy adjustments based on performance data.",
      },
    },
    {
      "@type": "Question",
      name: "How do you approach link building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on quality over quantity, building links through guest posting on relevant industry publications, digital PR campaigns, and creating linkable assets like original research and tools. We never engage in black-hat tactics that could harm your site.",
      },
    },
  ],
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
    description: "Site speed optimization, crawlability fixes, schema markup, and Core Web Vitals improvements.",
    href: "#",
  },
  {
    iconName: "FileText",
    title: "On-Page SEO",
    description: "Content optimization, keyword mapping, internal linking, and meta tag optimization.",
    href: "#",
  },
  {
    iconName: "MapPin",
    title: "Local SEO",
    description: "Google Business Profile optimization, local citations, and location-based content strategy.",
    href: "#",
  },
  {
    iconName: "Link",
    title: "Link Building",
    description: "Strategic outreach, guest posting, and digital PR to build high-authority backlinks.",
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
    description: "Custom SEO roadmap with prioritized actions and target keywords.",
  },
  {
    iconName: "Rocket",
    title: "Implementation",
    description: "Execute technical fixes, content optimizations, and link building campaigns.",
  },
  {
    iconName: "TrendingUp",
    title: "Monitor & Optimize",
    description: "Track rankings, analyze results, and continuously refine the strategy.",
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
              Search Engine Optimization <span className="text-gradient-primary">(SEO)</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Data-driven SEO strategies that improve your search rankings, drive organic traffic, and generate
              qualified leads for your business.
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
              <StatCard value="300" suffix="%" label="Average Traffic Increase" />
              <StatCard value="50" suffix="+" label="Keywords Page 1" />
              <StatCard value="2.5x" label="Lead Generation Lift" />
              <StatCard value="6" label="Months to Results" />
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
        description="Everything you need to dominate search results in your industry."
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
                <span className="text-primary font-semibold">+156%</span>
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
              Optimize Every Page for Maximum Impact
            </h2>
            <p className="text-muted-foreground mb-6">
              We don't just create content—we optimize it to rank higher, engage readers, and convert visitors into
              customers.
            </p>
            <ul className="space-y-3">
              {[
                "Title and meta optimization",
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
        description="A proven methodology refined over hundreds of successful campaigns."
      >
        <ProcessTimeline steps={processSteps} />
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
          <FAQAccordion items={faqs} />
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
        </div>
      </Section>
    </div>
  )
}
