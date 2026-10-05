import { CATEGORIES, GENERAL_PROFILE, GENERAL_SECTIONS, type CategoryProfile, type SectionPoolItem } from "./categories"
import type {
  ContentType,
  FaqItem,
  GeneratedOutline,
  InternalLinkSuggestion,
  OutlineFormState,
  OutlineHeading,
  SearchIntent,
  WordCount,
} from "./types"
import {
  currentYear,
  extractCoreSubject,
  hashString,
  mulberry32,
  pick,
  seededShuffle,
  slugify,
  splitKeywords,
  startsWithVerb,
  toTitleCase,
  trimToLength,
} from "./utils"

const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  "how-to": "How-To Guide",
  listicle: "Listicle",
  comparison: "Comparison",
  "ultimate-guide": "Ultimate Guide",
  "case-study": "Case Study",
  tutorial: "Tutorial",
  "beginner-guide": "Beginner Guide",
}

const SEARCH_INTENT_LABELS: Record<SearchIntent, string> = {
  auto: "Auto-Detected",
  informational: "Informational",
  commercial: "Commercial",
  transactional: "Transactional",
  navigational: "Navigational",
}

const COMMERCIAL_SIGNALS = ["best", "top", "review", "vs", "versus", "compare", "comparison", "alternative"]
const TRANSACTIONAL_SIGNALS = ["buy", "price", "pricing", "cost", "service", "agency", "hire", "near me", "quote", "for sale"]
const NAVIGATIONAL_SIGNALS = ["linkedo", "login", "sign in", "dashboard", "contact"]

const SECTION_COUNT_BY_WORD_COUNT: Record<WordCount, number> = {
  "800": 5,
  "1200": 6,
  "1500": 7,
  "2000": 8,
  "2500+": 9,
}

function interpolate(template: string, subject: string, keyword: string): string {
  const Subject = toTitleCase(subject)
  return template
    .replace(/\{Subject\}/g, Subject)
    .replace(/\{subject\}/g, subject)
    .replace(/\{keyword\}/g, keyword || subject)
}

function detectIntent(form: OutlineFormState, subject: string): SearchIntent {
  if (form.searchIntent !== "auto") return form.searchIntent
  const haystack = `${subject} ${form.primaryKeyword} ${form.secondaryKeywords}`.toLowerCase()
  if (NAVIGATIONAL_SIGNALS.some((s) => haystack.includes(s))) return "navigational"
  if (TRANSACTIONAL_SIGNALS.some((s) => haystack.includes(s))) return "transactional"
  if (COMMERCIAL_SIGNALS.some((s) => haystack.includes(s))) return "commercial"
  return "informational"
}

function resolveCategory(subjectHaystack: string): { profile: CategoryProfile; isGeneral: boolean } {
  const haystack = subjectHaystack.toLowerCase()
  let best: { profile: CategoryProfile; score: number } | null = null
  for (const category of CATEGORIES) {
    const score = category.triggers.reduce((acc, trigger) => (haystack.includes(trigger) ? acc + 1 : acc), 0)
    if (score > 0 && (!best || score > best.score)) {
      best = { profile: category, score }
    }
  }
  if (best) return { profile: best.profile, isGeneral: false }

  const generalProfile: CategoryProfile = {
    id: "general",
    triggers: [],
    sections: GENERAL_SECTIONS,
    ...GENERAL_PROFILE,
  }
  return { profile: generalProfile, isGeneral: true }
}

function buildSeed(form: OutlineFormState, salt: string): number {
  return hashString(`${form.topic}|${form.primaryKeyword}|${form.secondaryKeywords}|${form.contentType}|${form.searchIntent}|${salt}`)
}

function buildH1(form: OutlineFormState, subject: string, seed: number): string {
  const rand = mulberry32(seed)
  const keywordPhrase = form.primaryKeyword.trim() || subject
  const subjectTitle = toTitleCase(keywordPhrase)
  const listNumbers = [7, 9, 10, 12]

  const howToTemplates = startsWithVerb(keywordPhrase)
    ? [`How to ${subjectTitle} (Step-by-Step Guide)`, `How to ${subjectTitle}: A Practical Guide`]
    : [`${subjectTitle}: A Step-by-Step How-To Guide`, `A Practical Guide to ${subjectTitle}`]

  const templatesByType: Record<ContentType, string[]> = {
    "how-to": howToTemplates,
    listicle: [
      `${pick(listNumbers, rand)} Proven Ways to ${subjectTitle}`,
      `${pick(listNumbers, rand)} Tips to ${subjectTitle} Effectively`,
    ],
    comparison: [`${subjectTitle}: A Complete Comparison Guide`, `Comparing Your Options for ${subjectTitle}`],
    "ultimate-guide": [`The Ultimate Guide to ${subjectTitle}`, `${subjectTitle}: The Complete Guide`],
    "case-study": [`${subjectTitle}: A Real-World Case Study`, `How We Approached ${subjectTitle}: A Case Study`],
    tutorial: [`${subjectTitle}: A Step-by-Step Tutorial`, `A Practical Tutorial on ${subjectTitle}`],
    "beginner-guide": [`${subjectTitle} for Beginners: Everything You Need to Know`, `A Beginner's Guide to ${subjectTitle}`],
  }

  const options = templatesByType[form.contentType]
  return pick(options, rand)
}

