import { Section } from "@/components/ui/section"
import { PricingCard } from "@/components/ui/pricing-card"

export const pricingPlans = [
  {
    name: "Web Development",
    slug: "web-development",
    price: "£299",
    period: "",
    description: "Custom, high-performance websites built to turn visitors into customers.",
    features: [
      "Custom design tailored to your brand",
      "Responsive, mobile-first build",
      "Fast-loading, secure architecture",
      "SEO-optimised foundations",
      "Analytics integration",
    ],
  },
  {
    name: "SEO Services",
    slug: "seo",
    price: "£399",
    period: "/month",
    description: "Data-driven SEO strategies to improve your search rankings and organic visibility.",
    features: [
      "Full technical SEO audit",
      "On-page optimisation",
      "Keyword research & strategy",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Google Ads / PPC Management",
    slug: "google-ads",
    price: "£149",
    period: "",
    description: "Performance-focused Google Ads campaigns managed to get the most from your ad spend.",
    features: [
      "Strategic campaign setup",
      "Budget optimisation",
      "Compelling ad copywriting",
      "Performance tracking & reporting",
    ],
  },
  {
    name: "Meta Ads Management",
    slug: "meta-ads",
    price: "£249",
    period: "",
    description: "Targeted Facebook & Instagram ad campaigns that reach your ideal audience.",
    features: [
      "Audience targeting & research",
      "Creative development",
      "Campaign optimisation",
      "Performance tracking & reporting",
    ],
  },
  {
    name: "Branding",
    slug: "branding",
    price: "£249",
    period: "",
    description: "Strategic brand identities that build trust and set you apart from competitors.",
    features: [
      "Brand identity design",
      "Brand strategy development",
      "Brand guidelines documentation",
      "Brand refresh for existing businesses",
    ],
  },
  {
    name: "Consulting",
    slug: "consulting",
    price: "£149",
    period: "",
    description: "Expert digital strategy guidance to help you make informed marketing decisions.",
    features: ["Digital strategy sessions", "SEO audits", "Analytics setup & review", "Training & workshops"],
  },
]

export function PricingSection() {
  return (
    <Section
      eyebrow="Pricing"
      title="Simple, Service-by-Service Pricing"
      description="Six core services, six clear prices. Only SEO is billed monthly — every other price below is a starting quote for the service as described; contact us if your project needs a tailored scope."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.slug}
            name={plan.name}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            ctaText="Get Started"
            ctaHref={`/contact?service=${plan.slug}`}
          />
        ))}
      </div>
    </Section>
  )
}

export { PricingSection as PricingSectionComponent }
