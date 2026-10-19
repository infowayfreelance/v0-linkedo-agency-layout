"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, animate } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  Star,
  Phone,
} from "lucide-react"

import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { ContactModal } from "@/components/ui/contact-modal"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { MainShell } from "@/components/layout/main-shell"

const caseStudies = [
  {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    description:
      "Helping a UK-based SaaS company triple organic traffic and improve lead generation through advanced SEO and content marketing strategies.",
    image: "/saas-dashboard-analytics-dark-theme.jpg",
    tags: ["SEO", "Content Marketing"],
    href: "/case-studies/techflow",
  },
  {
    title: "5x ROAS on Google Ads",
    client: "Manufacturing Co.",
    description:
      "Launching high-converting Google Ads campaigns that helped a manufacturing business expand into competitive UK markets with profitable ROI.",
    image: "/manufacturing-industrial-modern.jpg",
    tags: ["Google Ads", "Lead Generation"],
    // No dedicated case-study page exists yet — card is intentionally non-clickable.
  },
  {
    title: "Complete Digital Transformation",
    client: "Legal Partners LLP",
    description:
      "Redesigning a law firm's digital presence with SEO, web development, and paid advertising to generate 200+ qualified leads every month.",
    image: "/legal-office-professional-modern.jpg",
    tags: ["Web Development", "SEO", "Paid Ads"],
    // No dedicated case-study page exists yet — card is intentionally non-clickable.
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "Discovery & Research",
    description:
      "We analyse your business, competitors, industry trends, and target audience to create a strong foundation for long-term digital success.",
  },
  {
    iconName: "PenTool",
    title: "Strategy & Planning",
    description:
      "Our team develops a customised SEO and digital marketing strategy with clear goals, KPIs, timelines, and scalable growth opportunities.",
  },
  {
    iconName: "Rocket",
    title: "Campaign Execution",
    description:
      "We launch and manage your SEO, web development, Google Ads, and social media campaigns with precision and performance tracking.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimisation & Growth",
    description:
      "Through continuous monitoring, testing, and data analysis, we optimise campaigns to improve conversions, ROI, and overall business performance.",
  },
]

const blogPosts = [
  {
    title: "Top SEO Trends to Watch in 2025",
    description:
      "Learn how modern SEO strategies help UK businesses increase rankings, traffic, and qualified lead generation.",
    category: "SEO",
    categoryColor: "text-primary",
    readTime: "6 min read",
    image: "/seo-analytics-growth-chart.jpg",
    href: "/blog/seo-trends-2025",
  },
  {
    title: "Maximizing ROI with Google Ads: A Complete Guide",
    description:
      "Discover proven Google Ads optimisation techniques that improve campaign performance and lower acquisition costs.",
    category: "Google Ads",
    categoryColor: "text-accent",
    readTime: "8 min read",
    image: "/google-ads-dashboard-with-campaign-metrics-and-per.jpg",
    href: "/blog/google-ads-roi-optimization",
  },
  {
    title: "Modern Web Development: Best Practices for 2025",
    description:
      "Improve website performance, search rankings, and conversion rates with this complete web development guide.",
    category: "Development",
    categoryColor: "text-cyan-400",
    readTime: "7 min read",
    image: "/code-editor-showing-react-and-next-js-development-.jpg",
    href: "/blog/web-development-best-practices",
  },
]

const testimonials = [
  {
    quote:
      "Linkedo transformed our online presence completely. Within 4 months our qualified leads doubled and our cost per acquisition dropped significantly. Genuinely one of the best investments we've made.",
    author: "James Richardson",
    role: "Managing Director",
    company: "London Finance Co.",
    image: "/professional-man-headshot-suit.jpg",
  },
  {
    quote:
      "Professional, transparent, and results-driven. Linkedo's SEO strategy took us from page 3 to page 1 for our most competitive keywords in London. The team truly cares about your business.",
    author: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "London Property Group",
    image: "/professional-woman-headshot.png",
  },
  {
    quote:
      "Their Google Ads management cut our cost per lead by 60%. The team is responsive, honest, and genuinely invested in our growth. We now rank on page one for every target keyword.",
    author: "David Clarke",
    role: "Partner",
    company: "London Legal Services",
    image: "/professional-man-headshot-suit.jpg",
  },
]

