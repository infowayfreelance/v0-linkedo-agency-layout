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

const title = "Digital Marketing Agency Sheffield | Linkedo"
const description =
  "Linkedo offers SEO, Google Ads, Meta Ads & web development in Sheffield. UK-registered, no lock-in contracts. Book a free strategy call today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Sheffield",
    "SEO Sheffield",
    "Google Ads Sheffield",
    "Meta Ads Sheffield",
    "web development Sheffield",
    "PPC agency Sheffield",
    "Sheffield SEO services",
    "South Yorkshire digital marketing",
    "local SEO Sheffield",
    "Linkedo Sheffield",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/sheffield",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/sheffield",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-sheffield.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency Sheffield – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-sheffield.webp"],
  },
}

const sheffieldServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/sheffield#service",
  name: "Sheffield Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Sheffield and South Yorkshire businesses with SEO, Google Ads, Meta Ads, and web development.",
  url: "https://linkedo.co.uk/sheffield",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "Sheffield" },
    { "@type": "AdministrativeArea", name: "South Yorkshire" },
    { "@type": "AdministrativeArea", name: "Yorkshire and the Humber" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sheffield Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const sheffieldBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Sheffield", item: "https://linkedo.co.uk/sheffield" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost in Sheffield?",
    answer:
      "Our pricing is tailored to your business size, goals, and the services required. We offer flexible monthly packages in GBP with no hidden fees — contact us for a free, no-obligation quote specific to your Sheffield business.",
  },
  {
    question: "Which areas of Sheffield do you cover?",
    answer:
      "We serve businesses across the whole of Sheffield and South Yorkshire, including City Centre, Kelham Island, Meadowhall, Attercliffe, Ecclesall, Hillsborough, and all surrounding districts. Remote delivery means location is never a barrier.",
  },
  {
    question: "How long does SEO take to show results in Sheffield?",
    answer:
      "Most Sheffield businesses begin to see measurable improvements in rankings and organic traffic within three to six months. Timelines vary depending on your industry competitiveness and the current state of your website.",
  },
  {
    question: "Do you work with small businesses in Sheffield?",
    answer:
      "Yes — we work with businesses of all sizes, from sole traders and startups in Kelham Island to established SMEs across South Yorkshire. Our packages are designed to be accessible and scalable as your business grows.",
  },
  {
    question: "Do I need to be based in Sheffield to work with you?",
    answer:
      "No — while we specialise in Sheffield and South Yorkshire, we work with UK businesses remotely. All communication, reporting, and support is handled efficiently online during UK business hours.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Absolutely — combining SEO and Google Ads is one of the most effective digital strategies for Sheffield businesses. Ads deliver immediate visibility while SEO builds long-term organic growth, and the two channels reinforce each other.",
  },
  {
    question: "Are you GDPR compliant?",
    answer:
      "Yes — Linkedo is fully compliant with UK GDPR regulations. All data collected through your campaigns and website is handled securely and in accordance with current UK data protection law, giving your Sheffield business complete peace of mind.",
  },
  {
    question: "How do I get started with Linkedo in Sheffield?",
    answer:
      "Simply book a free strategy call or send us an email at info@linkedo.co.uk. We'll learn about your business, review your current digital presence, and recommend the best approach — with no commitment required.",
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
  "Sheffield-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "Campaigns delivered across SEO, Ads & Web Development" },
  { icon: Star, value: "4.9/5", label: "Based on 30+ verified Sheffield client reviews" },
  { icon: MapPin, value: "Sheffield", label: "Serving businesses across all key Sheffield districts" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Sheffield",
    description: "We build fast, conversion-focused websites that represent your Sheffield business professionally online.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Sheffield",
    description: "Rank higher on Google and get found by Sheffield customers actively searching for your services.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Sheffield",
    description: "Drive immediate, targeted traffic to your Sheffield business with expertly managed Google Ads campaigns.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Sheffield",
    description: "Reach Sheffield audiences on Facebook and Instagram with high-converting paid social campaigns.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Sheffield",
    description: "Protect your Sheffield business website from threats with proactive monitoring and security solutions.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "📊",
    title: "Transparent Reporting",
    text: "You receive clear, jargon-free reports every month so you always know exactly how your campaigns are performing.",
  },
  {
    icon: "🔓",
    title: "No Lock-in Contracts",
    text: "We earn your business every month. Cancel anytime — we're confident our results will speak for themselves.",
  },
  {
    icon: "🔒",
    title: "UK-Registered & GDPR Compliant",
    text: "Linkedo is registered with UK Companies House and fully compliant with UK GDPR — giving Sheffield businesses complete peace of mind.",
  },
  {
    icon: "👥",
    title: "Dedicated Sheffield-Based Support",
    text: "You'll have a direct point of contact familiar with the Sheffield market, available during UK business hours.",
  },
  {
    icon: "💷",
    title: "GBP Billing — No Currency Surprises",
    text: "All invoices are issued in British Pounds with no hidden international fees or currency conversion costs.",
  },
  {
    icon: "🎯",
    title: "Full-Service Digital Expertise",
    text: "From SEO and paid ads to web development and security, we manage every aspect of your digital presence under one roof.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Sheffield City Centre", "Castlegate", "Fargate", "Division Street", "Cultural Industries Quarter", "Heart of the City Quarter"],
  },
  {
    icon: "🏗️",
    name: "North Sheffield",
    areas: ["Kelham Island", "Neepsend", "Hillsborough", "Stocksbridge", "Chapeltown", "Ecclesfield", "Burngreave"],
  },
  {
    icon: "🏭",
    name: "East Sheffield",
    areas: ["Darnall", "Attercliffe", "Tinsley", "Meadowhall", "Handsworth", "Woodhouse", "Upper Don Valley"],
  },
  {
    icon: "🌳",
    name: "South Sheffield",
    areas: ["Ecclesall", "Millhouses", "Beauchief", "Norton", "Woodseats", "Gleadless", "Norton Lees"],
  },
  {
    icon: "🎓",
    name: "West Sheffield / Hallam",
    areas: ["Broomhill", "Crookes", "Walkley", "Fulwood", "Lodge Moor", "Ranmoor", "University of Sheffield district"],
  },
]

