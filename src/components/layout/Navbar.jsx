import { Link, useLocation } from 'react-router-dom'
import { useDashboardStore } from '../../store/dashboardStore'

export default function Navbar({ sections }) {
  const activeSection = useDashboardStore((s) => s.activeSection)
  const theme = useDashboardStore((s) => s.theme)
  const setTheme = useDashboardStore((s) => s.setTheme)
  const location = useLocation()
  const onManual = location.pathname === '/manual'
  const onContact = location.pathname === '/contact'

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-overlay/95 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3">
        <h1 className="font-display text-3xl tracking-tight text-accent-secondary">Project Vijay</h1>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 lg:flex">
          <Link
            to="/"
            className={`rounded-full px-3 py-1 text-small ${
              !onManual && !onContact ? 'bg-accent-secondary text-white' : 'text-text-secondary'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/manual"
            className={`rounded-full px-3 py-1 text-small ${
              onManual ? 'bg-accent-secondary text-white' : 'text-text-secondary'
            }`}
          >
            Manual
          </Link>
          <Link
            to="/contact"
            className={`rounded-full px-3 py-1 text-small ${
              onContact ? 'bg-accent-secondary text-white' : 'text-text-secondary'
            }`}
          >
            Contact Us
          </Link>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3 py-1 text-small ${
                activeSection === section.id ? 'bg-accent-primary text-white' : 'text-text-secondary'
              }`}
            >
              {section.label}
            </a>
          ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-border-default px-3 py-1 text-small text-text-secondary"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}
