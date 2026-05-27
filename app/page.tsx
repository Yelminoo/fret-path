import Link from 'next/link'
import type { Genre } from '@/types'

const GENRES: { genre: Genre; label: string; emoji: string; desc: string }[] = [
  { genre: 'jazz',  label: 'Jazz',  emoji: '🎷', desc: 'ii–V–I, shell voicings, bebop' },
  { genre: 'rock',  label: 'Rock',  emoji: '🤘', desc: 'Power chords, pentatonic, leads' },
  { genre: 'blues', label: 'Blues', emoji: '🎸', desc: '12-bar, shuffle, expression' },
  { genre: 'pop',   label: 'Pop',   emoji: '🎵', desc: 'Open chords, fingerpicking, capo' },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-[var(--font-syne)] text-zinc-100">FretPath</h1>
        <p className="text-zinc-500 text-sm mt-1 font-mono">Your interactive guitar learning roadmap</p>
      </div>

      <section>
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Genre Roadmaps</h2>
        <div className="grid grid-cols-2 gap-3">
          {GENRES.map(({ genre, label, emoji, desc }) => (
            <Link
              key={genre}
              href={`/roadmap/${genre}`}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 flex flex-col gap-2 transition-colors"
            >
              <div className="text-2xl">{emoji}</div>
              <div className="font-semibold text-zinc-100 font-mono">{label}</div>
              <div className="text-xs text-zinc-500">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Tools</h2>
        <div className="flex flex-col gap-2">
          <Link href="/fretboard" className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 flex justify-between items-center transition-colors">
            <div>
              <div className="font-mono text-sm text-zinc-100">Fretboard Visualizer</div>
              <div className="text-xs text-zinc-500">Triads, scales, inversions</div>
            </div>
            <span className="text-zinc-600">→</span>
          </Link>
          <Link href="/practice" className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 flex justify-between items-center transition-colors">
            <div>
              <div className="font-mono text-sm text-zinc-100">Practice Lab</div>
              <div className="text-xs text-zinc-500">Pitch detect, metronome, challenges</div>
            </div>
            <span className="text-zinc-600">→</span>
          </Link>
          <Link href="/progress" className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 flex justify-between items-center transition-colors">
            <div>
              <div className="font-mono text-sm text-zinc-100">Progress</div>
              <div className="text-xs text-zinc-500">Streaks, stats, completion</div>
            </div>
            <span className="text-zinc-600">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
