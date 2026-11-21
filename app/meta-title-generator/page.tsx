"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  FileText,
  FileSearch,
  ListTree,
  ArrowRight,
  Lightbulb,
  Check,
  Sparkles,
  Trash2,
  Copy,
  RotateCcw,
} from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FormTextarea } from "@/components/ui/form-textarea"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { MetaTitleResult } from "@/components/ui/meta-title-result"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import type { GeneratedTitleSet, MetaTitleFormState, OptionId } from "@/lib/meta-title-generator/types"
import { generateTitleSet, regenerateOne } from "@/lib/meta-title-generator/generator"

const pageTypeOptions = [
  { value: "home", label: "Homepage" },
  { value: "service", label: "Service Page" },
  { value: "location", label: "Location Page" },
  { value: "blog", label: "Blog Post" },
  { value: "product", label: "Product Page" },
  { value: "category", label: "Category Page" },
  { value: "landing", label: "Landing Page" },
]

const toneOptions = [
  { value: "clear", label: "Clear" },
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "persuasive", label: "Persuasive" },
]

const howToSteps = [
  "Enter your main keyword or page topic — the phrase you want this page to be found for.",
  "Write a short page summary describing what the page actually offers, in a sentence or two.",
  "Choose the page type, and optionally add a brand name, location and an existing title to improve.",
  "Select Generate Title Ideas to create five distinct title options based on what you entered.",
  "Compare the options, edit any title directly, check its length and preview, then copy the one you want to use.",
]

const writingTips = [
  {
    title: "Describe the Page Clearly",
    body: "Start from what the page actually contains. A clear, specific page summary gives this tool (and your visitors) something real to work with, instead of a vague, generic label.",
  },
  {
    title: "Use Your Main Keyword Naturally",
    body: "Include your main keyword once, ideally near the start of the title. Repeating it, or stuffing in extra variations, reads poorly to visitors and doesn't help with rankings.",
  },
  {
    title: "Keep It Concise",
    body: "Around 50–60 characters can be a useful starting point, but it is not a Google limit — Google displays titles based on rendered pixel width, which varies by character, so two titles with the same character count can display differently.",
  },
  {
    title: "Add Your Brand When Helpful",
    body: "Including your brand name can build recognition, but it isn't necessary on every page. Leave it out when space is tight or it doesn't add anything useful for the reader.",
  },
  {
    title: "Match Your Content",
    body: "Only mention prices, offers, dates or claims that the page supports. Avoid adding \"best\", \"top-rated\" or \"guaranteed\" without evidence.",
  },
  {
    title: "Give Each Page Its Own Title",
    body: "Every page should have a unique title that reflects its own content. Duplicate titles across similar pages make it harder for both visitors and search engines to tell them apart.",
  },
]

const exampleTitles = [
  { label: "Service Page", title: "SEO Services London | Linkedo" },
  { label: "Blog Post", title: "How to Write SEO Titles: A Simple Guide" },
  { label: "Product Page", title: "Waterproof Hiking Boots | Example Store" },
  { label: "Free Tool", title: "Free Meta Title Generator | Linkedo" },
]

