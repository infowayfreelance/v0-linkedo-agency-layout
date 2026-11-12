"use client"

import { useEffect, useState, useRef } from "react"
import { Check, MessageCircle, ChevronDown, ChevronUp, Zap, Shield, Rocket, Globe, Clock, ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/447927969991?text=Hi%20Linkedo!%20I%27d%20like%20to%20claim%20the%20399%20SAR%20web%20design%20offer."
const OFFER_DURATION_MS = 24 * 60 * 60 * 1000
const STORAGE_KEY = "linkedo_offer_deadline"

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_DURATION_MS
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const parsed = parseInt(stored, 10)
    if (!isNaN(parsed) && parsed > Date.now()) return parsed
  }
  const deadline = Date.now() + OFFER_DURATION_MS
  localStorage.setItem(STORAGE_KEY, deadline.toString())
  return deadline
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const deadlineRef = useRef<number | null>(null)

  useEffect(() => {
    deadlineRef.current = getDeadline()

    const tick = () => {
      const diff = (deadlineRef.current ?? 0) - Date.now()
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const totalSeconds = Math.floor(diff / 1000)
      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

const included = [
  "5-page professional website (Home, About, Services, Contact + 1 more)",
  "Mobile-responsive design — perfect on every device",
  "Fast load speed (Core Web Vitals optimised)",
  "Custom branding applied — your colours, logo, and fonts",
  "Contact form connected to your email or WhatsApp",
  "Basic on-page SEO setup (titles, meta descriptions, sitemap)",
  "Google Analytics integration",
  "1 round of revisions included",
  "Delivered within 10 business days",
]

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "WhatsApp Us Today",
    desc: "Send us a message and we'll respond within the hour to discuss your requirements and confirm your spot.",
  },
  {
    number: "02",
    icon: Globe,
    title: "We Build Your Site",
    desc: "You share your brand assets and content. Our team designs and develops your professional website in 10 business days.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Grow",
    desc: "We hand over a fully working site you own completely. No monthly fees, no hidden costs — just results.",
  },
]

const reasons = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    desc: "399 SAR total. That's it. No monthly retainers, no hosting lock-in, no surprise invoices.",
  },
  {
    icon: Zap,
    title: "10-Day Turnaround",
    desc: "Most agencies take 6–12 weeks. We deliver a professional, conversion-ready website in 10 business days.",
  },
  {
    icon: Globe,
    title: "London-based agency",
    desc: "Linkedo is a London-based digital marketing agency serving businesses across the UK remotely.",
  },
  {
    icon: Clock,
    title: "You Own Everything",
    desc: "Full ownership of your domain, hosting, and code. We hand it all over on delivery — no strings attached.",
  },
]



