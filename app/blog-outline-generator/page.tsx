"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ListTree, FileText, FileSearch, ArrowRight, Lightbulb, Check, Sparkles, Trash2 } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { BlogOutlineResult } from "@/components/ui/blog-outline-result"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import type { GeneratedOutline, OutlineFormState, RegenerateTarget } from "@/lib/blog-outline-generator/types"
import {
  generateFullOutline,
  regenerateFaqs,
  regenerateH1,
  regenerateMetaDescription,
  regenerateMetaTitle,
} from "@/lib/blog-outline-generator/generator"

const searchIntentOptions = [
  { value: "auto", label: "Auto Detect" },
  { value: "informational", label: "Informational" },
  { value: "commercial", label: "Commercial" },
  { value: "transactional", label: "Transactional" },
  { value: "navigational", label: "Navigational" },
]

const contentTypeOptions = [
  { value: "how-to", label: "How-To Guide" },
  { value: "listicle", label: "Listicle" },
  { value: "comparison", label: "Comparison" },
  { value: "ultimate-guide", label: "Ultimate Guide" },
  { value: "case-study", label: "Case Study" },
  { value: "tutorial", label: "Tutorial" },
  { value: "beginner-guide", label: "Beginner Guide" },
]

const wordCountOptions = [
  { value: "800", label: "800 words" },
  { value: "1200", label: "1,200 words" },
  { value: "1500", label: "1,500 words" },
  { value: "2000", label: "2,000 words" },
  { value: "2500+", label: "2,500+ words" },
]

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "simple", label: "Simple" },
  { value: "friendly", label: "Friendly" },
  { value: "expert", label: "Expert" },
  { value: "conversational", label: "Conversational" },
]

const relatedTools = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Create click-worthy meta titles for your blog posts.",
    href: "/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    description: "Write compelling descriptions for search results.",
    href: "/meta-description-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
]

const bestPractices = [
  "Start with a compelling introduction that hooks readers",
  "Use H2 and H3 headings to organise content logically",
  "Include relevant keywords in your headings naturally",
  "Add actionable takeaways in each section",
  "End with a strong conclusion and call-to-action",
  "Add a short FAQ when readers have common follow-up questions",
]


const blogOutlineFaqData = [["What is a blog outline generator?","A blog outline generator turns a topic and keyword into a suggested structure for a post: a working title, the main sections (H2s), the points under each one (H3s) and notes on what to cover. You still write the post; the outline helps you decide what goes where before you start."],["How do I use the Linkedo blog outline generator?","Enter Blog Topic and Primary Keyword (both required), then add Secondary Keywords (optional). Choose Search Intent (optional) and Content Type, add Target Audience (optional), then select Desired Word Count and Tone. Click Generate Outline, read the result and edit it to fit what you know about the subject. The Tone selection is currently not used to change the generated output."],["What does the search intent option change?","It tells the generator what the reader is trying to do. Informational posts explain or teach, commercial posts help people compare options, transactional posts support someone ready to act, and navigational intent is for people looking for a specific brand or page. Auto Detect checks your topic and keywords. The selected intent appears in the SEO Overview and helps choose the suggested CTA; it does not change the outline headings."],["Which content types can I choose?","How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial and Beginner Guide. The selected type changes the suggested title and the outline structure, so choose the format that matches what people searching for your keyword expect to see."],["Is the outline ready to publish?","No. It is a plan, not an article. The generator does not research or verify facts, so check every heading, add your own experience, examples and sources, and remove anything that does not belong. Google's guidance asks for content written for people first, whichever tools you use to produce it."],["Does the word count option guarantee a length Google prefers?","No. The word count setting changes the suggested number of main outline sections. Google says it has no preferred word count, so write as much as the topic needs to answer the reader fully, and no more."],["Is the blog outline generator free?","Yes, the tool is free to use on this page. You do not need to sign in, and the code does not set a usage limit."],["Can Linkedo write the blog posts for me?","Yes. If you'd rather hand over the writing, our team can plan and write blog content as part of our SEO services. Book a strategy call to talk through your topics and goals."]]
const blogOutlineFaqs = blogOutlineFaqData.map((item, index) => ({
  question: item[0],
  answer: index === 7 ? <>Yes. If you'd rather hand over the writing, our team can plan and write blog content as part of our <Link href="/seo" className="text-primary underline underline-offset-4">SEO services</Link>. <Link href="/contact" className="text-primary underline underline-offset-4">Book a strategy call</Link> to talk through your topics and goals.</> : item[1],
}))
const blogOutlineFaqSchema = blogOutlineFaqData.map(([question, answer]) => ({
  "@type": "Question", name: question,
  acceptedAnswer: { "@type": "Answer", text: answer },
}))
const blogOutlineWebApplicationSchema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "@id": "https://linkedo.co.uk/blog-outline-generator#app",
  name: "Free Blog Outline Generator", url: "https://linkedo.co.uk/blog-outline-generator",
  description: "Free blog outline generator: enter a topic, keyword, search intent and content type to get a structured H2/H3 outline you can edit and write from.",
  applicationCategory: "BusinessApplication", operatingSystem: "Any", isAccessibleForFree: true,
  featureList: [
    "Blog Topic and Primary Keyword (required), with optional Secondary Keywords",
    "Search Intent (optional): Auto Detect, Informational, Commercial, Transactional or Navigational",
    "Content Type: How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial or Beginner Guide",
    "Optional Target Audience and Desired Word Count choices from 800 to 2,500+ words",
    "Suggested H1, URL slug, introduction guidance and structured H2/H3/H4 outline with section guidance",
    "Suggested reader questions, FAQ answers, internal link ideas, meta title, meta description, CTA and content enhancement ideas",
    "Copy controls for the H1, URL slug, complete outline, meta title and meta description"
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  provider: { "@id": "https://linkedo.co.uk/#organization" }
}
const blogOutlineBreadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Free AI Tools", item: "https://linkedo.co.uk/free-ai-tools-online" },
    { "@type": "ListItem", position: 3, name: "Blog Outline Generator", item: "https://linkedo.co.uk/blog-outline-generator" }
  ]
}

