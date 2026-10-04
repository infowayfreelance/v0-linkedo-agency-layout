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

const title = "Newcastle Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency in Newcastle offering SEO, Google Ads, Meta Ads & web development. Get a free strategy call today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Newcastle",
    "SEO Newcastle",
    "Google Ads Newcastle",
    "Meta Ads Newcastle",
    "web development Newcastle",
    "PPC agency Newcastle",
    "Newcastle SEO services",
    "Tyne and Wear digital marketing",
    "local SEO Newcastle",
    "Linkedo Newcastle",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/newcastle",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/newcastle",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-newcastle.webp",
        width: 1200,
        height: 630,
        alt: "Newcastle Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-newcastle.webp"],
  },
}

const newcastleLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/newcastle#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/newcastle",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Newcastle and Tyne and Wear businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Newcastle upon Tyne" },
    { "@type": "AdministrativeArea", name: "Tyne and Wear" },
    { "@type": "AdministrativeArea", name: "North East England" },
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
      author: { "@type": "Person", name: "James Hargreaves" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo transformed our online presence completely. Our enquiries doubled within three months of launching our new SEO strategy.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Professional, transparent, and results-driven. Our Google Ads campaigns have delivered the best ROI we've ever seen.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David Thornton" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo understood our Newcastle market instantly. Our website traffic and leads have grown consistently month on month.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Newcastle Digital Marketing Services",
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

const newcastleBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Newcastle", item: "https://linkedo.co.uk/newcastle" },
  ],
}

const faqs = [
  {
    question: "How much do your Newcastle digital marketing services cost?",
    answer:
      "Our pricing is tailored to your business size, goals, and chosen services. We offer flexible GBP-based packages with no hidden fees — contact us for a free quote.",
  },
  {
    question: "Which areas of Newcastle do you serve?",
    answer:
      "We serve all Newcastle districts including City Centre, Jesmond, Gosforth, Gateshead, Benwell, and surrounding Tyne and Wear areas.",
  },
  {
    question: "How long does SEO take to show results in Newcastle?",
    answer:
      "Most Newcastle clients begin seeing measurable improvements within 3 to 6 months. Timelines vary depending on competition, industry, and starting position.",
  },
  {
    question: "Do you work with small Newcastle businesses?",
    answer:
      "Yes, we work with businesses of all sizes across Newcastle. Our flexible packages are designed to suit startups, SMEs, and established companies alike.",
  },
  {
    question: "Do I need to be based in Newcastle to work with you?",
    answer:
      "No, we work remotely with clients across the UK. However, we have dedicated Newcastle-based support available during standard UK business hours.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Absolutely. Combining SEO and Google Ads delivers faster visibility and stronger long-term results for Newcastle businesses competing in busy markets.",
  },
  {
    question: "Are you GDPR compliant?",
    answer:
      "Yes, Linkedo is fully GDPR compliant. All client and campaign data is handled securely in line with UK data protection regulations.",
  },
  {
    question: "How do I get started with Linkedo in Newcastle?",
    answer:
      "Simply book a free strategy call or email us at info@linkedo.co.uk. We'll assess your needs and recommend the best approach for your Newcastle business.",
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
  "Newcastle-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "150+", label: "Campaigns delivered across SEO, Ads & Web Projects" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction — based on 30+ Newcastle reviews" },
  { icon: MapPin, value: "Newcastle", label: "Serving Newcastle, Gateshead & Tyne and Wear" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development in Newcastle",
    description: "Custom, fast, and conversion-focused websites built for Newcastle businesses.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Newcastle",
    description: "Data-driven SEO strategies to rank your Newcastle business on Google.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Newcastle",
    description: "High-ROI Google Ads campaigns managed by certified Newcastle specialists.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Newcastle",
    description: "Targeted Facebook & Instagram ad campaigns that drive real Newcastle leads.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Newcastle",
    description: "Professional website protection keeping your Newcastle business safe online.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🏛️",
    title: "UK Registered & Accountable",
    text: "Linkedo is fully registered with UK Companies House, giving Newcastle clients complete peace of mind.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    text: "You receive clear, jargon-free monthly reports showing exactly what your investment is delivering.",
  },
  {
    icon: "💷",
    title: "GBP Billing, No Hidden Fees",
    text: "All pricing is in GBP with no surprise charges, ever.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant",
    text: "We handle all data in full compliance with UK GDPR regulations.",
  },
  {
    icon: "🤝",
    title: "No Lock-in Contracts",
    text: "Stay because of results, not because you're contractually tied in.",
  },
  {
    icon: "📞",
    title: "Dedicated Newcastle Support",
    text: "A consistent point of contact who understands your business and local market.",
  },
]

const coverageAreas = [
  {
    icon: "🏙️",
    name: "City Centre",
    areas: ["Newcastle City Centre", "Grey Street", "Grainger Town", "Eldon Square", "Central Station", "Newgate Street"],
  },
  {
    icon: "🌿",
    name: "North Newcastle",
    areas: ["Jesmond", "Gosforth", "Kenton", "Fawdon", "Brunton Park", "Kingston Park"],
  },
  {
    icon: "🏭",
    name: "East Newcastle",
    areas: ["Walker", "Byker", "Heaton", "Walkergate", "Shields Road", "Parsons Works"],
  },
  {
    icon: "🌉",
    name: "South Newcastle / Gateshead",
    areas: ["Gateshead Quays", "Gateshead Town Centre", "Low Fell", "Felling", "Team Valley", "Saltmeadows"],
  },
  {
    icon: "🏘️",
    name: "West Newcastle / Benwell",
    areas: ["Benwell", "Scotswood", "Fenham", "Elswick", "Denton Burn", "Westerhope"],
  },
]

