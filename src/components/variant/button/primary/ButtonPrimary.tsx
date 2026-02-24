import { Button } from '@/components/element/button/Button'

interface ButtonPrimaryProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ButtonPrimary({ children, href, onClick, size = 'md', className = '' }: ButtonPrimaryProps) {
  return (
    <Button
      variant="primary"
      size={size}
      href={href}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  )
} 