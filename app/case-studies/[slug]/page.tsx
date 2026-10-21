import { Section } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Building2, Calendar } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// This would normally come from a CMS or database
const caseStudyData = {
  techflow: {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    location: "San Francisco, USA",
    industry: "B2B SaaS",
    duration: "6 months",
    services: ["SEO", "Content Marketing", "Technical SEO"],
    heroImage: "/saas-dashboard-analytics-dark-theme.jpg",
    headlineStat: { value: "300", suffix: "%", label: "Traffic Increase" },
    about:
      "TechFlow is a B2B SaaS company providing project management solutions for enterprise teams. They needed to increase organic visibility to reduce customer acquisition costs and compete with established players in the market.",
    challenge:
      "TechFlow was struggling to rank for competitive keywords in the project management space. Their domain authority was low, content was thin, and technical SEO issues were holding them back from reaching their potential.",
    approach:
      "We conducted a comprehensive SEO audit and developed a 6-month roadmap focusing on technical fixes, content expansion, and strategic link building. Our approach prioritized high-intent keywords with strong commercial potential.",
    implementation: [
      "Fixed 150+ technical SEO issues including site speed, crawlability, and structured data",
      "Developed a content hub strategy with 50+ new pages targeting long-tail keywords",
      "Built 80+ high-authority backlinks through guest posting and digital PR",
      "Optimized existing pages for featured snippets and People Also Ask boxes",
    ],
    results: [
      { value: "300", suffix: "%", label: "Organic Traffic Increase" },
      { value: "50", suffix: "+", label: "Keywords on Page 1" },
      { value: "2.5x", label: "Lead Generation Lift" },
      { value: "45", suffix: "%", label: "Reduction in CAC" },
    ],
    testimonial: {
      quote:
        "Linkedo completely transformed our organic presence. We went from being invisible to ranking on page 1 for our most important keywords. The impact on our pipeline has been tremendous.",
      author: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow",
      image: "/professional-woman-headshot.png",
    },
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudyData[slug as keyof typeof caseStudyData]

  if (!study) return {}

  const description = `${study.client}: ${study.headlineStat.value}${study.headlineStat.suffix ?? ""} ${study.headlineStat.label.toLowerCase()} through ${study.services.join(", ")}.`

  return {
    title: `${study.title} | ${study.client} Case Study | Linkedo`,
    description,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${study.title} | ${study.client} Case Study`,
      description,
      url: `/case-studies/${slug}`,
      images: [{ url: study.heroImage, alt: `${study.client} case study` }],
      type: "article",
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudyData[slug as keyof typeof caseStudyData]

  if (!study) notFound()

  const caseStudyBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://linkedo.co.uk/case-studies" },
      { "@type": "ListItem", position: 3, name: study.client, item: `https://linkedo.co.uk/case-studies/${slug}` },
    ],
  }

  const serviceHrefMap: Record<string, string> = {
    SEO: "/seo",
    "Technical SEO": "/seo",
    "SEO Optimisation": "/seo",
    "Content Marketing": "/consulting",
    "Google Ads": "/google-ads",
    PPC: "/google-ads",
    "Meta Ads": "/meta-ads",
    "Web Development": "/web-development",
    "Website Development": "/web-development",
    Branding: "/branding",
  }

  const relatedServiceLinks: { label: string; href: string }[] = []
  const seenHrefs = new Set<string>()
  for (const service of study.services) {
    const href = serviceHrefMap[service]
    if (href && !seenHrefs.has(href)) {
      seenHrefs.add(href)
      relatedServiceLinks.push({ label: service, href })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={caseStudyBreadcrumbSchema} />
      {/* Hero */}
      <Section className="pt-8">
        <Breadcrumbs
          items={[{ label: "Case Studies", href: "/case-studies" }, { label: study.client }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {study.services.map((service) => (
                <Badge key={service} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">{study.title}</h1>
            <p className="text-primary font-medium text-lg mb-6">{study.client}</p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {study.location}
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {study.industry}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {study.duration}
              </div>
            </div>

            {/* Headline stat */}
            <div className="inline-block p-6 rounded-xl bg-primary/10 border border-primary/30">
              <div className="text-4xl font-bold text-primary">
                {study.headlineStat.value}
                {study.headlineStat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{study.headlineStat.label}</div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image src={study.heroImage || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
          </div>
        </div>
      </Section>

      {/* About the Client */}
      <Section eyebrow="About the Client" title={study.client}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">{study.about}</p>
        </div>
      </Section>

      {/* Challenge */}
      <Section eyebrow="The Challenge" title="What They Were Facing" gradient>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
        </div>
      </Section>

      {/* Approach */}
      <Section eyebrow="Our Approach" title="How We Solved It">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">{study.approach}</p>
        </div>
      </Section>

      {/* Implementation */}
      <Section eyebrow="Implementation" title="What We Did">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {study.implementation.map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">{i + 1}</span>
                </div>
                <p className="text-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Results */}
      <Section eyebrow="Results" title="The Outcome" gradient>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {study.results.map((result, i) => (
            <StatCard key={i} {...result} />
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section eyebrow="Testimonial" title="What They Said">
        <div className="max-w-2xl mx-auto">
          <TestimonialCard {...study.testimonial} />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help your business grow with a customized strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <AnimatedButton size="lg">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
            <Link href="/case-studies">
              <AnimatedButton variant="secondary" size="lg">
                View More Case Studies
              </AnimatedButton>
            </Link>
          </div>
        </div>

        <RelatedLinks title="Related Services" links={relatedServiceLinks} />
      </Section>
    </div>
  )
}
