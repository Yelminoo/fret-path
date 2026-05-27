'use client'
import { useProgressStore } from '@/store/progressStore'
import { usePracticeStore } from '@/store/practiceStore'
import { ROADMAP_DATA } from '@/lib/roadmap/data'
import type { Genre } from '@/types'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const GENRES = Object.keys(ROADMAP_DATA) as Genre[]
const GENRE_LABELS: Record<Genre, string> = { jazz: 'Jazz', rock: 'Rock', blues: 'Blues', pop: 'Pop' }

export default function ProgressPage() {
  const { completed } = useProgressStore()
  const { streak, totalChallenges, correctChallenges, tapHistory } = usePracticeStore()

  const avgTap = tapHistory.length
    ? Math.round(tapHistory.reduce((a, b) => a + b, 0) / tapHistory.length)
    : null

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Progress</h1>
        <p className="text-sm text-zinc-500 mt-1 font-mono">Your learning stats</p>
      </div>

      {/* Practice stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold font-mono text-amber-400">{streak}</div>
          <div className="text-xs text-zinc-500">Streak</div>
        </Card>
        <Card className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold font-mono text-sky-400">
            {totalChallenges > 0 ? Math.round((correctChallenges / totalChallenges) * 100) : 0}%
          </div>
          <div className="text-xs text-zinc-500">Accuracy</div>
        </Card>
        <Card className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold font-mono text-emerald-400">
            {avgTap !== null ? `±${avgTap}ms` : '—'}
          </div>
          <div className="text-xs text-zinc-500">Tap avg</div>
        </Card>
      </div>

      {/* Roadmap progress */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Roadmaps</h2>
        {GENRES.map(genre => {
          const steps = ROADMAP_DATA[genre]
          const done = steps.filter(s => completed[`${genre}:${s.id}`]).length
          const pct = Math.round((done / steps.length) * 100)
          return (
            <Link key={genre} href={`/roadmap/${genre}`}>
              <Card className="flex flex-col gap-2 hover:border-zinc-600 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-zinc-200">{GENRE_LABELS[genre]}</span>
                  <span className="font-mono text-xs text-zinc-500">{done}/{steps.length}</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {totalChallenges > 0 && (
        <div className="text-xs font-mono text-zinc-600 text-center">
          {correctChallenges} correct / {totalChallenges} total challenges
        </div>
      )}
    </div>
  )
}
