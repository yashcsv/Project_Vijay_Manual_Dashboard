import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import RiskMatrix from '../charts/RiskMatrix'
import Badge from '../ui/Badge'

export default function RisksSection({ risks }) {
  return (
    <motion.section
      id="risks"
      className="py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>Risk and Failure Analysis</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">Failure Playbook and Detection Strategy</h2>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <RiskMatrix risks={risks} />
          <div className="space-y-4">
            {risks.map((risk) => (
              <article
                key={risk.id}
                className="card-surface rounded-2xl p-5"
                style={risk.probability === 'high' && risk.impact === 'high' ? { animation: 'pulse 3s infinite' } : {}}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-h3 font-semibold">{risk.label}</h3>
                  <Badge tone={risk.impact === 'high' ? 'negative' : 'warning'}>
                    {risk.probability}/{risk.impact}
                  </Badge>
                </div>
                <p className="mt-2 text-body text-text-secondary">{risk.description}</p>
                <p className="mt-2 text-small text-text-muted">Source: {risk.source}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
