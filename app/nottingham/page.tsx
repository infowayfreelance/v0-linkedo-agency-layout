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

const title = "Nottingham Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency helping Nottingham businesses grow with SEO, Google Ads, & more. Book a free strategy call."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Nottingham",
    "SEO Nottingham",
    "Google Ads Nottingham",
    "Meta Ads Nottingham",
    "web development Nottingham",
    "PPC agency Nottingham",
    "Nottingham SEO services",
    "East Midlands digital marketing",
    "local SEO Nottingham",
    "Linkedo Nottingham",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/nottingham",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/nottingham",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-nottingham.webp",
        width: 1200,
        height: 630,
        alt: "Nottingham Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-nottingham.webp"],
  },
}

const nottinghamLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/nottingham#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/nottingham",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Nottingham and East Midlands businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Nottingham" },
    { "@type": "AdministrativeArea", name: "Nottinghamshire" },
    { "@type": "AdministrativeArea", name: "East Midlands" },
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
    reviewCount: "30",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Hartley" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo transformed our online presence completely. Since working with them, our organic traffic has doubled and we're consistently generating quality leads through Google. Highly recommend to any Nottingham business serious about growth.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Whitmore" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We approached Linkedo for a full website rebuild and SEO strategy. The results have been outstanding — we're now ranking on page one for our key local search terms and our enquiries have increased significantly.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Daniel Okafor" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The team at Linkedo are professional, transparent, and genuinely invested in our success. Our Google Ads campaigns have delivered a consistent return on investment and we've seen real business growth since partnering with them.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nottingham Digital Marketing Services",
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

const nottinghamBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Nottingham", item: "https://linkedo.co.uk/nottingham" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost for Nottingham businesses?",
    answer:
      "Our pricing is tailored to your specific goals and budget — we don't offer one-size-fits-all packages. Contact us for a free strategy call and we'll provide a transparent, no-obligation quote.",
  },
  {
    question: "Which areas of Nottingham do you serve?",
    answer:
      "We serve businesses across the whole of Nottingham, including the City Centre, Lace Market, Hockley, West Bridgford, Beeston, Arnold, Carlton, and all surrounding districts. We also work with East Midlands businesses beyond Nottingham.",
  },
  {
    question: "How long does SEO take to show results for a Nottingham business?",
    answer:
      "Most Nottingham businesses begin seeing measurable improvements within 3 to 6 months of starting SEO. Timelines vary depending on competition, current website authority, and target keywords.",
  },
  {
    question: "Can you help small and independent Nottingham businesses?",
    answer:
      "Absolutely — we work with businesses of all sizes, from sole traders and startups to established Nottingham SMEs. Our strategies are always scaled to suit your budget and growth stage.",
  },
  {
    question: "Do I need to be based in Nottingham to work with you?",
    answer:
      "No — while we specialise in serving Nottingham businesses, we work with clients across the UK. All our services are delivered remotely with regular communication and clear reporting.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Yes, and we strongly recommend it. Running SEO alongside Google Ads gives your Nottingham business both immediate visibility through paid search and long-term organic growth simultaneously.",
  },
  {
    question: "Are your services GDPR compliant?",
    answer:
      "Yes — every website we build and every campaign we run is fully compliant with UK GDPR regulations. We take data privacy seriously and ensure your business and customers are always protected.",
  },
  {
    question: "How do I get started with Linkedo in Nottingham?",
    answer:
      "Simply book a free strategy call or send us an email at info@linkedo.co.uk. We'll discuss your goals, audit your current online presence, and recommend the best path forward for your Nottingham business.",
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
  "Nottingham-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "UK businesses helped across multiple industries and sectors" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction — based on 30+ verified reviews" },
  { icon: MapPin, value: "Nottingham", label: "Local expertise delivering national-standard results" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Nottingham",
    description: "Custom, conversion-focused websites built for Nottingham businesses that want to stand out online.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Nottingham",
    description: "Data-driven SEO strategies that get Nottingham businesses ranking higher on Google and driving organic traffic.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Nottingham",
    description: "Targeted Google Ads campaigns that deliver measurable ROI for Nottingham service companies and B2B brands.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Nottingham",
    description: "High-performing Facebook and Instagram ad campaigns tailored to reach Nottingham's local audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Nottingham",
    description: "Proactive website security solutions that protect Nottingham businesses from threats, downtime, and data breaches.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🏢",
    title: "UK Companies House Registered",
    text: "Linkedo is a fully registered UK business, giving Nottingham clients complete confidence and legal accountability.",
  },
  {
    icon: "🔓",
    title: "No Lock-in Contracts",
    text: "We earn your business every month through results — not restrictive contracts that trap you in long-term commitments.",
  },
  {
    icon: "💷",
    title: "GBP Billing & Transparent Pricing",
    text: "All invoices are issued in GBP with no hidden fees, making budgeting straightforward for Nottingham businesses.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant Practices",
    text: "Every campaign and website we deliver is built to full UK GDPR standards, keeping your business and your customers protected.",
  },
  {
    icon: "👥",
    title: "Dedicated Nottingham-Based Support",
    text: "You'll always have a direct point of contact who understands Nottingham's business environment and your specific goals.",
  },
  {
    icon: "🎯",
    title: "Full-Service Digital Expertise",
    text: "From SEO and paid ads to web development and security, we offer everything under one roof — no need to manage multiple agencies.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Nottingham City Centre", "Old Market Square", "Lace Market", "Hockley", "Sneinton", "Castle Wharf", "Waterside", "Broadmarsh"],
  },
  {
    icon: "🧭",
    name: "North Nottingham",
    areas: ["Sherwood", "Mapperley", "Arnold", "Bestwood", "Carrington", "Daybrook", "Woodthorpe", "Gedling"],
  },
  {
    icon: "🌅",
    name: "East Nottingham",
    areas: ["Carlton", "Netherfield", "Colwick", "Porchester", "Bakersfield", "Stoke Bardolph", "Burton Joyce"],
  },
  {
    icon: "🌳",
    name: "South Nottingham",
    areas: ["West Bridgford", "Clifton", "Ruddington", "Wilford", "Compton Acres", "Lady Bay", "Edwalton"],
  },
  {
    icon: "🏗️",
    name: "West Nottingham & Beeston",
    areas: ["Beeston", "Dunkirk", "Lenton", "Nottingham Science Park", "Castle Marina", "Wollaton", "Bilborough", "Broxtowe"],
  },
]

