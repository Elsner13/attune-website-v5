// src/lib/modules.ts
export interface Module {
  slug: string
  number: string
  title: string
  description: string
}

export const MODULES: Module[] = [
  {
    slug: '01',
    number: '01',
    title: "Why the Reps Aren't Working",
    description: 'Coupling, representative practice, why most training fails',
  },
  {
    slug: '02',
    number: '02',
    title: 'The Environment Is the Teacher',
    description: 'Affordances, constraint design, information landscapes',
  },
  {
    slug: '03',
    number: '03',
    title: "How to See What You've Been Missing",
    description: 'Attunement timeline, blockers, signal/noise split',
  },
  {
    slug: '04',
    number: '04',
    title: 'Stop Teaching. Start Designing.',
    description: 'Constraint design, emergence, environment engineering',
  },
  {
    slug: '05',
    number: '05',
    title: 'Train the Eye Before the Hand',
    description: 'Perception-action, coupled vs decoupled practice',
  },
  {
    slug: '06',
    number: '06',
    title: 'The Attractor Landscape',
    description: 'Attractor states, phase transitions, stability and change',
  },
  {
    slug: '07',
    number: '07',
    title: 'Designing for Emergence',
    description: 'Self-organization, non-linear development, complex systems',
  },
  {
    slug: '08',
    number: '08',
    title: 'Operating from the OS',
    description: 'Integrating the lens across all domains of your work and life',
  },
]

export function getModule(slug: string): Module | undefined {
  return MODULES.find((m) => m.slug === slug)
}

export function getNextModule(slug: string): Module | undefined {
  const idx = MODULES.findIndex((m) => m.slug === slug)
  if (idx === -1 || idx === MODULES.length - 1) return undefined
  return MODULES[idx + 1]
}
