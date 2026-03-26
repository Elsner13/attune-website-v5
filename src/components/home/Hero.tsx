'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AttuneLogo } from '@/components/ui/AttuneLogo'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,72,0.07) 0%, transparent 65%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <AttuneLogo size={240} className="opacity-[0.04]" />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[9px] tracking-[0.25em] uppercase mb-5 relative"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
      >
        Ecological Dynamics · Stoic Philosophy · Skill Acquisition
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="italic leading-[1.05] mb-5 relative"
        style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
      >
        Skill is forged,<br />not taught.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-[13px] leading-[1.8] max-w-sm mb-8 relative"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        You already know what you need to do.<br />
        You just can&apos;t hear it through the noise.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-3 relative"
      >
        <Link
          href="/foundations"
          className="text-white text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 transition-colors"
          style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}
        >
          Install the OS →
        </Link>
        <Link
          href="https://findthesignal.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 transition-colors"
          style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)' }}
        >
          Read Signal/Noise
        </Link>
      </motion.div>
    </section>
  )
}
