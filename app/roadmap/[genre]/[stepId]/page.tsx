import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Genre, LessonSource } from '@/types'
import { ROADMAP_DATA } from '@/lib/roadmap/data'
import { STEP_SOURCES } from '@/lib/roadmap/sources'
import Badge from '@/components/ui/Badge'
import MarkCompleteButton from '@/components/roadmap/MarkCompleteButton'

const GENRE_LABELS: Record<Genre, string> = {
  jazz: 'Jazz', rock: 'Rock', blues: 'Blues', pop: 'Pop',
}

const SOURCE_ICONS: Record<LessonSource['type'], string> = {
  video:   '▶',
  song:    '♪',
  article: '◉',
  lesson:  '✦',
}

const SOURCE_COLORS: Record<LessonSource['type'], string> = {
  video:   'text-red-400',
  song:    'text-amber-400',
  article: 'text-sky-400',
  lesson:  'text-emerald-400',
}

export function generateStaticParams() {
  const params: { genre: string; stepId: string }[] = []
  for (const [genre, steps] of Object.entries(ROADMAP_DATA)) {
    for (const step of steps) {
      params.push({ genre, stepId: step.id })
    }
  }
  return params
}

export default function LessonPage({
  params,
}: {
  params: { genre: string; stepId: string }
}) {
  const genre = params.genre as Genre
  const steps = ROADMAP_DATA[genre]
  if (!steps) notFound()

  const stepIndex = steps.findIndex(s => s.id === params.stepId)
  if (stepIndex === -1) notFound()

  const step = steps[stepIndex]
  const { lesson } = step
  const sources = STEP_SOURCES[step.id] ?? []
  const prevStep = stepIndex > 0 ? steps[stepIndex - 1] : null
  const nextStep = stepIndex < steps.length - 1 ? steps[stepIndex + 1] : null

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Back nav */}
      <Link
        href={`/roadmap/${genre}`}
        className="text-xs font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
      >
        ← {GENRE_LABELS[genre]} roadmap
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {step.tags.map(t => <Badge key={t} tag={t} />)}
        </div>
        <h1 className="text-2xl font-bold text-zinc-100 leading-tight">{step.title}</h1>
        <p className="text-sm text-zinc-400">{step.desc}</p>
      </div>

      {/* Objective */}
      <div className="bg-amber-950/40 border border-amber-800/50 rounded-xl p-4">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Objective</div>
        <p className="text-sm text-amber-100 leading-relaxed">{lesson.objective}</p>
      </div>

      {/* Concepts */}
      <Section title="Concepts">
        <ul className="flex flex-col gap-2">
          {lesson.concepts.map((c, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
              <span className="text-amber-500 font-mono mt-0.5 flex-shrink-0">▸</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Diagram */}
      {lesson.diagram && (
        <Section title="Diagram / Notation">
          <pre className="text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-lg p-4 whitespace-pre">
            {lesson.diagram}
          </pre>
        </Section>
      )}

      {/* Exercises */}
      <Section title="Exercises">
        <div className="flex flex-col gap-4">
          {lesson.exercises.map((ex, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="font-mono text-sm text-zinc-100 mb-3">
                <span className="text-amber-500 mr-2">{i + 1}.</span>
                {ex.title}
              </div>
              <ol className="flex flex-col gap-2">
                {ex.steps.map((s, j) => (
                  <li key={j} className="flex gap-3 text-xs text-zinc-400 leading-relaxed">
                    <span className="text-zinc-600 font-mono flex-shrink-0 w-4">{j + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section title="Tips">
        <ul className="flex flex-col gap-2">
          {lesson.tips.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
              <span className="text-sky-500 flex-shrink-0 mt-0.5">💡</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Sources */}
      {sources.length > 0 && (
        <Section title="Sources & Further Study">
          <div className="flex flex-col gap-2">
            {/* Legend */}
            <div className="flex gap-3 flex-wrap text-xs font-mono text-zinc-600 mb-1">
              <span><span className="text-red-400">▶</span> Video</span>
              <span><span className="text-amber-400">♪</span> Song</span>
              <span><span className="text-sky-400">◉</span> Article</span>
              <span><span className="text-emerald-400">✦</span> Lesson</span>
            </div>

            {sources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl px-4 py-3 transition-colors group"
              >
                <span className={`font-mono text-sm mt-0.5 flex-shrink-0 ${SOURCE_COLORS[src.type]}`}>
                  {SOURCE_ICONS[src.type]}
                </span>
                <span className="text-sm text-zinc-300 group-hover:text-zinc-100 leading-snug transition-colors">
                  {src.label}
                </span>
                <span className="ml-auto text-zinc-700 group-hover:text-zinc-400 text-xs flex-shrink-0 transition-colors">↗</span>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Mark complete */}
      <MarkCompleteButton genre={genre} stepId={step.id} />

      {/* Prev / Next navigation */}
      <div className="flex justify-between gap-3 pt-2 border-t border-zinc-800">
        {prevStep ? (
          <Link
            href={`/roadmap/${genre}/${prevStep.id}`}
            className="flex flex-col gap-0.5 flex-1 max-w-[45%]"
          >
            <span className="text-xs font-mono text-zinc-600">← Previous</span>
            <span className="text-xs text-zinc-400 truncate">{prevStep.title}</span>
          </Link>
        ) : <div />}

        {nextStep && (
          <Link
            href={`/roadmap/${genre}/${nextStep.id}`}
            className="flex flex-col gap-0.5 flex-1 max-w-[45%] items-end text-right"
          >
            <span className="text-xs font-mono text-zinc-600">Next →</span>
            <span className="text-xs text-zinc-400 truncate">{nextStep.title}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{title}</h2>
      {children}
    </div>
  )
}
