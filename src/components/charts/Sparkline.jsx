import { LineChart, Line, ResponsiveContainer } from 'recharts'

export default function Sparkline({ data }) {
  const chartData = data.map((value, idx) => ({ idx, value }))

  return (
    <div className="h-10 w-full">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="value" stroke="var(--accent-primary)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