const industries = [
  { icon: "⚙️", name: "Energy & Engineering", description: "Supporting Newcastle's thriving energy and engineering firms with targeted digital visibility." },
  { icon: "💼", name: "Finance & Professional Services", description: "Helping Newcastle financial advisors, accountants, and consultants attract high-value clients online." },
  { icon: "🏠", name: "Real Estate & Property", description: "Driving qualified leads for Newcastle estate agents, developers, and property management firms." },
  { icon: "⚖️", name: "Legal Services", description: "Building trust and online authority for Newcastle solicitors, law firms, and legal consultants." },
  { icon: "🏥", name: "Healthcare & Life Sciences", description: "Growing patient and client bases for Newcastle healthcare providers and life science companies." },
  { icon: "🛍️", name: "E-Commerce & Retail", description: "Scaling online sales for Newcastle-based retailers through SEO, Ads, and conversion optimisation." },
  { icon: "🏨", name: "Hospitality & Tourism", description: "Increasing bookings and footfall for Newcastle hotels, restaurants, and tourism businesses." },
]

const businessDistricts = [
  { icon: "🌊", name: "Quayside", desc: "Waterfront commerce" },
  { icon: "🎨", name: "Ouseburn Valley", desc: "Creative & cultural hub" },
  { icon: "🔬", name: "Newcastle Science Central", desc: "Tech & innovation" },
  { icon: "🏛️", name: "Grey Street", desc: "Professional services" },
  { icon: "🌉", name: "Gateshead Quays", desc: "Cross-river commercial" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We analyse your online presence, competitors, and Newcastle market position to identify the best growth opportunities.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We build a bespoke, channel-specific digital strategy aligned to your Newcastle business goals and budget.",
  },
  {
    title: "Execution & Implementation",
    description:
      "We launch campaigns and build assets efficiently, keeping you informed and in control throughout.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "We deliver monthly reports and continuously refine campaigns to maximise your Newcastle ROI.",
  },
]

const testimonials = [
  {
    name: "James Hargreaves",
    role: "Managing Director",
    company: "Hargreaves Engineering Solutions",
    location: "Newcastle City Centre",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Our enquiries doubled within three months of launching our new SEO strategy.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    company: "Mitchell Property Group",
    location: "Gateshead Quays",
    rating: 5,
    text: "Professional, transparent, and results-driven. Our Google Ads campaigns have delivered the best ROI we've ever seen.",
  },
  {
    name: "David Thornton",
    role: "Director",
    company: "Thornton Legal Consultants",
    location: "Jesmond, Newcastle",
    rating: 5,
    text: "Linkedo understood our Newcastle market instantly. Our website traffic and leads have grown consistently month on month.",
  },
]

export default function NewcastlePage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={newcastleLocalBusinessSchema} />
      <SchemaMarkup schema={newcastleBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Newcastle, Tyne and Wear</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient-primary">Newcastle&apos;s</span> Trusted Digital Marketing Agency — Linkedo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Newcastle businesses grow online with proven SEO, paid ads, and high-converting web solutions.
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
                  View Newcastle Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Newcastle" title="UK-Registered Digital Marketing Agency in Newcastle">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12 text-center">
            <p>
              Linkedo helps Newcastle B2B businesses grow online through SEO, Google Ads, Meta Ads, web development, and
              website security. We serve businesses across Newcastle City Centre, Gateshead Quays, and beyond —
              delivering real, measurable results.
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
          eyebrow="Newcastle Services"
          title="What We Offer Newcastle Businesses"
          description="We provide fully managed digital marketing services tailored to Newcastle businesses, helping you attract more leads, rank higher, and convert better online."
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
            Newcastle businesses deserve an agency that understands local markets, delivers transparent results, and
            operates with full UK compliance and accountability.
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

          {/* Newcastle Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Newcastle Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-sm text-muted-foreground">Serving Newcastle &amp; Tyne and Wear</p>
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
          title="Digital Marketing Services Across Newcastle"
          description="We support businesses across all key Newcastle districts and surrounding areas, delivering localised digital strategies that connect with your target audience right where they are."
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
          title="Newcastle Industries We Work With"
          description="We work with Newcastle businesses across a wide range of sectors, delivering industry-specific digital strategies that generate real, measurable growth."
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
              Contact our Newcastle team
            </Link>{" "}
            — we&apos;ll be happy to help.
          </p>
        </Section>

        {/* Local Insight */}
        <Section
          eyebrow="Local Insight"
          title="We Understand Newcastle's Business Landscape"
          description="Newcastle is one of the UK's fastest-growing digital economies, with a thriving business community spanning Quayside, Ouseburn Valley, and Newcastle Science Central. From the professional firms along Grey Street to the innovative tech startups at Newcastle Science Central, every district has its own competitive digital landscape."
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
          title="How We Work With Newcastle Businesses"
          description="We follow a clear four-step process to deliver results-driven digital marketing for every Newcastle client."
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
        <Section eyebrow="Client Testimonials" title="What Newcastle Businesses Say About Us" gradient>
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
            <p className="text-sm text-muted-foreground">Based on 30+ Newcastle client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Newcastle Services">
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
                Ready to Grow Your Newcastle Business?
              </h2>
              <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Newcastle&apos;s digital market is competitive and moving fast — the sooner you act, the sooner
                  you&apos;ll outrank competitors and win more clients online.
                </p>
                <p>
                  Partner with a UK-registered agency that understands Newcastle, delivers transparent results, and
                  never locks you into a contract.
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
