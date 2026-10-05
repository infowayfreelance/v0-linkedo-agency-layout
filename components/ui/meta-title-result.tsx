"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, RefreshCw, Target, MousePointerClick, Scale } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GeneratedTitle, GeneratedTitleSet, LengthStatus, OptionId } from "@/lib/meta-title-generator/types"

interface MetaTitleResultProps {
  titles: GeneratedTitleSet
  onRegenerate: (id: OptionId) => void
  regeneratingId: OptionId | null
}

const LENGTH_STATUS_STYLES: Record<LengthStatus, string> = {
  Short: "bg-secondary/50 text-muted-foreground border-border",
  Acceptable: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Ideal: "bg-green-500/10 text-green-400 border-green-500/30",
  "Slightly Long": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "Too Long": "bg-destructive/10 text-destructive border-destructive/30",
}

const OPTION_ICON: Record<OptionId, React.ComponentType<{ className?: string }>> = {
  seo: Target,
  ctr: MousePointerClick,
  balanced: Scale,
}

const OPTION_DESCRIPTION: Record<OptionId, string> = {
  seo: "Strongest keyword relevance.",
  ctr: "More compelling, still natural.",
  balanced: "Blends SEO, readability & CTR.",
}

function CopyButton({ text }: { text: string }) {
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
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

function Fact({ label, value, tone }: { label: string; value: string; tone?: "positive" | "negative" | "neutral" }) {
  return (
    <div className="p-2.5 rounded-lg bg-card/40 border border-border/30">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">{label}</p>
      <p
        className={cn(
          "text-xs sm:text-sm font-medium",
          tone === "positive" && "text-green-400",
          tone === "negative" && "text-muted-foreground",
          tone === "neutral" && "text-foreground",
          !tone && "text-foreground",
        )}
      >
        {value}
      </p>
    </div>
  )
}

function TitleCard({
  title,
  onRegenerate,
  isRegenerating,
  delay,
}: {
  title: GeneratedTitle
  onRegenerate: () => void
  isRegenerating: boolean
  delay: number
}) {
  const Icon = OPTION_ICON[title.id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl border border-border/50 bg-background/50 p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <Icon className="w-3.5 h-3.5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base">{title.label}</h4>
            <p className="text-[11px] text-muted-foreground hidden sm:block">{OPTION_DESCRIPTION[title.id]}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={title.text} />
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isRegenerating}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50 transition-colors disabled:opacity-50 shrink-0"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", isRegenerating && "animate-spin")} />
            Regenerate
          </button>
        </div>
      </div>

      <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3 p-3 rounded-lg bg-card/40 border border-border/30">
        {title.text}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Fact label="Character Count" value={`${title.length} chars`} />
        <div className="p-2.5 rounded-lg bg-card/40 border border-border/30">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Length Status</p>
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border",
              LENGTH_STATUS_STYLES[title.lengthStatus],
            )}
          >
            {title.lengthStatus}
          </span>
        </div>
        <Fact
          label="Primary Keyword"
          value={title.keywordIncluded ? "Included" : "Not Included"}
          tone={title.keywordIncluded ? "positive" : "negative"}
        />
        <Fact
          label="Brand"
          value={title.brandIncluded ? "Included" : "Not Included"}
          tone={title.brandIncluded ? "positive" : "negative"}
        />
      </div>
    </motion.div>
  )
}

export function MetaTitleResult({ titles, onRegenerate, regeneratingId }: MetaTitleResultProps) {
  const list: GeneratedTitle[] = [titles.seo, titles.ctr, titles.balanced]

  return (
    <div className="space-y-4">
      {list.map((title, index) => (
        <TitleCard
          key={title.id}
          title={title}
          onRegenerate={() => onRegenerate(title.id)}
          isRegenerating={regeneratingId === title.id}
          delay={index * 0.05}
        />
      ))}
    </div>
  )
}
