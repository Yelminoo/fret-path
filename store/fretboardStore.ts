import { create } from 'zustand'
import type { ScaleType, TriadType } from '@/types'

interface FretboardState {
  root: number
  scaleType: ScaleType
  triadType: TriadType
  inversion: 0 | 1 | 2
  stringSet: number[]
  showScale: boolean
  showTriad: boolean
  setRoot: (root: number) => void
  setScaleType: (t: ScaleType) => void
  setTriadType: (t: TriadType) => void
  setInversion: (i: 0 | 1 | 2) => void
  setStringSet: (s: number[]) => void
  toggleScale: () => void
  toggleTriad: () => void
}

export const useFretboardStore = create<FretboardState>((set) => ({
  root: 0,
  scaleType: 'pentatonic',
  triadType: 'major',
  inversion: 0,
  stringSet: [0, 1, 2],
  showScale: false,
  showTriad: true,
  setRoot: (root) => set({ root }),
  setScaleType: (scaleType) => set({ scaleType }),
  setTriadType: (triadType) => set({ triadType }),
  setInversion: (inversion) => set({ inversion }),
  setStringSet: (stringSet) => set({ stringSet }),
  toggleScale: () => set(s => ({ showScale: !s.showScale })),
  toggleTriad: () => set(s => ({ showTriad: !s.showTriad })),
}))
