'use client'

import { useSearchParams } from 'next/navigation'

function ResultContent() {
  const searchParams = useSearchParams()
  const data = searchParams.get('data')

  return (
    <main style={{ padding: 24 }}>
      <h1>你的测试结果</h1>
      <p>你属于：{data ?? '未知生物'} 🐭</p>
    </main>
  )
}

export default function ResultPage() {
  return <ResultContent />
}