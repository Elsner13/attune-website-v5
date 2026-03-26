import Link from 'next/link'
import { FadeUp } from '@/components/motion/FadeUp'

export function FoundationsSignalNoise() {
  return (
    <section className="py-14 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp>
        <p className="text-[11px] mb-2.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Not ready to commit?</p>
        <p className="text-[12px] italic mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.4)' }}>
          Start with Signal/Noise. Free, weekly.<br />You&apos;ll know within three issues whether this lens is for you.
        </p>
        <Link href="https://findthesignal.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] tracking-[0.12em] uppercase px-4 py-2 transition-colors" style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(225,29,72,0.4)', color: '#E11D48' }}>
          Join Signal/Noise →
        </Link>
      </FadeUp>
    </section>
  )
}