const industries = [
  { icon: "⚙️", name: "Steel & Advanced Manufacturing", description: "We help Sheffield's manufacturing firms build a credible online presence and generate B2B leads digitally." },
  { icon: "💼", name: "Finance & Professional Services", description: "Targeted SEO and paid media strategies for Sheffield-based accountants, consultants, and financial advisors." },
  { icon: "🏠", name: "Real Estate & Property", description: "We drive qualified buyer and tenant enquiries for Sheffield estate agents and property developers." },
  { icon: "⚖️", name: "Legal Services", description: "High-intent SEO and Google Ads campaigns that connect Sheffield solicitors and law firms with local clients." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "GDPR-compliant digital marketing for Sheffield clinics, private practices, and healthcare providers." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "We grow online revenue for Sheffield-based retailers through SEO, Meta Ads, and conversion-focused web design." },
  { icon: "🍽️", name: "Hospitality & Tourism", description: "Visibility-driven campaigns that attract guests, diners, and visitors to Sheffield's hospitality businesses." },
]

const businessDistricts = [
  { icon: "🏛️", name: "Castlegate", desc: "Heritage & civic core" },
  { icon: "🏗️", name: "Kelham Island", desc: "Creative, tech & startups" },
  { icon: "🏭", name: "Attercliffe", desc: "Manufacturing & industry" },
  { icon: "🛍️", name: "Meadowhall", desc: "Retail & consumer brands" },
  { icon: "🎓", name: "Digital Campus", desc: "Education & innovation" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We begin by understanding your Sheffield business, your target audience, and your current digital footprint. A thorough audit of your website, SEO, and competitors gives us the full picture before any work begins.",
  },
  {
    title: "Strategy & Planning",
    description:
      "Based on our findings, we build a bespoke digital marketing strategy aligned to your goals and the Sheffield market. Every tactic is prioritised by impact, timeline, and return on investment.",
  },
  {
    title: "Execution & Implementation",
    description:
      "Our specialists get to work — whether that's building your website, launching ad campaigns, or optimising your Sheffield SEO. All activity is delivered on time, on brief, and to the highest technical standard.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "You receive clear monthly reports tracking every key metric that matters to your business. We continuously refine and optimise based on real data to ensure sustained growth over time.",
  },
]

