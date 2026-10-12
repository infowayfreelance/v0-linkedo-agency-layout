export type PageType = "home" | "service" | "location" | "blog" | "product" | "category" | "landing"

export type Tone = "clear" | "professional" | "friendly" | "persuasive"

export type OptionId = "keyword" | "benefit" | "question" | "brand" | "balanced"

export type LengthStatus = "Short" | "Acceptable" | "Ideal" | "Slightly Long" | "Too Long"

export interface MetaTitleFormState {
  primaryKeyword: string
  pageSummary: string
  brand: string
  location: string
  tone: Tone
  pageType: PageType
  currentTitle: string
}

export interface GeneratedTitle {
  id: OptionId
  label: string
  description: string
  text: string
  length: number
  lengthStatus: LengthStatus
  pixelWidth: number
  overflowsDesktop: boolean
  keywordIncluded: boolean
  brandIncluded: boolean
}

export type GeneratedTitleSet = GeneratedTitle[]

export interface FormFieldErrors {
  primaryKeyword?: string
  pageSummary?: string
}
