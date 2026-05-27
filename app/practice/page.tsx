'use client'
import { useState } from 'react'
import PitchDetector from '@/components/practice/PitchDetector'
import Metronome from '@/components/practice/Metronome'
import NoteChallenge from '@/components/practice/NoteChallenge'
import TapTrainer from '@/components/practice/TapTrainer'
import ChordDetector from '@/components/practice/ChordDetector'

const TABS = ['Pitch', 'Metronome', 'Challenge', 'Tap', 'Chord'] as const
type Tab = typeof TABS[number]

export default function PracticePage() {
  const [tab, setTab] = useState<Tab>('Pitch')

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-100">Practice Lab</h1>
        <p className="text-sm text-zinc-500 mt-1 font-mono">Real-time audio tools</p>
      </div>

      <div className="flex gap-1 flex-wrap">
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              tab === t ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Pitch'     && <PitchDetector />}
      {tab === 'Metronome' && <Metronome />}
      {tab === 'Challenge' && <NoteChallenge />}
      {tab === 'Tap'       && <TapTrainer />}
      {tab === 'Chord'     && <ChordDetector />}
    </div>
  )
}
