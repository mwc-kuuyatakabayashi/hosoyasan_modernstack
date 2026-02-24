interface SectionProps {
  children: React.ReactNode
  variant?: 'default' | 'hero' | 'features' | 'services' | 'cta'
  className?: string
}

export function Section({ children, variant = 'default', className = '' }: SectionProps) {
  const baseClasses = 'py-16'

  const variantClasses = {
    default: '',
    hero: 'bg-blue-600 text-white py-20',
    features: '',
    services: '',
    cta: 'bg-blue-600 text-white'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <section className={classes}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
} 