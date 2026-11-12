"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainShell } from "@/components/layout/main-shell"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Chip } from "@/components/ui/chip"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import { QuotationModal } from "@/components/ui/quotation-modal"

interface HeroSectionProps {
  onBookCall?: () => void
}

const barHeights = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]

const keywords = [
  { kw: "seo agency uk", pos: 1, change: 3 },
  { kw: "google ads agency", pos: 2, change: 5 },
  { kw: "web design london", pos: 4, change: 8 },
  { kw: "digital marketing uk", pos: 3, change: 2 },
]

export function HeroSection({ onBookCall }: HeroSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.72 0.19 195) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        {/* Floating geometric accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[12%] w-20 h-20 border border-primary/20 rounded-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-[8%] w-16 h-16 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-[18%] w-3 h-3 bg-primary/50 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2/3 right-[22%] w-2 h-2 bg-cyan-400/50 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[40%] w-1.5 h-1.5 bg-accent/60 rounded-full"
          />
        </div>

        <MainShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Chip variant="primary" className="mb-6">
                  Trusted by 100+ UK Businesses
                </Chip>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance font-[family-name:var(--font-jost)]"
              >
                Digital Marketing Agency UK That{" "}
                <span className="text-gradient-primary">Drives Real Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              >
                Linkedo helps B2B and B2C businesses across the UK grow through SEO, web design,
                Google Ads, and data-driven digital marketing strategies focused on leads, sales,
                and long-term ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <AnimatedButton size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <Link href="/services">
                  <AnimatedButton variant="secondary" size="lg">
                    View Services
                  </AnimatedButton>
                </Link>
              </motion.div>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  No long-term contracts
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  London-based agency
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Results-focused
                </span>
              </motion.div>
            </div>

            {/* Right: Premium analytics dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Floating metric pills */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1.5 shadow-lg glow-primary-sm"
              >
                <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-semibold text-green-400">+156% Traffic</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 shadow-lg"
              >
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold text-accent">5.2x ROAS</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-6 z-20 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1.5 shadow-lg"
              >
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold text-cyan-400">847 Leads</span>
              </motion.div>

              {/* Main dashboard card */}
              <div className="relative rounded-2xl overflow-hidden bg-card/60 border border-border/50 p-1 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/10 rounded-2xl" />

                <div className="relative rounded-xl bg-background/90 overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Analytics Dashboard</div>
                    <div className="text-xs text-primary font-medium">● Live</div>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Traffic Growth", value: "+156%", color: "text-primary" },
                        { label: "Leads / Month", value: "847", color: "text-green-400" },
                        { label: "Avg. ROAS", value: "5.2x", color: "text-accent" },
                      ].map((kpi) => (
                        <div
                          key={kpi.label}
                          className="p-3 rounded-lg bg-card/60 border border-border/40 text-center"
                        >
                          <div className={`text-xl font-bold ${kpi.color}`}>{kpi.value}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{kpi.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Organic Traffic — Last 12 months</span>
                        <span className="text-xs text-green-400 font-medium">↑ 156%</span>
                      </div>
                      <div className="h-28 rounded-lg bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-border/30 flex items-end justify-around px-3 pb-3 pt-2">
                        {barHeights.map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.6 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                            className="w-4 rounded-t-sm bg-gradient-to-t from-primary/80 to-cyan-400/80"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Keyword rankings mini-table */}
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 font-medium">Keyword Rankings</div>
                      <div className="space-y-1.5">
                        {keywords.map((row, i) => (
                          <motion.div
                            key={row.kw}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                            className="flex items-center justify-between px-3 py-1.5 rounded-md bg-card/40 border border-border/30"
                          >
                            <span className="text-[11px] text-foreground/80 truncate flex-1">{row.kw}</span>
                            <div className="flex items-center gap-2 ml-2 shrink-0">
                              <span className="text-[11px] font-bold text-foreground">#{row.pos}</span>
                              <span className="text-[10px] text-green-400 font-medium">▲{row.change}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-border/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "10M+", label: "Leads Generated" },
                { value: "5x", label: "Average ROI" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    <span className="text-gradient-primary">{stat.value}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </MainShell>
      </section>

      <QuotationModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  )
}
