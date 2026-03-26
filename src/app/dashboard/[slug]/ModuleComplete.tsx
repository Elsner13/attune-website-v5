// src/app/dashboard/[slug]/ModuleComplete.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

interface ModuleCompleteProps {
  slug: string
  nextSlug?: string
  isCompleted: boolean
}

export function ModuleComplete({ slug, nextSlug, isCompleted }: ModuleCompleteProps) {
  const [completed, setCompleted] = useState(isCompleted)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleComplete() {
    setLoading(true)
    await fetch('/api/complete-module', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    setCompleted(true)
    setLoading(false)
    router.refresh()
  }

  return (
    <div
      className="flex flex-col items-center gap-3 mt-10 pt-8"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <AnimatePresence mode="wait">
        {!completed ? (
          <motion.button
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleComplete}
            disabled={loading}
            className="text-white text-[10px] tracking-[0.15em] uppercase px-6 py-2.5 transition-colors disabled:opacity-50"
            style={{ fontFamily: 'var(--font-mono)', background: loading ? 'rgba(225,29,72,0.7)' : '#E11D48' }}
          >
            {loading ? 'Saving...' : 'Mark Complete →'}
          </motion.button>
        ) : nextSlug ? (
          <motion.a
            key="next"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            href={`/dashboard/${nextSlug}`}
            className="text-white text-[10px] tracking-[0.15em] uppercase px-6 py-2.5 transition-colors"
            style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}
          >
            Next Module →
          </motion.a>
        ) : (
          <motion.p
            key="done"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
          >
            Course complete. Yours in rebellion.
          </motion.p>
        )}
      </AnimatePresence>
      <p
        className="text-[9px] tracking-[0.08em]"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
      >
        {completed && nextSlug ? `Module ${nextSlug} unlocked` : !completed && nextSlug ? `Module ${nextSlug} unlocks after completion` : ''}
      </p>
    </div>
  )
}
