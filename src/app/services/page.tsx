import { PageLayout } from '@/components/context/layout/PageLayout'
import { ServicesSection } from '@/components/variant/section/services/ServicesSection'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web開発',
      description: '最新技術を活用した高品質なWebサイト・Webアプリケーションの開発を行います。レスポンシブデザイン、SEO対策、セキュリティ対策まで包括的にサポートします。',
      features: [
        '企業サイト制作',
        'ECサイト構築',
        'Webアプリケーション開発',
        'システム保守・運用'
      ],
      color: 'blue' as const
    },
    {
      icon: '📱',
      title: 'モバイルアプリ開発',
      description: 'iOS・Android両対応のネイティブアプリから、クロスプラットフォームアプリまで、お客様のニーズに最適なモバイルソリューションを提供します。',
      features: [
        'iOSアプリ開発',
        'Androidアプリ開発',
        'クロスプラットフォーム開発',
        'アプリストア対応'
      ],
      color: 'green' as const
    },
    {
      icon: '☁️',
      title: 'クラウドソリューション',
      description: 'AWS、Azure、GCPなどのクラウドプラットフォームを活用したスケーラブルで安全なインフラストラクチャを構築します。',
      features: [
        'クラウドインフラ設計',
        'マイクロサービス構築',
        'データベース設計・構築',
        'セキュリティ対策'
      ],
      color: 'purple' as const
    },
    {
      icon: '🎯',
      title: 'デジタルマーケティング',
      description: 'データドリブンなアプローチで、効果的なデジタルマーケティング戦略を立案・実行します。お客様のビジネス成長を加速させます。',
      features: [
        'SEO・SEM対策',
        'SNSマーケティング',
        'コンテンツマーケティング',
        'データ分析・レポート'
      ],
      color: 'orange' as const
    }
  ]

  return (
    <PageLayout currentPage="/services">
      <ServicesSection
        title="サービス"
        subtitle="お客様のビジネスをサポートする包括的なソリューション"
        services={services}
        ctaText="無料相談を申し込む"
        ctaHref="/contact"
      />
    </PageLayout>
  )
} 