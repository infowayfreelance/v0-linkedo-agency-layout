import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services London | Local & Technical SEO | Linkedo",
  description:
    "SEO services for London businesses: technical and on-page SEO, local SEO and Google Business Profile, content and link building. Get a free SEO audit.",
  alternates: { canonical: "https://linkedo.co.uk/london/seo" },
  openGraph: { title: "SEO Services London | Local & Technical SEO | Linkedo", description: "SEO services for London businesses: technical and on-page SEO, local SEO and Google Business Profile, content and link building. Get a free SEO audit.", url: "https://linkedo.co.uk/london/seo" },
  twitter: { card: "summary_large_image", title: "SEO Services London | Local & Technical SEO | Linkedo", description: "SEO services for London businesses: technical and on-page SEO, local SEO and Google Business Profile, content and link building. Get a free SEO audit." },
}

export default function LondonSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
