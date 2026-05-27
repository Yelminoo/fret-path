'use client'
import { usePitchDetect } from '@/hooks/usePitchDetect'
import Card from '@/components/ui/Card'

export default function PitchDetector() {
  const { result, active, startDetection, stopDetection } = usePitchDetect()

  return (
    <Card className="flex flex-col gap-4 items-center">
      <h3 className="font-mono text-sm text-zinc-400">Pitch Detector</h3>

      <div className="text-5xl font-mono font-bold text-amber-400 min-h-[60px] flex items-center">
        {result ? result.name : '—'}
      </div>

      {result && (
        <div className={`text-sm font-mono ${Math.abs(result.cents) < 10 ? 'text-emerald-400' : 'text-red-400'}`}>
          {result.cents > 0 ? `+${result.cents}` : result.cents} cents
          &nbsp;·&nbsp;{Math.round(result.hz)} Hz
        </div>
      )}

      <button
        onClick={active ? stopDetection : startDetection}
        className={`px-6 py-2 rounded-lg font-mono text-sm ${
          active ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
        }`}
      >
        {active ? 'Stop listening' : 'Start listening'}
      </button>
    </Card>
  )
}
