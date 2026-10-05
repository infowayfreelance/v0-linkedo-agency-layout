import { hashString, mulberry32, pick } from "@/lib/blog-outline-generator/utils"
import { classifyLength } from "./length-status"
import type {
  CtaPreference,
  GeneratedDescription,
  GeneratedDescriptionSet,
  MetaDescriptionFormState,
  OptionId,
  PageType,
  SearchIntent,
} from "./types"

const INTENT_LABELS: Record<Exclude<SearchIntent, "auto">, string> = {
  informational: "Informational",
  commercial: "Commercial",
  transactional: "Transactional",
  local: "Local",
  navigational: "Navigational",
}

const PAGE_TYPE_META: Record<PageType, { fallbackClause: string; actionPhrase: string }> = {
  home: {
    fallbackClause: "see what we offer, how it works, and how to get started",
    actionPhrase: "see exactly what we do and get started in minutes",
  },
  service: {
    fallbackClause: "see how the service works, what's included, and how to get started",
    actionPhrase: "see exactly what the service includes and how to get going",
  },
  location: {
    fallbackClause: "find local service details, coverage, and how to get in touch",
    actionPhrase: "find local service details and get in touch quickly",
  },
  product: {
    fallbackClause: "see full product details, features, and specifications before you buy",
    actionPhrase: "compare the details and features before you buy",
  },
  category: {
    fallbackClause: "browse the full range, compare options, and find what suits you",
    actionPhrase: "compare the full range and find exactly what suits you",
  },
  blog: {
    fallbackClause: "read a clear, practical explanation with steps you can follow",
    actionPhrase: "get a clear, jargon-free explanation in a few minutes",
  },
  landing: {
    fallbackClause: "see the full details and decide if it's the right fit for you",
    actionPhrase: "see the details and work out if it's the right fit",
  },
  about: {
    fallbackClause: "learn more about who we are, what we do, and how we work",
    actionPhrase: "get to know who we are and how we approach things",
  },
  other: {
    fallbackClause: "find full details and next steps on this page",
    actionPhrase: "find exactly what you need on this page",
  },
}

// Deliberately distinct vocabulary from PAGE_TYPE_META's fallbackClause/actionPhrase
// text above, so combining the two never produces a near-duplicate phrase
// (e.g. "what's included" appearing twice in the same sentence).
const INTENT_ADDITIONAL_CLAUSE: Record<Exclude<SearchIntent, "auto">, string[]> = {
  informational: ["explained in plain English", "with real-world examples", "without unnecessary jargon"],
  commercial: ["so you can see what suits you", "with no pressure to commit", "to help you decide confidently"],
  transactional: ["ready to go when you are", "with fast, simple next steps", "with no unnecessary delays"],
  local: ["serving your local area", "close to you", "ready to help when you need it"],
  navigational: [],
}

function intentAdditional(intent: Exclude<SearchIntent, "auto">, rand: () => number): string {
  const pool = INTENT_ADDITIONAL_CLAUSE[intent]
  return pool.length > 0 ? pick(pool, rand) : ""
}

const CTA_TEXT: Record<Exclude<CtaPreference, "auto" | "none">, string[]> = {
  quote: ["Get a quote"],
  call: ["Call now", "Call today"],
  contact: ["Contact us"],
  book: ["Book now", "Book today"],
  "learn-more": ["Learn more"],
  shop: ["Shop now"],
  "get-started": ["Get started"],
}

function splitList(input: string): string[] {
  return input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function lowerFirst(s: string): string {
  if (!s) return s
  if (/^[A-Z0-9]{2,}/.test(s)) return s // keep acronyms (SEO, UK, PPC) as-is
  return s.charAt(0).toLowerCase() + s.slice(1)
}

function capFirst(s: string): string {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function joinList(items: string[]): string {
  const cleaned = items.map(lowerFirst)
  if (cleaned.length === 0) return ""
  if (cleaned.length === 1) return cleaned[0]
  if (cleaned.length === 2) return `${cleaned[0]} and ${cleaned[1]}`
  return `${cleaned.slice(0, -1).join(", ")}, and ${cleaned[cleaned.length - 1]}`
}

function cleanSentence(text: string): string {
  return text
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,!?])/g, "$1")
    .replace(/\.{2,}/g, ".")
    .trim()
}

const COMMERCIAL_SIGNALS = ["best", "top", "compare", "vs", "versus", "review", "agency", "services", "company"]
const TRANSACTIONAL_SIGNALS = ["buy", "price", "pricing", "cost", "shop", "order", "for sale", "discount", "hire", "quote"]
const LOCAL_SIGNALS = ["near me", "local"]
const NAVIGATIONAL_SIGNALS = ["login", "sign in", "dashboard", "official site"]

