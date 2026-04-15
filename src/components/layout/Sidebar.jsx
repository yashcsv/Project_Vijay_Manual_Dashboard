import { motion } from 'framer-motion'
import { useDashboardStore } from '../../store/dashboardStore'

export default function Sidebar({ sections }) {
  const activeSection = useDashboardStore((s) => s.activeSection)
  const setActiveSection = useDashboardStore((s) => s.setActiveSection)

  const scrollToSection = (id) => {
    const target = document.getElementById(id)
    if (!target) return
    setActiveSection(id)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside className="sticky top-8 hidden h-[90vh] w-60 shrink-0 rounded-2xl border border-border-default bg-bg-overlay p-4 shadow-skinSm md:block">
      <p className="text-label uppercase tracking-[0.18em] text-text-muted">Navigator</p>
      <nav className="mt-4 space-y-2">
        {sections.map((section) => {
          const active = activeSection === section.id
          return (
            <button
              type="button"
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative block rounded-lg px-3 py-2 text-small ${
                active ? 'text-accent-primary' : 'text-text-secondary'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute inset-0 -z-10 rounded-lg bg-accent-primary/12"
                />
              )}
              {section.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