const DEFAULT_FORM: OutlineFormState = {
  topic: "",
  primaryKeyword: "",
  secondaryKeywords: "",
  searchIntent: "auto",
  contentType: "how-to",
  targetAudience: "",
  wordCount: "1200",
  tone: "professional",
}

interface SeedState {
  full: number
  h1: number
  metaTitle: number
  metaDescription: number
  faqs: number
}

const DEFAULT_SEEDS: SeedState = { full: 0, h1: 0, metaTitle: 0, metaDescription: 0, faqs: 0 }

export default function BlogOutlineGeneratorPage() {
  const [form, setForm] = useState<OutlineFormState>(DEFAULT_FORM)
  const [outline, setOutline] = useState<GeneratedOutline | null>(null)
  const [seeds, setSeeds] = useState<SeedState>(DEFAULT_SEEDS)
  const [isGenerating, setIsGenerating] = useState(false)
  const [regeneratingTarget, setRegeneratingTarget] = useState<RegenerateTarget | null>(null)
  const [error, setError] = useState<string | null>(null)

  const updateField = <K extends keyof OutlineFormState>(key: K, value: OutlineFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = (): boolean => {
    if (!form.topic.trim() || !form.primaryKeyword.trim()) {
      setError("Please enter both a blog topic and a primary keyword to generate an outline.")
      return false
    }
    setError(null)
    return true
  }

  const handleGenerate = async () => {
    if (!validate()) return
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 650))
    const result = generateFullOutline(form, 0)
    setSeeds(DEFAULT_SEEDS)
    setOutline(result)
    setIsGenerating(false)
  }

  const handleRegenerate = async (target: RegenerateTarget) => {
    if (!outline || !validate()) return
    setRegeneratingTarget(target)
    await new Promise((resolve) => setTimeout(resolve, 400))

    const nextSeeds: SeedState = { ...seeds }
    let result: GeneratedOutline

    switch (target) {
      case "full": {
        const n = seeds.full + 1
        nextSeeds.full = n
        nextSeeds.h1 = n
        nextSeeds.metaTitle = n
        nextSeeds.metaDescription = n
        nextSeeds.faqs = n
        result = generateFullOutline(form, n)
        break
      }
      case "h1": {
        nextSeeds.h1 = seeds.h1 + 1
        result = regenerateH1(form, outline, nextSeeds.h1)
        break
      }
      case "metaTitle": {
        nextSeeds.metaTitle = seeds.metaTitle + 1
        result = regenerateMetaTitle(form, outline, nextSeeds.metaTitle)
        break
      }
      case "metaDescription": {
        nextSeeds.metaDescription = seeds.metaDescription + 1
        result = regenerateMetaDescription(form, outline, nextSeeds.metaDescription)
        break
      }
      case "faqs": {
        nextSeeds.faqs = seeds.faqs + 1
        result = regenerateFaqs(form, outline, nextSeeds.faqs)
        break
      }
    }

    setSeeds(nextSeeds)
    setOutline(result)
    setRegeneratingTarget(null)
  }

  const handleClear = () => {
    setForm(DEFAULT_FORM)
    setOutline(null)
    setSeeds(DEFAULT_SEEDS)
    setError(null)
  }

  return (
    <main>
      <SchemaMarkup schema={blogOutlineWebApplicationSchema} />
      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "FAQPage", "@id": "https://linkedo.co.uk/blog-outline-generator#faq", mainEntity: blogOutlineFaqSchema }} />
      <SchemaMarkup schema={blogOutlineBreadcrumbSchema} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-40" />

        <MainShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                  <ListTree className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Free Blog Outline <span className="text-gradient-primary">Generator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Enter a topic and keyword, choose the search intent and content type, and set your audience and desired length. The generator creates a suggested structure with headings and section guidance to help you plan your post.
              </p>
            </div>

            <motion.figure
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="m-0"
            >
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border/50">
                <Image
                  src="/blog-outline-generator-interface-preview.webp"
                  alt="Laptop screen showing the Linkedo Blog Outline Generator creating an SEO-structured blog outline with H1, H2 and H3 headings"
                  title="Blog Outline Generator — SEO content outline example"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Plan the structure of your post before you write a word.</span>{" "}
                Enter a topic and keyword, choose the search intent, content type, audience, length and tone, and get an outline with clear headings and subheadings to write from.
              </figcaption>
            </motion.figure>
          </div>
        </MainShell>
      </section>

      {/* Tool Panel */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden bg-card/60 backdrop-blur-xl"
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40" />
            <div className="absolute inset-[1px] rounded-xl bg-card" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* Input Side */}
            <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Input</h3>
              </div>

              <div className="space-y-5">
                <FormInput
                  label="Blog Topic"
                  placeholder="e.g., How to Improve Website SEO"
                  value={form.topic}
                  onChange={(e) => updateField("topic", e.target.value)}
                />
                <FormInput
                  label="Primary Keyword"
                  placeholder="e.g., improve website SEO"
                  value={form.primaryKeyword}
                  onChange={(e) => updateField("primaryKeyword", e.target.value)}
                />
                <FormInput
                  label="Secondary Keywords (optional)"
                  placeholder="e.g., SEO audit, on-page SEO, backlinks"
                  value={form.secondaryKeywords}
                  onChange={(e) => updateField("secondaryKeywords", e.target.value)}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="Search Intent (optional)"
                    options={searchIntentOptions}
                    value={form.searchIntent}
                    onChange={(e) => updateField("searchIntent", e.target.value as OutlineFormState["searchIntent"])}
                  />
                  <FormSelect
                    label="Content Type"
                    options={contentTypeOptions}
                    value={form.contentType}
                    onChange={(e) => updateField("contentType", e.target.value as OutlineFormState["contentType"])}
                  />
                </div>

                <FormInput
                  label="Target Audience (optional)"
                  placeholder="e.g., small business owners, SEO beginners"
                  value={form.targetAudience}
                  onChange={(e) => updateField("targetAudience", e.target.value)}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="Desired Word Count"
                    options={wordCountOptions}
                    value={form.wordCount}
                    onChange={(e) => updateField("wordCount", e.target.value as OutlineFormState["wordCount"])}
                  />
                  <FormSelect
                    label="Tone"
                    options={toneOptions}
                    value={form.tone}
                    onChange={(e) => updateField("tone", e.target.value as OutlineFormState["tone"])}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <AnimatedButton
                  onClick={handleGenerate}
                  loading={isGenerating}
                  disabled={isGenerating}
                  className="w-full mt-2"
                >
                  {isGenerating ? "Building your SEO-focused outline..." : "Generate Outline"}
                </AnimatedButton>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-6 lg:p-8 bg-surface/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Generated Results</h3>
                {outline && (
                  <button
                    onClick={handleClear}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    title="Clear"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {outline ? (
                <BlogOutlineResult outline={outline} onRegenerate={handleRegenerate} regeneratingTarget={regeneratingTarget} />
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground">Your generated outline will appear here</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Structure Great Blog Posts"
        description="Use these practical checks to plan a clear, useful post for your readers."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-muted-foreground">{practice}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-card/50 border border-border/50 overflow-hidden">
            <figure className="m-0">
              <div className="relative aspect-video">
                <Image
                  src="/blog-outline-generator-workspace.webp"
                  alt="Content writer using the Linkedo Blog Outline Generator on a laptop beside a notebook with a handwritten blog planning checklist"
                  title="Plan and structure blog content with the Blog Outline Generator"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-6 pt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">From blank page to structured outline.</span> Turn a
                topic and target keywords into a clear, SEO-ready blog structure before you start writing.
              </figcaption>
            </figure>
            <div className="p-6 pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Pro Tip</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Use your generated outline as a starting point, then customise it based on your own expertise and audience. Add first-hand experience, examples and sources so the post offers something readers cannot get elsewhere.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How to use the generator */}
      <Section eyebrow="Guide" title="How to Use the Blog Outline Generator">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            <><strong>Add your topic and primary keyword.</strong> Use the phrase a reader would actually type, such as “how to choose an accountant for a small business”. Add secondary keywords only if they belong in the same post.</>,
            <><strong>Choose the search intent.</strong> Leave it on Auto Detect, or pick Informational, Commercial, Transactional or Navigational if you already know what the reader wants.</>,
            <><strong>Pick a content type.</strong> Choose How-To Guide, Listicle, Comparison, Ultimate Guide, Case Study, Tutorial or Beginner Guide.</>,
            <><strong>Set the audience and length.</strong> Add a target audience if it helps, then choose a desired word count from 800 to 2,500+ words. The Tone field is also shown, but it does not currently change the generated result.</>,
            <><strong>Generate, then edit.</strong> Click Generate Outline, then remove, merge or reorder sections until the plan matches what you know about the topic.</>,
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-sm font-semibold text-primary">{index + 1}</div>
              <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Planning" title="Choosing the Right Search Intent and Content Type">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>The same keyword can need a different post depending on why someone searches for it. Before you generate an outline, search the keyword yourself and look at the pages that appear.</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Informational</strong> (“what is…” or “how to…”): the reader wants to learn. A How-To Guide, Tutorial, Beginner Guide or Ultimate Guide may fit.</li>
            <li><strong>Commercial</strong> (“best…”, “… vs …” or “… reviews”): the reader is comparing options. A Comparison or Listicle may be a better fit.</li>
            <li><strong>Transactional</strong> (“hire…”, “buy…” or “… near me”): the reader is ready to act. A service or product page may serve them better than a blog post.</li>
            <li><strong>Navigational</strong> (a brand or product name): the reader wants a specific site or page. Only write for this intent if the brand is yours.</li>
          </ul>
          <p>A Case Study suits a topic when you have a real project and permission to share its details. The selected intent appears in the SEO Overview and helps choose the suggested CTA; it does not change the outline headings.</p>
        </div>
      </Section>

      <Section eyebrow="A useful check" title="What This Generator Won't Do">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>An outline is a plan, not a finished article. This tool has clear limits:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>It does not check facts or find sources for you. Add your own evidence and cite it.</li>
            <li>It cannot add your experience, opinions or examples. Those are what make a post useful and distinctive.</li>
            <li>It does not know the other pages on your website, so choose and add internal links yourself.</li>
            <li>It does not guarantee rankings. The word count setting changes the suggested number of main sections; it is not a target Google requires. Google says it has <Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer">no preferred word count</Link>.</li>
            <li>The Tone selector is present in the form, but the current generator does not use it to shape the output.</li>
            <li>Your entries are processed by the page's local generator. They are not sent to a third-party AI service or saved to a server by this tool.</li>
          </ul>
          <p>Google's guidance on <Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer">creating helpful, people-first content</Link> and <Link href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer">using generative AI content</Link> applies whichever tools you use: write for readers first and make sure the finished post adds value.</p>
        </div>
      </Section>

      <Section eyebrow="Next steps" title="From Outline to Published Post">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            <li>Answer the main question early, in plain language, then use the sections to go deeper.</li>
            <li>Write each section for the reader, not for the keyword. Use the keyword naturally where it fits.</li>
            <li>Link to related pages on your own site where they genuinely help the reader.</li>
            <li>Write a clear title tag and meta description with our <Link href="/meta-title-generator" className="text-primary underline underline-offset-4">Meta Title Generator</Link> and <Link href="/meta-description-generator" className="text-primary underline underline-offset-4">Meta Description Generator</Link>.</li>
            <li>Read it through once more and cut anything that does not help the reader.</li>
          </ol>
          <p>If you would rather someone else handled planning and writing, see our <Link href="/seo" className="text-primary underline underline-offset-4">SEO services</Link> or browse more <Link href="/free-ai-tools-online" className="text-primary underline underline-offset-4">free SEO tools</Link>.</p>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Creating" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/free-ai-tools-online"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            View All Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* FAQs */}
      <Section eyebrow="FAQ" title="Blog Outline Generator FAQs">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={blogOutlineFaqs} forceMount />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Professional Content?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Prefer to hand over the writing? Our team can plan and write blog content as part of our SEO services.
          </p>
          <Link href="/seo">
            <AnimatedButton size="lg">
              <span>Explore Content Services</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </main>
  )
}
