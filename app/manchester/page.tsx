import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  Check,
  CheckCircle2,
  Phone,
  Mail,
  Star,
  Compass,
  ClipboardList,
  Cog,
  LineChart,
  Factory,
  Briefcase,
  Home as HomeIcon,
  Stethoscope,
  ShoppingBag,
  Utensils,
  TrendingUp,
  ShieldCheck,
} from "lucide-react"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"

const title = "Manchester Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency serving Manchester. SEO, Google Ads, Meta Ads & Web Development. Book a free call."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://linkedo.co.uk/manchester" },
  keywords: [
    "Manchester digital marketing agency",
    "SEO Manchester",
    "Google Ads Manchester",
    "Meta Ads Manchester",
    "web development Manchester",
    "Linkedo Manchester",
  ],
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/manchester",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manchester Digital Marketing Agency — Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
}

const trustBadges = [
  "UK Companies House Registered",
  "GDPR Compliant",
  "GBP Billing",
  "Manchester-Based Support",
  "No Lock-in Contracts",
]

const aboutStats = [
  {
    icon: TrendingUp,
    value: "30+",
    label: "Manchester & Greater Manchester businesses served",
  },
  {
    icon: Star,
    value: "4.9 / 5",
    label: "Average client rating based on reviews",
  },
  {
    icon: ShieldCheck,
    value: "UK-Registered",
    label: "Companies House registered — fully accountable",
  },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Manchester",
    description:
      "We build fast, conversion-focused websites tailored to Manchester businesses and their customers.",
    href: "/website-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Manchester",
    description:
      "Rank higher on Google and attract more local Manchester customers with our data-driven SEO strategies.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Manchester",
    description:
      "Maximise your ad spend with expertly managed Google Ads campaigns targeting Manchester's most valuable search traffic.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Manchester",
    description:
      "Reach your ideal Manchester audience on Facebook and Instagram with high-converting Meta ad campaigns.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Manchester",
    description:
      "Protect your Manchester business online with proactive website security monitoring and rapid response solutions.",
    href: "/services",
  },
]

const benefits = [
  {
    title: "UK-Registered & Fully Accountable",
    description:
      "Linkedo is verified on UK Companies House, giving Manchester businesses complete confidence in who they're working with.",
  },
  {
    title: "Manchester Market Knowledge",
    description:
      "We understand Greater Manchester's competitive landscape, from Spinningfields finance firms to Northern Quarter independents.",
  },
  {
    title: "Transparent Reporting, No Fluff",
    description:
      "Every client receives clear, jargon-free performance reports tied to real, measurable business outcomes.",
  },
  {
    title: "No Lock-in Contracts",
    description:
      "Scale, pause, or adjust your services at any time without penalties or long-term commitment.",
  },
  {
    title: "GBP Billing & Simple Pricing",
    description:
      "All invoicing is in British Pounds with no hidden fees or surprise currency conversions.",
  },
  {
    title: "GDPR Compliant by Default",
    description:
      "Every campaign and data process we manage meets full UK GDPR compliance standards.",
  },
]

