import { FadeUp } from '@/components/motion/FadeUp'
import Link from 'next/link'

export function HomeFinalCTA() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(225,29,72,0.07) 0%, transparent 70%)' }}>
      <FadeUp className="relative">
        <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>The Work</p>
        <h2 className="italic leading-tight mb-3" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          Install the operating system.<br />Rebuild your practice from it.
        </h2>
        <p className="text-[11px] mb-6" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)' }}>8 modules · Lifetime access · $197</p>
        <Link href="/foundations" className="inline-block text-white text-[11px] tracking-[0.15em] uppercase px-7 py-3 transition-colors" style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}>
          Get Foundations →
        </Link>
      </FadeUp>
    </section>
  )
}
