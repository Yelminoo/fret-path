export const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

// Open string note indices: e(4) B(11) G(7) D(2) A(9) E(4) — index 0=high e
export const OPEN_IDX = [4, 11, 7, 2, 9, 4]

export const noteAt = (string: number, fret: number): number =>
  (OPEN_IDX[string] + fret) % 12

export const noteName = (idx: number): string => NOTES[idx % 12]

export const noteIndex = (name: string): number => NOTES.indexOf(name)
