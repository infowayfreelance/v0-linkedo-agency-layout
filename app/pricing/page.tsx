import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"
import { PricingSectionComponent, pricingPlans } from "@/components/sections/pricing-section"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Target, Users, Layers, MessageCircle, MapPin, FileSearch, PenTool, Rocket, TrendingUp } from "lucide-react"

const title = "Digital Marketing Pricing UK | SEO, PPC & Web Development | Linkedo"
const description =
  "Clear, upfront pricing for website development, SEO, Google Ads, Meta Ads, branding, and consulting from a UK-registered digital marketing agency. No hidden fees."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://linkedo.co.uk/pricing" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/pricing",
    siteName: "Linkedo",
    images: [{ url: "https://linkedo.co.uk/og-image.jpg", width: 1024, height: 1024, alt: "Linkedo Pricing" }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-image.jpg"],
  },
}

const pricingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://linkedo.co.uk/pricing" },
  ],
}

// Offer data reflects only the approved prices. Billing period (priceSpecification)
// is included only for SEO, the one service with a confirmed monthly billing term.
const pricingOffersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: pricingPlans.map((plan, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: plan.name,
      url: `https://linkedo.co.uk/${plan.slug}`,
      provider: { "@id": "https://linkedo.co.uk/#organization" },
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: plan.price.replace("£", ""),
        url: `https://linkedo.co.uk/contact?service=${plan.slug}`,
        ...(plan.period === "/month"
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "GBP",
                price: plan.price.replace("£", ""),
                billingDuration: "P1M",
              },
            }
          : {}),
      },
    },
  })),
}

const whyChooseUs = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every strategy we build is tied to measurable outcomes — more traffic, more leads, more revenue. We focus on what moves the needle for your business, not vanity metrics.",
  },
  {
    icon: Users,
    title: "B2B & B2C Expertise",
    description:
      "Whether you're targeting consumers or corporate clients, we understand both buying journeys and tailor our strategies accordingly — so the right message reaches the right audience.",
  },
  {
    icon: Layers,
    title: "Full-Service Under One Roof",
    description:
      "From website development and SEO to paid ads, branding, and consulting — you get a complete digital team without the cost of hiring one. No agency hopping, no miscommunication.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "You'll always know what we're working on, why, and what results it's delivering. Regular reports, clear timelines, and a dedicated point of contact — always.",
  },
  {
    icon: MapPin,
    title: "Built for UK Markets",
    description:
      "We understand the UK digital landscape — consumer behaviour, competitive industries, and local search trends — giving your business a genuine edge over generic offshore agencies.",
  },
]

const howPricingWorks = [
  {
    icon: FileSearch,
    title: "Tell Us What You Need",
    description:
      "Pick a service above or get in touch directly. We'll ask a few questions about your business and goals so we understand exactly what you're looking for.",
  },
  {
    icon: PenTool,
    title: "We Scope Your Project",
    description:
      "The prices shown are our starting rates for the service as described. If your project needs a different scope — more pages, more ad accounts, a bigger campaign — we'll send a tailored quote before any work begins.",
  },
  {
    icon: Rocket,
    title: "We Get Started",
    description:
      "Once you've approved the scope and price, we kick off the work. No long-term lock-in contracts, no hidden fees — just what was agreed.",
  },
  {
    icon: TrendingUp,
    title: "You Stay Informed",
    description:
      "For ongoing services like SEO, you'll receive regular reporting so you always know what's being done and what it's achieving.",
  },
]

const faqs = [
  {
    question: "Are these your final prices, or will I need to pay more?",
    answer:
      "The prices shown are our starting rates for the service as described. Most projects fit within this, but if your requirements are larger or more complex than a standard scope, we'll always confirm a tailored quote with you before any work begins — no surprise invoices.",
  },
  {
    question: "Why is SEO priced per month but the other services aren't?",
    answer:
      "SEO is an ongoing process — rankings and traffic are built and maintained over time, so it's billed monthly. Services like web development, branding, Google Ads setup, Meta Ads setup, and consulting are typically scoped and delivered as a single project, so we quote them as a one-off price for the agreed work.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We don't lock clients into long-term contracts. For ongoing services like SEO, we recommend giving a strategy enough time to show results, but you're not tied in beyond that.",
  },
  {
    question: "Can I combine multiple services?",
    answer:
      "Yes. Many clients combine web development, SEO, and paid ads for a joined-up strategy. Get in touch and we'll put together a plan — and a clear price — based on exactly what you need.",
  },
  {
    question: "What's included in the Google Ads and Meta Ads management price?",
    answer:
      "Both include campaign setup, audience or keyword targeting, ad creative or copywriting, and ongoing performance tracking so your budget is spent as effectively as possible. Your actual ad spend with Google or Meta is separate from our management fee.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes. If you need a bespoke combination of services, a larger project, or something outside our standard scopes, contact us for a tailored proposal built around your goals and budget.",
  },
  {
    question: "What currency are your prices in?",
    answer:
      "All prices are in GBP (£). We're a UK-registered agency, so billing is straightforward with no currency conversion surprises.",
  },
  {
    question: "How do I get started?",
    answer:
      "Choose the service you're interested in above and click \"Get Started\", or head to our contact page. We'll follow up to confirm your requirements and send a clear quote before any work begins.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={pricingBreadcrumbSchema} />
      <SchemaMarkup schema={pricingOffersSchema} />

      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <Breadcrumbs items={[{ label: "Pricing" }]} className="mb-6 justify-center" />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Pricing
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Affordable Digital Marketing <span className="text-gradient-primary">Pricing UK</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Clear and affordable pricing for websites, SEO, PPC, social media advertising, branding, and business
              consulting.
            </p>
            <AnimatedButton href="/contact" size="lg">
              Get a Free Quote
            </AnimatedButton>
          </div>
        </Section>

        {/* Pricing Cards */}
        <PricingSectionComponent />

        {/* Why Choose Linkedo */}
        <Section
          gradient
          eyebrow="Why Linkedo"
          title="Why Choose Linkedo?"
          description="A UK-registered digital marketing agency built around transparency, measurable results, and no long-term lock-in."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </Section>

        {/* How Our Pricing Works */}
        <Section eyebrow="How It Works" title="How Our Pricing Works">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howPricingWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-10">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-card/50 border border-border/50 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Frequently Asked Questions">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* Related Services */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <RelatedLinks
              title="Explore Our Services"
              links={pricingPlans.map((plan) => ({ label: plan.name, href: `/${plan.slug}` }))}
            />
          </div>
        </Section>

        {/* Final CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your project and we'll confirm a clear, upfront quote — no obligation, no hidden fees.
            </p>
            <AnimatedButton href="/contact" size="lg">
              Get a Free Quote
            </AnimatedButton>
          </div>
        </Section>
      </main>
    </div>
  )
}
