import { hashString, mulberry32, pick, toTitleCase } from "@/lib/blog-outline-generator/utils"
import { classifyLength } from "./length-status"
import { DESKTOP_PIXEL_GUIDANCE, estimatePixelWidth } from "./pixel-width"
import type { GeneratedTitle, GeneratedTitleSet, MetaTitleFormState, OptionId, PageType } from "./types"

const OPTION_ORDER: OptionId[] = ["keyword", "benefit", "question", "brand", "balanced"]

const OPTION_LABELS: Record<OptionId, string> = {
  keyword: "Keyword-Led",
  benefit: "Benefit-Led",
  question: "Question Hook",
  brand: "Brand-Forward",
  balanced: "Balanced",
}

// Hook templates for the "Question Hook" option, keyed by page type. Every
// entry is pre-checked against the banned-claims list (no "best", "#1",
// "guaranteed", invented offers or dates) so this generator can never invent
// a claim the user didn't supply.
const HOOK_POOLS: Record<PageType, string[]> = {
  home: ["{Keyword}, Made Simple", "{Keyword} Starts Here", "Looking for {keyword}?"],
  service: ["Need {keyword}?", "{Keyword} — Get a Quote", "{Keyword}, Done Right", "Looking for {keyword}?"],
  location: ["{Keyword} Near You", "Local {Keyword}", "{Keyword}, Close to Home"],
  blog: ["How {keyword} Works", "{Keyword}: What You Need to Know", "A Simple Guide to {keyword}"],
  product: ["Find the Right {keyword}", "{Keyword} — In Stock Now", "Looking for {keyword}?"],
  category: ["Browse {Keyword}", "{Keyword}: Find What You Need", "Compare {keyword} Options"],
  landing: ["{Keyword} — See How It Works", "Ready for {keyword}?", "{Keyword} Starts Here"],
}

// Used instead of HOOK_POOLS for a blog keyword that already reads as a
// question or instruction (e.g. "How to improve website speed"), so the hook
// never doubles up its own framing on top of the keyword's ("How How to...").
const ALREADY_FRAMED_KEYWORD = /^(how to|how do|how does|how can|how should|what is|what are|why|when|where|which)\b/i
const BLOG_FRAMED_HOOKS = ["{Keyword}: What You Need to Know", "{Keyword}, Explained Simply", "{Keyword} — A Quick Guide"]

// Short, natural clauses for the Balanced option, keyed by page type.
const BALANCED_CLAUSES: Record<PageType, string[]> = {
  home: ["your go-to for this", "simple, reliable support"],
  service: ["clear pricing, no pressure", "straightforward support"],
  location: ["local help when you need it", "fast, local support"],
  blog: ["a practical, step-by-step guide", "a clear explanation"],
  product: ["details, specs & options", "everything you need to decide"],
  category: ["browse & compare easily", "find exactly what fits"],
  landing: ["see the details & decide", "a clear look at what's included"],
}

// Fallback descriptor used by the Brand-Forward option when no brand is
// supplied, so the title still reads as a distinct, page-type-appropriate
// style rather than duplicating another option.
const DESCRIPTOR_FALLBACK: Record<PageType, string> = {
  home: "Overview",
  service: "Services",
  location: "Near You",
  blog: "Guide",
  product: "Details",
  category: "Collection",
  landing: "Overview",
}

function hookPool(pageType: PageType, keyword: string): string[] {
  if (pageType === "blog" && ALREADY_FRAMED_KEYWORD.test(keyword)) return BLOG_FRAMED_HOOKS
  return HOOK_POOLS[pageType]
}

// Meta titles read naturally in Title Case throughout, so both placeholders
// resolve to the same (already Title Cased) keyword — no mid-sentence
// lowercasing, which would otherwise produce "Need web Design?".
function fillTemplate(template: string, keyword: string): string {
  return template.replace("{Keyword}", keyword).replace("{keyword}", keyword)
}

