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
  "Use H2 and H3 headers to organize content logically",
  "Include relevant keywords in your headings naturally",
  "Add actionable takeaways in each section",
  "End with a strong conclusion and call-to-action",
  "Consider adding FAQs for featured snippet opportunities",
]

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
                Structure your blog posts with SEO-focused outlines built around your real topic, keyword, and search
                intent — not generic placeholders.
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
                <span className="font-medium text-foreground">Generate a structured outline in seconds.</span>{" "}
                Enter a topic and keywords to get a ready-to-use outline with clear headings, subheadings, and SEO
                guidance.
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
        description="Follow these guidelines to create content that ranks and engages."
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
                Use your generated outline as a starting point, then customize it based on your unique expertise and
                audience needs. Add personal anecdotes, case studies, and data points to make your content stand out
                from competitors.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Creating" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Professional Content?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let our content experts create high-quality blog posts that drive traffic and conversions.
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
