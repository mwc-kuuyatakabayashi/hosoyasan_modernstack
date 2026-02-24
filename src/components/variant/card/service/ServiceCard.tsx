import { Card } from '@/components/element/card/Card'
import { Heading } from '@/components/element/heading/Heading'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  color: 'blue' | 'green' | 'purple' | 'orange'
}

export function ServiceCard({ icon, title, description, features, color }: ServiceCardProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  }

  return (
    <Card variant="service">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-lg flex items-center justify-center mb-6`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <Heading level={3} variant="card">
        {title}
      </Heading>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </Card>
  )
} 