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
  TrendingUp,
  Users,
  Award,
} from "lucide-react"

const title = "Bristol Digital Marketing Agency | Linkedo"
const description =
  "Linkedo offers SEO, Google Ads, Meta Ads & Web Design for Bristol businesses. UK-registered, no lock-in contracts. Book a free strategy call."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Bristol",
    "SEO Bristol",
    "Google Ads Bristol",
    "Meta Ads Bristol",
    "web development Bristol",
    "PPC agency Bristol",
    "Bristol SEO services",
    "South West digital marketing",
    "local SEO Bristol",
    "Linkedo Bristol",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/bristol",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/bristol",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-bristol.webp",
        width: 1200,
        height: 630,
        alt: "Bristol Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-bristol.webp"],
  },
}

const bristolServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/bristol#service",
  name: "Bristol Digital Marketing Services",
  serviceType: "Digital Marketing",
  description:
    "UK-registered digital marketing agency serving Bristol businesses with SEO, Google Ads, Meta Ads, and web development strategies that deliver measurable results.",
  url: "https://linkedo.co.uk/bristol",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: [
    { "@type": "City", name: "Bristol" },
    { "@type": "AdministrativeArea", name: "South West England" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bristol Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  logo: "https://linkedo.co.uk/favicon.png",
}

const bristolBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Bristol", item: "https://linkedo.co.uk/bristol" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost in Bristol?",
    answer:
      "Our pricing is tailored to your business size, goals, and chosen services. We offer flexible, transparent packages in GBP with no hidden fees — contact us for a free quote specific to your Bristol business.",
  },
  {
    question: "Which areas of Bristol do you cover?",
    answer:
      "We serve businesses across the whole of Bristol, including the city centre, Clifton, Temple Quarter, Harbourside, Redcliffe, Southville, Bedminster, Filton, and all surrounding districts.",
  },
  {
    question: "How long does SEO take to show results in Bristol?",
    answer:
      "Most Bristol businesses begin seeing measurable improvements within 3 to 6 months. SEO is a long-term investment — the results compound over time and deliver sustainable, lasting visibility.",
  },
  {
    question: "Do you work with small businesses in Bristol?",
    answer:
      "Absolutely. We work with businesses of all sizes, from sole traders and startups to established SMEs across Bristol. Every strategy is scaled and priced to match your budget and growth stage.",
  },
  {
    question: "Do I need to meet you in person or can we work remotely?",
    answer:
      "We work seamlessly with Bristol businesses both remotely and in person. All onboarding, reporting, and strategy sessions can be conducted online — making it convenient for busy Bristol business owners.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Yes — and we strongly recommend it. Running SEO alongside Google Ads gives your Bristol business both immediate paid visibility and long-term organic growth, maximising your overall digital presence.",
  },
  {
    question: "Is your agency GDPR compliant?",
    answer:
      "Yes, Linkedo is fully GDPR compliant. Every campaign, website, and data process we manage meets UK data protection regulations, giving your Bristol business and your customers complete peace of mind.",
  },
  {
    question: "How do I get started with Linkedo in Bristol?",
    answer:
      "Simply book a free strategy call or email us at info@linkedo.co.uk. We'll discuss your goals, audit your current digital presence, and recommend the best strategy for your Bristol business.",
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
  "Bristol-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "UK clients served — trusted by B2B businesses across the UK" },
  { icon: Star, value: "4.9/5", label: "Average client rating — based on 30+ Bristol client reviews" },
  { icon: MapPin, value: "Bristol", label: "Focused campaigns — strategies built around the Bristol market" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Bristol",
    description: "Custom, conversion-focused websites built for Bristol businesses.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Bristol",
    description: "Data-driven SEO strategies to rank your Bristol business higher on Google.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Bristol",
    description: "Targeted Google Ads campaigns that deliver measurable ROI for Bristol companies.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Bristol",
    description: "Facebook & Instagram ad campaigns built to reach Bristol's local audience.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Bristol",
    description: "Protect your Bristol business website from threats, malware, and downtime.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🏛",
    title: "UK Companies House Registered",
    text: "Full legal accountability and business transparency you can verify.",
  },
  {
    icon: "💷",
    title: "GBP Billing, No Hidden Fees",
    text: "Straightforward pricing in pounds with no surprise charges or currency conversions.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant by Default",
    text: "Every campaign and website we build meets UK data protection standards.",
  },
  {
    icon: "📍",
    title: "Bristol Market Knowledge",
    text: "We understand Bristol's commercial landscape, from Harbourside to Temple Quarter.",
  },
  {
    icon: "🤝",
    title: "No Lock-in Contracts",
    text: "Stay because we deliver results, not because you're contractually obligated.",
  },
  {
    icon: "📊",
    title: "Transparent Monthly Reporting",
    text: "Clear, jargon-free reports showing exactly what your investment is delivering.",
  },
]

