interface AttuneLogoProps {
  size?: number
  className?: string
}

export function AttuneLogo({ size = 24, className }: AttuneLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-label="Attune logo"
    >
      {/* A frame */}
      <path
        d="M256 30 L480 480 L380 480 L256 200 L132 480 L32 480 Z"
        stroke="#F2EDD7"
        strokeWidth="14"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Crossbar */}
      <line
        x1="176" y1="310"
        x2="340" y2="310"
        stroke="#F2EDD7"
        strokeWidth="10"
      />
      {/* Spiral — crimson */}
      <path
        d="M200 310 Q120 340 110 400 Q100 460 160 470 Q220 480 230 430 Q240 380 180 370"
        stroke="#E11D48"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
