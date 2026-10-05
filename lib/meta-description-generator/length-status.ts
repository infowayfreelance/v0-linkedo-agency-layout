import type { LengthStatus } from "./types"

/**
 * Classifies a meta description's visible character count.
 * Counts only the rendered text — no HTML/formatting is ever present in these strings.
 */
export function classifyLength(length: number): LengthStatus {
  if (length < 130) return "Short"
  if (length < 140) return "Acceptable"
  if (length <= 160) return "Ideal"
  if (length <= 170) return "Slightly Long"
  return "Too Long"
}

export function lengthStatusLabel(status: LengthStatus): string {
  return status
}
