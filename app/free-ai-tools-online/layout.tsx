import type { Metadata } from "next"

const TITLE = "Free SEO & Marketing Tools Online | Linkedo"
const DESCRIPTION =
  "Use Linkedo's free SEO and marketing tools to write page titles, create descriptions, plan blog posts, and build campaign links. Choose a tool to get started."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://linkedo.co.uk/free-ai-tools-online" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://linkedo.co.uk/free-ai-tools-online",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Free SEO and Marketing Tools",
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

export default function FreeAIToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
