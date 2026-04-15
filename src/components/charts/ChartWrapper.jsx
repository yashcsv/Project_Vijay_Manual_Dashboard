export default function ChartWrapper({ title, sourceNote, children }) {
  return (
    <section className="card-surface rounded-2xl p-5">
      <h3 className="text-h3 font-semibold text-text-primary">{title}</h3>
      <div className="mt-4 h-[320px]">{children}</div>
      <p className="mt-3 text-small text-text-muted">Source: {sourceNote}</p>
    </section>
  )
}
