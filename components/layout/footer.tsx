"use client"

import Link from "next/link"
import Image from "next/image"
import { MainShell } from "./main-shell"
import { MapPin, Mail, Phone } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/web-development", label: "Web Development" },
  { href: "/seo", label: "SEO Optimization" },
  { href: "/google-ads", label: "Google Ads" },
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/branding", label: "Branding" },
  { href: "/consulting", label: "Consulting" },
]

const locations = [
  { city: "483 Green Lanes, London N13 4BS, United Kingdom" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <MainShell className="py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedo%20Logo-2ktZ7qcYVdGvooWw3nwry3bnN2kV5C.png"
                alt="Linkedo - Connect, Grow, Succeed"
                width={768}
                height={215}
                sizes="200px"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Web, SEO & Ads that actually bring leads. We help B2B businesses grow with data-driven digital marketing
              strategies.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {locations.map((location) => (
                <div key={location.city} className="flex items-start gap-2">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <span>{location.city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@linkedo.co.uk"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  info@linkedo.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+447927969991"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  +44 7927 969991
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Book a Strategy Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            ©{new Date().getFullYear()} Linkedo LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={() => {
                const fn = (window as unknown as Record<string, unknown>).__openCookieSettings
                if (typeof fn === "function") fn()
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </MainShell>
    </footer>
  )
}
