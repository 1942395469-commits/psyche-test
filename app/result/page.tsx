'use client'

import { useSearchParams } from 'next/navigation'

export default function ResultPage() {
  const searchParams = useSearchParams()
  const data = searchParams.get('data')

  const result = data ? JSON.parse(decodeURIComponent(data)) : null

  return (
    <main style={{ padding: 24, color: 'white', background: '#0b0b0f', minHeight: '100vh' }}>
      <h1>🧠 你的互联网人格结果</h1>

      {result ? (
        <div style={{ marginTop: 20 }}>
          <p>主人格：{result.primary}</p>
          <p>副人格：{result.secondary}</p>
          <p>占比：{result.ratio?.primary}</p>
        </div>
      ) : (
        <p>没有数据</p>
      )}
    </main>
  )
}