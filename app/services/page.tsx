import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Users, Layers, MessageCircle, MapPin, Compass, ClipboardList, Rocket, LineChart } from "lucide-react"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

const title = "UK Digital Agency Services — Websites, SEO & Paid Ads"
const description =
  "Looking for a trusted UK digital agency? Linkedo delivers websites, SEO, paid advertising, and security services for B2B and B2C businesses across the UK."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://linkedo.co.uk/services" },
  keywords: [
    "digital marketing agency UK",
    "UK digital agency",
    "web development UK",
    "SEO services UK",
    "Google Ads UK",
    "Meta Ads UK",
    "cybersecurity UK",
    "Linkedo services",
  ],
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk/services",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Digital Agency Services for UK Businesses",
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

const developmentServices = [
  {
    iconName: "Code",
    title: "Website Development",
    description:
      "Bespoke websites built with modern technologies, optimised for speed, security, and long-term scalability across all UK markets.",
    href: "/website-development",
  },
  {
    iconName: "Globe",
    title: "Web Applications",
    description:
      "Custom full-stack web applications designed to handle complex business workflows with reliable performance and intuitive user experiences.",
    href: "/web-development",
  },
  {
    iconName: "Smartphone",
    title: "Mobile-First Design",
    description:
      "Fully responsive designs that deliver a seamless experience across all devices, from smartphones to desktops.",
    href: "/web-development",
  },
  {
    iconName: "ShoppingCart",
    title: "E-Commerce Solutions",
    description:
      "Conversion-focused online stores built for UK businesses, with streamlined checkout flows that turn browsers into buyers.",
    href: "/web-development",
  },
]

const marketingServices = [
  {
    iconName: "Search",
    title: "SEO Optimisation",
    description:
      "Proven UK-focused SEO strategies that improve your Google rankings, drive consistent organic traffic, and deliver long-term visibility.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description:
      "Performance-focused PPC campaigns managed to maximise your ad spend, lower cost-per-lead, and generate high-intent enquiries.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Targeted paid social campaigns that reach your ideal B2B and B2C audiences across Facebook and Instagram.",
    href: "/meta-ads",
  },
  {
    iconName: "Palette",
    title: "Branding & Identity",
    description:
      "Strategic brand identities that clearly communicate your value, build trust, and set you apart in a competitive UK market.",
    href: "/branding",
  },
  {
    iconName: "MessageSquare",
    title: "Content Marketing",
    description:
      "Purpose-driven content that attracts, educates, and converts your audience at every stage of the buying journey.",
    href: "/consulting",
  },
]

const securityServices = [
  {
    iconName: "Shield",
    title: "Security Audits",
    description:
      "In-depth security assessments that identify vulnerabilities across your website and digital infrastructure before they become costly problems.",
    href: "/consulting",
  },
  {
    iconName: "Lock",
    title: "SSL & Encryption",
    description:
      "Industry-standard SSL certificates and encryption protocols that protect your website visitors and keep sensitive customer data secure.",
    href: "/consulting",
  },
  {
    iconName: "Bug",
    title: "Malware Removal",
    description:
      "Rapid malware detection, clean-up, and recovery to minimise business disruption and safeguard your online reputation.",
    href: "/consulting",
  },
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every strategy we build is tied to measurable outcomes — more traffic, more leads, more revenue. We focus on what moves the needle for your business, not vanity metrics.",
  },
  {
    icon: Users,
    title: "B2B & B2C Expertise",
    description:
      "Whether you're targeting consumers or corporate clients, we understand both buying journeys and tailor our strategies accordingly — so the right message reaches the right audience.",
  },
  {
    icon: Layers,
    title: "Full-Service Under One Roof",
    description:
      "From website development and SEO to paid ads, branding, and security — you get a complete digital team without the cost of hiring one. No agency hopping, no miscommunication.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "You'll always know what we're working on, why, and what results it's delivering. Regular reports, clear timelines, and a dedicated point of contact — always.",
  },
  {
    icon: MapPin,
    title: "Built for UK Markets",
    description:
      "We understand the UK digital landscape — consumer behaviour, competitive industries, and local search trends — giving your business a genuine edge over generic offshore agencies.",
  },
]

const processSteps = [
  {
    icon: Compass,
    title: "Discovery",
    description:
      "Every project starts with a deep-dive discovery session where we learn about your business, your goals, your target audience, and your competition — so every decision we make is rooted in real understanding.",
  },
  {
    icon: ClipboardList,
    title: "Strategy",
    description:
      "We build a tailored strategy covering the right mix of services for your specific needs — whether that's a new website, a paid ad campaign, an SEO plan, or all three combined.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description:
      "Once the strategy is agreed, our team moves into execution — building, launching, and optimising every element to the highest standard while keeping you updated at every milestone.",
  },
  {
    icon: LineChart,
    title: "Optimisation",
    description:
      "After launch, we don't disappear. We continuously monitor performance, analyse results, and refine our approach to ensure your digital presence keeps improving month on month.",
  },
]

