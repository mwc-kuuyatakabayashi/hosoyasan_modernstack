import { Card } from '@/components/element/card/Card'
import { Heading } from '@/components/element/heading/Heading'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color: 'blue' | 'green' | 'purple'
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600'
  }

  return (
    <Card variant="feature">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
        <span className="text-xl">{icon}</span>
      </div>
      <Heading level={4} variant="card">
        {title}
      </Heading>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
} 