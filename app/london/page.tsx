import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  Check,
  Code,
  Search,
  BarChart3,
  Megaphone,
  Shield,
  Trophy,
  Globe2,
  CheckCircle2,
  Phone,
  Mail,
  Star,
  Compass,
  ClipboardList,
  Cog,
  LineChart,
  Landmark,
  Home as HomeIcon,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Utensils,
} from "lucide-react"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"

const title = "Digital Marketing Agency in London | Linkedo"
const description =
  "London's trusted digital marketing agency. We deliver SEO, Google Ads, Meta Ads & web development that generate real leads for businesses across London."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://linkedo.co.uk/london" },
  keywords: [
    "digital marketing agency London",
    "SEO agency London",
    "Google Ads London",
    "Meta Ads London",
    "web development London",
    "Linkedo London",
  ],
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/london",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/tower-bridge-sunset-london.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in London – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/tower-bridge-sunset-london.webp"],
  },
}

const trustBadges = [
  "UK Companies House Registered",
  "GDPR Compliant",
  "GBP Billing",
  "London-Based Support",
  "No Lock-in Contracts",
]

const aboutStats = [
  {
    icon: Trophy,
    value: "200%+",
    label: "Average lead increase for London clients",
  },
  {
    icon: MapPin,
    value: "Greater London",
    label: "Full coverage across all boroughs",
  },
  {
    icon: Globe2,
    value: "UK Registered",
    label: "Accountable, compliant & local",
  },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in London",
    description:
      "Custom, conversion-focused websites built to perform in London's competitive digital landscape.",
    href: "/website-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in London",
    description:
      "Local and national SEO strategies that help London businesses rank higher and attract the right audience.",
    href: "/london/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in London",
    description:
      "High-ROI PPC campaigns targeting London's high-intent audiences across Search, Display, and Shopping.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in London",
    description:
      "Precision-targeted Facebook and Instagram campaigns designed for London-based brands and audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in London",
    description:
      "Comprehensive security audits and ongoing protection keeping London businesses safe and compliant.",
    href: "/services",
  },
]

const ukBenefits = [
  {
    title: "UK-Registered Company",
    description: "Full accountability under UK law and Companies House registration.",
  },
  {
    title: "GDPR-Compliant Processes",
    description: "Your data and your clients' data handled with full UK compliance.",
  },
  {
    title: "GBP Billing",
    description: "No currency conversion fees, no hidden charges — straightforward invoicing.",
  },
  {
    title: "London Market Knowledge",
    description:
      "Deep understanding of London's competitive industries and local search behaviour.",
  },
  {
    title: "Real-Time Communication",
    description:
      "Overlapping UK business hours with direct access to the team doing the work.",
  },
  {
    title: "UK-Based Talent & Partners",
    description:
      "We work with vetted UK professionals to deliver consistent, high-quality results.",
  },
]

const londonCoverage = [
  {
    region: "Central London",
    areas: "City of London, Westminster, Holborn, Soho, Covent Garden, Mayfair, Marylebone",
  },
  {
    region: "North London",
    areas: "Islington, Camden, Hackney, Haringey, Barnet, Enfield, Finsbury Park",
  },
  {
    region: "East London",
    areas:
      "Canary Wharf, Shoreditch, Stratford, Tower Hamlets, Newham, Bethnal Green, Walthamstow",
  },
  {
    region: "South London",
    areas: "Southwark, Lewisham, Greenwich, Rotherhithe, Brixton, Croydon, Wandsworth",
  },
  {
    region: "West London",
    areas: "Hammersmith, Fulham, Kensington, Chelsea, Ealing, Richmond, Hounslow",
  },
]

const industries = [
  {
    icon: Landmark,
    title: "Finance & FinTech",
    description:
      "We help finance and FinTech firms generate qualified leads in London's most competitive sector.",
  },
  {
    icon: HomeIcon,
    title: "Real Estate & Property",
    description:
      "High-converting websites and targeted ad campaigns that drive consistent property enquiries.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description:
      "Compliant, conversion-focused digital marketing connecting healthcare providers with patients searching online.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    description:
      "Scaling London e-commerce brands with SEO, Google Shopping, and high-ROI Meta Ads campaigns.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Building digital pipelines for consultancies, accountants, and B2B service providers across London.",
  },
  {
    icon: Utensils,
    title: "Hospitality & Restaurants",
    description:
      "Driving more bookings and footfall through local SEO, social ads, and high-performing websites.",
  },
]

