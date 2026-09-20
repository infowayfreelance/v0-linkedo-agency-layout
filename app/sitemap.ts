import type { MetadataRoute } from "next"

const BASE_URL = "https://linkedo.co.uk"

// Static top-level routes with priority 0.9
const topLevelRoutes = [
  "/about",
  "/services",
  "/blog",
  "/case-studies",
  "/team",
  "/portfolio",
  "/pricing",
  "/contact",
  "/locations",
  "/uk",
  "/free-ai-tools-online",
  "/meta-title-generator",
  "/meta-description-generator",
  "/blog-outline-generator",
  "/utm-builder",
  "/privacy",
  "/terms",
  "/cookie-policy",
]

// City/location nested routes
const cityRoutes = [
  "/london",
  "/manchester",
  "/birmingham",
  "/leeds",
  "/liverpool",
  "/sheffield",
  "/bristol",
  "/edinburgh",
  "/glasgow",
  "/newcastle",
  "/leicester",
  "/nottingham",
  "/shropshire",
  "/devon",
  "/midland",
]

// Service top-level routes
const serviceRoutes = [
  "/seo",
  "/google-ads",
  "/meta-ads",
  "/web-development",
  "/website-development",
  "/branding",
  "/consulting",
]

// London nested routes
const londonNestedRoutes = ["/london/seo"]

// Case study slugs
const caseStudySlugs = ["techflow"]

const blogSlugs = [
  "what-is-ai-seo",
  "seo-trends-2025",
  "web-development-best-practices",
  "google-ads-roi-optimization",
  "local-seo-london-businesses",
  "conversion-rate-optimization-guide",
  "ecommerce-website-redesign-case-study",
]

const teamSlugs = ["waleed-sabbir", "sarmad-shabir", "jamshaid-ahmed", "waleed-hussain", "kawish-azeem"]

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Top-level routes
  const topLevel: MetadataRoute.Sitemap = topLevelRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // City routes (treated as top-level pages)
  const cities: MetadataRoute.Sitemap = cityRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // Nested service routes
  const services: MetadataRoute.Sitemap = serviceRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  // London nested routes
  const londonNested: MetadataRoute.Sitemap = londonNestedRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Case study dynamic routes
  const caseStudies: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const teamMembers: MetadataRoute.Sitemap = teamSlugs.map((slug) => ({
    url: `${BASE_URL}/team/${slug}`,
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
