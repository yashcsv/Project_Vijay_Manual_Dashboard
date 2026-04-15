import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import ChartWrapper from './ChartWrapper'

export default function BarComparison({ chart }) {
  return (
    <ChartWrapper title={chart.title} sourceNote={chart.sourceNote}>
      <ResponsiveContainer>
        <BarChart data={chart.data} layout="vertical" margin={{ left: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis type="number" />
          <YAxis dataKey={chart.xKey} type="category" width={140} />
          <Tooltip />
          <Bar dataKey={chart.yKeys[0]} fill={chart.colors[0]} isAnimationActive animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
