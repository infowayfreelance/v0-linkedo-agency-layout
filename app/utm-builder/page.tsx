"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Link2,
  Megaphone,
  FileText,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Lightbulb,
  Trash2,
  Search,
} from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { buildUtmUrl, paramsToQueryString, type UtmFields } from "@/lib/utm-builder/utils"

const sourceOptions = [
  { value: "google", label: "Google" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "bing", label: "Bing" },
  { value: "email", label: "Email" },
  { value: "newsletter", label: "Newsletter" },
  { value: "referral", label: "Referral" },
  { value: "custom", label: "Custom..." },
]

const mediumOptions = [
  { value: "cpc", label: "CPC (Paid Search)" },
  { value: "paid_social", label: "Paid Social" },
  { value: "organic_social", label: "Organic Social" },
  { value: "email", label: "Email" },
  { value: "referral", label: "Referral" },
  { value: "display", label: "Display" },
  { value: "affiliate", label: "Affiliate" },
  { value: "influencer", label: "Influencer" },
  { value: "qr", label: "QR Code" },
  { value: "sms", label: "SMS" },
  { value: "custom", label: "Custom..." },
]

const parameterReference: { param: string; required: string; purpose: string; example: string }[] = [
  { param: "utm_source", required: "Required", purpose: "Where the traffic comes from", example: "google, newsletter" },
  { param: "utm_medium", required: "Required", purpose: "The marketing medium used", example: "cpc, email, referral" },
  { param: "utm_campaign", required: "Required", purpose: "The specific campaign or promotion", example: "spring-sale" },
  { param: "utm_term", required: "Optional", purpose: "Paid search keyword, if applicable", example: "seo-services" },
  { param: "utm_content", required: "Optional", purpose: "Differentiates similar content or links", example: "banner-1" },
]

const howToSteps = [
  "Enter the full page URL you want to track. We'll add https:// automatically if you leave it off.",
  "Choose a Source and Medium from the presets, or select Custom to type your own.",
  "Add a Campaign Name — this is required and identifies the specific promotion or push.",
  "Optionally add a Term (for paid search keywords) and Content (to split-test links or creatives).",
  "Your tagged URL builds live as you type. Copy the full URL, copy just the parameters, or open it directly to test it.",
]

const whenToUse = [
  "Paid social ads (Facebook, Instagram, LinkedIn, TikTok) that don't auto-tag campaign data",
  "Email newsletters and automated email sequences",
  "Affiliate, partner, and influencer links",
  "QR codes on print materials, packaging, or signage",
  "Referral links shared in guest posts, partnerships, or directories",
  "Any link where you want to see exactly which campaign or placement drove the click in Google Analytics",
]

const bestPractices = [
  "Use lowercase letters to avoid duplicate tracking (Google and google are counted separately)",
  "Replace spaces with hyphens, never underscores or %20",
  "Keep utm_campaign names descriptive but short, e.g. spring-sale-2026",
  "Be consistent — agree on a naming convention with your team before tagging links",
  "Only add UTM parameters to links you share externally, not to internal site navigation",
  "Test a tagged link before launching a campaign to confirm it resolves correctly",
]

