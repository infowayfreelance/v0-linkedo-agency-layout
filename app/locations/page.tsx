import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Award,
  Flag,
  Users,
  FileText,
  Zap,
  Target,
  Building2,
  Search,
  Layers,
  LineChart,
  Handshake,
  Globe,
  Megaphone,
  Palette,
  Briefcase,
  BarChart3,
  Factory,
  Scale,
  ShoppingBag,
  Cpu,
  HardHat,
  Stethoscope,
  GraduationCap,
  Utensils,
  CheckCircle2,
} from "lucide-react"

import { Section } from "@/components/ui/section"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { LocationCard } from "@/components/ui/location-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"

const title = "Digital Marketing Agency Across the UK | SEO, Web & Ads | Linkedo"
const description =
  "Linkedo – UK digital marketing agency. Expert SEO, Web Development & Google Ads for B2B & B2C businesses across London, Manchester, Birmingham."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://linkedo.co.uk/locations" },
  keywords: [
    "digital marketing agency UK",
    "UK SEO agency",
    "Google Ads UK",
    "web development UK",
    "London digital agency",
    "Manchester digital agency",
    "Birmingham digital agency",
    "Linkedo",
  ],
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/locations",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo — Digital Marketing Agency Across the UK",
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

const ukCities = [
  {
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/london",
    description:
      "Our home base. We help London's B2B and B2C businesses dominate local search, run high-converting Google Ads, and build websites that turn visitors into leads.",
  },
  {
    city: "Manchester",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/manchester",
    description:
      "Driving digital growth for businesses across Greater Manchester and the North West — from SEO campaigns to full-funnel paid advertising strategies.",
  },
  {
    city: "Birmingham",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/birmingham",
    description:
      "Helping Midlands businesses rank higher on Google, generate qualified leads, and outperform competitors with data-driven SEO and web solutions.",
  },
  {
    city: "Leeds",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/leeds",
    description:
      "Strategic SEO, paid ads, and web development for Yorkshire businesses ready to scale — whether B2B or B2C, local or regional.",
  },
  {
    city: "Bristol",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/bristol",
    description:
      "Full-service digital marketing for South West businesses and fast-growing startups — from brand-new websites to performance-driven ad campaigns.",
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/edinburgh",
    description:
      "Specialist SEO and Google Ads services for Scottish businesses looking to grow their online visibility and generate consistent, quality leads.",
  },
  {
    city: "Glasgow",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/glasgow",
    description:
      "Connecting Glasgow companies with their ideal customers through targeted SEO, paid media, and conversion-focused web development.",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/liverpool",
    description:
      "Results-focused digital marketing for Liverpool and Merseyside businesses — combining local SEO expertise with proven lead generation strategies.",
  },
  {
    city: "Sheffield",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/sheffield",
    description:
      "Helping Sheffield businesses grow online with tailored SEO, Google Ads, and web development — built around your industry and goals.",
  },
  {
    city: "Nottingham",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/nottingham",
    description:
      "Local SEO, paid advertising, and web solutions designed for East Midlands businesses — from independent traders to scaling B2B firms.",
  },
  {
    city: "Leicester",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/leicester",
    description:
      "Comprehensive digital marketing for Leicester businesses — covering SEO, Google Ads, Meta Ads, and web development under one roof.",
  },
  {
    city: "Newcastle",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/newcastle",
    description:
      "Expert digital growth strategies for North East England businesses — helping you rank, convert, and retain more customers online.",
  },
  {
    city: "Shropshire",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/shropshire",
    description:
      "Helping Shropshire businesses get found, get leads, and grow online — from Shrewsbury to Telford with tailored SEO, Google Ads, and web development.",
  },
  {
    city: "Devon",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/devon",
    description:
      "Helping Devon businesses get found online, win more leads, and grow — from Exeter to Plymouth with tailored SEO, Google Ads, and web development.",
  },
  {
    city: "Midlands",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/midland",
    description:
      "Helping businesses across the Midlands get found online and turn clicks into customers — with SEO, Google Ads, and web development built around local search behaviour.",
  },
]

