"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const googleAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/google-ads#service",
  name: "Google Ads Management UK",
  url: "https://linkedo.co.uk/google-ads",
  description:
    "Expert Google Ads management that delivers measurable results and maximises your advertising budget with strategic PPC campaigns.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Google Ads management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Google Ads Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Campaign Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopping Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Display Advertising" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Max Campaigns" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Ads" } },
    ],
  },
}

const googleAdsFaqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
}

const googleAdsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://linkedo.co.uk/google-ads" },
  ],
}

const serviceFeatures = [
  {
    iconName: "Target",
    title: "Strategic Campaign Setup",
    description: "Relevant keyword research and campaign structure for your business goals.",
  },
  {
    iconName: "DollarSign",
    title: "Budget Optimisation",
    description: "Smart bidding strategies to improve conversions within your budget.",
  },
  {
    iconName: "FileText",
    title: "Compelling Ad Copy",
    description: "Clear ad copy that resonates with your target audience.",
  },
  {
    iconName: "MousePointer",
    title: "Landing Page Optimisation",
    description: "Improve landing pages for better Quality Scores and conversions.",
  },
  {
    iconName: "BarChart",
    title: "Performance Tracking",
    description: "Detailed reporting and analytics to measure campaign success.",
  },
  {
    iconName: "RefreshCw",
    title: "Continuous Optimisation",
    description: "Ongoing A/B testing and refinements to improve results over time.",
  },
]

const processSteps = [
  {
    iconName: "Target",
    title: "Audit & Strategy",
    description: "Analyse your business, competitors, and develop a winning Google Ads strategy.",
  },
  {
    iconName: "Settings",
    title: "Campaign Setup",
    description: "Build campaigns with the right structure, keywords, and targeting.",
  },
  {
    iconName: "Rocket",
    title: "Launch & Monitor",
    description: "Launch campaigns and closely monitor initial performance metrics.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimise & Scale",
    description: "Review and refine campaigns using agreed goals and conversion data.",
  },
]

const includedServices = [
  {
    "title": "Account audit",
    "description": "A review of the existing account (or a plan for a new one) before any budget is spent, covering tracking, keywords, structure and wasted spend."
  },
  {
    "title": "Campaign build",
    "description": "Search, and where they fit the goal, Shopping, Performance Max, Display or YouTube, structured around the products or services you actually want enquiries for."
  },
  {
    "title": "Conversion tracking",
    "description": "So you can see enquiries, calls or sales, not only clicks."
  },
  {
    "title": "Ad copy and assets",
    "description": "Headlines, descriptions and, where needed, sitelinks and other assets, tested over time."
  },
  {
    "title": "Ongoing optimisation",
    "description": "Search terms, negatives, bids and budgets reviewed on a regular schedule, not only at the end of the month."
  },
  {
    "title": "Clear reporting",
    "description": "The metrics that matter to your business, in a report you can follow without being a PPC specialist."
  }
]
const faqs = [
  {
    "question": "How much should I spend on Google Ads?",
    "answer": "It depends on your market, how competitive the keywords are, and whether you need leads, calls or online sales. There isn't one right monthly budget. We'll recommend a range in your free audit, based on your goals and your site. See our pricing for how management is scoped."
  },
  {
    "question": "How long before I see results from Google Ads?",
    "answer": "Clicks and early data can appear as soon as campaigns are live. It usually takes weeks to a few months of optimisation before you can judge performance fairly. Results vary; we don't guarantee a particular return in the first month."
  },
  {
    "question": "Do you manage Shopping and Display ads?",
    "answer": "Yes. We manage Search, Shopping, Display, YouTube and Performance Max, and we'll recommend the mix that fits your goal rather than switching everything on at once."
  },
  {
    "question": "What's included in your Google Ads management service?",
    "answer": "Account audit, campaign setup, keyword and search-term work, ad copy, bid and budget management, conversion tracking, landing-page recommendations, testing, and regular reporting with ongoing optimisation."
  },
  {
    "question": "How do you measure Google Ads success?",
    "answer": "We agree the conversions that matter (enquiries, calls, sales or another action you can track) and report on those, alongside cost per conversion and, where it can be measured, return on ad spend. You'll get a regular report, not only a click count."
  },
  {
    "question": "What is Performance Max?",
    "answer": "Performance Max is a Google Ads campaign type that can show your ads across Search, YouTube, Gmail, Discover and Maps from one set of assets and goals. It works best when conversion tracking is accurate. We'll only recommend it when it fits the goal."
  },
  {
    "question": "Can you take over an existing Google Ads account?",
    "answer": "Yes. You keep ownership of the account. We audit what's there, keep the history, and change what's wasting money or missing, instead of rebuilding from scratch unless you want a new account."
  },
  {
    "question": "Do I need Google Ads if I already rank organically?",
    "answer": "Not always. If you already get enough of the right enquiries from SEO, ads may be optional. Ads are useful when you need demand sooner, want to appear above the organic results, or are testing a new offer. We'll say so in the audit if ads are not the right first step."
  }
]

