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
  Award,
  TrendingUp,
} from "lucide-react"

const title = "Edinburgh Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency in Edinburgh. SEO, Google Ads, Meta Ads & Web Development. Book a free strategy call today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Edinburgh",
    "SEO Edinburgh",
    "Google Ads Edinburgh",
    "Meta Ads Edinburgh",
    "web development Edinburgh",
    "PPC agency Edinburgh",
    "Edinburgh SEO services",
    "Scotland digital marketing",
    "local SEO Edinburgh",
    "Linkedo Edinburgh",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/edinburgh",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/edinburgh",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-edinburgh.webp",
        width: 1200,
        height: 630,
        alt: "Edinburgh Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-edinburgh.webp"],
  },
}

const edinburghLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/edinburgh#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/edinburgh",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Edinburgh and Scottish businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Edinburgh" },
    { "@type": "AdministrativeArea", name: "Scotland" },
    { "@type": "AdministrativeArea", name: "Lothian" },
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
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo transformed our online visibility in Edinburgh. We're now ranking on page one for our most competitive keywords — the leads have been outstanding.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Reid" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our direct bookings doubled after Linkedo took over our Google Ads. They really understand the Edinburgh tourism market and peak season demand.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Alistair Cairns" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Professional, transparent, and results-driven. Our new website and SEO strategy has brought in more qualified enquiries than anything we've tried before.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Edinburgh Digital Marketing Services",
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

const edinburghBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Edinburgh", item: "https://linkedo.co.uk/edinburgh" },
  ],
}

const faqs = [
  {
    question: "How much do your Edinburgh digital marketing services cost?",
    answer:
      "Our pricing is tailored to each Edinburgh business based on services, scope, and goals. We offer transparent GBP billing with no hidden fees — contact us for a free quote.",
  },
  {
    question: "Which areas of Edinburgh do you serve?",
    answer:
      "We serve businesses across all Edinburgh districts — including City Centre, New Town, Leith, Haymarket, Morningside, Portobello, and surrounding Lothian areas.",
  },
  {
    question: "How long does SEO take to show results in Edinburgh?",
    answer:
      "Most Edinburgh clients begin seeing measurable improvements within 3–6 months. Timelines depend on competition, current rankings, and the keywords being targeted.",
  },
  {
    question: "Do you work with small Edinburgh businesses?",
    answer:
      "Yes — we work with Edinburgh businesses of all sizes, from sole traders and startups to established SMEs and professional service firms across the city.",
  },
  {
    question: "Do I need a local agency or can you work with me remotely?",
    answer:
      "We work seamlessly with Edinburgh businesses remotely — via video calls, email, and monthly reports. You get full UK-based support without needing face-to-face meetings.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Absolutely — combining SEO and Google Ads is one of the most effective strategies for Edinburgh businesses. Ads drive immediate traffic while SEO builds long-term organic visibility.",
  },
  {
    question: "Are your services GDPR compliant?",
    answer:
      "Yes — all campaigns, data handling, and tracking are fully compliant with UK GDPR regulations. We ensure your Edinburgh business stays protected and legally compliant at all times.",
  },
  {
    question: "How do I get started with Linkedo in Edinburgh?",
    answer:
      "Simply book a free strategy call or email us at info@linkedo.co.uk. We'll discuss your Edinburgh business goals and recommend the right services to get started.",
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
  "Edinburgh-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "50+", label: "Edinburgh & Scottish clients supported" },
  { icon: Star, value: "4.9★", label: "Average client rating across Edinburgh projects" },
  { icon: TrendingUp, value: "98%", label: "Client retention rate across all UK accounts" },
]

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, conversion-optimised websites built for Edinburgh businesses.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Rank higher on Google and attract Edinburgh customers organically.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "ROI-driven Google Ads campaigns targeted at Edinburgh audiences.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook & Instagram ads that reach the right Edinburgh prospects.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security",
    description: "Protect your Edinburgh business website from threats and downtime.",
    href: "/consulting",
  },
]

const benefits = [
  {
    icon: "🏛",
    title: "UK Registered",
    text: "Fully registered at Companies House — accountable and compliant.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant",
    text: "All campaigns and data handling meet strict UK GDPR standards.",
  },
  {
    icon: "🤝",
    title: "No Lock-in Contracts",
    text: "Stay because of results, not because you're tied in.",
  },
  {
    icon: "💷",
    title: "GBP Billing",
    text: "Clear, transparent invoicing in British pounds — no surprises.",
  },
  {
    icon: "📈",
    title: "ROI-Focused",
    text: "Every decision is tied to performance, leads, and revenue growth.",
  },
  {
    icon: "👥",
    title: "Dedicated Support",
    text: "A real team available during UK business hours — no bots.",
  },
]

const coverageAreas = [
  {
    icon: "🏛",
    name: "City Centre",
    areas: ["Old Town", "New Town", "St Andrew Square", "Princes Street", "Grassmarket"],
  },
  {
    icon: "⚓",
    name: "North Edinburgh",
    areas: ["Leith", "Newhaven", "Trinity", "Granton", "Pilton"],
  },
  {
    icon: "🌅",
    name: "East Edinburgh",
    areas: ["Portobello", "Joppa", "Musselburgh", "Restalrig", "Craigentinny"],
  },
  {
    icon: "🌳",
    name: "South Edinburgh",
    areas: ["Morningside", "Marchmont", "Newington", "Bruntsfield", "Gilmerton"],
  },
  {
    icon: "🏙",
    name: "West Edinburgh & Lothian",
    areas: ["Haymarket", "Corstorphine", "Murrayfield", "Livingston", "Bathgate"],
  },
]

