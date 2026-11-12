import type { Metadata } from "next"
import { notFound } from "next/navigation"

const postMetadata: Record<string, { title: string; description: string }> = {
  "what-is-ai-seo": {
    title: "What Is AI SEO UK Small Business Guide for 2026 | Linkedo",
    description:
      "Learn what AI SEO means, how AI search works, and the practical steps UK small businesses can take to improve visibility in Google and AI tools.",
  },
  "why-not-ranking-on-google-2026": {
    title: "Why Your Business Is Not Ranking on Google in 2026 | Linkedo",
    description:
      "Seven specific, fixable reasons businesses lose Google rankings in 2026, plus an 8-step action plan to recover traffic after a core update.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = postMetadata[slug]
  if (!post) notFound()

  return {
    title: post?.title,
    description: post?.description,
    alternates: { canonical: `/blog/${slug}` },
  }
}

import { MainShell } from "@/components/layout/main-shell"
import { Chip } from "@/components/ui/chip"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { RelatedLinks } from "@/components/ui/related-links"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { aiSeoPost } from "@/lib/blog-posts/what-is-ai-seo"
import { notRankingPost } from "@/lib/blog-posts/why-not-ranking-on-google-2026"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"

const publishedPosts = {
  "what-is-ai-seo": aiSeoPost,
  "why-not-ranking-on-google-2026": notRankingPost,
} as const

const relatedPosts = [
  {
    slug: "what-is-ai-seo",
    title: "What Is AI SEO: A Practical Guide for UK Small Businesses in 2026",
    category: "SEO",
    image: "/blog/what-is-ai-seo/ai-seo-hero.png",
  },
  {
    slug: "how-to-choose-an-seo-agency-in-birmingham",
    title: "How to Choose an SEO Agency in Birmingham: A Practical UK Checklist",
    category: "SEO",
    image: "/seo-analytics-dashboard.png",
  },
]


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const publishedPost = publishedPosts[slug as keyof typeof publishedPosts]
  if (!publishedPost) notFound()
  const post = publishedPost

  const blogPostBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://linkedo.co.uk/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://linkedo.co.uk/blog/${slug}` },
    ],
  }

  return (
    <MainShell>
      <SchemaMarkup schema={blogPostBreadcrumbSchema} />
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} className="mb-6" />
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <Chip variant="primary" className="mb-4">
              {post.category}
            </Chip>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-10 md:mb-12 border border-border bg-muted">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto aspect-video object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-10 md:mb-12">
            {renderContentBlocks(publishedPost.content)}
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 p-6 sm:p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm mb-10 md:mb-12">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-primary/20"
            />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 sm:p-8 md:p-10 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5 mb-10 md:mb-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Ready to Boost Your SEO?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our SEO strategies can help your business achieve better rankings and drive qualified
              traffic.
            </p>
            <AnimatedButton href="/contact" variant="primary">
              Book a Free Consultation
            </AnimatedButton>
          </div>

          {publishedPost && (
            <RelatedLinks
              title="Related Services"
              links={[
                { label: "SEO Services", href: "/seo" },
                { label: "Web Development", href: "/web-development" },
                { label: "Free AI Tools", href: "/free-ai-tools-online" },
              ]}
              className="mb-12"
            />
          )}

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.filter((relatedPost) => relatedPost.slug !== slug).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <Chip variant="secondary" className="mb-3">
                      {relatedPost.category}
                    </Chip>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                      {relatedPost.title}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm text-primary mt-3 group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </MainShell>
  )
}
