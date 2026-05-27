'use client'
import { useState, useRef, useCallback } from 'react'
import { useAudioContext } from '@/hooks/useAudioContext'
import { useMic } from '@/hooks/useMic'
import { createAnalyser, getFrequency } from '@/lib/audio/fftAnalyser'
import { computeChroma } from '@/lib/audio/chromaVector'
import { matchChord } from '@/lib/audio/chordTemplates'
import Card from '@/components/ui/Card'

export default function ChordDetector() {
  const { getCtx } = useAudioContext()
  const { start, stop } = useMic()
  const rafRef = useRef<number>(0)
  const [result, setResult] = useState<{ name: string; confidence: number } | null>(null)
  const [active, setActive] = useState(false)

  const startDetection = useCallback(async () => {
    const ctx = getCtx()
    if (ctx.state === 'suspended') await ctx.resume()
    const stream = await start()
    const source = ctx.createMediaStreamSource(stream)
    const analyser = createAnalyser(ctx, 4096)
    source.connect(analyser)
    setActive(true)

    const loop = () => {
      const freq = getFrequency(analyser)
      const chroma = computeChroma(freq, ctx.sampleRate, analyser.fftSize)
      const match = matchChord(chroma)
      setResult(match)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
  }, [getCtx, start])

  const stopDetection = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    stop()
    setActive(false)
    setResult(null)
  }, [stop])

  return (
    <Card className="flex flex-col gap-4 items-center">
      <div className="flex items-center gap-2">
        <h3 className="font-mono text-sm text-zinc-400">Chord Detector</h3>
        <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded font-mono">beta</span>
      </div>

      <div className="text-5xl font-mono font-bold text-amber-400 min-h-[60px] flex items-center">
        {result ? result.name : '—'}
      </div>

      {result && (
        <div className="text-xs font-mono text-zinc-500">
          {Math.round(result.confidence * 100)}% confidence
        </div>
      )}

      <button
        onClick={active ? stopDetection : startDetection}
        className={`px-6 py-2 rounded-lg font-mono text-sm ${
          active ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
        }`}
      >
        {active ? 'Stop listening' : 'Start listening'}
      </button>
    </Card>
  )
}
