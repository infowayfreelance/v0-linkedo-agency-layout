"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, FileSearch, ListTree, ArrowRight, Lightbulb, Check, Sparkles, Trash2, Copy } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { MetaTitleResult } from "@/components/ui/meta-title-result"
import type { GeneratedTitleSet, MetaTitleFormState, OptionId } from "@/lib/meta-title-generator/types"
import { generateTitleSet, regenerateOne } from "@/lib/meta-title-generator/generator"

const pageTypeOptions = [
  { value: "home", label: "Home" },
  { value: "service", label: "Service" },
  { value: "location", label: "Location" },
  { value: "blog", label: "Blog" },
  { value: "product", label: "Product" },
  { value: "category", label: "Category" },
  { value: "landing", label: "Landing Page" },
]

const searchIntentOptions = [
  { value: "auto", label: "Auto Detect" },
  { value: "informational", label: "Informational" },
  { value: "commercial", label: "Commercial" },
  { value: "transactional", label: "Transactional" },
  { value: "local", label: "Local" },
]

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "bold", label: "Bold" },
  { value: "urgent", label: "Urgent" },
  { value: "informative", label: "Informative" },
]

const exampleTitles = [
  "SEO Services London | Linkedo",
  "SEO Services in London — Get a Quote | Linkedo",
  "London SEO Services: Clear Pricing, No Pressure | Linkedo",
]

const relatedTools = [
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    description: "Create compelling meta descriptions that boost CTR.",
    href: "/meta-description-generator",
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
  "Keep titles between 50-60 characters to avoid truncation",
  "Put your primary keyword near the beginning",
  "Add your brand name at the end when it fits",
  "Write for humans first — avoid keyword stuffing",
  "Make each title unique across your site",
  "Only mention claims, offers or ratings you can back up",
]

const DEFAULT_FORM: MetaTitleFormState = {
  primaryKeyword: "",
  secondaryKeyword: "",
  brand: "",
  tone: "professional",
  pageType: "service",
  searchIntent: "auto",
  location: "",
}

interface SeedState {
  all: number
  seo: number
  ctr: number
  balanced: number
}

const DEFAULT_SEEDS: SeedState = { all: 0, seo: 0, ctr: 0, balanced: 0 }

export default function MetaTitleGeneratorPage() {
  const [form, setForm] = useState<MetaTitleFormState>(DEFAULT_FORM)
  const [titles, setTitles] = useState<GeneratedTitleSet | null>(null)
  const [seeds, setSeeds] = useState<SeedState>(DEFAULT_SEEDS)
  const [isGenerating, setIsGenerating] = useState(false)
  const [regeneratingId, setRegeneratingId] = useState<OptionId | "all" | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const updateField = <K extends keyof MetaTitleFormState>(key: K, value: MetaTitleFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = (): boolean => {
    if (!form.primaryKeyword.trim()) {
      setError("Please enter a primary keyword to generate meta titles.")
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
      const result = generateTitleSet(form, 0)
      setSeeds(DEFAULT_SEEDS)
      setTitles(result)
    } catch {
      setError("Something went wrong generating titles. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRegenerateAll = async () => {
    if (!titles || !validate()) return
    setRegeneratingId("all")
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const n = seeds.all + 1
      const result = generateTitleSet(form, n)
      setSeeds({ all: n, seo: n, ctr: n, balanced: n })
      setTitles(result)
    } catch {
      setError("Something went wrong regenerating titles. Please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleRegenerateOne = async (id: OptionId) => {
    if (!titles || !validate()) return
    setRegeneratingId(id)
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const nextSeed = seeds[id] + 1
      const updated = regenerateOne(form, id, nextSeed)
      setSeeds((prev) => ({ ...prev, [id]: nextSeed }))
      setTitles((prev) => (prev ? { ...prev, [id]: updated } : prev))
    } catch {
      setError("Something went wrong regenerating this title. Please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleCopyAll = async () => {
    if (!titles) return
    const text = [titles.seo, titles.ctr, titles.balanced]
      .map((t) => `${t.label} (${t.length} characters): ${t.text}`)
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
    setTitles(null)
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free Meta Title <span className="text-gradient-primary">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate three SEO-focused, CTR-focused, and balanced meta titles tailored to your page type and search
              intent — built from what you actually tell us, never invented claims.
            </p>
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
                  label="Secondary Keyword (optional)"
                  placeholder="e.g., Local SEO Experts"
                  value={form.secondaryKeyword}
                  onChange={(e) => updateField("secondaryKeyword", e.target.value)}
                />
                <FormInput
                  label="Brand Name (optional)"
                  placeholder="e.g., Linkedo"
                  value={form.brand}
                  onChange={(e) => updateField("brand", e.target.value)}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormSelect
                    label="Page Type"
                    options={pageTypeOptions}
                    value={form.pageType}
                    onChange={(e) => updateField("pageType", e.target.value as MetaTitleFormState["pageType"])}
                  />
                  <FormSelect
                    label="Search Intent"
                    options={searchIntentOptions}
                    value={form.searchIntent}
                    onChange={(e) => updateField("searchIntent", e.target.value as MetaTitleFormState["searchIntent"])}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput
                    label="Target Location (optional)"
                    placeholder="e.g., London, UK"
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                  />
                  <FormSelect label="Tone" options={toneOptions} value={form.tone} onChange={(e) => updateField("tone", e.target.value as MetaTitleFormState["tone"])} />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <AnimatedButton
                  onClick={handleGenerate}
                  loading={isGenerating}
                  disabled={isGenerating}
                  className="w-full mt-2"
                >
                  {isGenerating ? "Creating SEO-friendly titles..." : "Generate Titles"}
                </AnimatedButton>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-6 lg:p-8 bg-surface/50">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h2 className="text-lg font-semibold text-foreground">Generated Results</h2>
                {titles && (
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

              {titles ? (
                <MetaTitleResult
                  titles={titles}
                  onRegenerate={handleRegenerateOne}
                  regeneratingId={regeneratingId === "all" ? null : regeneratingId}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground">Your generated titles will appear here</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Write Great Meta Titles"
        description="Follow these guidelines to create meta titles that rank and convert."
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
              <h3 className="font-semibold text-foreground">Example Titles</h3>
            </div>
            {exampleTitles.map((title, index) => (
              <CodeBox key={index} label={`Example ${index + 1}`}>
                {title}
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
            Meta titles are just the beginning. Get a comprehensive SEO audit and strategy from our experts.
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
