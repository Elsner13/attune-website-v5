import { FadeUp } from '@/components/motion/FadeUp'

export function OperatingSystem() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
            The Operating System
          </p>
          <h2 className="text-[1.4rem] italic leading-snug mb-5" style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}>
            One lens. Everything organizes.
          </h2>
          <p className="text-[13px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Ecological dynamics isn&apos;t a model for sport. It&apos;s a complete description of how living systems
            couple with their environments to generate intelligent behavior. Once you see it, you see it
            everywhere. Practice design. Content creation. Business building. Parenting. Consciousness itself.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
