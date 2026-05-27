'use client'
import Link from 'next/link'
import type { Genre, RoadmapStep } from '@/types'
import Badge from '@/components/ui/Badge'
import { useProgressStore } from '@/store/progressStore'

interface Props {
  step: RoadmapStep
  genre: Genre
  index: number
}

export default function RoadmapStepItem({ step, genre, index }: Props) {
  const { isCompleted, toggleStep } = useProgressStore()
  const done = isCompleted(genre, step.id)

  return (
    <li className={`flex gap-3 rounded-xl border transition-colors
      ${done ? 'border-amber-700/60 bg-amber-950/20' : 'border-zinc-800 bg-zinc-900'}`}
    >
      {/* Complete toggle */}
      <button
        onClick={() => toggleStep(genre, step.id)}
        aria-label={done ? 'Mark incomplete' : 'Mark complete'}
        className={`flex-shrink-0 flex items-center justify-center w-10 rounded-l-xl border-r transition-colors
          ${done ? 'border-amber-700/60 text-amber-400' : 'border-zinc-800 text-zinc-600 hover:text-zinc-400'}`}
      >
        <span className="text-sm font-mono">{done ? '✓' : index + 1}</span>
      </button>

      {/* Lesson link */}
      <Link
        href={`/roadmap/${genre}/${step.id}`}
        className="flex flex-col gap-1.5 flex-1 py-3 pr-4 min-w-0"
      >
        <div className="flex items-center justify-between gap-2">
          <span className={`font-semibold text-sm leading-tight ${done ? 'text-zinc-400' : 'text-zinc-100'}`}>
            {step.title}
          </span>
          <span className="text-zinc-600 text-xs flex-shrink-0">→</span>
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
        <div className="flex gap-1 flex-wrap mt-0.5">
          {step.tags.map(t => <Badge key={t} tag={t} />)}
        </div>
      </Link>
    </li>
  )
}
