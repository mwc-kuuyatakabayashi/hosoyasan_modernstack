import type { Metadata } from 'next'
import { Noto_Sans_JP, Hind, Crimson_Text } from 'next/font/google'
import '@/styles/globals.scss'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const hind = Hind({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-hind', // CSS変数の名前を定義
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, SemiBold, Bold
  variable: '--font-crimson-text',
})

export const metadata: Metadata = {
  title: {
    template: '%s | サンプル株式会社',
    default: 'サンプル株式会社',
  },
  description: '革新的なソリューションで、お客様のビジネスをサポートします',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${hind.variable} ${notoSansJP.variable} ${crimsonText.variable}`}>{children}</body>
    </html>
  )
} 