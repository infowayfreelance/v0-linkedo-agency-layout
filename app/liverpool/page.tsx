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
  Users,
  TrendingUp,
} from "lucide-react"

const title = "Digital Marketing Agency Liverpool | Linkedo"
const description =
  "Linkedo offers SEO, Google Ads, web design & digital marketing services in Liverpool. UK registered, GDPR compliant, no lock-in contracts."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Liverpool",
    "SEO Liverpool",
    "Google Ads Liverpool",
    "Meta Ads Liverpool",
    "web development Liverpool",
    "PPC agency Liverpool",
    "Liverpool SEO services",
    "Merseyside digital marketing",
    "local SEO Liverpool",
    "Linkedo Liverpool",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/liverpool",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/liverpool",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-liverpool.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency Liverpool – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-liverpool.webp"],
  },
}

const liverpoolLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/liverpool#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/liverpool",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Liverpool and Merseyside businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Liverpool" },
    { "@type": "AdministrativeArea", name: "Merseyside" },
    { "@type": "AdministrativeArea", name: "North West England" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  telephone: "+44 7927 969991",
  email: "info@linkedo.co.uk",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+44 7927 969991",
    email: "info@linkedo.co.uk",
    areaServed: "GB",
    availableLanguage: "English",
    url: "https://linkedo.co.uk/contact",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Hartley" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo transformed our online presence within just a few months. Our enquiries have doubled and we're now ranking on page one for our key Liverpool search terms.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Malone" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We'd tried other agencies before but Linkedo actually delivered. Our Google Ads are now profitable and our website finally converts. Brilliant team to work with.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Daniel Owens" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "From day one, Linkedo were transparent, responsive, and results-focused. Our Baltic Triangle studio has seen a 40% increase in leads since working with them.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Liverpool Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Credit Card",
  parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
}

const liverpoolBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Liverpool", item: "https://linkedo.co.uk/liverpool" },
  ],
}

const faqs = [
  {
    question: "What digital marketing services does Linkedo offer in Liverpool?",
    answer:
      "We offer website development, SEO, Google Ads, Meta Ads, and website security — all tailored specifically to Liverpool businesses and their local target audiences.",
  },
  {
    question: "Is Linkedo a locally based agency for Liverpool businesses?",
    answer:
      "We provide dedicated Liverpool-focused support with UK business hours, GBP billing, and strategies built around Merseyside's local market and search behaviour.",
  },
  {
    question: "How do you approach digital marketing differently for Liverpool businesses?",
    answer:
      "We research Liverpool-specific search trends, competitors, and commercial districts to ensure every campaign is locally relevant and drives genuine local enquiries.",
  },
  {
    question: "Can Linkedo help a Liverpool business that has never done digital marketing before?",
    answer:
      "Yes — we guide new clients through every step, from initial audit to full campaign launch, making digital marketing simple, clear, and accessible for Liverpool businesses of all sizes.",
  },
  {
    question: "What results can Liverpool businesses realistically expect from SEO?",
    answer:
      "Most clients see improved rankings, increased website traffic, and stronger lead generation within 3 to 6 months of a well-executed Liverpool SEO strategy.",
  },
  {
    question: "Do you offer website design and development for Liverpool businesses?",
    answer:
      "Yes — we build fast, mobile-optimised, conversion-focused websites tailored to Liverpool brands, industries, and their specific customer audiences.",
  },
  {
    question: "How do Meta Ads work for Liverpool-based businesses?",
    answer:
      "We create targeted Facebook and Instagram campaigns that reach Liverpool audiences by location, interest, and behaviour — driving enquiries and brand awareness efficiently.",
  },
  {
    question: "What makes Linkedo trustworthy for Liverpool businesses?",
    answer:
      "We are UK Companies House registered, GDPR compliant, and operate with no lock-in contracts — giving Liverpool businesses full confidence and flexibility from day one.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const trustBadges = [
  "UK Companies House Registered",
  "GDPR Compliant",
  "GBP Billing",
  "Liverpool-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "UK businesses helped across SEO, Ads & web projects" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction — based on verified reviews" },
  { icon: MapPin, value: "Liverpool", label: "Focused strategies — built around Merseyside's market" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Liverpool",
    description: "Custom, fast-loading websites built to convert Liverpool visitors into paying customers.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Liverpool",
    description: "Rank higher on Google and get found by Liverpool customers actively searching for your services.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Liverpool",
    description: "Data-driven Google Ads campaigns that deliver qualified leads to Liverpool businesses fast.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Liverpool",
    description: "Targeted Facebook and Instagram ads that reach the right Liverpool audience at the right time.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Liverpool",
    description: "Protect your Liverpool business website from threats, malware, and costly downtime.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🔓",
    title: "No Lock-in Contracts",
    text: "Work with us on your terms, with full flexibility to scale up or exit anytime.",
  },
  {
    icon: "💷",
    title: "GBP Billing & UK Invoicing",
    text: "Simple, transparent billing in pounds with no hidden fees or currency surprises.",
  },
  {
    icon: "🔒",
    title: "GDPR-Compliant Campaigns",
    text: "Every strategy we run is fully compliant with UK data protection law.",
  },
  {
    icon: "👥",
    title: "Dedicated Account Support",
    text: "You'll always have a real point of contact, not a rotating helpdesk ticket.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decision Making",
    text: "Every campaign is backed by analytics, not guesswork or generic templates.",
  },
  {
    icon: "🎯",
    title: "Cross-Channel Expertise",
    text: "From SEO to paid ads to web development, we manage your full digital presence.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Liverpool ONE", "Castle Street", "Dale Street", "Water Street", "Exchange Flags", "Lord Street"],
  },
  {
    icon: "🧭",
    name: "North Liverpool",
    areas: ["Everton", "Kirkdale", "Anfield", "Walton", "Bootle", "Crosby", "Litherland"],
  },
  {
    icon: "🌅",
    name: "East Liverpool",
    areas: ["Wavertree", "Kensington", "Old Swan", "Norris Green", "West Derby", "Broadgreen", "Childwall"],
  },
  {
    icon: "🌳",
    name: "South Liverpool",
    areas: ["Toxteth", "Aigburth", "Allerton", "Woolton", "Garston", "Speke", "Hunts Cross"],
  },
  {
    icon: "🌊",
    name: "West Liverpool / Waterfront",
    areas: ["Mann Island", "Pier Head", "Baltic Triangle", "Brunswick", "Docklands", "Kings Dock", "Waterloo"],
  },
]

