"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Image from "next/image"
import { motion } from "framer-motion"
import { StatCard } from "@/components/ui/stat-card"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const metaAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/meta-ads#service",
  name: "Meta Ads Management",
  alternateName: "Facebook & Instagram Ads",
  url: "https://linkedo.co.uk/meta-ads",
  description:
    "Strategic Meta advertising campaigns on Facebook and Instagram that reach your target audience and drive measurable business results.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Social Media Advertising",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Meta Ads Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audience Targeting & Retargeting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Creative Development" } },
    ],
  },
}

const metaAdsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the minimum budget for Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend a minimum budget of £1,000-£2,000/month for Meta Ads to gather sufficient data and optimise effectively. However, we can discuss options based on your specific goals.",
      },
    },
    {
      "@type": "Question",
      name: "Facebook vs Instagram - which is better for advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your audience and objectives. We typically test both platforms and allocate budget based on performance. B2B often performs better on Facebook, while B2C and visual products excel on Instagram.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle creative development for Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can work with your existing creative assets or develop new ad creatives. We'll provide guidance on best practices and continuously test different variations to find what resonates with your audience.",
      },
    },
  ],
}

const metaAdsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Meta Ads", item: "https://linkedo.co.uk/meta-ads" },
  ],
}

const services = [
  {
    iconName: "Users",
    title: "Audience Targeting",
    description: "Precision targeting to reach your ideal customers on Facebook and Instagram.",
  },
  {
    iconName: "Sparkles",
    title: "Creative Development",
    description: "Engaging ad creatives that stop the scroll and drive action.",
  },
  {
    iconName: "Target",
    title: "Campaign Optimization",
    description: "Continuous testing and optimization for maximum ROAS.",
  },
  {
    iconName: "BarChart",
    title: "Performance Tracking",
    description: "Detailed analytics and reporting on campaign performance.",
  },
]

const faqSchemaItems = [
  {
    question: "What does Meta Ads management include?",
    answer: "Account and audience planning, campaign set-up on Facebook and Instagram, ad creative and copy, conversion tracking checks, ongoing testing and optimisation, and regular reporting. The exact scope is agreed on a strategy call before anything goes live.",
  },
  {
    question: "What's the minimum budget for Meta Ads?",
    answer: "There is no single right figure. The budget depends on your goal, how big your audience is and how many ads need testing before a pattern shows. We agree it with you on the call, and your ad spend is set separately from our management work.",
  },
  {
    question: "Facebook or Instagram: which is better for advertising?",
    answer: "It depends on your audience and objective. We usually test both placements and move budget towards the one that performs for you. Meta's Ads Manager can run one campaign across Facebook, Instagram and other Meta placements, so you don't need separate campaigns to start.",
  },
  {
    question: "Which Meta Ads campaign objectives can you run?",
    answer: "Meta offers objectives such as awareness, traffic, engagement, leads and sales. We choose the one that matches what you want people to do, for example fill in a lead form, call you or buy online, because the objective changes who Meta shows your ads to.",
  },
  {
    question: "What are the Meta Pixel and Conversions API?",
    answer: "The Meta Pixel is a snippet on your website that reports actions such as a form submission or a purchase back to Meta. The Conversions API sends similar events from your server. Together they help Meta learn which people take action, so we check both are set up and reporting before we judge a campaign.",
  },
  {
    question: "How do you handle creative for Meta Ads?",
    answer: "We can work with your existing images, video and copy or develop new ad creative. We test different hooks, formats and messages against each other and keep what the data supports, so the ads improve over time.",
  },
  {
    question: "How long do Meta Ads take to work?",
    answer: "Every campaign starts with a learning period while Meta gathers data on who responds. We review early results, adjust and keep testing. We can't promise a timeframe or a result, because it depends on your offer, audience, budget and website.",
  },
  {
    question: "Should I use Meta Ads or Google Ads?",
    answer: "They reach people in different moments. Google Ads catches people already searching for what you sell, while Meta Ads puts your offer in front of people who match your audience before they search. Many businesses use both, and we can manage Google Ads alongside Meta.",
  },
  {
    question: "Can you build or improve the landing page my ads send people to?",
    answer: "Yes. Ads only work if the page they lead to is clear and easy to act on. Our web development team can build or improve landing pages, and our SEO team can help the same pages bring in organic visitors too.",
  },
  {
    question: "How do I get started with Linkedo's Meta Ads management?",
    answer: "Book a strategy call. Tell us what you sell, who you want to reach and what a good result looks like for your business, and we'll outline a plan for Facebook and Instagram.",
  },
]

const metaAdsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/meta-ads#faq",
  mainEntity: faqSchemaItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

