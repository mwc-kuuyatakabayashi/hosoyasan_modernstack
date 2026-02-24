import { Section } from '@/components/element/section/Section'
import { Heading } from '@/components/element/heading/Heading'
import { FeatureCard } from '@/components/variant/card/feature/FeatureCard'

interface Feature {
  icon: string
  title: string
  description: string
  color: 'blue' | 'green' | 'purple'
}

interface FeaturesSectionProps {
  title: string
  features: Feature[]
}

export function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <Section variant="features">
      <Heading level={3} variant="section">
        {title}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
          />
        ))}
      </div>
    </Section>
  )
} 