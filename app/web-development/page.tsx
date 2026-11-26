"use client"

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Image from "next/image"
import { motion } from "framer-motion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"

const webDevServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://linkedo.co.uk/web-development#service",
  "name": "Web Development Services",
  "url": "https://linkedo.co.uk/web-development",
  "description": "Custom websites and web applications for UK businesses: discovery and planning, design and prototyping, development on Next.js, React, Vue.js, WordPress, Shopify or Webflow, testing and launch, with ongoing support.",
  "provider": {
    "@id": "https://linkedo.co.uk/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": "Web Development",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Design and Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Responsive Mobile-First Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Redesign and Migration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Maintenance and Support"
        }
      }
    ]
  }
}

const webDevFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/web-development#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies based on complexity. A basic website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with modern frameworks including Next.js, React, and Vue.js for custom development. We also build on platforms like WordPress, Shopify, and Webflow depending on your needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide website maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer ongoing maintenance packages including security updates, content updates, performance monitoring, and technical support."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website be mobile-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every site is built mobile-first and tested on phones, tablets and desktops before launch, so pages are easy to read and use on any screen."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign my existing website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialise in website redesigns. We'll analyse your current site, identify improvement opportunities, and create a modern, high-performing replacement. If your site already gets search traffic, we map the old URLs and set up redirects so you keep it (see redesigns and migrations)."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the number of page templates, the platform, the integrations you need and who supplies the content. We agree the scope in the discovery stage and give you a written quote before any work starts. See our pricing page or get in touch to talk through your project."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose a custom build, WordPress or Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose WordPress or Webflow if your team mainly needs to publish pages and posts, Shopify if selling products is the main job, and a custom Next.js or React build if the site has to do something those platforms handle badly, such as a client portal or complex integrations. We'll recommend one in discovery and explain why."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be able to update the website myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Where you need to edit content, we set the site up with a content management system (WordPress, Shopify, Webflow or a headless CMS) and show your team how to update pages, posts and images."
      }
    },
    {
      "@type": "Question",
      "name": "Can you connect the website to my CRM, booking or payment tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually, yes, as long as the tool offers an API or a ready-made integration. We check each one during discovery and include it in the scope and the quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build websites with SEO in mind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every build includes the technical basics: clean URLs, page titles and meta descriptions, heading structure, structured data, an XML sitemap and fast-loading pages. If you want ongoing search growth after launch, see our SEO services."
      }
    },
    {
      "@type": "Question",
      "name": "When can I contact Linkedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Linkedo is open 24/7. Call +44 7927 969991, email info@linkedo.co.uk or use the contact form, and we'll come back to you about your project."
      }
    }
  ]
}

const webDevBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://linkedo.co.uk/services" },
    { "@type": "ListItem", position: 3, name: "Web Development", item: "https://linkedo.co.uk/web-development" },
  ],
}

const serviceFeatures = [
  {
    iconName: "Layout",
    title: "Custom Design",
    description: "Unique, brand-focused designs that stand out and convert visitors into customers.",
  },
  {
    iconName: "Smartphone",
    title: "Responsive & Mobile-First",
    description: "Built mobile-first and tested on phones, tablets and desktops.",
  },
  {
    iconName: "Zap",
    title: "Lightning Fast",
    description: "Built for fast loading and checked against Core Web Vitals before launch.",
  },
  {
    iconName: "Shield",
    title: "Secure & Scalable",
    description: "Built with security best practices and scalable architecture for growth.",
  },
  {
    iconName: "Search",
    title: "SEO-Ready Build",
    description: "Technical SEO built-in from the ground up for better search visibility.",
  },
  {
    iconName: "BarChart",
    title: "Analytics Integration",
    description: "Comprehensive tracking setup to measure and optimise performance.",
  },
]

const processSteps = [
  {
    iconName: "MessageSquare",
    title: "Discovery & Planning",
    description: "We understand your business goals, target audience, and project requirements.",
  },
  {
    iconName: "Palette",
    title: "Design & Prototyping",
    description: "Create wireframes and high-fidelity designs for your approval.",
  },
  {
    iconName: "Code",
    title: "Development",
    description: "Build your website with clean, efficient code and best practices.",
  },
  {
    iconName: "TestTube",
    title: "Testing & QA",
    description: "Rigorous testing across devices, browsers, and performance metrics.",
  },
  {
    iconName: "Rocket",
    title: "Launch & Support",
    description: "Deploy your site and provide ongoing maintenance and support.",
  },
]

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Retailer",
    description: "Redesign of an online store with a simpler product range and a shorter checkout flow.",
    href: "/case-studies",
    tags: ["E-commerce", "Redesign", "Shopify"],
    image: "/modern-ecommerce-website.png",
  },
  {
    title: "SaaS Platform Development",
    client: "Tech Startup",
    description: "Custom web application with user accounts, role-based access and integrations.",
    href: "/case-studies",
    tags: ["SaaS", "Web App", "React"],
    image: "/modern-saas-dashboard.png",
  },
]

