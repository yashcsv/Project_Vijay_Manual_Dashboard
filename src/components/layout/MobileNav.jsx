import { useDashboardStore } from '../../store/dashboardStore'

export default function MobileNav({ sections }) {
  const activeSection = useDashboardStore((s) => s.activeSection)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-default bg-bg-elevated/95 p-2 backdrop-blur md:hidden">
      <ul className="grid grid-cols-4 gap-1 overflow-x-auto text-small">
        {sections.slice(0, 4).map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block rounded-md px-2 py-2 text-center ${
                activeSection === section.id ? 'bg-accent-primary/15 text-accent-primary' : 'text-text-secondary'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
