// Small deterministic PRNG (mulberry32) seeded from a string, so the same
// inputs + regenerate count always produce a stable-but-varied selection
// instead of true randomness (no network/model call is available here).
export function hashString(input: string): number {
  let h = 1779033703 ^ input.length
  for (let i = 0; i < input.length; i++) {
    h = Math.imul(h ^ input.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return h >>> 0
}

export function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function seededShuffle<T>(items: T[], rand: () => number): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function pick<T>(items: T[], rand: () => number): T {
  return items[Math.floor(rand() * items.length)]
}

const FILLER_PREFIXES = [
  /^the ultimate guide to\s+/i,
  /^ultimate guide to\s+/i,
  /^complete guide to\s+/i,
  /^a complete guide to\s+/i,
  /^beginner'?s guide to\s+/i,
  /^a guide to\s+/i,
  /^guide to\s+/i,
  /^how to\s+/i,
  /^how do i\s+/i,
  /^how can i\s+/i,
  /^best ways to\s+/i,
  /^ways to\s+/i,
  /^tips (for|to)\s+/i,
  /^what is\s+/i,
  /^everything (about|you need to know about)\s+/i,
  /^introduction to\s+/i,
  /^a beginner'?s introduction to\s+/i,
]

const TRAILING_FILLER = [/\s+guide$/i, /\s+tips$/i, /\?+$/]

/** Strips leading/trailing filler phrases to get the core subject, e.g. "How to improve website SEO" -> "improve website SEO" */
export function extractCoreSubject(topic: string): string {
  let core = topic.trim()
  for (const re of FILLER_PREFIXES) {
    core = core.replace(re, "")
  }
  for (const re of TRAILING_FILLER) {
    core = core.replace(re, "")
  }
  core = core.replace(/\s{2,}/g, " ").trim()
  return core || topic.trim()
}

const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "in",
  "nor",
  "of",
  "on",
  "or",
  "per",
  "the",
  "to",
  "vs",
  "with",
])

export function toTitleCase(input: string): string {
  const words = input.trim().split(/\s+/)
  return words
    .map((word, index) => {
      // Preserve intentional mixed-case brand names (WordPress, iPhone, YouTube, eBay)
      // and all-caps acronyms (SEO, UK, AI, PPC) rather than flattening their casing.
      const hasInternalUppercase = /[a-z].*[A-Z]|^[a-z][A-Z]/.test(word)
      const isAcronym = /^[A-Z0-9]+$/.test(word) && word.length <= 5
      if (hasInternalUppercase || isAcronym) return word

      const lower = word.toLowerCase()
      if (index !== 0 && index !== words.length - 1 && SMALL_WORDS.has(lower)) {
        return lower
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join(" ")
}

const VERB_START_PATTERN =
  /^(do|does|use|using|improve|improving|create|creating|build|building|write|writing|run|running|set up|setting up|start|starting|choose|choosing|manage|managing|grow|growing|increase|increasing|generate|generating|optimi[sz]e|optimi[sz]ing|design|designing|develop|developing|implement|implementing|launch|launching|scale|scaling|market|marketing|plan|planning|boost|boosting|reduce|reducing|avoid|avoiding|fix|fixing|track|tracking|measure|measuring|get|getting|find|finding|automate|automating)\b/i

/** Whether a phrase already reads like an action/instruction (starts with a verb), so "How to {phrase}" reads naturally. */
export function startsWithVerb(phrase: string): boolean {
  return VERB_START_PATTERN.test(phrase.trim())
}

export function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-")
  return `/${slug}`
}

/** Trims text to a max length at a word boundary, appending nothing extra (never mid-word truncation). */
export function trimToLength(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  const slice = text.slice(0, maxLength)
  const lastSpace = slice.lastIndexOf(" ")
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(/[,.;:\s]+$/, "")
}

export function splitKeywords(input: string): string[] {
  return input
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)
}

export function currentYear(): number {
  return new Date().getFullYear()
}
