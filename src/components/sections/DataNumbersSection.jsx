import { motion } from 'framer-motion'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import SectionLabel from '../ui/SectionLabel'
import BarComparison from '../charts/BarComparison'
import TrendLine from '../charts/TrendLine'
import DonutBreakdown from '../charts/DonutBreakdown'
import RadarView from '../charts/RadarView'
import ScatterPlot from '../charts/ScatterPlot'

const columnHelper = createColumnHelper()

export default function DataNumbersSection({ charts, rows }) {
  const columns = [
    columnHelper.accessor('metric', { header: 'Metric' }),
    columnHelper.accessor('target', { header: 'Target' }),
    columnHelper.accessor('method', { header: 'Measurement Method' }),
    columnHelper.accessor('source', { header: 'Source' }),
  ]

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const chartById = Object.fromEntries(charts.map((c) => [c.id, c]))

  return (
    <motion.section
      id="numbers"
      className="py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>Data and Numbers</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">Quantitative Evidence Layer</h2>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <BarComparison chart={chartById.c1} />
          <DonutBreakdown chart={chartById.c3} />
          <TrendLine chart={chartById.c2} />
          <RadarView chart={chartById.c4} />
          <div className="xl:col-span-2">
            <ScatterPlot chart={chartById.c5} />
          </div>
        </div>

        <div className="card-surface mt-8 overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-bg-elevated">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="border-b border-border-subtle px-4 py-3 text-left text-small font-semibold text-text-secondary"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-bg-surface/70">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="tabular border-b border-border-subtle px-4 py-3 text-small">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
