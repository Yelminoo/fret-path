export interface ProgressionChord {
  numeral: string
  name: string
  root: number
  type: 'major' | 'minor'
}

export interface Progression {
  name: string
  key: string
  chords: ProgressionChord[]
}

export const PROGRESSIONS: Progression[] = [
  {
    name: 'I–IV–V (C Major)',
    key: 'C',
    chords: [
      { numeral: 'I',  name: 'C',  root: 0,  type: 'major' },
      { numeral: 'IV', name: 'F',  root: 5,  type: 'major' },
      { numeral: 'V',  name: 'G',  root: 7,  type: 'major' },
    ],
  },
  {
    name: 'I–V–vi–IV (G Major)',
    key: 'G',
    chords: [
      { numeral: 'I',   name: 'G',  root: 7,  type: 'major' },
      { numeral: 'V',   name: 'D',  root: 2,  type: 'major' },
      { numeral: 'vi',  name: 'Em', root: 4,  type: 'minor' },
      { numeral: 'IV',  name: 'C',  root: 0,  type: 'major' },
    ],
  },
  {
    name: 'ii–V–I (Jazz, C Major)',
    key: 'C',
    chords: [
      { numeral: 'ii', name: 'Dm', root: 2,  type: 'minor' },
      { numeral: 'V',  name: 'G',  root: 7,  type: 'major' },
      { numeral: 'I',  name: 'C',  root: 0,  type: 'major' },
    ],
  },
  {
    name: 'I–IV–I–V (Blues, A)',
    key: 'A',
    chords: [
      { numeral: 'I',  name: 'A',  root: 9,  type: 'major' },
      { numeral: 'IV', name: 'D',  root: 2,  type: 'major' },
      { numeral: 'I',  name: 'A',  root: 9,  type: 'major' },
      { numeral: 'V',  name: 'E',  root: 4,  type: 'major' },
    ],
  },
]
