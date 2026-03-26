import { FadeUp } from '@/components/motion/FadeUp'
import Link from 'next/link'

export function SignalNoiseCTA() {
  return (
    <section className="py-20 px-6 text-center" style={{ background: 'rgba(225,29,72,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp className="max-w-lg mx-auto">
        <p className="text-[9px] tracking-[0.25em] uppercase mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>Signal / Noise</p>
        <h2 className="text-[1.15rem] italic leading-snug mb-3" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>
          Most newsletters teach tactics.<br />This one trains perception.
        </h2>
        <p className="text-[11px] leading-[1.8] max-w-xs mx-auto mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Free. Weekly. 500+ coaches, creators, and practitioners. Unsubscribe if it&apos;s not signal.
        </p>
        <Link
          href="https://findthesignal.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 transition-colors"
          style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(225,29,72,0.5)', color: '#E11D48' }}
        >
          Join Signal/Noise →
        </Link>
      </FadeUp>
    </section>
  )
}
