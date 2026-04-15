import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import ChartWrapper from './ChartWrapper'

export default function ScatterPlot({ chart }) {
  return (
    <ChartWrapper title={chart.title} sourceNote={chart.sourceNote}>
      <ResponsiveContainer>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey={chart.xKey} name="Rows (K)" />
          <YAxis dataKey={chart.yKeys[0]} name="Signal" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={chart.data} fill={chart.colors[0]} />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
