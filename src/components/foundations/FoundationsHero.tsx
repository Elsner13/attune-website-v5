'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function FoundationsHero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(225,29,72,0.08) 0%, transparent 60%)' }}>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
        Attune Foundations
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="italic leading-tight mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
        Install the operating system.<br />Rebuild your practice from it.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="text-[13px] leading-[1.8] max-w-sm mx-auto mb-7" style={{ color: 'rgba(255,255,255,0.4)' }}>
        I spent five years integrating ecological psychology, Stoic philosophy, and motor learning into one coherent lens. You can install it in eight hours.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-2">
        <Link href="https://buy.stripe.com/6oUaEX75TftH4GP77RefC06" className="inline-block text-white text-[11px] tracking-[0.15em] uppercase px-8 py-3 transition-colors" style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}>
          Get Foundations — $197 →
        </Link>
        <p className="text-[10px] tracking-[0.08em]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
          8 modules · Lifetime access · Start today
        </p>
      </motion.div>
    </section>
  )
}
