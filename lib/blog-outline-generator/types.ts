export type SearchIntent = "auto" | "informational" | "commercial" | "transactional" | "navigational"

export type ContentType =
  | "how-to"
  | "listicle"
  | "comparison"
  | "ultimate-guide"
  | "case-study"
  | "tutorial"
  | "beginner-guide"

export type Tone = "professional" | "simple" | "friendly" | "expert" | "conversational"

export type WordCount = "800" | "1200" | "1500" | "2000" | "2500+"

export interface OutlineFormState {
  topic: string
  primaryKeyword: string
  secondaryKeywords: string
  searchIntent: SearchIntent
  contentType: ContentType
  targetAudience: string
  wordCount: WordCount
  tone: Tone
}

export interface OutlineHeading {
  level: "h2" | "h3" | "h4"
  text: string
  guidance?: string
  children?: OutlineHeading[]
}

export interface InternalLinkSuggestion {
  type: string
  label: string
  href?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SeoOverview {
  primaryKeyword: string
  searchIntent: string
  contentType: string
  wordCount: string
  targetAudience: string
}

export interface GeneratedOutline {
  seoOverview: SeoOverview
  h1: string
  slug: string
  introGuidance: string[]
  outline: OutlineHeading[]
  questions: string[]
  faqs: FaqItem[]
  internalLinks: InternalLinkSuggestion[]
  metaTitle: string
  metaDescription: string
  cta: { text: string; href: string }
  enhancementIdeas: string[]
}

export type RegenerateTarget = "full" | "h1" | "metaTitle" | "metaDescription" | "faqs"
