// src/app/dashboard/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { getModule, getNextModule } from '@/lib/modules'
import { ReadingProgress } from './ReadingProgress'
import { ModuleComplete } from './ModuleComplete'
import { getModuleContent } from './content'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params
  const mod = getModule(slug)
  if (!mod) notFound()

  const user = await currentUser()
  const completed: string[] = (user?.publicMetadata?.completedModules as string[]) ?? []
  const isCompleted = completed.includes(slug)

  const nextMod = getNextModule(slug)
  const Content = getModuleContent(slug)

  return (
    <>
      <ReadingProgress />
      <main className="pt-14 pb-20">
        {/* Back nav */}
        <div className="max-w-3xl mx-auto px-6 pt-6 pb-2">
          <Link
            href="/dashboard"
            className="text-[9px] tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
          >
            ← Back to Foundations
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-[680px] mx-auto px-6 py-10">
          {/* Module eyebrow */}
          <p
            className="text-[9px] tracking-[0.25em] uppercase mb-4 text-center"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.15)' }}
          >
            Module {mod.number}
          </p>

          {/* Title */}
          <h1
            className="text-[2rem] italic leading-tight text-center mb-6"
            style={{ fontFamily: 'var(--font-serif)', color: '#F2EDD7' }}
          >
            {mod.title}
          </h1>

          {/* Crimson divider */}
          <div
            className="mb-8"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(225,29,72,0.3), transparent)',
            }}
          />

          {/* Content */}
          <Content />

          {/* Complete CTA */}
          <ModuleComplete
            slug={slug}
            nextSlug={nextMod?.slug}
            isCompleted={isCompleted}
          />
        </article>
      </main>
    </>
  )
}