function buildSlug(form: OutlineFormState, subject: string): string {
  const base = form.primaryKeyword.trim() || subject
  return slugify(base)
}

function buildMetaTitle(h1: string, seed: number): string {
  const withBrand = `${h1} | Linkedo`
  if (withBrand.length <= 60) return withBrand
  if (h1.length <= 60) return h1

  // Drop a trailing parenthetical qualifier like "(Step-by-Step Guide)" before
  // resorting to a hard word-boundary trim, so the title stays grammatical.
  const withoutParenthetical = h1.replace(/\s*\([^)]*\)\s*$/, "").trim()
  if (withoutParenthetical.length <= 60 && withoutParenthetical !== h1) return withoutParenthetical

  return trimToLength(withoutParenthetical || h1, 60)
}

function buildMetaDescription(form: OutlineFormState, subject: string, seed: number): string {
  const rand = mulberry32(seed)
  const keyword = form.primaryKeyword.trim() || subject
  const audience = form.targetAudience.trim()
  const audiencePhrase = audience ? ` for ${audience.toLowerCase()}` : ""

  const templates = [
    `Learn ${keyword}${audiencePhrase} with practical, step-by-step guidance you can apply straight away. Clear advice, no fluff.`,
    `A practical guide to ${keyword}${audiencePhrase}, covering what actually works and how to measure real results.`,
    `Everything you need to know about ${keyword}${audiencePhrase} — practical steps, common pitfalls, and how to get started.`,
  ]
  const description = pick(templates, rand)
  return trimToLength(description, 160)
}

function buildIntroGuidance(form: OutlineFormState, subject: string): string[] {
  const audience = form.targetAudience.trim() || "the reader"
  const keyword = form.primaryKeyword.trim() || subject
  const contentTypeLabel = CONTENT_TYPE_LABELS[form.contentType].toLowerCase()

  const guidance = [
    `Open with a relatable problem or situation involving ${subject} that ${audience} is likely facing right now.`,
    `Briefly explain why ${keyword} matters today and what's changed recently that makes it worth addressing.`,
    `Preview the key sections readers will find in this ${contentTypeLabel}, so they know what to expect.`,
    `Set a clear expectation: what will ${audience} be able to do or understand by the end of the article?`,
  ]

  if (["how-to", "tutorial", "beginner-guide"].includes(form.contentType)) {
    guidance.push("Mention any prerequisites, tools, or background knowledge needed before diving into the steps.")
  }

  return guidance
}

function applyContentTypeStructure(
  form: OutlineFormState,
  subject: string,
  sections: OutlineHeading[],
): OutlineHeading[] {
  if (form.contentType === "listicle") {
    return sections.map((section, index) => ({
      ...section,
      text: `${index + 1}. ${section.text}`,
    }))
  }

  if (form.contentType === "comparison") {
    return [
      { level: "h2", text: "Quick Comparison Overview", guidance: "Summarise the main options at a glance before going into detail, ideally as a short table." },
      ...sections,
      { level: "h2", text: "Which Option Is Right for You?", guidance: "Help the reader decide based on their specific situation, budget, or priorities rather than declaring one universal winner." },
    ]
  }

  if (form.contentType === "case-study") {
    return [
      { level: "h2", text: "Background and the Challenge", guidance: "Set the scene: who was involved, what the starting situation looked like, and what problem needed solving." },
      ...sections,
      { level: "h2", text: "Results and Key Takeaways", guidance: "Share concrete outcomes and the lessons a reader can apply to their own situation." },
    ]
  }

  return sections
}

