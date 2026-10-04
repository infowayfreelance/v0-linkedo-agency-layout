import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  Check,
  Star,
  Phone,
  Mail,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"

const title = "Digital Marketing Agency Birmingham | Linkedo"
const description =
  "Linkedo offers SEO, Google Ads, Meta Ads & Web Development for Birmingham businesses. UK-registered, GDPR compliant, no lock-in contracts."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Birmingham",
    "SEO Birmingham",
    "Google Ads Birmingham",
    "Meta Ads Birmingham",
    "web development Birmingham",
    "PPC agency Birmingham",
    "social media marketing Birmingham",
    "local SEO Birmingham",
    "B2B marketing Birmingham",
    "Linkedo Birmingham",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/birmingham",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/birmingham",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-birmingham.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in Birmingham – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-birmingham.webp"],
  },
}

const birminghamServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/birmingham#service",
  name: "Birmingham Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Birmingham businesses with web development, SEO, Google Ads, and Meta Ads strategies that deliver measurable results.",
  url: "https://linkedo.co.uk/birmingham",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "Birmingham" },
    { "@type": "AdministrativeArea", name: "West Midlands" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Birmingham Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const birminghamBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Birmingham", item: "https://linkedo.co.uk/birmingham" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you have an office in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a UK-registered agency based in London with clients across Birmingham and the West Midlands. We work fully remotely, delivering the same high-quality service to Birmingham businesses as we do to our London clients.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results from SEO in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term strategy. Most Birmingham clients start seeing meaningful improvements in rankings and traffic within 3–6 months, with stronger results building over 6–12 months depending on competition and the current state of their website.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run Google Ads for a Birmingham business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We manage Google Ads campaigns for businesses across Birmingham, targeting local searches such as 'near me' queries, specific Birmingham districts, and broader West Midlands audiences depending on your goals.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Birmingham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with businesses across manufacturing, professional services, finance, real estate, healthcare, e-commerce, and hospitality — sectors well represented across the Birmingham and West Midlands economy.",
      },
    },
    {
      "@type": "Question",
      name: "Are there lock-in contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We do not believe in long lock-in contracts. Our retained services run on rolling monthly agreements, giving Birmingham clients the flexibility to scale up, pause, or stop as their business needs change.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for a Birmingham business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on the scope of services and the size of your campaigns. We offer transparent pricing and work with businesses of all sizes, from independent traders to established Birmingham companies. Contact us for a tailored quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build websites for Birmingham businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop professional websites for Birmingham businesses across all sectors. Our sites are built for speed, mobile performance, and conversion — and are optimised for local search from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Is Linkedo GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a UK-registered company, we operate fully in line with UK GDPR requirements. Our processes for data collection, storage, and campaign tracking are compliant and we can advise Birmingham clients on best practices for their own sites.",
      },
    },
  ],
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Custom, high-performance websites built to convert Birmingham visitors into leads and customers.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies helping Birmingham businesses rank higher and attract qualified traffic.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Birmingham and West Midlands audiences with precision and maximum ROI.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising for Birmingham brands looking to grow awareness and drive conversions.",
    href: "/meta-ads",
  },
  {
    iconName: "Palette",
    title: "Branding & Identity",
    description: "Compelling brand identities that help Birmingham businesses stand out in competitive markets.",
    href: "/branding",
  },
  {
    iconName: "Shield",
    title: "Website Security",
    description: "Security audits, SSL configuration, and malware protection for Birmingham business websites.",
    href: "/consulting",
  },
]

