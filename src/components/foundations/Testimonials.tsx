'use client'
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: "This isn't another framework. It's the lens that makes all the other frameworks make sense. My coaching changed within the first module.", name: 'Francesco Fonte' },
  { quote: "I've read everything on skill acquisition. This is the first thing that gave me a coherent system to actually apply it. The constraint design module alone was worth 10x.", name: 'Jay Pages' },
  { quote: "I coach BJJ and I've been using constraints-led approach intuitively for years. Sam gave me the language and the framework to teach it to my coaches. Game changer.", name: 'Anonymous BJJ Coach' },
]

export function Testimonials() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <p className="text-[9px] tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>Results</p>
      <StaggerChildren className="max-w-lg mx-auto flex flex-col gap-3">
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={itemVariants} className="p-5 text-left" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[11px] italic leading-[1.8] mb-3" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.4)' }}>&ldquo;{t.quote}&rdquo;</p>
            <p className="text-[9px] tracking-[0.1em]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>— {t.name}</p>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}
