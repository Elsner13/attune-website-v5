import { render, screen } from '@testing-library/react'
import { ModuleCard } from '@/components/ui/ModuleCard'
import { MODULES } from '@/lib/modules'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} style={style}>{children}</div>
    ),
  },
}))

const mod = MODULES[0]

describe('ModuleCard', () => {
  it('renders module title', () => {
    render(<ModuleCard module={mod} state="locked" />)
    expect(screen.getByText(mod.title)).toBeInTheDocument()
  })

  it('shows DONE badge when completed', () => {
    render(<ModuleCard module={mod} state="completed" />)
    expect(screen.getByText(/done/i)).toBeInTheDocument()
  })

  it('shows UP NEXT badge and Continue CTA when upNext', () => {
    render(<ModuleCard module={mod} state="upNext" />)
    expect(screen.getByText(/up next/i)).toBeInTheDocument()
    expect(screen.getByText(/continue/i)).toBeInTheDocument()
  })

  it('shows lock indicator when locked', () => {
    render(<ModuleCard module={mod} state="locked" />)
    expect(screen.getByLabelText(/locked/i)).toBeInTheDocument()
  })
})