function buildOutline(
  form: OutlineFormState,
  subject: string,
  profile: CategoryProfile,
  isGeneral: boolean,
  seed: number,
): OutlineHeading[] {
  const rand = mulberry32(seed)
  const targetCount = SECTION_COUNT_BY_WORD_COUNT[form.wordCount]
  const resolvedPool: SectionPoolItem[] = profile.sections.map((item) => ({
    ...item,
    heading: interpolate(item.heading, subject, form.primaryKeyword),
    guidance: interpolate(item.guidance, subject, form.primaryKeyword),
  }))

  // Shuffle which sections are *included* for variety across regenerates/topics,
  // but keep the chosen ones in their authored (logically ordered) sequence.
  const shuffled = seededShuffle(resolvedPool, rand)
  const chosenSet = new Set(shuffled.slice(0, Math.min(targetCount, resolvedPool.length)))
  const selected = resolvedPool.filter((item) => chosenSet.has(item))

  const headings: OutlineHeading[] = selected.map((item, index) => {
    const children: OutlineHeading[] = (item.subpoints || []).map((sub, subIndex) => {
      const h4s =
        subIndex === 0 && item.deepDive && item.deepDive.length > 0
          ? item.deepDive.map((text): OutlineHeading => ({ level: "h4", text }))
          : undefined
      return { level: "h3", text: sub, children: h4s }
    })
    return {
      level: "h2",
      text: item.heading,
      guidance: item.guidance,
      children: children.length > 0 ? children : undefined,
    }
  })

  return applyContentTypeStructure(form, subject, headings)
}

function dedupeAgainst(candidates: string[], existing: string[], limit: number): string[] {
  const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim()
  const existingNormalised = existing.map(normalise)
  const result: string[] = []
  for (const candidate of candidates) {
    const n = normalise(candidate)
    const isDupe = existingNormalised.some((e) => e === n || (e.length > 10 && (e.includes(n) || n.includes(e))))
    if (!isDupe && !result.some((r) => normalise(r) === n)) {
      result.push(candidate)
    }
    if (result.length >= limit) break
  }
  return result
}

function buildQuestions(form: OutlineFormState, subject: string, profile: CategoryProfile, seed: number): string[] {
  const rand = mulberry32(seed)
  const pool = profile.questions.map((q) => interpolate(q, subject, form.primaryKeyword))
  const shuffled = seededShuffle(pool, rand)
  const count = Math.min(Math.max(5, Math.floor(rand() * 4) + 6), shuffled.length, 10)
  return shuffled.slice(0, count)
}

function buildFaqs(form: OutlineFormState, subject: string, profile: CategoryProfile, seed: number, excludeQuestions: string[]): FaqItem[] {
  const rand = mulberry32(seed)
  const pool = profile.faqs.map((f) => ({
    question: interpolate(f.q, subject, form.primaryKeyword),
    answer: interpolate(f.a, subject, form.primaryKeyword),
  }))
  const shuffled = seededShuffle(pool, rand)
  const nonDupeQuestions = dedupeAgainst(
    shuffled.map((f) => f.question),
    excludeQuestions,
    8,
  )
  const byQuestion = new Map(shuffled.map((f) => [f.question, f]))
  const count = Math.min(Math.max(5, Math.floor(rand() * 3) + 5), nonDupeQuestions.length || shuffled.length, 8)
  const picked = (nonDupeQuestions.length > 0 ? nonDupeQuestions : shuffled.map((f) => f.question)).slice(0, count)
  return picked.map((q) => byQuestion.get(q)!).filter(Boolean)
}

function buildInternalLinks(profile: CategoryProfile): InternalLinkSuggestion[] {
  return profile.internalLinks
}

function buildCta(form: OutlineFormState, profile: CategoryProfile, intent: SearchIntent): { text: string; href: string } {
  const match = profile.ctas.find((cta) => cta.intents.includes(intent)) || profile.ctas[0]
  return { text: match.text, href: match.href }
}

function buildEnhancementIdeas(form: OutlineFormState, profile: CategoryProfile, seed: number): string[] {
  const rand = mulberry32(seed)
  const pool = [...profile.enhancementIdeas]
  if (form.contentType === "comparison" && !pool.includes("A side-by-side comparison table")) {
    pool.unshift("A side-by-side comparison table")
  }
  if (["how-to", "tutorial", "beginner-guide"].includes(form.contentType) && !pool.some((p) => p.toLowerCase().includes("checklist"))) {
    pool.unshift("A downloadable checklist")
  }
  const shuffled = seededShuffle(pool, rand)
  return shuffled.slice(0, Math.min(5, shuffled.length))
}

export function buildSeoOverview(form: OutlineFormState, subject: string, profile: CategoryProfile) {
  const intent = detectIntent(form, subject)
  return {
    primaryKeyword: form.primaryKeyword.trim() || subject,
    searchIntent: form.searchIntent === "auto" ? `${SEARCH_INTENT_LABELS[intent]} (auto-detected)` : SEARCH_INTENT_LABELS[intent],
    contentType: CONTENT_TYPE_LABELS[form.contentType],
    wordCount: form.wordCount === "2500+" ? "2,500+ words" : `${Number(form.wordCount).toLocaleString()} words`,
    targetAudience: form.targetAudience.trim() || "General readers researching this topic",
  }
}