const processSteps = [
  {
    icon: Compass,
    title: "Discovery & Audit",
    description:
      "We start by understanding your business, your market, and your current digital position — identifying exactly where the biggest growth opportunities lie.",
  },
  {
    icon: ClipboardList,
    title: "Strategy & Planning",
    description:
      "We build a tailored digital strategy around your goals, your target audience, and London's competitive landscape — with clear timelines and measurable targets.",
  },
  {
    icon: Cog,
    title: "Execution & Implementation",
    description:
      "Our team gets to work — building, optimising, and launching your website, SEO, or ad campaigns with precision and full attention to detail.",
  },
  {
    icon: LineChart,
    title: "Reporting & Optimisation",
    description:
      "We provide transparent monthly reporting and continuously refine your campaigns — ensuring your results improve consistently over time.",
  },
]

const testimonials = [
  {
    quote:
      "Linkedo transformed our online presence completely. Within 4 months our qualified leads doubled and our cost per acquisition dropped significantly.",
    name: "James Richardson",
    role: "Managing Director, London Finance Co.",
    location: "City of London",
  },
  {
    quote:
      "Professional, transparent, and results-driven. Linkedo's SEO strategy took us from page 3 to page 1 for our most competitive keywords in London.",
    name: "Sarah Mitchell",
    role: "Head of Marketing, London Property Group",
    location: "Canary Wharf, London",
  },
  {
    quote:
      "Their Google Ads management cut our cost per lead by 60%. The team is responsive, honest, and genuinely invested in our growth.",
    name: "David Clarke",
    role: "Partner, London Legal Services",
    location: "Westminster, London",
  },
]

const aggregateRating = { rating: 4.9, count: 30 }

const faqs = [
  {
    question: "What does a digital marketing agency in London cost?",
    answer:
      "Our pricing depends on the scope of services required. We offer flexible packages for London businesses of all sizes — with transparent, GBP-based pricing and no hidden fees.",
  },
  {
    question: "Which areas of London do you serve?",
    answer:
      "We serve businesses across all 32 London boroughs — from the City of London and Canary Wharf to Shoreditch, Westminster, Croydon, and everywhere in between.",
  },
  {
    question: "How long does SEO take to show results in London?",
    answer:
      "For most London businesses, initial improvements are visible within 3 months — with significant, sustained ranking gains typically achieved within 6 to 12 months.",
  },
  {
    question: "Do you work with small businesses in London?",
    answer:
      "Yes — we work with businesses of all sizes across London, from ambitious startups to established SMEs and growing B2B companies.",
  },
  {
    question: "Are you a local London agency or a remote team?",
    answer:
      "We are a UK-registered company with a physical presence in London — fully accountable, locally available, and operating in GMT/BST business hours.",
  },
  {
    question: "Can you manage both SEO and Google Ads together?",
    answer:
      "Yes — we specialise in running integrated SEO and Google Ads strategies that work together to maximise your visibility and lead generation across London.",
  },
  {
    question: "Is your agency GDPR compliant?",
    answer:
      "Absolutely — all our processes, data handling, and client communications are fully GDPR compliant in line with UK data protection regulations.",
  },
  {
    question: "How do I get started with Linkedo in London?",
    answer:
      "Simply book a free strategy call via our contact page — we'll discuss your goals, audit your current digital presence, and recommend the best path forward.",
  },
]

const londonServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/london#service",
  name: "London Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving London businesses with web development, SEO, Google Ads, and Meta Ads strategies that deliver measurable results.",
  url: "https://linkedo.co.uk/london",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "London Digital Marketing Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `https://linkedo.co.uk${s.href}`,
      },
    })),
  },
  logo: "https://linkedo.co.uk/favicon.png",
  image: "https://linkedo.co.uk/tower-bridge-sunset-london.webp",
}

const londonBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "London", item: "https://linkedo.co.uk/london" },
  ],
}

const londonFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function LondonPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={londonServiceSchema} />
      <SchemaMarkup schema={londonBreadcrumbSchema} />
      <SchemaMarkup schema={londonFaqSchema} />

      <main className="pt-24">
        {/* Hero */}
        <div
          className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}
        >
          <div className="absolute inset-0 bg-background/75" />

          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  United Kingdom
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
                Digital Marketing Agency in{" "}
                <span className="text-gradient-primary">London UK</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-foreground/90 font-semibold mb-6">
                We Help London Businesses Grow Online — With Web, SEO &amp; Ads That Deliver Real
                Results
              </h2>
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                Linkedo is a UK-registered digital marketing agency serving businesses across
                Greater London. We combine data-driven strategy with hands-on execution to bring
                you measurable growth — not vanity metrics.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl">
                Whether you&apos;re a B2B company in the City, a service business in North London,
                or a growing startup in East London — we build digital systems that generate
                consistent, qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <AnimatedButton size="lg">
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>
                <Link href="#services">
                  <AnimatedButton variant="secondary" size="lg">
                    View London Services
                  </AnimatedButton>
                </Link>
              </div>

              {/* Trust Bar */}
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

        {/* About Linkedo in London */}
        <Section
          eyebrow="About Linkedo in London"
          title="A Digital Marketing Agency Built for London's Competitive Market"
        >
          <div className="max-w-3xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              London is one of the world&apos;s most competitive business environments. To stand
              out, you need a digital strategy that&apos;s precise, locally informed, and built
              around your specific growth goals.
            </p>
            <p>
              At Linkedo, we work exclusively with B2B businesses and service companies that want
              real, measurable results — more qualified leads, stronger online visibility, and a
              digital presence that builds long-term authority.
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
          eyebrow="London Services"
          title="What We Offer London Businesses"
          description="Full-service digital marketing tailored for the London market — from custom website development to high-performance SEO and paid advertising campaigns."
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
          title="Why Work With a UK-Registered Agency"
          description="As a UK-registered company, we understand the unique demands of London's business landscape — and we bring the local accountability and expertise you'd expect from a trusted partner."
        >
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {ukBenefits.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{b.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">Our London Presence</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Time Zone</p>
                    <p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p>
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
          title="Digital Marketing Services Across Greater London"
          description="We work with businesses across all 32 London boroughs — delivering the same high standard of web development, SEO, and paid advertising regardless of where you're based in the city."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {londonCoverage.map((c) => (
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
          <p className="text-center text-muted-foreground mt-10">
            Not sure if we cover your area?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Get in touch
            </Link>{" "}
            — we serve clients across the whole of Greater London and beyond.
          </p>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Our Expertise"
          title="London Industries We Work With"
          description="London's business landscape is diverse and fast-moving. We work with companies across key industries — delivering digital strategies built around their specific market, audience, and growth goals."
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
            Don&apos;t see your industry?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Let&apos;s talk
            </Link>{" "}
            — we work with businesses across all sectors in London.
          </p>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With London Businesses"
          description="We follow a clear, structured process with every London client — so you always know what's happening, why it's happening, and what results to expect."
          gradient
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
          title="What London Businesses Say About Us"
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

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-medium text-foreground">
              {aggregateRating.rating} / 5
            </span>
            <span>— Based on {aggregateRating.count}+ London client reviews</span>
          </div>
        </Section>

        {/* FAQs */}
        <Section
          eyebrow="FAQs"
          title="Frequently Asked Questions About Our London Services"
          gradient
        >
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* Final CTA */}
        <Section eyebrow="Get Started" title="Ready to Grow Your London Business?">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
              London&apos;s digital market moves fast — and every day without a strong online
              presence is an opportunity handed to your competitors.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
              Let&apos;s build a strategy tailored specifically for your business, your industry,
              and your target audience across London and beyond.
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
