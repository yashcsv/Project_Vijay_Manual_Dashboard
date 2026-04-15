import { motion } from 'framer-motion'
import InfoTooltip from './InfoTooltip'
import Badge from './Badge'
import Sparkline from '../charts/Sparkline'

export default function KpiCard({ kpi }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="card-surface rounded-2xl p-5"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">
          {kpi.label}
          <InfoTooltip content={`${kpi.tooltip} Source: ${kpi.source}`} />
        </h3>
        <Badge tone={kpi.deltaDirection}>{kpi.delta}</Badge>
      </div>
      <p className="tabular font-mono text-h2 text-text-primary">
        {kpi.value}
        {kpi.unit}
      </p>
      <div className="mt-3">
        <Sparkline data={kpi.trend} />
      </div>
    </motion.article>
  )
}