const LEAD_IN_STRIP = /^(we offer|we provide|this page is about|this is a page about|our service is|this is|we are|it is|it's)\s+/i
const TRAILING_STOPWORD = /\s+(in|for|and|the|a|an|to|of|with|on|at|by|from|or)$/i

/** Pulls a short, natural clause from the user's own page summary — never invented, just selected. */
function extractSummaryPhrase(summary: string, excludeKeyword: string): string {
  const firstSentence = summary.trim().split(/[.!?]/)[0] ?? ""
  let phrase = firstSentence.trim().replace(LEAD_IN_STRIP, "")
  if (!phrase) return ""

  const keywordLower = excludeKeyword.toLowerCase()
  const words = phrase.split(/\s+/).filter(Boolean)
  phrase = words.slice(0, 7).join(" ").replace(/[,;:\s]+$/, "")
  // Drop a trailing preposition/conjunction left dangling by the word cap,
  // so the phrase reads as a complete clause rather than cutting mid-thought.
  let previous = ""
  while (phrase !== previous) {
    previous = phrase
    phrase = phrase.replace(TRAILING_STOPWORD, "")
  }
  if (!phrase || phrase.toLowerCase() === keywordLower) return ""

  return phrase.charAt(0).toLowerCase() + phrase.slice(1)
}

function withBrandPipe(core: string, brand: string): string {
  return brand ? `${core} | ${brand}` : core
}

interface BuildContext {
  pageType: PageType
  keyword: string
  brand: string
  location: string
  useLocation: boolean
  summaryPhrase: string
  rand: () => number
}

function buildKeywordLed(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, rand } = ctx
  let lead = keyword
  if (useLocation) lead = rand() < 0.5 ? `${keyword} in ${location}` : `${location} ${keyword}`
  return withBrandPipe(lead, brand)
}

function buildBenefitLed(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, pageType, summaryPhrase, rand } = ctx
  let lead = keyword
  if (useLocation) lead = `${keyword} in ${location}`

  const clause = summaryPhrase || pick(BALANCED_CLAUSES[pageType], rand)
  const core = `${lead} – ${clause}`
  return withBrandPipe(core, brand)
}

function buildQuestionHook(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, pageType, rand } = ctx
  const pool = hookPool(pageType, keyword)
  let hook = fillTemplate(pick(pool, rand), keyword)

  if (useLocation && !hook.toLowerCase().includes(location.toLowerCase())) {
    hook = `${hook} in ${location}`
  }
  return withBrandPipe(hook, brand)
}

function buildBrandForward(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, pageType } = ctx
  const lead = useLocation ? `${keyword} in ${location}` : keyword

  if (brand) return `${brand}: ${lead}`
  return `${lead} ${DESCRIPTOR_FALLBACK[pageType]}`
}

function buildBalanced(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, pageType, rand } = ctx
  let lead = keyword
  if (useLocation) lead = `${lead} in ${location}`

  // Deliberately uses the page-type clause pool rather than the summary
  // phrase, so Balanced reads differently from Benefit-Led even when both
  // would otherwise lean on the same source text.
  const clause = pick(BALANCED_CLAUSES[pageType], rand)
  const core = `${lead} – ${clause}`
  return withBrandPipe(core, brand)
}

const BUILDERS: Record<OptionId, (ctx: BuildContext) => string> = {
  keyword: buildKeywordLed,
  benefit: buildBenefitLed,
  question: buildQuestionHook,
  brand: buildBrandForward,
  balanced: buildBalanced,
}

function describe(id: OptionId, brandSupplied: boolean): string {
  switch (id) {
    case "keyword":
      return "Leads with your exact keyword."
    case "benefit":
      return "Highlights what the page offers."
    case "question":
      return "A short hook designed to catch attention."
    case "brand":
      return brandSupplied ? "Puts your brand name first." : "A descriptive, page-type style title."
    case "balanced":
      return "Blends your keyword, detail and brand."
  }
}

