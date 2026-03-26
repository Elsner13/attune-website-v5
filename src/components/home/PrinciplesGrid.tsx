'use client'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'
import { motion } from 'framer-motion'

const principles = [
  { number: '01', title: 'Attunement,\nnot acquisition', body: 'Skill is a relationship, not a possession' },
  { number: '02', title: 'Constraints\nshape emergence', body: "You don't need more freedom. Better constraints." },
  { number: '03', title: 'Perception\nprecedes action', body: 'The expert perceives affordances sooner' },
  { number: '04', title: 'Stream vs.\nthe shores', body: 'Value flows in the stream. Skills emerge there.' },
]

export function PrinciplesGrid() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <StaggerChildren className="max-w-lg mx-auto grid grid-cols-2">
        {principles.map((p, i) => (
          <motion.div
            key={p.number}
            variants={itemVariants}
            className="p-6 text-center"
            style={{
              borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : undefined,
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : undefined,
            }}
          >
            <p className="text-[9px] tracking-[0.2em] mb-2.5" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>{p.number}</p>
            <p className="text-[13px] italic leading-snug mb-2 whitespace-pre-line" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>{p.title}</p>
            <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(242,237,215,0.3)' }}>{p.body}</p>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}
