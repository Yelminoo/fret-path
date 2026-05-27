import { notFound } from 'next/navigation'
import type { Genre } from '@/types'
import { ROADMAP_DATA } from '@/lib/roadmap/data'
import RoadmapList from '@/components/roadmap/RoadmapList'

const GENRE_LABELS: Record<Genre, string> = {
  jazz:  'Jazz',
  rock:  'Rock',
  blues: 'Blues',
  pop:   'Pop',
}

export function generateStaticParams() {
  return (['jazz', 'rock', 'blues', 'pop'] as Genre[]).map(genre => ({ genre }))
}

export default function RoadmapPage({ params }: { params: { genre: string } }) {
  const genre = params.genre as Genre
  const steps = ROADMAP_DATA[genre]
  if (!steps) notFound()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="text-xs font-mono text-zinc-500 mb-1">Roadmap</div>
        <h1 className="text-2xl font-bold text-zinc-100">{GENRE_LABELS[genre]}</h1>
        <p className="text-sm text-zinc-500 mt-1">{steps.length} steps · tap to mark complete</p>
      </div>
      <RoadmapList genre={genre} steps={steps} />
    </div>
  )
}
