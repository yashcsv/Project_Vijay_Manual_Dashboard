import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ConfidencePill from '../ui/ConfidencePill'

export default function VerdictSection({ verdict }) {
  return (
    <motion.section
      id="verdict"
      className="py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>Verdict and Action</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">What You Must Build and What You Must Avoid</h2>

        <div className="card-surface mt-8 rounded-2xl p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-h3 font-semibold text-text-primary">{verdict.summary}</p>
            <ConfidencePill level={verdict.confidence} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Top Reasons</h3>
              <ul className="mt-3 space-y-2 text-body">
                {verdict.topReasons.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Top Concerns</h3>
              <ul className="mt-3 space-y-2 text-body">
                {verdict.topConcerns.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Conditions To Win</h3>
              <ul className="mt-3 space-y-2 text-body">
                {verdict.conditions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