const faqs = [
  { question: "How long does it take to build a website?", answer: <>Timeline varies based on complexity. A basic website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase.</> },
  { question: "What platforms do you work with?", answer: <>We work with modern frameworks including Next.js, React, and Vue.js for custom development. We also build on platforms like WordPress, Shopify, and Webflow depending on your needs.</> },
  { question: "Do you provide website maintenance?", answer: <>Yes, we offer ongoing maintenance packages including security updates, content updates, performance monitoring, and technical support.</> },
  { question: "Will my website be mobile-friendly?", answer: <>Yes. Every site is built mobile-first and tested on phones, tablets and desktops before launch, so pages are easy to read and use on any screen.</> },
  { question: "Can you redesign my existing website?", answer: <>Yes, we specialise in website redesigns. We'll analyse your current site, identify improvement opportunities, and create a modern, high-performing replacement. If your site already gets search traffic, we map the old URLs and set up redirects so you keep it (see <a href="#redesign" className="text-primary hover:underline">redesigns and migrations</a>).</> },
  { question: "How much does a website cost?", answer: <>It depends on the number of page templates, the platform, the integrations you need and who supplies the content. We agree the scope in the discovery stage and give you a written quote before any work starts. See our <a href="/pricing" className="text-primary hover:underline">pricing</a> page or <a href="/contact" className="text-primary hover:underline">get in touch</a> to talk through your project.</> },
  { question: "Should I choose a custom build, WordPress or Shopify?", answer: <>Choose WordPress or Webflow if your team mainly needs to publish pages and posts, Shopify if selling products is the main job, and a custom Next.js or React build if the site has to do something those platforms handle badly, such as a client portal or complex integrations. We'll recommend one in discovery and explain why.</> },
  { question: "Will I be able to update the website myself?", answer: <>Yes. Where you need to edit content, we set the site up with a content management system (WordPress, Shopify, Webflow or a headless CMS) and show your team how to update pages, posts and images.</> },
  { question: "Can you connect the website to my CRM, booking or payment tools?", answer: <>Usually, yes, as long as the tool offers an API or a ready-made integration. We check each one during discovery and include it in the scope and the quote.</> },
  { question: "Do you build websites with SEO in mind?", answer: <>Yes. Every build includes the technical basics: clean URLs, page titles and meta descriptions, heading structure, structured data, an XML sitemap and fast-loading pages. If you want ongoing search growth after launch, see our <a href="/seo" className="text-primary hover:underline">SEO services</a>.</> },
  { question: "When can I contact Linkedo?", answer: <>Linkedo is open 24/7. Call +44 7927 969991, email info@linkedo.co.uk or use the <a href="/contact" className="text-primary hover:underline">contact form</a>, and we'll come back to you about your project.</> },
]

export default function WebDevelopmentPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={webDevServiceSchema} />
      <SchemaMarkup schema={webDevFaqSchema} />
      <SchemaMarkup schema={webDevBreadcrumbSchema} />
      {/* Hero Image Section */}
      <Section className="mb-16">
        <Breadcrumbs
          items={[{ label: "Services", href: "/services" }, { label: "Web Development" }]}
          className="mb-6"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Web Development
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Custom Websites <span className="text-gradient-primary">That Drive Results</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We design and build custom websites and web apps for UK businesses, from discovery and design to development, testing and launch, with support after go-live.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/modern-website-design-mockup-on-multiple-devices-s.jpg" alt="Responsive Web Design" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Performance Metrics Visualization */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          >
            <Image src="/website-performance-metrics-showing-95--pagespeed-.jpg" alt="Performance Metrics" fill className="object-cover" />
          </motion.div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Speed & Performance
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Lightning-Fast Load Times</h2>
            <p className="text-muted-foreground mb-6">
              We build every page to load quickly and stay stable on phones, checking the Core Web Vitals Google uses to measure real-world page experience.
            </p>
            <ul className="space-y-3">
              {[
                "Image optimisation & lazy loading",
                "Code splitting & minification",
                "CDN integration",
                "Core Web Vitals checked before launch",
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

      {/* Development Workflow Visualization */}
      <Section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Modern Development
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Built With Best Practices</h2>
            <p className="text-muted-foreground mb-6">
              We use industry-leading frameworks and tools to build scalable, maintainable websites that stand the test
              of time.
            </p>
            <ul className="space-y-3">
              {[
                "React, Next.js, Vue.js",
                "Headless CMS integration",
                "Version control with Git",
                "Automated testing & deployment",
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
            <Image src="/code-editor-showing-react-and-next-js-development-.jpg" alt="Modern Development Stack" fill className="object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Who This Is For */}
      <Section title="Who This Is For" className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Growing Businesses</h3>
            <p className="text-muted-foreground text-sm">
              Need a professional web presence to establish credibility and attract customers online.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Brands</h3>
            <p className="text-muted-foreground text-sm">
              Want to sell online with a fast, secure platform that converts visitors into customers.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">SaaS Companies</h3>
            <p className="text-muted-foreground text-sm">
              Need custom web applications with complex functionality and integrations.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Offer */}
      <Section eyebrow="Services" title="What We Offer" className="mb-16">
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

      <Section title="Custom Build, WordPress or Shopify: Which Fits Your Business?" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>Not every business needs a fully custom website. We'll recommend the simplest option that does the job:</p>
          <ul className="list-disc pl-6 space-y-3">
          <li><strong>WordPress or Webflow</strong> when your team mainly needs to publish pages, services and blog posts.</li>
          <li><strong>Shopify</strong> when selling products online is the main job of the site.</li>
          <li><strong>A custom Next.js or React build</strong> when the site has to do something off-the-shelf platforms handle badly, such as client portals, calculators, booking rules or several integrations.</li>
          <li><strong>A web application</strong> when users need accounts, dashboards and their own data.</li>
          </ul>
          <p>We explain the trade-offs (cost, speed of editing, flexibility and upkeep) during discovery, before you commit to anything.</p>
        </div>
      </Section>

      <Section title="What We Need From You Before We Start" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>A clear brief makes the build quicker and the quote more accurate. Before discovery, it helps to have:</p>
          <ol className="list-decimal pl-6 space-y-3">
          <li>Your goals: what the site must achieve (enquiries, sales, bookings, sign-ups).</li>
          <li>A list of the pages or sections you expect, and any sites you like.</li>
          <li>Your logo, brand colours and fonts, if you have them, or a note that you need <a href="/branding" className="text-primary hover:underline">branding</a> too.</li>
          <li>Who will write the content and supply the images.</li>
          <li>The tools the site must connect to (CRM, booking, payments, email marketing, analytics).</li>
          <li>Access to your current domain, hosting and website, if you already have one.</li>
          </ol>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Our Process" title="How We Work" className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </Section>

      <Section id="redesign" title="Redesigns and Migrations Without Losing Search Traffic" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>A redesign is when many sites lose rankings, usually because old URLs disappear without redirects or content quietly goes missing. On every redesign we list your existing URLs, keep or improve the pages that already bring visitors, set up 301 redirects from old to new URLs, carry over titles, meta descriptions and structured data, and test the new site before it goes live. Google's own guide to <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" className="text-primary hover:underline" target="_blank" rel="noopener">moving a site with URL changes</a> explains why this matters. After launch we check Search Console for crawl errors and fix them.</p>
        </div>
      </Section>

      <Section title="What We Check Before Launch" className="mb-16">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <ul className="list-disc pl-6 space-y-3">
          <li><strong>Speed and stability:</strong> we test the <a href="https://web.dev/articles/vitals" className="text-primary hover:underline" target="_blank" rel="noopener">Core Web Vitals</a> (loading, responsiveness and layout stability) on mobile and desktop.</li>
          <li><strong>Accessibility:</strong> we check headings, colour contrast, image alt text, form labels and keyboard use against the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-primary hover:underline" target="_blank" rel="noopener">WCAG</a> guidelines.</li>
          <li><strong>Search basics:</strong> page titles, meta descriptions, one H1 per page, structured data, XML sitemap and a robots.txt that doesn't block important pages.</li>
          <li><strong>Forms and tracking:</strong> every form sends where it should, and analytics and conversion tracking record correctly.</li>
          <li><strong>Security:</strong> HTTPS everywhere, up-to-date dependencies and no exposed admin areas.</li>
          </ul>
          <p>Once the site is live, we can keep it updated through a maintenance plan, or help it grow through <a href="/seo" className="text-primary hover:underline">SEO</a>, <a href="/google-ads" className="text-primary hover:underline">Google Ads</a> and <a href="/meta-ads" className="text-primary hover:underline">Meta Ads</a>.</p>
        </div>
      </Section>

      {/* Case Studies */}
      <Section eyebrow="Case Studies" title="Recent Projects" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently Asked Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} forceMount />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's discuss your web development needs and create a solution that drives real business results.
          </p>
          <p className="text-muted-foreground mb-6">Linkedo is open 24/7, so you can get in touch whenever suits you.</p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get a Free Quote
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
