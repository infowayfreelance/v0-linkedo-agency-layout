import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free UTM Builder | Google Analytics Campaign URL Generator",
  description:
    "Create free UTM tracking URLs for Google Analytics and GA4. Add source, medium, campaign, term and content to track marketing campaigns accurately.",
  alternates: { canonical: "/utm-builder" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free UTM Builder | Google Analytics Campaign URL Generator",
    description:
      "Create free UTM tracking URLs for Google Analytics and GA4. Add source, medium, campaign, term and content to track marketing campaigns accurately.",
    url: "https://linkedo.co.uk/utm-builder",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Free UTM Builder",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free UTM Builder | Google Analytics Campaign URL Generator",
    description:
      "Create free UTM tracking URLs for Google Analytics and GA4. Add source, medium, campaign, term and content to track marketing campaigns accurately.",
    images: ["/og-image.jpg"],
  },
}

export default function UTMBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
