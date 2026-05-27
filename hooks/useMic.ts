'use client'
import { useRef, useEffect } from 'react'

export function useMic() {
  const streamRef = useRef<MediaStream | null>(null)

  const start = async (): Promise<MediaStream> => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false },
    })
    streamRef.current = stream
    return stream
  }

  const stop = () => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
  }

  useEffect(() => () => { stop() }, [])

  return { start, stop }
}
