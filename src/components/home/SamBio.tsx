import { FadeUp } from '@/components/motion/FadeUp'
import { AttuneLogo } from '@/components/ui/AttuneLogo'

const tags = ['2× NCAA Champion', '6× All-American', 'Signal/Noise 500+']

export function SamBio() {
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp className="max-w-lg mx-auto">
        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ border: '1px solid rgba(225,29,72,0.3)' }}>
          <AttuneLogo size={22} />
        </div>
        <p className="text-[14px] font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)', color: '#F2EDD7' }}>Sam Elsner</p>
        <p className="text-[11px] leading-[1.8] max-w-sm mx-auto mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
          2× NCAA National Champion. Ecological psychologist. Creator educator.
          5 years synthesizing Gibson, Bernstein, and Marcus Aurelius into one operating system.
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-[9px] tracking-[0.1em] px-2.5 py-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {tag}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
