import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { AttuneLogo } from '@/components/ui/AttuneLogo'
import { SignOutButton } from './SignOutButton'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <div className="min-h-screen bg-void">
      <nav
        className="border-b px-6 h-14 flex items-center justify-between"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-2.5">
          <AttuneLogo size={20} />
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,215,0.8)' }}
          >
            Attune
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="text-[9px] tracking-[0.1em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
          >
            Foundations
          </span>
          <SignOutButton />
        </div>
      </nav>
      {children}
    </div>
  )
}
