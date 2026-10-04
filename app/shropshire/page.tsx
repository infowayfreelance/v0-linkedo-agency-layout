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

const title = "Digital Marketing Agency Shropshire | Linkedo"
const description =
  "Grow your Shropshire business with Linkedo's SEO, Google Ads, Meta Ads & web development. No lock-in contracts. Book a free consultation today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Shropshire",
    "SEO Shropshire",
    "Google Ads Shropshire",
    "Meta Ads management Shropshire",
    "web development Shropshire",
    "online marketing services Shropshire",
    "internet marketing Shropshire",
    "SEO Shrewsbury",
    "digital marketing Telford",
    "Linkedo Shropshire",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/shropshire",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/shropshire",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency Shropshire – Linkedo",
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

const shropshireServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/shropshire#service",
  name: "Shropshire Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Shropshire businesses with SEO, Google Ads, Meta Ads, and web development.",
  url: "https://linkedo.co.uk/shropshire",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Shropshire" },
    { "@type": "City", name: "Shrewsbury" },
    { "@type": "City", name: "Telford" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shropshire Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const shropshireBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://linkedo.co.uk/locations" },
    { "@type": "ListItem", position: 3, name: "Shropshire", item: "https://linkedo.co.uk/shropshire" },
  ],
}

const faqs = [
  {
    question: "What does a digital marketing agency in Shropshire actually do?",
    answer:
      "We handle SEO, Google Ads, Meta Ads, and web development to help Shropshire businesses get found online and turn visitors into customers.",
  },
  {
    question: "How much does online marketing cost in Shropshire?",
    answer:
      "Costs vary based on your goals, competition, and which services you need — we build packages around your budget, not a fixed price list.",
  },
  {
    question: "How long does SEO take to show results in Shropshire?",
    answer:
      "Most businesses start seeing meaningful movement within 3–6 months, with lower local competition often speeding this up.",
  },
  {
    question: "Does Linkedo work with small businesses in Shropshire?",
    answer:
      "Yes — we work with businesses of all sizes and tailor strategies to match your budget and goals.",
  },
  {
    question: "What's included in Meta Ads management Shropshire?",
    answer:
      "Campaign setup, audience targeting, ad creative, and ongoing performance reporting.",
  },
  {
    question: "How is online marketing services Shropshire different from national campaigns?",
    answer:
      "We focus on hyper-local targeting — the towns, industries, and search behaviour specific to Shropshire rather than generic UK-wide messaging.",
  },
  {
    question: "Do you offer website development alongside marketing?",
    answer:
      "Yes — we build fast, conversion-focused websites as part of an integrated marketing strategy.",
  },
  {
    question: "Can I cancel my contract if I'm not happy?",
    answer:
      "Yes — we don't lock clients into long-term contracts. You stay because it's working.",
  },
  {
    question: "Which Shropshire towns do you cover?",
    answer:
      "Shrewsbury, Telford, Oswestry, Bridgnorth, Ludlow, Market Drayton, and Whitchurch.",
  },
  {
    question: "How do I get started with Linkedo?",
    answer:
      "Book a free discovery call and we'll map out a strategy tailored to your business.",
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
  { icon: Users, value: "150+", label: "Projects Delivered UK-Wide" },
  { icon: TrendingUp, value: "200%+", label: "Average Increase in Qualified Leads" },
  { icon: Star, value: "30+", label: "5-Star Client Reviews" },
]

const services = [
  {
    iconName: "Search",
    title: "SEO Shropshire",
    description: "Rank higher for the local search terms your Shropshire customers are actually typing into Google.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Targeted PPC campaigns that put your business in front of ready-to-buy searchers across Shropshire.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads Management Shropshire",
    description: "Facebook and Instagram ads built around local audience targeting to drive real enquiries.",
    href: "/meta-ads",
  },
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, mobile-first websites designed to turn visitors into customers, not just look good.",
    href: "/web-development",
  },
  {
    iconName: "Shield",
    title: "Website Security",
    description: "Ongoing monitoring and protection to keep your site and customer data safe.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🗺️",
    title: "Local Market Understanding",
    text: "We know how Shropshire's business landscape differs from major cities — and we build strategies around that.",
  },
  {
    icon: "💬",
    title: "No Jargon, No Fluff",
    text: "Clear communication and honest reporting, so you always know what you're paying for.",
  },
  {
    icon: "📈",
    title: "Results-Driven",
    text: "Every strategy is built around leads and ROI, not vanity metrics that don't grow your business.",
  },
  {
    icon: "🤝",
    title: "Flexible Contracts",
    text: "No long-term lock-in — stay because it's working, not because you're stuck.",
  },
  {
    icon: "🇬🇧",
    title: "UK-Based Team",
    text: "Direct access to the people actually doing the work, not an outsourced call centre.",
  },
  {
    icon: "⭐",
    title: "Proven Track Record",
    text: "Real numbers, real reviews, and a track record of delivering results across the UK.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "Towns We Serve",
    areas: ["Shrewsbury", "Telford", "Oswestry", "Bridgnorth", "Ludlow", "Market Drayton", "Whitchurch"],
  },
  {
    icon: "🏭",
    name: "Industries We Work With",
    areas: ["Trades", "Retail", "Hospitality", "Professional Services", "Manufacturing"],
  },
  {
    icon: "📣",
    name: "Services Available",
    areas: ["SEO", "Google Ads", "Meta Ads", "Website Development", "Website Security"],
  },
]

