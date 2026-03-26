import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { MODULES } from '@/lib/modules'

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { slug } = body

  if (!slug || !MODULES.find((m) => m.slug === slug)) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
  }

  const client = await clerkClient()
  const user = await client.users.getUser(userId)
  const completed: string[] = (user.publicMetadata?.completedModules as string[]) ?? []

  if (!completed.includes(slug)) {
    await client.users.updateUser(userId, {
      publicMetadata: { completedModules: [...completed, slug] },
    })
  }

  return NextResponse.json({ ok: true })
}