const coverageAreas = [
  {
    icon: "🏙",
    name: "City Centre Bristol",
    description: "Bristol City Centre, Broadmead, Cabot Circus, Old Market, St Nicholas Market, Temple Meads.",
  },
  {
    icon: "🌿",
    name: "North Bristol",
    description: "Clifton Down, Redland, Westbury-on-Trym, Henleaze, Horfield, Bishopston, Filton.",
  },
  {
    icon: "🏭",
    name: "East Bristol",
    description: "St George, Easton, Lawrence Hill, Redfield, Barton Hill, Speedwell, Kingswood.",
  },
  {
    icon: "🌳",
    name: "South Bristol",
    description: "Bedminster, Southville, Totterdown, Knowle, Brislington, Hengrove, Whitchurch.",
  },
  {
    icon: "🌊",
    name: "West Bristol & Clifton",
    description: "Clifton, Hotwells, Harbourside, Spike Island, Bower Ashton, Ashton Gate, Long Ashton.",
  },
]

const industries = [
  { icon: "✈️", name: "Technology & Aerospace", description: "Digital growth strategies for Bristol's world-leading tech and aerospace sector." },
  { icon: "💼", name: "Finance & Professional Services", description: "Lead generation and SEO for Bristol's financial and professional services firms." },
  { icon: "🏠", name: "Real Estate & Property", description: "Targeted campaigns to connect Bristol property businesses with qualified buyers and tenants." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "Compliant, trust-building digital marketing for Bristol's healthcare providers and clinics." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Performance-driven ads and SEO to grow online sales for Bristol retailers." },
  { icon: "🎨", name: "Hospitality & Creative Industries", description: "Brand-building and audience growth for Bristol's vibrant hospitality and creative sector." },
]

const processSteps = [
  {
    icon: "🔍",
    title: "Discovery & Audit",
    description:
      "We start by understanding your Bristol business, your competitors, and your current digital presence. A thorough audit identifies exactly where opportunities and gaps exist.",
  },
  {
    icon: "📋",
    title: "Strategy & Planning",
    description:
      "We build a bespoke digital marketing strategy tailored to your Bristol audience and business objectives. Every channel, budget, and tactic is planned with measurable outcomes in mind.",
  },
  {
    icon: "🚀",
    title: "Execution & Implementation",
    description:
      "Our team gets to work delivering your strategy — from building websites and launching ad campaigns to implementing SEO and securing your digital assets. Everything is executed to the highest standard.",
  },
  {
    icon: "📊",
    title: "Reporting & Optimisation",
    description:
      "You receive clear, jargon-free monthly reports showing exactly what's working and what's improving. We continuously optimise your campaigns to maximise performance and ROI.",
  },
]

const testimonials = [
  {
    name: "James Hartley",
    role: "Marketing Director",
    company: "Hartley Commercial Finance",
    location: "Temple Quarter, Bristol",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Within three months of launching our new website and SEO campaign, our enquiries doubled. They truly understand the Bristol market.",
  },
  {
    name: "Sarah Okafor",
    role: "Managing Director",
    company: "Okafor Legal Services",
    location: "Clifton, Bristol",
    rating: 5,
    text: "We'd tried other agencies before but none delivered like Linkedo. Our Google Ads campaigns are now generating consistent, qualified leads every week at a fraction of our previous cost.",
  },
  {
    name: "Daniel Marsh",
    role: "Founder",
    company: "Marsh & Co Property Group",
    location: "Redcliffe, Bristol",
    rating: 5,
    text: "From website development to Meta Ads, Linkedo handles everything for us. Their transparency, reporting, and results speak for themselves. Highly recommended for any Bristol business.",
  },
]

export default function BristolPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={bristolServiceSchema} />
      <SchemaMarkup schema={bristolBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Bristol, South West England</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Bristol&apos;s <span className="text-gradient-primary">Digital Marketing Agency</span> — SEO, Ads &amp; Web Design for Growing Businesses
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Bristol businesses get found online, generate leads, and grow — with transparent strategies, no
              lock-in contracts, and a UK-registered team you can trust.
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
                  View Bristol Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Bristol" title="A Digital Marketing Agency Built for Bristol Businesses">
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground mb-12">
            <p>
              Linkedo is a UK-registered digital marketing agency helping Bristol businesses grow online. From Temple
              Quarter to Clifton, we deliver SEO, Google Ads, Meta Ads, Web Development, and Website Security — all
              tailored to the Bristol market.
            </p>
            <p>
              We operate with full transparency, GBP billing, and no lock-in contracts. As a Companies House
              registered agency, every strategy is built around your goals — giving Bristol businesses the
              accountability and results they deserve.
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
          eyebrow="Bristol Services"
          title="What We Offer Bristol Businesses"
          description="Whether you're a startup in Stokes Croft or an established firm in Redcliffe, Linkedo offers a full suite of digital marketing services designed to help Bristol businesses compete, grow, and win online."
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
          <p className="text-muted-foreground max-w-3xl mb-12">
            Bristol businesses deserve an agency that understands the local market, operates with full transparency,
            and delivers consistent results. Linkedo is UK-registered, GDPR compliant, and built around the needs of
            growing B2B businesses across Bristol.
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

          {/* Bristol Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Bristol Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Serving all Bristol districts and surrounding areas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Time Zone</p>
                  <p className="text-sm text-muted-foreground">GMT / BST — aligned with UK business hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Registration</p>
                  <p className="text-sm text-muted-foreground">Registered at UK Companies House</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coverage */}
        <Section
          eyebrow="Our Coverage"
          title="Digital Marketing Services Across Bristol"
          description="Linkedo provides digital marketing services to businesses across the whole of Bristol. Whether you're based in the city centre or the surrounding districts, our team is ready to help your business grow online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area) => (
              <div
                key={area.name}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="text-2xl mb-3">{area.icon}</div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Industries */}
        <Section
          eyebrow="Our Expertise"
          title="Bristol Industries We Work With"
          description="Bristol is home to a diverse and thriving business community. Linkedo works with companies across Bristol's key industries, delivering tailored digital marketing strategies that speak directly to your target audience."
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
            Ready to grow your Bristol business?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch with Linkedo today.
            </Link>
          </p>
        </Section>

        {/* Local Insight */}
        <Section gradient>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Local Insight
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We Know Bristol&apos;s Business Landscape Inside Out
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Bristol is one of the UK&apos;s fastest-growing cities, with a thriving business ecosystem spanning
                  Temple Quarter, Redcliffe, Harbourside, and Clifton. Understanding these commercial zones is
                  essential to building digital strategies that connect with the right local audience.
                </p>
                <p>
                  From the tech startups around Harbourside to the professional firms in Bristol city centre and the
                  independent businesses of Stokes Croft, every Bristol business faces unique digital challenges.
                  Linkedo combines deep local knowledge with data-driven expertise to deliver campaigns that generate
                  real, measurable growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏛", label: "Temple Quarter", desc: "Bristol's emerging digital & finance hub" },
                  { icon: "🌊", label: "Harbourside", desc: "Tech startups & creative agencies" },
                  { icon: "🏘", label: "Clifton", desc: "Professional services & premium businesses" },
                  { icon: "🎨", label: "Stokes Croft", desc: "Independent retailers & creative businesses" },
                ].map((district) => (
                  <div key={district.label} className="p-4 rounded-xl bg-card/50 border border-border/50">
                    <div className="text-2xl mb-2">{district.icon}</div>
                    <p className="font-semibold text-foreground text-sm mb-1">{district.label}</p>
                    <p className="text-xs text-muted-foreground">{district.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Bristol Businesses"
          description="We follow a clear, proven four-step process that ensures every Bristol business we work with gets a strategy built around their goals, their market, and their growth potential."
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
        <Section
          eyebrow="Client Testimonials"
          title="What Bristol Businesses Say About Us"
          gradient
        >
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
            <p className="text-sm text-muted-foreground">Based on 15+ Bristol client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Bristol Services">
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
                Ready to Grow Your Bristol Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bristol&apos;s digital landscape is more competitive than ever — and the businesses investing in SEO,
                Ads, and web presence today are the ones dominating tomorrow. Book your free strategy call now and let
                Linkedo build a tailored plan for your Bristol business. No obligation, no lock-in — just honest advice
                and a clear path to growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="tel:+447927969991"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Call Us</p>
                  <p className="text-sm text-muted-foreground">+44 7927 969991</p>
                </div>
              </a>
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
            </div>

            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <a href="mailto:info@linkedo.co.uk">
                <AnimatedButton variant="secondary" size="lg">
                  <Mail className="w-4 h-4" />
                  Email Us
                </AnimatedButton>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