const industries = [
  { icon: "💼", name: "Finance & FinTech", description: "Digital growth strategies for Edinburgh's leading financial firms and FinTech startups." },
  { icon: "🏠", name: "Real Estate & Property", description: "High-intent traffic and lead generation for Edinburgh estate agents and developers." },
  { icon: "🏰", name: "Tourism & Hospitality", description: "Visibility campaigns for Edinburgh's hotels, tours, venues, and hospitality businesses." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "Local SEO and web presence for Edinburgh clinics, practices, and health services." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Conversion-focused campaigns for Edinburgh-based online and retail stores." },
  { icon: "🎓", name: "Education & Technology", description: "Growth marketing for Edinburgh's universities, EdTech platforms, and tech companies." },
]

const businessDistricts = [
  { name: "St Andrew Square", desc: "Financial District" },
  { name: "Old Town", desc: "Tourism & Hospitality Hub" },
  { name: "New Town", desc: "Professional Services" },
  { name: "Leith", desc: "Creative & Tech Quarter" },
  { name: "Haymarket", desc: "Business Corridor" },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We analyse your website, competitors, and Edinburgh market position to uncover the biggest growth opportunities.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We build a tailored digital marketing plan aligned to your Edinburgh audience, goals, and budget.",
  },
  {
    title: "Execution & Implementation",
    description:
      "Our team launches and manages your campaigns, website, or SEO with precision and full transparency.",
  },
  {
    title: "Reporting & Optimisation",
    description:
      "You get clear monthly reports with real data — and we continuously refine to improve your results.",
  },
]

const testimonials = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "Director",
    company: "Cairn Financial Group",
    location: "New Town, Edinburgh",
    rating: 5,
    text: "Linkedo transformed our online visibility in Edinburgh. We're now ranking on page one for our most competitive keywords — the leads have been outstanding.",
  },
  {
    initials: "SR",
    name: "Sarah Reid",
    role: "Owner",
    company: "Royal Mile Stays",
    location: "Old Town, Edinburgh",
    rating: 5,
    text: "Our direct bookings doubled after Linkedo took over our Google Ads. They really understand the Edinburgh tourism market and peak season demand.",
  },
  {
    initials: "AC",
    name: "Alistair Cairns",
    role: "Partner",
    company: "Advocate Legal Edinburgh",
    location: "Leith, Edinburgh",
    rating: 5,
    text: "Professional, transparent, and results-driven. Our new website and SEO strategy has brought in more qualified enquiries than anything we've tried before.",
  },
]

export default function EdinburghPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={edinburghLocalBusinessSchema} />
      <SchemaMarkup schema={edinburghBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Edinburgh, Scotland</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Edinburgh&apos;s Trusted{" "}
              <span className="text-gradient-primary">Digital Marketing Agency</span> for Growing Businesses
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              We help Edinburgh businesses get found online, generate more leads, and scale with confidence — through
              expert SEO, paid ads, and web development built for the Scottish market.
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
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View Edinburgh Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Edinburgh" title="A UK-Registered Agency Serving Edinburgh Businesses">
          <div className="max-w-4xl mx-auto text-muted-foreground mb-12">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency helping Edinburgh businesses grow
              online — from the Financial District on St Andrew Square to the creative hubs of Leith and Haymarket.
              We offer transparent GBP billing, no lock-in contracts, and dedicated support built around the Scottish
              market.
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
          eyebrow="Edinburgh Services"
          title="What We Offer Edinburgh Businesses"
          description="From bespoke website builds to targeted paid campaigns, we deliver the full digital marketing stack Edinburgh businesses need to grow, compete, and convert online."
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
            Edinburgh businesses deserve an agency that understands the UK market, operates transparently, and delivers
            measurable results — not vanity metrics or vague promises.
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

          {/* Edinburgh Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Edinburgh Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Serving all Edinburgh businesses remotely &amp; nationwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Time Zone</p>
                  <p className="text-sm text-muted-foreground">GMT / BST — aligned with Scottish business hours</p>
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
          title="Digital Marketing Services Across Edinburgh"
          description="We support businesses across every part of Edinburgh — from the city centre's financial core to the outer districts of West Lothian — with locally informed digital strategies that deliver results."
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
          title="Edinburgh Industries We Work With"
          description="Edinburgh is home to a diverse and thriving economy — from world-class financial institutions on St Andrew Square to a booming tourism sector. We bring sector-specific digital strategies to the industries that power this city."
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
            Don&apos;t see your industry?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>{" "}
            — we work with businesses across all sectors in Edinburgh.
          </p>
        </Section>

        {/* Local Insight */}
        <Section gradient>
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Local Insight
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We Know How Edinburgh Businesses Compete Online
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              From the financial core of St Andrew Square to the creative quarter of Leith and the professional hubs
              of New Town and Haymarket — we build digital strategies around how Edinburgh customers search, compare,
              and buy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {businessDistricts.map((d) => (
                <div key={d.name} className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <p className="font-semibold text-foreground text-sm mb-1">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Edinburgh Businesses"
          description="Every Edinburgh client goes through a clear, structured process — so you always know what's happening, why it's happening, and what results to expect."
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
        <Section
          eyebrow="Client Testimonials"
          title="What Edinburgh Businesses Say About Us"
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    <p className="text-xs text-primary mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {t.location}
                    </p>
                  </div>
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
            <p className="text-sm text-muted-foreground">Based on 15+ Edinburgh client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Edinburgh Services">
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
                Ready to Grow Your Edinburgh Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Edinburgh&apos;s digital market is more competitive than ever — businesses that act now will win the
                leads tomorrow. Don&apos;t let competitors take what&apos;s yours.
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