const faqs = [
  {
    q: "Is this price really 399 SAR total?",
    a: "Yes — 399 SAR covers the complete 5-page website design and build. There are no hidden fees, no monthly charges, and no upsells. What you see is what you pay.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your logo (or we can use text), your brand colours if you have them, and any text/images you'd like on the site. If you don't have content ready, we can guide you through what we need.",
  },
  {
    q: "How long does delivery take?",
    a: "We deliver within 10 business days from the moment you provide your content and approve the design direction. Most projects are done in 7–8 days.",
  },
  {
    q: "What happens after the website is live?",
    a: "You own everything — the domain, hosting account, and code. We hand it all over on delivery. Optional ongoing support packages are available if you want us to manage updates.",
  },
  {
    q: "Can I get more than 5 pages?",
    a: "Yes — additional pages can be added at a small per-page cost. Discuss this with us on WhatsApp and we'll give you a total price upfront before you commit.",
  },
  {
    q: "Do you work with businesses outside the UK and Saudi Arabia?",
    a: "Absolutely. Linkedo works with businesses globally. This offer is available worldwide — all work is done remotely.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-white font-medium hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-amber-400" /> : <ChevronDown className="w-5 h-5 shrink-0 text-amber-400" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

function CountdownBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 min-w-[72px] text-center">
        <span className="text-3xl sm:text-4xl font-bold text-amber-400 tabular-nums">{value}</span>
      </div>
      <span className="text-xs text-white/50 mt-2 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function OfferPage() {
  const { hours, minutes, seconds } = useCountdown()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1530 40%, #0a0f1e 100%)" }}>
      {/* Sticky WhatsApp button — mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 sm:hidden flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all active:scale-95"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp Us
      </a>

      {/* Mini header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div>
            <span className="text-white font-bold text-xl tracking-tight">Linkedo</span>
            <span className="hidden sm:inline text-white/40 text-sm ml-3">Professional Web Design</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm px-4 py-2 rounded-full transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Claim Offer
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">

        {/* ── HERO ── */}
        <section className="pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Clock className="w-3.5 h-3.5" />
            Limited-Time Offer — Ends Soon
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional Website for Your Business —{" "}
            <span className="text-amber-400">One Flat Fee</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Get a fast, mobile-ready, SEO-optimised 5-page website built by a London-based agency. No monthly fees. No hidden costs. Delivered in 10 days.
          </p>

          {/* Price block */}
          <div className="inline-block relative mb-10">
            <div className="bg-white/5 border border-amber-400/20 rounded-2xl px-10 py-8">
              <div className="flex items-baseline justify-center gap-4 mb-2">
                <span className="text-white/40 text-2xl line-through">1,200 SAR</span>
                <span className="text-5xl sm:text-6xl font-bold text-amber-400">399 SAR</span>
              </div>
              <div className="inline-block bg-amber-400 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Save 67% — Today Only
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Offer expires in</p>
            <div className="flex items-center justify-center gap-4">
              {mounted ? (
                <>
                  <CountdownBlock value={pad(hours)} label="Hours" />
                  <span className="text-amber-400 text-3xl font-bold mb-6">:</span>
                  <CountdownBlock value={pad(minutes)} label="Minutes" />
                  <span className="text-amber-400 text-3xl font-bold mb-6">:</span>
                  <CountdownBlock value={pad(seconds)} label="Seconds" />
                </>
              ) : (
                <>
                  <CountdownBlock value="23" label="Hours" />
                  <span className="text-amber-400 text-3xl font-bold mb-6">:</span>
                  <CountdownBlock value="59" label="Minutes" />
                  <span className="text-amber-400 text-3xl font-bold mb-6">:</span>
                  <CountdownBlock value="59" label="Seconds" />
                </>
              )}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all hover:shadow-green-500/30 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Claim My Website — 399 SAR
          </a>
          <p className="text-white/30 text-sm mt-4">No commitment needed — just a quick chat on WhatsApp</p>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Everything You Get</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">What's Included in Your 399 SAR Website</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-8">
                  <div className="text-6xl font-black text-white/5 absolute top-4 right-6 leading-none select-none">{step.number}</div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── WHY THIS OFFER ── */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Why Choose Linkedo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Why This Offer is Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        

        {/* ── FAQs ── */}
        <section className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 border-t border-white/10 text-center">
          <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/20 rounded-3xl px-6 sm:px-12 py-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Website?
            </h2>
            <p className="text-white/60 text-lg mb-3 max-w-xl mx-auto">
              This offer is only available for a limited time. Lock in your 399 SAR rate before the timer runs out.
            </p>

            {/* Price reminder */}
            <div className="flex items-baseline justify-center gap-3 mb-8">
              <span className="text-white/40 text-xl line-through">1,200 SAR</span>
              <span className="text-4xl font-bold text-amber-400">399 SAR</span>
              <span className="bg-amber-400 text-black text-xs font-bold px-2 py-1 rounded-full">Save 67%</span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all hover:shadow-green-500/30 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Message Us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-white/30 text-sm mt-5">London-based agency · 10-day delivery · Full ownership guaranteed</p>
          </div>
        </section>

      </main>

      {/* Footer strip */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Linkedo · Registered in England & Wales · 483 Green Lanes, London, N13 4BS
        </p>
      </footer>
    </div>
  )
}
