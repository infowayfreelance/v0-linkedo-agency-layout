"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Image from "next/image"
import { motion } from "framer-motion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import Link from "next/link"

const consultingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/consulting#service",
  name: "Digital Marketing Consultancy",
  url: "https://linkedo.co.uk/consulting",
  description:
    "Digital marketing consultancy for UK businesses: strategy, SEO and ads audits, GA4 analytics set-up and team training. Book a free consultation.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Digital marketing consulting",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Consultancy",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Audits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Workshops" } },
    ],
  },
}

const consultingFaqs = [
  {
    "question": "What does a digital marketing consultant do?",
    "answer": "A digital marketing consultant reviews how your business is found and chosen online, then tells you what to prioritise. That usually means an audit of your website, SEO, paid ads and tracking, a written strategy with clear priorities, and advice or training while you or your team put it into action."
  },
  {
    "question": "What is the difference between a marketing consultant and a marketing agency?",
    "answer": "A consultant advises: they review, plan and guide, and your team does the work. An agency does the work for you, such as running ads, writing content or building pages. At Linkedo you can start with consulting only, or ask us to deliver the plan through our SEO, Google Ads, Meta Ads or web development services."
  },
  {
    "question": "How much does digital marketing consulting cost?",
    "answer": "It depends on what you need reviewed and how much support you want afterwards: a one-off audit costs less than ongoing advice. We confirm the scope in writing after the free consultation so you know what you are paying for. You can also see our starting prices on the pricing page."
  },
  {
    "question": "Can you work with our in-house team?",
    "answer": "Yes. Many businesses already have someone handling social media, email or the website. We can review what they are doing, set priorities and run workshops so they can carry the plan out, and step in only where you want extra hands."
  },
  {
    "question": "Do you offer an SEO audit on its own?",
    "answer": "Yes. An SEO audit checks technical issues, on-page content, local signals and tracking, and ends with a prioritised list of fixes. You can act on it yourself, give it to your developer or ask us to do the work."
  },
  {
    "question": "Do you set up Google Analytics 4 and tracking?",
    "answer": "Yes. We can set up Google Analytics 4, define the actions that matter to your business (calls, form enquiries, bookings or purchases) and build simple dashboards so you can see which channels bring them. We also check that Google Search Console is connected."
  },
  {
    "question": "How long does it take to get a digital marketing strategy?",
    "answer": "It depends on the size of your business and how many channels are involved. A focused review of one channel is quicker than a full strategy across SEO, ads, content and analytics. We give you a realistic timescale before you commit."
  },
  {
    "question": "Do you offer training or workshops for my team?",
    "answer": "Yes. We run practical sessions on topics such as SEO basics, Google Ads, analytics and reporting, so your team understands what the numbers mean and what to do next. Tell us what your team needs and we will shape the session around it."
  }
]

const consultingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/consulting#faq",
  mainEntity: consultingFaqs.map(({ question, answer }) => ({
    "@type": "Question", name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

const consultingSteps = [
  { iconName: "MessageSquare", title: "Free consultation", description: "You tell us about your business, goals and what has and hasn't worked." },
  { iconName: "FileSearch", title: "Review", description: "We look at your website, search visibility, ads, analytics and competitors." },
  { iconName: "PenTool", title: "Recommendations", description: "You get a prioritised plan in writing, so you know what to do and why." },
  { iconName: "Rocket", title: "Support", description: "We help you put the plan into action, run training for your team, or take on delivery if you ask us to." },
]

const consultingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Consulting", item: "https://linkedo.co.uk/consulting" },
  ],
}

const services = [
  {
    iconName: "Lightbulb",
    title: "Digital Strategy",
    description: "A written digital marketing strategy built around your goals, customers and budget.",
  },
  {
    iconName: "Search",
    title: "SEO Audits",
    description: "In-depth technical and content audits with actionable recommendations.",
  },
  {
    iconName: "BarChart",
    title: "Analytics Setup",
    description: "Implement tracking and analytics to measure what matters to your business.",
  },
  {
    iconName: "Users",
    title: "Training & Workshops",
    description: "Empower your team with digital marketing knowledge and best practices.",
  },
]

export default function ConsultingPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={consultingServiceSchema} />
      <SchemaMarkup schema={consultingFaqSchema} />
      <SchemaMarkup schema={consultingBreadcrumbSchema} />
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Consulting" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Consulting Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Digital Marketing Consultancy for <span className="text-gradient-primary">UK Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Independent advice on where to focus your marketing budget: a review of your website, SEO, ads and tracking, a clear plan, and support while you put it into action.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/professional-business-consulting-meeting-with-stra.jpg"
              alt="Consulting Strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Planning
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Your Digital Growth Roadmap</h2>
            <p className="text-muted-foreground mb-6">
              We analyse your current situation, identify opportunities, and create actionable strategies for growth.
            </p>
            <ul className="space-y-3">
              {[
                "Competitive analysis",
                "Market opportunity assessment",
                "Channel strategy planning",
                "Performance benchmarking",
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
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/digital-marketing-strategy-roadmap-with-timeline-a.jpg"
              alt="Strategy Roadmap"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Competitive Intelligence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Understand Your Market Position</h2>
            <p className="text-muted-foreground mb-6">
              We analyse your competitors' strategies to identify gaps, opportunities, and winning tactics you can
              leverage.
            </p>
            <ul className="space-y-3">
              {[
                "Competitor SEO analysis",
                "Ad spend & creative research",
                "Market share assessment",
                "Differentiation opportunities",
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
            <Image src="/competitive-analysis-matrix-chart-showing-market-p.jpg" alt="Competitive Analysis" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/analytics-dashboard-with-kpis--traffic-sources--an.jpg" alt="Analytics Dashboard" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Measurement & Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Data That Drives Decisions</h2>
            <p className="text-muted-foreground mb-6">
              We set up comprehensive tracking and analytics to measure what matters and optimise for continuous
              improvement.
            </p>
            <ul className="space-y-3">
              {[
                "Google Analytics 4 setup",
                "Custom dashboard creation",
                "KPI definition & tracking",
                "Regular performance reviews",
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

      <Section title="What We Offer" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title}>
              <ServiceCard {...service} />
              {service.title === "SEO Audits" && (
                <p className="mt-3 text-sm text-muted-foreground">See our <Link className="text-primary underline" href="/seo">SEO services</Link>.</p>
              )}
              {service.title === "Digital Strategy" && (
                <p className="mt-3 text-sm text-muted-foreground">Need delivery too? See <Link className="text-primary underline" href="/web-development">web development</Link>.</p>
              )}
            </div>
          ))}
        </div>
      </Section>


      <Section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What a Digital Marketing Consultant Does</h2>
          <p className="text-muted-foreground mb-6">A digital marketing consultant looks at the whole picture before recommending anything. We review how customers find your business today, which pages and channels bring enquiries, and where money or effort is being wasted. You then get clear priorities: what to fix first, what to stop doing and what to measure.</p>
          <p className="text-muted-foreground mb-4">Typical areas we cover:</p>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6">
            <li><strong className="text-foreground">Strategy and priorities:</strong> which channels fit your customers and budget, and in what order.</li>
            <li><strong className="text-foreground">SEO and website review:</strong> whether Google can crawl and understand your pages, and whether each page answers what people search for. Google's <a className="text-primary underline" href="https://developers.google.com/search/docs/essentials">Search Essentials</a> set the baseline we check against.</li>
            <li><strong className="text-foreground">Paid advertising review:</strong> targeting, ad copy, landing pages and tracking for <Link className="text-primary underline" href="/google-ads">Google Ads</Link> and <Link className="text-primary underline" href="/meta-ads">Meta Ads</Link>.</li>
            <li><strong className="text-foreground">Tracking and reporting:</strong> knowing which activity leads to calls, forms and sales.</li>
            <li><strong className="text-foreground">Training:</strong> so your team can run the plan after we step back.</li>
          </ul>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Consultant or Agency: Which Do You Need?</h2>
          <p className="text-muted-foreground">Choose a <strong className="text-foreground">consultant</strong> when you want an expert second opinion, a plan your own team can deliver, or an audit before you spend more. Choose an <strong className="text-foreground">agency</strong> when you want the work done for you, such as ongoing <Link className="text-primary underline" href="/seo">SEO</Link>, advertising management or a new website. Many clients start with a short consulting engagement and then decide which parts to hand over. If you already have a team, we can work alongside them.</p>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">How a Consulting Engagement Works</h2>
          <ProcessTimeline steps={consultingSteps} />
          <p className="text-muted-foreground mt-8">We confirm the scope in writing before any work starts. Pricing depends on what you need; our starting prices are on the <Link className="text-primary underline" href="/pricing">pricing page</Link>.</p>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Measure What Matters with GA4 and Search Console</h2>
          <p className="text-muted-foreground">A plan is only useful if you can tell whether it is working. We set up <a className="text-primary underline" href="https://support.google.com/analytics/answer/9304153">Google Analytics 4</a> so it records the actions that matter to your business, such as calls, form enquiries, bookings or purchases, and check that <a className="text-primary underline" href="https://support.google.com/webmasters/answer/9128668">Google Search Console</a> is connected so you can see which searches bring people to your site. Then we agree a short list of numbers to review regularly. If your site isn't showing up at all yet, start with our guide to <Link className="text-primary underline" href="/blog/why-not-ranking-on-google-2026">why your business is not ranking on Google</Link>.</p>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Digital Marketing Consultancy FAQs</h2>
          <FAQAccordion items={consultingFaqs} forceMount />
          <p className="text-muted-foreground mt-6">Ready to discuss your requirements? Book a <Link className="text-primary underline" href="/contact">free consultation</Link>.</p>
          <p className="text-muted-foreground mt-3">For details of starting prices, see our <Link className="text-primary underline" href="/pricing">pricing page</Link>.</p>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Strategic Guidance?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Book a consultation to discuss your digital marketing challenges and opportunities.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Book a Consultation
          </AnimatedButton>
          <p className="text-muted-foreground mt-4">Try our <Link className="text-primary underline" href="/free-ai-tools-online">free AI tools</Link> while you decide.</p>
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
