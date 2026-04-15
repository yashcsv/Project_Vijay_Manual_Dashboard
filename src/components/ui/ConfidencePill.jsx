import Badge from './Badge'

export default function ConfidencePill({ level }) {
  const tone = level === 'high' ? 'positive' : level === 'medium' ? 'warning' : 'negative'
  return <Badge tone={tone}>Confidence: {level}</Badge>
}
