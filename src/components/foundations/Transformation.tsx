import { FadeUp } from '@/components/motion/FadeUp'

export function Transformation() {
  return (
    <section className="py-20 px-6 text-center" style={{ background: 'rgba(225,29,72,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp>
        <p className="text-[9px] tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>The Transformation</p>
        <div className="flex flex-col sm:flex-row items-start gap-4 max-w-lg mx-auto text-left">
          <div className="flex-1 p-5" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[9px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>Entry State</p>
            <p className="text-[11px] italic leading-[1.8]" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.4)' }}>
              &ldquo;I understand ecological dynamics conceptually but can&apos;t apply it consistently. I&apos;m collecting frameworks that don&apos;t connect.&rdquo;
            </p>
          </div>
          <div className="text-[14px] mt-6 flex-shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>→</div>
          <div className="flex-1 p-5" style={{ border: '1px solid rgba(225,29,72,0.25)' }}>
            <p className="text-[9px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>Exit State</p>
            <p className="text-[11px] italic leading-[1.8]" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>
              &ldquo;I perceive coupling, constraints, and affordances in real time. I operate from one coherent lens across all my work.&rdquo;
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
