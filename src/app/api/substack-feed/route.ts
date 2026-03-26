// src/app/api/substack-feed/route.ts
import { NextResponse } from 'next/server'

export const revalidate = 3600

interface SubstackPost {
  title: string
  link: string
  pubDate: string
}

export async function GET() {
  try {
    const res = await fetch('https://findthesignal.substack.com/feed', {
      next: { revalidate: 3600 },
    })
    const xml = await res.text()

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? []
    const posts: SubstackPost[] = items.slice(0, 3).map((item) => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
                    item.match(/<title>(.*?)<\/title>/)?.[1] ?? ''
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? ''
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? ''
      return { title, link, pubDate }
    })

    return NextResponse.json(posts)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
