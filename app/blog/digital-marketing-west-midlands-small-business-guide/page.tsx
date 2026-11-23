import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { westMidlandsPost, westMidlandsFaqs } from "@/lib/blog-posts/digital-marketing-west-midlands-small-business-guide"

const canonical = "https://linkedo.co.uk/blog/digital-marketing-west-midlands-small-business-guide"
const metaTitle = "Digital Marketing in the West Midlands: Small Business Guide"
const metaDescription = "A practical West Midlands digital marketing guide for small businesses: local SEO, Google Business Profile, Google Ads, social ads and what to measure."
const heroImage = "/blog/digital-marketing-west-midlands-featured.webp"
const heroAlt = "Small business owner in a West Midlands shop reviewing online marketing on a laptop"

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical },
  openGraph: {
    type: "article", url: canonical, title: metaTitle, description: metaDescription,
    images: [{ url: heroImage, width: 1200, height: 630, alt: heroAlt }],
  },
  twitter: {
    card: "summary_large_image", title: metaTitle, description: metaDescription, images: [heroImage],
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: westMidlandsPost.title, description: metaDescription,
  image: "https://linkedo.co.uk/blog/digital-marketing-west-midlands-featured.webp",
  datePublished: "2026-11-23", dateModified: "2026-11-23",
  author: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
  publisher: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk/" },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  url: canonical, inLanguage: "en-GB",
}
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: westMidlandsFaqs }
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    { "@type": "ListItem", position: 3, name: westMidlandsPost.title, item: canonical },
  ],
}

export default function WestMidlandsDigitalMarketingGuidePage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[blogPostingSchema, faqSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: westMidlandsPost.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">Marketing</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">{westMidlandsPost.title}</h1>
            <p className="text-sm text-muted-foreground">By {westMidlandsPost.author.name}</p>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={heroImage} alt={heroAlt} className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">{renderContentBlocks(westMidlandsPost.content)}</div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About the author</h2>
            <p className="mt-2 text-sm text-muted-foreground">{westMidlandsPost.author.name} · {westMidlandsPost.author.role}</p>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
