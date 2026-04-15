import { useMemo } from 'react'
import { useDashboardStore } from '../store/dashboardStore'

export function useChartData(data) {
  const period = useDashboardStore((s) => s.period)

  return useMemo(() => {
    if (period === 'All' || !Array.isArray(data)) {
      return data
    }

    const sliceMap = {
      '1Y': 2,
      '3Y': 4,
      '5Y': 5,
    }

    const count = sliceMap[period] ?? data.length
    return data.slice(-count)
  }, [data, period])
}
