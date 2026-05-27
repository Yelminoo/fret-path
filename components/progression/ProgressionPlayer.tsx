'use client'
import { useState, useRef, useEffect } from 'react'
import { PROGRESSIONS } from '@/lib/music/progressions'
import ChordStep from './ChordStep'

export default function ProgressionPlayer() {
  const [progIdx, setProgIdx] = useState(0)
  const [activeChord, setActiveChord] = useState(0)
  const [playing, setPlaying] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prog = PROGRESSIONS[progIdx]

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const toggle = () => {
    if (playing) {
      stopInterval()
      setPlaying(false)
      setActiveChord(0)
    } else {
      let i = 0
      intervalRef.current = setInterval(() => {
        setActiveChord(i)
        i = (i + 1) % prog.chords.length
      }, 1200)
      setPlaying(true)
    }
  }

  const stop = () => {
    stopInterval()
    setPlaying(false)
    setActiveChord(0)
  }

  useEffect(() => () => { stopInterval() }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        {PROGRESSIONS.map((p, i) => (
          <button
            key={i}
            onClick={() => { stop(); setProgIdx(i) }}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
              i === progIdx ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${prog.chords.length}, 1fr)` }}>
        {prog.chords.map((chord, i) => (
          <ChordStep key={i} chord={chord} active={playing && activeChord === i} />
        ))}
      </div>

      <button
        onClick={toggle}
        className={`px-6 py-2 rounded-lg font-mono text-sm transition-colors ${
          playing ? 'bg-zinc-700 text-zinc-200 hover:bg-zinc-600' : 'bg-amber-500 text-black hover:bg-amber-400'
        }`}
      >
        {playing ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}