const faqs = [
  {
    question: "What is a UTM builder used for?",
    answer:
      "A UTM builder adds tracking parameters (utm_source, utm_medium, utm_campaign, and optionally utm_term and utm_content) to the end of a URL. When someone clicks that link, Google Analytics reads the parameters and attributes the visit to the correct source, medium, and campaign, so you can see which marketing activity actually drove traffic.",
  },
  {
    question: "What's the difference between utm_source and utm_medium?",
    answer:
      "utm_source identifies where the traffic came from, such as google, facebook, or a specific newsletter. utm_medium identifies the marketing channel or method, such as cpc, email, or paid_social. Together they answer \"where\" and \"how\" a visitor arrived.",
  },
  {
    question: "Do UTM parameters affect my website or SEO?",
    answer:
      "No. UTM parameters are only used for analytics tracking — they don't change the page content, and Google treats the tagged URL as the same page as the untagged version (via canonical tags), so they have no direct SEO impact.",
  },
  {
    question: "Should UTM parameters be lowercase?",
    answer:
      "Yes. Google Analytics treats UTM values as case-sensitive, so Google and google would be reported as two separate sources. This tool automatically lowercases every value you enter to prevent that kind of split, duplicated data.",
  },
  {
    question: "Can I use UTM parameters with Google Ads?",
    answer:
      "Google Ads has built-in auto-tagging (gclid) that links clicks to Google Analytics automatically, so manual UTM tags aren't required for Google Ads campaigns. UTM parameters are most useful for channels that don't auto-tag, such as paid social, email, and affiliate links.",
  },
  {
    question: "What happens if I reuse the same campaign name across different links?",
    answer:
      "Analytics will group all clicks under that one campaign name, which makes it harder to tell links apart. Use utm_content to differentiate between similar links within the same campaign (for example, two different ad creatives) rather than creating a new campaign name for each one.",
  },
  {
    question: "Are utm_term and utm_content required?",
    answer:
      "No. Only utm_source, utm_medium, and utm_campaign are required for Google Analytics to attribute a visit correctly. utm_term and utm_content are optional and mainly useful for paid search keywords and A/B testing different links or creatives.",
  },
  {
    question: "Will UTM parameters work with a URL that already has query parameters?",
    answer:
      "Yes. This tool adds the UTM parameters alongside any existing query parameters on your URL without removing or overwriting them, so links with tracking IDs, language codes, or other parameters continue to work as expected.",
  },
]

const relatedTools = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Generate SEO-optimised page titles.",
    href: "/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    icon: Search,
    title: "Meta Description Generator",
    description: "Write compelling meta descriptions that boost CTR.",
    href: "/meta-description-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
]

const utmWebApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free UTM Builder",
  url: "https://linkedo.co.uk/utm-builder",
  description:
    "Create UTM tracking URLs for Google Analytics and GA4. Add source, medium, campaign, term and content to track marketing campaigns accurately.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  provider: { "@id": "https://linkedo.co.uk/#organization" },
}

const utmFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const utmBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "UTM Builder", item: "https://linkedo.co.uk/utm-builder" },
  ],
}

interface FormState {
  url: string
  source: string
  sourceCustom: string
  medium: string
  mediumCustom: string
  campaign: string
  term: string
  content: string
}

const DEFAULT_FORM: FormState = {
  url: "",
  source: "google",
  sourceCustom: "",
  medium: "cpc",
  mediumCustom: "",
  campaign: "",
  term: "",
  content: "",
}

