export function createAnalyser(ctx: AudioContext, fftSize = 4096): AnalyserNode {
  const analyser = ctx.createAnalyser()
  analyser.fftSize = fftSize
  analyser.smoothingTimeConstant = 0.8
  return analyser
}

export function getTimeDomain(analyser: AnalyserNode): Float32Array {
  const buf = new Float32Array(analyser.fftSize)
  analyser.getFloatTimeDomainData(buf)
  return buf
}

export function getFrequency(analyser: AnalyserNode): Uint8Array {
  const buf = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(buf)
  return buf
}
