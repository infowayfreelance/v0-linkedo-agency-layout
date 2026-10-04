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

const title = "Digital Marketing Agency in Devon | Linkedo"
const description =
  "Grow your Devon business with SEO, Google Ads & web development from Linkedo. No lock-in contracts. Book your free consultation today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Devon",
    "SEO Devon",
    "Google Ads Devon",
    "Meta Ads management Devon",
    "web development Devon",
    "online marketing services Devon",
    "internet marketing Devon",
    "SEO Exeter",
    "digital marketing Plymouth",
    "Linkedo Devon",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/devon",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/devon",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency Devon – Linkedo",
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

const devonLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/devon#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/devon",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Devon businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Devon" },
    { "@type": "City", name: "Exeter" },
    { "@type": "City", name: "Plymouth" },
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
      author: { "@type": "Person", name: "Independent Retailer" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Since Linkedo took over our SEO, we've seen a real jump in local footfall and enquiries.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Trades Business Owner" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our Google Ads campaign finally brings in consistent, quality leads every month.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Hospitality Business" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our new website has made a noticeable difference to our online bookings.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Devon Digital Marketing Services",
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

const devonBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://linkedo.co.uk/locations" },
    { "@type": "ListItem", position: 3, name: "Devon", item: "https://linkedo.co.uk/devon" },
  ],
}

const faqs = [
  {
    question: "What does a digital marketing agency in Devon do?",
    answer:
      "We handle SEO, Google Ads, Meta Ads, and web development to help Devon businesses get found online and turn visitors into customers.",
  },
  {
    question: "How much does online marketing in Devon cost?",
    answer:
      "Costs vary depending on your goals, competition, and chosen services. We'll give you a clear, tailored quote after a discovery call.",
  },
  {
    question: "How long does SEO take to show results in Devon?",
    answer:
      "Most businesses start seeing movement within 3–6 months, with stronger gains building over time as authority grows.",
  },
  {
    question: "Does Linkedo work with small businesses in Devon?",
    answer:
      "Yes — we work with independent retailers, trades, and small teams as well as larger businesses across the county.",
  },
  {
    question: "What areas of Devon do you cover?",
    answer:
      "We support businesses across Exeter, Plymouth, Torquay, Barnstaple, Honiton, Crediton, Brixham, and surrounding areas.",
  },
  {
    question: "How does Google Ads management work for Honiton businesses?",
    answer:
      "We build targeted campaigns based on local search intent, budget, and competition specific to the Honiton area.",
  },
  {
    question: "Why is local SEO important for Brixham businesses?",
    answer:
      "Brixham's tourism-driven demand means seasonal, location-based searches matter — local SEO ensures you're visible when it counts.",
  },
  {
    question: "Do you offer website development alongside marketing services?",
    answer:
      "Yes — we build fast, mobile-first websites designed to convert, alongside our SEO and ads services.",
  },
  {
    question: "How is online marketing different from traditional advertising in Devon?",
    answer:
      "Online marketing is measurable and targeted — you can track exactly what's working, unlike traditional print or local ads.",
  },
  {
    question: "How do I get started with Linkedo?",
    answer:
      "Book a free discovery call — we'll review your current setup and build a tailored plan from there.",
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
  { icon: Users, value: "150+", label: "Businesses Supported UK-Wide" },
  { icon: TrendingUp, value: "200%+", label: "Average Lead Increase for Clients" },
  { icon: Star, value: "30+", label: "Verified Client Reviews" },
]

const services = [
  {
    iconName: "Search",
    title: "SEO in Devon",
    description: "Rank higher on Google for local and county-wide searches that actually convert.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Targeted campaigns covering areas like Honiton and Crediton, built for fast, measurable leads.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram campaigns designed to reach the right Devon audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, mobile-first websites built to turn visitors into enquiries.",
    href: "/web-development",
  },
  {
    iconName: "Shield",
    title: "Website Security",
    description: "Ongoing protection and maintenance so your site stays safe and online.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🗺️",
    title: "Local Market Understanding",
    text: "We tailor strategy to how customers search town-by-town across Devon.",
  },
  {
    icon: "📈",
    title: "Proven Results",
    text: "A track record of ranking improvements and real lead growth for clients.",
  },
  {
    icon: "🤝",
    title: "No Long Contracts",
    text: "Work with us on your terms — flexibility, not lock-in.",
  },
  {
    icon: "🏠",
    title: "Full-Service Approach",
    text: "SEO, ads, and web development handled under one roof.",
  },
  {
    icon: "💬",
    title: "Transparent Reporting",
    text: "Clear monthly updates — no vague metrics, no guesswork.",
  },
  {
    icon: "🇬🇧",
    title: "UK-Based Team",
    text: "Direct access to specialists, never outsourced support.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "Towns We Cover",
    areas: ["Exeter", "Plymouth", "Torquay", "Barnstaple", "Honiton", "Crediton", "Brixham"],
  },
  {
    icon: "🏭",
    name: "Industries We Serve",
    areas: ["Hospitality", "Automotive", "Health", "Professional Services"],
  },
  {
    icon: "📣",
    name: "Services Available",
    areas: ["SEO", "Google Ads", "Meta Ads", "Website Development", "Website Security"],
  },
]

const industries = [
  { icon: "🍽️", name: "Hospitality", description: "Growing bookings and brand visibility for Devon restaurants, hotels, and tourism businesses." },
  { icon: "🚗", name: "Automotive", description: "Driving more enquiries and sales for Devon car dealerships, garages, and automotive traders." },
  { icon: "🏥", name: "Health", description: "Helping Devon clinics, therapists, and health practitioners attract local patients online." },
  { icon: "💼", name: "Professional Services", description: "Generating high-quality leads for Devon accountants, solicitors, and consultants online." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Exeter", desc: "County city & commercial hub" },
  { icon: "⚓", name: "Plymouth", desc: "Major port city & business centre" },
  { icon: "🌊", name: "Torquay", desc: "Tourism & leisure hotspot" },
  { icon: "🏘️", name: "Barnstaple", desc: "North Devon market town" },
  { icon: "🌿", name: "Honiton & Beyond", desc: "East Devon & market communities" },
]

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We learn your business goals and review your current marketing setup.",
  },
  {
    title: "Strategy Build",
    description:
      "We create a tailored SEO, Ads, and Web plan for growth across Devon.",
  },
  {
    title: "Execution",
    description:
      "We launch campaigns and optimisations with clear timelines.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "We refine everything on an ongoing basis, based on real performance data.",
  },
]

