"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { StatCard } from "@/components/ui/stat-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Image from "next/image"
import { motion } from "framer-motion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const googleAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/google-ads#service",
  name: "Google Ads Management",
  url: "https://linkedo.co.uk/google-ads",
  description:
    "Expert Google Ads management that delivers measurable results and maximises your advertising budget with strategic PPC campaigns.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Pay-Per-Click Advertising",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Google Ads Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Campaign Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopping Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Display Advertising" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Max Campaigns" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Ads" } },
    ],
  },
}

const googleAdsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I spend on Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget depends on your industry, competition, and goals. We typically recommend starting with at least £1,500-£3,000/month for meaningful results, but we can work with various budgets and scale as we see success.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll start seeing clicks and data immediately, but meaningful results typically take 2-3 months as we optimise campaigns based on performance data. Some clients see positive ROI within the first month.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage Shopping and Display ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we manage all types of Google Ads campaigns including Search, Shopping, Display, Video (YouTube), and Performance Max campaigns. We'll recommend the best mix for your goals.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in your Google Ads management service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full campaign setup, keyword research, ad copywriting, bid management, landing page recommendations, A/B testing, monthly reporting, and ongoing optimisation. We handle everything to maximise your ROI.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure Google Ads success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track metrics that matter to your business: conversions, cost per acquisition, return on ad spend (ROAS), and ultimately revenue generated. You'll receive detailed monthly reports showing campaign performance.",
      },
    },
  ],
}

const googleAdsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://linkedo.co.uk/google-ads" },
  ],
}

const serviceFeatures = [
  {
    iconName: "Target",
    title: "Strategic Campaign Setup",
    description: "Data-driven keyword research and campaign structure for maximum ROI.",
  },
  {
    iconName: "DollarSign",
    title: "Budget Optimization",
    description: "Smart bidding strategies to maximize conversions within your budget.",
  },
  {
    iconName: "FileText",
    title: "Compelling Ad Copy",
    description: "High-converting ad copy that resonates with your target audience.",
  },
  {
    iconName: "MousePointer",
    title: "Landing Page Optimization",
    description: "Optimize landing pages for better Quality Scores and conversions.",
  },
  {
    iconName: "BarChart",
    title: "Performance Tracking",
    description: "Detailed reporting and analytics to measure campaign success.",
  },
  {
    iconName: "RefreshCw",
    title: "Continuous Optimization",
    description: "Ongoing A/B testing and refinements to improve results over time.",
  },
]

const processSteps = [
  {
    iconName: "Target",
    title: "Audit & Strategy",
    description: "Analyze your business, competitors, and develop a winning Google Ads strategy.",
  },
  {
    iconName: "Settings",
    title: "Campaign Setup",
    description: "Build optimized campaigns with the right structure, keywords, and targeting.",
  },
  {
    iconName: "Rocket",
    title: "Launch & Monitor",
    description: "Launch campaigns and closely monitor initial performance metrics.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimize & Scale",
    description: "Continuously improve and scale successful campaigns for better ROI.",
  },
]

const stats = [
  { label: "Average ROAS", value: "4.2x" },
  { label: "Cost per Lead Reduction", value: "-45%" },
  { label: "Click-Through Rate", value: "+180%" },
  { label: "Quality Score", value: "8.5/10" },
]

const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "Budget depends on your industry, competition, and goals. We typically recommend starting with at least $1,500-$3,000/month for meaningful results, but we can work with various budgets and scale as we see success.",
  },
  {
    question: "How long before I see results?",
    answer:
      "You'll start seeing clicks and data immediately, but meaningful results typically take 2-3 months as we optimize campaigns based on performance data. Some clients see positive ROI within the first month.",
  },
  {
    question: "Do you manage Shopping and Display ads?",
    answer:
      "Yes, we manage all types of Google Ads campaigns including Search, Shopping, Display, Video (YouTube), and Performance Max campaigns. We'll recommend the best mix for your goals.",
  },
  {
    question: "What's included in your management service?",
    answer:
      "Full campaign setup, keyword research, ad copywriting, bid management, landing page recommendations, A/B testing, monthly reporting, and ongoing optimization. We handle everything to maximize your ROI.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track metrics that matter to your business: conversions, cost per acquisition, return on ad spend (ROAS), and ultimately revenue generated. You'll receive detailed monthly reports showing campaign performance.",
  },
]

export default function GoogleAdsPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={googleAdsServiceSchema} />
      <SchemaMarkup schema={googleAdsFaqSchema} />
      <SchemaMarkup schema={googleAdsBreadcrumbSchema} />
      {/* Hero Image Section */}
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Google Ads" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Google Ads Management
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Drive Qualified Leads with <span className="text-gradient-primary">Google Ads</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert Google Ads management that delivers measurable results and maximizes your advertising budget.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/google-ads-dashboard-with-campaign-metrics-and-per.jpg"
              alt="Google Ads Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Campaign Performance Visualization */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/google-ads-campaign-structure-diagram-with-ad-grou.jpg"
              alt="Campaign Structure"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Data-Driven Campaign Management</h2>
            <p className="text-muted-foreground mb-6">
              Our Google Ads experts use advanced strategies and continuous optimization to maximize your return on ad
              spend.
            </p>
            <ul className="space-y-3">
              {[
                "Smart bidding strategies",
                "A/B testing for ad copy",
                "Landing page optimization",
                "Negative keyword refinement",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* High-Converting Ad Copy Section */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              High-Converting Ad Copy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Words That Drive Clicks & Conversions
            </h2>
            <p className="text-muted-foreground mb-6">
              Our expert copywriters create compelling ad copy that stops searchers in their tracks and drives qualified
              clicks to your site.
            </p>
            <ul className="space-y-3">
              {[
                "Persuasive headlines that grab attention",
                "Benefit-focused descriptions",
                "Strong call-to-actions",
                "A/B testing for continuous improvement",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
            <Image src="/google-ads-interface-showing-multiple-ad-variation.jpg" alt="Ad Copy Performance" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Conversion Tracking Visualization Section */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/conversion-tracking-dashboard-with-funnel-visualiz.jpg" alt="Conversion Tracking" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Transparent Reporting
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Track Every Dollar You Spend</h2>
            <p className="text-muted-foreground mb-6">
              Get complete visibility into campaign performance with custom dashboards that show exactly how your budget
              drives revenue.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time performance tracking",
                "Conversion funnel analysis",
                "Cost per acquisition monitoring",
                "ROAS optimization insights",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section title="Who This Is For" className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">B2B Companies</h3>
            <p className="text-muted-foreground text-sm">
              Generate qualified leads and fill your sales pipeline with decision-makers actively searching for your
              services.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Brands</h3>
            <p className="text-muted-foreground text-sm">
              Drive sales and revenue with Shopping ads and high-intent search campaigns that convert.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Local Businesses</h3>
            <p className="text-muted-foreground text-sm">
              Dominate local searches and attract nearby customers ready to buy your products or services.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section eyebrow="What We Do" title="Our Google Ads Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceFeatures.map((feature) => (
            <ServiceCard
              key={feature.title}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Our Process" title="How We Deliver Results" className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Scale Your Google Ads?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Get a free Google Ads audit and discover opportunities to improve your campaign performance.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Free Ads Audit
          </AnimatedButton>
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
    </MainShell>
  )
}
