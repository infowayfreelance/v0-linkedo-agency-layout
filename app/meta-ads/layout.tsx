import type { Metadata } from "next"

const pageTitle = "Meta Ads Management UK: Facebook & Instagram | Linkedo"
const pageDescription = "Linkedo manages Facebook and Instagram ads for UK businesses: audience targeting, creative testing, conversion tracking and clear reporting."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://linkedo.co.uk/meta-ads" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://linkedo.co.uk/meta-ads",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Digital Marketing Agency",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.jpg"],
  },
}

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