const industries = [
  { icon: "🔧", name: "Trades", description: "Helping tradespeople across Shropshire win more local jobs through Google, SEO, and targeted paid ads." },
  { icon: "🛍️", name: "Retail", description: "Driving footfall and online sales for Shropshire retailers through local SEO and social advertising." },
  { icon: "🍽️", name: "Hospitality", description: "Growing bookings and brand visibility for Shropshire restaurants, hotels, and tourism businesses." },
  { icon: "💼", name: "Professional Services", description: "Generating high-quality leads for Shropshire accountants, solicitors, and consultants online." },
  { icon: "⚙️", name: "Manufacturing", description: "Building digital presence for Shropshire manufacturers competing in national and regional markets." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Shrewsbury", desc: "County town & commercial hub" },
  { icon: "🏭", name: "Telford", desc: "Growing industrial & business centre" },
  { icon: "🌿", name: "Oswestry", desc: "Border town & market economy" },
  { icon: "🌉", name: "Bridgnorth", desc: "Historic market town" },
  { icon: "🏘️", name: "Ludlow & Beyond", desc: "Rural towns & market communities" },
]

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We learn about your business, your goals, and where your online presence stands today.",
  },
  {
    title: "Strategy Build",
    description:
      "A tailored plan combining SEO, ads, and web improvements based on what your business actually needs.",
  },
  {
    title: "Implementation",
    description:
      "Campaigns go live, your site gets optimised, and tracking is set up from day one.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "Monthly reviews to refine what's working and scale results further.",
  },
]

const testimonials = [
  {
    name: "James Hargreaves",
    role: "Managing Director",
    company: "Hargreaves Engineering Solutions",
    location: "Telford, Shropshire",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Our enquiries doubled within three months of launching our new SEO strategy.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    company: "Mitchell Property Group",
    location: "Shrewsbury, Shropshire",
    rating: 5,
    text: "Professional, transparent, and results-driven. Our Google Ads campaigns have delivered the best ROI we've ever seen.",
  },
  {
    name: "David Thornton",
    role: "Director",
    company: "Thornton Legal Consultants",
    location: "Oswestry, Shropshire",
    rating: 5,
    text: "Linkedo understood our local market instantly. Our website traffic and leads have grown consistently month on month.",
  },
]

export default function ShropshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={shropshireServiceSchema} />
      <SchemaMarkup schema={shropshireBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Shropshire, England</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              Digital Marketing Agency in <span className="text-gradient-primary">Shropshire</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3 max-w-3xl">
              Helping Shropshire businesses get found, get leads, and grow online.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-3xl">
              From Shrewsbury to Telford, we build online marketing strategies that turn local searches into real enquiries.
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
                  View Shropshire Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Shropshire" title="UK-Registered Digital Marketing Agency in Shropshire">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 space-y-4 text-center">
            <p>
              Running a business in Shropshire means competing with companies who show up first on Google — even when
              you&apos;re better at what you do. Without the right online presence, great local businesses stay invisible
              to the customers searching for them right now.
            </p>
            <p>
              Linkedo is a UK-registered digital marketing agency helping businesses grow through SEO, Google Ads, Meta
              Ads, and web development. We know Shropshire isn&apos;t London or Manchester — it needs a different
              playbook, built around local search behaviour and real community trust.
            </p>
            <p>
              Whether you&apos;re in Shrewsbury, Telford, or a smaller market town nearby, visibility online is what
              drives calls, bookings, and sales. For local business owners, this isn&apos;t optional anymore — it&apos;s
              how customers find you first.
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
          eyebrow="Shropshire Services"
          title="Our Digital Marketing Services in Shropshire"
          description="We provide fully managed digital marketing services tailored to Shropshire businesses, helping you attract more leads, rank higher, and convert better online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section eyebrow="Why Choose Us" title="Why Shropshire Businesses Choose Linkedo">
          <p className="text-muted-foreground max-w-3xl mb-12 mx-auto text-center">
            Shropshire&apos;s business landscape is unique — a mix of established market towns, growing hubs like Telford
            and Shrewsbury, and rural areas where trust and reputation matter. We build strategies around that reality.
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

          {/* Shropshire Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Shropshire Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Shropshire &amp; surrounding areas</p>
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
          title="Areas We Cover Across Shropshire"
          description="We support businesses across Shropshire's towns, industries, and service areas — delivering localised digital strategies that connect with your target audience right where they are."
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
          title="Shropshire Industries We Work With"
          description="We work with Shropshire businesses across a range of sectors, delivering industry-specific digital strategies that generate real, measurable growth."
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
          title="We Understand Shropshire's Business Landscape"
          description="Shropshire's business landscape is unique — competition online is lower here than in major UK cities, which means the right strategy can get you ranking and generating leads faster than you'd expect. It's an opportunity most Shropshire businesses haven't fully tapped into yet."
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
          title="How We Work With Shropshire Businesses"
          description="We follow a clear four-step process to deliver results-driven digital marketing for every Shropshire client."
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
                Ready to Grow Your Shropshire Business Online?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Let&apos;s build a strategy that turns local searches into real customers — no long contracts, no
                  jargon, just results.
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
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Book a Free Consultation</p>
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
