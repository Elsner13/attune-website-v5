'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp } from '@/components/motion/FadeUp'

const faqs = [
  { q: 'Who is this for?', a: 'Coaches, creators, athletes, and practitioners who want to stop collecting frameworks and start operating from a unified lens. If you work with people, create content, or are building something, this applies to your work.' },
  { q: 'Is this only for athletes?', a: "No. The examples span coaching, content creation, business building, parenting, and personal performance. Ecological dynamics is a general theory of intelligent behavior — it applies anywhere perception and action meet." },
  { q: 'How long does it take?', a: 'The 8 modules are designed to be completed in a focused weekend — roughly 8 hours of material. Most students work through one module per day over a week. You have lifetime access, so set your own pace.' },
  { q: 'Is there a refund policy?', a: "If you complete the first two modules and don't find the lens useful, reach out within 14 days for a full refund. No questions asked." },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-20 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <FadeUp>
        <p className="text-[9px] tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>FAQ</p>
        <div className="max-w-lg mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-4 text-left">
                <span className="text-[11px]" style={{ fontFamily: 'var(--font-sans)', color: '#F2EDD7' }}>{faq.q}</span>
                <span className="text-[12px] ml-4 flex-shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#E11D48' }}>{open === i ? '×' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="text-[11px] leading-[1.8] pb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
