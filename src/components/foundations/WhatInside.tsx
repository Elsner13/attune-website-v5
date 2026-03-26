'use client'
import { FadeUp } from '@/components/motion/FadeUp'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'
import { motion } from 'framer-motion'
import { MODULES } from '@/lib/modules'

export function WhatInside() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp>
        <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>What&apos;s Inside</p>
        <h2 className="text-[1.2rem] italic mb-8" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>8 modules. The complete OS.</h2>
      </FadeUp>
      <div className="max-w-lg mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <StaggerChildren>
          {MODULES.map((mod) => (
            <motion.div key={mod.slug} variants={itemVariants} className="flex items-center gap-4 py-3.5 text-left" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-[10px] w-6 flex-shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>{mod.number}</span>
              <span className="text-[12px] italic" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>{mod.title}</span>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
