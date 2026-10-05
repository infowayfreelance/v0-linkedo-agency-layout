import { hashString, mulberry32, pick, toTitleCase, trimToLength } from "@/lib/blog-outline-generator/utils"
import { classifyLength } from "./length-status"
import type { GeneratedTitle, GeneratedTitleSet, MetaTitleFormState, OptionId, PageType, SearchIntent } from "./types"

const INTENT_LABELS: Record<Exclude<SearchIntent, "auto">, string> = {
  informational: "Informational",
  commercial: "Commercial",
  transactional: "Transactional",
  local: "Local",
}

const COMMERCIAL_SIGNALS = ["best", "top", "compare", "vs", "versus", "review", "agency", "services", "company"]
const TRANSACTIONAL_SIGNALS = ["buy", "price", "pricing", "cost", "shop", "order", "for sale", "discount", "hire", "quote"]
const LOCAL_SIGNALS = ["near me", "local"]

function resolveIntent(form: MetaTitleFormState): Exclude<SearchIntent, "auto"> {
  if (form.searchIntent !== "auto") return form.searchIntent

  const haystack = `${form.primaryKeyword} ${form.secondaryKeyword}`.toLowerCase()

  if (form.location.trim() && (form.pageType === "location" || LOCAL_SIGNALS.some((s) => haystack.includes(s)))) {
    return "local"
  }
  if (TRANSACTIONAL_SIGNALS.some((s) => haystack.includes(s)) || form.pageType === "product") return "transactional"
  if (COMMERCIAL_SIGNALS.some((s) => haystack.includes(s)) || form.pageType === "service") return "commercial"
  if (form.pageType === "blog") return "informational"

  return "informational"
}

// Hook templates for the CTR-focused option, keyed by page type. Every entry is
// pre-checked against the banned-claims list (no "best", "#1", "guaranteed", etc.)
// so the generator can never invent a claim the user didn't supply.
const CTR_HOOKS: Record<PageType, string[]> = {
  home: ["{Keyword}, Made Simple", "{Keyword} Starts Here", "Everything You Need for {keyword}"],
  service: ["Need {keyword}?", "{Keyword}, Sorted", "{Keyword} — Get a Quote", "{Keyword}, Done Right"],
  location: ["{Keyword} Near You", "Local {Keyword}", "{Keyword}, Close to Home"],
  blog: ["How {keyword} Works", "{Keyword}: What You Need to Know", "A Simple Guide to {keyword}"],
  product: ["{Keyword} — Shop the Range", "Find the Right {keyword}", "{Keyword}, In Stock Now", "{Keyword} — Compare & Choose"],
  category: ["Browse {Keyword}", "{Keyword}: Find What You Need", "Compare {keyword} Options"],
  landing: ["{Keyword} — See How It Works", "Ready for {keyword}?", "{Keyword} Starts Here"],
}

// Used instead of CTR_HOOKS for a blog keyword that already reads as a
// question or instruction (e.g. "How to improve website speed"), so the hook
// never doubles up its own framing on top of the keyword's ("How How to...").
const ALREADY_FRAMED_KEYWORD = /^(how to|how do|how does|how can|how should|what is|what are|why|when|where|which)\b/i
const BLOG_FRAMED_CTR_HOOKS = ["{Keyword}: What You Need to Know", "{Keyword}, Explained Simply", "{Keyword} — A Quick Guide"]

function ctrHookPool(form: MetaTitleFormState, keyword: string): string[] {
  if (form.pageType === "blog" && ALREADY_FRAMED_KEYWORD.test(keyword)) {
    return BLOG_FRAMED_CTR_HOOKS
  }
  return CTR_HOOKS[form.pageType]
}

// Supporting clauses for the Balanced option, keyed by page type — deliberately
// different vocabulary and sentence shape from the SEO and CTR options above.
const BALANCED_CLAUSES: Record<PageType, string[]> = {
  home: ["your go-to for this", "simple, reliable support"],
  service: ["clear pricing, no pressure", "straightforward support"],
  location: ["local help when you need it", "fast, local support"],
  blog: ["a practical, step-by-step guide", "a clear explanation"],
  product: ["details, specs & options", "everything you need to decide"],
  category: ["browse & compare easily", "find exactly what fits"],
  landing: ["see the details & decide", "a clear look at what's included"],
}

// Meta titles read naturally in Title Case throughout, so both placeholders
// resolve to the same (already Title Cased) keyword — no mid-sentence
// lowercasing, which would otherwise produce "Need web Design?".
function fillTemplate(template: string, keyword: string): string {
  return template.replace("{Keyword}", keyword).replace("{keyword}", keyword)
}

