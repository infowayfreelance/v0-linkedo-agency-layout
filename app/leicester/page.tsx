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

const title = "Leicester Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency serving Leicester. Expert SEO, Google Ads, Meta Ads & web development. Book a free strategy call today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Leicester",
    "SEO Leicester",
    "Google Ads Leicester",
    "Meta Ads Leicester",
    "web development Leicester",
    "PPC agency Leicester",
    "Leicester SEO services",
    "Leicestershire digital marketing",
    "local SEO Leicester",
    "Linkedo Leicester",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/leicester",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/leicester",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-leicester.webp",
        width: 1200,
        height: 630,
        alt: "Leicester Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-leicester.webp"],
  },
}

const leicesterServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/leicester#service",
  name: "Leicester Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Leicester and Leicestershire businesses with SEO, Google Ads, Meta Ads, and web development.",
  url: "https://linkedo.co.uk/leicester",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "Leicester" },
    { "@type": "AdministrativeArea", name: "Leicestershire" },
    { "@type": "AdministrativeArea", name: "East Midlands" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leicester Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const leicesterBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Leicester", item: "https://linkedo.co.uk/leicester" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost for Leicester businesses?",
    answer:
      "Our pricing is tailored to your business size, goals, and the services required. We offer flexible, transparent GBP-based packages with no hidden fees — contact us for a free quote.",
  },
  {
    question: "Which areas of Leicester do you cover?",
    answer:
      "We serve businesses across the whole of Leicester and Leicestershire, including the City Centre, Belgrave, Narborough Road, Oadby, Wigston, Braunstone, and all surrounding districts.",
  },
  {
    question: "How long does SEO take to show results for a Leicester business?",
    answer:
      "Most Leicester clients begin seeing measurable improvements within 3 to 6 months. SEO is a long-term strategy, but we focus on quick wins alongside sustainable growth from day one.",
  },
  {
    question: "Do you work with small businesses in Leicester?",
    answer:
      "Absolutely — we work with Leicester businesses of all sizes, from sole traders and startups to established SMEs and multi-location companies across Leicestershire.",
  },
  {
    question: "Do I need to meet you in person or can we work remotely?",
    answer:
      "We work seamlessly with Leicester clients both remotely and in person. All onboarding, reporting, and strategy sessions can be handled fully online without any loss of service quality.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time for my Leicester business?",
    answer:
      "Yes — and we strongly recommend it. Combining SEO and Google Ads gives your Leicester business immediate paid visibility while building long-term organic search authority simultaneously.",
  },
  {
    question: "Is Linkedo GDPR compliant?",
    answer:
      "Yes, Linkedo is fully GDPR compliant. All client data, campaign data, and website projects are handled in accordance with UK GDPR regulations, giving your Leicester business complete peace of mind.",
  },
  {
    question: "How do I get started with Linkedo in Leicester?",
    answer:
      "Simply book a free strategy call or send us an email at info@linkedo.co.uk. We'll review your current digital presence and recommend the best approach for your Leicester business goals.",
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
  "Leicester-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "Campaigns delivered across SEO, Ads & Web Projects" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction — based on 30+ UK client reviews" },
  { icon: MapPin, value: "Leicester", label: "City centre to surrounding Leicestershire districts" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Leicester",
    description: "Custom, high-converting websites built for Leicester businesses and service providers.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Leicester",
    description: "Rank higher on Google and attract more local Leicester customers organically.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Leicester",
    description: "Data-driven Google Ads campaigns that deliver measurable ROI for Leicester businesses.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Leicester",
    description: "Targeted Facebook and Instagram advertising to reach your ideal Leicester audience.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Leicester",
    description: "Protect your Leicester business website from threats, malware, and data breaches.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🎯",
    title: "Local Market Knowledge",
    text: "We understand Leicester's competitive business landscape, from the City Centre retail scene to the professional services corridor along Granby Street.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    text: "Every campaign includes clear, jargon-free reporting so you always know exactly where your budget is going and what results it's generating.",
  },
  {
    icon: "💷",
    title: "GBP Billing — No Hidden Fees",
    text: "All services are billed in GBP with straightforward pricing, giving Leicester businesses full cost clarity from day one.",
  },
  {
    icon: "🔓",
    title: "No Lock-in Contracts",
    text: "We earn your business every month through results, not lengthy contracts. You stay because it's working, not because you're tied in.",
  },
  {
    icon: "🏛️",
    title: "UK Companies House Registered",
    text: "Linkedo is fully registered with UK Companies House, giving Leicester clients complete confidence in our legitimacy and accountability.",
  },
  {
    icon: "📞",
    title: "Dedicated Leicester-Based Support",
    text: "You'll always have direct access to your account manager — no call centres, no overseas handoffs, just responsive UK-based support.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Leicester City Centre", "Highcross", "Haymarket", "Jewry Wall", "Granby Street", "Cathedral Quarter", "St Martin's", "Gallowtree Gate"],
  },
  {
    icon: "🔵",
    name: "North Leicester",
    areas: ["Belgrave", "Rushey Mead", "Thurmaston", "Birstall", "Beaumont Leys", "Hamilton", "Syston", "Cropston"],
  },
  {
    icon: "🟢",
    name: "East Leicester",
    areas: ["Evington", "Spinney Hills", "Humberstone", "Thurnby", "Scraptoft", "Bushby", "Oadby", "Stoughton"],
  },
  {
    icon: "🔴",
    name: "South Leicester",
    areas: ["Knighton", "Stoneygate", "Clarendon Park", "Wigston", "Glen Parva", "Blaby", "South Wigston", "Aylestone"],
  },
  {
    icon: "🟡",
    name: "West Leicester & Braunstone",
    areas: ["Braunstone", "Narborough Road", "Fosse Park", "Glenfield", "Kirby Muxloe", "Braunstone Town", "Western Park", "New Parks"],
  },
]

