import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import ChartWrapper from './ChartWrapper'

export default function RadarView({ chart }) {
  return (
    <ChartWrapper title={chart.title} sourceNote={chart.sourceNote}>
      <ResponsiveContainer>
        <RadarChart data={chart.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={chart.xKey} />
          <PolarRadiusAxis />
          <Radar name="In-DB" dataKey={chart.yKeys[0]} stroke={chart.colors[0]} fill={chart.colors[0]} fillOpacity={0.4} />
          <Radar
            name="External"
            dataKey={chart.yKeys[1]}
            stroke={chart.colors[1]}
            fill={chart.colors[1]}
            fillOpacity={0.25}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