const manchesterCoverage = [
  {
    region: "City Centre",
    areas:
      "Manchester City Centre, Deansgate, Spinningfields, Northern Quarter, Piccadilly, Ancoats, NOMA, Castlefield, Oxford Road Corridor",
  },
  {
    region: "North Manchester",
    areas:
      "Cheetham Hill, Collyhurst, Moston, Harpurhey, Middleton, Whitefield, Prestwich, Bury, Rochdale",
  },
  {
    region: "East Manchester",
    areas:
      "Droylsden, Ashton-under-Lyne, Failsworth, Oldham, Openshaw, Clayton, Gorton, Denton, Stalybridge",
  },
  {
    region: "South Manchester",
    areas:
      "Didsbury, Chorlton, Withington, Fallowfield, Stockport, Cheadle, Altrincham, Sale, Wythenshawe",
  },
  {
    region: "West Manchester / Salford",
    areas:
      "Salford, Salford Quays, MediaCityUK, Eccles, Swinton, Worsley, Stretford, Trafford Park, Irlam",
  },
]

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    description:
      "We help Manchester's manufacturing and engineering firms win more B2B contracts through targeted SEO and lead generation.",
  },
  {
    icon: Briefcase,
    title: "Finance & Professional Services",
    description:
      "We build trust and visibility online for Manchester's financial advisers, accountants, and professional service firms.",
  },
  {
    icon: HomeIcon,
    title: "Real Estate & Property",
    description:
      "We drive qualified buyer and tenant enquiries for Manchester property developers, agents, and landlords.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description:
      "We support Manchester clinics and healthcare providers with GDPR-compliant, patient-focused digital marketing.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description:
      "We grow online revenue for Manchester-based retailers through SEO, Google Ads, and Meta advertising campaigns.",
  },
  {
    icon: Utensils,
    title: "Hospitality & Restaurants",
    description:
      "We increase bookings and footfall for Manchester's restaurants, bars, and hospitality businesses through local digital strategies.",
  },
]

const processSteps = [
  {
    icon: Compass,
    title: "Discovery & Audit",
    description:
      "We audit your website, digital presence, and Manchester competitors to uncover the fastest growth opportunities for your business.",
  },
  {
    icon: ClipboardList,
    title: "Strategy & Planning",
    description:
      "We build a bespoke digital marketing strategy aligned to your Manchester business goals, with measurable targets across every channel.",
  },
  {
    icon: Cog,
    title: "Execution & Implementation",
    description:
      "We implement your strategy in-house — from Google Ads launches to SEO plans and website builds — with full quality control throughout.",
  },
  {
    icon: LineChart,
    title: "Reporting & Optimisation",
    description:
      "You receive clear, regular performance reports and ongoing campaign optimisation to maximise ROI and keep you ahead of Manchester competitors.",
  },
]

const testimonials = [
  {
    quote:
      "Linkedo transformed our online presence completely. Within four months our enquiries doubled and we're now ranking on page one for our most competitive Manchester search terms.",
    name: "James Hartley",
    role: "Managing Director — Pennine Engineering Solutions",
    location: "Oldham, Greater Manchester",
  },
  {
    quote:
      "We'd tried other agencies before but Linkedo were different — transparent, knowledgeable, and genuinely focused on results. Our property listings are now generating consistent leads every week.",
    name: "Sarah Mellor",
    role: "Director — Castlefield Property Group",
    location: "Castlefield, Manchester",
  },
  {
    quote:
      "The team at Linkedo understood our legal sector immediately. Our consultation bookings have increased significantly and our Google Ads are finally delivering real return on investment.",
    name: "David Thornton",
    role: "Senior Partner — Deansgate Legal Partners",
    location: "Deansgate, Manchester",
  },
]

const aggregateRating = { rating: 4.9, count: 30 }

