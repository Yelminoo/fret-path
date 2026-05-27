'use client'
import type { Note } from '@/types'

interface FretboardProps {
  notes: Note[]
  frets?: number
}

const STRING_LABELS = ['e', 'B', 'G', 'D', 'A', 'E']
const INLAYS = [3, 5, 7, 9, 12, 15]

const roleColors: Record<string, string> = {
  root:  'bg-amber-500 text-black',
  third: 'bg-sky-500 text-black',
  fifth: 'bg-emerald-500 text-black',
  scale: 'bg-zinc-600 text-white',
}

export default function Fretboard({ notes, frets = 15 }: FretboardProps) {
  const noteMap = new Map<string, Note>()
  notes.forEach(n => noteMap.set(`${n.string}-${n.fret}`, n))

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex flex-col gap-0 min-w-max">
        {/* Fret numbers */}
        <div className="flex ml-8">
          {Array.from({ length: frets + 1 }, (_, f) => (
            <div key={f} className="w-10 text-center text-xs text-zinc-600 font-mono">{f}</div>
          ))}
        </div>

        {/* Strings */}
        {Array.from({ length: 6 }, (_, s) => (
          <div key={s} className="flex items-center">
            <div className="w-8 text-right pr-2 text-xs text-zinc-500 font-mono">{STRING_LABELS[s]}</div>
            {Array.from({ length: frets + 1 }, (_, f) => {
              const note = noteMap.get(`${s}-${f}`)
              return (
                <div
                  key={f}
                  className="w-10 h-8 flex items-center justify-center relative border-r border-zinc-700"
                >
                  {/* Nut */}
                  {f === 0 && <div className="absolute right-0 w-1 h-full bg-zinc-400 rounded" />}
                  {/* String line */}
                  <div className="absolute left-0 right-0 h-px bg-zinc-600" style={{ top: '50%' }} />
                  {/* Inlay dots */}
                  {s === 2 && INLAYS.includes(f) && !note && (
                    <div className="w-2 h-2 rounded-full bg-zinc-700 z-10" />
                  )}
                  {/* Note dot */}
                  {note && (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 ${roleColors[note.role]}`}>
                      {note.label}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