const faqs = [
  {
    question: "What digital services does Linkedo offer to UK businesses?",
    answer:
      "Linkedo provides end-to-end digital services including website development, SEO, Google Ads, Meta Ads, branding, and cybersecurity. Everything your business needs to grow online is available under one roof.",
  },
  {
    question: "Do you work with both B2B and B2C businesses?",
    answer:
      "Yes, we work with both B2B and B2C clients across the UK. We tailor our strategies to suit your specific audience, industry, and business goals.",
  },
  {
    question: "How much does it cost to build a website with Linkedo?",
    answer:
      "Website costs vary depending on the scope and features required. Book a free consultation and we'll provide a transparent, tailored quote for your project.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Most UK businesses begin seeing measurable improvements in rankings and organic traffic within 3–6 months. SEO is a long-term investment that delivers compounding results over time.",
  },
  {
    question: "Do you manage Google Ads and Meta Ads campaigns ongoing?",
    answer:
      "Yes, we offer fully managed paid advertising services including setup, optimisation, and monthly reporting. Your ad spend is continuously monitored to maximise performance and ROI.",
  },
  {
    question: "Can you redesign an existing website or do you only build new ones?",
    answer:
      "We handle both new builds and full redesigns of existing websites. Every project is delivered with a focus on speed, security, and conversion optimisation.",
  },
  {
    question: "Do you offer website maintenance and support after launch?",
    answer:
      "Yes, we offer flexible maintenance and support packages covering security updates, performance monitoring, and content changes. Your website stays secure, fast, and up to date at all times.",
  },
  {
    question: "Is Linkedo the right agency for small businesses and startups?",
    answer:
      "Absolutely — we work with businesses of all sizes, from startups to established UK brands. Our services are fully scalable to match your budget and growth stage.",
  },
  {
    question: "How do you report on campaign and project performance?",
    answer:
      "We provide regular, jargon-free performance reports covering traffic, rankings, conversions, and return on ad spend. You always have full visibility of what your investment is delivering.",
  },
  {
    question: "How do I get started with Linkedo?",
    answer:
      "Simply book a free strategy call through our contact page and one of our specialists will discuss your goals. We'll recommend the right services and outline a clear plan to move forward.",
  },
]

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://linkedo.co.uk/services#webpage",
  url: "https://linkedo.co.uk/services",
  name: title,
  description,
  inLanguage: "en-GB",
  isPartOf: { "@id": "https://linkedo.co.uk/#website" },
  about: { "@id": "https://linkedo.co.uk/#organization" },
  breadcrumb: { "@id": "https://linkedo.co.uk/services#breadcrumb" },
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
}

const servicesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://linkedo.co.uk/services#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
  ],
}

const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Linkedo Digital Services",
  description:
    "Complete digital services for UK businesses including web development, marketing, and cybersecurity.",
  itemListElement: [
    ...developmentServices,
    ...marketingServices,
    ...securityServices,
  ].map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://linkedo.co.uk${service.href}`,
      provider: { "@id": "https://linkedo.co.uk/#organization" },
    },
  })),
}

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={servicesPageSchema} />
      <SchemaMarkup schema={servicesBreadcrumbSchema} />
      <SchemaMarkup schema={servicesItemListSchema} />
      <SchemaMarkup schema={servicesFaqSchema} />

      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-6" />
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete Digital Solutions for UK Businesses —{" "}
              <span className="text-gradient-primary">Web, Marketing &amp; Security</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              From professional website development to ROI-driven marketing campaigns and enterprise-grade security,
              Linkedo delivers end-to-end digital services tailored for UK businesses — whether you&apos;re a growing
              SME or an established brand ready to scale.
            </p>
          </div>
        </Section>

        {/* Development Services */}
        <Section
          eyebrow="Development"
          title="Build a Strong Digital Foundation for Your Business"
          description="Professional, fast, and secure websites and applications built to generate leads and drive conversions."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Marketing Services */}
        <Section
          eyebrow="Marketing"
          title="Grow Your Audience and Increase Revenue"
          description="Data-driven digital marketing strategies that connect your business with the right customers at the right time."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Security Services */}
        <Section
          eyebrow="Security"
          title="Protect Your Business Online"
          description="Keep your website, customer data, and digital assets secure from evolving cyber threats — because downtime and data breaches cost UK businesses thousands."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Why Choose Linkedo */}
        <Section
          eyebrow="Why Choose Linkedo"
          title="Why UK Businesses Choose Linkedo"
          description="We don't just build websites or run ads — we become a dedicated digital partner invested in your growth. Here's what sets us apart."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
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
        </Section>

        {/* Our Process */}
        <Section
          eyebrow="Our Process"
          title="How We Work — A Clear Process From Day One"
          description="Every step is transparent, every decision is explained, and every result is measured — so you always know exactly what your investment is delivering."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
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

        {/* FAQ Section */}
        <Section eyebrow="FAQ" title="Common Questions">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how Linkedo can help you achieve your digital goals. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/pricing">
                <AnimatedButton variant="secondary" size="lg">
                  View Pricing
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
