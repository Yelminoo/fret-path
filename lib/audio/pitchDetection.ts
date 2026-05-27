// Autocorrelation-based pitch detection
export function detectPitch(buffer: Float32Array, sampleRate: number): number | null {
  const SIZE = buffer.length
  const MAX_SAMPLES = Math.floor(SIZE / 2)
  let bestOffset = -1
  let bestCorrelation = 0
  let rms = 0

  for (let i = 0; i < SIZE; i++) rms += buffer[i] * buffer[i]
  rms = Math.sqrt(rms / SIZE)
  if (rms < 0.01) return null

  let lastCorrelation = 1
  let foundGoodCorrelation = false

  for (let offset = 0; offset < MAX_SAMPLES; offset++) {
    let correlation = 0
    for (let i = 0; i < MAX_SAMPLES; i++) {
      correlation += Math.abs(buffer[i] - buffer[i + offset])
    }
    correlation = 1 - correlation / MAX_SAMPLES

    if (correlation > 0.9 && correlation > lastCorrelation) {
      foundGoodCorrelation = true
      if (correlation > bestCorrelation) {
        bestCorrelation = correlation
        bestOffset = offset
      }
    } else if (foundGoodCorrelation) {
      break
    }
    lastCorrelation = correlation
  }

  if (bestOffset === -1) return null
  return sampleRate / bestOffset
}

export function hzToNoteName(hz: number): { name: string; cents: number } {
  const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const semitones = 12 * Math.log2(hz / 440) + 69
  const rounded = Math.round(semitones)
  const cents = Math.round((semitones - rounded) * 100)
  const name = NOTES[((rounded % 12) + 12) % 12]
  const octave = Math.floor(rounded / 12) - 1
  return { name: `${name}${octave}`, cents }
}
