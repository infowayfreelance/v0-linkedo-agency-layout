"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FileSearch, FileText, ListTree, ArrowRight, Lightbulb, Check, Sparkles, Trash2, Copy } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
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

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://linkedo.co.uk/meta-description-generator#app",
    "name": "Free Meta Description Generator",
    "url": "https://linkedo.co.uk/meta-description-generator",
    "description": "Free meta description generator: enter a primary keyword, page type and search intent, plus optional summary, location, audience, benefits, call to action and tone, to get SEO-focused, CTR-focused and balanced meta descriptions with live character counts.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "isAccessibleForFree": true,
    "featureList": [
      "Three versions per request: SEO-focused, CTR-focused and balanced",
      "Live character count and length status",
      "Page types: home, service, location, product, category, blog post, landing page, about page and other",
      "Search intent: auto detect, informational, commercial, transactional, local or navigational",
      "Optional summary, location, audience, benefits, call to action and tone"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "provider": {
      "@id": "https://linkedo.co.uk/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://linkedo.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free Tools",
        "item": "https://linkedo.co.uk/free-ai-tools-online"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Meta Description Generator",
        "item": "https://linkedo.co.uk/meta-description-generator"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://linkedo.co.uk/meta-description-generator#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a meta description be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google doesn't set a length limit, but it shortens snippets in search results to fit the device width (Google Search Central). Around 140–160 characters is a practical guide, and the generator shows a live character count for each version so you can see which ones fit."
        }
      },
      {
        "@type": "Question",
        "name": "Will Google always show my meta description?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Google creates snippets mainly from the page content and uses your meta description when it gives a more accurate summary of the page for that search (Google Search Central). A specific, accurate description that matches the page gives yours the best chance of being shown."
        }
      },
      {
        "@type": "Question",
        "name": "Should every page have a different meta description?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Google advises creating unique descriptions for each page, because identical or similar descriptions aren't helpful when several of your pages appear in results. A site-level description is fine for the homepage."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between the SEO-focused, CTR-focused and balanced versions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The SEO-focused version leads with your primary keyword and states clearly what the page covers. The CTR-focused version uses a benefit, question or statement as its opening and adds a call to action when selected and space allows. The balanced version combines keyword relevance and readable wording. Pick the one that reads most naturally for your page and edit it if needed."
        }
      },
      {
        "@type": "Question",
        "name": "What should I put in Key Benefits / USPs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only things you can back up, such as a service you really offer, an area you really cover or a policy you really have. The generator builds descriptions from what you enter and doesn't invent claims, so the quality of the result depends on the facts you give it."
        }
      },
      {
        "@type": "Question",
        "name": "Which Search Intent should I choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose Informational for guides and how-to pages, Commercial when people are comparing options, Transactional when they are ready to buy or book, Local for pages about a town or area, and Navigational for your brand or contact pages. If you're unsure, leave it on Auto Detect."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use it for location pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Choose Location Page as the page type and add the town or city in Target Location. Write a separate description for each location page so they don't repeat each other."
        }
      },
      {
        "@type": "Question",
        "name": "Is a meta description the same as a meta title?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The meta title is the clickable headline in search results and the browser tab; the meta description is the short summary underneath. Create the title with our free Meta Title Generator and keep the two consistent."
        }
      },
      {
        "@type": "Question",
        "name": "Where do I paste the meta description on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most website builders and SEO plugins have a field called meta description, search description or SEO description in the page settings. On a custom site it goes in the page's head as a meta tag with the name description."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Meta Description Generator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It's one of Linkedo's free tools. If you'd like help with titles, descriptions and the rest of your on-page SEO, see our SEO services; Linkedo is open 24/7."
        }
      }
    ]
  }
]

