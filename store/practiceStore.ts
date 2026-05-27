import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PracticeState {
  streak: number
  totalChallenges: number
  correctChallenges: number
  tapHistory: number[]
  incrementStreak: () => void
  resetStreak: () => void
  recordChallenge: (correct: boolean) => void
  addTapResult: (msOff: number) => void
}

export const usePracticeStore = create<PracticeState>()(
  persist(
    (set) => ({
      streak: 0,
      totalChallenges: 0,
      correctChallenges: 0,
      tapHistory: [],
      incrementStreak: () => set(s => ({ streak: s.streak + 1 })),
      resetStreak: () => set({ streak: 0 }),
      recordChallenge: (correct) =>
        set(s => ({
          totalChallenges: s.totalChallenges + 1,
          correctChallenges: s.correctChallenges + (correct ? 1 : 0),
        })),
      addTapResult: (msOff) =>
        set(s => ({ tapHistory: [...s.tapHistory.slice(-49), msOff] })),
    }),
    { name: 'fretpath-practice' }
  )
)