export function resolveSubjectAndProfile(form: OutlineFormState) {
  const subject = extractCoreSubject(form.primaryKeyword.trim() || form.topic.trim()).toLowerCase()
  const haystack = `${form.topic} ${form.primaryKeyword} ${form.secondaryKeywords}`
  const { profile, isGeneral } = resolveCategory(haystack)
  return { subject, profile, isGeneral, intent: detectIntent(form, subject) }
}

export function generateFullOutline(form: OutlineFormState, regenSeed = 0): GeneratedOutline {
  const { subject, profile, isGeneral, intent } = resolveSubjectAndProfile(form)

  const h1 = buildH1(form, subject, buildSeed(form, `h1-${regenSeed}`))
  const outline = buildOutline(form, subject, profile, isGeneral, buildSeed(form, `outline-${regenSeed}`))
  const questions = buildQuestions(form, subject, profile, buildSeed(form, `questions-${regenSeed}`))
  const faqs = buildFaqs(form, subject, profile, buildSeed(form, `faqs-${regenSeed}`), questions)

  return {
    seoOverview: buildSeoOverview(form, subject, profile),
    h1,
    slug: buildSlug(form, subject),
    introGuidance: buildIntroGuidance(form, subject),
    outline,
    questions,
    faqs,
    internalLinks: buildInternalLinks(profile),
    metaTitle: buildMetaTitle(h1, buildSeed(form, `metaTitle-${regenSeed}`)),
    metaDescription: buildMetaDescription(form, subject, buildSeed(form, `metaDescription-${regenSeed}`)),
    cta: buildCta(form, profile, intent),
    enhancementIdeas: buildEnhancementIdeas(form, profile, buildSeed(form, `enhance-${regenSeed}`)),
  }
}

export function regenerateH1(form: OutlineFormState, current: GeneratedOutline, regenSeed: number): GeneratedOutline {
  const { subject } = resolveSubjectAndProfile(form)
  const h1 = buildH1(form, subject, buildSeed(form, `h1-${regenSeed}`))
  return { ...current, h1 }
}

export function regenerateMetaTitle(form: OutlineFormState, current: GeneratedOutline, regenSeed: number): GeneratedOutline {
  const metaTitle = buildMetaTitle(current.h1, buildSeed(form, `metaTitle-${regenSeed}`))
  return { ...current, metaTitle }
}

export function regenerateMetaDescription(form: OutlineFormState, current: GeneratedOutline, regenSeed: number): GeneratedOutline {
  const { subject } = resolveSubjectAndProfile(form)
  const metaDescription = buildMetaDescription(form, subject, buildSeed(form, `metaDescription-${regenSeed}`))
  return { ...current, metaDescription }
}

export function regenerateFaqs(form: OutlineFormState, current: GeneratedOutline, regenSeed: number): GeneratedOutline {
  const { subject, profile } = resolveSubjectAndProfile(form)
  const faqs = buildFaqs(form, subject, profile, buildSeed(form, `faqs-${regenSeed}`), current.questions)
  return { ...current, faqs }
}

export function formatOutlineAsText(outline: GeneratedOutline): string {
  const lines: string[] = []
  lines.push(`H1: ${outline.h1}`)
  lines.push(`URL: ${outline.slug}`)
  lines.push("")
  lines.push("Introduction guidance:")
  outline.introGuidance.forEach((g) => lines.push(`- ${g}`))
  lines.push("")

  const render = (heading: OutlineHeading, depth: number) => {
    const prefix = heading.level.toUpperCase()
    const indent = "  ".repeat(depth)
    lines.push(`${indent}${prefix}: ${heading.text}`)
    if (heading.guidance) lines.push(`${indent}  (${heading.guidance})`)
    heading.children?.forEach((child) => render(child, depth + 1))
  }
  outline.outline.forEach((h) => render(h, 0))

  lines.push("")
  lines.push("Questions this article should answer:")
  outline.questions.forEach((q) => lines.push(`- ${q}`))

  lines.push("")
  lines.push("FAQs:")
  outline.faqs.forEach((f) => {
    lines.push(`Q: ${f.question}`)
    lines.push(`A: ${f.answer}`)
  })

  lines.push("")
  lines.push(`Meta title: ${outline.metaTitle}`)
  lines.push(`Meta description: ${outline.metaDescription}`)
  lines.push(`CTA: ${outline.cta.text}`)

  return lines.join("\n")
}

export { CONTENT_TYPE_LABELS, SEARCH_INTENT_LABELS, currentYear }
