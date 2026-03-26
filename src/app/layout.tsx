import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Attune — Skill is forged, not taught.',
  description: 'Ecological dynamics applied to skill acquisition, creator business, and human performance.',
  openGraph: {
    title: 'Attune — Skill is forged, not taught.',
    description: 'Install the operating system. Rebuild your practice from it.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${GeistMono.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
