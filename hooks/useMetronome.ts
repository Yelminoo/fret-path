'use client'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useAudioContext } from './useAudioContext'

export type TimeSig = '4/4' | '3/4' | '6/8'

const BEATS: Record<TimeSig, number> = { '4/4': 4, '3/4': 3, '6/8': 6 }

export function useMetronome() {
  const { getCtx } = useAudioContext()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [beat, setBeat] = useState(0)
  const [active, setActive] = useState(false)
  const [bpm, setBpm] = useState(80)
  const [timeSig, setTimeSig] = useState<TimeSig>('4/4')
  const beatRef = useRef(0)

  const click = useCallback((ctx: AudioContext, accent: boolean) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = accent ? 1000 : 800
    gain.gain.setValueAtTime(accent ? 0.4 : 0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
    osc.start()
    osc.stop(ctx.currentTime + 0.05)
  }, [])

  const tick = useCallback((ctx: AudioContext, totalBeats: number, interval: number) => {
    const current = beatRef.current
    click(ctx, current === 0)
    setBeat(current)
    beatRef.current = (current + 1) % totalBeats
    timerRef.current = setTimeout(() => tick(ctx, totalBeats, interval), interval)
  }, [click])

  const start = useCallback(async () => {
    const ctx = getCtx()
    if (ctx.state === 'suspended') await ctx.resume()
    beatRef.current = 0
    const totalBeats = BEATS[timeSig]
    const interval = (60 / bpm) * 1000
    setActive(true)
    tick(ctx, totalBeats, interval)
  }, [getCtx, bpm, timeSig, tick])

  const stop = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = null
    setActive(false)
    setBeat(0)
    beatRef.current = 0
  }, [])

  useEffect(() => () => { stop() }, [stop])

  return { beat, active, bpm, timeSig, totalBeats: BEATS[timeSig], start, stop, setBpm, setTimeSig }
}