const testimonials = [
  {
    name: "Independent Retailer",
    role: "Business Owner",
    company: "Local Retail",
    location: "Exeter, Devon",
    rating: 5,
    text: "Since Linkedo took over our SEO, we've seen a real jump in local footfall and enquiries.",
  },
  {
    name: "Trades Business Owner",
    role: "Director",
    company: "Local Trades",
    location: "Plymouth, Devon",
    rating: 5,
    text: "Our Google Ads campaign finally brings in consistent, quality leads every month.",
  },
  {
    name: "Hospitality Business",
    role: "Manager",
    company: "Local Hospitality",
    location: "Torquay, Devon",
    rating: 5,
    text: "Our new website has made a noticeable difference to our online bookings.",
  },
]

export default function DevonPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={devonLocalBusinessSchema} />
      <SchemaMarkup schema={devonBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Devon, England</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              Digital Marketing Agency in <span className="text-gradient-primary">Devon</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3 max-w-3xl">
              SEO, Google Ads &amp; Web Growth That Delivers Results
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-3xl">
              Helping Devon businesses get found online, win more leads, and grow — with no long contracts and no jargon.
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
                  Book Your Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View Devon Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Digital Marketing in Devon" title="UK-Registered Digital Marketing Agency in Devon">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 space-y-4 text-center">
            <p>
              Every business in Devon is fighting for the same thing — to be seen first when a local customer searches
              online. Whether you&apos;re in Exeter, Plymouth, or a smaller town like Honiton, if you&apos;re not
              visible, you&apos;re losing that lead to someone else.
            </p>
            <p>
              Devon&apos;s economy runs on a mix of tourism, independent retail, and trades — which means search demand
              shifts with the seasons and varies hugely from town to town. A strategy that works in Exeter won&apos;t
              automatically work in Barnstaple or Brixham.
            </p>
            <p>
              At Linkedo, we take a data-led approach — combining SEO, paid ads, and conversion-focused web design
              instead of relying on one-off tactics. Our internet marketing strategies are built town-by-town, so your
              business shows up exactly where and when your customers are searching.
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
          eyebrow="Devon Services"
          title="Our Digital Marketing Services in Devon"
          description="We provide fully managed digital marketing services tailored to Devon businesses, helping you attract more leads, rank higher, and convert better online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section eyebrow="Why Choose Us" title="Why Devon Businesses Choose Linkedo">
          <p className="text-muted-foreground max-w-3xl mb-12 mx-auto text-center">
            That&apos;s why online marketing in Devon has to be built around real local search behaviour, not generic
            templates. We build strategies around that reality.
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

          {/* Devon Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Devon Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Devon &amp; surrounding areas</p>
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
          title="Areas We Cover Across Devon"
          description="Whether you need search engine optimisation in Brixham or Google Ads management in Honiton and Crediton, we build campaigns around how your specific local market actually searches."
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
          title="Devon Industries We Work With"
          description="We work with Devon businesses across a range of sectors, delivering industry-specific digital strategies that generate real, measurable growth."
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
          title="We Understand Devon's Business Landscape"
          description="Devon's business landscape is unique — search demand shifts with the seasons and varies hugely from town to town. The right strategy can get you ranking and generating leads faster than you'd expect."
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
          title="How We Work With Devon Businesses"
          description="We follow a clear four-step process to deliver results-driven digital marketing for every Devon client."
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
                Ready to Grow Your Devon Business Online?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Let&apos;s build a strategy that gets you found, and gets you leads.
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
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Get Your Free Marketing Consultation</p>
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
                  Book Your Free Consultation
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
