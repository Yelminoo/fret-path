import { noteAt } from './notes'
import type { TriadNote, TriadType } from '@/types'

const TRIAD_INTERVALS: Record<TriadType, number[]> = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
}

const ROLES = ['root', 'third', 'fifth'] as const

export function findTriadNotes(
  root: number,
  stringSet: number[], // e.g. [3, 2, 1] = strings D G B (0-indexed from high e)
  inversion: 0 | 1 | 2,
  type: TriadType = 'major'
): TriadNote[] | null {
  const intervals = TRIAD_INTERVALS[type]
  // inversion shifts which note is bass
  const voicing = [
    (root + intervals[inversion % 3]) % 12,
    (root + intervals[(inversion + 1) % 3]) % 12,
    (root + intervals[(inversion + 2) % 3]) % 12,
  ]
  const roleOrder = [
    ROLES[inversion % 3],
    ROLES[(inversion + 1) % 3],
    ROLES[(inversion + 2) % 3],
  ]

  const result: TriadNote[] = []
  for (let s = 0; s < stringSet.length; s++) {
    const str = stringSet[s]
    const target = voicing[s]
    let found = false
    for (let fret = 0; fret <= 15; fret++) {
      if (noteAt(str, fret) === target) {
        result.push({ string: str, fret, noteIndex: target, role: roleOrder[s] })
        found = true
        break
      }
    }
    if (!found) return null
  }

  // Keep shapes compact (span ≤ 4 frets)
  const frets = result.map(n => n.fret).filter(f => f > 0)
  if (frets.length > 0 && Math.max(...frets) - Math.min(...frets) > 4) return null

  return result
}

export const STRING_SETS = [
  [0, 1, 2], // e B G
  [1, 2, 3], // B G D
  [2, 3, 4], // G D A
  [3, 4, 5], // D A E
]
