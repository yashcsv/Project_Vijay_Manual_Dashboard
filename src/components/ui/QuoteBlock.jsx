export default function QuoteBlock({ quote, source }) {
  return (
    <blockquote className="card-surface rounded-2xl border-l-4 border-l-accent-primary p-6 italic text-text-secondary shadow-skinMd">
      <p className="text-h3 font-semibold leading-tight text-text-primary">{quote}</p>
      <footer className="mt-3 text-small not-italic text-text-muted">{source}</footer>
    </blockquote>
  )
}