const faqs = [
  { question: "How long should a meta description be?", answer: <>Google doesn't set a length limit, but it shortens snippets in search results to fit the device width (<a href="https://developers.google.com/search/docs/appearance/snippet" className="text-primary hover:underline" target="_blank" rel="noopener">Google Search Central</a>). Around 140–160 characters is a practical guide, and the generator shows a live character count for each version so you can see which ones fit.</> },
  { question: "Will Google always show my meta description?", answer: <>No. Google creates snippets mainly from the page content and uses your meta description when it gives a more accurate summary of the page for that search (<a href="https://developers.google.com/search/docs/appearance/snippet" className="text-primary hover:underline" target="_blank" rel="noopener">Google Search Central</a>). A specific, accurate description that matches the page gives yours the best chance of being shown.</> },
  { question: "Should every page have a different meta description?", answer: <>Yes. Google advises creating unique descriptions for each page, because identical or similar descriptions aren't helpful when several of your pages appear in results. A site-level description is fine for the homepage.</> },
  { question: "What's the difference between the SEO-focused, CTR-focused and balanced versions?", answer: <>The SEO-focused version leads with your primary keyword and states clearly what the page covers. The CTR-focused version uses a benefit, question or statement as its opening and adds a call to action when selected and space allows. The balanced version combines keyword relevance and readable wording. Pick the one that reads most naturally for your page and edit it if needed.</> },
  { question: "What should I put in Key Benefits / USPs?", answer: <>Only things you can back up, such as a service you really offer, an area you really cover or a policy you really have. The generator builds descriptions from what you enter and doesn't invent claims, so the quality of the result depends on the facts you give it.</> },
  { question: "Which Search Intent should I choose?", answer: <>Choose Informational for guides and how-to pages, Commercial when people are comparing options, Transactional when they are ready to buy or book, Local for pages about a town or area, and Navigational for your brand or contact pages. If you're unsure, leave it on Auto Detect.</> },
  { question: "Can I use it for location pages?", answer: <>Yes. Choose Location Page as the page type and add the town or city in Target Location. Write a separate description for each location page so they don't repeat each other.</> },
  { question: "Is a meta description the same as a meta title?", answer: <>No. The meta title is the clickable headline in search results and the browser tab; the meta description is the short summary underneath. Create the title with our free <a href="/meta-title-generator" className="text-primary hover:underline">Meta Title Generator</a> and keep the two consistent.</> },
  { question: "Where do I paste the meta description on my website?", answer: <>Most website builders and SEO plugins have a field called meta description, search description or SEO description in the page settings. On a custom site it goes in the page's head as a meta tag with the name description.</> },
  { question: "Is the Meta Description Generator free?", answer: <>Yes. It's one of Linkedo's <a href="/free-ai-tools-online" className="text-primary hover:underline">free tools</a>. If you'd like help with titles, descriptions and the rest of your on-page SEO, see our <a href="/seo" className="text-primary hover:underline">SEO services</a>; Linkedo is open 24/7.</> },
]

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
  "Aim for about 140–160 characters (Google has no fixed limit, but shortens long snippets)",
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
      <SchemaMarkup schema={schemas} />
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
                <span className="font-medium text-foreground">Create SEO-friendly descriptions with live character counts.</span>{" "}
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

      <Section title="How to Use the Meta Description Generator">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Primary Keyword:</strong> the main phrase the page should be found for, such as "boiler repair Leeds".</li>
          <li><strong>Page Type and Search Intent:</strong> pick the kind of page and what the searcher wants. Leave intent on Auto Detect if you're not sure.</li>
          <li><strong>Page Content Summary:</strong> two or three sentences on what the page actually covers. The more specific you are, the more specific the descriptions.</li>
          <li><strong>Location, Audience and Key Benefits:</strong> optional, but only add facts that are true for your business.</li>
          <li><strong>CTA Preference and Tone:</strong> choose how the description should end and how it should sound.</li>
          <li><strong>Generate, compare and edit:</strong> check the character counts, pick a version, edit any wording that isn't quite right, then paste it into your page settings.</li>
          </ol>
        </div>
      </Section>

      <Section title="SEO-Focused, CTR-Focused or Balanced: Which Should You Pick?">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <ul className="list-disc pl-6 space-y-3">
          <li><strong>SEO-focused:</strong> leads with your primary keyword and says plainly what the page covers. Good for guides and service pages where matching the search matters most.</li>
          <li><strong>CTR-focused:</strong> uses a benefit, question or statement as its opening and adds a call to action when selected and space allows. Good for pages where several results look alike and you need a reason to choose yours.</li>
          <li><strong>Balanced:</strong> combines keyword relevance and readable wording. A sensible default for most pages.</li>
          </ul>
          <p>Whichever you choose, the description should match what is on the page. Google creates snippets mainly from page content and uses the meta description when it gives a more accurate summary for that search (<a href="https://developers.google.com/search/docs/appearance/snippet" className="text-primary hover:underline" target="_blank" rel="noopener">Google Search Central</a>), so a description that promises something the page doesn't deliver is less likely to be shown.</p>
        </div>
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

      <Section title="Meta Description Examples by Page Type">
        <div className="max-w-4xl mx-auto space-y-5 text-muted-foreground">
          <p>These are made-up examples to show the shape of a good description. Replace every detail with facts about your own page.</p>
          <ul className="list-disc pl-6 space-y-3">
          <li><strong>Service page:</strong> "Boiler repairs in Leeds for gas and combi boilers. Tell us the fault and your postcode, and we'll explain the next step. Call or book online."</li>
          <li><strong>Location page:</strong> "Bathroom fitting in Harrogate: design, supply and installation for family bathrooms and en-suites. See recent work and request a quote."</li>
          <li><strong>Product page:</strong> "Oak bedside table with two soft-close drawers, 45 cm wide. Check dimensions, finish options and delivery details before you order."</li>
          <li><strong>Blog post:</strong> "What a meta description is, how Google uses it and how to write one for each page, with examples for services, locations and products."</li>
          <li><strong>Homepage:</strong> a short site-level summary of who you help and what you offer. Google says a site-level description is fine for the homepage, while other pages should each have their own.</li>
          </ul>
          <p>Pair each description with a clear title from our <a href="/meta-title-generator" className="text-primary hover:underline">Meta Title Generator</a>, and plan the content itself with the <a href="/blog-outline-generator" className="text-primary hover:underline">Blog Outline Generator</a>.</p>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Meta Description Generator FAQs">
        <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} forceMount /></div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Optimising" gradient>
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need a Full SEO Strategy?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Meta descriptions are just the start. Get a comprehensive SEO audit and strategy from our experts.
          </p>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Linkedo is open 24/7. Call +44 7927 969991, email info@linkedo.co.uk or <Link href="/contact" className="text-primary hover:underline">contact us</Link>.</p>
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
