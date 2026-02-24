import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  )
} 