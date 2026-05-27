'use client'
import type { Genre, RoadmapStep as RoadmapStepType } from '@/types'
import RoadmapStepItem from './RoadmapStep'

interface RoadmapListProps {
  genre: Genre
  steps: RoadmapStepType[]
}

export default function RoadmapList({ genre, steps }: RoadmapListProps) {
  return (
    <ol className="flex flex-col gap-3">
      {steps.map((step, i) => (
        <RoadmapStepItem key={step.id} step={step} genre={genre} index={i} />
      ))}
    </ol>
  )
}
