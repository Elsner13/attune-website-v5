'use client'
import { useClerk } from '@clerk/nextjs'

export function SignOutButton() {
  const { signOut } = useClerk()
  return (
    <button
      onClick={() => signOut()}
      className="border border-border text-cream/30 text-[9px] tracking-[0.08em] px-2.5 py-1 hover:text-cream/60 transition-colors"
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      Sign out
    </button>
  )
}
