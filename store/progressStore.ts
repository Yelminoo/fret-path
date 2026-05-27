import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Genre } from '@/types'

interface ProgressState {
  completed: Record<string, boolean>
  toggleStep: (genre: Genre, stepId: string) => void
  isCompleted: (genre: Genre, stepId: string) => boolean
  countCompleted: (genre: Genre, total: number) => number
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: {},
      toggleStep: (genre, stepId) => {
        const key = `${genre}:${stepId}`
        set(s => ({ completed: { ...s.completed, [key]: !s.completed[key] } }))
      },
      isCompleted: (genre, stepId) => !!get().completed[`${genre}:${stepId}`],
      countCompleted: (genre, total) => {
        const c = get().completed
        return Array.from({ length: total }, (_, i) => i)
          .filter(i => c[`${genre}:${i}`])
          .length
      },
    }),
    { name: 'fretpath-progress' }
  )
)
