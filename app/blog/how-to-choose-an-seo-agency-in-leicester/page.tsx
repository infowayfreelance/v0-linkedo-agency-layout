import type { Metadata } from "next"

import { MainShell } from "@/components/layout/main-shell"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"
import { leicesterSeoAgencyPost } from "@/lib/blog-posts/how-to-choose-an-seo-agency-in-leicester"

const canonical = "https://linkedo.co.uk/blog/how-to-choose-an-seo-agency-in-leicester"

export const metadata: Metadata = {
  title: "How to Choose an SEO Agency in Leicester (2026 Checklist)",
  description: "Choosing an SEO agency in Leicester? Use our 2026 checklist to compare services, pricing, contracts, reporting and local SEO expertise.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title: "How to Choose an SEO Agency in Leicester (2026 Checklist)",
    description: "A practical guide to comparing SEO agencies in Leicester, including local SEO, pricing, reporting and contracts.",
    images: [{ url: "/blog/choose-seo-agency-leicester-featured.webp", width: 1200, height: 630, alt: "Checklist for choosing an SEO agency in Leicester on a laptop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose an SEO Agency in Leicester (2026 Checklist)",
    description: "A practical guide to comparing SEO agencies in Leicester, including local SEO, pricing, reporting and contracts.",
    images: ["/blog/choose-seo-agency-leicester-featured.webp"],
  },
}

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose an SEO Agency in Leicester: 2026 Checklist",
  description: "A practical guide to comparing SEO agencies in Leicester, including local SEO, pricing, reporting and contracts.",
  image: "https://linkedo.co.uk/blog/choose-seo-agency-leicester-featured.webp",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  author: { "@type": "Person", name: "Junaid Mazhar" },
  publisher: { "@type": "Organization", name: "Linkedo", url: "https://linkedo.co.uk" },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  inLanguage: "en-GB",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best SEO agency in Leicester?", acceptedAnswer: { "@type": "Answer", text: "There is no universal winner. The right agency depends on your industry, goals, budget and the quality of its proposed approach. Compare relevant expertise, communication, deliverables and contract terms instead of trusting a ranking list on its own." } },
    { "@type": "Question", name: "How much does an SEO agency in Leicester cost?", acceptedAnswer: { "@type": "Answer", text: "Fees vary according to the website and scope. Agencies may offer monthly retainers, fixed-price projects or hourly consulting. Ask for a written quote that states what is included and what would cost extra." } },
    { "@type": "Question", name: "How long does SEO take to show results?", acceptedAnswer: { "@type": "Answer", text: "There is no guaranteed timetable. Technical issues, competition, existing visibility and the amount of work required all affect progress. Ask for realistic milestones, regular reviews and clear explanations when plans change." } },
    { "@type": "Question", name: "Should I choose a local Leicester agency or a remote agency?", acceptedAnswer: { "@type": "Answer", text: "Either can be suitable. Local knowledge can help, but the agency also needs relevant skills and a reliable way of working with you. Compare its understanding of your service area, communication and proposed work rather than relying on office location alone." } },
    { "@type": "Question", name: "Can an SEO agency guarantee first-page Google rankings?", acceptedAnswer: { "@type": "Answer", text: "No agency can guarantee a specific organic position. Search results change, and rankings depend on factors outside any provider's control. Be cautious of anyone using a guaranteed position to pressure you into a contract." } },
    { "@type": "Question", name: "What should a monthly SEO report include?", acceptedAnswer: { "@type": "Answer", text: "It should cover relevant organic search performance, completed work, issues found, enquiries where tracking supports them and the next steps. The report should explain the numbers and give you space to ask questions." } },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
    { "@type": "ListItem", position: 3, name: "How to Choose an SEO Agency in Leicester: 2026 Checklist", item: canonical },
  ],
}

export default function LeicesterSeoAgencyArticlePage() {
  return (
    <MainShell>
      <SchemaMarkup schema={[blogPostingSchema, faqSchema, breadcrumbSchema]} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: leicesterSeoAgencyPost.title }]} className="mb-6" />
          <header className="mb-8 md:mb-12">
            <Chip variant="primary" className="mb-4">SEO</Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              How to Choose an SEO Agency in Leicester: 2026 Checklist
            </h1>
            <p className="text-sm text-muted-foreground">By {leicesterSeoAgencyPost.author.name}</p>
          </header>
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img src={leicesterSeoAgencyPost.image} alt="Checklist for choosing an SEO agency in Leicester on a laptop" className="w-full h-auto aspect-video object-cover" />
          </div>
          <div className="prose prose-invert max-w-none">
            {renderContentBlocks(leicesterSeoAgencyPost.content)}
          </div>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About the author</h2>
            <p className="mt-2 text-sm text-muted-foreground">{leicesterSeoAgencyPost.author.name} · {leicesterSeoAgencyPost.author.role}</p>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
