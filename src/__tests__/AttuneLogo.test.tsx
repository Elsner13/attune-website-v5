import { render } from '@testing-library/react'
import { AttuneLogo } from '@/components/ui/AttuneLogo'

describe('AttuneLogo', () => {
  it('renders an SVG', () => {
    const { container } = render(<AttuneLogo size={24} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom size', () => {
    const { container } = render(<AttuneLogo size={48} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('renders the spiral path in crimson', () => {
    const { container } = render(<AttuneLogo size={24} />)
    const paths = container.querySelectorAll('path')
    const spiralPath = Array.from(paths).find(p =>
      p.getAttribute('stroke') === '#E11D48'
    )
    expect(spiralPath).toBeInTheDocument()
  })
})
