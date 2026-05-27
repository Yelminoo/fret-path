'use client'
import { useRef } from 'react'

let sharedCtx: AudioContext | null = null

export function useAudioContext() {
  const ref = useRef<AudioContext | null>(null)

  const getCtx = (): AudioContext => {
    if (!sharedCtx) sharedCtx = new AudioContext()
    ref.current = sharedCtx
    return sharedCtx
  }

  return { getCtx }
}