const trustBadges = [
  { icon: Award, label: "Google Partner Agency" },
  { icon: Flag, label: "UK-Based Team" },
  { icon: Users, label: "B2B & B2C Specialists" },
  { icon: FileText, label: "No Lock-In Contracts" },
  { icon: Zap, label: "Dedicated Account Manager" },
]

const reasonCards = [
  {
    icon: Target,
    title: "ROI-First Approach",
    description:
      "Every campaign, every decision — built around one goal: your return on investment. We don't chase vanity metrics. We chase revenue, leads, and growth that you can actually measure.",
  },
  {
    icon: Building2,
    title: "True UK Market Expertise",
    description:
      "Headquartered in London, our team understands the UK business landscape — from local buying behaviour in Birmingham to B2B procurement cycles in Manchester and Edinburgh.",
  },
  {
    icon: Users,
    title: "B2B & B2C Under One Roof",
    description:
      "Whether you're targeting business decision-makers or everyday consumers, we build strategies tailored to your audience — not generic templates copy-pasted across every client.",
  },
  {
    icon: Search,
    title: "Full-Funnel Digital Services",
    description:
      "From SEO and web development to Google Ads, Meta Ads, branding, and consulting — everything your business needs to grow online, available from a single trusted UK agency.",
  },
  {
    icon: LineChart,
    title: "Transparent Monthly Reporting",
    description:
      "No black-box reporting. You get clear, honest updates on what's working, what's not, and exactly where your budget is going — every single month, without having to chase us.",
  },
  {
    icon: Handshake,
    title: "Dedicated Account Manager",
    description:
      "You'll always have a named point of contact who knows your business inside out. No call centres, no junior account executives — just a senior specialist accountable for your results.",
  },
]

