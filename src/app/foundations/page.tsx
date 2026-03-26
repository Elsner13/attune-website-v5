import { Footer } from '@/components/ui/Footer'
import { CrimsonDivider } from '@/components/ui/CrimsonDivider'
import { FoundationsHero } from '@/components/foundations/FoundationsHero'
import { TheDrift } from '@/components/foundations/TheDrift'
import { OperatingSystem } from '@/components/home/OperatingSystem'
import { TheShift } from '@/components/foundations/TheShift'
import { WhatInside } from '@/components/foundations/WhatInside'
import { Transformation } from '@/components/foundations/Transformation'
import { Testimonials } from '@/components/foundations/Testimonials'
import { SamBio } from '@/components/home/SamBio'
import { PricingBlock } from '@/components/foundations/PricingBlock'
import { FoundationsSignalNoise } from '@/components/foundations/FoundationsSignalNoise'
import { FAQ } from '@/components/foundations/FAQ'

function FoundationsNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(8,8,6,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-60" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,215,0.5)' }}>Attune</a>
        <a href="https://buy.stripe.com/6oUaEX75TftH4GP77RefC06" className="text-white text-[10px] tracking-[0.12em] uppercase px-3.5 py-1.5 transition-colors" style={{ fontFamily: 'var(--font-mono)', background: '#E11D48' }}>Enroll — $197</a>
      </div>
    </nav>
  )
}

export default function FoundationsPage() {
  return (
    <>
      <FoundationsNav />
      <FoundationsHero />
      <CrimsonDivider />
      <TheDrift />
      <OperatingSystem />
      <TheShift />
      <WhatInside />
      <Transformation />
      <Testimonials />
      <SamBio />
      <PricingBlock />
      <FoundationsSignalNoise />
      <FAQ />
      <Footer />
    </>
  )
}
