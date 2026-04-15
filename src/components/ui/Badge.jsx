const map = {
  positive: 'bg-semantic-positive/15 text-semantic-positive border-semantic-positive/25',
  negative: 'bg-semantic-negative/15 text-semantic-negative border-semantic-negative/25',
  warning: 'bg-semantic-warning/15 text-semantic-warning border-semantic-warning/25',
  neutral: 'bg-semantic-neutral/15 text-semantic-neutral border-semantic-neutral/25',
}

export default function Badge({ children, tone = 'neutral' }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${map[tone]}`}>
      {children}
    </span>
  )
}
