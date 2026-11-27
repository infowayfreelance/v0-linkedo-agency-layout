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
import Link from "next/link"

const brandingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/branding#service",
  "name": "Branding Services",
  "url": "https://linkedo.co.uk/branding",
  "description": "Brand strategy, brand identity design, brand guidelines and brand refreshes for UK businesses: positioning and messaging, logo design and variations, colour palette, typography, brand voice, and applications such as stationery, social media templates, email signatures and presentation decks.",
  "provider": {
    "@id": "https://linkedo.co.uk/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": "Branding & Identity",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Branding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Identity Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Strategy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Guidelines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Refresh"
        }
      }
    ]
  }
}

const brandingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/branding#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Linkedo branding project include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on what you need, a project can cover brand strategy (positioning, messaging and your unique value proposition), brand identity (logo design and variations, colour palette, typography and brand voice), brand guidelines, and applications such as business cards and stationery, social media templates, email signatures and presentation decks. We agree the scope with you before work starts."
      }
    },
    {
      "@type": "Question",
      "name": "Is branding the same as a logo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A logo is one part of a brand. Branding also covers how you are positioned, what your messaging says, your colours and typography, your tone of voice and how all of that is applied consistently across your website, social media and print."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose a brand refresh or a full rebrand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A brand refresh suits a business whose name and recognition are worth keeping but whose look, messaging or materials feel dated or inconsistent. A full rebrand is more likely if your positioning, audience or name has changed. Tell us what is and isn't working and we'll recommend which fits."
      }
    },
    {
      "@type": "Question",
      "name": "What are brand guidelines and do I need them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brand guidelines, sometimes called a brand book, set out how to use your logo, colours, typography, imagery and tone of voice. You need them if more than one person, team or supplier will create anything with your brand on it, because they keep everything consistent."
      }
    },
    {
      "@type": "Question",
      "name": "What do I need to provide before we start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A short description of your business and audience, any existing logo files, colours and fonts, examples of brands you like and dislike, and a list of where the brand will appear, such as your website, social media, print or packaging. Details are in the section on what to have ready."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with my existing logo and colours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you already have assets you want to keep, tell us at the start. We can build a refresh around them, or document them in brand guidelines so they are used consistently."
      }
    },
    {
      "@type": "Question",
      "name": "Do you check whether my new brand name or logo is already registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can't give legal advice. Before you launch a new name or logo, search the UK trade mark register on GOV.UK and read the GOV.UK guidance on registering a trade mark. If you plan to register, consider speaking to a trade mark professional."
      }
    },
    {
      "@type": "Question",
      "name": "How do you make sure my brand colours are accessible on a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We check text and background pairings against the WCAG contrast guidance, which asks for a contrast ratio of at least 4.5:1 for normal-size text at level AA (W3C). This matters most when the same palette is used on your website and in your adverts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build the website and marketing for the new brand too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Linkedo also provides web development, SEO, Google Ads and Meta Ads, so your new brand can be applied across your website and campaigns. See our portfolio and case studies for examples of our work."
      }
    },
    {
      "@type": "Question",
      "name": "How much does branding cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the scope: a brand refresh, a full identity, strategy work and guidelines are different projects. See our pricing page for how we price our services, or contact us with a short description of what you need."
      }
    },
    {
      "@type": "Question",
      "name": "Is Linkedo open 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Linkedo is open 24/7. Call +44 7927 969991 or email info@linkedo.co.uk, or use the contact form to start your brand project."
      }
    }
  ]
}

const brandingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Branding", item: "https://linkedo.co.uk/branding" },
  ],
}

