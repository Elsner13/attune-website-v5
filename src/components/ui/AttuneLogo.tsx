import Image from 'next/image'

interface AttuneLogoProps {
  size?: number
  className?: string
}

export function AttuneLogo({ size = 24, className }: AttuneLogoProps) {
  return (
    <Image
      src="/Attune Logo (6).png"
      alt="Attune logo"
      width={size}
      height={size}
      style={{ filter: 'invert(1)', objectFit: 'contain' }}
      className={className}
    />
  )
}