export default function UTMBuilderPage() {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [copiedUrl, setCopiedUrl] = useState(false)
  const [copiedParams, setCopiedParams] = useState(false)

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const markTouched = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }))

  const resolvedSource = form.source === "custom" ? form.sourceCustom : form.source
  const resolvedMedium = form.medium === "custom" ? form.mediumCustom : form.medium

  const fieldErrors = useMemo(() => {
    const errors: Record<string, string> = {}
    if (!form.url.trim()) {
      errors.url = "Please enter a website URL."
    }
    if (!resolvedSource.trim()) {
      errors.source = form.source === "custom" ? "Please enter a custom source." : "Please select a source."
    }
    if (!resolvedMedium.trim()) {
      errors.medium = form.medium === "custom" ? "Please enter a custom medium." : "Please select a medium."
    }
    if (!form.campaign.trim()) {
      errors.campaign = "Please enter a campaign name."
    }
    return errors
  }, [form, resolvedSource, resolvedMedium])

  const result = useMemo(() => {
    if (Object.keys(fieldErrors).length > 0) return null
    const fields: UtmFields = {
      source: resolvedSource,
      medium: resolvedMedium,
      campaign: form.campaign,
      term: form.term,
      content: form.content,
    }
    return buildUtmUrl(form.url, fields)
  }, [form, resolvedSource, resolvedMedium, fieldErrors])

  const showError = (field: string) => touched[field] && fieldErrors[field]

  const handleCopyUrl = async () => {
    if (!result?.ok) return
    try {
      await navigator.clipboard.writeText(result.href)
      setCopiedUrl(true)
      setTimeout(() => setCopiedUrl(false), 2000)
    } catch {
      // clipboard unavailable — ignore silently
    }
  }

  const handleOpenUrl = () => {
    if (!result?.ok) return
    window.open(result.href, "_blank", "noopener,noreferrer")
  }

  const handleCopyParams = async () => {
    if (!result?.ok) return
    try {
      await navigator.clipboard.writeText(paramsToQueryString(result.params))
      setCopiedParams(true)
      setTimeout(() => setCopiedParams(false), 2000)
    } catch {
      // clipboard unavailable — ignore silently
    }
  }

  const handleClear = () => {
    setForm(DEFAULT_FORM)
    setTouched({})
  }

  const handleSubmitAttempt = () => {
    setTouched({ url: true, source: true, medium: true, campaign: true })
  }

  return (
    <main>
      <SchemaMarkup schema={utmWebApplicationSchema} />
      <SchemaMarkup schema={utmFaqSchema} />
      <SchemaMarkup schema={utmBreadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-40" />

        <MainShell className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free UTM Builder for <span className="text-gradient-primary">Campaign Tracking</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Build properly formatted UTM parameters to track your marketing campaigns accurately in Google
              Analytics and GA4.
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

          <div className="relative z-10 p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Side */}
              <div className="space-y-5">
                <div>
                  <FormInput
                    label="Website URL *"
                    placeholder="e.g., linkedo.co.uk/seo"
                    value={form.url}
                    onChange={(e) => updateField("url", e.target.value)}
                    onBlur={() => markTouched("url")}
                  />
                  {showError("url") && <p className="text-sm text-destructive mt-1.5">{fieldErrors.url}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <FormSelect
                      label="Campaign Source *"
                      options={sourceOptions}
                      value={form.source}
                      onChange={(e) => updateField("source", e.target.value)}
                      onBlur={() => markTouched("source")}
                    />
                    {form.source === "custom" && (
                      <FormInput
                        label="Custom Source"
                        className="mt-3"
                        placeholder="e.g., quora"
                        value={form.sourceCustom}
                        onChange={(e) => updateField("sourceCustom", e.target.value)}
                        onBlur={() => markTouched("source")}
                      />
                    )}
                    {showError("source") && <p className="text-sm text-destructive mt-1.5">{fieldErrors.source}</p>}
                  </div>
                  <div>
                    <FormSelect
                      label="Campaign Medium *"
                      options={mediumOptions}
                      value={form.medium}
                      onChange={(e) => updateField("medium", e.target.value)}
                      onBlur={() => markTouched("medium")}
                    />
                    {form.medium === "custom" && (
                      <FormInput
                        label="Custom Medium"
                        className="mt-3"
                        placeholder="e.g., podcast"
                        value={form.mediumCustom}
                        onChange={(e) => updateField("mediumCustom", e.target.value)}
                        onBlur={() => markTouched("medium")}
                      />
                    )}
                    {showError("medium") && <p className="text-sm text-destructive mt-1.5">{fieldErrors.medium}</p>}
                  </div>
                </div>

                <div>
                  <FormInput
                    label="Campaign Name *"
                    placeholder="e.g., spring-sale-2026"
                    value={form.campaign}
                    onChange={(e) => updateField("campaign", e.target.value)}
                    onBlur={() => markTouched("campaign")}
                  />
                  {showError("campaign") && <p className="text-sm text-destructive mt-1.5">{fieldErrors.campaign}</p>}
                </div>

                <FormInput
                  label="Campaign Term (optional)"
                  placeholder="e.g., seo-services"
                  value={form.term}
                  onChange={(e) => updateField("term", e.target.value)}
                />
                <FormInput
                  label="Campaign Content (optional)"
                  placeholder="e.g., banner-ad-1"
                  value={form.content}
                  onChange={(e) => updateField("content", e.target.value)}
                />
              </div>

              {/* Output Side */}
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-foreground mb-4">Generated URL</h2>
                <div className="p-4 rounded-lg bg-background/50 border border-border/50 mb-4 overflow-hidden min-h-[4.5rem]">
                  {result?.ok ? (
                    <code className="text-sm font-mono text-primary break-all">{result.href}</code>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      {result === null && Object.keys(fieldErrors).length > 0
                        ? "Fill in the required fields to generate your tracking URL."
                        : "Enter a URL to generate your UTM link"}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <AnimatedButton
                    onClick={result?.ok ? handleCopyUrl : handleSubmitAttempt}
                    className="flex-1 min-w-[140px]"
                  >
                    {copiedUrl ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedUrl ? "Copied!" : "Copy URL"}</span>
                  </AnimatedButton>
                  <AnimatedButton
                    variant="secondary"
                    onClick={handleOpenUrl}
                    disabled={!result?.ok}
                    className="flex-1 min-w-[140px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open URL</span>
                  </AnimatedButton>
                </div>

                {result?.ok && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Parameters</h3>
                    <div className="space-y-2">
                      {Object.entries(result.params).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-background/50 border border-border/30 text-sm"
                        >
                          <code className="font-mono text-primary shrink-0">{key}</code>
                          <code className="font-mono text-foreground break-all text-right">{value}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-auto">
                  <AnimatedButton variant="ghost" size="sm" onClick={handleCopyParams} disabled={!result?.ok}>
                    {copiedParams ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedParams ? "Copied!" : "Copy Parameters"}</span>
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" size="sm" onClick={handleClear}>
                    <Trash2 className="w-4 h-4" />
                    <span>Clear</span>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* What Is a UTM Builder */}
      <Section eyebrow="UTM Tracking" title="What Is a UTM Builder?">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            A UTM builder adds five standardised tracking parameters — utm_source, utm_medium, utm_campaign,
            utm_term, and utm_content — to the end of a URL. Google Analytics and GA4 read these parameters to
            attribute each visit to the specific campaign, channel, and source that generated it, instead of
            grouping all traffic together generically.
          </p>
        </div>
      </Section>

      {/* How to Use */}
      <Section eyebrow="Guide" title="How to Use the UTM Builder">
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

      {/* UTM Parameter Examples */}
      <Section eyebrow="Examples" title="UTM Parameter Examples">
        <div className="max-w-2xl mx-auto space-y-4">
          <CodeBox label="Paid Search">
            https://linkedo.co.uk/seo?utm_source=google&utm_medium=cpc&utm_campaign=seo-london&utm_term=seo-services
          </CodeBox>
          <CodeBox label="Email Newsletter">
            https://linkedo.co.uk/offer?utm_source=newsletter&utm_medium=email&utm_campaign=spring-sale-2026
          </CodeBox>
          <CodeBox label="Paid Social">
            https://linkedo.co.uk/google-ads?utm_source=linkedin&utm_medium=paid_social&utm_campaign=lead-gen-q1&utm_content=carousel-ad
          </CodeBox>
        </div>
      </Section>

      {/* Best Practices + Parameter Reference */}
      <Section
        eyebrow="Best Practices"
        title="UTM Naming Best Practices"
        description="Follow these rules for accurate, consistent campaign tracking."
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

          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Parameter Reference</h3>
            </div>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border/50">
                    <th className="py-2 px-2 font-medium">Parameter</th>
                    <th className="py-2 px-2 font-medium">Required</th>
                    <th className="py-2 px-2 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {parameterReference.map((row) => (
                    <tr key={row.param} className="border-b border-border/30 last:border-0 align-top">
                      <td className="py-2.5 px-2 font-mono text-primary whitespace-nowrap">{row.param}</td>
                      <td className="py-2.5 px-2 text-muted-foreground whitespace-nowrap">{row.required}</td>
                      <td className="py-2.5 px-2 text-muted-foreground">
                        {row.purpose}
                        <span className="block text-xs text-muted-foreground/70 mt-0.5">e.g. {row.example}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* When to Use */}
      <Section eyebrow="Use Cases" title="When to Use UTM Parameters">
        <div className="max-w-2xl mx-auto space-y-3">
          {whenToUse.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="More Marketing Tools" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help With Campaign Tracking?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let our SEO and Google Ads experts set up comprehensive tracking for all your marketing campaigns.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/google-ads">
              <AnimatedButton size="lg">
                <Megaphone className="w-4 h-4" />
                <span>Explore Google Ads Services</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
            <Link href="/seo">
              <AnimatedButton size="lg" variant="secondary">
                <span>Explore SEO Services</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
