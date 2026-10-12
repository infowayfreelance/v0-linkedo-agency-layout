import type { LengthStatus } from "./types"

// Character-count bands used only as rough guidance for this tool's preview —
// not official Google limits, which Google does not publish as fixed character
// counts (it truncates by rendered pixel width, which varies by character).
export function classifyLength(length: number): LengthStatus {
  if (length < 40) return "Short"
  if (length < 50) return "Acceptable"
  if (length <= 60) return "Ideal"
  if (length <= 65) return "Slightly Long"
  return "Too Long"
}
