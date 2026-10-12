"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  FileText,
  FileSearch,
  ListTree,
  Link2,
  ArrowRight,
  Check,
  Lightbulb,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"

interface Tool {
  icon: LucideIcon
  title: string
  tagline: string
  paragraphs: string[]
  usefulFor: string
  href: string
  cta: string
}

const tools: Tool[] = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    tagline: "Write a clear title for your web page.",
    paragraphs: [
      "A page title tells people what your page is about. It may appear as the main link in Google search results.",
      "Add your main keyword and a few page details. Use the title ideas to find words that fit your page.",
    ],
    usefulFor: "Service pages, product pages, and blog posts.",
    href: "/meta-title-generator",
    cta: "Create a Meta Title",
  },
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    tagline: "Write a short summary of your page.",
    paragraphs: [
      "A meta description helps people understand what they may find when they visit. Google may show this text below your page title.",
      "Add your page details to get description ideas. Choose one that gives a clear and honest summary.",
    ],
    usefulFor: "Explaining your page before someone clicks.",
    href: "/meta-description-generator",
    cta: "Create a Meta Description",
  },
  {
    icon: ListTree,
    title: "Blog Outline Generator",
    tagline: "Plan your blog post before you write.",
    paragraphs: [
      "Enter your topic and main keyword. Get an outline with headings and smaller sections to help organise your ideas.",
      "Use it as a starting point. Add your own examples, answers, and useful tips.",
    ],
    usefulFor: "How-to guides, helpful articles, and business blogs.",
    href: "/blog-outline-generator",
    cta: "Plan a Blog Post",
  },
  {
    icon: Link2,
    title: "UTM Builder",
    tagline: "Create a link that helps you track a campaign.",
    paragraphs: [
      "A UTM link is a normal web link with extra labels. These labels can help your website reports show where visitors came from.",
      "Add your page URL, source, and campaign name. Copy the link and use it in your email, advert, or social post.",
    ],
    usefulFor: "Email campaigns, social posts, and shared marketing links.",
    href: "/utm-builder",
    cta: "Build a Campaign Link",
  },
]

const comparisonRows = [
  { need: "A title for your web page", tool: "Meta Title Generator" },
  { need: "A short summary of your page", tool: "Meta Description Generator" },
  { need: "A plan for a blog post", tool: "Blog Outline Generator" },
  { need: "A link to track a campaign", tool: "UTM Builder" },
]

const howToSteps = [
  {
    title: "1. Choose Your Task",
    body: "Pick the tool that matches your job. For example, choose the Blog Outline Generator if you need help planning an article.",
  },
  {
    title: "2. Add Clear Details",
    body: "Tell the tool what your page or campaign is about. Use a specific topic. “Carpet cleaning in Glasgow” gives more detail than “cleaning.”",
  },
  {
    title: "3. Check the Result",
    body: "Read the result before you use it. Check names, facts, spelling, and any promises about your business.",
  },
  {
    title: "4. Make It Your Own",
    body: "Change words that do not sound like you. Add details from your own work and experience. For a campaign link, open it and check that it leads to the right page.",
  },
]

const audiences = [
  { label: "Business owners", body: "working on their own websites." },
  { label: "Bloggers", body: "planning helpful articles." },
  { label: "Freelancers", body: "preparing content for clients." },
  { label: "Marketing teams", body: "writing page details and sharing campaigns." },
  { label: "Beginners", body: "learning how website content works." },
]

const faqs = [
  {
    question: "What are SEO tools?",
    answer:
      "SEO tools help you work on parts of your website that matter for search. These tools help with page titles, descriptions, and content planning.",
  },
  {
    question: "Are Linkedo's tools free?",
    answer: "The tools listed on this page are offered as free tools. Choose a tool to view its options and instructions.",
  },
  {
    question: "What is a keyword?",
    answer:
      "A keyword is a word or phrase someone types into a search engine. “Car recovery Sheffield” is one example. Choose words that match your page and what your readers need.",
  },
  {
    question: "Can I use these tools for client work?",
    answer:
      "Yes. You can use them to prepare ideas for client websites and campaigns. Check each result against the client's real services and page content.",
  },
  {
    question: "Will these tools help my website rank first on Google?",
    answer:
      "No tool can promise the first position. These tools can help you prepare clearer page content, but search results depend on many things.",
  },
  {
    question: "Should I copy AI text without checking it?",
    answer: "No. Read it first. Check the facts and change anything that does not fit your business.",
  },
  {
    question: "Does the Blog Outline Generator write a full article?",
    answer: "It helps you plan an article. You still need to write the sections and add your own examples and knowledge.",
  },
  {
    question: "Does the UTM Builder track visitors by itself?",
    answer: "No. It adds labels to a link. You need a working analytics setup, such as Google Analytics, to read campaign data.",
  },
  {
    question: "Should I add UTM labels to links inside my website?",
    answer:
      "Use normal links between your own pages. Use campaign links for links you share outside your website, such as emails and social posts.",
  },
  {
    question: "What if a tool gives the wrong result?",
    answer:
      "Check your input and try again with clearer details. If something still looks wrong, contact Linkedo and explain the problem.",
  },
]

const freeToolsCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free SEO and Marketing Tools",
  url: "https://linkedo.co.uk/free-ai-tools-online",
  description:
    "Use Linkedo's free SEO and marketing tools to write page titles, create descriptions, plan blog posts, and build campaign links. Choose a tool to get started.",
  hasPart: tools.map((tool) => ({
    "@type": "WebApplication",
    name: tool.title,
    url: `https://linkedo.co.uk${tool.href}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
  })),
  provider: { "@id": "https://linkedo.co.uk/#organization" },
}

const freeToolsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Free SEO and Marketing Tools", item: "https://linkedo.co.uk/free-ai-tools-online" },
  ],
}

export default function FreeAIToolsPage() {
  return (
    <main>
      <SchemaMarkup schema={freeToolsCollectionSchema} />
      <SchemaMarkup schema={freeToolsBreadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-60" />

        <MainShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Free Tools
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Free SEO and <span className="text-gradient-primary">Marketing Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4 text-pretty">
                Make small website tasks easier with Linkedo's free SEO and marketing tools. Write page titles,
                create short page descriptions, plan blog posts, and build links for your campaigns.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Choose a tool below. Add your details, check the result, and make it your own.
              </p>
              <Link href="#explore-tools">
                <AnimatedButton size="lg">
                  <span>Explore the Tools</span>
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
            </div>

            <motion.figure
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="m-0"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/50">
                <Image
                  src="/linkedo-free-seo-marketing-tools-hero.webp"
                  alt="Marketing professional using SEO tools to write page titles, plan blog posts, and build campaign links."
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.figure>
          </div>
        </MainShell>
      </section>

      {/* Explore Tools */}
      <Section
        id="explore-tools"
        eyebrow="Free Tools"
        title="Explore Our Free Online Tools"
        description="Each tool helps with a different job. Start with the one you need today."
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{tool.title}</h3>
                <p className="text-sm font-medium text-primary mb-3">{tool.tagline}</p>
                <div className="space-y-2 mb-4 flex-grow">
                  {tool.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Useful for:</span> {tool.usefulFor}
                </p>
                <Link
                  href={tool.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {tool.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section eyebrow="Quick Guide" title="Not Sure Which Tool to Choose?" gradient>
        <div className="max-w-2xl mx-auto overflow-x-auto rounded-xl border border-border/50">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-card/50">
                <th className="p-3 sm:p-4 font-semibold text-foreground border-b border-border/50">What you need</th>
                <th className="p-3 sm:p-4 font-semibold text-foreground border-b border-border/50">Tool to use</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.tool} className="border-b border-border/30 last:border-0">
                  <td className="p-3 sm:p-4 text-muted-foreground">{row.need}</td>
                  <td className="p-3 sm:p-4 text-foreground font-medium">{row.tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* How to Use */}
      <Section eyebrow="Guide" title="How to Use These Tools">
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {howToSteps.map((step) => (
            <div key={step.title} className="p-5 rounded-xl bg-card/50 border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Plan and Share a Blog Post */}
      <Section eyebrow="Workflow" title="A Simple Way to Plan and Share a Blog Post" gradient>
        <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Start with the{" "}
            <Link href="/blog-outline-generator" className="text-primary hover:underline">
              Blog Outline Generator
            </Link>{" "}
            to organise your topic.
          </p>
          <p>Write the article using your own knowledge. Include real examples and answers that help your readers.</p>
          <p>
            Next, try the{" "}
            <Link href="/meta-title-generator" className="text-primary hover:underline">
              Meta Title Generator
            </Link>{" "}
            and{" "}
            <Link href="/meta-description-generator" className="text-primary hover:underline">
              Meta Description Generator
            </Link>{" "}
            to describe the finished page.
          </p>
          <p>
            When you share the article in an email or social campaign, use the{" "}
            <Link href="/utm-builder" className="text-primary hover:underline">
              UTM Builder
            </Link>{" "}
            to create a tracking link.
          </p>
        </div>
      </Section>

      {/* Who Are These Tools For */}
      <Section eyebrow="Audience" title="Who Are These Tools For?">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-6">These free online tools can help:</p>
          <div className="space-y-3 mb-6">
            {audiences.map((a) => (
              <div key={a.label} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{a.label}</span> {a.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            You can start with one small task. You do not need to change your whole website at once.
          </p>
        </div>
      </Section>

      {/* About Linkedo and These Tools */}
      <Section eyebrow="About" title="About Linkedo and These Tools">
        <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed mb-12">
          <p>
            Linkedo offers{" "}
            <Link href="/seo" className="text-primary hover:underline">
              SEO services
            </Link>
            ,{" "}
            <Link href="/web-development" className="text-primary hover:underline">
              web development
            </Link>
            , and{" "}
            <Link href="/google-ads" className="text-primary hover:underline">
              Google Ads management
            </Link>
            .
          </p>
          <p>This tools page brings together help for common content and campaign tasks.</p>
          <p>
            Learn more{" "}
            <Link href="/about" className="text-primary hover:underline">
              about Linkedo
            </Link>
            , or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact our team
            </Link>{" "}
            if you have a question or spot a problem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
                Use AI Results as a Starting Point
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                AI can help you find words and organise ideas. It can also make mistakes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Before you publish, check that the text matches your page. Add your own knowledge and remove any
                claims you cannot prove.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Do not enter passwords, payment details, or private client information.
              </p>
            </div>
          </div>

          <figure className="m-0">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/50">
              <Image
                src="/linkedo-seo-content-planning-tools.webp"
                alt="Two people reviewing a blog outline and SEO content ideas on a laptop."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent shrink-0" />
            Know What Each Tool Can Do
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            These tools help with specific tasks. They do not check every part of your website or promise a place in
            Google search results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A useful website also needs clear content, working pages, and a good experience for visitors.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For help with the wider picture, explore our{" "}
            <Link href="/seo" className="text-primary hover:underline">
              SEO services
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-cyan-400/5 border border-primary/20 text-center">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help With Your Website?</h2>
            <p className="text-muted-foreground mb-2 max-w-xl mx-auto">Start with a free tool for your next small task.</p>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If you need help with website content, SEO, or campaign tracking, tell us what you want to improve.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                <span>Talk to Linkedo</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
