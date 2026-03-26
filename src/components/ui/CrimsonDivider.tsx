// src/components/ui/CrimsonDivider.tsx
export function CrimsonDivider() {
  return (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(225,29,72,0.3), transparent)',
      }}
      aria-hidden="true"
    />
  )
}
