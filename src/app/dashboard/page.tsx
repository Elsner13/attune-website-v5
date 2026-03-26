import { currentUser } from '@clerk/nextjs/server'
import { ModuleCard } from '@/components/ui/ModuleCard'
import { MODULES } from '@/lib/modules'

export default async function DashboardPage() {
  const user = await currentUser()
  const completedModules: string[] = (user?.publicMetadata?.completedModules as string[]) ?? []

  function getState(slug: string) {
    if (completedModules.includes(slug)) return 'completed' as const
    const firstIncomplete = MODULES.find((m) => !completedModules.includes(m.slug))
    if (firstIncomplete?.slug === slug) return 'upNext' as const
    return 'locked' as const
  }

  const completed = completedModules.length
  const progress = Math.round((completed / MODULES.length) * 100)

  return (
    <main className="pt-12 pb-16">
      {/* Hero */}
      <div
        className="text-center px-6 py-10 border-b relative overflow-hidden"
        style={{
          borderColor: 'rgba(255,255,255,0.05)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(225,29,72,0.05) 0%, transparent 60%)',
        }}
      >
        <p
          className="text-[9px] tracking-[0.25em] uppercase mb-2.5"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.15)' }}
        >
          Attune Foundations
        </p>
        <h1
          className="text-3xl italic mb-2"
          style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}
        >
          The Operating System
        </h1>
        <p
          className="text-[9px] tracking-[0.15em] mb-4"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
        >
          {completed} of {MODULES.length} modules complete
        </p>
        <div className="w-[280px] h-[2px] mx-auto" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${progress}%`, background: '#E11D48' }}
          />
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-3xl mx-auto px-6 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MODULES.map((mod, i) => (
          <ModuleCard
            key={mod.slug}
            module={mod}
            state={getState(mod.slug)}
            index={i}
          />
        ))}
      </div>

      {/* Footer contact */}
      <div className="text-center mt-10">
        <p
          className="text-[9px] tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
        >
          Questions?{' '}
          <a href="https://t.me/+16128453855" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Telegram</a>
          {' · '}
          <a href="https://linkedin.com/in/sam-elsner" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          {' · '}
          <a href="https://x.com/samelsner" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">X</a>
        </p>
      </div>
    </main>
  )
}