const faqs = [
  { question: "What does a Linkedo branding project include?", answer: <>Depending on what you need, a project can cover brand strategy (positioning, messaging and your unique value proposition), brand identity (logo design and variations, colour palette, typography and brand voice), brand guidelines, and applications such as business cards and stationery, social media templates, email signatures and presentation decks. We agree the scope with you before work starts.</> },
  { question: "Is branding the same as a logo?", answer: "No. A logo is one part of a brand. Branding also covers how you are positioned, what your messaging says, your colours and typography, your tone of voice and how all of that is applied consistently across your website, social media and print." },
  { question: "Should I choose a brand refresh or a full rebrand?", answer: <>A <Link href="#refresh-or-rebrand">brand refresh</Link> suits a business whose name and recognition are worth keeping but whose look, messaging or materials feel dated or inconsistent. A full rebrand is more likely if your positioning, audience or name has changed. Tell us what is and isn't working and we'll recommend which fits.</> },
  { question: "What are brand guidelines and do I need them?", answer: "Brand guidelines, sometimes called a brand book, set out how to use your logo, colours, typography, imagery and tone of voice. You need them if more than one person, team or supplier will create anything with your brand on it, because they keep everything consistent." },
  { question: "What do I need to provide before we start?", answer: "A short description of your business and audience, any existing logo files, colours and fonts, examples of brands you like and dislike, and a list of where the brand will appear, such as your website, social media, print or packaging. Details are in the section on what to have ready." },
  { question: "Can you work with my existing logo and colours?", answer: "Yes. If you already have assets you want to keep, tell us at the start. We can build a refresh around them, or document them in brand guidelines so they are used consistently." },
  { question: "Do you check whether my new brand name or logo is already registered?", answer: <>We can't give legal advice. Before you launch a new name or logo, search the UK trade mark register on <a href="https://www.gov.uk/search-for-trademark" target="_blank" rel="noopener">GOV.UK</a> and read the GOV.UK guidance on <a href="https://www.gov.uk/how-to-register-a-trade-mark" target="_blank" rel="noopener">registering a trade mark</a>. If you plan to register, consider speaking to a trade mark professional.</> },
  { question: "How do you make sure my brand colours are accessible on a website?", answer: <>We check text and background pairings against the WCAG contrast guidance, which asks for a contrast ratio of at least 4.5:1 for normal-size text at level AA (<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener">W3C</a>). This matters most when the same palette is used on your website and in your adverts.</> },
  { question: "Can you build the website and marketing for the new brand too?", answer: <>Yes. Linkedo also provides <Link href="/web-development">web development</Link>, <Link href="/seo">SEO</Link>, <Link href="/google-ads">Google Ads</Link> and <Link href="/meta-ads">Meta Ads</Link>, so your new brand can be applied across your website and campaigns. See our <Link href="/portfolio">portfolio</Link> and <Link href="/case-studies">case studies</Link> for examples of our work.</> },
  { question: "How much does branding cost?", answer: <>It depends on the scope: a brand refresh, a full identity, strategy work and guidelines are different projects. See our <Link href="/pricing">pricing page</Link> for how we price our services, or <Link href="/contact">contact us</Link> with a short description of what you need.</> },
  { question: "Is Linkedo open 24/7?", answer: <>Yes, Linkedo is open 24/7. Call +44 7927 969991 or email info@linkedo.co.uk, or use the <Link href="/contact">contact form</Link> to start your brand project.</> },
]

const services = [
  {
    iconName: "Palette",
    title: "Brand Identity",
    description: "Logo design, colour palettes, and visual identity systems that represent your brand. See web development for putting your identity on a new website.",
    href: "/web-development",
  },
  {
    iconName: "FileText",
    title: "Brand Strategy",
    description: "Define your brand positioning, messaging, and unique value proposition.",
  },
  {
    iconName: "Package",
    title: "Brand Guidelines",
    description: "Comprehensive brand books that ensure consistency across all touchpoints.",
  },
  {
    iconName: "Sparkles",
    title: "Brand Refresh",
    description: "Modernise your existing brand while maintaining recognition and equity.",
    href: "#refresh-or-rebrand",
  },
]

export default function BrandingPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={brandingServiceSchema} />
      <SchemaMarkup schema={brandingFaqSchema} />
      <SchemaMarkup schema={brandingBreadcrumbSchema} />
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Branding" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Branding Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Build a Brand <span className="text-gradient-primary">That Stands Out</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Strategic branding that creates memorable impressions and builds lasting connections with your audience. Linkedo helps UK businesses with brand strategy, identity design, brand guidelines and brand refreshes, and is open 24/7.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image
              src="/brand-identity-design-showcase-with-logo--colors--.jpg"
              alt="Brand Identity Showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
            <Image
              src="/brand-guidelines-book-with-color-palette-and-logo-.jpg"
              alt="Brand Guidelines"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Comprehensive Identity
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Every Detail Matters</h2>
            <p className="text-muted-foreground mb-6">
              We craft cohesive brand identities that work seamlessly across all touchpoints, from digital to print.
            </p>
            <ul className="space-y-3">
              {[
                "Logo design & variations",
                "Color palette & typography",
                "Brand voice & messaging",
                "Visual asset library",
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

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Brand Applications
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Consistency Across All Touchpoints</h2>
            <p className="text-muted-foreground mb-6">
              Your brand identity should work seamlessly across every medium—from digital to print, from web to
              packaging.
            </p>
            <ul className="space-y-3">
              {[
                "Business cards & stationery",
                "Social media templates",
                "Email signatures & templates",
                "Presentation decks",
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
            <Image src="/brand-identity-mockup-showing-business-cards--lett.jpg" alt="Brand Applications" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/brand-strategy-framework-diagram-with-positioning-.jpg" alt="Brand Strategy Framework" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Strategic Foundation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">More Than Just a Logo</h2>
            <p className="text-muted-foreground mb-6">
              Great brands start with strategy. We define your positioning, messaging, and unique value proposition
              before designing visuals.
            </p>
            <ul className="space-y-3">
              {[
                "Brand positioning workshops",
                "Competitor analysis",
                "Target audience research",
                "Messaging framework development",
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

      <Section title="Our Branding Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>


      <Section title="How a Branding Project Works" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Discovery:</strong> we learn about your business, audience and competitors, and agree what the project needs to cover.</li>
            <li><strong>Strategy:</strong> we define your positioning, messaging and unique value proposition before designing visuals.</li>
            <li><strong>Identity design:</strong> logo design and variations, colour palette, typography and brand voice.</li>
            <li><strong>Applications:</strong> your identity applied to business cards and stationery, social media templates, email signatures and presentation decks.</li>
            <li><strong>Brand guidelines:</strong> a brand book that explains how to use everything consistently across digital and print.</li>
          </ol>
          <p>Scope and what is included are agreed with you before work starts. Not every project needs every step, so a brand refresh may skip some of them.</p>
        </div>
      </Section>
      <Section id="refresh-or-rebrand" title="Brand Refresh or Full Rebrand?" className="mb-16">
        <div className="max-w-4xl mx-auto text-muted-foreground">
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Brand refresh:</strong> choose this when people already recognise your name and your business is on the right track, but the logo, colours, messaging or materials look dated or inconsistent. We modernise what you have while keeping what is worth keeping.</li>
            <li><strong>Full rebrand:</strong> choose this when your positioning, audience or services have changed enough that the current brand no longer describes you, or when the name itself needs to change.</li>
            <li><strong>Not sure?</strong> Tell us what's working, what isn't and who you want to reach, and we'll recommend one. <Link href="/contact">Contact us</Link> to talk it through.</li>
          </ul>
        </div>
      </Section>
      <Section title="What to Have Ready Before We Start" className="mb-16">
        <div className="max-w-4xl mx-auto text-muted-foreground">
          <ul className="list-disc pl-6 space-y-3">
            <li>A short description of your business, who you serve and what makes you different.</li>
            <li>Your current logo files, brand colours and fonts, if you have them.</li>
            <li>Examples of brands, websites or materials you like, and some you don't.</li>
            <li>A list of where the brand will appear: website, social media, print, signage, packaging or email.</li>
            <li>Who needs to approve the work, and any dates the new brand needs to be ready for.</li>
          </ul>
        </div>
      </Section>
      <Section title="Before You Launch: Names, Trade Marks and Colour Contrast" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>Before you commit to a new name or logo, check that it isn't already taken: search the UK trade mark register on <a href="https://www.gov.uk/search-for-trademark" target="_blank" rel="noopener">GOV.UK</a> and read the GOV.UK guidance on <a href="https://www.gov.uk/how-to-register-a-trade-mark" target="_blank" rel="noopener">registering a trade mark</a>. We can't give legal advice, so if you plan to register, speak to a trade mark professional.</p>
          <p>For colours, make sure text stays readable against its background. The WCAG guidance asks for a contrast ratio of at least 4.5:1 for normal-size text at level AA (<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener">W3C</a>).</p>
          <p>Once the identity is ready, our <Link href="/web-development">web development</Link>, <Link href="/seo">SEO</Link>, <Link href="/google-ads">Google Ads</Link> and <Link href="/meta-ads">Meta Ads</Link> services can put it to work, and our <Link href="/pricing">pricing page</Link> explains how we price our services.</p>
        </div>
      </Section>
      <Section id="faq" eyebrow="FAQ" title="Branding FAQs" className="mb-16">
        <div className="max-w-4xl mx-auto"><FAQAccordion items={faqs} forceMount /></div>
      </Section>
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your Brand?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a brand identity that captures your essence and resonates with your audience.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Linkedo is open 24/7. Call +44 7927 969991, email info@linkedo.co.uk or <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Start Your Brand Project
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
