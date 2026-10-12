"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, RefreshCw, Scissors, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { classifyLength } from "@/lib/meta-title-generator/length-status"
import { DESKTOP_PIXEL_GUIDANCE, MOBILE_PIXEL_GUIDANCE, estimatePixelWidth } from "@/lib/meta-title-generator/pixel-width"
import { shortenTitle } from "@/lib/meta-title-generator/generator"
import type { GeneratedTitle, GeneratedTitleSet, LengthStatus, OptionId } from "@/lib/meta-title-generator/types"

interface MetaTitleResultProps {
  titles: GeneratedTitleSet
  values: Record<OptionId, string>
  keyword: string
  onValueChange: (id: OptionId, text: string) => void
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

function SearchPreview({ text, device }: { text: string; device: "desktop" | "mobile" }) {
  const maxWidth = device === "desktop" ? DESKTOP_PIXEL_GUIDANCE : MOBILE_PIXEL_GUIDANCE
  return (
    <div className="rounded-lg border border-border/30 bg-white p-3">
      <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-1.5">
        {device === "desktop" ? "Desktop Preview" : "Mobile Preview"}
      </p>
      <p
        className="text-[#1a0dab] text-base leading-snug truncate font-arial"
        style={{ maxWidth: `${maxWidth}px`, fontFamily: "Arial, sans-serif" }}
        title={text}
      >
        {text || "Your title"}
      </p>
      <p className="text-[#006621] text-xs mt-0.5">linkedo.co.uk</p>
    </div>
  )
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

function TitleCard({
  title,
  value,
  keyword,
  onChange,
  onRegenerate,
  isRegenerating,
  delay,
}: {
  title: GeneratedTitle
  value: string
  keyword: string
  onChange: (text: string) => void
  onRegenerate: () => void
  isRegenerating: boolean
  delay: number
}) {
  const [shortenNotice, setShortenNotice] = useState<string | null>(null)

  const stats = useMemo(() => {
    const length = value.length
    const pixelWidth = estimatePixelWidth(value)
    const keywordIncluded = keyword ? value.toLowerCase().includes(keyword.toLowerCase()) : false
    return {
      length,
      pixelWidth,
      lengthStatus: classifyLength(length),
      keywordIncluded,
      overflowsDesktop: pixelWidth > DESKTOP_PIXEL_GUIDANCE,
      overflowsMobile: pixelWidth > MOBILE_PIXEL_GUIDANCE,
    }
  }, [value, keyword])

  const handleShorten = () => {
    const result = shortenTitle(value)
    if (result.changed) {
      onChange(result.text)
      setShortenNotice(null)
    } else {
      setShortenNotice("This title is already as short as it can be without losing its meaning.")
      setTimeout(() => setShortenNotice(null), 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl border border-border/50 bg-background/50 p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div>
          <h4 className="font-semibold text-foreground text-sm sm:text-base">{title.label}</h4>
          <p className="text-[11px] text-muted-foreground">{title.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={value} />
          <button
            type="button"
            onClick={handleShorten}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50 transition-colors shrink-0"
            title="Shorten"
          >
            <Scissors className="w-3.5 h-3.5" />
            Shorten
          </button>
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

      <label htmlFor={`title-edit-${title.id}`} className="sr-only">
        Edit {title.label} title
      </label>
      <textarea
        id={`title-edit-${title.id}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        maxLength={160}
        className="w-full text-sm sm:text-base text-foreground leading-relaxed mb-1 p-3 rounded-lg bg-card/40 border border-border/30 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
      />
      {shortenNotice && (
        <p className="flex items-center gap-1.5 text-xs text-amber-400 mb-3">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          {shortenNotice}
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <Fact label="Character Count" value={`${stats.length} chars`} />
        <div className="p-2.5 rounded-lg bg-card/40 border border-border/30">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Length (Guidance)</p>
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border",
              LENGTH_STATUS_STYLES[stats.lengthStatus],
            )}
          >
            {stats.lengthStatus}
          </span>
        </div>
        <Fact
          label="Keyword"
          value={stats.keywordIncluded ? "Included" : "Not Included"}
          tone={stats.keywordIncluded ? "positive" : "negative"}
        />
        <Fact
          label="Est. Pixel Width"
          value={`${stats.pixelWidth}px`}
          tone={stats.overflowsDesktop ? "negative" : "positive"}
        />
      </div>

      {(stats.overflowsDesktop || stats.overflowsMobile) && (
        <p className="flex items-center gap-1.5 text-xs text-amber-400 mb-4">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          This title may be wide enough that Google shortens it on {stats.overflowsDesktop ? "desktop" : "mobile"} —
          an estimate, not a guarantee.
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        <SearchPreview text={value} device="desktop" />
        <SearchPreview text={value} device="mobile" />
      </div>
    </motion.div>
  )
}

export function MetaTitleResult({ titles, values, keyword, onValueChange, onRegenerate, regeneratingId }: MetaTitleResultProps) {
  return (
    <div className="space-y-4">
      {titles.map((title, index) => (
        <TitleCard
          key={title.id}
          title={title}
          value={values[title.id] ?? title.text}
          keyword={keyword}
          onChange={(text) => onValueChange(title.id, text)}
          onRegenerate={() => onRegenerate(title.id)}
          isRegenerating={regeneratingId === title.id}
          delay={index * 0.05}
        />
      ))}
    </div>
  )
}
