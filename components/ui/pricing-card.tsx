"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { AnimatedButton } from "./animated-button"
import { Badge } from "./badge"

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  ctaText?: string
  ctaHref?: string
  onCtaClick?: () => void
  className?: string
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  badge,
  ctaText = "Get Started",
  ctaHref,
  onCtaClick,
  className,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-2xl p-6 lg:p-8",
        "bg-card/50 border border-border/50",
        "transition-all duration-300",
        highlighted && "border-primary/50 bg-card/80 shadow-lg shadow-primary/10",
        className,
      )}
    >
      {/* Glow effect for highlighted */}
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          {badge && <Badge className="bg-primary/20 text-primary border-primary/30">{badge}</Badge>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {period && <span className="text-muted-foreground">{period}</span>}
        </div>

        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <AnimatedButton
          variant={highlighted ? "primary" : "secondary"}
          className="w-full"
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText}
        </AnimatedButton>
      </div>
    </motion.div>
  )
}
