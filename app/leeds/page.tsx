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

const title = "Leeds Digital Marketing Agency | Linkedo"
const description =
  "Linkedo is a UK-registered digital marketing agency in Leeds. SEO, Google Ads, Meta Ads & Web Development. Book a free strategy call today."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing agency Leeds",
    "SEO Leeds",
    "Google Ads Leeds",
    "Meta Ads Leeds",
    "web development Leeds",
    "PPC agency Leeds",
    "Leeds SEO services",
    "West Yorkshire digital marketing",
    "local SEO Leeds",
    "Linkedo Leeds",
  ],
  alternates: {
    canonical: "https://linkedo.co.uk/leeds",
  },
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/leeds",
    siteName: "Linkedo",
    images: [
      {
        url: "https://linkedo.co.uk/og-leeds.webp",
        width: 1200,
        height: 630,
        alt: "Leeds Digital Marketing Agency – Linkedo",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://linkedo.co.uk/og-leeds.webp"],
  },
}

const leedsLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/leeds#localbusiness",
  name: "Linkedo",
  url: "https://linkedo.co.uk/leeds",
  logo: "https://linkedo.co.uk/favicon.png",
  description:
    "UK-registered digital marketing agency serving Leeds and West Yorkshire businesses with SEO, Google Ads, Meta Ads, and web development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Leeds" },
    { "@type": "AdministrativeArea", name: "West Yorkshire" },
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
      author: { "@type": "Person", name: "James Richardson" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Linkedo transformed our online presence completely. Our Google rankings improved within weeks and enquiries have more than doubled since we started working with them.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Thornton" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The team at Linkedo really understands the Leeds market. Their Google Ads campaigns delivered a strong ROI from the very first month with complete transparency throughout.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Daniel Marsden" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Professional, reliable, and results-driven. Linkedo built our new website and handled our SEO — we've seen a significant increase in local Leeds traffic and leads.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leeds Digital Marketing Services",
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

const leedsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Leeds", item: "https://linkedo.co.uk/leeds" },
  ],
}

