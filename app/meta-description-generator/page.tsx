"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FileSearch, FileText, ListTree, ArrowRight, Lightbulb, Check, Sparkles, Trash2, Copy } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FormTextarea } from "@/components/ui/form-textarea"
import { MetaDescriptionResult } from "@/components/ui/meta-description-result"
import type { GeneratedDescriptionSet, MetaDescriptionFormState, OptionId } from "@/lib/meta-description-generator/types"
import { generateDescriptionSet, regenerateOne } from "@/lib/meta-description-generator/generator"

const pageTypeOptions = [
  { value: "home", label: "Home Page" },
  { value: "service", label: "Service Page" },
  { value: "location", label: "Location Page" },
  { value: "product", label: "Product Page" },
  { value: "category", label: "Category Page" },
  { value: "blog", label: "Blog Post" },
  { value: "landing", label: "Landing Page" },
  { value: "about", label: "About Page" },
  { value: "other", label: "Other" },
]

const searchIntentOptions = [
  { value: "auto", label: "Auto Detect" },
  { value: "informational", label: "Informational" },
  { value: "commercial", label: "Commercial" },
  { value: "transactional", label: "Transactional" },
  { value: "local", label: "Local" },
  { value: "navigational", label: "Navigational" },
]

const ctaOptions = [
  { value: "auto", label: "Auto" },
  { value: "quote", label: "Get a Quote" },
  { value: "call", label: "Call Now" },
  { value: "contact", label: "Contact Us" },
  { value: "book", label: "Book Now" },
  { value: "learn-more", label: "Learn More" },
  { value: "shop", label: "Shop Now" },
  { value: "get-started", label: "Get Started" },
  { value: "none", label: "No CTA" },
]

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "persuasive", label: "Persuasive" },
  { value: "simple", label: "Simple" },
  { value: "premium", label: "Premium" },
  { value: "direct", label: "Direct" },
  { value: "natural", label: "Natural" },
]

const exampleDescriptions = [
  "SEO services in London focused on technical audits, keyword research, and on-page optimisation. Get a quote to see what's included.",
  "Need SEO services in London? We handle the technical work so your site is easier to find. Get a quote today.",
  "SEO services in London: technical audits, keyword research, and content optimisation. Get a quote to get started.",
]

const relatedTools = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Create click-worthy meta titles for better rankings.",
    href: "/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    icon: ListTree,
    title: "Blog Outline Generator",
    description: "Structure your content for maximum engagement.",
    href: "/blog-outline-generator",
    categories: [
      { label: "Content", variant: "default" as const },
      { label: "SEO", variant: "primary" as const },
    ],
  },
]

const bestPractices = [
  "Keep descriptions between 140-160 characters",
  "Include your primary keyword naturally",
  "Add a call-to-action that matches search intent",
  "Only mention benefits you can actually back up",
  "Match the search intent of your target audience",
  "Make it specific to the page, not generic",
]

const DEFAULT_FORM: MetaDescriptionFormState = {
  primaryKeyword: "",
  secondaryKeywords: "",
  pageType: "service",
  pageSummary: "",
  searchIntent: "auto",
  location: "",
  targetAudience: "",
  benefits: "",
  ctaPreference: "auto",
  tone: "professional",
}

interface SeedState {
  all: number
  seo: number
  ctr: number
  balanced: number
}

const DEFAULT_SEEDS: SeedState = { all: 0, seo: 0, ctr: 0, balanced: 0 }

