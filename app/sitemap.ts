import type { MetadataRoute } from "next"

const BASE_URL = "https://linkedo.co.uk"

// Static top-level routes with priority 0.9.
// `lastModified` reflects the date each route's content was last changed
// (from git history) — update it when a page's content changes.
const topLevelRoutes: { path: string; lastModified: string }[] = [
  { path: "/about", lastModified: "2026-05-20" },
  { path: "/services", lastModified: "2026-05-20" },
  { path: "/blog", lastModified: "2026-10-10" },
  { path: "/case-studies", lastModified: "2026-08-21" },
  { path: "/team", lastModified: "2026-05-20" },
  { path: "/portfolio", lastModified: "2026-08-21" },
  { path: "/pricing", lastModified: "2026-05-20" },
  { path: "/contact", lastModified: "2026-05-20" },
  { path: "/locations", lastModified: "2026-09-10" },
  { path: "/free-ai-tools-online", lastModified: "2026-10-12" },
  { path: "/meta-title-generator", lastModified: "2026-10-12" },
  { path: "/meta-description-generator", lastModified: "2026-10-12" },
  { path: "/blog-outline-generator", lastModified: "2026-10-12" },
  { path: "/utm-builder", lastModified: "2026-10-12" },
  { path: "/privacy", lastModified: "2026-08-21" },
  { path: "/terms", lastModified: "2026-08-21" },
  { path: "/cookie-policy", lastModified: "2026-09-13" },
]

// City/location nested routes
const cityRoutes: { path: string; lastModified: string }[] = [
  { path: "/london", lastModified: "2026-10-04" },
  { path: "/manchester", lastModified: "2026-10-04" },
  { path: "/birmingham", lastModified: "2026-10-12" },
  { path: "/leeds", lastModified: "2026-10-04" },
  { path: "/liverpool", lastModified: "2026-10-04" },
  { path: "/sheffield", lastModified: "2026-10-04" },
  { path: "/bristol", lastModified: "2026-10-15" },
  { path: "/edinburgh", lastModified: "2026-10-04" },
  { path: "/glasgow", lastModified: "2026-10-04" },
  { path: "/newcastle", lastModified: "2026-10-04" },
  { path: "/leicester", lastModified: "2026-10-04" },
  { path: "/nottingham", lastModified: "2026-10-04" },
  { path: "/shropshire", lastModified: "2026-10-04" },
  { path: "/devon", lastModified: "2026-10-04" },
  { path: "/midland", lastModified: "2026-10-04" },
]

// Service top-level routes
const serviceRoutes: { path: string; lastModified: string }[] = [
  { path: "/seo", lastModified: "2026-08-21" },
  { path: "/google-ads", lastModified: "2026-05-20" },
  { path: "/meta-ads", lastModified: "2026-05-20" },
  { path: "/web-development", lastModified: "2026-08-21" },
  { path: "/branding", lastModified: "2026-05-20" },
  { path: "/consulting", lastModified: "2026-05-20" },
]

// London nested routes
const londonNestedRoutes: { path: string; lastModified: string }[] = [
  { path: "/london/seo", lastModified: "2026-05-20" },
]

// Case study slugs — must match the keys of `caseStudyData` in
// app/case-studies/[slug]/page.tsx. Only list slugs that actually have a
// live, canonical page; a slug with no matching page returns a 404.
const caseStudySlugs: { slug: string; lastModified: string }[] = [
  { slug: "techflow", lastModified: "2026-08-21" },
]

// Blog slugs — must match the keys of `publishedPosts` in
// app/blog/[slug]/page.tsx. Only list slugs with real, unique published
// content; any other slug falls back to generic placeholder content on
// that route and must not be listed here (duplicate/thin content).
const blogSlugs: { slug: string; lastModified: string }[] = [
  { slug: "what-is-ai-seo", lastModified: "2026-09-20" },
  { slug: "why-not-ranking-on-google-2026", lastModified: "2026-10-10" },
]

// Team member slugs — must match `generateStaticParams` in
// app/team/[slug]/page.tsx.
const teamSlugs: { slug: string; lastModified: string }[] = [
  { slug: "waleed-sabbir", lastModified: "2026-08-21" },
  { slug: "sarmad-shabir", lastModified: "2026-08-21" },
  { slug: "jamshaid-ahmed", lastModified: "2026-08-21" },
  { slug: "waleed-hussain", lastModified: "2026-08-21" },
  { slug: "kawish-azeem", lastModified: "2026-08-21" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: "2026-05-20",
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Top-level routes
  const topLevel: MetadataRoute.Sitemap = topLevelRoutes.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // City routes (treated as top-level pages)
  const cities: MetadataRoute.Sitemap = cityRoutes.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // Nested service routes
  const services: MetadataRoute.Sitemap = serviceRoutes.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  // London nested routes
  const londonNested: MetadataRoute.Sitemap = londonNestedRoutes.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Case study dynamic routes
  const caseStudies: MetadataRoute.Sitemap = caseStudySlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const teamMembers: MetadataRoute.Sitemap = teamSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/team/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [
    ...homepage,
    ...topLevel,
    ...cities,
    ...services,
    ...londonNested,
    ...caseStudies,
    ...blogPosts,
    ...teamMembers,
  ]
}
