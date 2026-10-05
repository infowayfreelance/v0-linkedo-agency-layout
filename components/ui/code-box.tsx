"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBoxProps {
  children: string
  label?: string
  className?: string
}

export function CodeBox({ children, label, className }: CodeBoxProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      {label && (
        <span className="absolute -top-2.5 left-3 px-2 text-xs font-medium text-primary bg-background">{label}</span>
      )}
      <div className="relative p-4 rounded-lg bg-background border border-border/50 group-hover:border-primary/30 transition-colors">
        <code className="block text-sm font-mono text-foreground whitespace-pre-wrap break-all">{children}</code>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
