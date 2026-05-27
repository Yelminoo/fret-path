export type Genre = 'jazz' | 'rock' | 'blues' | 'pop'

export interface Exercise {
  title: string
  steps: string[]
}

export interface LessonSource {
  label: string
  url: string
  type: 'video' | 'article' | 'song' | 'lesson'
}

export interface Lesson {
  objective: string
  concepts: string[]
  diagram?: string
  exercises: Exercise[]
  tips: string[]
  sources?: LessonSource[]
}

export interface RoadmapStep {
  id: string
  title: string
  desc: string
  tags: Array<'beginner' | 'intermediate' | 'advanced' | 'theory' | 'technique'>
  lesson: Lesson
}

export type Roadmap = Record<Genre, RoadmapStep[]>

export interface Note {
  string: number
  fret: number
  noteIndex: number
  label: string
  role: 'root' | 'third' | 'fifth' | 'scale'
}

export interface TriadNote {
  string: number
  fret: number
  noteIndex: number
  role: 'root' | 'third' | 'fifth'
}

export interface Chord {
  name: string
  notes: number[]
}

export type ScaleType = 'pentatonic' | 'blues' | 'major' | 'minor'
export type TriadType = 'major' | 'minor'
