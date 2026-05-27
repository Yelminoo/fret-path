import type { Chord } from '@/types'

// Note indices (C=0 … B=11)
const C=0,Cs=1,D=2,Ds=3,E=4,F=5,Fs=6,G=7,Gs=8,A=9,As=10,B=11

export const CHORD_TEMPLATES: Chord[] = [
  { name: 'C',  notes: [C, E, G] },
  { name: 'Cm', notes: [C, Ds, G] },
  { name: 'D',  notes: [D, Fs, A] },
  { name: 'Dm', notes: [D, F, A] },
  { name: 'E',  notes: [E, Gs, B] },
  { name: 'Em', notes: [E, G, B] },
  { name: 'F',  notes: [F, A, C] },
  { name: 'Fm', notes: [F, Gs, C] },
  { name: 'G',  notes: [G, B, D] },
  { name: 'Gm', notes: [G, As, D] },
  { name: 'A',  notes: [A, Cs, E] },
  { name: 'Am', notes: [A, C, E] },
  { name: 'B',  notes: [B, Ds, Fs] },
  { name: 'Bm', notes: [B, D, Fs] },
]

export function matchChord(chroma: number[]): { name: string; confidence: number } | null {
  let best = { name: '', confidence: 0 }

  for (const chord of CHORD_TEMPLATES) {
    const template = new Array(12).fill(0)
    chord.notes.forEach(n => (template[n] = 1))

    const dot = chroma.reduce((sum, v, i) => sum + v * template[i], 0)
    const mag = Math.sqrt(chroma.reduce((s, v) => s + v * v, 0))
    const confidence = mag > 0 ? dot / mag : 0

    if (confidence > best.confidence) best = { name: chord.name, confidence }
  }

  return best.confidence > 0.5 ? best : null
}
