'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-600 mb-6">
          申し訳ございませんが、予期しないエラーが発生しました。
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            再試行
          </button>
          <a
            href="/"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 inline-block"
          >
            ホームに戻る
          </a>
        </div>
      </div>
    </div>
  )
} 