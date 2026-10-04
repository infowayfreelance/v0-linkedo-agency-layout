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

const title = "Glasgow Digital Marketing Agency | Linkedo"
const description =
  "Linkedo offers SEO, Google Ads, web development & more for Glasgow businesses. UK-registered, GDPR compliant, no lock-in contracts."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Glasgow",
    "SEO Glasgow",
    "Google Ads Glasgow",
    "Meta Ads Glasgow",
    "web development Glasgow",
    "PPC agency Glasgow",
    "Glasgow SEO services",
    "Central Scotland digital marketing",
    "local SEO Glasgow",
    "Linkedo Glasgow",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/glasgow",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/glasgow",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-glasgow.webp",
        width: 1200,
        height: 630,
        alt: "Glasgow Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-glasgow.webp"],
  },
}

const glasgowServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/glasgow#service",
  name: "Glasgow Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Glasgow and Central Scotland businesses with SEO, Google Ads, Meta Ads, and web development.",
  url: "https://linkedo.co.uk/glasgow",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "Glasgow" },
    { "@type": "AdministrativeArea", name: "Scotland" },
    { "@type": "AdministrativeArea", name: "Central Scotland" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Glasgow Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const glasgowBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Glasgow", item: "https://linkedo.co.uk/glasgow" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost in Glasgow?",
    answer:
      "Our pricing is transparent and tailored to your business size and goals. We offer flexible monthly plans in GBP with no hidden fees or lock-in contracts.",
  },
  {
    question: "Which areas of Glasgow do you cover?",
    answer:
      "We serve businesses across all Glasgow districts — including the City Centre, Merchant City, Finnieston, Southside, West End, and everywhere in between.",
  },
  {
    question: "How long does SEO take to show results for a Glasgow business?",
    answer:
      "Most Glasgow clients begin seeing measurable improvements within 3–6 months. Timelines vary depending on your industry competitiveness and current website authority.",
  },
  {
    question: "Do you work with small businesses in Glasgow?",
    answer:
      "Absolutely. We work with Glasgow businesses of all sizes — from sole traders and startups to established SMEs and growing B2B companies.",
  },
  {
    question: "Do I need to meet you in person or can we work remotely?",
    answer:
      "We work seamlessly with Glasgow clients both remotely and in person. Everything from onboarding to reporting is handled efficiently online with full transparency.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Yes — and we recommend it. Combining SEO and Google Ads gives your Glasgow business both immediate visibility and long-term organic growth simultaneously.",
  },
  {
    question: "Is your agency GDPR compliant?",
    answer:
      "Yes, fully. Every campaign, website, and data process we manage is compliant with UK GDPR regulations — protecting both your business and your customers.",
  },
  {
    question: "How do I get started with Linkedo in Glasgow?",
    answer:
      "Simply book a free strategy call or email us at info@linkedo.co.uk. We'll discuss your goals and recommend the right services for your Glasgow business.",
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
  "Glasgow-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: TrendingUp, value: "150+", label: "Campaigns delivered across SEO, Ads & Web projects for UK businesses" },
  { icon: MapPin, value: "All Districts", label: "Serving Glasgow — from Merchant City to the West End and beyond" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction — based on 30+ verified Glasgow client reviews" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Glasgow",
    description: "Custom, fast-loading websites built to convert Glasgow visitors into paying customers.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Glasgow",
    description: "Data-driven SEO strategies that rank your Glasgow business higher on Google.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Glasgow",
    description: "Targeted Google Ads campaigns that drive qualified leads straight to your Glasgow business.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Glasgow",
    description: "Facebook & Instagram ad campaigns designed to reach Glasgow's most valuable audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Glasgow",
    description: "Enterprise-grade website protection keeping your Glasgow business safe online 24/7.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🏛️",
    title: "UK Companies House Registered",
    text: "You're working with a legally accountable, verified UK business — not a freelancer or offshore operation.",
  },
  {
    icon: "📍",
    title: "Glasgow Market Knowledge",
    text: "We understand Glasgow's business districts, local search behaviour, and competitive industries inside out.",
  },
  {
    icon: "💷",
    title: "GBP Billing, No Hidden Fees",
    text: "All pricing is in British Pounds with clear, upfront costs and no surprise charges at month end.",
  },
  {
    icon: "📊",
    title: "Transparent Monthly Reporting",
    text: "You receive clear performance reports every month so you always know exactly where your budget is going.",
  },
  {
    icon: "🤝",
    title: "No Lock-in Contracts",
    text: "We earn your business every month through results, not restrictive long-term contracts.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant by Default",
    text: "Every campaign and website we build is fully compliant with UK GDPR regulations from day one.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Glasgow City Centre", "Merchant City", "Buchanan Street", "Argyle Street", "George Square", "Blythswood Square", "IFSD"],
  },
  {
    icon: "🧭",
    name: "North Glasgow",
    areas: ["Maryhill", "Possilpark", "Springburn", "Bishopbriggs", "Kelvindale", "North Kelvinside", "Lambhill"],
  },
  {
    icon: "🌅",
    name: "East Glasgow",
    areas: ["Dennistoun", "Parkhead", "Shettleston", "Tollcross", "Bridgeton", "Calton", "Dalmarnock"],
  },
  {
    icon: "🌇",
    name: "South Glasgow",
    areas: ["Southside", "Govan", "Pollokshields", "Shawlands", "Newlands", "Battlefield", "Cathcart", "Castlemilk"],
  },
  {
    icon: "🌊",
    name: "West Glasgow / Clydeside",
    areas: ["Finnieston", "Partick", "Hillhead", "Kelvingrove", "Broomhill", "Pacific Quay", "Yorkhill", "Scotstoun"],
  },
]

