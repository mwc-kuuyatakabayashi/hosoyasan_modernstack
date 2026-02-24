interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'default' | 'hero' | 'section' | 'card'
  className?: string
}

export function Heading({ children, level = 2, variant = 'default', className = '' }: HeadingProps) {
  const baseClasses = 'font-bold'

  const levelClasses = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base'
  }

  const variantClasses = {
    default: '',
    hero: 'text-center mb-4',
    section: 'text-center mb-12',
    card: 'mb-4'
  }

  const classes = `${baseClasses} ${levelClasses[level]} ${variantClasses[variant]} ${className}`

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return <Tag className={classes}>{children}</Tag>
} 