const faqs = [
  { question: "How long should a meta title be?", answer: "Google doesn't set a character limit. Titles are cut off in search results based on pixel width, which depends on the characters and the device, so around 50–60 characters is a useful starting point rather than a rule. Put the most important words first so the title still makes sense if it's shortened." },
  { question: "Will Google use my exact title?", answer: "Not always. Google creates title links automatically and can use your title element, the main heading on the page, other prominent text or links pointing to the page. Clear, descriptive and unique titles that match the page are the ones most likely to be shown as written." },
  { question: "Should every title include my brand?", answer: "Not necessarily. Your brand is useful on the homepage and key service pages, usually at the start or end of the title, separated by a pipe, dash or colon. On long titles, or where the brand adds nothing for the reader, you can leave it out." },
  { question: "Can I improve an existing title?", answer: "Yes. Paste your current title into the Current Title field, add your main keyword and a short page summary, and the tool will suggest new versions you can compare, edit and copy." },
  { question: "Is a meta title the same as an H1?", answer: "No. The meta title sits in the page's HTML title tag and appears in search results and browser tabs, while the H1 is the main heading visitors see on the page. They can be similar, but they don't have to match word for word." },
  { question: "Will a new title guarantee better rankings?", answer: "No. A clearer title can help people understand your page and may encourage more clicks, but rankings depend on many other factors, including the quality of the content, how well it answers the search and the rest of your site's SEO." },
  { question: "Why is my title cut off in Google?", answer: "Google shortens titles that are too wide to display in full, so the end is replaced with an ellipsis. Keep the main keyword and the page's purpose near the start, remove repeated words, and check the preview in this tool before you publish." },
  { question: "Can I create titles for location pages?", answer: "Yes. Choose Location Page as the page type and add the town or city in the Location field. The tool uses it in the suggestions, so you can create a separate, unique title for each area you serve." },
  { question: "Should my main keyword be at the start of the title?", answer: "Near the start is usually best, because it is the part least likely to be cut off and the first thing people read. Use it once, in natural wording, rather than repeating it or adding several variations." },
  { question: "Do I need a meta description as well?", answer: <>It's worth writing one. Google may show your meta description as the snippet under your title when it describes the page well. You can create one with our free .<Link href="/meta-description-generator" className="text-primary underline underline-offset-4">Meta Description Generator</Link>.</> },
]

const metaTitleFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://linkedo.co.uk/meta-title-generator#faq",
  mainEntity: [
  {
    "@type": "Question",
    "name": "How long should a meta title be?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google doesn't set a character limit. Titles are cut off in search results based on pixel width, which depends on the characters and the device, so around 50–60 characters is a useful starting point rather than a rule. Put the most important words first so the title still makes sense if it's shortened."
    }
  },
  {
    "@type": "Question",
    "name": "Will Google use my exact title?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Not always. Google creates title links automatically and can use your title element, the main heading on the page, other prominent text or links pointing to the page. Clear, descriptive and unique titles that match the page are the ones most likely to be shown as written."
    }
  },
  {
    "@type": "Question",
    "name": "Should every title include my brand?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Not necessarily. Your brand is useful on the homepage and key service pages, usually at the start or end of the title, separated by a pipe, dash or colon. On long titles, or where the brand adds nothing for the reader, you can leave it out."
    }
  },
  {
    "@type": "Question",
    "name": "Can I improve an existing title?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Paste your current title into the Current Title field, add your main keyword and a short page summary, and the tool will suggest new versions you can compare, edit and copy."
    }
  },
  {
    "@type": "Question",
    "name": "Is a meta title the same as an H1?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. The meta title sits in the page's HTML title tag and appears in search results and browser tabs, while the H1 is the main heading visitors see on the page. They can be similar, but they don't have to match word for word."
    }
  },
  {
    "@type": "Question",
    "name": "Will a new title guarantee better rankings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. A clearer title can help people understand your page and may encourage more clicks, but rankings depend on many other factors, including the quality of the content, how well it answers the search and the rest of your site's SEO."
    }
  },
  {
    "@type": "Question",
    "name": "Why is my title cut off in Google?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google shortens titles that are too wide to display in full, so the end is replaced with an ellipsis. Keep the main keyword and the page's purpose near the start, remove repeated words, and check the preview in this tool before you publish."
    }
  },
  {
    "@type": "Question",
    "name": "Can I create titles for location pages?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Choose Location Page as the page type and add the town or city in the Location field. The tool uses it in the suggestions, so you can create a separate, unique title for each area you serve."
    }
  },
  {
    "@type": "Question",
    "name": "Should my main keyword be at the start of the title?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Near the start is usually best, because it is the part least likely to be cut off and the first thing people read. Use it once, in natural wording, rather than repeating it or adding several variations."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need a meta description as well?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It's worth writing one. Google may show your meta description as the snippet under your title when it describes the page well. You can create one with our free Meta Description Generator."
    }
  }
]
}