const industries = [
  { icon: "🏭", name: "Manufacturing & Engineering", description: "Helping Glasgow's industrial and engineering firms generate more B2B leads online." },
  { icon: "💼", name: "Finance & Professional Services", description: "Building authority and trust online for Glasgow's financial advisors and consultancies." },
  { icon: "🏠", name: "Real Estate & Property", description: "Driving qualified buyer and tenant enquiries for Glasgow's property businesses." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "Connecting Glasgow's clinics and health practitioners with local patients online." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Scaling online sales for Glasgow-based retailers through SEO and paid advertising." },
  { icon: "🏨", name: "Hospitality & Tourism", description: "Attracting more guests and visitors to Glasgow's hotels, venues, and experiences." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Merchant City", desc: "Heritage & creative businesses" },
  { icon: "🌊", name: "Finnieston", desc: "Hospitality & lifestyle hub" },
  { icon: "📺", name: "Pacific Quay", desc: "Media, tech & broadcasting" },
  { icon: "💼", name: "IFSD", desc: "International Financial Services District" },
]

const processSteps = [
  {
    icon: "🔍",
    title: "Discovery & Audit",
    description: "We audit your current digital presence and identify growth opportunities specific to your Glasgow market.",
  },
  {
    icon: "🗺️",
    title: "Strategy & Planning",
    description: "We build a bespoke strategy aligned with your Glasgow audience, industry, and business goals.",
  },
  {
    icon: "🚀",
    title: "Execution & Implementation",
    description: "We deliver your strategy across SEO, Ads, or web development to UK professional standards.",
  },
  {
    icon: "📈",
    title: "Reporting & Optimisation",
    description: "You receive clear monthly reports and continuous campaign refinements to maximise your ROI.",
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    company: "Clyde Health Clinic",
    location: "Glasgow City Centre",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Within three months our Glasgow clinic was ranking on page one for every key search term that matters to us.",
  },
  {
    name: "James Donaldson",
    role: "Director",
    company: "Donaldson Property Group",
    location: "Merchant City, Glasgow",
    rating: 5,
    text: "Their Google Ads management cut our cost per lead in half. The team genuinely understands the Glasgow market and it shows in the results every single month.",
  },
  {
    name: "Fiona Campbell",
    role: "Owner",
    company: "Campbell Legal Services",
    location: "Shawlands, Glasgow",
    rating: 5,
    text: "Professional, transparent, and results-driven. Linkedo delivered a website and SEO strategy that has consistently grown our enquiries across the Glasgow Southside area.",
  },
]

export default function GlasgowPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={glasgowServiceSchema} />
      <SchemaMarkup schema={glasgowBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Glasgow, Scotland</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Glasgow&apos;s Trusted{" "}
              <span className="text-gradient-primary">Digital Marketing Agency</span> — Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Glasgow businesses grow online with SEO, web development, Google Ads &amp; more — backed by a
              UK-registered agency you can trust.
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
                  View Glasgow Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Glasgow" title="A Digital Marketing Agency Built for Glasgow's Growing Business Community">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency serving businesses across Glasgow
              and the wider Central Scotland region. We deliver SEO, Google Ads, web development, and more — tailored
              to your local audience, industry, and growth goals. No lock-in contracts, just transparent strategies
              and measurable results.
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
          eyebrow="Glasgow Services"
          title="What We Offer Glasgow Businesses"
          description="Glasgow businesses need more than generic digital marketing — they need strategies built around the city's unique commercial landscape. We offer a full suite of services designed to help you compete, grow, and dominate your local market online."
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
            Glasgow businesses deserve an agency that understands both the local market and the legal standards
            expected of a professional UK operation. Linkedo is fully registered, GDPR compliant, and built to serve
            Scottish businesses with the transparency and accountability they deserve.
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

          {/* Glasgow Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Glasgow Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Serving Glasgow &amp; Central Scotland</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Time Zone</p>
                  <p className="text-sm text-muted-foreground">GMT / BST — aligned with Scottish business hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Registration</p>
                  <p className="text-sm text-muted-foreground">UK Companies House Registered — Linkedo</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coverage */}
        <Section
          eyebrow="Our Coverage"
          title="Digital Marketing Services Across Glasgow"
          description="We provide digital marketing services to businesses across every corner of Glasgow — from the bustling City Centre to the thriving business communities along the Clyde. Wherever your business is based, Linkedo delivers locally optimised strategies that drive real results."
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
          title="Glasgow Industries We Work With"
          description="Glasgow is home to a diverse and fast-growing business economy spanning engineering, finance, tourism, and beyond. We work with companies across Glasgow's key industries, delivering tailored digital marketing strategies that speak directly to their target customers."
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
            Don&apos;t see your industry listed? We work with businesses across all sectors in Glasgow.{" "}
            <a href="mailto:info@linkedo.co.uk" className="text-primary hover:underline">
              Get in touch → info@linkedo.co.uk
            </a>
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Know Glasgow's Business Landscape Inside Out"
          description="Glasgow's commercial hubs — from Merchant City and Finnieston to Pacific Quay and the International Financial Services District — each have unique audiences and search behaviours. We use that local knowledge to build strategies that connect your business with the right Glasgow customers at the right time."
          gradient
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          title="How We Work With Glasgow Businesses"
          description="A simple, transparent process — from first conversation to ongoing results."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative p-6 rounded-xl bg-card/50 border border-border/50">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-2xl mb-3 mt-2">{step.icon}</div>
                <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section eyebrow="Client Testimonials" title="What Glasgow Businesses Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ verified Glasgow client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Glasgow Services">
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
                Ready to Grow Your Glasgow Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Glasgow&apos;s digital market is competitive — the right strategy makes all the difference. Book your
                free strategy call today and get a tailored plan built for your Glasgow business.
              </p>
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
                  <Users className="w-5 h-5 text-primary" />
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