function withBrand(core: string, brand: string, maxLength: number): string {
  if (!brand) return core
  const withPipe = `${core} | ${brand}`
  if (withPipe.length <= maxLength) return withPipe
  return core
}

interface BuildContext {
  form: MetaTitleFormState
  intent: Exclude<SearchIntent, "auto">
  keyword: string
  secondaryKeyword: string
  brand: string
  location: string
  useLocation: boolean
  rand: () => number
}

function buildSeoTitle(ctx: BuildContext): string {
  const { keyword, secondaryKeyword, brand, location, useLocation, rand } = ctx

  // Keyword relevance stays strongest either way; the ordering below is a
  // genuine (seeded) variation real SEO titles use, not a cosmetic reshuffle.
  let lead = keyword
  if (useLocation) {
    lead = rand() < 0.5 ? `${keyword} in ${location}` : `${location} ${keyword}`
  }

  let core = lead
  if (secondaryKeyword && rand() < 0.75) {
    const withSecondary = `${lead} – ${secondaryKeyword}`
    if (withBrand(withSecondary, brand, 65).length <= 65) core = withSecondary
  }

  const result = withBrand(core, brand, 65)
  return trimToLength(result, 65)
}

function buildCtrTitle(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, form, rand } = ctx
  const pool = ctrHookPool(form, keyword)
  let hook = fillTemplate(pick(pool, rand), keyword)

  if (useLocation && !hook.toLowerCase().includes(location.toLowerCase())) {
    hook = `${hook} in ${location}`
  }

  const result = withBrand(hook, brand, 65)
  return trimToLength(result, 65)
}

function buildBalancedTitle(ctx: BuildContext): string {
  const { keyword, location, useLocation, brand, form, rand } = ctx

  let lead = keyword
  if (useLocation) lead = `${lead} in ${location}`

  const clause = pick(BALANCED_CLAUSES[form.pageType], rand)
  const core = `${lead} – ${clause}`

  const result = withBrand(core, brand, 65)
  return trimToLength(result.length <= 65 ? result : withBrand(lead, brand, 65), 65)
}

function buildOne(id: OptionId, label: string, builder: (ctx: BuildContext) => string, ctx: BuildContext): GeneratedTitle {
  const text = builder(ctx)
  const length = text.length
  const keywordIncluded = text.toLowerCase().includes(ctx.keyword.toLowerCase())
  const brandIncluded = Boolean(ctx.brand) && text.toLowerCase().includes(ctx.brand.toLowerCase())

  return {
    id,
    label,
    text,
    length,
    lengthStatus: classifyLength(length),
    keywordIncluded,
    brandIncluded,
    resolvedIntentLabel: INTENT_LABELS[ctx.intent],
  }
}

function buildContext(form: MetaTitleFormState, salt: string): BuildContext {
  const seed = hashString(
    `${form.primaryKeyword}|${form.secondaryKeyword}|${form.pageType}|${form.searchIntent}|${form.location}|${form.brand}|${salt}`,
  )
  const rand = mulberry32(seed)
  const intent = resolveIntent(form)
  const location = form.location.trim()
  const useLocation = Boolean(location) && (intent === "local" || form.pageType === "location")

  return {
    form,
    intent,
    keyword: toTitleCase(form.primaryKeyword.trim()),
    secondaryKeyword: form.secondaryKeyword.trim() ? toTitleCase(form.secondaryKeyword.trim()) : "",
    brand: form.brand.trim(),
    location,
    useLocation,
    rand,
  }
}

export function generateTitleSet(form: MetaTitleFormState, regenSeed = 0): GeneratedTitleSet {
  return {
    seo: buildOne("seo", "SEO Focused", buildSeoTitle, buildContext(form, `seo-${regenSeed}`)),
    ctr: buildOne("ctr", "CTR Focused", buildCtrTitle, buildContext(form, `ctr-${regenSeed}`)),
    balanced: buildOne("balanced", "Balanced", buildBalancedTitle, buildContext(form, `balanced-${regenSeed}`)),
  }
}

export function regenerateOne(form: MetaTitleFormState, id: OptionId, regenSeed: number): GeneratedTitle {
  const ctx = buildContext(form, `${id}-${regenSeed}`)
  if (id === "seo") return buildOne("seo", "SEO Focused", buildSeoTitle, ctx)
  if (id === "ctr") return buildOne("ctr", "CTR Focused", buildCtrTitle, ctx)
  return buildOne("balanced", "Balanced", buildBalancedTitle, ctx)
}

export { INTENT_LABELS }
