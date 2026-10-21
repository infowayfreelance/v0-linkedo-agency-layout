"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Sparkles, MapPin, ChevronDown, Wand2, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { MainShell } from "./main-shell"
import { Button } from "@/components/ui/button"

// Loaded on demand — not needed until "Free Website Audit" is clicked, so
// keeping it out of every page's initial JS trims unused JS.
const WebsiteAuditModal = dynamic(
  () => import("@/components/ui/website-audit-modal").then((mod) => mod.WebsiteAuditModal),
  { ssr: false },
)

const homeLink = { href: "/", label: "Home" }
const aboutLink = { href: "/about", label: "About" }
const contactLink = { href: "/contact", label: "Contact" }

// Rendered between the Locations and Free AI Tools dropdowns.
const midNavLinks = [{ href: "/case-studies", label: "Case Studies" }]

// Rendered after the Free AI Tools dropdown, before Contact.
const endNavLinks = [{ href: "/blog", label: "Blog" }]

const serviceLinks = [
  { label: "Web Development", href: "/web-development" },
  { label: "SEO", href: "/seo" },
  { label: "Google Ads / PPC", href: "/google-ads" },
  { label: "Meta Ads", href: "/meta-ads" },
  { label: "Branding", href: "/branding" },
  { label: "Consulting", href: "/consulting" },
]

const locationCities = [
  { label: "London", href: "/london" },
  { label: "Birmingham", href: "/birmingham" },
  { label: "Bristol", href: "/bristol" },
  { label: "Leicester", href: "/leicester" },
  { label: "Sheffield", href: "/sheffield" },
  { label: "Manchester", href: "/manchester" },
  { label: "Leeds", href: "/leeds" },
  { label: "Edinburgh", href: "/edinburgh" },
  { label: "Glasgow", href: "/glasgow" },
  { label: "Liverpool", href: "/liverpool" },
  { label: "Nottingham", href: "/nottingham" },
  { label: "Newcastle", href: "/newcastle" },
  { label: "Shropshire", href: "/shropshire" },
  { label: "Devon", href: "/devon" },
  { label: "Midlands", href: "/midland" },
]