const detailedServices = [
  {
    icon: Globe,
    title: "Web Development",
    audience: "For B2B & B2C",
    description:
      "We build fast, conversion-focused websites that do more than look good — they generate enquiries, capture leads, and represent your brand professionally across every UK market.",
    bullets: [
      "Custom Business Websites",
      "E-Commerce Development",
      "Landing Pages & Microsites",
      "Mobile-First & CRO Optimised",
    ],
    href: "/web-development",
    cta: "View Web Development",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    audience: "For B2B & B2C",
    description:
      "Rank higher on Google across your target UK cities. Our data-driven SEO strategies build long-term organic visibility — so your ideal customers find you before they find your competitors.",
    bullets: [
      "Local & National SEO",
      "Technical SEO Audits",
      "Content Strategy & Optimisation",
      "Link Building & Authority Growth",
    ],
    href: "/seo",
    cta: "View SEO Services",
  },
  {
    icon: BarChart3,
    title: "Google Ads Management",
    audience: "For B2B & B2C",
    description:
      "Stop wasting ad spend. Our certified Google Ads specialists run PPC campaigns across the UK that deliver qualified traffic, lower cost-per-lead, and a measurable return on every pound spent.",
    bullets: [
      "Search & Display Campaigns",
      "Remarketing & Audience Targeting",
      "Lead Generation Campaigns",
      "Monthly Performance Reporting",
    ],
    href: "/google-ads",
    cta: "View Google Ads",
  },
  {
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    audience: "Primarily B2C — Also B2B",
    description:
      "Reach your ideal customers where they spend their time. Our Meta Ads specialists create targeted social advertising campaigns that build brand awareness and drive direct conversions across the UK.",
    bullets: [
      "Facebook & Instagram Ads",
      "Audience Research & Segmentation",
      "Creative Ad Copy & Design",
      "Retargeting & Funnel Campaigns",
    ],
    href: "/meta-ads",
    cta: "View Meta Ads",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    audience: "For B2B & B2C",
    description:
      "First impressions win business. We create compelling brand identities that position your company as the trusted, professional choice — whether you're pitching to procurement teams or consumers browsing online.",
    bullets: [
      "Logo & Visual Identity Design",
      "Brand Guidelines & Tone of Voice",
      "Rebranding for Growing Businesses",
      "Brand Strategy Consulting",
    ],
    href: "/branding",
    cta: "View Branding",
  },
  {
    icon: Briefcase,
    title: "Digital Marketing Consulting",
    audience: "Primarily B2B",
    description:
      "Already have an internal team but need strategic direction? Our senior consultants work alongside your business to audit current performance, identify gaps, and build a roadmap for scalable UK growth.",
    bullets: [
      "Digital Marketing Strategy",
      "SEO & Ads Account Audits",
      "Competitor & Market Analysis",
      "In-House Team Training & Support",
    ],
    href: "/consulting",
    cta: "View Consulting",
  },
]

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    audience: "B2B",
    description:
      "We help UK manufacturers and engineering firms generate qualified leads online — reaching procurement managers, buyers, and decision-makers through targeted SEO and Google Ads.",
    bestServices: "SEO · Google Ads · Web Development",
  },
  {
    icon: Scale,
    title: "Legal & Professional Services",
    audience: "B2B & B2C",
    description:
      "From solicitors and accountants to consultancies and HR firms — we build digital presences that establish authority, improve local search visibility, and convert website visitors into paying clients.",
    bestServices: "Local SEO · Google Ads · Web Development",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce & Retail",
    audience: "B2C",
    description:
      "We grow online stores across the UK with performance-driven SEO, Meta Ads, and Google Shopping campaigns — turning browsers into buyers and one-time customers into loyal repeat shoppers.",
    bestServices: "SEO · Meta Ads · Google Ads",
  },
  {
    icon: Cpu,
    title: "SaaS & Technology",
    audience: "B2B",
    description:
      "We partner with UK SaaS companies and tech startups to build pipeline — through high-intent SEO content, PPC lead generation, and websites that communicate complex value propositions clearly.",
    bestServices: "SEO · Google Ads · Consulting",
  },
  {
    icon: HardHat,
    title: "Construction & Property",
    audience: "B2B & B2C",
    description:
      "From builders and developers to estate agents and interior designers — we help construction and property businesses rank locally, generate enquiries, and win more contracts across the UK.",
    bestServices: "Local SEO · Google Ads · Web Development",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    audience: "B2C",
    description:
      "Clinics, dental practices, physios, and wellness brands trust us to grow their patient base through compliant, ethical digital marketing — with local SEO and Google Ads built for the healthcare sector.",
    bestServices: "Local SEO · Google Ads · Branding",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    audience: "B2B & B2C",
    description:
      "Whether you're a private school, training provider, or e-learning platform — we help education businesses increase enrolments, course sign-ups, and brand visibility across the UK and beyond.",
    bestServices: "Meta Ads · Google Ads · SEO",
  },
  {
    icon: Utensils,
    title: "Hospitality & Food & Beverage",
    audience: "B2C",
    description:
      "Restaurants, hotels, food brands, and hospitality groups use our Meta Ads and local SEO strategies to drive footfall, increase bookings, and build a loyal customer base in competitive UK markets.",
    bestServices: "Meta Ads · Local SEO · Branding",
  },
]

