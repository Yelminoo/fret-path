import type { ProgressionChord } from '@/lib/music/progressions'

interface Props {
  chord: ProgressionChord
  active: boolean
}

export default function ChordStep({ chord, active }: Props) {
  return (
    <div className={`flex flex-col items-center p-4 rounded-xl border transition-all ${
      active ? 'border-amber-500 bg-amber-950/30 scale-105' : 'border-zinc-800 bg-zinc-900'
    }`}>
      <div className="text-xs font-mono text-zinc-500">{chord.numeral}</div>
      <div className="text-2xl font-bold font-mono text-zinc-100 mt-1">{chord.name}</div>
      <div className="text-xs text-zinc-500 mt-1">{chord.type}</div>
    </div>
  )
}
