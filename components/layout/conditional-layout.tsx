"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingQuoteButton } from "@/components/ui/floating-quote-button"
import { CookieBanner } from "@/components/cookie-consent/cookie-banner"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isTeamPage = pathname?.startsWith("/team")
  const isOfferPage = pathname?.startsWith("/offer")

  if (isTeamPage || isOfferPage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingQuoteButton />
      <CookieBanner />
    </>
  )
}
