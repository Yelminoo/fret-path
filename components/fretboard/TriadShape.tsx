'use client'
import type { TriadNote } from '@/types'
import { NOTES } from '@/lib/music/notes'

interface TriadShapeProps {
  triads: TriadNote[]
}

export default function TriadShape({ triads }: TriadShapeProps) {
  return (
    <>
      {triads.map((n, i) => (
        <span key={i} className="sr-only">
          {NOTES[n.noteIndex]} on string {n.string} fret {n.fret} ({n.role})
        </span>
      ))}
    </>
  )
}
