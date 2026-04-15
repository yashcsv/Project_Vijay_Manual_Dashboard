export default function EmptyState({ title, description }) {
  return (
    <div className="card-surface rounded-2xl p-6 text-text-secondary">
      <h3 className="text-h3 font-semibold">{title}</h3>
      <p className="mt-2 text-body">{description}</p>
    </div>
  )
}