const faqs = [
  {
    question: "What does Meta Ads management include?",
    answer: <>Account and audience planning, campaign set-up on Facebook and Instagram, ad creative and copy, conversion tracking checks, ongoing testing and optimisation, and regular reporting. The exact scope is agreed on a <Link href="/contact">strategy call</Link> before anything goes live.</>,
  },
  {
    question: "What's the minimum budget for Meta Ads?",
    answer: "There is no single right figure. The budget depends on your goal, how big your audience is and how many ads need testing before a pattern shows. We agree it with you on the call, and your ad spend is set separately from our management work.",
  },
  {
    question: "Facebook or Instagram: which is better for advertising?",
    answer: "It depends on your audience and objective. We usually test both placements and move budget towards the one that performs for you. Meta's Ads Manager can run one campaign across Facebook, Instagram and other Meta placements, so you don't need separate campaigns to start.",
  },
  {
    question: "Which Meta Ads campaign objectives can you run?",
    answer: "Meta offers objectives such as awareness, traffic, engagement, leads and sales. We choose the one that matches what you want people to do, for example fill in a lead form, call you or buy online, because the objective changes who Meta shows your ads to.",
  },
  {
    question: "What are the Meta Pixel and Conversions API?",
    answer: "The Meta Pixel is a snippet on your website that reports actions such as a form submission or a purchase back to Meta. The Conversions API sends similar events from your server. Together they help Meta learn which people take action, so we check both are set up and reporting before we judge a campaign.",
  },
  {
    question: "How do you handle creative for Meta Ads?",
    answer: "We can work with your existing images, video and copy or develop new ad creative. We test different hooks, formats and messages against each other and keep what the data supports, so the ads improve over time.",
  },
  {
    question: "How long do Meta Ads take to work?",
    answer: "Every campaign starts with a learning period while Meta gathers data on who responds. We review early results, adjust and keep testing. We can't promise a timeframe or a result, because it depends on your offer, audience, budget and website.",
  },
  {
    question: "Should I use Meta Ads or Google Ads?",
    answer: <>They reach people in different moments. Google Ads catches people already searching for what you sell, while Meta Ads puts your offer in front of people who match your audience before they search. Many businesses use both, and we can <Link href="/google-ads">manage Google Ads</Link> alongside Meta.</>,
  },
  {
    question: "Can you build or improve the landing page my ads send people to?",
    answer: <>Yes. Ads only work if the page they lead to is clear and easy to act on. Our <Link href="/web-development">web development</Link> team can build or improve landing pages, and our <Link href="/seo">SEO team</Link> can help the same pages bring in organic visitors too.</>,
  },
  {
    question: "How do I get started with Linkedo's Meta Ads management?",
    answer: <><Link href="/contact">Book a strategy call</Link>. Tell us what you sell, who you want to reach and what a good result looks like for your business, and we'll outline a plan for Facebook and Instagram.</>,
  },
]

const stats = [
  { label: "", value: "Facebook ads" },
  { label: "", value: "Instagram ads" },
  { label: "", value: "Retargeting" },
  { label: "", value: "Monthly reporting" },
]

export default function MetaAdsPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={metaAdsServiceSchema} />
      <SchemaMarkup schema={metaAdsFaqSchema} />
      <SchemaMarkup schema={metaAdsBreadcrumbSchema} />
      {/* Hero section with image */}
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Meta Ads" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Meta Ads Management
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Facebook & Instagram Ads <span className="text-gradient-primary">That Convert</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Strategic Meta advertising campaigns that reach your target audience and drive measurable business
              results.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/facebook-and-instagram-ads-mobile-mockup-with-crea.jpg"
              alt="Meta Ads Examples"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Stats section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Targeting visualization */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Precision Targeting
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Reach Your Ideal Customers</h2>
            <p className="text-muted-foreground mb-6">
              Leverage Meta's powerful targeting capabilities to connect with the right audience at the right time.
            </p>
            <ul className="space-y-3">
              {[
                "Custom audience segmentation",
                "Lookalike audience creation",
                "Retargeting campaigns",
                "Interest-based targeting",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/audience-targeting-interface-with-demographics-and.jpg"
              alt="Audience Targeting"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Creative testing section */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Creative Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Eye-Catching Ads That Stop the Scroll
            </h2>
            <p className="text-muted-foreground mb-6">
              We design scroll-stopping creatives that grab attention in crowded feeds and drive users to take action.
            </p>
            <ul className="space-y-3">
              {[
                "Static image ads",
                "Video & carousel formats",
                "A/B testing for creatives",
                "Mobile-first design approach",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/social-media-ad-creative-examples-showing-differen.jpg" alt="Ad Creative Examples" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Campaign performance tracking */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/meta-ads-manager-dashboard-showing-campaign-metric.jpg"
              alt="Campaign Performance Dashboard"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Data-Driven Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Transparent Performance Tracking</h2>
            <p className="text-muted-foreground mb-6">
              Monitor your Meta Ads campaigns in real-time with detailed reports that show exactly how your budget is
              performing.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time performance dashboards",
                "ROAS & CPA tracking",
                "Audience insights analysis",
                "Monthly detailed reports",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Services" title="What We Offer" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Launch Your Meta Ads?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a Meta advertising strategy that drives real results for your business.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Started Today
          </AnimatedButton>
        </div>
      </Section>

      {/* Related Locations */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <RelatedLinks
            title="Available in These UK Locations"
            links={[
              { label: "London", href: "/london" },
              { label: "Manchester", href: "/manchester" },
              { label: "Birmingham", href: "/birmingham" },
              { label: "Bristol", href: "/bristol" },
              { label: "View All Locations", href: "/locations" },
            ]}
          />
        </div>
      </Section>
    </MainShell>
  )
}
