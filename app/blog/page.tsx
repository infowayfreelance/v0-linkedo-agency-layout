export const metadata = {
  title: "Blog | Digital Marketing Insights | Linkedo",
  description:
    "Expert insights on SEO, web development, Google Ads, and digital marketing strategies to help grow your business.",
  alternates: { canonical: "/blog" },
}

import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { Chip } from "@/components/ui/chip"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const categories = ["All", "SEO", "Web Development", "Google Ads", "Marketing", "Case Studies", "Industry News"]

const blogPosts = [
  {
    slug: "what-is-ai-seo",
    title: "What Is AI SEO: A Practical Guide for UK Small Businesses in 2026",
    excerpt: "A beginner-friendly guide to improving visibility in Google and AI search tools.",
    category: "SEO",
    date: "2026-09-20",
    readTime: "12 min read",
    image: "/blog/what-is-ai-seo/ai-seo-hero.png",
    featured: true,
  },
  {
    slug: "seo-trends-2025",
    title: "Top SEO Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging SEO strategies that are reshaping search rankings.",
    category: "SEO",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/seo-analytics-dashboard.png",
  },
  {
    slug: "web-development-best-practices",
    title: "Modern Web Development: Best Practices for 2025",
    excerpt: "Learn the essential techniques and frameworks that define modern web development.",
    category: "Web Development",
    date: "2025-01-10",
    readTime: "8 min read",
    image: "/coding-on-laptop.png",
  },
  {
    slug: "google-ads-roi-optimization",
    title: "Maximizing ROI with Google Ads: A Complete Guide",
    excerpt: "Transform your Google Ads campaigns with data-driven strategies that deliver results.",
    category: "Google Ads",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "/google-ads-interface.jpg",
  },
  {
    slug: "local-seo-london-businesses",
    title: "Local SEO Strategies for London Businesses",
    excerpt: "Dominate local search results with proven tactics tailored for the London market.",
    category: "SEO",
    date: "2024-12-28",
    readTime: "7 min read",
    image: "/london-cityscape.jpg",
  },
  {
    slug: "conversion-rate-optimization-guide",
    title: "CRO: Converting Traffic Into Customers",
    excerpt: "Master conversion rate optimization with actionable insights and real-world examples.",
    category: "Marketing",
    date: "2024-12-20",
    readTime: "10 min read",
    image: "/conversion-funnel-chart.jpg",
  },
  {
    slug: "ecommerce-website-redesign-case-study",
    title: "Case Study: 300% Revenue Increase After Redesign",
    excerpt: "How we transformed an underperforming ecommerce site into a revenue-generating machine.",
    category: "Case Studies",
    date: "2024-12-15",
    readTime: "12 min read",
    image: "/ecommerce-website-mockup.png",
  },
]

export default function BlogPage() {
  return (
    <MainShell>
      <div className="pt-20 pb-12 md:pt-24 md:pb-16">
        <Section
          eyebrow="Blog"
          title="Insights & Strategies"
          titleAs="h1"
          description="Expert advice, industry insights, and proven strategies to grow your business online."
          className="mb-12 md:mb-16"
        />

        {/* Featured Post */}
        {blogPosts[0].featured && (
          <div className="mb-12 md:mb-16">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="block group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Chip variant="primary" className="absolute top-4 left-4">
                    Featured
                  </Chip>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <Chip variant="secondary" className="mb-4 w-fit">
                    {blogPosts[0].category}
                  </Chip>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <Chip variant="secondary" className="mb-3">
                  {post.category}
                </Chip>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 text-balance">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainShell>
  )
}
