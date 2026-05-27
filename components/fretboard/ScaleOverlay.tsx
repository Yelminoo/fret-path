'use client'
import type { Note } from '@/types'

interface ScaleOverlayProps {
  notes: Note[]
}

export default function ScaleOverlay({ notes }: ScaleOverlayProps) {
  return <>{notes.map(n => <span key={`${n.string}-${n.fret}`} className="sr-only">{n.label}</span>)}</>
}
