'use client'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'
import { motion } from 'framer-motion'

const shifts = [
  { from: 'Drift', to: 'Alignment' },
  { from: 'Consuming', to: 'Creating' },
  { from: 'NPC', to: 'Main Character' },
]

export function TheShift() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <p className="text-[9px] tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>The Shift</p>
      <StaggerChildren className="max-w-sm mx-auto flex flex-col gap-3">
        {shifts.map((s) => (
          <motion.div key={s.from} variants={itemVariants} className="flex items-center justify-center gap-4 px-6 py-4" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-[11px] italic" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.4)' }}>{s.from}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#E11D48' }}>→</span>
            <span className="text-[11px] italic" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>{s.to}</span>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}
