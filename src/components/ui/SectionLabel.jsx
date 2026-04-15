export default function SectionLabel({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-label uppercase tracking-[0.17em] text-text-muted">{children}</span>
      <span className="h-px flex-1 bg-border-default" />
    </div>
  )
}
