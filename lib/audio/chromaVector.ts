// 12-bin chroma vector from frequency-domain data
export function computeChroma(freqData: Uint8Array, sampleRate: number, fftSize: number): number[] {
  const chroma = new Array(12).fill(0)
  const binHz = sampleRate / fftSize

  for (let i = 1; i < freqData.length; i++) {
    const freq = i * binHz
    if (freq < 80 || freq > 4200) continue
    const semitones = 12 * Math.log2(freq / 440) + 69
    const bin = ((Math.round(semitones) % 12) + 12) % 12
    chroma[bin] += freqData[i]
  }

  const max = Math.max(...chroma)
  return max > 0 ? chroma.map(v => v / max) : chroma
}
