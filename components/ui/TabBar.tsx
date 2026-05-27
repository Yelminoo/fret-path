'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { label: 'Home',      href: '/' },
  { label: 'Fretboard', href: '/fretboard' },
  { label: 'Practice',  href: '/practice' },
  { label: 'Progress',  href: '/progress' },
]

export default function TabBar() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 flex justify-around py-2 z-50">
      {TABS.map(t => (
        <Link
          key={t.href}
          href={t.href}
          className={`flex flex-col items-center text-xs font-mono px-3 py-1 rounded-lg transition-colors ${
            path === t.href ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  )
}