const testimonials = [
  {
    name: "James Hartley",
    role: "Managing Director",
    company: "Hartley Steel Fabrications",
    location: "Attercliffe, Sheffield",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Our Google rankings improved within three months and enquiries from Sheffield customers have more than doubled since we started working with them.",
  },
  {
    name: "Sarah Brennan",
    role: "Director",
    company: "Brennan & Co Solicitors",
    location: "Sheffield City Centre",
    rating: 5,
    text: "We'd tried other agencies before but Linkedo were different — transparent, knowledgeable, and genuinely invested in our growth. Our Meta Ads campaigns are now delivering the best ROI we've ever seen.",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Founder",
    company: "Meadowhall Health & Wellness Clinic",
    location: "Meadowhall, Sheffield",
    rating: 5,
    text: "From website development to SEO, Linkedo handled everything professionally. They understood the Sheffield market straight away and built a strategy that actually delivered real results for our clinic.",
  },
]

export default function SheffieldPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={sheffieldServiceSchema} />
      <SchemaMarkup schema={sheffieldBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Sheffield, South Yorkshire</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-primary">Sheffield&apos;s</span> Trusted Digital Marketing Agency — Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Sheffield businesses grow online with expert SEO, paid ads, and high-converting websites — backed
              by a UK-registered agency with no lock-in contracts.
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
                  View Sheffield Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Sheffield" title="A Digital Marketing Agency Sheffield Businesses Can Rely On">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency serving businesses across Sheffield
              and South Yorkshire. We combine technical expertise with local market knowledge to deliver measurable
              results.
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
          eyebrow="Sheffield Services"
          title="What We Offer Sheffield Businesses"
          description="From startups in Kelham Island to established firms in Sheffield City Centre, we offer a full suite of digital marketing services tailored to the Sheffield market. Every service is delivered by specialists, tracked with clear reporting, and built to drive real business growth."
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
            Sheffield businesses deserve an agency that understands both the local market and the wider UK digital
            landscape. Linkedo is fully UK-registered, GDPR compliant, and built to deliver accountable, results-driven
            marketing — with no hidden fees and no lock-in contracts.
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

          {/* Sheffield Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Sheffield Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Sheffield &amp; South Yorkshire</p>
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
          title="Digital Marketing Services Across Sheffield"
          description="We provide digital marketing services to businesses across all areas of Sheffield and the wider South Yorkshire region. Whether you're in the heart of the city or on the outskirts, Linkedo delivers locally informed strategies that connect you with your target audience."
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
          title="Sheffield Industries We Work With"
          description="Sheffield's economy spans steel heritage, advanced manufacturing, finance, and emerging digital industries. We deliver tailored digital strategies for every sector — built on real Sheffield market insight."
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
            Don&apos;t see your industry listed?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>{" "}
            — we work with businesses across all sectors in Sheffield and South Yorkshire.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Understand How Sheffield Businesses Operate Online"
          description="Sheffield is one of the UK's most dynamic regional economies — spanning manufacturing heritage in Attercliffe and the Upper Don Valley, emerging digital industries around the Digital Campus, and thriving commercial hubs in Kelham Island, Meadowhall, and Castlegate. At Linkedo, we track Sheffield's local search trends, competitor landscapes, and industry-specific online behaviour to ensure every campaign we run is informed by real Sheffield market data — not generic national templates."
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
          title="How We Work With Sheffield Businesses"
          description="We follow a clear, structured process with every Sheffield client — from the first discovery call through to ongoing optimisation. You'll always know what we're doing, why we're doing it, and what results it's delivering for your business."
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
        <Section eyebrow="Client Testimonials" title="What Sheffield Businesses Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ verified Sheffield client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Sheffield Services">
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
                Ready to Grow Your Sheffield Business?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Sheffield&apos;s digital marketplace is more competitive than ever — and the businesses investing in
                  SEO, paid ads, and professional web presence today are the ones winning tomorrow. Don&apos;t let
                  competitors take the customers that should be yours.
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
