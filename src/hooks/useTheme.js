import { useEffect } from 'react'
import { useDashboardStore } from '../store/dashboardStore'

export function useTheme() {
  const theme = useDashboardStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dashboard-theme', theme)
  }, [theme])

  useEffect(() => {
    const stored = localStorage.getItem('dashboard-theme')
    if (stored && stored !== theme) {
      useDashboardStore.getState().setTheme(stored)
    }
  }, [theme])
}
