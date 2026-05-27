'use client'
import { useMemo } from 'react'
import { useFretboardStore } from '@/store/fretboardStore'
import { noteAt, NOTES } from '@/lib/music/notes'
import { getScaleNotes } from '@/lib/music/scales'
import { findTriadNotes } from '@/lib/music/triads'
import type { Note, TriadNote } from '@/types'

export function useFretboard(frets = 15) {
  const { root, scaleType, triadType, inversion, stringSet, showScale, showTriad } = useFretboardStore()

  const scaleNotes = useMemo(() => getScaleNotes(root, scaleType), [root, scaleType])
  const triadNotes = useMemo<TriadNote[] | null>(
    () => findTriadNotes(root, stringSet, inversion, triadType),
    [root, stringSet, inversion, triadType]
  )

  const displayNotes = useMemo<Note[]>(() => {
    const notes: Note[] = []

    if (showScale) {
      for (let s = 0; s < 6; s++) {
        for (let f = 0; f <= frets; f++) {
          const idx = noteAt(s, f)
          if (scaleNotes.includes(idx)) {
            notes.push({ string: s, fret: f, noteIndex: idx, label: NOTES[idx], role: idx === root ? 'root' : 'scale' })
          }
        }
      }
    }

    if (showTriad && triadNotes) {
      for (const tn of triadNotes) {
        const existing = notes.findIndex(n => n.string === tn.string && n.fret === tn.fret)
        const entry: Note = { ...tn, label: NOTES[tn.noteIndex] }
        if (existing >= 0) notes[existing] = entry
        else notes.push(entry)
      }
    }

    return notes
  }, [showScale, showTriad, scaleNotes, triadNotes, root, frets])

  return { displayNotes, scaleNotes, triadNotes }
}