const aiTools = [
  { label: "All Free Tools", href: "/free-ai-tools-online" },
  { label: "Blog Outline Generator", href: "/blog-outline-generator" },
  { label: "Meta Description Generator", href: "/meta-description-generator" },
  { label: "Meta Title Generator", href: "/meta-title-generator" },
  { label: "UTM Builder", href: "/utm-builder" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)
  const [hasOpenedAuditModal, setHasOpenedAuditModal] = useState(false)
  const [isServicesMegaOpen, setIsServicesMegaOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isLocationsMegaOpen, setIsLocationsMegaOpen] = useState(false)
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false)
  const [isAiToolsMegaOpen, setIsAiToolsMegaOpen] = useState(false)
  const [isMobileAiToolsOpen, setIsMobileAiToolsOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const aiToolsRef = useRef<HTMLDivElement>(null)

  const closeAllMegaMenus = () => {
    setIsServicesMegaOpen(false)
    setIsLocationsMegaOpen(false)
    setIsAiToolsMegaOpen(false)
  }

  const toggleServicesMega = () => {
    setIsServicesMegaOpen((prev) => !prev)
    setIsLocationsMegaOpen(false)
    setIsAiToolsMegaOpen(false)
  }

  const toggleLocationsMega = () => {
    setIsLocationsMegaOpen((prev) => !prev)
    setIsServicesMegaOpen(false)
    setIsAiToolsMegaOpen(false)
  }

  const toggleAiToolsMega = () => {
    setIsAiToolsMegaOpen((prev) => !prev)
    setIsServicesMegaOpen(false)
    setIsLocationsMegaOpen(false)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev)
    setIsMobileLocationsOpen(false)
    setIsMobileAiToolsOpen(false)
  }

  const toggleMobileLocations = () => {
    setIsMobileLocationsOpen((prev) => !prev)
    setIsMobileServicesOpen(false)
    setIsMobileAiToolsOpen(false)
  }

  const toggleMobileAiTools = () => {
    setIsMobileAiToolsOpen((prev) => !prev)
    setIsMobileServicesOpen(false)
    setIsMobileLocationsOpen(false)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      closeAllMegaMenus()
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setIsServicesMegaOpen(false)
      }
      if (locationsRef.current && !locationsRef.current.contains(target)) {
        setIsLocationsMegaOpen(false)
      }
      if (aiToolsRef.current && !aiToolsRef.current.contains(target)) {
        setIsAiToolsMegaOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      closeAllMegaMenus()
      setIsMobileServicesOpen(false)
      setIsMobileLocationsOpen(false)
      setIsMobileAiToolsOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px"
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isMobileMenuOpen])

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent",
        )}
      >
        <MainShell>
          <nav className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedo%20Logo-2ktZ7qcYVdGvooWw3nwry3bnN2kV5C.png"
                alt="Linkedo - Connect, Grow, Succeed"
                width={768}
                height={215}
                loading="eager"
                sizes="200px"
                className="h-8 sm:h-10 lg:h-12 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href={homeLink.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
              >
                {homeLink.label}
              </Link>

              <Link
                href={aboutLink.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
              >
                {aboutLink.label}
              </Link>

              {/* Services mega menu trigger */}
              <div className="relative" ref={servicesRef}>
                <div
                  className={cn(
                    "flex items-center rounded-md hover:bg-secondary/50 transition-colors",
                    isServicesMegaOpen && "bg-secondary/50",
                  )}
                >
                  <Link
                    href="/services"
                    className={cn(
                      "pl-3 pr-1.5 py-2 text-sm transition-colors",
                      isServicesMegaOpen ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    Services
                  </Link>
                  <button
                    onClick={toggleServicesMega}
                    aria-label="Toggle Services menu"
                    aria-expanded={isServicesMegaOpen}
                    className={cn(
                      "pr-3 pl-1 py-2 transition-colors",
                      isServicesMegaOpen ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform duration-200", isServicesMegaOpen && "rotate-180")}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isServicesMegaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 z-[200] p-3"
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesMegaOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-transparent hover:border-border/50 transition-all duration-150 group"
                        >
                          <Briefcase className="w-3.5 h-3.5 text-primary shrink-0 opacity-70 group-hover:opacity-100" />
                          {service.label}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setIsServicesMegaOpen(false)}
                        className="mt-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-all"
                      >
                        View all services
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Locations mega menu trigger */}
              <div className="relative" ref={locationsRef}>
                <div
                  className={cn(
                    "flex items-center rounded-md hover:bg-secondary/50 transition-colors",
                    isLocationsMegaOpen && "bg-secondary/50",
                  )}
                >
                  <Link
                    href="/locations"
                    className={cn(
                      "pl-3 pr-1.5 py-2 text-sm transition-colors",
                      isLocationsMegaOpen ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    Locations
                  </Link>
                  <button
                    onClick={toggleLocationsMega}
                    aria-label="Toggle Locations menu"
                    aria-expanded={isLocationsMegaOpen}
                    className={cn(
                      "pr-3 pl-1 py-2 transition-colors",
                      isLocationsMegaOpen ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform duration-200", isLocationsMegaOpen && "rotate-180")}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isLocationsMegaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 z-[200] p-5"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">UK Locations</span>
                        </div>
                        <Link
                          href="/locations"
                          onClick={() => setIsLocationsMegaOpen(false)}
                          className="text-xs text-primary hover:underline"
                        >
                          View all locations
                        </Link>
                      </div>

                      {/* City grid */}
                      <div className="grid grid-cols-3 gap-1.5">
                        {locationCities.map((city) => {
                          const Icon = MapPin
                          return (
                            <Link
                              key={city.href}
                              href={city.href}
                              onClick={() => setIsLocationsMegaOpen(false)}
                              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-transparent hover:border-border/50 transition-all duration-150 group"
                            >
                              <Icon className="w-3 h-3 text-primary shrink-0 opacity-70 group-hover:opacity-100" />
                              {city.label}
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {midNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
                >
                  {link.label}
                </Link>
              ))}

              {/* AI Tools dropdown trigger */}
              <div className="relative" ref={aiToolsRef}>
                <button
                  onClick={toggleAiToolsMega}
                  aria-expanded={isAiToolsMegaOpen}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm transition-colors rounded-md hover:bg-secondary/50",
                    isAiToolsMegaOpen ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  Free AI Tools
                  <ChevronDown
                    className={cn("w-3.5 h-3.5 transition-transform duration-200", isAiToolsMegaOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence>
                  {isAiToolsMegaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 z-[200] p-3"
                    >
                      {aiTools.map((tool) => (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={() => setIsAiToolsMegaOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-transparent hover:border-border/50 transition-all duration-150 group"
                        >
                          <Wand2 className="w-3.5 h-3.5 text-primary shrink-0 opacity-70 group-hover:opacity-100" />
                          {tool.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[...endNavLinks, contactLink].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={() => {
                  setHasOpenedAuditModal(true)
                  setIsAuditModalOpen(true)
                }}
                className="relative overflow-hidden bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-medium px-6 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="relative z-10">Free Website Audit</span>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-foreground relative z-[110] hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </MainShell>
      </header>

      {isMounted &&
        createPortal(
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <>
                {/* Backdrop with blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="fixed inset-0 bg-background/95 backdrop-blur-2xl lg:hidden z-[105]"
                  onClick={handleLinkClick}
                />

                {/* Menu content */}
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                    mass: 0.8,
                    opacity: { duration: 0.2 },
                  }}
                  className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-card/95 via-card/90 to-background/95 backdrop-blur-2xl lg:hidden z-[105] border-l border-border/50 shadow-2xl"
                >
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
                    {/* Menu Header */}
                    <div className="mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="flex items-center gap-2 mb-2"
                      >
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">Navigation</span>
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="text-2xl font-bold text-foreground"
                      >
                        Explore Linkedo
                      </motion.h2>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 space-y-2">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                      >
                        <Link
                          href={homeLink.href}
                          onClick={handleLinkClick}
                          className="group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {homeLink.label}
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12, duration: 0.3, ease: "easeOut" }}
                      >
                        <Link
                          href={aboutLink.href}
                          onClick={handleLinkClick}
                          className="group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {aboutLink.label}
                          </span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>

                      {/* Services accordion */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.14, duration: 0.3, ease: "easeOut" }}
                      >
                        <button
                          onClick={toggleMobileServices}
                          className="w-full group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              Services
                            </span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-200",
                              isMobileServicesOpen && "rotate-180 text-primary",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 p-3 rounded-xl bg-secondary/20 border border-border/30 flex flex-col gap-1.5">
                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all"
                                  >
                                    <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" />
                                    {service.label}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={handleLinkClick}
                                  className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-all mt-1"
                                >
                                  View all services
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Locations accordion */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18, duration: 0.3, ease: "easeOut" }}
                      >
                        <button
                          onClick={toggleMobileLocations}
                          className="w-full group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              Locations
                            </span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-200",
                              isMobileLocationsOpen && "rotate-180 text-primary",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileLocationsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 p-3 rounded-xl bg-secondary/20 border border-border/30 grid grid-cols-2 gap-1.5">
                                {locationCities.map((city) => {
                                  const Icon = MapPin
                                  return (
                                    <Link
                                      key={city.href}
                                      href={city.href}
                                      onClick={handleLinkClick}
                                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all"
                                    >
                                      <Icon className="w-3 h-3 text-primary shrink-0" />
                                      {city.label}
                                    </Link>
                                  )
                                })}
                                <Link
                                  href="/locations"
                                  onClick={handleLinkClick}
                                  className="col-span-2 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-primary border border-primary/30 hover:bg-primary/10 transition-all mt-1"
                                >
                                  View all locations
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {midNavLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.22 + index * 0.04, duration: 0.3, ease: "easeOut" }}
                        >
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
                            className="group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                          >
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {link.label}
                            </span>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}

                      {/* AI Tools accordion */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                      >
                        <button
                          onClick={toggleMobileAiTools}
                          className="w-full group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <Wand2 className="w-4 h-4 text-primary" />
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              Free AI Tools
                            </span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-200",
                              isMobileAiToolsOpen && "rotate-180 text-primary",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileAiToolsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 p-3 rounded-xl bg-secondary/20 border border-border/30 flex flex-col gap-1.5">
                                {aiTools.map((tool) => (
                                  <Link
                                    key={tool.href}
                                    href={tool.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all"
                                  >
                                    <Wand2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                    {tool.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {[...endNavLinks, contactLink].map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.22 + index * 0.04, duration: 0.3, ease: "easeOut" }}
                        >
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
                            className="group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                          >
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {link.label}
                            </span>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    {/* CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="mt-8 pt-6 border-t border-border/50"
                    >
                      <Button
                        onClick={() => {
                          setHasOpenedAuditModal(true)
                          setIsAuditModalOpen(true)
                          handleLinkClick()
                        }}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-cyan-400 to-primary text-primary-foreground font-semibold py-6 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 bg-[length:200%] hover:bg-right group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Free Website Audit
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>

                      <p className="text-center text-sm text-muted-foreground mt-4">Get your free website analysis</p>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}

      {/* Website Audit Modal */}
      {hasOpenedAuditModal && (
        <WebsiteAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
      )}
    </>
  )
}
