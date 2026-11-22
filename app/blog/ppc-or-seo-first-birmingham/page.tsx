import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { ppcSeoPost, ppcSeoFaqs } from "@/lib/blog-posts/ppc-or-seo-first-birmingham"

const canonical = "https://linkedo.co.uk/blog/ppc-or-seo-first-birmingham"
const metaTitle = "PPC or SEO First? A Guide for Birmingham Businesses"
const metaDescription = "Should a Birmingham or West Midlands business start with Google Ads or SEO? A plain-English way to decide, with questions, checks and a simple 90-day plan."

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical },
  openGraph: {
    type: "article", url: canonical, title: metaTitle, description: metaDescription,
    images: [{ url: "/blog/ppc-or-seo-first-birmingham-featured.webp", width: 1200, height: 630, alt: "Small business desk with a laptop showing search results and the Birmingham skyline behind" }],
  },
  twitter: {
    card: "summary_large_image", title: metaTitle, description: metaDescription,
    images: ["/blog/ppc-or-seo-first-birmingham-featured.webp"],
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: ppcSeoPost.title, description: metaDescription,
  image: "https://linkedo.co.uk/blog/ppc-or-seo-first-birmingham-featured.webp",
  datePublished: "2026-11-22", dateModified: "2026-11-22",
  author: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
  publisher: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  url: canonical, inLanguage: "en-GB",
}
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ppcSeoFaqs }
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    { "@type": "ListItem", position: 3, name: ppcSeoPost.title, item: canonical },
  ],
}

export default function PpcOrSeoFirstBirminghamPage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[blogPostingSchema, faqSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: ppcSeoPost.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">Google Ads</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">{ppcSeoPost.title}</h1>
            <p className="text-sm text-muted-foreground">By {ppcSeoPost.author.name}</p>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={ppcSeoPost.image} alt="Small business desk with a laptop showing search results and the Birmingham skyline behind" className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">{renderContentBlocks(ppcSeoPost.content)}</div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About the author</h2>
            <p className="mt-2 text-sm text-muted-foreground">{ppcSeoPost.author.name} · {ppcSeoPost.author.role}</p>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
