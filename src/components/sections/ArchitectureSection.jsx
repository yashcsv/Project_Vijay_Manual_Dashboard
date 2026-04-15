import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

export default function ArchitectureSection() {
  return (
    <motion.section
      id="architecture"
      className="bg-bg-surface py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="section-shell">
        <SectionLabel>System Blueprint</SectionLabel>
        <h2 className="text-h1 font-display tracking-tight">End-to-End Architecture Decision Map</h2>

        <div className="card-surface mt-8 rounded-2xl p-6 font-mono text-mono leading-relaxed text-text-secondary">
          <p>Ingestion Layer: External tables to staging to validation package</p>
          <p>Core Schema: Transactions partitioned by month, customers, merchants, labels</p>
          <p>Query Layer: Analytical SQL + advisor package for slow query capture</p>
          <p>ML Layer: OML model object trained from SQL feature view and scored with PREDICTION()</p>
          <p>Benchmark Layer: perf_log with elapsed time, buffer gets, and plan hash snapshots</p>
          <p>Reporting Layer: APEX or Database Actions for latency, AUC, and index behavior dashboards</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="card-surface rounded-2xl p-5">
            <h3 className="text-h3 font-semibold">Trade-off</h3>
            <p className="mt-2 text-body">In-DB ML reduces movement and scoring latency but narrows algorithm choice.</p>
          </article>
          <article className="card-surface rounded-2xl p-5">
            <h3 className="text-h3 font-semibold">Evaluator Signal</h3>
            <p className="mt-2 text-body">Measured before and after optimizer behavior is a top-ranked judging signal.</p>
          </article>
          <article className="card-surface rounded-2xl p-5">
            <h3 className="text-h3 font-semibold">Failure Point</h3>
            <p className="mt-2 text-body">Feature joins and partition filters are frequent breakpoints that can invalidate results.</p>
          </article>
        </div>
      </div>
    </motion.section>
  )
}
