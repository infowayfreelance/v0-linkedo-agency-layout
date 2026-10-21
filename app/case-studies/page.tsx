"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { FilterBar } from "@/components/ui/filter-bar"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudiesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://linkedo.co.uk/case-studies" },
  ],
}

const filters = ["All", "SEO", "Ads", "Web", "Security"]

const caseStudies = [
  {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    description:
      "How we helped a B2B SaaS company triple their organic traffic in 6 months through strategic SEO and content marketing.",
    image: "/saas-dashboard-analytics-dark.jpg",
    tags: ["SEO", "Content Marketing"],
    href: "/case-studies/techflow",
    category: "SEO",
  },
  {
    title: "5x ROAS on Google Ads",
    client: "Manufacturing Co.",
    description:
      "Achieving exceptional return on ad spend for a manufacturing company entering new markets with targeted PPC campaigns.",
    image: "/manufacturing-industrial-factory.jpg",
    tags: ["Google Ads", "Lead Generation"],
    href: "/case-studies",
    category: "Ads",
  },
  {
    title: "Complete Digital Transformation",
    client: "Legal Partners LLP",
    description:
      "Redesigning the digital presence of a law firm to generate 200+ qualified leads monthly through web and SEO.",
    image: "/law-firm-office-professional.png",
    tags: ["Web Development", "SEO"],
    href: "/case-studies",
    category: "Web",
  },
  {
    title: "E-Commerce Revenue Up 180%",
    client: "Fashion Retailer",
    description: "Scaling an online fashion store through Meta Ads optimization and conversion rate improvements.",
    image: "/fashion-ecommerce-store.png",
    tags: ["Meta Ads", "E-Commerce"],
    href: "/case-studies",
    category: "Ads",
  },
  {
    title: "Security Breach Prevention",
    client: "FinServ Corp",
    description:
      "How our security audit and remediation protected a financial services firm from potential data breaches.",
    image: "/cybersecurity-protection-shield.png",
    tags: ["Security", "Audit"],
    href: "/case-studies",
    category: "Security",
  },
  {
    title: "Local SEO Dominance",
    client: "London Clinic",
    description:
      "Achieving top 3 Google Maps rankings across 15+ medical service keywords in competitive London market.",
    image: "/medical-clinic-interior-modern.jpg",
    tags: ["Local SEO", "Healthcare"],
    href: "/case-studies",
    category: "SEO",
  },
]

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredStudies = activeFilter === "All" ? caseStudies : caseStudies.filter((s) => s.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={caseStudiesBreadcrumbSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <Breadcrumbs items={[{ label: "Case Studies" }]} className="mb-6" />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Real Projects, <span className="text-gradient-primary">Real Results</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Dive deep into how we've helped businesses like yours achieve remarkable growth through strategic digital
              marketing.
            </p>
          </div>
        </Section>

        {/* Filter + List */}
        <Section>
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            className="justify-center mb-12"
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} className="md:flex-row" />
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
