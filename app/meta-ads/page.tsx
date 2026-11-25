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
import { ProcessTimeline } from "@/components/ui/process-timeline"
import Link from "next/link"

const metaAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/meta-ads#service",
  name: "Meta Ads Management",
  alternateName: "Facebook & Instagram Ads Management",
  url: "https://linkedo.co.uk/meta-ads",
  description: "Linkedo plans, builds and manages Facebook and Instagram ad campaigns: audience targeting, ad creative, conversion tracking, testing and clear reporting.",
  provider: { "@id": "https://linkedo.co.uk/#organization" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Meta Ads management (Facebook and Instagram advertising)",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Meta Ads Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audience Targeting and Retargeting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ad Creative Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Pixel and Conversions API Tracking Checks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campaign Reporting" } },
    ],
  },
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
    title: "Campaign Optimisation",
    description: "Continuous testing and optimisation of audiences, creative and budget.",
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

const faqSchemaItems = [
  { question: "What does Meta Ads management include?", answer: "Account and audience planning, campaign set-up on Facebook and Instagram, ad creative and copy, conversion tracking checks, ongoing testing and optimisation, and regular reporting. The exact scope is agreed on a strategy call before anything goes live." },
  { question: "What's the minimum budget for Meta Ads?", answer: "There is no single right figure. The budget depends on your goal, how big your audience is and how many ads need testing before a pattern shows. We agree it with you on the call, and your ad spend is set separately from our management work." },
  { question: "Facebook or Instagram: which is better for advertising?", answer: "It depends on your audience and objective. We usually test both placements and move budget towards the one that performs for you. Meta's Ads Manager can run one campaign across Facebook, Instagram and other Meta placements, so you don't need separate campaigns to start." },
  { question: "Which Meta Ads campaign objectives can you run?", answer: "Meta offers objectives such as awareness, traffic, engagement, leads and sales. We choose the one that matches what you want people to do, for example fill in a lead form, call you or buy online, because the objective changes who Meta shows your ads to." },
  { question: "What are the Meta Pixel and Conversions API?", answer: "The Meta Pixel is a snippet on your website that reports actions such as a form submission or a purchase back to Meta. The Conversions API sends similar events from your server. Together they help Meta learn which people take action, so we check both are set up and reporting before we judge a campaign." },
  { question: "How do you handle creative for Meta Ads?", answer: "We can work with your existing images, video and copy or develop new ad creative. We test different hooks, formats and messages against each other and keep what the data supports, so the ads improve over time." },
  { question: "How long do Meta Ads take to work?", answer: "Every campaign starts with a learning period while Meta gathers data on who responds. We review early results, adjust and keep testing. We can't promise a timeframe or a result, because it depends on your offer, audience, budget and website." },
  { question: "Should I use Meta Ads or Google Ads?", answer: "They reach people in different moments. Google Ads catches people already searching for what you sell, while Meta Ads puts your offer in front of people who match your audience before they search. Many businesses use both, and we can manage Google Ads alongside Meta." },
  { question: "Can you build or improve the landing page my ads send people to?", answer: "Yes. Ads only work if the page they lead to is clear and easy to act on. Our web development team can build or improve landing pages, and our SEO team can help the same pages bring in organic visitors too." },
  { question: "How do I get started with Linkedo's Meta Ads management?", answer: "Book a strategy call. Tell us what you sell, who you want to reach and what a good result looks like for your business, and we'll outline a plan for Facebook and Instagram." },
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
  { question: "What does Meta Ads management include?", answer: <>Account and audience planning, campaign set-up on Facebook and Instagram, ad creative and copy, conversion tracking checks, ongoing testing and optimisation, and regular reporting. The exact scope is agreed on a <Link href="/contact">strategy call</Link> before anything goes live.</> },
  { question: "What's the minimum budget for Meta Ads?", answer: "There is no single right figure. The budget depends on your goal, how big your audience is and how many ads need testing before a pattern shows. We agree it with you on the call, and your ad spend is set separately from our management work." },
  { question: "Facebook or Instagram: which is better for advertising?", answer: "It depends on your audience and objective. We usually test both placements and move budget towards the one that performs for you. Meta's Ads Manager can run one campaign across Facebook, Instagram and other Meta placements, so you don't need separate campaigns to start." },
  { question: "Which Meta Ads campaign objectives can you run?", answer: "Meta offers objectives such as awareness, traffic, engagement, leads and sales. We choose the one that matches what you want people to do, for example fill in a lead form, call you or buy online, because the objective changes who Meta shows your ads to." },
  { question: "What are the Meta Pixel and Conversions API?", answer: "The Meta Pixel is a snippet on your website that reports actions such as a form submission or a purchase back to Meta. The Conversions API sends similar events from your server. Together they help Meta learn which people take action, so we check both are set up and reporting before we judge a campaign." },
  { question: "How do you handle creative for Meta Ads?", answer: "We can work with your existing images, video and copy or develop new ad creative. We test different hooks, formats and messages against each other and keep what the data supports, so the ads improve over time." },
  { question: "How long do Meta Ads take to work?", answer: "Every campaign starts with a learning period while Meta gathers data on who responds. We review early results, adjust and keep testing. We can't promise a timeframe or a result, because it depends on your offer, audience, budget and website." },
  { question: "Should I use Meta Ads or Google Ads?", answer: <>They reach people in different moments. Google Ads catches people already searching for what you sell, while Meta Ads puts your offer in front of people who match your audience before they search. Many businesses use both, and we can <Link href="/google-ads">manage Google Ads</Link> alongside Meta.</> },
  { question: "Can you build or improve the landing page my ads send people to?", answer: <>Yes. Ads only work if the page they lead to is clear and easy to act on. Our <Link href="/web-development">web development</Link> team can build or improve landing pages, and our <Link href="/seo">SEO team</Link> can help the same pages bring in organic visitors too.</> },
  { question: "How do I get started with Linkedo's Meta Ads management?", answer: <><Link href="/contact">Book a strategy call</Link>. Tell us what you sell, who you want to reach and what a good result looks like for your business, and we'll outline a plan for Facebook and Instagram.</> },
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
              Meta Ads Management for <span className="text-gradient-primary">Facebook & Instagram</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We plan, build and manage your Facebook and Instagram ads, from audience and creative to tracking and reporting, so your budget goes to the people most likely to enquire or buy.
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
              We develop ad creative and copy for the people you want to reach. We can work with your existing images and video or help shape new variations for different placements and messages.
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
              Get clear reports that show how your budget is performing, which ads and audiences are working, and what we plan to change next.
            </p>
            <ul className="space-y-3">
              {[
                "Clear performance reporting",
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

            <Section title="What Meta Ads Management Includes" className="mb-16">
        <p className="text-muted-foreground max-w-4xl mx-auto mb-8 text-center">
          Meta Ads put your business in front of people on Facebook and Instagram, but the results depend on the work behind the ads. Our Meta Ads management covers:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Account and audience planning", description: "Who you want to reach, what you want them to do, and which audiences to test first." },
            { title: "Campaign build", description: "Campaigns, ad sets and ads set up in Meta Ads Manager around one clear objective." },
            { title: "Creative and copy", description: "Images, video and text written for the feed, Stories and Reels placements." },
            { title: "Conversion tracking", description: "Checks that the Meta Pixel and Conversions API report the actions that matter to you." },
            { title: "Testing and optimisation", description: "New audiences, hooks and formats tested against each other, with budget moved to what works." },
            { title: "Reporting", description: "A clear monthly report on spend, results and next steps." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-card/50 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground max-w-4xl mx-auto mt-8">
          The work starts with understanding your offer and the people you want to reach. From there, campaign structure, creative, tracking and reporting are planned together. This keeps the advertising activity connected to the action you want customers to take.
        </p>
        <p className="text-muted-foreground max-w-4xl mx-auto mt-4">
          We also review the way your ads appear across placements and devices. The message, image or video should make sense in the feed, Stories and Reels, while the destination page should make the next step clear. Tracking checks help us understand which actions are being recorded and where further review may be needed.
        </p>
      </Section>

      <Section title="Which Meta Ads Campaign Fits Your Goal?" className="mb-16">
        <p className="text-muted-foreground max-w-4xl mx-auto mb-8 text-center">
          Meta lets you choose an objective, and it changes who sees your ads. Here is how we usually match them:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Leads", description: "For service businesses that want enquiries, using lead forms or a landing page." },
            { title: "Sales", description: "For online shops that want purchases, tracked from click to checkout." },
            { title: "Traffic and awareness", description: "For introducing a new brand, offer or location to people who haven't heard of you." },
            { title: "Retargeting", description: "For reaching people who already visited your website or engaged with your page." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-8">
          Not sure which fits? <Link href="/contact" className="text-primary hover:underline">Book a strategy call</Link> and we'll recommend one.
        </p>
        <p className="text-muted-foreground max-w-4xl mx-auto mt-4">
          The objective should reflect the action you want people to take, rather than simply the number of people who see an advert. We discuss the audience, offer and destination before recommending a campaign type, then agree what should be measured.
        </p>
      </Section>

      <Section title="How Our Meta Ads Process Works" className="mb-16">
        <ProcessTimeline
          steps={[
            { iconName: "MessageSquare", title: "Discovery", description: "We learn what you sell, who buys and what a good result looks like for you." },
            { iconName: "Target", title: "Plan", description: "We agree the objective, audiences, budget and creative direction before anything goes live." },
            { iconName: "Rocket", title: "Build and launch", description: "We set up tracking and campaigns, then launch under close watch." },
            { iconName: "TrendingUp", title: "Test and optimise", description: "We compare audiences, creative and placements and shift budget towards what is working." },
          ]}
        />
        <div className="max-w-3xl mx-auto mt-8 p-6 rounded-xl border border-border/50 bg-card/50">
          <h3 className="text-lg font-semibold text-foreground mb-2">Report</h3>
          <p className="text-sm text-muted-foreground">
            You get a clear report and a plan for the next round. We explain what changed, what the available data shows and what we recommend reviewing next.
          </p>
        </div>
        <p className="text-muted-foreground max-w-4xl mx-auto mt-6">
          You stay involved in the decisions that shape the campaign. We agree the objective, audience, budget and creative direction before launch, then use the reporting to explain what we have learned and what should be tested next.
        </p>
      </Section>

      <Section title="Meta Ads or Google Ads?" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>
            Google Ads reaches people who are already searching for what you sell. Meta Ads reaches people who fit your audience before they search, which makes it a strong fit for new offers, visual products and retargeting. Many businesses use both: <Link href="/google-ads" className="text-primary hover:underline">Google Ads</Link> for demand that already exists and Meta Ads to create more of it.
          </p>
          <p>
            The landing page matters either way. Our <Link href="/web-development" className="text-primary hover:underline">web development</Link> and <Link href="/seo" className="text-primary hover:underline">SEO</Link> teams can improve the page your ads send people to. The right mix depends on what you sell, how customers make decisions and which actions you want to measure.
          </p>
          <p>
            If people are actively looking for a service, search advertising can help you meet that existing demand. If you need to introduce a product, build awareness or reconnect with people who have already shown interest, Meta may be a useful part of the mix. The channels can support different parts of the customer journey, but each needs a clear purpose and suitable tracking.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Meta Ads FAQs" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} forceMount />
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Launch Your Meta Ads?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a Meta advertising strategy around your audience, offer and business goals.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Linkedo is open 24/7, so you can get in touch whenever suits you.
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
