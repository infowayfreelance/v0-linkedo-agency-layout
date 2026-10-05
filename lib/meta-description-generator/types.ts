export type PageType = "home" | "service" | "location" | "product" | "category" | "blog" | "landing" | "about" | "other"

export type SearchIntent = "auto" | "informational" | "commercial" | "transactional" | "local" | "navigational"

export type CtaPreference = "auto" | "quote" | "call" | "contact" | "book" | "learn-more" | "shop" | "get-started" | "none"

export type Tone = "professional" | "friendly" | "persuasive" | "simple" | "premium" | "direct" | "natural"

export interface MetaDescriptionFormState {
  primaryKeyword: string
  secondaryKeywords: string
  pageType: PageType
  pageSummary: string
  searchIntent: SearchIntent
  location: string
  targetAudience: string
  benefits: string
  ctaPreference: CtaPreference
  tone: Tone
}

export type OptionId = "seo" | "ctr" | "balanced"

export type LengthStatus = "Short" | "Acceptable" | "Ideal" | "Slightly Long" | "Too Long"

export interface GeneratedDescription {
  id: OptionId
  label: string
  text: string
  length: number
  lengthStatus: LengthStatus
  keywordIncluded: boolean
  resolvedIntentLabel: string
  ctaIncluded: boolean
  ctaText: string | null
}

export interface GeneratedDescriptionSet {
  seo: GeneratedDescription
  ctr: GeneratedDescription
  balanced: GeneratedDescription
}
