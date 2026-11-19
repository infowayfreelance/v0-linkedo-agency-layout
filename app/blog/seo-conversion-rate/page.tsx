import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { seoConversionRatePost, seoConversionRateFaqs } from "@/lib/blog-posts/seo-conversion-rate"

const canonical = "https://linkedo.co.uk/blog/seo-conversion-rate"
const featuredImage = "https://linkedo.co.uk/blog/seo-conversion-rate-featured.webp"

export const metadata: Metadata = {
  title: "SEO Conversion Rate: How Organic Traffic Becomes Leads",
  description: "Learn how to calculate your SEO conversion rate, track enquiries in GA4 and turn organic traffic into more leads for your UK service or local business.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "SEO Conversion Rate: How Organic Traffic Becomes Leads",
    description: "Learn how to calculate your SEO conversion rate, track enquiries in GA4 and turn organic traffic into more leads for your UK service or local business.",
    images: [{ url: "/blog/seo-conversion-rate-featured.webp", width: 1200, height: 630, alt: "Laptop showing a website enquiry form and organic traffic chart" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Conversion Rate: How Organic Traffic Becomes Leads",
    description: "Learn how to calculate your SEO conversion rate, track enquiries in GA4 and turn organic traffic into more leads for your UK service or local business.",
    images: ["/blog/seo-conversion-rate-featured.webp"],
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO Conversion Rate: How to Turn Organic Traffic Into Leads",
  description: "Learn how to calculate your SEO conversion rate, track enquiries in GA4 and turn organic traffic into more leads for your UK service or local business.",
  image: featuredImage,
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: {
    "@type": "Person",
    name: "Junaid Mazhar",
    jobTitle: "SEO Director",
    image: "https://linkedo.co.uk/blog/what-is-ai-seo/junaid-mazhar.png",
    worksFor: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk" },
  },
  publisher: {
    "@type": "Organization",
    name: "Linkedo",
    url: "https://linkedo.co.uk",
    logo: { "@type": "ImageObject", url: "https://linkedo.co.uk/favicon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  inLanguage: "en-GB",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoConversionRateFaqs,
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    { "@type": "ListItem", position: 3, name: "SEO Conversion Rate: How to Turn Organic Traffic Into Leads", item: canonical },
  ],
}

export default function seoConversionRateArticlePage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[blogPostingSchema, faqSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: seoConversionRatePost.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">SEO</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              {seoConversionRatePost.title}
            </h1>
            <p className="text-sm text-muted-foreground">By {seoConversionRatePost.author.name} · {seoConversionRatePost.author.role} · Published 19 November 2026</p>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={seoConversionRatePost.image} alt={seoConversionRatePost.imageAlt} className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">
            {renderContentBlocks(seoConversionRatePost.content)}
          </div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About the author</h2>
            <p className="mt-2 text-sm text-muted-foreground">{seoConversionRatePost.author.name} · {seoConversionRatePost.author.role}</p>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