const whyChoose = [
  {
    icon: CheckCircle2,
    title: "10+ Years Combined UK Experience",
    desc: "Deep expertise in UK search behaviour, competition, and buyer intent across B2B and B2C sectors.",
  },
  {
    icon: CheckCircle2,
    title: "B2B & B2C Strategy Specialists",
    desc: "We tailor campaigns to your business model — from lead generation funnels to e-commerce revenue growth.",
  },
  {
    icon: CheckCircle2,
    title: "Data-Driven Decisions Only",
    desc: "Every recommendation is backed by real market data, competitor analysis, and performance benchmarks.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Monthly Reporting",
    desc: "No jargon. Just clear, honest reports showing exactly what we're doing and the results it's delivering.",
  },
  {
    icon: CheckCircle2,
    title: "Leads, Sales & ROI — Not Vanity Metrics",
    desc: "We measure success by revenue impact, not page views. Every campaign is optimised for commercial outcomes.",
  },
  {
    icon: CheckCircle2,
    title: "Full-Service Under One Roof",
    desc: "Web development and digital marketing working together — no agency silos, no communication gaps.",
  },
]

const ukLocations = [
  { city: "London", href: "/london", emoji: "🏙️" },
  { city: "Manchester", href: "/manchester", emoji: "🏭" },
  { city: "Birmingham", href: "/birmingham", emoji: "⚙️" },
  { city: "Leeds", href: "/leeds", emoji: "🌿" },
  { city: "Bristol", href: "/bristol", emoji: "🌉" },
  { city: "Edinburgh", href: "/edinburgh", emoji: "🏰" },
  { city: "Glasgow", href: "/glasgow", emoji: "🏗️" },
  { city: "Liverpool", href: "/liverpool", emoji: "⚓" },
  { city: "Sheffield", href: "/sheffield", emoji: "🔩" },
  { city: "Nottingham", href: "/nottingham", emoji: "🏹" },
  { city: "Leicester", href: "/leicester", emoji: "🦊" },
  { city: "Newcastle", href: "/newcastle", emoji: "🌊" },
]

const faqs = [
  {
    question: "What digital marketing services does Linkedo offer?",
    answer:
      "Linkedo offers SEO, Google Ads management, Meta Ads, web development, branding, and digital marketing consulting — all focused on driving leads, sales, and long-term ROI for UK businesses.",
  },
  {
    question: "Does Linkedo work with both B2B and B2C businesses?",
    answer:
      "Yes. Linkedo works with both B2B and B2C companies across the UK, tailoring strategies to match each business model, target audience, and growth objective.",
  },
  {
    question: "Which areas of the UK does Linkedo serve?",
    answer:
      "Linkedo serves businesses across the entire United Kingdom, including London, Manchester, Birmingham, Leeds, Liverpool, Glasgow, and surrounding regions.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements in rankings and organic traffic within 3 to 6 months, depending on competition, website authority, and strategy execution.",
  },
  {
    question: "Can Linkedo manage my Google Ads campaigns?",
    answer:
      "Yes. Linkedo builds and manages strategic Google Ads campaigns focused on maximising conversions, reducing cost per acquisition, and delivering a strong return on investment.",
  },
  {
    question: "What makes Linkedo different from other UK digital marketing agencies?",
    answer:
      "Linkedo combines data-driven strategy, performance tracking, and tailored execution across SEO, paid ads, and web development — with a clear focus on measurable business growth rather than vanity metrics.",
  },
  {
    question: "Does Linkedo build websites as well as run marketing campaigns?",
    answer:
      "Yes. Linkedo offers custom web development services, building fast, SEO-optimised websites designed for user experience, lead generation, and long-term business growth.",
  },
  {
    question: "How does Linkedo's process work?",
    answer:
      "Linkedo follows a four-step process: Discovery & Research, Strategy & Planning, Campaign Execution, and Optimisation & Growth — ensuring every campaign is built on solid data and continuously improved.",
  },
  {
    question: "Are there any free tools available on the Linkedo website?",
    answer:
      "Yes. Linkedo offers free AI-powered marketing tools including an AI Meta Title Generator, AI Meta Description Generator, and AI Blog Outline Generator to help businesses improve their SEO quickly.",
  },
  {
    question: "How do I get started with Linkedo?",
    answer:
      "You can get started by reaching out through the Linkedo website to book a consultation. The team will analyse your business, discuss your goals, and recommend a customised digital marketing strategy.",
  },
]

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v).toString()
      },
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="relative p-6 sm:p-8 rounded-2xl text-center bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          <span ref={ref} className="text-gradient-primary">0</span>
          <span className="text-primary">{suffix}</span>
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  )
}

