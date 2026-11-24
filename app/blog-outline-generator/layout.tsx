import type { Metadata } from "next"

const title = "Free Blog Outline Generator for SEO Blog Posts | Linkedo"
const description = "Free blog outline generator: enter a topic, keyword, search intent, content type and tone to get a structured H2/H3 outline you can edit and write from."
const canonical = "https://linkedo.co.uk/blog-outline-generator"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description },
  twitter: { card: "summary", title, description },
}

export default function BlogOutlineGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
