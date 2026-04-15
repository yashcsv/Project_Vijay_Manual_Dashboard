import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import Badge from '../ui/Badge'

export default function HiddenSignalsSection({ hiddenSignals }) {
  return (
    <motion.section
      id="hidden"
      className="bg-bg-surface py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>Hidden Signals</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">What Is Emphasized, What Is Quietly Missing</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {hiddenSignals.map((signal) => (
            <article key={signal.id} className="card-surface rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-h3 font-semibold">{signal.title}</h3>
                <Badge tone={signal.severity === 'high' ? 'negative' : 'warning'}>{signal.type}</Badge>
              </div>
              <p className="mt-3 text-body text-text-secondary">{signal.body}</p>
              <p className="mt-3 text-small text-text-muted">Source: {signal.source}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
