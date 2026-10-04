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

const title = "Midland Digital Marketing Agency | SEO & Google Ads – Linkedo"
const description =
  "Grow your Midlands business with expert SEO, Google Ads management & web development. UK-registered, no lock-in contracts. Get a free audit today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Midlands",
    "SEO Midlands",
    "Google Ads management Midland",
    "internet marketing Midland",
    "online marketing services Midland",
    "search engine optimisation Midland",
    "web development Midlands",
    "SEO Birmingham",
    "digital marketing Coventry",
    "Linkedo Midlands",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/midland",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/midland",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Midland Digital Marketing Agency – Linkedo",
      },
    ],
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

const midlandLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/midland#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/midland",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Midlands businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "West Midlands" },
    { "@type": "AdministrativeArea", name: "East Midlands" },
    { "@type": "City", name: "Birmingham" },
    { "@type": "City", name: "Coventry" },
    { "@type": "City", name: "Nottingham" },
    { "@type": "City", name: "Leicester" },
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
      author: { "@type": "Person", name: "Trades Business Owner" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We went from page three to page one in weeks. I couldn't believe the difference it made to our phone ringing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Retail Manager" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our Google Ads were burning budget before Linkedo took over. Now every pound actually brings in customers.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Professional Services Owner" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "First agency that's ever properly explained what they're doing and why. No jargon, just results.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Midlands Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
    ],
  },
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Credit Card",
  parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
}

const midlandBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://linkedo.co.uk/locations" },
    { "@type": "ListItem", position: 3, name: "Midlands", item: "https://linkedo.co.uk/midland" },
  ],
}

const faqs = [
  {
    question: "How much does online marketing cost in Midland?",
    answer:
      "Costs vary depending on your goals, competition, and which services you need. We'll give you a clear, tailored quote after a free audit — no hidden fees, no vague pricing.",
  },
  {
    question: "How long does SEO take to show results in the Midlands?",
    answer:
      "Most clients start seeing ranking movement within 30 days, with stronger results building over 3–6 months. SEO is a long-term investment, but the gains compound over time.",
  },
  {
    question: "What's included in Google Ads management Midland services?",
    answer:
      "We handle campaign setup, keyword targeting, ad copywriting, budget management, and ongoing optimisation — so you get leads, not just clicks.",
  },
  {
    question: "Do you offer contracts or rolling monthly services?",
    answer:
      "We work on a no lock-in, rolling monthly basis. We believe in earning your business through results, not tying you into long contracts.",
  },
  {
    question: "How is internet marketing different from SEO?",
    answer:
      "SEO is one part of internet marketing. Internet marketing also includes paid ads, content, and branding — all working together for faster, more consistent growth.",
  },
  {
    question: "Can you help a small Midlands business compete with bigger companies?",
    answer:
      "Yes — local SEO and targeted ads let smaller businesses outrank bigger competitors in local search results, where it matters most for enquiries.",
  },
  {
    question: "What makes Linkedo different from other Midlands agencies?",
    answer:
      "We combine local market knowledge with a full-service team, transparent reporting, and no long-term contracts — so you always know what you're getting.",
  },
  {
    question: "Do you build websites as well as market them?",
    answer:
      "Yes — we design and build fast, mobile-first websites specifically built to convert visitors into leads, alongside our marketing services.",
  },
  {
    question: "How do you measure success for online marketing services in Midland?",
    answer:
      "We track rankings, leads, conversions, and ROI, and report on all of it monthly in plain, jargon-free language.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free audit. We'll review your current online presence and show you exactly where the opportunities are.",
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
  "UK Registered Company",
  "GDPR Compliant",
  "No Lock-in Contracts",
  "Transparent Reporting",
  "Dedicated Account Manager",
]

const stats = [
  { icon: TrendingUp, value: "200%+", label: "Average Lead Increase for Midland Clients" },
  { icon: Clock, value: "30 Days", label: "Average Time to See Ranking Movement" },
  { icon: Users, value: "100+", label: "UK Businesses Supported" },
]

const services = [
  {
    iconName: "Search",
    title: "Search Engine Optimisation (SEO)",
    description: "We help you rank for the terms your Midland customers are actually searching — including location-specific variations that drive real enquiries.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Built to convert, not just generate clicks. We handle targeting, budget optimisation, and ad copy so every pound spent works harder for your business.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "We put your business in front of the right Midland audiences on Facebook and Instagram, using precise local and interest-based targeting.",
    href: "/meta-ads",
  },
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, mobile-first websites designed to turn Midland visitors into paying customers — not just look good.",
    href: "/web-development",
  },
  {
    iconName: "Target",
    title: "Internet Marketing Strategy",
    description: "A joined-up internet marketing strategy for the Midlands — every channel working together toward the same growth goals.",
    href: "/services",
  },
  {
    iconName: "Palette",
    title: "Branding & Consulting",
    description: "We help Midland businesses sharpen their positioning and messaging, so you don't just get found online — you stand out once you are.",
    href: "/branding",
  },
]

