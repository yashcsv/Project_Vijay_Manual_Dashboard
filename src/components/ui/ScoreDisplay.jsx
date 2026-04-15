import { motion } from 'framer-motion'

export default function ScoreDisplay({ value, rationale }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 0.4, type: 'spring' }}
      className="card-surface rounded-2xl p-6"
    >
      <p className="text-label uppercase tracking-[0.18em] text-text-muted">Overall Credibility Score</p>
      <p className="mt-3 font-display text-[72px] leading-none text-accent-primary">{value}/10</p>
      <p className="mt-2 text-body text-text-secondary">{rationale}</p>
    </motion.div>
  )
}