const industries = [
  { icon: "🛍️", name: "Retail & E-Commerce", description: "Helping Nottingham retailers and online stores drive traffic, increase conversions, and grow revenue." },
  { icon: "💼", name: "Finance & Professional Services", description: "Supporting Nottingham's accountants, consultants, and financial firms with credibility-driven digital strategies." },
  { icon: "🏠", name: "Real Estate & Property", description: "Generating quality leads for Nottingham estate agents, developers, and property management companies." },
  { icon: "⚖️", name: "Legal Services", description: "Helping Nottingham solicitors and law firms build authority, rank locally, and attract the right clients." },
  { icon: "🏥", name: "Healthcare & Pharmaceuticals", description: "Delivering compliant, trust-focused digital marketing for Nottingham's healthcare providers and clinics." },
  { icon: "⚙️", name: "Manufacturing & Engineering", description: "Supporting Nottingham's industrial and engineering businesses with B2B-focused SEO and lead generation." },
  { icon: "🍽️", name: "Hospitality & Tourism", description: "Boosting visibility and bookings for Nottingham's hotels, restaurants, and visitor attractions." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Lace Market", desc: "Heritage & professional services" },
  { icon: "🎨", name: "Hockley", desc: "Creative & independent retail" },
  { icon: "🚢", name: "Castle Marina", desc: "Waterside commerce" },
  { icon: "🌊", name: "Waterside", desc: "Riverside business hub" },
  { icon: "🔬", name: "Nottingham Science Park", desc: "Tech, science & innovation" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We start by thoroughly analysing your current online presence, competitors, and target market within Nottingham. This gives us a clear picture of where you are and what opportunities exist.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We build a bespoke digital marketing strategy tailored to your Nottingham business goals, budget, and target audience. Every recommendation is backed by data — not guesswork.",
  },
  {
    title: "Execution & Implementation",
    description:
      "Our team gets to work delivering your agreed strategy — whether that's building your website, launching ad campaigns, or implementing SEO improvements. Everything is executed to the highest standard.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "We provide clear, jargon-free monthly reports so you always know exactly how your campaigns are performing. We continuously refine and optimise to ensure your results keep improving.",
  },
]

const testimonials = [
  {
    name: "James Hartley",
    role: "Managing Director",
    company: "Hartley Commercial Finance",
    location: "Lace Market, Nottingham",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Since working with them, our organic traffic has doubled and we're consistently generating quality leads through Google. Highly recommend to any Nottingham business serious about growth.",
  },
  {
    name: "Sarah Whitmore",
    role: "Director",
    company: "Whitmore Property Group",
    location: "West Bridgford, Nottingham",
    rating: 5,
    text: "We approached Linkedo for a full website rebuild and SEO strategy. The results have been outstanding — we're now ranking on page one for our key local search terms and our enquiries have increased significantly.",
  },
  {
    name: "Daniel Okafor",
    role: "Founder",
    company: "Okafor Legal Services",
    location: "Nottingham City Centre",
    rating: 5,
    text: "The team at Linkedo are professional, transparent, and genuinely invested in our success. Our Google Ads campaigns have delivered a consistent return on investment and we've seen real business growth since partnering with them.",
  },
]

export default function NottinghamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={nottinghamLocalBusinessSchema} />
      <SchemaMarkup schema={nottinghamBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Nottingham, East Midlands</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-primary">Nottingham</span> Digital Marketing Agency | Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Nottingham businesses grow online with SEO, paid ads, and web development that delivers real
              results.
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
                  View Nottingham Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Nottingham" title="A UK-Registered Digital Marketing Agency Serving Nottingham Businesses">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency helping B2B businesses and service
              companies across Nottingham grow online. From the Lace Market to Nottingham Science Park, we deliver
              tailored SEO, paid advertising, and web development solutions built around your goals. We combine
              national-standard expertise with genuine local knowledge — so your Nottingham business gets the results it
              deserves.
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
          eyebrow="Nottingham Services"
          title="What We Offer Nottingham Businesses"
          description="We provide a full suite of digital marketing services designed specifically for Nottingham businesses looking to grow online, generate leads, and outperform local competitors."
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
            Nottingham businesses deserve a digital marketing partner they can trust — one that understands the local
            market, operates transparently, and delivers consistent results without locking you into long-term
            contracts.
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

          {/* Nottingham Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Nottingham Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Nottingham &amp; the East Midlands</p>
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
                  <p className="text-sm text-muted-foreground">UK Companies House Registered — Linkedo</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coverage */}
        <Section
          eyebrow="Our Coverage"
          title="Digital Marketing Services Across Nottingham"
          description="We work with businesses right across Nottingham, from the bustling city centre to the surrounding commercial districts and suburbs. Wherever your business is based, Linkedo delivers locally informed digital marketing that drives real results."
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
          title="Nottingham Industries We Work With"
          description="Nottingham has a diverse and thriving business economy — from its renowned retail and hospitality sectors to its growing professional services and advanced manufacturing industries. We bring sector-specific digital marketing expertise to help your business grow."
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
            Working in an industry not listed here?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            — we work across many more sectors in Nottingham and the East Midlands.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Know Nottingham's Business Landscape Inside Out"
          description="Nottingham is one of the East Midlands' most commercially active cities, with thriving business communities across the Lace Market, Hockley, Castle Marina, Waterside, and Nottingham Science Park. Linkedo builds locally informed digital strategies that help Nottingham businesses get found online, generate quality leads, and outperform their local competitors."
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
          title="How We Work With Nottingham Businesses"
          description="We follow a clear, structured process designed to deliver consistent results for Nottingham businesses — from the very first conversation to ongoing campaign optimisation."
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
        <Section eyebrow="Client Testimonials" title="What Nottingham Businesses Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ Nottingham client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Nottingham Services">
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
                Ready to Grow Your Nottingham Business?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Linkedo is ready to help your Nottingham business grow with a tailored strategy built around your
                  goals, your budget, and your local market. Take the first step today with a free, no-obligation
                  strategy call.
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
