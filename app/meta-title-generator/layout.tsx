import type { Metadata } from "next"

const TITLE = "Free Meta Title Generator for SEO Titles | Linkedo"
const DESCRIPTION =
  "Create SEO title ideas for pages, posts and products. Compare suggestions, check title length and preview how they may appear in search results."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://linkedo.co.uk/meta-title-generator" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://linkedo.co.uk/meta-title-generator",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Free Meta Title Generator",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
}

export default function MetaTitleGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
