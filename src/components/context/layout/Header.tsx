import Link from 'next/link'

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '会社概要' },
    { href: '/services', label: 'サービス' },
    { href: '/contact', label: 'お問い合わせ' }
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">サンプル株式会社</h1>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${currentPage === item.href
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
} 