const relatedTools = [
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    description: "Create a matching meta description for this page.",
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

const metaTitleWebApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://linkedo.co.uk/meta-title-generator#app",
  name: "Free Meta Title Generator",
  url: "https://linkedo.co.uk/meta-title-generator",
  description: "Free meta title generator: add your keyword and a short page summary, get five editable SEO title ideas, then check length and preview before you copy.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  featureList: [
    "Five editable title ideas per request",
    "Live title length check",
    "Search result preview",
    "Page types: homepage, service, location, blog post, product, category and landing page",
    "Optional brand name, location, tone and current title"
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  provider: { "@id": "https://linkedo.co.uk/#organization" }
}

const metaTitleBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://linkedo.co.uk/free-ai-tools-online" },
    { "@type": "ListItem", position: 3, name: "Meta Title Generator", item: "https://linkedo.co.uk/meta-title-generator" }
  ]
}

const DEFAULT_FORM: MetaTitleFormState = {
  primaryKeyword: "",
  pageSummary: "",
  brand: "",
  location: "",
  tone: "clear",
  pageType: "service",
  currentTitle: "",
}

const KEYWORD_MAX = 80
const SUMMARY_MAX = 500
const CURRENT_TITLE_MAX = 160

type Seeds = Record<OptionId, number> & { all: number }

const DEFAULT_SEEDS: Seeds = { all: 0, keyword: 0, benefit: 0, question: 0, brand: 0, balanced: 0 }

function emptyValues(): Record<OptionId, string> {
  return { keyword: "", benefit: "", question: "", brand: "", balanced: "" }
}

