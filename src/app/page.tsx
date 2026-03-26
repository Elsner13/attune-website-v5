import { Nav } from '@/components/ui/Nav'
import { Footer } from '@/components/ui/Footer'
import { CrimsonDivider } from '@/components/ui/CrimsonDivider'
import { Hero } from '@/components/home/Hero'
import { OperatingSystem } from '@/components/home/OperatingSystem'
import { PrinciplesGrid } from '@/components/home/PrinciplesGrid'
import { SamBio } from '@/components/home/SamBio'
import { SignalNoiseCTA } from '@/components/home/SignalNoiseCTA'
import { HomeFinalCTA } from '@/components/home/HomeFinalCTA'

export default function HomePage() {
  return (
    <>
      <Nav variant="marketing" />
      <Hero />
      <CrimsonDivider />
      <OperatingSystem />
      <PrinciplesGrid />
      <SamBio />
      <SignalNoiseCTA />
      <HomeFinalCTA />
      <Footer />
    </>
  )
}
