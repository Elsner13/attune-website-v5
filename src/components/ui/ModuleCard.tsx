'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Module } from '@/lib/modules'
import { cn } from '@/lib/utils'

type CardState = 'completed' | 'upNext' | 'locked'

interface ModuleCardProps {
  module: Module
  state: CardState
  index?: number
}

export function ModuleCard({ module, state, index = 0 }: ModuleCardProps) {
  const isCompleted = state === 'completed'
  const isUpNext = state === 'upNext'
  const isLocked = state === 'locked'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={!isCompleted ? { scale: 1.01 } : undefined}
      className={cn(
        'relative p-5 border transition-all duration-200',
        isUpNext && 'border-crimson/30 bg-crimson/5',
        isCompleted && 'border-border bg-surface opacity-45',
        isLocked && 'border-border-subtle bg-void opacity-40',
        !isCompleted && 'hover:border-white/12'
      )}
    >
      {/* UP NEXT badge */}
      {isUpNext && (
        <div
          className="absolute -top-px -right-px bg-crimson text-white text-[8px] px-2 py-0.5 tracking-[0.1em] uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Up Next
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-crimson text-[9px] tracking-[0.15em]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {module.number}
        </span>
        {isCompleted && (
          <span
            className="text-cream/25 text-[8px] tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            ✓ DONE
          </span>
        )}
        {isLocked && (
          <span
            className="text-cream/15 text-[8px]"
            aria-label="locked"
          >
            🔒
          </span>
        )}
      </div>

      {/* Title */}
      <p
        className="text-cream text-[12px] italic leading-snug mb-2"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {module.title}
      </p>

      {/* Description */}
      <p className="text-cream/30 text-[10px] leading-relaxed mb-4">
        {module.description}
      </p>

      {/* CTA for upNext */}
      {isUpNext && (
        <Link
          href={`/dashboard/${module.slug}`}
          className="inline-block bg-crimson text-white text-[9px] tracking-[0.12em] uppercase px-3.5 py-1.5 hover:bg-crimson-hover transition-colors"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Continue →
        </Link>
      )}
    </motion.div>
  )
}
