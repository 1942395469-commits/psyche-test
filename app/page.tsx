'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#0b0b0f',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1>🧠 互联网人格测试</h1>

      <p style={{ opacity: 0.6 }}>
        测测你是哪种逃逸型互联网生物
      </p>

      <button
        onClick={() => router.push('/quiz')}
        style={{
          marginTop: 20,
          padding: '12px 20px',
          borderRadius: 10,
          background: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        开始测试
      </button>
    </main>
  )
}