const faqs = [
  {
    question: "How much do your digital marketing services cost in Leeds?",
    answer:
      "Our pricing is tailored to your specific business needs and goals. We offer transparent, fixed-fee packages in GBP with no hidden costs or surprise charges.",
  },
  {
    question: "Which areas of Leeds do you serve?",
    answer:
      "We serve businesses across all Leeds districts including Leeds City Centre, Headingley, Morley, Horsforth, Garforth, and the wider West Yorkshire region.",
  },
  {
    question: "How long does SEO take to show results for Leeds businesses?",
    answer:
      "Most Leeds clients begin seeing measurable improvements within 90 days. Significant ranking and traffic gains typically develop over a 6–12 month period.",
  },
  {
    question: "Do you work with small businesses in Leeds?",
    answer:
      "Absolutely. We work with Leeds businesses of all sizes, from sole traders and startups to established SMEs and growing companies across West Yorkshire.",
  },
  {
    question: "Do I need to be based in Leeds to work with you?",
    answer:
      "No — we work with businesses remotely across the UK. However, Leeds-based clients can also benefit from local face-to-face consultations when needed.",
  },
  {
    question: "Can I run SEO and Google Ads at the same time?",
    answer:
      "Yes, and we actively recommend it. Combining SEO and Google Ads gives Leeds businesses both immediate visibility and long-term organic growth simultaneously.",
  },
  {
    question: "Are your services GDPR compliant?",
    answer:
      "Yes. All Linkedo services are fully compliant with UK GDPR regulations, ensuring your Leeds business and customer data is always protected and handled responsibly.",
  },
  {
    question: "How do I get started with Linkedo in Leeds?",
    answer:
      "Simply book a free strategy call or email us at info@linkedo.co.uk. We'll discuss your goals and recommend the best digital marketing approach for your Leeds business.",
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

const services = [
  {
    iconName: "Code",
    title: "Website Development in Leeds",
    description: "Build fast, modern, and conversion-focused websites for Leeds businesses.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services in Leeds",
    description: "Rank higher on Google and attract more local Leeds customers organically.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management in Leeds",
    description: "Drive immediate, targeted traffic with expertly managed Google Ads campaigns.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads in Leeds",
    description: "Reach your ideal Leeds audience across Facebook and Instagram with precision.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Website Security in Leeds",
    description: "Protect your Leeds business website from threats, malware, and downtime.",
    href: "/consulting",
  },
]

const trustBadges = [
  "UK Companies House Registered",
  "GDPR Compliant",
  "GBP Billing",
  "Leeds-Based Support",
  "No Lock-in Contracts",
]

const stats = [
  { icon: Users, value: "30+", label: "Leeds & West Yorkshire businesses supported" },
  { icon: TrendingUp, value: "90 Days", label: "Average timeline to first SEO results" },
  { icon: Award, value: "100% GBP", label: "Transparent billing — no hidden fees" },
]

const benefits = [
  {
    icon: "✅",
    title: "UK-Registered & Accountable",
    text: "Linkedo is registered with UK Companies House, giving Leeds businesses full confidence in who they're working with.",
  },
  {
    icon: "📍",
    title: "Leeds Market Knowledge",
    text: "We understand Leeds's commercial landscape, local search behaviour, and the competitive industries driving West Yorkshire's economy.",
  },
  {
    icon: "💷",
    title: "GBP Billing, No Surprises",
    text: "All invoices are issued in GBP with clear, upfront pricing — no hidden fees or unexpected charges for Leeds clients.",
  },
  {
    icon: "📊",
    title: "Data-Driven Strategies",
    text: "Every campaign is backed by real data, measurable KPIs, and regular performance reporting tailored to your Leeds business goals.",
  },
  {
    icon: "🤝",
    title: "No Lock-in Contracts",
    text: "We earn your business every month. Leeds clients stay because of results, not because they're contractually tied in.",
  },
  {
    icon: "🔒",
    title: "GDPR Compliant by Default",
    text: "All our digital services are built and managed in full compliance with UK GDPR — protecting your Leeds business and your customers.",
  },
]

const coverageAreas = [
  {
    name: "Leeds City Centre",
    description: "Leeds City Square, Holbeck Urban Village, South Bank, Aire Street, Boar Lane, Wellington Street.",
  },
  {
    name: "North Leeds",
    description: "Headingley, Chapel Allerton, Moortown, Roundhay, Alwoodley, Meanwood.",
  },
  {
    name: "East Leeds",
    description: "Crossgates, Seacroft, Halton, Osmondthorpe, Swillington, Garforth.",
  },
  {
    name: "South Leeds",
    description: "Morley, Beeston, Hunslet, Middleton, Rothwell, Belle Isle.",
  },
  {
    name: "West Leeds & Bradford Border",
    description: "Pudsey, Bramley, Horsforth, Farsley, Stanningley, Rodley.",
  },
]

const industries = [
  { icon: "💼", name: "Finance & FinTech", description: "Helping Leeds financial firms build authority and generate qualified leads online." },
  { icon: "🏠", name: "Real Estate & Property", description: "Driving enquiries for Leeds estate agents, developers, and letting agencies." },
  { icon: "🏥", name: "Healthcare & Clinics", description: "Connecting Leeds clinics and healthcare providers with local patients online." },
  { icon: "🛒", name: "E-Commerce & Retail", description: "Scaling online sales for Leeds-based retailers through SEO and paid advertising." },
  { icon: "🏭", name: "Manufacturing & Engineering", description: "Generating B2B leads for Leeds manufacturers and engineering firms digitally." },
  { icon: "🍽️", name: "Hospitality & Restaurants", description: "Increasing bookings and footfall for Leeds restaurants, hotels, and venues." },
]

const processSteps = [
  {
    title: "Discovery & Audit",
    description: "We analyse your Leeds business, target audience, and current digital performance to identify key growth opportunities.",
  },
  {
    title: "Strategy & Planning",
    description: "We build a data-driven digital marketing strategy tailored specifically to your Leeds business goals and market.",
  },
  {
    title: "Execution & Implementation",
    description: "Our team delivers your SEO, paid ads, or website project efficiently and to the highest professional standard.",
  },
  {
    title: "Reporting & Optimisation",
    description: "You receive clear monthly reports and ongoing optimisation to ensure your Leeds campaigns keep improving.",
  },
]

const testimonials = [
  {
    name: "James Richardson",
    role: "Managing Director",
    company: "Richardson Legal Services",
    location: "Leeds City Centre",
    rating: 5,
    text: "Linkedo transformed our online presence completely. Our Google rankings improved within weeks and enquiries have more than doubled since we started working with them.",
  },
  {
    name: "Sarah Thornton",
    role: "Marketing Manager",
    company: "Thornton Property Group",
    location: "Headingley, Leeds",
    rating: 5,
    text: "The team at Linkedo really understands the Leeds market. Their Google Ads campaigns delivered a strong ROI from the very first month with complete transparency throughout.",
  },
  {
    name: "Daniel Marsden",
    role: "Director",
    company: "Marsden Engineering Solutions",
    location: "Morley, Leeds",
    rating: 5,
    text: "Professional, reliable, and results-driven. Linkedo built our new website and handled our SEO — we've seen a significant increase in local Leeds traffic and leads.",
  },
]

export default function LeedsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={leedsLocalBusinessSchema} />
      <SchemaMarkup schema={leedsBreadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Leeds, West Yorkshire</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Leeds <span className="text-gradient-primary">Digital Marketing Agency</span> — SEO, Ads &amp; Web Development
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Helping Leeds businesses grow online with proven digital strategies, UK-registered expertise, and zero
              lock-in contracts.
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
                  View Leeds Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* About + Stats */}
        <Section eyebrow="About Linkedo in Leeds" title="A Digital Marketing Agency Built for Leeds Businesses">
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground mb-12">
            <p>
              Linkedo is a UK Companies House registered digital marketing agency serving businesses across Leeds and
              the wider West Yorkshire region. We specialise in SEO, Google Ads, Meta Ads, Website Development, and
              Website Security.
            </p>
            <p>
              Whether you&apos;re based in Leeds City Centre, Headingley, Morley, or anywhere across West Yorkshire,
              Linkedo delivers transparent, results-driven digital marketing with no long-term lock-in contracts.
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
          eyebrow="Leeds Services"
          title="What We Offer Leeds Businesses"
          description="From building high-converting websites to running targeted ad campaigns, Linkedo offers a full suite of digital marketing services tailored to Leeds businesses. Every service is designed to deliver measurable growth and a clear return on investment."
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
            Leeds businesses deserve a digital marketing partner they can trust. Linkedo is fully UK-registered, GDPR
            compliant, and built to deliver transparent, accountable results for businesses across Leeds and West
            Yorkshire.
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

          {/* Leeds Presence card */}
          <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Our Leeds Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Serving Leeds &amp; West Yorkshire</p>
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
          title="Digital Marketing Services Across Leeds"
          description="Linkedo provides digital marketing services to businesses across all major Leeds districts and surrounding West Yorkshire areas. Whether you're in the city centre or the outer suburbs, we're here to help your business grow online."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area) => (
              <div
                key={area.name}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
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
          title="Leeds Industries We Work With"
          description="Linkedo works with a wide range of Leeds businesses across key industries. We understand the unique challenges and opportunities each sector faces in the West Yorkshire market."
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
              Contact our Leeds team
            </Link>{" "}
            and we&apos;ll be happy to help.
          </p>
        </Section>

        {/* Local Insight */}
        <Section gradient>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Local Insight
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Leeds Is One of the UK&apos;s Most Exciting Digital Markets
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Leeds is the UK&apos;s fastest-growing city outside London, with a vibrant financial district centred
                around Leeds City Square and Wellington Street. Businesses here face fierce online competition, making
                a strong digital presence more critical than ever.
              </p>
              <p>
                From the creative studios of Holbeck Urban Village to the independent businesses of Headingley and
                Kirkstall, Leeds has a diverse and dynamic commercial ecosystem. Linkedo helps Leeds businesses
                capitalise on this growth with targeted SEO, paid ads, and conversion-focused web development.
              </p>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work With Leeds Businesses"
          description="We follow a clear four-step process to deliver consistent results for Leeds businesses, built around your specific goals."
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
          title="What Leeds Businesses Say About Us"
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
            <p className="text-sm text-muted-foreground">Based on 30+ Leeds &amp; West Yorkshire client reviews</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section eyebrow="FAQs" title="Frequently Asked Questions About Our Leeds Services">
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
                Ready to Grow Your Leeds Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leeds is a competitive digital market — the sooner you invest in the right strategy, the sooner you
                start winning online. Book your free strategy call today with no lock-in contracts, no hidden fees, and
                no obligation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="tel:+447927969991"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Call Us</p>
                  <p className="text-sm text-muted-foreground">+44 7927 969991</p>
                </div>
              </a>
              <a
                href="mailto:info@linkedo.co.uk"
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email Us</p>
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
