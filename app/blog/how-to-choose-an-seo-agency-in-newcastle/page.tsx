import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { newcastleSeoAgencyPost, newcastleSeoAgencyFaqs } from "@/lib/blog-posts/how-to-choose-an-seo-agency-in-newcastle"

const canonical = "https://linkedo.co.uk/blog/how-to-choose-an-seo-agency-in-newcastle"

export const metadata: Metadata = {
  title: "How to Choose an SEO Agency in Newcastle (2026)",
  description: "A practical checklist for Newcastle and Gateshead businesses choosing an SEO agency: questions to ask, red flags, reporting, contracts and local SEO.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "How to Choose an SEO Agency in Newcastle (2026)",
    description: "A practical checklist for Newcastle and Gateshead businesses choosing an SEO agency: questions to ask, red flags, reporting, contracts and local SEO.",
    images: [{ url: "/blog/how-to-choose-seo-agency-newcastle-featured.webp", width: 1200, height: 630, alt: "Laptop showing an SEO agency checklist for Newcastle and Gateshead businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose an SEO Agency in Newcastle (2026)",
    description: "A practical checklist for Newcastle and Gateshead businesses choosing an SEO agency: questions to ask, red flags, reporting, contracts and local SEO.",
    images: ["/blog/how-to-choose-seo-agency-newcastle-featured.webp"],
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose an SEO Agency in Newcastle and Gateshead: A Practical UK Checklist",
  description: "A practical checklist for Newcastle and Gateshead businesses choosing an SEO agency: questions to ask, red flags, reporting, contracts and local SEO.",
  image: "https://linkedo.co.uk/blog/how-to-choose-seo-agency-newcastle-featured.webp",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  author: { "@type": "Person", name: "Junaid Mazhar" },
  publisher: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk" },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  inLanguage: "en-GB",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: newcastleSeoAgencyFaqs,
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    { "@type": "ListItem", position: 3, name: "How to Choose an SEO Agency in Newcastle and Gateshead: A Practical UK Checklist", item: canonical },
  ],
}

export default function NewcastleSeoAgencyArticlePage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[blogPostingSchema, faqSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: newcastleSeoAgencyPost.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">SEO</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              {newcastleSeoAgencyPost.title}
            </h1>
            <p className="text-sm text-muted-foreground">By {newcastleSeoAgencyPost.author.name}</p>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={newcastleSeoAgencyPost.image} alt="Laptop showing an SEO agency checklist for Newcastle and Gateshead businesses" className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">
            {renderContentBlocks(newcastleSeoAgencyPost.content)}
          </div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About the author</h2>
            <p className="mt-2 text-sm text-muted-foreground">{newcastleSeoAgencyPost.author.name} · {newcastleSeoAgencyPost.author.role}</p>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
