import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ConfidencePill from '../ui/ConfidencePill'

export default function InsightsSection({ insights }) {
  return (
    <motion.section
      id="insights"
      className="bg-bg-surface py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>Insights</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">Signals That Separate Average from Exceptional</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {insights.map((item) => (
            <article key={item.id} className="card-surface rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3 font-semibold">{item.title}</h3>
                <ConfidencePill level={item.confidence} />
              </div>
              <p className="mt-3 text-body text-text-secondary">{item.body}</p>
              <p className="mt-4 text-small text-text-muted">Source: {item.source}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
