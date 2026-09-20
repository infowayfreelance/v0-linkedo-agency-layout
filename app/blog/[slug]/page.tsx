import type { Metadata } from "next"

const postMetadata: Record<string, { title: string; description: string }> = {
  "web-development-best-practices": {
    title: "Modern Web Development: Best Practices for 2025 | Linkedo",
    description: "Learn the essential techniques and frameworks that define modern web development.",
  },
  "what-is-ai-seo": {
    title: "What Is AI SEO UK Small Business Guide for 2026 | Linkedo",
    description:
      "Learn what AI SEO means, how AI search works, and the practical steps UK small businesses can take to improve visibility in Google and AI tools.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = postMetadata[slug]

  return {
    title: post?.title,
    description: post?.description,
    alternates: { canonical: `/blog/${slug}` },
  }
}

import { MainShell } from "@/components/layout/main-shell"
import { Chip } from "@/components/ui/chip"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { aiSeoPost } from "@/lib/blog-posts/what-is-ai-seo"
import { renderContentBlocks } from "@/lib/blog-posts/render-blocks"

const defaultPost = {
  title: "Top SEO Trends to Watch in 2025",
  excerpt: "Stay ahead of the curve with these emerging SEO strategies that are reshaping search rankings.",
  category: "SEO",
  date: "2025-01-15",
  readTime: "5 min read",
  image: "/seo-analytics-dashboard.png",
  author: {
    name: "Sarah Johnson",
    role: "SEO Director",
    avatar: "/professional-woman-diverse.png",
  },
}

const relatedPosts = [
  {
    slug: "local-seo-strategies",
    title: "Local SEO: Complete Guide for 2025",
    category: "SEO",
    image: "/local-business-map.png",
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist",
    category: "SEO",
    image: "/website-code.png",
  },
]

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = slug === "what-is-ai-seo" ? aiSeoPost : defaultPost

  return (
    <MainShell>
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <article className="max-w-4xl mx-auto">
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
            {slug === "what-is-ai-seo" ? (
              renderContentBlocks(aiSeoPost.content)
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-8">Introduction</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  SEO continues to evolve at a rapid pace, with search engines becoming increasingly sophisticated in
                  understanding user intent and content quality. In 2025, staying ahead means adapting to new
                  technologies, user behaviors, and algorithm updates.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-8">Key Trends</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 mt-6">1. AI-Powered Search</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Artificial intelligence is transforming how search engines interpret queries and rank content.
                  Understanding AI-driven search features and optimizing for them is crucial for maintaining
                  visibility.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 mt-6">2. E-E-A-T Emphasis</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) have become central to
                  Google's ranking algorithms. Building genuine authority and demonstrating expertise is more
                  important than ever.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 mt-6">
                  3. Voice & Visual Search
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Voice search and visual search technologies are reshaping how users discover content. Optimizing
                  for natural language queries and image recognition is becoming essential.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-8">Conclusion</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  The SEO landscape of 2025 demands a holistic approach that combines technical excellence, quality
                  content, and user experience. By staying informed and adapting to these trends, businesses can
                  maintain their competitive edge in search rankings.
                </p>
              </>
            )}
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

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
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