const benefits = [
  {
    icon: "🗺️",
    title: "Local Market Knowledge",
    text: "We understand how Midlands customers search and buy, and we build strategies around that — not generic templates.",
  },
  {
    icon: "📈",
    title: "Proven Results",
    text: "Our track record speaks for itself: measurable ranking improvements and lead growth for UK businesses.",
  },
  {
    icon: "🤝",
    title: "No Long-Term Lock-in",
    text: "We earn your business every month with results, not contracts that trap you.",
  },
  {
    icon: "🏠",
    title: "Full-Service Team",
    text: "SEO, ads, web development, and branding — all under one roof, so nothing falls through the cracks.",
  },
  {
    icon: "💬",
    title: "Transparent Reporting",
    text: "Clear, jargon-free monthly reports that show exactly what's working and what we're doing next.",
  },
  {
    icon: "🇬🇧",
    title: "Fast, Direct Communication",
    text: "You get a real account manager, not a call centre queue.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "West Midlands",
    areas: ["Birmingham", "Coventry", "Wolverhampton", "Dudley", "Walsall"],
  },
  {
    icon: "🏭",
    name: "East Midlands",
    areas: ["Nottingham", "Leicester", "Derby", "Northampton"],
  },
  {
    icon: "📣",
    name: "Staffordshire & Surrounding",
    areas: ["Stoke-on-Trent", "Stafford"],
  },
]