export default function MetaDescriptionGeneratorPage() {
  const [form, setForm] = useState<MetaDescriptionFormState>(DEFAULT_FORM)
  const [descriptions, setDescriptions] = useState<GeneratedDescriptionSet | null>(null)
  const [seeds, setSeeds] = useState<SeedState>(DEFAULT_SEEDS)
  const [isGenerating, setIsGenerating] = useState(false)
  const [regeneratingId, setRegeneratingId] = useState<OptionId | "all" | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const updateField = <K extends keyof MetaDescriptionFormState>(key: K, value: MetaDescriptionFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = (): boolean => {
    if (!form.primaryKeyword.trim()) {
      setError("Please enter a primary keyword to generate meta descriptions.")
      return false
    }
    setError(null)
    return true
  }

  const handleGenerate = async () => {
    if (!validate()) return
    setIsGenerating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 650))
      const result = generateDescriptionSet(form, 0)
      setSeeds(DEFAULT_SEEDS)
      setDescriptions(result)
    } catch {
      setError("Something went wrong generating descriptions. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRegenerateAll = async () => {
    if (!descriptions || !validate()) return
    setRegeneratingId("all")
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const n = seeds.all + 1
      const result = generateDescriptionSet(form, n)
      setSeeds({ all: n, seo: n, ctr: n, balanced: n })
      setDescriptions(result)
    } catch {
      setError("Something went wrong regenerating descriptions. Please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleRegenerateOne = async (id: OptionId) => {
    if (!descriptions || !validate()) return
    setRegeneratingId(id)
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const nextSeed = seeds[id] + 1
      const updated = regenerateOne(form, id, nextSeed)
      setSeeds((prev) => ({ ...prev, [id]: nextSeed }))
      setDescriptions((prev) => (prev ? { ...prev, [id]: updated } : prev))
    } catch {
      setError("Something went wrong regenerating this description. Please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleCopyAll = async () => {
    if (!descriptions) return
    const text = [descriptions.seo, descriptions.ctr, descriptions.balanced]
      .map((d) => `${d.label} (${d.length} characters): ${d.text}`)
      .join("\n\n")
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAll(true)
      setTimeout(() => setCopiedAll(false), 2000)
    } catch {
      // clipboard unavailable — ignore silently
    }
  }

  const handleClear = () => {
    setForm(DEFAULT_FORM)
    setDescriptions(null)
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
                  <FileSearch className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Free Meta Description <span className="text-gradient-primary">Generator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Generate three SEO-focused, CTR-focused, and balanced meta descriptions tailored to your page type
                and search intent — built from what you actually tell us, never invented claims.
              </p>
            </div>

            <motion.figure
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="m-0"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/50">
                <Image
                  src="/meta-description-generator-preview.webp"
                  alt="Laptop screen showing the Linkedo Meta Description Generator with a page topic entered and four generated meta descriptions with character counts"
                  title="Meta Description Generator — SEO description example"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Create SEO-friendly descriptions in seconds.</span>{" "}
                Enter a page topic and summary to get descriptions with live character counts and length status.
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
                <h2 className="text-lg font-semibold text-foreground">Input</h2>
              </div>

              <div className="space-y-5">
                <FormInput
                  label="Primary Keyword"
                  placeholder="e.g., SEO Services London"
                  value={form.primaryKeyword}
                  onChange={(e) => updateField("primaryKeyword", e.target.value)}
                />
                <FormInput
                  label="Secondary Keywords (optional)"
                  placeholder="e.g., SEO agency London, local SEO London"
                  value={form.secondaryKeywords}
                  onChange={(e) => updateField("secondaryKeywords", e.target.value)}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="Page Type"
                    options={pageTypeOptions}
                    value={form.pageType}
                    onChange={(e) => updateField("pageType", e.target.value as MetaDescriptionFormState["pageType"])}
                  />
                  <FormSelect
                    label="Search Intent"
                    options={searchIntentOptions}
                    value={form.searchIntent}
                    onChange={(e) => updateField("searchIntent", e.target.value as MetaDescriptionFormState["searchIntent"])}
                  />
                </div>

                <FormTextarea
                  label="Page Content Summary (optional)"
                  placeholder="Briefly describe what the page is about..."
                  value={form.pageSummary}
                  onChange={(e) => updateField("pageSummary", e.target.value)}
                  rows={2}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput
                    label="Target Location (optional)"
                    placeholder="e.g., London, UK"
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                  />
                  <FormInput
                    label="Target Audience (optional)"
                    placeholder="e.g., small business owners"
                    value={form.targetAudience}
                    onChange={(e) => updateField("targetAudience", e.target.value)}
                  />
                </div>

                <FormTextarea
                  label="Key Benefits / USPs (optional)"
                  placeholder="e.g., Free SEO audit, No long-term contracts, UK-based support"
                  value={form.benefits}
                  onChange={(e) => updateField("benefits", e.target.value)}
                  rows={2}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="CTA Preference"
                    options={ctaOptions}
                    value={form.ctaPreference}
                    onChange={(e) => updateField("ctaPreference", e.target.value as MetaDescriptionFormState["ctaPreference"])}
                  />
                  <FormSelect
                    label="Tone"
                    options={toneOptions}
                    value={form.tone}
                    onChange={(e) => updateField("tone", e.target.value as MetaDescriptionFormState["tone"])}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <AnimatedButton
                  onClick={handleGenerate}
                  loading={isGenerating}
                  disabled={isGenerating}
                  className="w-full mt-2"
                >
                  {isGenerating ? "Creating SEO-friendly meta descriptions..." : "Generate Descriptions"}
                </AnimatedButton>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-6 lg:p-8 bg-surface/50">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h2 className="text-lg font-semibold text-foreground">Generated Results</h2>
                {descriptions && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyAll}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border border-border/50"
                      title="Copy All"
                    >
                      {copiedAll ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedAll ? "Copied" : "Copy All"}
                    </button>
                    <button
                      onClick={handleRegenerateAll}
                      disabled={regeneratingId !== null}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border border-border/50 disabled:opacity-50"
                      title="Regenerate All"
                    >
                      Regenerate All
                    </button>
                    <button
                      onClick={handleClear}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      title="Clear"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {descriptions ? (
                <MetaDescriptionResult
                  descriptions={descriptions}
                  onRegenerate={handleRegenerateOne}
                  regeneratingId={regeneratingId === "all" ? null : regeneratingId}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground">Your generated descriptions will appear here</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Write Great Meta Descriptions"
        description="Follow these guidelines to create descriptions that drive clicks."
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Example Descriptions</h3>
            </div>
            {exampleDescriptions.map((desc, index) => (
              <CodeBox key={index} label={`Example ${index + 1}`}>
                {desc}
              </CodeBox>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Optimizing" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need a Full SEO Strategy?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Meta descriptions are just the start. Get a comprehensive SEO audit and strategy from our experts.
          </p>
          <Link href="/seo">
            <AnimatedButton size="lg">
              <span>Explore SEO Services</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </main>
  )
}
