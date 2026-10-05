"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Copy,
  Check,
  RefreshCw,
  Link2,
  HelpCircle,
  MessageCircleQuestion,
  Sparkles,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { GeneratedOutline, OutlineHeading, RegenerateTarget } from "@/lib/blog-outline-generator/types"
import { formatOutlineAsText } from "@/lib/blog-outline-generator/generator"

interface BlogOutlineResultProps {
  outline: GeneratedOutline
  onRegenerate: (target: RegenerateTarget) => void
  regeneratingTarget: RegenerateTarget | null
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — silently ignore, button stays interactive
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50 transition-colors shrink-0"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied" : label}
    </button>
  )
}

function RegenerateButton({
  onClick,
  isLoading,
  label = "Regenerate",
}: {
  onClick: () => void
  isLoading: boolean
  label?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50 transition-colors disabled:opacity-50 shrink-0"
    >
      <RefreshCw className={cn("w-3.5 h-3.5", isLoading && "animate-spin")} />
      {label}
    </button>
  )
}

function ResultCard({
  title,
  icon: Icon,
  actions,
  children,
  delay = 0,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  actions?: React.ReactNode
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl border border-border/50 bg-background/50 p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <Icon className="w-3.5 h-3.5 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground text-sm sm:text-base">{title}</h4>
        </div>
        {actions && <div className="flex items-center gap-2 flex-wrap">{actions}</div>}
      </div>
      {children}
    </motion.div>
  )
}

