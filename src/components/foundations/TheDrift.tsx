import { FadeUp } from '@/components/motion/FadeUp'

export function TheDrift() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp className="max-w-xl mx-auto">
        <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>The Problem</p>
        <blockquote className="italic leading-snug mb-5" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>
          &ldquo;You&apos;re not building.<br />You&apos;re consuming.&rdquo;
        </blockquote>
        <p className="text-[13px] leading-[1.8] max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Drift is the low-energy default. Scrolling without intention. Consuming to avoid thinking. Waiting for perfect clarity before entering the stream. The shores feel safe. But nothing grows there.
        </p>
      </FadeUp>
    </section>
  )
}