const industries = [
  { icon: "🔧", name: "Trades", description: "Helping tradespeople across the Midlands win more local jobs through Google, SEO, and targeted paid ads." },
  { icon: "🛍️", name: "Retail", description: "Driving footfall and online sales for Midlands retailers through local SEO and social advertising." },
  { icon: "💼", name: "Professional Services", description: "Generating high-quality leads for Midlands accountants, solicitors, and consultants online." },
  { icon: "🍽️", name: "Hospitality", description: "Growing bookings and brand visibility for Midlands restaurants, hotels, and leisure businesses." },
  { icon: "🏥", name: "Healthcare", description: "Helping Midlands clinics and health practitioners attract local patients through targeted digital marketing." },
  { icon: "⚙️", name: "Manufacturing", description: "Building digital presence for Midlands manufacturers competing in national and regional markets." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Birmingham", desc: "West Midlands commercial capital" },
  { icon: "🏭", name: "Coventry", desc: "Major city & manufacturing hub" },
  { icon: "🌆", name: "Nottingham", desc: "East Midlands business centre" },
  { icon: "🏘️", name: "Leicester", desc: "Growing city & retail hub" },
  { icon: "🏗️", name: "Stoke-on-Trent", desc: "Staffordshire industrial centre" },
]

const processSteps = [
  {
    title: "Free Audit",
    description:
      "We review your current online presence and pinpoint the quick wins costing you leads right now.",
  },
  {
    title: "Strategy",
    description:
      "We build a tailored online marketing services Midland plan around your goals, competitors, and customers.",
  },
  {
    title: "Execution",
    description:
      "SEO, ads, and web work are rolled out with clear milestones, so you always know what's happening.",
  },
  {
    title: "Reporting & Growth",
    description:
      "We report monthly and keep optimising, so results compound rather than plateau.",
  },
]

const testimonials = [
  {
    name: "Trades Business Owner",
    role: "Director",
    company: "Local Trades Business",
    location: "West Midlands",
    rating: 5,
    text: "We went from page three to page one in weeks. I couldn't believe the difference it made to our phone ringing.",
  },
  {
    name: "Retail Manager",
    role: "Manager",
    company: "East Midlands Retail",
    location: "East Midlands",
    rating: 5,
    text: "Our Google Ads were burning budget before Linkedo took over. Now every pound actually brings in customers.",
  },
  {
    name: "Professional Services Owner",
    role: "Business Owner",
    company: "Midlands Professional Services",
    location: "Midlands",
    rating: 5,
    text: "First agency that's ever properly explained what they're doing and why. No jargon, just results.",
  },
]

export default function MidlandPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={midlandLocalBusinessSchema} />
      <SchemaMarkup schema={midlandBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Midlands, England</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              Midland <span className="text-gradient-primary">Digital Marketing Agency</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3 max-w-3xl">
              SEO &amp; Google Ads Experts – Linkedo
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-3xl">
              Helping businesses across the Midlands get found online and turn clicks into customers.
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
                  Get My Free Audit
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View Midlands Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Online Marketing in the Midlands" title="UK-Registered Digital Marketing Agency for the Midlands">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 space-y-4 text-center">
            <p>
              If your business isn&apos;t showing up when Midlands customers search for what you offer, you&apos;re
              losing work to competitors who do. Whether you&apos;re in Birmingham, Coventry, Leicester, Nottingham,
              or anywhere across the region, visibility online is what turns searches into sales.
            </p>
            <p>
              The Midlands is one of the UK&apos;s most competitive business regions — spanning major cities,
              industrial towns, and everything in between. Midland customers increasingly search with intent —
              &ldquo;near me,&rdquo; specific towns, and service-led terms — before they ever pick up the phone.
              If you&apos;re not appearing in those searches, a competitor is.
            </p>
            <p>
              At Linkedo, we don&apos;t run generic, one-size-fits-all campaigns. Every Midland client gets a
              strategy built around their specific towns, industry, and customer search behaviour. We combine organic
              SEO with paid Google Ads, so you get faster visibility now while building long-term rankings that keep
              paying off.
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
          eyebrow="Midlands Services"
          title="Our Digital Marketing Services for Midland Businesses"
          description="We provide fully managed digital marketing services tailored to businesses across the Midlands, helping you attract more leads, rank higher, and convert better online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section eyebrow="Why Choose Us" title="Why Midland Businesses Choose Linkedo">
          <p className="text-muted-foreground max-w-3xl mb-12 mx-auto text-center">
            The Midlands is one of the UK&apos;s most competitive business regions. Standing out here means more than
            just having a website — it means being visible exactly when local customers are searching.
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

          {/* Midlands Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Midlands Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving the Midlands &amp; surrounding areas</p>
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
          title="Areas We Cover Across the Midlands"
          description="We work with businesses throughout the region — wherever you're based in the Midlands, our approach is the same: local insight backed by proven digital marketing strategy."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          title="Midlands Industries We Work With"
          description="We work with Midlands businesses across a range of sectors, delivering industry-specific digital strategies that generate real, measurable growth."
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
            Not sure if we cover your industry?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact our team
            </Link>{" "}
            — we&apos;ll be happy to help.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Understand the Midlands Business Landscape"
          description="Local competition is fierce across the Midlands, and the businesses ranking on page one are the ones getting the calls. The right strategy can get you there faster than you'd expect."
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
          title="How We Work With Midlands Businesses"
          description="We follow a clear four-step process to deliver results-driven digital marketing for every Midlands client."
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
        <Section eyebrow="Client Testimonials" title="What Our Clients Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions">
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
                Ready to Grow Your Business Across the Midlands?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Get a free, no-obligation audit and see exactly where you&apos;re missing leads.
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
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Get My Free Audit</p>
                  <p className="text-sm text-muted-foreground">No obligation</p>
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
                  Get My Free Audit
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
