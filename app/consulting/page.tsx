"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Image from "next/image"
import { motion } from "framer-motion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const consultingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/consulting#service",
  name: "Digital Marketing Consulting",
  url: "https://linkedo.co.uk/consulting",
  description:
    "Strategic digital marketing consulting to help you make informed decisions, accelerate digital growth, and build winning online strategies.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Marketing Consulting",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Strategy Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Audits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics Setup & Reporting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Workshops" } },
    ],
  },
}

const consultingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Consulting", item: "https://linkedo.co.uk/consulting" },
  ],
}

const services = [
  {
    iconName: "Lightbulb",
    title: "Digital Strategy",
    description: "Comprehensive digital marketing strategies aligned with your business goals.",
  },
  {
    iconName: "Search",
    title: "SEO Audits",
    description: "In-depth technical and content audits with actionable recommendations.",
  },
  {
    iconName: "BarChart",
    title: "Analytics Setup",
    description: "Implement tracking and analytics to measure what matters to your business.",
  },
  {
    iconName: "Users",
    title: "Training & Workshops",
    description: "Empower your team with digital marketing knowledge and best practices.",
  },
]

export default function ConsultingPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={consultingServiceSchema} />
      <SchemaMarkup schema={consultingBreadcrumbSchema} />
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Consulting" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Consulting Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Expert Digital Marketing <span className="text-gradient-primary">Guidance</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Strategic consulting to help you make informed decisions and accelerate your digital growth.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/professional-business-consulting-meeting-with-stra.jpg"
              alt="Consulting Strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Planning
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Your Digital Growth Roadmap</h2>
            <p className="text-muted-foreground mb-6">
              We analyze your current situation, identify opportunities, and create actionable strategies for growth.
            </p>
            <ul className="space-y-3">
              {[
                "Competitive analysis",
                "Market opportunity assessment",
                "Channel strategy planning",
                "Performance benchmarking",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/digital-marketing-strategy-roadmap-with-timeline-a.jpg"
              alt="Strategy Roadmap"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Competitive Intelligence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Understand Your Market Position</h2>
            <p className="text-muted-foreground mb-6">
              We analyze your competitors' strategies to identify gaps, opportunities, and winning tactics you can
              leverage.
            </p>
            <ul className="space-y-3">
              {[
                "Competitor SEO analysis",
                "Ad spend & creative research",
                "Market share assessment",
                "Differentiation opportunities",
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
            <Image src="/competitive-analysis-matrix-chart-showing-market-p.jpg" alt="Competitive Analysis" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/analytics-dashboard-with-kpis--traffic-sources--an.jpg" alt="Analytics Dashboard" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Measurement & Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Data That Drives Decisions</h2>
            <p className="text-muted-foreground mb-6">
              We set up comprehensive tracking and analytics to measure what matters and optimize for continuous
              improvement.
            </p>
            <ul className="space-y-3">
              {[
                "Google Analytics 4 setup",
                "Custom dashboard creation",
                "KPI definition & tracking",
                "Monthly performance reviews",
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

      <Section title="What We Offer" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Strategic Guidance?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Book a consultation to discuss your digital marketing challenges and opportunities.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Book a Consultation
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