function buildOne(id: OptionId, ctx: BuildContext): GeneratedTitle {
  const text = BUILDERS[id](ctx)
  return finalize(id, text, ctx)
}

function finalize(id: OptionId, text: string, ctx: BuildContext): GeneratedTitle {
  const length = text.length
  const pixelWidth = estimatePixelWidth(text)
  const keywordIncluded = text.toLowerCase().includes(ctx.keyword.toLowerCase())
  const brandIncluded = Boolean(ctx.brand) && text.toLowerCase().includes(ctx.brand.toLowerCase())

  return {
    id,
    label: OPTION_LABELS[id],
    description: describe(id, Boolean(ctx.brand)),
    text,
    length,
    lengthStatus: classifyLength(length),
    pixelWidth,
    overflowsDesktop: pixelWidth > DESKTOP_PIXEL_GUIDANCE,
    keywordIncluded,
    brandIncluded,
  }
}

function buildContext(form: MetaTitleFormState, salt: string): BuildContext {
  const seed = hashString(
    `${form.primaryKeyword}|${form.pageSummary}|${form.pageType}|${form.location}|${form.brand}|${form.tone}|${salt}`,
  )
  const rand = mulberry32(seed)
  const keyword = toTitleCase(form.primaryKeyword.trim())
  const location = form.location.trim()
  const useLocation = Boolean(location) && !keyword.toLowerCase().includes(location.toLowerCase())
  const summaryPhrase = extractSummaryPhrase(form.pageSummary, keyword)

  return {
    pageType: form.pageType,
    keyword,
    brand: form.brand.trim(),
    location,
    useLocation,
    summaryPhrase,
    rand,
  }
}

function normalizeForCompare(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
}

/** Regenerates a single title with a bumped local seed until it no longer duplicates the others, or gives up after a few tries. */
function buildDistinct(id: OptionId, form: MetaTitleFormState, regenSeed: number, existing: string[]): GeneratedTitle {
  let attempt = 0
  let result: GeneratedTitle
  do {
    const ctx = buildContext(form, `${id}-${regenSeed}-${attempt}`)
    result = buildOne(id, ctx)
    attempt += 1
  } while (attempt < 5 && existing.some((text) => normalizeForCompare(text) === normalizeForCompare(result.text)))
  return result
}

export function generateTitleSet(form: MetaTitleFormState, regenSeed = 0): GeneratedTitleSet {
  const results: GeneratedTitle[] = []
  for (const id of OPTION_ORDER) {
    const existing = results.map((r) => r.text)
    results.push(buildDistinct(id, form, regenSeed, existing))
  }
  return results
}

export function regenerateOne(form: MetaTitleFormState, id: OptionId, regenSeed: number, others: string[]): GeneratedTitle {
  return buildDistinct(id, form, regenSeed, others)
}

/**
 * Shortens a title by removing a whole trailing clause (brand suffix, dash
 * clause, or trailing location phrase) rather than cutting characters, so
 * the remaining text is never a mid-word or mid-sentence fragment. Returns
 * the original text unchanged with `changed: false` if nothing removable is
 * found.
 */
export function shortenTitle(text: string): { text: string; changed: boolean } {
  const pipeIndex = text.lastIndexOf(" | ")
  if (pipeIndex > 0) {
    return { text: text.slice(0, pipeIndex).trim(), changed: true }
  }

  const dashMatch = text.match(/^(.*)\s[–-]\s[^–-]+$/)
  if (dashMatch) {
    return { text: dashMatch[1].trim(), changed: true }
  }

  const locationMatch = text.match(/^(.*)\sin\s[A-Za-z][A-Za-z\s]*$/)
  if (locationMatch && locationMatch[1].trim().length > 0) {
    return { text: locationMatch[1].trim(), changed: true }
  }

  const colonMatch = text.match(/^[^:]+:\s*(.+)$/)
  if (colonMatch) {
    return { text: colonMatch[1].trim(), changed: true }
  }

  return { text, changed: false }
}

export { OPTION_ORDER, OPTION_LABELS }
