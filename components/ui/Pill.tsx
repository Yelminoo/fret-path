interface PillProps {
  label: string
  variant?: 'default' | 'active' | 'muted'
  onClick?: () => void
}

const variants = {
  default: 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
  active:  'bg-amber-500 text-black',
  muted:   'bg-zinc-900 text-zinc-500',
}

export default function Pill({ label, variant = 'default', onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${variants[variant]} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {label}
    </button>
  )
}
