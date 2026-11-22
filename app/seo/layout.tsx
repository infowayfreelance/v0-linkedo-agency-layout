import type { Metadata } from "next"

const title = "SEO Services UK: Technical, Local & On-Page SEO | Linkedo"
const description = "SEO services for UK businesses: technical fixes, on-page optimisation, local SEO, content and white-hat link building, with monthly performance reports."
const canonical = "https://linkedo.co.uk/seo"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website" },
  twitter: { card: "summary_large_image", title, description },
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
