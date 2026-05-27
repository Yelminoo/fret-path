type Tag = 'beginner' | 'intermediate' | 'advanced' | 'theory' | 'technique'

const colors: Record<Tag, string> = {
  beginner:     'bg-emerald-900 text-emerald-300',
  intermediate: 'bg-blue-900 text-blue-300',
  advanced:     'bg-red-900 text-red-300',
  theory:       'bg-purple-900 text-purple-300',
  technique:    'bg-orange-900 text-orange-300',
}

export default function Badge({ tag }: { tag: Tag }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded font-mono ${colors[tag]}`}>
      {tag}
    </span>
  )
}
