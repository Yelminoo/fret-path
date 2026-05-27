'use client'
import { useState, useEffect, useRef } from 'react'
import { usePitchDetect } from '@/hooks/usePitchDetect'
import { NOTES } from '@/lib/music/notes'
import { usePracticeStore } from '@/store/practiceStore'
import Card from '@/components/ui/Card'

const CHALLENGE_NOTES = NOTES

function randomNote() {
  return CHALLENGE_NOTES[Math.floor(Math.random() * 12)]
}

export default function NoteChallenge() {
  const [target, setTarget] = useState(randomNote)
  const [status, setStatus] = useState<'waiting' | 'correct' | 'wrong'>('waiting')
  const { result, active, startDetection, stopDetection } = usePitchDetect()
  const { recordChallenge, incrementStreak, resetStreak } = usePracticeStore()
  const checkedRef = useRef(false)

  useEffect(() => {
    if (!result || checkedRef.current) return
    const detected = result.name.replace(/\d/, '')
    if (detected === target) {
      checkedRef.current = true
      setStatus('correct')
      recordChallenge(true)
      incrementStreak()
      setTimeout(() => {
        setTarget(randomNote())
        setStatus('waiting')
        checkedRef.current = false
      }, 1200)
    }
  }, [result, target, recordChallenge, incrementStreak])

  return (
    <Card className="flex flex-col gap-4 items-center">
      <h3 className="font-mono text-sm text-zinc-400">Note Challenge</h3>
      <div className="text-xs text-zinc-500">Play this note on your guitar:</div>
      <div className={`text-6xl font-mono font-bold ${
        status === 'correct' ? 'text-emerald-400' : 'text-amber-400'
      }`}>
        {target}
      </div>
      {status === 'correct' && <div className="text-emerald-400 font-mono text-sm">Correct!</div>}
      {result && status === 'waiting' && (
        <div className="text-zinc-500 font-mono text-xs">Hearing: {result.name.replace(/\d/, '')}</div>
      )}
      <button
        onClick={active ? stopDetection : startDetection}
        className={`px-6 py-2 rounded-lg font-mono text-sm ${
          active ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
        }`}
      >
        {active ? 'Stop' : 'Start mic'}
      </button>
    </Card>
  )
}
