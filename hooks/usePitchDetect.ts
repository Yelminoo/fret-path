'use client'
import { useRef, useState, useCallback } from 'react'
import { useAudioContext } from './useAudioContext'
import { useMic } from './useMic'
import { createAnalyser, getTimeDomain } from '@/lib/audio/fftAnalyser'
import { detectPitch, hzToNoteName } from '@/lib/audio/pitchDetection'

export interface PitchResult {
  hz: number
  name: string
  cents: number
}

export function usePitchDetect() {
  const { getCtx } = useAudioContext()
  const { start, stop } = useMic()
  const rafRef = useRef<number>(0)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const [result, setResult] = useState<PitchResult | null>(null)
  const [active, setActive] = useState(false)

  const startDetection = useCallback(async () => {
    const ctx = getCtx()
    if (ctx.state === 'suspended') await ctx.resume()
    const stream = await start()
    const source = ctx.createMediaStreamSource(stream)
    const analyser = createAnalyser(ctx, 4096)
    source.connect(analyser)
    analyserRef.current = analyser
    setActive(true)

    const loop = () => {
      const buf = getTimeDomain(analyser)
      const hz = detectPitch(buf, ctx.sampleRate)
      if (hz) {
        const { name, cents } = hzToNoteName(hz)
        setResult({ hz, name, cents })
      }
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

  return { result, active, startDetection, stopDetection }
}