function resolveIntent(form: MetaDescriptionFormState): Exclude<SearchIntent, "auto"> {
  if (form.searchIntent !== "auto") return form.searchIntent

  const haystack = `${form.primaryKeyword} ${form.secondaryKeywords} ${form.pageSummary}`.toLowerCase()

  if (form.location.trim() && (form.pageType === "location" || LOCAL_SIGNALS.some((s) => haystack.includes(s)))) {
    return "local"
  }
  if (NAVIGATIONAL_SIGNALS.some((s) => haystack.includes(s))) return "navigational"
  if (TRANSACTIONAL_SIGNALS.some((s) => haystack.includes(s)) || form.pageType === "product") return "transactional"
  if (COMMERCIAL_SIGNALS.some((s) => haystack.includes(s)) || form.pageType === "service") return "commercial"
  if (form.pageType === "blog") return "informational"

  return "informational"
}

function resolveCta(
  form: MetaDescriptionFormState,
  intent: Exclude<SearchIntent, "auto">,
  rand: () => number,
): string | null {
  if (form.ctaPreference === "none") return null
  if (form.ctaPreference !== "auto") {
    return pick(CTA_TEXT[form.ctaPreference], rand)
  }

  // Auto: match CTA strength to search intent and page type.
  switch (intent) {
    case "informational":
      return form.pageType === "blog" ? null : pick(["Learn more", "Find out more"], rand)
    case "commercial":
      if (form.pageType === "product") return pick(["Learn more", "Shop now"], rand)
      return pick(["Get a quote", "Learn more", "Contact us"], rand)
    case "transactional":
      if (form.pageType === "product") return "Shop now"
      return pick(["Get a quote", "Book now", "Contact us", "Get started"], rand)
    case "local":
      return pick(["Call now", "Get a quote", "Contact us"], rand)
    case "navigational":
      return null
  }
}

interface BuildContext {
  form: MetaDescriptionFormState
  intent: Exclude<SearchIntent, "auto">
  ctaText: string | null
  benefits: string[]
  secondaryKeywords: string[]
  location: string
  audience: string
  keyword: string
  meta: (typeof PAGE_TYPE_META)[PageType]
  rand: () => number
}

function buildSeoDescription(ctx: BuildContext): string {
  const { keyword, location, benefits, secondaryKeywords, meta, ctaText, intent, audience, rand } = ctx

  const useLocation = Boolean(location) && (intent === "local" || ctx.form.pageType === "location")
  const lead = useLocation ? `${capFirst(keyword)} in ${location}` : capFirst(keyword)

  let body: string
  if (benefits.length > 0) {
    body = `${lead} — ${capFirst(joinList(benefits.slice(0, 3)))}`
  } else {
    const additional = intentAdditional(intent, rand)
    const keywordClause = secondaryKeywords.length > 0 ? `${lead} for ${lowerFirst(secondaryKeywords[0])}` : lead
    body = `${keywordClause} — ${meta.fallbackClause}${additional ? ", " + additional : ""}`
  }

  let sentence = `${body}.`

  if (audience) {
    const audienceClause = ` Built for ${lowerFirst(audience)}.`
    if ((sentence + audienceClause).length <= 160) sentence += audienceClause
  }

  if (ctaText) {
    const ctaClause = ` ${ctaText}.`
    if ((sentence + ctaClause).length <= 172) sentence += ctaClause
  }

  return cleanSentence(sentence)
}

const QUESTION_HOOK_TONES = new Set<MetaDescriptionFormState["tone"]>(["friendly", "natural", "persuasive", "simple"])
const STATEMENT_HOOKS = ["{Keyword}, made simple.", "{Keyword}, done properly.", "{Keyword}, the straightforward way."]

function buildCtrDescription(ctx: BuildContext): string {
  const { keyword, location, benefits, meta, ctaText, rand, audience, intent, form } = ctx
  const locationPhrase = location ? ` in ${location}` : ""

  // The lead establishes the hook; it either already contains the keyword
  // (question/statement leads) or doesn't (benefit-led), which decides
  // whether the keyword still needs to appear in the middle clause.
  let lead: string
  let leadHasKeyword: boolean
  if (benefits.length > 0) {
    lead = capFirst(joinList(benefits.slice(0, 2))) + "."
    leadHasKeyword = false
  } else if (QUESTION_HOOK_TONES.has(form.tone)) {
    lead = pick([`Need ${lowerFirst(keyword)}?`, `Looking for ${lowerFirst(keyword)}?`], rand)
    leadHasKeyword = true
  } else {
    // Direct, professional, and premium tones skip the question hook for a more assertive statement.
    lead = pick(STATEMENT_HOOKS, rand).replace("{Keyword}", capFirst(keyword))
    leadHasKeyword = true
  }

  const additional = intentAdditional(intent, rand)
  let middle: string
  if (leadHasKeyword) {
    const base = audience ? `For ${lowerFirst(audience)}` : capFirst(meta.fallbackClause)
    middle = ` ${base}${additional ? ", " + additional : ""}${locationPhrase}.`
  } else if (audience) {
    middle = ` ${capFirst(keyword)}${locationPhrase} for ${lowerFirst(audience)} — ${meta.fallbackClause}.`
  } else {
    middle = ` ${capFirst(keyword)}${locationPhrase} — ${meta.fallbackClause}.`
  }

  let sentence = lead + middle

  if (ctaText) {
    const ctaClause = ` ${ctaText}.`
    if ((sentence + ctaClause).length <= 172) {
      sentence += ctaClause
    } else {
      // Prefer keeping the CTA on a CTR-focused option — trim the middle clause instead.
      const trimmedMiddle = leadHasKeyword ? "" : ` ${capFirst(keyword)}${locationPhrase}.`
      const retrySentence = lead + trimmedMiddle + ctaClause
      if (retrySentence.length <= 172) sentence = retrySentence
    }
  }

  return cleanSentence(sentence)
}