const industries = [
  "Finance & Accounting",
  "Legal Services",
  "Healthcare & Medical",
  "SaaS & Technology",
  "Manufacturing",
  "E-Commerce & Retail",
  "Real Estate",
  "Professional Services",
]

function TrustStrip() {
  return (
    <div className="py-8 border-y border-border/30 bg-card/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-5">
          Trusted across UK industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-sm text-muted-foreground/70 font-medium whitespace-nowrap hover:text-primary transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={post.href}
        className="group block h-full rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
      >
        <div className="aspect-[16/9] overflow-hidden bg-card relative">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="text-muted-foreground/50">·</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.description}</p>
          <div className="mt-4 flex items-center text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read article <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function HomePageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection onBookCall={() => setIsModalOpen(true)} />

        <TrustStrip />

        <ServicesSection />

        <Section gradient>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <AnimatedStat target={150} suffix="+" label="Projects Delivered" />
            <AnimatedStat target={98} suffix="%" label="Client Satisfaction" />
            <AnimatedStat target={50} suffix="M+" label="Revenue Generated for Clients" />
            <AnimatedStat target={15} suffix="+" label="Industry Awards" />
          </div>
        </Section>

        <Section
          eyebrow="Why Linkedo"
          title="The UK Digital Marketing Agency Built for Results"
          description="We combine the strategy of a consultancy with the execution of a performance agency — so you get real commercial outcomes, not just reports."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex gap-4 p-5 sm:p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Section>

        <Section
          gradient
          eyebrow="Our Process"
          title="How We Generate Consistent Results"
          description="A proven digital marketing process built to help UK businesses increase visibility, generate qualified leads, and achieve sustainable online growth."
        >
          <ProcessTimeline steps={processSteps} />
        </Section>

        <Section
          eyebrow="Where We Operate"
          title="UK-Wide Digital Marketing Services"
          description="Linkedo provides SEO, web design, Google Ads, and digital marketing services for businesses across the United Kingdom."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {ukLocations.map((loc, index) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Link
                  href={loc.href}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 text-center"
                >
                  <span className="text-2xl" role="img" aria-hidden>{loc.emoji}</span>
                  <div className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    <MapPin className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {loc.city}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations">
              <AnimatedButton variant="secondary">
                View All Locations
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* AI Tools Teaser — hidden */}

        <Section
          eyebrow="Case Studies"
          title="Real Results for UK Businesses"
          description="Discover how Linkedo helps B2B and B2C companies across the UK increase traffic, generate leads, and scale revenue through strategic digital marketing."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies">
              <AnimatedButton variant="secondary">
                View All Case Studies
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        <Section
          gradient
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          description="Real feedback from UK businesses that have grown their digital presence, leads, and revenue with Linkedo."
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TestimonialCard {...t} />
                <div className="flex gap-1 mt-3 ml-8 pl-6 border-l border-border/50">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">5.0</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="From Our Blog"
          title="Latest SEO & Digital Marketing Insights"
          description="Explore expert insights, SEO strategies, Google Ads tips, and web development guides designed to help UK businesses grow online."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <AnimatedButton variant="ghost">
                Read More Articles
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        <Section
          gradient
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common questions about Linkedo's digital marketing services for UK businesses."
        >
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-cyan-500/10" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, oklch(0.72 0.19 195) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[160px]" />

          <MainShell className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Grow Your{" "}
                <span className="text-gradient-primary">UK Business Online?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Book a free strategy call with our experts and discover how Linkedo can help you
                generate leads, sales, and long-term ROI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <AnimatedButton size="lg" onClick={() => setIsModalOpen(true)}>
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <Link href="/contact">
                  <AnimatedButton variant="secondary" size="lg">
                    Contact Us
                  </AnimatedButton>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+447927969991"
                  className="hover:text-primary transition-colors font-medium"
                >
                  +44 7927 969991
                </a>
                <span className="mx-2 text-border">·</span>
                <span>No obligation · Free consultation</span>
              </div>
            </motion.div>
          </MainShell>
        </section>
      </main>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
