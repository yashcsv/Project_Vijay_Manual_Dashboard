import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import ChartWrapper from './ChartWrapper'

export default function DonutBreakdown({ chart }) {
  return (
    <ChartWrapper title={chart.title} sourceNote={chart.sourceNote}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={chart.data} dataKey={chart.yKeys[0]} nameKey={chart.xKey} innerRadius={70} outerRadius={110}>
            {chart.data.map((entry, index) => (
              <Cell key={entry.name} fill={chart.colors[index % chart.colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
