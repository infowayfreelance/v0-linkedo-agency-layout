/** Prefixes https:// onto a URL the user typed without a protocol (e.g. "example.com" -> "https://example.com"). Leaves an existing http(s):// as-is. */
export function normalizeUrl(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) return ""
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

/** UTM values are lowercase, trimmed, and space-separated words become hyphenated — this is what GA/GA4 expects for consistent, de-duplicated reporting. */
export function formatUtmValue(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
}

export interface UtmFields {
  source: string
  medium: string
  campaign: string
  term: string
  content: string
}

export type BuildUtmUrlResult = { ok: true; href: string; params: Record<string, string> } | { ok: false; error: string }

/**
 * Builds the tracking URL with URLSearchParams.set() rather than string
 * concatenation, so any query parameters already on the URL are preserved
 * untouched and only the five utm_ keys are added or overwritten.
 */
export function buildUtmUrl(rawUrl: string, fields: UtmFields): BuildUtmUrlResult {
  const normalized = normalizeUrl(rawUrl)
  if (!normalized) {
    return { ok: false, error: "Please enter a website URL." }
  }

  let parsed: URL
  try {
    parsed = new URL(normalized)
  } catch {
    return { ok: false, error: "Please enter a valid website URL (e.g. example.com/page)." }
  }

  const params: Record<string, string> = {}
  const source = formatUtmValue(fields.source)
  const medium = formatUtmValue(fields.medium)
  const campaign = formatUtmValue(fields.campaign)
  const term = formatUtmValue(fields.term)
  const content = formatUtmValue(fields.content)

  if (source) params.utm_source = source
  if (medium) params.utm_medium = medium
  if (campaign) params.utm_campaign = campaign
  if (term) params.utm_term = term
  if (content) params.utm_content = content

  for (const [key, value] of Object.entries(params)) {
    parsed.searchParams.set(key, value)
  }

  return { ok: true, href: parsed.toString(), params }
}

export function paramsToQueryString(params: Record<string, string>): string {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}
