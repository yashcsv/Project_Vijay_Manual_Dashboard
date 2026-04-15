import { motion } from 'framer-motion'
import KpiCard from '../ui/KpiCard'
import ScoreDisplay from '../ui/ScoreDisplay'
import QuoteBlock from '../ui/QuoteBlock'
import SectionLabel from '../ui/SectionLabel'

export default function HeroSection({ meta, kpis }) {
  return (
    <motion.section
      id="overview"
      className="relative overflow-hidden py-24"
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ x: [0, -10, 8, 0], y: [0, 8, -6, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(207,61,46,0.08), transparent 40%), radial-gradient(circle at 80% 30%, rgba(17,63,103,0.08), transparent 40%)',
        }}
      />
      <div className="section-shell relative z-10">
        <SectionLabel>Overview Hero</SectionLabel>
        <h2 className="max-w-5xl font-display text-display leading-[0.88] tracking-[-0.03em] text-text-primary">
          {meta.title}
        </h2>
        <p className="mt-6 max-w-3xl text-body text-text-secondary">{meta.tldr}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <ScoreDisplay value={meta.overallScore.value} rationale={meta.overallScore.rationale} />
            <QuoteBlock quote={meta.keyQuote.text} source={meta.keyQuote.location} />
          </div>
          <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
