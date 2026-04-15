import { useEffect } from 'react'
import { useDashboardStore } from '../store/dashboardStore'

export function useScrollSpy(ids) {
  const setActiveSection = useDashboardStore((s) => s.setActiveSection)

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!targets.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.15, 0.35, 0.6] },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [ids, setActiveSection])
}