const faqs = [
  {
    question: "Do you work with businesses outside of London?",
    answer:
      "Yes. We're headquartered in London but serve businesses across the entire UK — Manchester, Birmingham, Leeds, Edinburgh, Glasgow, and everywhere in between. All our services are fully remote-friendly, so location is never a barrier.",
  },
  {
    question: "Do you work with both B2B and B2C businesses?",
    answer:
      "Yes — and it's one of our core strengths. We build tailored strategies for both B2B companies (manufacturers, SaaS, professional services) and B2C brands (eCommerce, retail, healthcare, hospitality). Your audience drives our approach, not a generic template.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Most UK businesses see meaningful improvements within three to six months. Competitive industries may take six to twelve months. We're transparent about timelines from day one and track progress monthly so you always know where things stand.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We offer tailored pricing based on your goals, services needed, and market competitiveness — not fixed bundles. Book a free strategy call and we'll recommend the most effective approach for your budget with no obligation.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. We work on a rolling monthly basis — you stay because of results, not contracts. SEO campaigns do require a minimum initial period, as organic growth takes consistent effort to deliver meaningful returns.",
  },
  {
    question: "Will I have a dedicated point of contact?",
    answer:
      "Yes. Every client gets a named account manager who knows your business inside out — no call centres, no being passed around. You'll also receive a clear monthly performance report every single month.",
  },
  {
    question: "My website isn't generating leads — can you help?",
    answer:
      "Absolutely. Poor visibility, weak messaging, slow page speed, or low conversion rates are the usual culprits. We'll audit your current digital presence, identify the exact problem, and give you a clear action plan to fix it.",
  },
  {
    question: "What industries do you have experience in?",
    answer:
      "We've worked across manufacturing, legal, eCommerce, SaaS, construction, healthcare, education, and hospitality. If your sector isn't listed, get in touch — we almost certainly have relevant experience or the capability to deliver results in your market.",
  },
  {
    question: "How do you report on campaign performance?",
    answer:
      "Monthly, in plain English. We cover organic traffic, keyword rankings, leads generated, cost per lead, and return on ad spend — all tied to your actual business goals, not vanity metrics.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free strategy call. A senior team member will learn about your business and goals, then give you honest advice on the best path forward — no hard sell, no jargon, no obligation.",
  },
]

const locationsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://linkedo.co.uk/locations#webpage",
  url: "https://linkedo.co.uk/locations",
  name: title,
  description,
  inLanguage: "en-GB",
  isPartOf: { "@id": "https://linkedo.co.uk/#website" },
  about: { "@id": "https://linkedo.co.uk/#organization" },
  breadcrumb: { "@id": "https://linkedo.co.uk/locations#breadcrumb" },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
}

const locationsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://linkedo.co.uk/locations#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://linkedo.co.uk/locations" },
  ],
}

const locationsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UK Cities Served by Linkedo",
  description: "Linkedo provides digital marketing services across all major UK cities.",
  itemListElement: ukCities.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Place",
      name: c.city,
      address: { "@type": "PostalAddress", addressLocality: c.city, addressCountry: "GB" },
      url: `https://linkedo.co.uk${c.href}`,
    },
  })),
}

const locationsServicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Linkedo Digital Marketing Services",
  itemListElement: detailedServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `https://linkedo.co.uk${s.href}`,
      areaServed: { "@type": "Country", name: "United Kingdom" },
      provider: { "@id": "https://linkedo.co.uk/#organization" },
    },
  })),
}

const locationsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={locationsPageSchema} />
      <SchemaMarkup schema={locationsBreadcrumbSchema} />
      <SchemaMarkup schema={locationsItemListSchema} />
      <SchemaMarkup schema={locationsServicesSchema} />
      <SchemaMarkup schema={locationsFaqSchema} />

      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <Breadcrumbs items={[{ label: "Locations" }]} className="mb-6 justify-center" />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              UK Coverage
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Digital Marketing Agency Serving the Entire{" "}
              <span className="text-gradient-primary">United Kingdom</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              Headquartered in London, Linkedo is a results-driven digital marketing agency working with B2B and B2C
              businesses across every major UK city. From SEO and web development to Google Ads and lead generation —
              we deliver measurable growth, whether you&apos;re a local service business or a national brand.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Headquarters: 483 Green Lanes, London N13 4BS, United Kingdom</span>
            </div>
          </div>
        </Section>

        {/* City Grid */}
        <Section
          eyebrow="UK Cities"
          title="Digital Marketing Services by UK City"
          description="Pick your city to discover how Linkedo can help your business grow in your local market — or scroll to see how we work with businesses across the entire United Kingdom."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukCities.map((location) => (
              <LocationCard key={location.city} {...location} />
            ))}
          </div>
        </Section>

        {/* Not listed */}
        <Section>
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card/50 p-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
              Not Listed? We Work With Businesses Everywhere in the UK
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our digital marketing services are fully remote and location-agnostic. Whether you&apos;re based in
              Plymouth, Aberdeen, Cardiff, or anywhere in between — Linkedo can help your business grow online. We work
              with B2B and B2C clients across all industries, with no geographic limits.
            </p>
          </div>
        </Section>

        {/* Why Choose Linkedo */}
        <Section
          eyebrow="Why Choose Linkedo"
          title="The UK Digital Agency That Delivers, Not Just Promises"
          description="From London to Edinburgh, we partner with B2B and B2C businesses across the United Kingdom to drive real, measurable growth — through SEO, web development, and paid advertising that actually works."
          gradient
        >
          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 border border-border/50 text-sm text-foreground"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Reason cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasonCards.map(({ icon: Icon, title, description }) => (
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

          {/* CTA bar */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-transparent p-8 lg:p-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">
              Ready to grow your business across the UK?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free strategy call — no commitment, no hard sell. Just honest advice from a team that knows UK
              digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/services">
                <AnimatedButton variant="secondary" size="lg">
                  View Our Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* Services across UK */}
        <Section
          eyebrow="Our Services"
          title="Digital Marketing Services Available Across Every UK City"
          description="Whether you're a B2B company generating leads or a B2C brand driving sales, Linkedo delivers the full suite of digital marketing services your business needs — available to every city and region across the United Kingdom."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map(({ icon: Icon, title, audience, description, bullets, href, cta }) => (
              <div
                key={title}
                className="group flex flex-col p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{audience}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                <ul className="space-y-2 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:translate-x-0.5 transition-transform"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 rounded-2xl border border-border/50 bg-card/40 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Not sure which service is right for your business? Our team will assess your current digital presence and
              recommend the best starting point — free of charge, with no obligation.
            </p>
            <Link href="/contact" className="shrink-0">
              <AnimatedButton size="lg">
                Get a Free Digital Audit
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* Industries We Serve */}
        <Section
          eyebrow="Industries We Serve"
          title="Digital Marketing Expertise Across Every Major UK Industry"
          description="No two industries are the same — and neither are our strategies. We work with B2B and B2C businesses across a wide range of UK sectors, building campaigns that reflect your market, your buyers, and your growth goals."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, title, audience, description, bestServices }) => (
              <div
                key={title}
                className="group flex flex-col p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary px-2 py-1 rounded-full border border-primary/30 bg-primary/5">
                    {audience}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                <div className="mt-auto pt-3 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground/80">Best services:</span> {bestServices}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border/50 bg-card/40 p-8 text-center">
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
              Don&apos;t See Your Industry Listed?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              We&apos;ve delivered results for businesses across dozens of UK sectors — from logistics and finance to
              recruitment and non-profits. If your industry isn&apos;t listed above, it doesn&apos;t mean we can&apos;t
              help. Get in touch and we&apos;ll tell you exactly what&apos;s possible for your business.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Discuss Your Industry
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* FAQs */}
        <Section
          eyebrow="FAQs"
          title="Frequently Asked Questions About Working With Linkedo"
          description="Got questions before getting in touch? Here are the answers our UK clients ask us most — covering everything from how we work and what results to expect, to pricing, timelines, and what makes us different."
        >
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* Final CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Let&apos;s Grow Your Business Across the UK
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free strategy call and find out how Linkedo can help your business rank, convert, and grow —
              wherever you&apos;re based in the UK.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/services">
                <AnimatedButton variant="secondary" size="lg">
                  View Our Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
