'use client'
import { useProgressStore } from '@/store/progressStore'
import type { Genre } from '@/types'

interface Props {
  genre: Genre
  stepId: string
}

export default function MarkCompleteButton({ genre, stepId }: Props) {
  const { isCompleted, toggleStep } = useProgressStore()
  const done = isCompleted(genre, stepId)

  return (
    <button
      onClick={() => toggleStep(genre, stepId)}
      className={`w-full py-3 rounded-xl font-mono text-sm font-bold transition-colors ${
        done
          ? 'bg-emerald-900/40 border border-emerald-700 text-emerald-400 hover:bg-emerald-900/60'
          : 'bg-amber-500 text-black hover:bg-amber-400'
      }`}
    >
      {done ? '✓ Completed — tap to undo' : 'Mark as complete'}
    </button>
  )
}
