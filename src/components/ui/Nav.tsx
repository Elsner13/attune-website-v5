// src/components/ui/Nav.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AttuneLogo } from './AttuneLogo'

interface NavProps {
  variant?: 'marketing' | 'minimal'
}

export function Nav({ variant = 'marketing' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,6,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <AttuneLogo size={20} />
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,215,0.8)' }}
          >
            Attune
          </span>
        </Link>

        {variant === 'marketing' && (
          <div className="flex items-center gap-5">
            <Link
              href="https://findthesignal.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.08em] transition-colors"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.35)' }}
            >
              Signal/Noise
            </Link>
            <Link
              href="/foundations"
              className="text-[10px] tracking-[0.12em] uppercase px-3.5 py-1.5 transition-colors"
              style={{ fontFamily: 'var(--font-mono)', background: '#E11D48', color: '#fff' }}
            >
              Foundations →
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
