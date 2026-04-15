import ChartWrapper from './ChartWrapper'

const axis = { low: 1, medium: 2, high: 3 }

export default function RiskMatrix({ risks }) {
  return (
    <ChartWrapper title="Risk Probability vs Impact Matrix" sourceNote="3.md Stage 10 and Stage 12">
      <svg viewBox="0 0 300 300" className="h-full w-full rounded-xl bg-bg-elevated">
        <rect x="0" y="0" width="300" height="300" fill="transparent" stroke="rgba(0,0,0,0.2)" />
        <line x1="100" y1="0" x2="100" y2="300" stroke="rgba(0,0,0,0.15)" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(0,0,0,0.15)" />
        <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(0,0,0,0.15)" />
        <line x1="0" y1="200" x2="300" y2="200" stroke="rgba(0,0,0,0.15)" />
        {risks.map((risk, idx) => {
          const x = axis[risk.probability] * 80 - 20 + (idx % 2) * 16
          const y = 320 - axis[risk.impact] * 80 - (idx % 3) * 14
          return (
            <g key={risk.id}>
              <circle cx={x} cy={y} r="9" fill="var(--semantic-negative)" opacity="0.8" />
              <text x={x + 12} y={y + 4} fontSize="10" fill="var(--text-secondary)">
                {risk.label}
              </text>
            </g>
          )
        })}
      </svg>
    </ChartWrapper>
  )
}