export default function MetaTitleGeneratorPage() {
  const [form, setForm] = useState<MetaTitleFormState>(DEFAULT_FORM)
  const [titles, setTitles] = useState<GeneratedTitleSet | null>(null)
  const [values, setValues] = useState<Record<OptionId, string>>(emptyValues())
  const [seeds, setSeeds] = useState<Seeds>(DEFAULT_SEEDS)
  const [isGenerating, setIsGenerating] = useState(false)
  const [regeneratingId, setRegeneratingId] = useState<OptionId | "all" | null>(null)
  const [fieldErrors, setFieldErrors] = useState<{ primaryKeyword?: string; pageSummary?: string }>({})
  const [error, setError] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)
  const isSubmittingRef = useRef(false)

  const updateField = <K extends keyof MetaTitleFormState>(key: K, value: MetaTitleFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = (): boolean => {
    const errors: { primaryKeyword?: string; pageSummary?: string } = {}
    if (!form.primaryKeyword.trim()) {
      errors.primaryKeyword = "Please enter a main keyword or page topic."
    } else if (form.primaryKeyword.trim().length > KEYWORD_MAX) {
      errors.primaryKeyword = `Please keep the keyword under ${KEYWORD_MAX} characters.`
    }
    if (!form.pageSummary.trim()) {
      errors.pageSummary = "Please add a short page summary so titles match your content."
    } else if (form.pageSummary.trim().length > SUMMARY_MAX) {
      errors.pageSummary = `Please keep the page summary under ${SUMMARY_MAX} characters.`
    }
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) {
      setError("Please fix the highlighted fields below.")
      return false
    }
    setError(null)
    return true
  }

  const handleGenerate = async () => {
    if (isSubmittingRef.current) return
    if (!validate()) return
    isSubmittingRef.current = true
    setIsGenerating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 650))
      const result = generateTitleSet(form, 0)
      setSeeds(DEFAULT_SEEDS)
      setTitles(result)
      setValues(Object.fromEntries(result.map((t) => [t.id, t.text])) as Record<OptionId, string>)
      setError(null)
    } catch {
      setError("Something went wrong generating titles. Your previous results are still shown below — please try again.")
    } finally {
      setIsGenerating(false)
      isSubmittingRef.current = false
    }
  }

  const handleRegenerateAll = async () => {
    if (!titles || regeneratingId !== null) return
    if (!validate()) return
    setRegeneratingId("all")
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const n = seeds.all + 1
      const result = generateTitleSet(form, n)
      setSeeds({ all: n, keyword: n, benefit: n, question: n, brand: n, balanced: n })
      setTitles(result)
      setValues(Object.fromEntries(result.map((t) => [t.id, t.text])) as Record<OptionId, string>)
      setError(null)
    } catch {
      setError("Something went wrong regenerating titles. Your previous results are still shown below — please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleRegenerateOne = async (id: OptionId) => {
    if (!titles || regeneratingId !== null) return
    if (!validate()) return
    setRegeneratingId(id)
    try {
      await new Promise((resolve) => setTimeout(resolve, 400))
      const nextSeed = seeds[id] + 1
      const others = titles.filter((t) => t.id !== id).map((t) => values[t.id] ?? t.text)
      const updated = regenerateOne(form, id, nextSeed, others)
      setSeeds((prev) => ({ ...prev, [id]: nextSeed }))
      setTitles((prev) => (prev ? prev.map((t) => (t.id === id ? updated : t)) : prev))
      setValues((prev) => ({ ...prev, [id]: updated.text }))
      setError(null)
    } catch {
      setError("Something went wrong regenerating this title. Your previous results are still shown below — please try again.")
    } finally {
      setRegeneratingId(null)
    }
  }

  const handleCopyAll = async () => {
    if (!titles) return
    const text = titles.map((t) => `${t.label} (${(values[t.id] ?? t.text).length} characters): ${values[t.id] ?? t.text}`).join("\n\n")
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
    setValues(emptyValues())
    setSeeds(DEFAULT_SEEDS)
    setFieldErrors({})
    setError(null)
  }

  const isBusy = isGenerating || regeneratingId !== null

  return (
    <main>
      <SchemaMarkup schema={metaTitleWebApplicationSchema} />
      <SchemaMarkup schema={metaTitleBreadcrumbSchema} />
      <SchemaMarkup schema={metaTitleFaqSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-40" />

        <MainShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
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
                Create clear SEO title ideas for your website pages, blog posts and products. Enter your main keyword
                and a short page summary, then compare, edit and copy your preferred title.{" "}
                Browse our other <Link href="/free-ai-tools-online" className="text-primary underline underline-offset-4">free SEO tools</Link>.
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
                  src="/meta-title-generator-preview.webp"
                  alt="Laptop screen showing the Linkedo Meta Title Generator with a keyword entered, a Generate Titles button, and a generated SEO title with a search result preview"
                  title="Meta Title Generator — create SEO title ideas"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">From keyword to ready-to-use title.</span> Enter your
                details and get five editable title ideas with live length and search previews.
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
                <h2 className="text-lg font-semibold text-foreground">Create Your SEO Title</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <FormInput
                    label="Main Keyword or Page Topic *"
                    placeholder="e.g., SEO services London"
                    value={form.primaryKeyword}
                    onChange={(e) => updateField("primaryKeyword", e.target.value)}
                    maxLength={KEYWORD_MAX}
                    aria-invalid={Boolean(fieldErrors.primaryKeyword)}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">Enter the main phrase your page targets.</p>
                  {fieldErrors.primaryKeyword && (
                    <p className="text-sm text-destructive mt-1">{fieldErrors.primaryKeyword}</p>
                  )}
                </div>

                <div>
                  <FormTextarea
                    label="Page Summary *"
                    placeholder="e.g., We provide local SEO services for small businesses in London, including on-page optimisation and monthly reporting."
                    value={form.pageSummary}
                    onChange={(e) => updateField("pageSummary", e.target.value)}
                    maxLength={SUMMARY_MAX}
                    aria-invalid={Boolean(fieldErrors.pageSummary)}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Briefly describe what the page offers. Add useful details so the titles match your content.
                  </p>
                  {fieldErrors.pageSummary && <p className="text-sm text-destructive mt-1">{fieldErrors.pageSummary}</p>}
                </div>

                <div>
                  <FormSelect
                    label="Page Type"
                    options={pageTypeOptions}
                    value={form.pageType}
                    onChange={(e) => updateField("pageType", e.target.value as MetaTitleFormState["pageType"])}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Choose a service page, blog post, product page, category page or homepage.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput
                    label="Brand Name — Optional"
                    placeholder="e.g., Linkedo"
                    value={form.brand}
                    onChange={(e) => updateField("brand", e.target.value)}
                    maxLength={60}
                  />
                  <FormInput
                    label="Location — Optional"
                    placeholder="e.g., London"
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    maxLength={60}
                  />
                </div>

                <FormSelect
                  label="Tone"
                  options={toneOptions}
                  value={form.tone}
                  onChange={(e) => updateField("tone", e.target.value as MetaTitleFormState["tone"])}
                />

                <div>
                  <FormInput
                    label="Current Title — Optional"
                    placeholder="e.g., SEO Services | Linkedo"
                    value={form.currentTitle}
                    onChange={(e) => updateField("currentTitle", e.target.value)}
                    maxLength={CURRENT_TITLE_MAX}
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">Paste an existing title to get new versions.</p>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <AnimatedButton onClick={handleGenerate} loading={isGenerating} disabled={isBusy} className="w-full mt-2">
                  {isGenerating ? "Creating title ideas..." : "Generate Title Ideas"}
                </AnimatedButton>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-6 lg:p-8 bg-surface/50">
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Your Title Ideas</h2>
                  {titles && (
                    <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                      Compare five title suggestions below. Edit any title, check its length and view an estimated
                      search preview before copying it.
                    </p>
                  )}
                </div>
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
                      disabled={isBusy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border border-border/50 disabled:opacity-50"
                      title="Generate Again"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Generate Again
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
                <>
                  <p className="text-xs text-muted-foreground/80 italic mb-4 mt-3">
                    This preview is an estimate. Google may display a different title or shorten it to fit the screen.
                  </p>
                  <MetaTitleResult
                    titles={titles}
                    values={values}
                    keyword={form.primaryKeyword.trim()}
                    onValueChange={(id, text) => setValues((prev) => ({ ...prev, [id]: text }))}
                    onRegenerate={handleRegenerateOne}
                    regeneratingId={regeneratingId === "all" ? null : regeneratingId}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center mt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground">Your title ideas will appear here after you complete the form.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* How to Use */}
      <Section eyebrow="Guide" title="How to Use the Meta Title Generator">
        <div className="max-w-2xl mx-auto space-y-4">
          {howToSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Is a Meta Title */}
      <Section eyebrow="SEO Basics" title="What Is a Meta Title?">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A meta title is the clickable headline shown in search results, browser tabs and when a page is shared
              on social media. It's defined in a page's HTML title tag and is one of the first things people see
              before deciding whether to click through to your site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A good meta title describes the page accurately, includes the keyword it targets, and gives visitors a
              clear reason to click — without resorting to keyword stuffing or claims the page can't back up.
            </p>
          </div>

          <figure className="m-0">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/50">
              <Image
                src="/meta-title-generator-comparison.webp"
                alt="Two people comparing generated SEO title options on a monitor, with a search result preview showing the selected title and description"
                title="Compare and choose the title that fits your page"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Compare before you commit.</span> Review each option side
              by side and pick the title that best represents the page.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* How to Write a Useful SEO Title */}
      <Section
        eyebrow="Best Practices"
        title="How to Write a Useful SEO Title"
        description="Follow these guidelines to create meta titles that are clear, accurate and effective."
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {writingTips.map((tip) => (
            <div key={tip.title} className="p-5 rounded-xl bg-card/50 border border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Search guidance" title="Why Google Rewrites Some Titles (and How to Reduce It)">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>Google doesn't always show the title you wrote. It generates title links automatically, using your title element along with other sources such as the main visible heading, other headings on the page, prominent text and anchor text in links to the page. It's most likely to replace a title that is missing, very long, stuffed with keywords, repeated across many pages ("Home", "Untitled" or the same boilerplate everywhere), or one that doesn't match what the page actually says.</p>
          <p>To make it more likely that your own title is used:</p>
          <ul className="list-disc pl-6 space-y-2"><li>write a unique, descriptive title for every page;</li><li>keep it concise and lead with the page topic;</li><li>use your brand once, at the start or end, separated by a pipe, dash or colon;</li><li>make sure the title and the main heading describe the same thing.</li></ul>
          <p>Source: <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">Google Search Central – Influencing your title links in search results</a>.</p>
        </div>
      </Section>

      {/* Meta Title Examples */}
      <Section eyebrow="Examples" title="Meta Title Examples">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-foreground">See how these read in practice</h3>
          </div>
          {exampleTitles.map((example) => (
            <CodeBox key={example.label} label={example.label}>
              {example.title}
            </CodeBox>
          ))}
        </div>
      </Section>

      <Section eyebrow="Examples" title="Meta Title Formulas by Page Type">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
          <p>Choose the page type in the generator, then use these patterns as a starting point (the brand names are examples):</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Homepage:</strong> Main service or product + who it's for | Brand. <em>Example: Bookkeeping for Small Businesses | Example Co</em></li>
            <li><strong>Service page:</strong> Service + benefit or qualifier | Brand. <em>Example: Emergency Boiler Repair, Same-Day Visits | Example Co</em></li>
            <li><strong>Location page:</strong> Service + town or city | Brand. <em>Example: Wedding Photographer in Leeds | Example Studio</em></li>
            <li><strong>Blog post:</strong> The question or topic in plain words. <em>Example: How to Write a Meta Title That Gets Clicks</em></li>
            <li><strong>Product page:</strong> Product name + key attribute | Store. <em>Example: Waterproof Hiking Boots for Women | Example Store</em></li>
            <li><strong>Category page:</strong> Category + range or choice | Store. <em>Example: Men's Running Shoes | Example Store</em></li>
            <li><strong>Landing page:</strong> Offer + who it's for | Brand. <em>Example: Free Website Audit for Local Businesses | Example Co</em></li>
          </ul>
          <p>Once your title is ready, write the snippet text under it with our free <Link href="/meta-description-generator" className="text-primary underline underline-offset-4">Meta Description Generator</Link>.</p>
        </div>
      </Section>

      <Section eyebrow="Best Practices" title="Common Meta Title Mistakes to Avoid">
        <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed"><ul className="list-disc pl-6 space-y-3"><li><strong>Same title on many pages.</strong> Each page needs its own title, or search engines and visitors can’t tell similar pages apart.</li><li><strong>Keyword stuffing.</strong> Repeating a keyword or listing variations ("SEO, SEO Agency, SEO Services, Best SEO") reads badly and is a common reason titles get rewritten.</li><li><strong>Vague labels.</strong> "Home", "Services" or "Page 1" tell a searcher nothing about the page.</li><li><strong>Claims the page can’t back up.</strong> "Best", "No.1" or "Guaranteed" without evidence can put people off and may be replaced.</li><li><strong>Important words at the end.</strong> If the title is shortened, the end is lost, so lead with the topic.</li><li><strong>Title and page don’t match.</strong> If the title promises something the content doesn’t deliver, visitors leave and Google may show different text.</li></ul><p>Want help with titles across a whole site? See our <Link href="/seo" className="text-primary underline underline-offset-4">SEO services</Link>.</p></div>
      </Section>

      {/* FAQ — all answers are server-rendered in mounted accordion content */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} forceMount />
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Create a Matching Meta Description" gradient>
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

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help With Your Website's SEO?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Meta titles are just one part of SEO. Get a comprehensive SEO audit and strategy from our experts.
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