const industries = [
  { icon: "🚢", name: "Maritime & Logistics", description: "Helping Liverpool's port-connected businesses grow their digital reach and generate B2B leads." },
  { icon: "💼", name: "Finance & Professional Services", description: "Digital strategies for accountants, consultants, and financial firms across Liverpool city centre." },
  { icon: "🏠", name: "Real Estate & Property", description: "SEO and ads that connect Liverpool estate agents and developers with serious buyers and tenants." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "GDPR-compliant campaigns helping Liverpool clinics and practitioners attract more local patients." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Conversion-focused websites and paid ads for Liverpool's growing retail and e-commerce brands." },
  { icon: "🏨", name: "Hospitality & Tourism", description: "Driving bookings and footfall for Liverpool's hotels, restaurants, and visitor attractions." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Castle Street", desc: "Heritage & professional services" },
  { icon: "🌊", name: "Mann Island", desc: "Waterfront finance & corporate" },
  { icon: "🎨", name: "Baltic Triangle", desc: "Creative, tech & startups" },
  { icon: "🛍️", name: "Liverpool ONE", desc: "Retail & consumer brands" },
  { icon: "🎓", name: "Knowledge Quarter", desc: "Education, science & innovation" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We start by understanding your Liverpool business, competitors, and current digital performance. A full audit identifies quick wins and long-term opportunities specific to your market.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We build a tailored digital strategy aligned to your goals, budget, and Liverpool target audience. Every channel and tactic is chosen with purpose and measurable outcomes in mind.",
  },
  {
    title: "Execution & Implementation",
    description:
      "Our team delivers on every element — from website builds to ad campaigns and SEO optimisation. All work is implemented to UK best practices and GDPR compliance standards.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "You receive clear, jargon-free reports showing exactly what's working and what's improving. We continuously refine your campaigns to maximise performance and return on investment.",
  },
]

const testimonials = [
  {
    name: "James Hartley",
    role: "Marketing Director",
    company: "Hartley Commercial Property",
    location: "Liverpool City Centre",
    rating: 5,
    text: "Linkedo transformed our online presence within just a few months. Our enquiries have doubled and we're now ranking on page one for our key Liverpool search terms.",
  },
  {
    name: "Sarah Malone",
    role: "Managing Director",
    company: "Malone Legal Consultants",
    location: "Wavertree, Liverpool",
    rating: 5,
    text: "We'd tried other agencies before but Linkedo actually delivered. Our Google Ads are now profitable and our website finally converts. Brilliant team to work with.",
  },
  {
    name: "Daniel Owens",
    role: "Founder",
    company: "Owens Creative Studio",
    location: "Baltic Triangle, Liverpool",
    rating: 5,
    text: "From day one, Linkedo were transparent, responsive, and results-focused. Our Baltic Triangle studio has seen a 40% increase in leads since working with them.",
  },
]

export default function LiverpoolPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={liverpoolLocalBusinessSchema} />
      <SchemaMarkup schema={liverpoolBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Liverpool, Merseyside</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Liverpool&apos;s <span className="text-gradient-primary">Digital Marketing Agency</span> — Grow Faster With Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Liverpool businesses get found online, generate leads, and scale with confidence.
            </p>
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
                  <Phone className="w-4 h-4" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View Liverpool Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Liverpool" title="A Digital Marketing Partner Built for Liverpool Businesses">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency serving businesses across Liverpool
              and Merseyside. From the Baltic Triangle&apos;s creative scene to financial firms on Mann Island, we
              build data-driven strategies in SEO, paid ads, web development, and digital security that connect you
              with the right customers — with full transparency and no lock-in contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Liverpool Services"
          title="What We Offer Liverpool Businesses"
          description="We provide a full suite of digital marketing services tailored to the needs of Liverpool businesses — from high-converting websites to targeted ad campaigns that drive real, measurable growth."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why UK-Registered */}
        <Section eyebrow="Why Choose Us" title="Why Work With a UK-Registered Agency">
          <p className="text-muted-foreground max-w-3xl mb-12 mx-auto text-center">
            Liverpool businesses deserve an agency that&apos;s accountable, transparent, and genuinely invested in
            local growth. Linkedo is UK Companies House registered, GDPR compliant, and built to deliver real results
            — not vanity metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Liverpool Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Liverpool Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Serving Liverpool &amp; Merseyside</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Time Zone</p>
                  <p className="text-sm text-muted-foreground">GMT / BST — UK Business Hours</p>
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
        </Section>

        {/* Coverage */}
        <Section
          eyebrow="Our Coverage"
          title="Digital Marketing Services Across Liverpool"
          description="Linkedo works with businesses across all of Liverpool and the wider Merseyside region. Whether you're based in the city centre or the surrounding districts, we deliver locally optimised digital strategies that drive real results."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area) => (
              <div
                key={area.name}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="text-2xl mb-3">{area.icon}</div>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {area.areas.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Our Expertise"
          title="Liverpool Industries We Work With"
          description="Liverpool is home to a diverse and thriving business economy. We work with companies across the city's key sectors, delivering tailored digital strategies that speak directly to their target audiences."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
          <p className="text-center text-sm text-muted-foreground">
            Working in a different sector?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            — we work with businesses across all Liverpool industries.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Know How Liverpool Businesses Win Online"
          description="Liverpool's commercial districts — from Castle Street and Mann Island to the Baltic Triangle, Liverpool ONE, and the Knowledge Quarter — each carry distinct audiences and search behaviours. We use that local intelligence to build digital strategies that reach your customers where they already are."
          gradient
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {businessDistricts.map((d) => (
              <div
                key={d.name}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl mb-2">{d.icon}</div>
                <p className="font-semibold text-foreground text-sm mb-1">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Liverpool Businesses"
          description="We follow a clear, structured process designed to deliver consistent results for Liverpool businesses — no guesswork, no wasted budget, just a proven path from strategy to growth."
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
        <Section eyebrow="Client Testimonials" title="What Liverpool Businesses Say About Us" gradient>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-card/50 border border-border/50 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  <p className="text-xs text-primary mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-sm mx-auto text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <p className="text-sm text-muted-foreground">Based on 15+ Liverpool client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Liverpool Services">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Get Started
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Grow Your Liverpool Business?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Liverpool&apos;s digital landscape is more competitive than ever — businesses that invest in the
                  right strategy today will dominate their market tomorrow. Linkedo is ready to help you get there
                  faster.
                </p>
                <p>
                  Whether you need more leads, better rankings, or a website that actually converts, we&apos;ll build
                  a clear plan tailored to your Liverpool business — with no lock-in contracts and no wasted budget.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link
                href="/contact"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Book a Strategy Call</p>
                  <p className="text-sm text-muted-foreground">Free, no obligation</p>
                </div>
              </Link>
              <a
                href="mailto:info@linkedo.co.uk"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Email Us</p>
                  <p className="text-sm text-muted-foreground">info@linkedo.co.uk</p>
                </div>
              </a>
              <a
                href="tel:+447927969991"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Call Us</p>
                  <p className="text-sm text-muted-foreground">+44 7927 969991</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
