import type { LengthStatus } from "./types"

export function classifyLength(length: number): LengthStatus {
  if (length < 40) return "Short"
  if (length < 50) return "Acceptable"
  if (length <= 60) return "Ideal"
  if (length <= 65) return "Slightly Long"
  return "Too Long"
}
