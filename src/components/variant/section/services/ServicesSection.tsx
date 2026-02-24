import { Section } from '@/components/element/section/Section'
import { Heading } from '@/components/element/heading/Heading'
import { ServiceCard } from '@/components/variant/card/service/ServiceCard'
import { ButtonPrimary } from '@/components/variant/button/primary/ButtonPrimary'

interface Service {
  icon: string
  title: string
  description: string
  features: string[]
  color: 'blue' | 'green' | 'purple' | 'orange'
}

interface ServicesSectionProps {
  title: string
  subtitle: string
  services: Service[]
  ctaText: string
  ctaHref: string
}

export function ServicesSection({ title, subtitle, services, ctaText, ctaHref }: ServicesSectionProps) {
  return (
    <Section variant="services">
      <div className="text-center mb-16">
        <Heading level={2} variant="section">
          {title}
        </Heading>
        <p className="text-xl">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            color={service.color}
          />
        ))}
      </div>

      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <Heading level={3} variant="card">
          お問い合わせ
        </Heading>
        <p className="text-xl mb-6">プロジェクトについて詳しくお聞かせください</p>
        <ButtonPrimary href={ctaHref} size="lg">
          {ctaText}
        </ButtonPrimary>
      </div>
    </Section>
  )
} 