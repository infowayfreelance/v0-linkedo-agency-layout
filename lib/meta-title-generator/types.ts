export type PageType = "home" | "service" | "location" | "blog" | "product" | "category" | "landing"

export type SearchIntent = "auto" | "informational" | "commercial" | "transactional" | "local"

export type Tone = "professional" | "friendly" | "bold" | "urgent" | "informative"

export type OptionId = "seo" | "ctr" | "balanced"

export type LengthStatus = "Short" | "Acceptable" | "Ideal" | "Slightly Long" | "Too Long"

export interface MetaTitleFormState {
  primaryKeyword: string
  secondaryKeyword: string
  brand: string
  tone: Tone
  pageType: PageType
  searchIntent: SearchIntent
  location: string
}

export interface GeneratedTitle {
  id: OptionId
  label: string
  text: string
  length: number
  lengthStatus: LengthStatus
  keywordIncluded: boolean
  brandIncluded: boolean
  resolvedIntentLabel: string
}

export interface GeneratedTitleSet {
  seo: GeneratedTitle
  ctr: GeneratedTitle
  balanced: GeneratedTitle
}
