import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Ads Management UK | Search, Shopping, PMax | Linkedo",
  description:
    "Google Ads management for UK businesses: Search, Shopping, Display and Performance Max, plus tracking and clear reporting. Book a free ads audit.",
  alternates: { canonical: "https://linkedo.co.uk/google-ads" },
  openGraph: { title: "Google Ads Management UK | Search, Shopping, PMax | Linkedo", description: "Google Ads management for UK businesses: Search, Shopping, Display and Performance Max, plus tracking and clear reporting. Book a free ads audit.", url: "https://linkedo.co.uk/google-ads" },
  twitter: { card: "summary_large_image", title: "Google Ads Management UK | Search, Shopping, PMax | Linkedo", description: "Google Ads management for UK businesses: Search, Shopping, Display and Performance Max, plus tracking and clear reporting. Book a free ads audit." },
}

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
