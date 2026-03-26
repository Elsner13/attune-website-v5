// src/app/dashboard/[slug]/content/FallbackContent.tsx
import { getModule } from '@/lib/modules'

export function FallbackContent({ slug }: { slug: string }) {
  const mod = getModule(slug)
  return (
    <div className="text-center py-12">
      <p
        className="text-[10px] tracking-[0.15em] uppercase"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
      >
        Content for {mod?.title} is being prepared.
      </p>
    </div>
  )
}