const faqs = [
  {
    question: "How much do digital marketing services cost for Manchester businesses?",
    answer:
      "Our pricing is tailored to your business size, goals, and chosen services. We offer flexible, transparent packages in GBP with no hidden fees or long-term lock-in contracts.",
  },
  {
    question: "Which areas of Manchester do you cover?",
    answer:
      "We serve businesses across all of Greater Manchester, including the City Centre, Salford, Stockport, Oldham, Bury, Altrincham, and surrounding districts. We work both remotely and on-site across the region.",
  },
  {
    question: "How long does SEO take to show results for a Manchester business?",
    answer:
      "Most Manchester clients begin seeing measurable improvements within 3–6 months. Timelines vary depending on your sector competitiveness, current website authority, and target keywords.",
  },
  {
    question: "Do you work with small businesses in Manchester?",
    answer:
      "Yes — we work with Manchester businesses of all sizes, from sole traders and start-ups to established SMEs. Our services are scalable and priced to suit different budgets and growth stages.",
  },
  {
    question: "Do I need to meet you in person or can we work remotely?",
    answer:
      "We work fully remotely with most of our Manchester clients via video calls, email, and our reporting dashboard. In-person meetings can be arranged across Greater Manchester when needed.",
  },
  {
    question: "Should my Manchester business run SEO and Google Ads at the same time?",
    answer:
      "Yes — combining SEO and Google Ads delivers the strongest results. Google Ads drives immediate traffic while SEO builds long-term organic visibility, giving your Manchester business consistent leads from both channels.",
  },
  {
    question: "Is your digital marketing service GDPR compliant?",
    answer:
      "Absolutely. Every campaign, website, and data process we manage is fully compliant with UK GDPR regulations. Manchester businesses can market confidently knowing their customers' data is handled lawfully and securely.",
  },
  {
    question: "How do I get started with Linkedo as a Manchester business?",
    answer:
      "Simply book a free strategy call or send us an email at info@linkedo.co.uk. We'll review your current digital presence, discuss your goals, and recommend the best approach for your Manchester business.",
  },
]

const manchesterLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/manchester#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/manchester",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Manchester and Greater Manchester businesses with SEO, Google Ads, Meta Ads, web development, and security services.",
  telephone: "+44 7927 969991",
  email: "info@linkedo.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
    telephone: "+44 7927 969991",
    email: "info@linkedo.co.uk",
    url: "https://linkedo.co.uk/contact",
  },
  areaServed: [
    { "@type": "City", name: "Manchester" },
    { "@type": "AdministrativeArea", name: "Greater Manchester" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Credit Card",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manchester Digital Marketing Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `https://linkedo.co.uk${s.href}`,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.rating,
    reviewCount: aggregateRating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  })),
  parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
}

const manchesterBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Manchester", item: "https://linkedo.co.uk/manchester" },
  ],
}

const manchesterFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function ManchesterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={manchesterLocalBusinessSchema} />
      <SchemaMarkup schema={manchesterBreadcrumbSchema} />
      <SchemaMarkup schema={manchesterFaqSchema} />

      <main className="pt-24">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-cyan-500/10" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Manchester, United Kingdom
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 text-balance">
                Manchester Digital Marketing Agency —{" "}
                <span className="text-gradient-primary">Linkedo</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-foreground/90 font-semibold mb-8 max-w-3xl">
                Helping Manchester Businesses Grow Online With SEO, Google Ads, Meta Ads &amp;
                Professional Web Development
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <AnimatedButton size="lg">
                    Book a Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>
                <Link href="#services">
                  <AnimatedButton variant="secondary" size="lg">
                    View Manchester Services
                  </AnimatedButton>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 max-w-3xl">
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
            </div>
          </Section>
        </div>

        {/* About Linkedo in Manchester */}
        <Section
          eyebrow="About Linkedo in Manchester"
          title="A Trusted Digital Marketing Partner for Manchester Businesses"
        >
          <div className="max-w-3xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency working with
              businesses across Manchester and Greater Manchester. We deliver measurable results
              through SEO, paid advertising, web development, and website security.
            </p>
            <p>
              Manchester is one of the UK&apos;s most competitive business hubs — from the Northern
              Quarter to Spinningfields, companies here need a digital strategy that cuts through
              the noise. We understand the local market and build campaigns around it.
            </p>
            <p>
              Whether you&apos;re a start-up in Ancoats or an established firm in Deansgate,
              Linkedo provides transparent, no-lock-in digital marketing services tailored to your
              growth goals and backed by real UK-registered expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {aboutStats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Manchester Services"
          title="What We Offer Manchester Businesses"
          description="From web development to paid advertising, Linkedo offers a full suite of digital marketing services built specifically for Manchester businesses. Every service is delivered by UK-based professionals with transparent pricing and no long-term lock-in contracts."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section
          eyebrow="Why Choose Us"
          title="Why Work With a UK-Registered Agency for Your Manchester Business"
          description="Manchester businesses deserve a digital marketing partner they can trust — one that's accountable, transparent, and genuinely invested in local growth. As a UK Companies House registered agency, Linkedo brings credibility, compliance, and commercial focus to every client relationship in Greater Manchester."
        >
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{b.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">
                Our Manchester Presence
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Serving Manchester &amp; Greater Manchester
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Time Zone</p>
                    <p className="text-sm text-muted-foreground">
                      GMT / BST — UK business hours
                    </p>
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
              </div>
            </div>
          </div>
        </Section>

        {/* Coverage */}
        <Section
          eyebrow="Our Coverage"
          title="Digital Marketing Services Across Greater Manchester"
          description="Linkedo provides digital marketing services to businesses across all areas of Greater Manchester. Whether you're based in the city centre or the surrounding districts, our team delivers locally optimised strategies that drive real growth in your specific area."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manchesterCoverage.map((c) => (
              <div
                key={c.region}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">{c.region}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.areas}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Our Expertise"
          title="Manchester Industries We Work With"
          description="Manchester's economy spans advanced manufacturing, financial services, property, legal, healthcare, and a thriving retail and hospitality scene. Linkedo works with businesses across these sectors, delivering industry-specific digital marketing strategies that generate real, qualified leads."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-10">
            Working in a different sector?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact Linkedo
            </Link>{" "}
            — we work with a wide range of Manchester businesses and are happy to discuss your
            specific industry needs.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="Why Manchester Businesses Need a Stronger Digital Presence in 2025"
          gradient
        >
          <div className="max-w-3xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              Manchester is one of the UK&apos;s fastest-growing commercial cities, with
              Spinningfields established as the North&apos;s premier financial district and NOMA
              emerging as a major tech and business hub. Competition for online visibility across
              these zones is intensifying rapidly, making a strong digital strategy no longer
              optional.
            </p>
            <p>
              The Northern Quarter, Ancoats, and Oxford Road Corridor are home to a dense
              concentration of SMEs, agencies, and service businesses all competing for the same
              local search traffic. Businesses that invest in SEO and paid advertising now are
              building a compounding advantage over those that delay.
            </p>
            <p>
              From Salford Quays and MediaCityUK in the west to the professional services corridor
              along Deansgate, Manchester&apos;s commercial districts each have distinct audiences
              and search behaviours. Linkedo&apos;s locally informed strategies are built to target
              the right customers in the right areas at the right time.
            </p>
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Manchester Businesses"
          description="We follow a clear, structured process to deliver consistent, measurable results for Manchester businesses — transparent and tailored at every step."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          eyebrow="Client Testimonials"
          title="What Manchester Businesses Say About Us"
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col p-6 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-primary mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-medium text-foreground">{aggregateRating.rating} / 5</span>
              <span>— Based on {aggregateRating.count}+ Manchester client reviews</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["UK Companies House Registered", "GDPR Compliant", "GBP Billing"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/70 border border-border/50 text-xs"
                >
                  <Check className="w-3 h-3 text-primary" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQs */}
        <Section
          eyebrow="FAQs"
          title="Frequently Asked Questions About Our Manchester Services"
        >
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* Final CTA */}
        <Section eyebrow="Get Started" title="Ready to Grow Your Manchester Business?" gradient>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
              Manchester is one of the UK&apos;s most competitive digital markets — and the
              businesses investing in SEO, Google Ads, and web development today are the ones
              dominating search results tomorrow. Now is the time to act.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              Linkedo is ready to build a results-driven digital marketing strategy tailored
              specifically to your Manchester business. No lock-in contracts, no jargon — just
              transparent, measurable growth from a UK-registered agency you can trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a
                href="mailto:info@linkedo.co.uk"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-foreground"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">info@linkedo.co.uk</span>
              </a>
              <a
                href="tel:+447927969991"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">+44 7927 969991</span>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
