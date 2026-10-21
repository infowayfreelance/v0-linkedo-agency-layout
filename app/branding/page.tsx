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

const brandingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/branding#service",
  name: "Branding Services",
  url: "https://linkedo.co.uk/branding",
  description:
    "Strategic branding that creates memorable impressions, builds lasting connections with your audience, and differentiates your business.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Branding & Identity",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Branding Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Guidelines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Refresh" } },
    ],
  },
}

const brandingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Branding", item: "https://linkedo.co.uk/branding" },
  ],
}

const services = [
  {
    iconName: "Palette",
    title: "Brand Identity",
    description: "Logo design, color palettes, and visual identity systems that represent your brand.",
  },
  {
    iconName: "FileText",
    title: "Brand Strategy",
    description: "Define your brand positioning, messaging, and unique value proposition.",
  },
  {
    iconName: "Package",
    title: "Brand Guidelines",
    description: "Comprehensive brand books that ensure consistency across all touchpoints.",
  },
  {
    iconName: "Sparkles",
    title: "Brand Refresh",
    description: "Modernize your existing brand while maintaining recognition and equity.",
  },
]

export default function BrandingPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={brandingServiceSchema} />
      <SchemaMarkup schema={brandingBreadcrumbSchema} />
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Branding" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Branding Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Build a Brand <span className="text-gradient-primary">That Stands Out</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Strategic branding that creates memorable impressions and builds lasting connections with your audience.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/brand-identity-design-showcase-with-logo--colors--.jpg"
              alt="Brand Identity Showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
            <Image
              src="/brand-guidelines-book-with-color-palette-and-logo-.jpg"
              alt="Brand Guidelines"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Comprehensive Identity
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Every Detail Matters</h2>
            <p className="text-muted-foreground mb-6">
              We craft cohesive brand identities that work seamlessly across all touchpoints, from digital to print.
            </p>
            <ul className="space-y-3">
              {[
                "Logo design & variations",
                "Color palette & typography",
                "Brand voice & messaging",
                "Visual asset library",
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

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Brand Applications
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Consistency Across All Touchpoints</h2>
            <p className="text-muted-foreground mb-6">
              Your brand identity should work seamlessly across every medium—from digital to print, from web to
              packaging.
            </p>
            <ul className="space-y-3">
              {[
                "Business cards & stationery",
                "Social media templates",
                "Email signatures & templates",
                "Presentation decks",
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
            <Image src="/brand-identity-mockup-showing-business-cards--lett.jpg" alt="Brand Applications" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/brand-strategy-framework-diagram-with-positioning-.jpg" alt="Brand Strategy Framework" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Foundation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">More Than Just a Logo</h2>
            <p className="text-muted-foreground mb-6">
              Great brands start with strategy. We define your positioning, messaging, and unique value proposition
              before designing visuals.
            </p>
            <ul className="space-y-3">
              {[
                "Brand positioning workshops",
                "Competitor analysis",
                "Target audience research",
                "Messaging framework development",
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

      <Section title="Our Branding Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your Brand?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a brand identity that captures your essence and resonates with your audience.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Start Your Brand Project
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
