'use client'

import { useSearchParams } from 'next/navigation'

export default function ResultClient() {
  const searchParams = useSearchParams()

  const data = searchParams.get('data')

  return (
    <main style={{ padding: 24 }}>
      <h1>你的测试结果</h1>
      <p>原始数据：{data}</p>
    </main>
  )
}