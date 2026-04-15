import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import ChartWrapper from './ChartWrapper'

export default function TrendLine({ chart }) {
  return (
    <ChartWrapper title={chart.title} sourceNote={chart.sourceNote}>
      <ResponsiveContainer>
        <LineChart data={chart.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey={chart.xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {chart.yKeys.map((key, idx) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={chart.colors[idx % chart.colors.length]}
              isAnimationActive
              animationDuration={1000}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
