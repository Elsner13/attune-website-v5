import { FadeUp } from '@/components/motion/FadeUp'
import Link from 'next/link'

const includes = [
  '8 core modules',
  'Lifetime access + all updates',
  'Applied constraint design exercises',
  'Cross-domain examples (coaching, content, business)',
]

export function PricingBlock() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(225,29,72,0.06) 0%, transparent 65%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp>
        <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>The Choice</p>
        <h2 className="italic leading-tight mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
          Stop consuming.<br />Start operating.
        </h2>
        <p className="text-[11px] mb-10" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)' }}>Or spend the next 5 years doing what I did.</p>
        <div className="max-w-xs mx-auto p-7 mb-5" style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}>
          <p className="italic" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7', fontSize: '2.2rem' }}>$197</p>
          <p className="text-[10px] tracking-[0.08em] line-through mb-5" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>Was $97</p>
          <div className="flex flex-col gap-2 mb-6 text-left">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="text-[10px] mt-0.5" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>✓</span>
                <span className="text-[10px] leading-relaxed" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)' }}>{item}</span>
              </div>
            ))}
          </div>
          <Link href="https://attunemastery.com/checkout" className="block text-white text-[11px] tracking-[0.15em] uppercase py-3 text-center transition-colors" style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}>
            Get Foundations →
          </Link>
        </div>
        <p className="text-[10px] tracking-[0.06em]" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>$197 · Start today · Install this week</p>
      </FadeUp>
    </section>
  )
}