export default function GoogleAdsPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={googleAdsServiceSchema} />
      <SchemaMarkup schema={googleAdsFaqSchema} />
      <SchemaMarkup schema={googleAdsBreadcrumbSchema} />
      {/* Hero Image Section */}
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Google Ads" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Google Ads Management
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Google Ads Management for <span className="text-gradient-primary">UK Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Linkedo plans, builds and manages Google Ads campaigns for UK businesses: Search, Shopping, Display, YouTube and Performance Max, with conversion tracking, ongoing optimisation and reporting you can follow.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/google-ads-dashboard-with-campaign-metrics-and-per.jpg"
              alt="Google Ads Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      <Section title="What's Included in Google Ads Management" className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {includedServices.map(item => (
            <div key={item.title} className="p-6 rounded-xl bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Campaign Performance Visualization */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/google-ads-campaign-structure-diagram-with-ad-grou.jpg"
              alt="Campaign Structure"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Data-Driven Campaign Management</h2>
            <p className="text-muted-foreground mb-6">
              We review search terms, bids and landing pages regularly, using conversion data to guide changes.
            </p>
            <ul className="space-y-3">
              {[
                "Smart bidding strategies",
                "A/B testing for ad copy",
                "Landing page optimisation",
                "Negative keyword refinement",
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

      {/* High-Converting Ad Copy Section */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              High-Converting Ad Copy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Words That Drive Clicks & Conversions
            </h2>
            <p className="text-muted-foreground mb-6">
              We write clear ads based on your offer, test variations and review which messages lead to relevant enquiries.
            </p>
            <ul className="space-y-3">
              {[
                "Persuasive headlines that grab attention",
                "Benefit-focused descriptions",
                "Strong call-to-actions",
                "A/B testing for continuous improvement",
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
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/google-ads-interface-showing-multiple-ad-variation.jpg" alt="Ad Copy Performance" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Conversion Tracking Visualization Section */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/conversion-tracking-dashboard-with-funnel-visualiz.jpg" alt="Conversion Tracking" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Transparent Reporting
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Track Every Pound You Spend</h2>
            <p className="text-muted-foreground mb-6">
              Get complete visibility into campaign performance with custom dashboards that show exactly how your budget
              drives revenue.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time performance tracking",
                "Conversion funnel analysis",
                "Cost per acquisition monitoring",
                "ROAS optimisation insights",
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

      {/* Who This Is For */}
      <Section title="Who This Is For" className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">B2B Companies</h3>
            <p className="text-muted-foreground text-sm">
              Generate qualified leads and fill your sales pipeline with decision-makers actively searching for your
              services.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Brands</h3>
            <p className="text-muted-foreground text-sm">
              Drive sales and revenue with Shopping ads and high-intent search campaigns that convert.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Local Businesses</h3>
            <p className="text-muted-foreground text-sm">
              Reach local customers who are already searching for what you offer.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section eyebrow="What We Do" title="Our Google Ads Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceFeatures.map((feature) => (
            <ServiceCard
              key={feature.title}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section title="Google Ads Campaign Types We Manage" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>Google Ads is not one campaign. The right mix depends on whether you want phone calls, form enquiries, store visits or online sales. Each format reaches people in a different setting, and not every business needs every format. We start with the goal and the website before choosing where to advertise.</p>
          <p><strong>Search:</strong> Text ads on Google when someone types a query. This is usually the starting point for service businesses.</p>
          <p><strong>Shopping:</strong> Product listings with price and image, used by ecommerce stores, often delivered through Performance Max.</p>
          <p><strong>Performance Max:</strong> Google's campaign type can show across Search, YouTube, Gmail, Discover and Maps from one set of assets and goals. It needs accurate conversion tracking so it does not optimise towards the wrong actions.</p>
          <p><strong>Display and remarketing:</strong> Image or text ads to people who have already visited your site, or to a defined audience.</p>
          <p><strong>YouTube:</strong> Video ads when video is a useful way to explain the offer.</p>
          <p>We'll recommend a mix in your free audit rather than switching every campaign type on at once. If organic demand is already strong, <Link href="/seo" className="text-primary underline">SEO</Link> may be the better long-term channel; ads are often the faster way to test demand.</p>
          <p>A search campaign might begin with a small set of closely related services and clear landing pages. An ecommerce campaign needs accurate product information and a working purchase journey. We check what the visitor sees after clicking so the campaign and website support the same goal.</p>
          <p>We review search terms, irrelevant traffic and location settings against the customers you can serve. For businesses also exploring social advertising, see our <Link href="/meta-ads" className="text-primary underline">Meta ads</Link> service.</p>
        </div>
      </Section>

      <Section title="Conversion Tracking and Account Ownership" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>Clicks only matter if you can see what they turn into. We set up or repair conversion tracking so the account can optimise towards enquiries, calls or sales, and monthly reports show the numbers you care about. You own the Google Ads account and its data. If you already have an account, we can take it over, keep the history and work from what is there rather than starting again unless you ask us to.</p>
          <p>Before launch, we agree which actions count as meaningful conversions. A form view is not a successful enquiry, and a tap on a phone number is not necessarily a completed call. We check that events fire when expected and avoid counting the same action twice.</p>
          <p>Tracking needs regular checks. Website updates, consent settings and changes to contact forms can affect what is recorded. We explain these limits rather than treating every recorded action as a confirmed lead.</p>
          <p>Your business should keep administrative control of the account. We use appropriate access to manage campaigns and explain changes. If you switch agencies, your history and data remain yours. Read our <Link href="/pricing" className="text-primary underline">pricing</Link> page for management scope.</p>
        </div>
      </Section>

      <Section title="How Long Google Ads Takes to Work" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
          <p>Once a campaign is live, you can see clicks and early data quickly. Useful, stable results usually take weeks to a few months, because the account needs enough data to show which search terms, ads and landing pages actually lead to enquiries. Timelines vary with budget, competition and how ready the website is to convert. No honest agency can guarantee a particular ROAS or a first-month return. What we commit to is a clear plan, the work done each month, and transparent reporting.</p>
          <p>We review early search terms, conversion events and landing pages before making larger changes. If traffic is irrelevant, we refine targeting and negative keywords. If visitors are relevant but do not enquire, we review the contact journey and whether the offer answers their needs.</p>
          <p>Some businesses need a short campaign to test demand. Others need ongoing management across several services. We discuss the work and reporting schedule before you commit, so you can decide whether it is suitable.</p>
          <p>We work across the UK, including businesses seeking <Link href="/london" className="text-primary underline">digital marketing in London</Link>. See our <Link href="/locations" className="text-primary underline">locations</Link> or <Link href="/contact" className="text-primary underline">contact us</Link> to discuss your goals.</p>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Our Process" title="How We Deliver Results" className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
          <div hidden aria-hidden="true">{faqs.map(f => <p key={f.question}>{f.answer}</p>)}</div>
          <p className="mt-6 text-sm text-muted-foreground">See our <Link href="/pricing" className="text-primary underline">pricing</Link> and <Link href="/seo" className="text-primary underline">SEO</Link> services.</p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get a Free Google Ads Audit</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Get a free Google Ads audit and discover opportunities to improve your campaign performance.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Free Ads Audit
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
