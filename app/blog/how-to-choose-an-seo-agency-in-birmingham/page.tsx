import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { birminghamSeoAgencyPost } from "@/lib/blog-posts/how-to-choose-an-seo-agency-in-birmingham"

const canonical = "https://linkedo.co.uk/blog/how-to-choose-an-seo-agency-in-birmingham"

export const metadata: Metadata = {
  title: "How to Choose an SEO Agency in Birmingham (2026 Guide)",
  description:
    "How to choose an SEO agency in Birmingham: the checks, questions and red flags that matter, plus honest notes on UK cost, local SEO and remote agencies.",
  alternates: { canonical },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose an SEO Agency in Birmingham: A Practical UK Checklist",
  description:
    "How to choose an SEO agency in Birmingham: the checks, questions and red flags that matter, plus honest notes on UK cost, local SEO and remote agencies.",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  publisher: {
    "@type": "Organization",
    name: "Linkedo",
    url: "https://linkedo.co.uk",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Choose an SEO Agency in Birmingham: A Practical UK Checklist",
      item: canonical,
    },
  ],
}

export default function BirminghamSeoAgencyArticlePage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: birminghamSeoAgencyPost.title },
            ]}
            className="mb-6"
          />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">
              SEO
            </Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              How to Choose an SEO Agency in Birmingham: A Practical UK Checklist
            </h1>
          </header>
          <div className="prose prose-invert max-w-none">
            {renderContentBlocks(birminghamSeoAgencyPost.content)}
          </div>
        </article>
      </div>
    </MainShell>
  )
}