function buildBalancedDescription(ctx: BuildContext): string {
  const { keyword, location, benefits, secondaryKeywords, meta, ctaText, audience, intent, rand } = ctx

  const useLocation = Boolean(location) && (intent === "local" || ctx.form.pageType === "location")
  const locationPhrase = useLocation ? ` in ${location}` : ""

  // Deliberately distinct sentence shape from the SEO option (which uses an
  // em-dash list) so the two never collapse to the same text when there are
  // no benefits to work with.
  let core: string
  if (benefits.length > 0) {
    core = `${capFirst(keyword)}${locationPhrase}: ${lowerFirst(joinList(benefits.slice(0, 2)))}.`
  } else {
    const keywordClause = secondaryKeywords.length > 0 ? `${capFirst(keyword)}${locationPhrase} for ${lowerFirst(secondaryKeywords[0])}` : `${capFirst(keyword)}${locationPhrase}`
    core = `${keywordClause} makes it easy to ${meta.actionPhrase}.`
  }

  let sentence = core

  if (audience) {
    const audienceClause = ` Ideal for ${lowerFirst(audience)}.`
    if ((sentence + audienceClause).length <= 160) sentence += audienceClause
  }

  const additional = intentAdditional(intent, rand)
  if (additional) {
    const additionalClause = ` ${capFirst(additional)}.`
    if ((sentence + additionalClause).length <= 160) sentence += additionalClause
  }

  if (ctaText) {
    const ctaClause = ` ${ctaText}.`
    if ((sentence + ctaClause).length <= 172) sentence += ctaClause
  }

  return cleanSentence(sentence)
}

function buildOne(
  id: OptionId,
  label: string,
  builder: (ctx: BuildContext) => string,
  ctx: BuildContext,
): GeneratedDescription {
  const text = builder(ctx)
  const length = text.length
  const keywordIncluded = text.toLowerCase().includes(ctx.keyword.toLowerCase())
  const ctaIncluded = Boolean(ctx.ctaText) && text.includes(ctx.ctaText as string)

  return {
    id,
    label,
    text,
    length,
    lengthStatus: classifyLength(length),
    keywordIncluded,
    resolvedIntentLabel: INTENT_LABELS[ctx.intent],
    ctaIncluded,
    ctaText: ctaIncluded ? ctx.ctaText : null,
  }
}

function buildContext(form: MetaDescriptionFormState, salt: string): BuildContext {
  const seed = hashString(
    `${form.primaryKeyword}|${form.secondaryKeywords}|${form.pageType}|${form.searchIntent}|${form.location}|${form.benefits}|${form.ctaPreference}|${salt}`,
  )
  const rand = mulberry32(seed)
  const intent = resolveIntent(form)
  const ctaText = resolveCta(form, intent, rand)

  return {
    form,
    intent,
    ctaText,
    benefits: splitList(form.benefits),
    secondaryKeywords: splitList(form.secondaryKeywords),
    location: form.location.trim(),
    audience: form.targetAudience.trim(),
    keyword: form.primaryKeyword.trim(),
    meta: PAGE_TYPE_META[form.pageType],
    rand,
  }
}

export function generateDescriptionSet(form: MetaDescriptionFormState, regenSeed = 0): GeneratedDescriptionSet {
  return {
    seo: buildOne("seo", "SEO Focused", buildSeoDescription, buildContext(form, `seo-${regenSeed}`)),
    ctr: buildOne("ctr", "CTR Focused", buildCtrDescription, buildContext(form, `ctr-${regenSeed}`)),
    balanced: buildOne("balanced", "Balanced", buildBalancedDescription, buildContext(form, `balanced-${regenSeed}`)),
  }
}

export function regenerateOne(
  form: MetaDescriptionFormState,
  id: OptionId,
  regenSeed: number,
): GeneratedDescription {
  const ctx = buildContext(form, `${id}-${regenSeed}`)
  if (id === "seo") return buildOne("seo", "SEO Focused", buildSeoDescription, ctx)
  if (id === "ctr") return buildOne("ctr", "CTR Focused", buildCtrDescription, ctx)
  return buildOne("balanced", "Balanced", buildBalancedDescription, ctx)
}

export { INTENT_LABELS }