function HeadingNode({ heading, index }: { heading: OutlineHeading; index: number }) {
  if (heading.level === "h2") {
    return (
      <div className="rounded-lg border border-border/40 bg-card/40 p-4">
        <p className="font-semibold text-foreground text-sm sm:text-base mb-1">{heading.text}</p>
        {heading.guidance && <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">{heading.guidance}</p>}
        {heading.children && heading.children.length > 0 && (
          <div className="mt-3 space-y-2 pl-4 border-l-2 border-primary/20">
            {heading.children.map((child, i) => (
              <HeadingNode key={i} heading={child} index={i} />
            ))}
          </div>
        )}
      </div>
    )
  }

  if (heading.level === "h3") {
    return (
      <div>
        <p className="text-sm text-foreground font-medium">{heading.text}</p>
        {heading.children && heading.children.length > 0 && (
          <div className="mt-1.5 space-y-1 pl-4 border-l border-border/40">
            {heading.children.map((child, i) => (
              <HeadingNode key={i} heading={child} index={i} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return <p className="text-xs sm:text-sm text-muted-foreground">{heading.text}</p>
}

export function BlogOutlineResult({ outline, onRegenerate, regeneratingTarget }: BlogOutlineResultProps) {
  const fullText = formatOutlineAsText(outline)

  return (
    <div className="space-y-4">
      {/* 1. SEO Overview */}
      <ResultCard title="SEO Overview" icon={Target} delay={0}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Primary Keyword", value: outline.seoOverview.primaryKeyword },
            { label: "Search Intent", value: outline.seoOverview.searchIntent },
            { label: "Content Type", value: outline.seoOverview.contentType },
            { label: "Suggested Word Count", value: outline.seoOverview.wordCount },
            { label: "Target Audience", value: outline.seoOverview.targetAudience },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-lg bg-card/40 border border-border/30">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </ResultCard>

      {/* 2. Suggested H1 */}
      <ResultCard
        title="Suggested H1"
        icon={Sparkles}
        delay={0.03}
        actions={
          <>
            <CopyButton text={outline.h1} label="Copy H1" />
            <RegenerateButton onClick={() => onRegenerate("h1")} isLoading={regeneratingTarget === "h1"} />
          </>
        }
      >
        <p className="text-base sm:text-lg font-semibold text-foreground text-balance">{outline.h1}</p>
      </ResultCard>

      {/* 3. URL Slug */}
      <ResultCard title="Recommended URL Slug" icon={Link2} delay={0.06} actions={<CopyButton text={outline.slug} label="Copy" />}>
        <code className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-md">{outline.slug}</code>
      </ResultCard>

      {/* 4. Introduction guidance */}
      <ResultCard title="Blog Introduction Guidance" icon={Lightbulb} delay={0.09}>
        <ul className="space-y-2">
          {outline.introGuidance.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </ResultCard>

      {/* 5. Complete outline */}
      <ResultCard
        title="Complete Blog Outline"
        icon={Sparkles}
        delay={0.12}
        actions={
          <>
            <CopyButton text={fullText} label="Copy Full Outline" />
            <RegenerateButton onClick={() => onRegenerate("full")} isLoading={regeneratingTarget === "full"} label="Regenerate Outline" />
          </>
        }
      >
        <div className="space-y-3">
          {outline.outline.map((heading, i) => (
            <HeadingNode key={i} heading={heading} index={i} />
          ))}
        </div>
      </ResultCard>

      {/* 6. Questions to answer */}
      <ResultCard title="Questions the Article Should Answer" icon={HelpCircle} delay={0.15}>
        <ul className="space-y-2">
          {outline.questions.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              {q}
            </li>
          ))}
        </ul>
      </ResultCard>

      {/* 7. FAQs */}
      <ResultCard
        title="FAQ Suggestions"
        icon={MessageCircleQuestion}
        delay={0.18}
        actions={<RegenerateButton onClick={() => onRegenerate("faqs")} isLoading={regeneratingTarget === "faqs"} label="Regenerate FAQs" />}
      >
        <div className="space-y-3">
          {outline.faqs.map((faq, i) => (
            <div key={i} className="p-3 rounded-lg bg-card/40 border border-border/30">
              <p className="text-sm font-medium text-foreground mb-1">{faq.question}</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ResultCard>

      {/* 8. Internal linking suggestions */}
      <ResultCard title="Internal Linking Suggestions" icon={Link2} delay={0.21}>
        <ul className="space-y-2">
          {outline.internalLinks.map((link, i) => (
            <li key={i} className="flex items-center justify-between gap-3 text-sm p-2.5 rounded-lg bg-card/40 border border-border/30">
              <div>
                <p className="text-foreground font-medium">{link.label}</p>
                <p className="text-xs text-muted-foreground">{link.type}</p>
              </div>
              {link.href ? (
                <code className="text-xs text-primary shrink-0">{link.href}</code>
              ) : (
                <span className="text-xs text-muted-foreground italic shrink-0">Suggested type only</span>
              )}
            </li>
          ))}
        </ul>
      </ResultCard>

      {/* 9 & 10. Meta title / description */}
      <div className="grid sm:grid-cols-2 gap-4">
        <ResultCard
          title="Meta Title"
          icon={Sparkles}
          delay={0.24}
          actions={
            <>
              <CopyButton text={outline.metaTitle} label="Copy" />
              <RegenerateButton onClick={() => onRegenerate("metaTitle")} isLoading={regeneratingTarget === "metaTitle"} />
            </>
          }
        >
          <p className="text-sm text-foreground leading-relaxed">{outline.metaTitle}</p>
          <p className="text-xs text-muted-foreground mt-2">{outline.metaTitle.length} characters</p>
        </ResultCard>

        <ResultCard
          title="Meta Description"
          icon={Sparkles}
          delay={0.27}
          actions={
            <>
              <CopyButton text={outline.metaDescription} label="Copy" />
              <RegenerateButton onClick={() => onRegenerate("metaDescription")} isLoading={regeneratingTarget === "metaDescription"} />
            </>
          }
        >
          <p className="text-sm text-foreground leading-relaxed">{outline.metaDescription}</p>
          <p className="text-xs text-muted-foreground mt-2">{outline.metaDescription.length} characters</p>
        </ResultCard>
      </div>

      {/* 11. CTA */}
      <ResultCard title="Suggested CTA" icon={ArrowRight} delay={0.3}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-foreground font-medium">{outline.cta.text}</p>
          <code className="text-xs text-primary">{outline.cta.href}</code>
        </div>
      </ResultCard>

      {/* 12. Content enhancement ideas */}
      <ResultCard title="Content Enhancement Ideas" icon={Lightbulb} delay={0.33}>
        <div className="flex flex-wrap gap-2">
          {outline.enhancementIdeas.map((idea, i) => (
            <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {idea}
            </span>
          ))}
        </div>
      </ResultCard>
    </div>
  )
}
