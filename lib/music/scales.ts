import type { ScaleType } from '@/types'

// Intervals from root (semitones)
export const SCALE_INTERVALS: Record<ScaleType, number[]> = {
  pentatonic: [0, 2, 4, 7, 9],
  blues:      [0, 3, 5, 6, 7, 10],
  major:      [0, 2, 4, 5, 7, 9, 11],
  minor:      [0, 2, 3, 5, 7, 8, 10],
}

export function getScaleNotes(root: number, type: ScaleType): number[] {
  return SCALE_INTERVALS[type].map(i => (root + i) % 12)
}
