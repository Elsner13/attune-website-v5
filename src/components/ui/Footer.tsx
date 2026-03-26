// src/components/ui/Footer.tsx
import Link from 'next/link'
import { AttuneLogo } from './AttuneLogo'

export function Footer() {
  const socials = [
    { label: 'Telegram', href: 'https://t.me/+16128453855' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sam-elsner' },
    { label: 'X', href: 'https://x.com/samelsner' },
    { label: 'Instagram', href: 'https://instagram.com/sam.elsner' },
    { label: 'Substack', href: 'https://findthesignal.substack.com/' },
  ]

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <AttuneLogo size={16} />
        <span
          className="text-[9px] tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
        >
          © 2026 Attune · Yours in rebellion
        </span>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.08em] transition-colors hover:opacity-60"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