const industries = [
  { icon: "🧵", name: "Textile & Fashion", description: "Helping Leicester's world-renowned textile and fashion businesses grow their digital presence." },
  { icon: "💼", name: "Finance & Professional Services", description: "Generating high-quality leads for Leicester accountants, consultants, and financial advisers." },
  { icon: "🏠", name: "Real Estate & Property", description: "Driving enquiries and visibility for Leicester estate agents and property developers." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "Connecting Leicester clinics, dentists, and healthcare providers with local patients." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Scaling online sales for Leicester-based retailers through SEO, Ads, and conversion optimisation." },
  { icon: "🍽️", name: "Hospitality & Food & Beverage", description: "Increasing bookings and footfall for Leicester restaurants, cafés, and hospitality businesses." },
]

const businessDistricts = [
  { icon: "🏛️", name: "City Centre", desc: "Retail & professional services" },
  { icon: "🛍️", name: "Highcross", desc: "Shopping & consumer brands" },
  { icon: "🛣️", name: "Narborough Road", desc: "Independent retail & food" },
  { icon: "🌟", name: "Golden Mile", desc: "Belgrave's renowned trade hub" },
  { icon: "🏺", name: "Jewry Wall", desc: "Heritage & cultural quarter" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We analyse your Leicester business, website, competitors, and current digital performance to identify your biggest growth opportunities.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We build a bespoke, data-driven digital marketing strategy tailored to your Leicester market, audience, and business goals.",
  },
  {
    title: "Execution & Implementation",
    description:
      "Our team delivers your strategy with precision — from website builds and SEO to paid ad campaigns across Leicester.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "You receive clear monthly reports with continuous refinements to keep your Leicester campaigns improving and delivering results.",
  },
]

const testimonials = [
  {
    name: "James Thornton",
    role: "Managing Director",
    company: "Thornton Legal Services",
    location: "Leicester City Centre",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Our enquiries have doubled since they took over our SEO and Google Ads, and the results just keep improving month after month.",
  },
  {
    name: "Priya Patel",
    role: "Owner",
    company: "Patel & Co Accountants",
    location: "Belgrave, Leicester",
    rating: 5,
    text: "We'd tried other agencies before but never seen real results. Linkedo built us a new website and within three months we were ranking on page one for our key Leicester search terms.",
  },
  {
    name: "Marco Rossi",
    role: "Director",
    company: "Rossi's Kitchen",
    location: "Narborough Road, Leicester",
    rating: 5,
    text: "The Meta Ads campaign Linkedo ran for our restaurant on Narborough Road brought in more bookings than we'd ever seen. Professional, transparent, and genuinely invested in our success.",
  },
]

export default function LeicesterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={leicesterServiceSchema} />
      <SchemaMarkup schema={leicesterBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Leicester, Leicestershire</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-primary">Leicester</span> Digital Marketing Agency — Grow Your Business Online
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Leicester businesses win more clients through SEO, paid ads, and high-converting websites.
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
                  View Leicester Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Leicester" title="A UK-Registered Digital Marketing Agency Serving Leicester Businesses">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency helping Leicester businesses generate
              more leads, increase visibility, and grow revenue online. We work with B2B companies and service providers
              across Leicester and the wider Leicestershire area.
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
          eyebrow="Leicester Services"
          title="What We Offer Leicester Businesses"
          description="We provide a full suite of digital marketing services designed specifically for Leicester businesses looking to grow online. Every service is tailored to your industry, audience, and local competition."
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
            Leicester businesses deserve a digital marketing partner that understands the local market, operates
            transparently, and delivers measurable results. Linkedo is fully UK-registered, GDPR compliant, and
            committed to growing your business without lock-in contracts.
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

          {/* Leicester Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Leicester Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Leicester &amp; Leicestershire</p>
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
          title="Digital Marketing Services Across Leicester"
          description="We provide digital marketing services to businesses across all areas of Leicester and the wider Leicestershire region. Whether you're based in the city centre or the surrounding districts, Linkedo is here to help you grow online."
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
          title="Leicester Industries We Work With"
          description="Leicester has one of the UK's most diverse and dynamic business economies, from its historic textile trade to its growing professional services sector. We deliver tailored digital marketing strategies that speak directly to your industry and local audience."
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
            Not sure which category your business falls into?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact our Leicester team
            </Link>{" "}
            — we&apos;ll create a strategy built around your specific industry and goals.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Know Leicester's Business Landscape Inside Out"
          description="Leicester is one of the UK's most diverse cities, with thriving commercial zones spanning the City Centre, Highcross, Haymarket, Narborough Road, the Golden Mile, and Jewry Wall. Each area has its own audience, competition, and search behaviour — and we build hyper-local digital strategies that reflect that. Whether you're a city centre professional service or a Belgrave Road retailer, Linkedo helps you get found by the right people."
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
          title="How We Work With Leicester Businesses"
          description="We follow a clear, structured process to ensure every Leicester client receives a strategy that is data-driven, locally optimised, and built for long-term growth."
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
        <Section eyebrow="Client Testimonials" title="What Leicester Businesses Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ Leicester client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Leicester Services">
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
                Ready to Grow Your Leicester Business?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Leicester&apos;s digital marketplace is more competitive than ever — and the businesses investing in
                  SEO, paid ads, and professional web presence today are the ones dominating tomorrow. Now is the right
                  time to act.
                </p>
                <p>
                  Linkedo is ready to build a results-driven digital marketing strategy tailored specifically to your
                  Leicester business, audience, and goals. Let&apos;s start with a free, no-obligation strategy call.
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
