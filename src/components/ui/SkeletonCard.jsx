export default function SkeletonCard() {
  return (
    <div className="card-surface animate-pulse rounded-2xl p-6">
      <div className="h-4 w-24 rounded bg-border-default" />
      <div className="mt-4 h-8 w-32 rounded bg-border-default" />
      <div className="mt-3 h-3 w-full rounded bg-border-subtle" />
      <div className="mt-2 h-3 w-4/5 rounded bg-border-subtle" />
    </div>
  )
}
