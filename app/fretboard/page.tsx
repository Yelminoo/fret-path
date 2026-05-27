'use client'
import { useFretboardStore } from '@/store/fretboardStore'
import { useFretboard } from '@/components/fretboard/useFretboard'
import Fretboard from '@/components/fretboard/Fretboard'
import ProgressionPlayer from '@/components/progression/ProgressionPlayer'
import { NOTES } from '@/lib/music/notes'
import { STRING_SETS } from '@/lib/music/triads'
import type { ScaleType, TriadType } from '@/types'

const SCALE_TYPES: ScaleType[] = ['pentatonic', 'blues', 'major', 'minor']
const TRIAD_TYPES: TriadType[] = ['major', 'minor']
const INVERSIONS = [0, 1, 2] as const
const STRING_SET_LABELS = ['e B G', 'B G D', 'G D A', 'D A E']

export default function FretboardPage() {
  const store = useFretboardStore()
  const { displayNotes } = useFretboard()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Fretboard</h1>
        <p className="text-sm text-zinc-500 mt-1 font-mono">Triads & scales visualized</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
        {/* Root */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono text-zinc-500 w-16">Root</span>
          {NOTES.map((n, i) => (
            <button key={n} onClick={() => store.setRoot(i)}
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                store.root === i ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}>{n}</button>
          ))}
        </div>

        {/* Triad/Scale toggles */}
        <div className="flex gap-2">
          <button onClick={store.toggleTriad}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
              store.showTriad ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300'
            }`}>Triad</button>
          <button onClick={store.toggleScale}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
              store.showScale ? 'bg-sky-500 text-black' : 'bg-zinc-800 text-zinc-300'
            }`}>Scale</button>
        </div>

        {/* Triad options */}
        {store.showTriad && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-zinc-500 w-16">Type</span>
              {TRIAD_TYPES.map(t => (
                <button key={t} onClick={() => store.setTriadType(t)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    store.triadType === t ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>{t}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-zinc-500 w-16">Inversion</span>
              {INVERSIONS.map(i => (
                <button key={i} onClick={() => store.setInversion(i)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    store.inversion === i ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>{i === 0 ? 'Root' : i === 1 ? '1st' : '2nd'}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-zinc-500 w-16">Strings</span>
              {STRING_SETS.map((ss, i) => (
                <button key={i} onClick={() => store.setStringSet(ss)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    store.stringSet === ss ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>{STRING_SET_LABELS[i]}</button>
              ))}
            </div>
          </div>
        )}

        {/* Scale type */}
        {store.showScale && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-zinc-500 w-16">Scale</span>
            {SCALE_TYPES.map(t => (
              <button key={t} onClick={() => store.setScaleType(t)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                  store.scaleType === t ? 'bg-sky-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}>{t}</button>
            ))}
          </div>
        )}
      </div>

      {/* Fretboard */}
      <Fretboard notes={displayNotes} />

      {/* Legend */}
      <div className="flex gap-3 text-xs font-mono flex-wrap">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber-500" /><span className="text-zinc-400">Root</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-sky-500" /><span className="text-zinc-400">3rd</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-emerald-500" /><span className="text-zinc-400">5th</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-zinc-600" /><span className="text-zinc-400">Scale</span></div>
      </div>

      {/* Progression Player */}
      <div>
        <h2 className="text-sm font-mono text-zinc-400 mb-3">Chord Progressions</h2>
        <ProgressionPlayer />
      </div>
    </div>
  )
}