const stats = [
  { icon: Users, value: "50+", label: "Birmingham & West Midlands businesses served" },
  { icon: TrendingUp, value: "3x", label: "Average ROI achieved within 6 months" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction rating" },
]

const trustBadges = [
  "UK-Registered Company",
  "GDPR Compliant",
  "No Lock-In Contracts",
  "Transparent Pricing",
  "Dedicated Account Manager",
  "Monthly Reporting",
]

const coverageAreas = [
  {
    name: "Birmingham City Centre",
    description: "Colmore Business District, Brindleyplace, Broad Street — targeting Birmingham's commercial core.",
  },
  {
    name: "North Birmingham",
    description: "Erdington, Sutton Coldfield, Perry Barr — digital growth for established North Birmingham businesses.",
  },
  {
    name: "East Birmingham",
    description: "Digbeth, Bordesley Green, Sparkbrook — supporting the creative and manufacturing hubs of East Birmingham.",
  },
  {
    name: "South Birmingham",
    description: "Edgbaston, Moseley, Kings Heath, Solihull — premium digital services for South Birmingham professionals.",
  },
  {
    name: "West Birmingham & Sandwell",
    description: "Smethwick, West Bromwich, Oldbury — proven results for West Midlands manufacturing and trade businesses.",
  },
]

const industries = [
  { icon: "🏭", name: "Manufacturing", description: "Digital strategies for West Midlands manufacturers seeking B2B leads." },
  { icon: "💼", name: "Finance & Professional Services", description: "SEO and PPC for Birmingham accountants, solicitors, and consultants." },
  { icon: "🏠", name: "Real Estate", description: "Lead generation campaigns for Birmingham estate agents and property developers." },
  { icon: "🏥", name: "Healthcare", description: "Local SEO and Google Ads for Birmingham clinics, dentists, and healthcare providers." },
  { icon: "🛒", name: "E-Commerce", description: "Performance marketing for online retailers across the West Midlands." },
  { icon: "🍽️", name: "Hospitality", description: "Social media and search marketing for Birmingham restaurants, hotels, and venues." },
]

const testimonials = [
  {
    name: "James Hartley",
    role: "Director",
    company: "Colmore Business District",
    rating: 5,
    text: "Linkedo completely transformed our digital presence. Our qualified leads tripled within 5 months and we've seen a measurable increase in revenue from organic search alone. Their team understood the Birmingham market from day one.",
  },
  {
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "Edgbaston Professional Services",
    rating: 5,
    text: "Exceptional results from both SEO and Google Ads. Linkedo delivered a 3x ROI within the first quarter. The team is responsive, transparent, and genuinely invested in our growth. I wouldn't hesitate to recommend them.",
  },
  {
    name: "Tariq Rahman",
    role: "Founder",
    company: "Jewellery Quarter E-Commerce",
    rating: 5,
    text: "Our online store saw a 280% increase in organic traffic after working with Linkedo. They completely rebuilt our SEO strategy and the results speak for themselves. Best investment we've made in our digital marketing.",
  },
]

const processSteps = [
  {
    title: "Discovery Call",
    description: "We learn about your Birmingham business, your goals, your customers, and the competitive landscape you operate in.",
  },
  {
    title: "Strategy & Proposal",
    description: "We build a tailored digital marketing strategy with clear objectives, timelines, and projected outcomes for your business.",
  },
  {
    title: "Implementation",
    description: "Our team executes the agreed strategy — from technical SEO and campaign setup to website development and ad creative.",
  },
  {
    title: "Reporting & Optimisation",
    description: "You receive clear monthly reports. We continuously test and refine campaigns to maximise your ROI over time.",
  },
]

const faqs = [
  {
    question: "Do you have an office in Birmingham?",
    answer:
      "We are a UK-registered agency based in London with clients across Birmingham and the West Midlands. We work fully remotely, delivering the same high-quality service to Birmingham businesses as we do to our London clients.",
  },
  {
    question: "How long before I see results from SEO in Birmingham?",
    answer:
      "SEO is a long-term strategy. Most Birmingham clients start seeing meaningful improvements in rankings and traffic within 3–6 months, with stronger results building over 6–12 months depending on competition and the current state of their website.",
  },
  {
    question: "Can you run Google Ads for a Birmingham business?",
    answer:
      "Absolutely. We manage Google Ads campaigns for businesses across Birmingham, targeting local searches such as 'near me' queries, specific Birmingham districts, and broader West Midlands audiences depending on your goals.",
  },
  {
    question: "What industries do you serve in Birmingham?",
    answer:
      "We work with businesses across manufacturing, professional services, finance, real estate, healthcare, e-commerce, and hospitality — sectors well represented across the Birmingham and West Midlands economy.",
  },
  {
    question: "Are there lock-in contracts?",
    answer:
      "No. We do not believe in long lock-in contracts. Our retained services run on rolling monthly agreements, giving Birmingham clients the flexibility to scale up, pause, or stop as their business needs change.",
  },
  {
    question: "How much does digital marketing cost for a Birmingham business?",
    answer:
      "Pricing depends on the scope of services and the size of your campaigns. We offer transparent pricing and work with businesses of all sizes, from independent traders to established Birmingham companies. Contact us for a tailored quote.",
  },
  {
    question: "Do you build websites for Birmingham businesses?",
    answer:
      "Yes. We design and develop professional websites for Birmingham businesses across all sectors. Our sites are built for speed, mobile performance, and conversion — and are optimised for local search from day one.",
  },
  {
    question: "Is Linkedo GDPR compliant?",
    answer:
      "Yes. As a UK-registered company, we operate fully in line with UK GDPR requirements. Our processes for data collection, storage, and campaign tracking are compliant and we can advise Birmingham clients on best practices for their own sites.",
  },
]

const ukBenefits = [
  "UK-registered company with full legal accountability",
  "Deep understanding of UK business culture and buyer behaviour",
  "GDPR-compliant processes and data handling throughout",
  "GBP billing with no currency conversion fees",
  "Overlapping business hours for real-time communication",
  "No lock-in contracts — results-driven retention only",
]

export default function BirminghamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={birminghamServiceSchema} />
      <SchemaMarkup schema={birminghamBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">West Midlands, United Kingdom</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Birmingham&apos;s <span className="text-gradient-primary">Digital Marketing Agency</span> | Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
              Linkedo is a UK-registered digital marketing agency helping Birmingham businesses generate more leads,
              improve search rankings, and grow revenue through proven SEO, Google Ads, Meta Ads, and web development
              strategies.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-3xl">
              We work with businesses across the West Midlands — from the Colmore Business District and Brindleyplace
              to Jewellery Quarter, Digbeth, and Edgbaston — delivering measurable digital results with no lock-in
              contracts.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/70 border border-border/50 text-xs text-foreground"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View Birmingham Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* Stats */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Birmingham Services"
          title="Digital Marketing Services for Birmingham Businesses"
          description="Full-service digital marketing tailored to the Birmingham and West Midlands market. Everything your business needs to grow online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why UK-Registered */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Why Choose Linkedo
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Birmingham Businesses Choose a UK-Registered Agency
              </h2>
              <p className="text-muted-foreground mb-8">
                As a UK-registered company, we bring local accountability, cultural understanding, and proven digital
                expertise to every Birmingham client we work with. No overseas handoffs, no timezone friction — just
                straightforward, results-driven work.
              </p>
              <ul className="space-y-4">
                {ukBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Birmingham Service Area</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Service Area</p>
                    <p className="text-sm text-muted-foreground">Birmingham & West Midlands, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri, 9:00–18:00 GMT/BST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Registration</p>
                    <p className="text-sm text-muted-foreground">UK Companies House Registered</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Compliance</p>
                    <p className="text-sm text-muted-foreground">Fully GDPR Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coverage Areas */}
        <Section
          eyebrow="Coverage"
          title="Areas We Serve Across Birmingham"
          description="We work with businesses across every part of Birmingham and the wider West Midlands."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area) => (
              <div
                key={area.name}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Industries"
          title="Sectors We Serve in Birmingham"
          description="We bring sector-specific knowledge and proven digital strategies to businesses across Birmingham's key industries."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Local Insight */}
        <Section gradient>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Local Insight
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Birmingham Businesses Are Investing in Digital Marketing in 2025
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Birmingham is the UK&apos;s second-largest city and one of its fastest-growing business hubs. With the
                  Colmore Business District evolving as a major financial and professional services centre, Brindleyplace
                  attracting international brands, and Digbeth cementing its reputation as a creative and tech cluster,
                  competition for online visibility has never been more intense.
                </p>
                <p>
                  Businesses in the Jewellery Quarter, Edgbaston, and across the wider West Midlands are increasingly
                  investing in SEO, Google Ads, and social media advertising to compete for the attention of both local
                  and national buyers. The businesses that invest in digital now will be the ones that define their
                  markets over the next decade.
                </p>
                <p>
                  Linkedo works with Birmingham businesses to build digital marketing strategies that reflect the
                  realities of the local market — from hyper-local SEO targeting specific districts to broader
                  West Midlands and national campaigns for businesses ready to scale beyond Birmingham.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">🏙️ Colmore Business District</h3>
                <p className="text-sm text-muted-foreground">
                  Birmingham&apos;s premier financial and professional services hub. We help firms here compete for
                  high-value B2B search traffic across the Midlands and nationally.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">🌊 Brindleyplace</h3>
                <p className="text-sm text-muted-foreground">
                  Birmingham&apos;s mixed-use waterfront quarter. We deliver brand-building and lead generation campaigns
                  for the diverse mix of businesses here.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">💎 Jewellery Quarter</h3>
                <p className="text-sm text-muted-foreground">
                  A unique blend of heritage manufacturing and modern creative businesses. We help e-commerce and
                  specialist retailers here grow online sales through targeted digital campaigns.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">🎨 Digbeth</h3>
                <p className="text-sm text-muted-foreground">
                  Birmingham&apos;s creative and tech district. We support startups, agencies, and creative businesses
                  here with digital strategies built for growth and visibility.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Birmingham Businesses"
          description="A clear, structured approach that delivers results without the complexity."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative p-6 rounded-xl bg-card/50 border border-border/50">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-foreground mb-3 mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          eyebrow="Client Results"
          title="What Birmingham Clients Say"
          description="Real results from real Birmingham and West Midlands businesses."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 rounded-xl bg-card/50 border border-border/50 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate rating */}
          <div className="max-w-sm mx-auto text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <p className="text-sm text-muted-foreground">Based on 38 client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQ" title="Common Questions from Birmingham Businesses">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Grow Your Birmingham Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book a free strategy call with our team. We&apos;ll review your current digital presence, identify growth
                opportunities, and outline a clear plan — with no obligation and no hard sell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Call Us</p>
                  <p className="text-sm text-muted-foreground">Speak directly with our team about your Birmingham project.</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email Us</p>
                  <p className="text-sm text-muted-foreground">Send us your brief and we&apos;ll respond within one business day.</p>
                </div>
              </div>
            </div>

            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/services">
                <AnimatedButton variant="secondary" size="lg">
                  View All Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
