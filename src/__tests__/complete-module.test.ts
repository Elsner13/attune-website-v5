/**
 * @jest-environment node
 */

jest.mock('@clerk/nextjs/server', () => ({
  auth: jest.fn(),
  clerkClient: jest.fn(),
}))

import { auth, clerkClient } from '@clerk/nextjs/server'
import { POST } from '@/app/api/complete-module/route'
import { NextRequest } from 'next/server'

describe('POST /api/complete-module', () => {
  it('returns 401 when not authenticated', async () => {
    ;(auth as jest.Mock).mockResolvedValue({ userId: null })
    const req = new NextRequest('http://localhost/api/complete-module', {
      method: 'POST',
      body: JSON.stringify({ slug: '01' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(401)
  })

  it('returns 400 when slug is missing', async () => {
    ;(auth as jest.Mock).mockResolvedValue({ userId: 'user_123' })
    const req = new NextRequest('http://localhost/api/complete-module', {
      method: 'POST',
      body: JSON.stringify({}),
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 200 and updates metadata when valid', async () => {
    const mockUpdateUser = jest.fn().mockResolvedValue({})
    ;(auth as jest.Mock).mockResolvedValue({ userId: 'user_123' })
    ;(clerkClient as jest.Mock).mockResolvedValue({
      users: {
        getUser: jest.fn().mockResolvedValue({
          publicMetadata: { completedModules: ['01'] },
        }),
        updateUser: mockUpdateUser,
      },
    })
    const req = new NextRequest('http://localhost/api/complete-module', {
      method: 'POST',
      body: JSON.stringify({ slug: '02' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(200)
    expect(mockUpdateUser).toHaveBeenCalledWith('user_123', {
      publicMetadata: { completedModules: ['01', '02'] },
    })
  })
})
