'use client'
import { useState, useRef } from 'react'
import { useMetronome } from '@/hooks/useMetronome'
import { usePracticeStore } from '@/store/practiceStore'
import Card from '@/components/ui/Card'

export default function TapTrainer() {
  const { beat, active, bpm, start, stop, setBpm } = useMetronome()
  const { tapHistory, addTapResult } = usePracticeStore()
  const lastBeatTimeRef = useRef<number | null>(null)
  const beatInterval = (60 / bpm) * 1000

  const handleTap = () => {
    if (!active) return
    const now = performance.now()
    if (lastBeatTimeRef.current !== null) {
      const diff = Math.abs((now - lastBeatTimeRef.current) % beatInterval - beatInterval / 2)
      const msOff = Math.round(diff)
      addTapResult(msOff)
    }
    lastBeatTimeRef.current = now
  }

  const avgOff = tapHistory.length
    ? Math.round(tapHistory.reduce((a, b) => a + b, 0) / tapHistory.length)
    : null

  return (
    <Card className="flex flex-col gap-4">
      <h3 className="font-mono text-sm text-zinc-400">Tap Trainer</h3>

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-zinc-500 w-8">BPM</span>
        <input type="range" min={40} max={240} value={bpm}
          onChange={e => setBpm(Number(e.target.value))}
          className="flex-1 accent-amber-500"
        />
        <span className="font-mono text-sm text-zinc-300 w-8 text-right">{bpm}</span>
      </div>

      <div className="flex gap-3">
        <button onClick={active ? stop : start}
          className={`px-4 py-2 rounded-lg font-mono text-sm flex-1 ${
            active ? 'bg-red-700 text-white' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
          }`}>
          {active ? 'Stop' : 'Start metronome'}
        </button>
        <button onPointerDown={handleTap}
          disabled={!active}
          className="px-6 py-2 rounded-lg font-mono text-sm bg-amber-500 text-black disabled:opacity-40 select-none">
          TAP
        </button>
      </div>

      {avgOff !== null && (
        <div className="text-center font-mono">
          <div className="text-xs text-zinc-500">Average accuracy</div>
          <div className={`text-2xl font-bold ${avgOff < 30 ? 'text-emerald-400' : avgOff < 60 ? 'text-amber-400' : 'text-red-400'}`}>
            ±{avgOff} ms
          </div>
        </div>
      )}

      {tapHistory.length > 1 && (
        <div className="flex gap-1 h-10 items-end">
          {tapHistory.slice(-20).map((v, i) => (
            <div key={i} className="flex-1 bg-amber-500 rounded-t"
              style={{ height: `${Math.min(100, (v / 100) * 100)}%` }} />
          ))}
        </div>
      )}
    </Card>
  )
}
