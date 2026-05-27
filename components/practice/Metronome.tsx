'use client'
import { useMetronome, type TimeSig } from '@/hooks/useMetronome'
import Card from '@/components/ui/Card'

const TIME_SIGS: TimeSig[] = ['4/4', '3/4', '6/8']

export default function Metronome() {
  const { beat, active, bpm, timeSig, totalBeats, start, stop, setBpm, setTimeSig } = useMetronome()

  return (
    <Card className="flex flex-col gap-4">
      <h3 className="font-mono text-sm text-zinc-400">Metronome</h3>

      {/* Beat visualizer */}
      <div className="flex gap-2 justify-center">
        {Array.from({ length: totalBeats }, (_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full transition-colors ${
              active && beat === i
                ? i === 0 ? 'bg-amber-400' : 'bg-sky-400'
                : 'bg-zinc-700'
            }`}
          />
        ))}
      </div>

      {/* BPM */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-zinc-500 w-8">BPM</span>
        <input
          type="range"
          min={40} max={240}
          value={bpm}
          onChange={e => setBpm(Number(e.target.value))}
          className="flex-1 accent-amber-500"
        />
        <span className="font-mono text-sm text-zinc-300 w-8 text-right">{bpm}</span>
      </div>

      {/* Time sig */}
      <div className="flex gap-2">
        {TIME_SIGS.map(ts => (
          <button
            key={ts}
            onClick={() => { stop(); setTimeSig(ts) }}
            className={`px-3 py-1 rounded font-mono text-xs transition-colors ${
              timeSig === ts ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {ts}
          </button>
        ))}
      </div>

      <button
        onClick={active ? stop : start}
        className={`px-6 py-2 rounded-lg font-mono text-sm ${
          active ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
        }`}
      >
        {active ? 'Stop' : 'Start'}
      </button>
    </Card>
  )
}
