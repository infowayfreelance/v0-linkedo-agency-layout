import type { Metadata } from "next"

const TITLE = "Free Meta Description Generator for SEO | Linkedo"
const DESCRIPTION =
  "Free meta description generator: add your keyword, page type and search intent to get three descriptions with live character counts. By Linkedo."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/meta-description-generator" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://linkedo.co.uk/meta-description-generator",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Free Meta Description Generator",
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

export default function MetaDescriptionGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
