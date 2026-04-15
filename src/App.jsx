import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { dashboardData } from './data/dashboardData'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import MobileNav from './components/layout/MobileNav'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import HeroSection from './components/sections/HeroSection'
import InsightsSection from './components/sections/InsightsSection'
import DataNumbersSection from './components/sections/DataNumbersSection'
import ArchitectureSection from './components/sections/ArchitectureSection'
import RisksSection from './components/sections/RisksSection'
import HiddenSignalsSection from './components/sections/HiddenSignalsSection'
import VerdictSection from './components/sections/VerdictSection'
import ManualPage from './components/sections/ManualPage'
import ContactPage from './components/sections/ContactPage'

function DashboardPage() {
  const sectionIds = dashboardData.sections.map((s) => s.id)
  useScrollSpy(sectionIds)
  useTheme()

  return (
    <div className="pb-20">
      <div className="noise-overlay" />
      <ScrollProgress />
      <Navbar sections={dashboardData.sections} />
      <main className="mt-8">
        <HeroSection meta={dashboardData.meta} kpis={dashboardData.kpis} />
        <InsightsSection insights={dashboardData.insights} />
        <DataNumbersSection charts={dashboardData.charts} rows={dashboardData.metricsTable} />
        <ArchitectureSection />
        <RisksSection risks={dashboardData.risks} />
        <HiddenSignalsSection hiddenSignals={dashboardData.hiddenSignals} />
        <VerdictSection verdict={dashboardData.verdict} />
      </main>
      <MobileNav sections={dashboardData.sections} />
      <BackToTop />
    </div>
  )
}

function ManualRoutePage() {
  useTheme()

  return (
    <>
      <Navbar sections={[]} />
      <ManualPage steps={dashboardData.manualSteps} />
      <MobileNav sections={[]} />
    </>
  )
}

function ContactRoutePage() {
  useTheme()

  return (
    <>
      <Navbar sections={[]} />
      <ContactPage />
      <MobileNav sections={[]} />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/manual" element={<ManualRoutePage />} />
        <Route path="/contact" element={<ContactRoutePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
