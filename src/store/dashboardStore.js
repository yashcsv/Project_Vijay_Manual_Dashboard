import { create } from 'zustand'

export const useDashboardStore = create((set) => ({
  activeSection: 'overview',
  period: 'All',
  theme: 'light',
  setActiveSection: (activeSection) => set({ activeSection }),
  setPeriod: (period) => set({ period }),
  setTheme: (theme) => set({ theme }),
}))
