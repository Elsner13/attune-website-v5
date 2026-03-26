// src/__tests__/modules.test.ts
import { MODULES, getModule, getNextModule } from '@/lib/modules'

describe('modules', () => {
  it('exports 8 modules', () => {
    expect(MODULES).toHaveLength(8)
  })

  it('each module has required fields', () => {
    for (const m of MODULES) {
      expect(m).toHaveProperty('slug')
      expect(m).toHaveProperty('number')
      expect(m).toHaveProperty('title')
      expect(m).toHaveProperty('description')
    }
  })

  it('getModule returns module by slug', () => {
    const m = getModule('01')
    expect(m?.title).toBe("Why the Reps Aren't Working")
  })

  it('getModule returns undefined for unknown slug', () => {
    expect(getModule('99')).toBeUndefined()
  })

  it('getNextModule returns next module', () => {
    const next = getNextModule('01')
    expect(next?.slug).toBe('02')
  })

  it('getNextModule returns undefined for last module', () => {
    expect(getNextModule('08')).toBeUndefined()
  })
})
