'use client'

import { useSearchParams } from 'next/navigation'

const map: any = {
  mouse: { name: "逃逸鼠 🐭", desc: "拖延 + 逃避型人格" },
  ghost: { name: "缓冲幽灵 👻", desc: "抽离现实型人格" },
  dog: { name: "焦虑狗 🐶", desc: "内耗焦虑型人格" },
  cactus: { name: "防御仙人掌 🌵", desc: "控制压抑型人格" }
}

export default function ResultClient() {
  const params = useSearchParams()
  const raw = params.get('data')

  if (!raw) {
    return (
      <div style={{ color: 'white', padding: 24 }}>
        没有数据，请重新测试
      </div>
    )
  }

  const result = JSON.parse(decodeURIComponent(raw))

  const primary = map[result.primary]
  const secondary = map[result.secondary]

  return (
    <main style={{
      minHeight: '100vh',
      background: '#0b0b0f',
      color: 'white',
      padding: 24,
      fontFamily: 'sans-serif'
    }}>
      <h1>🧠 你的互联网人格结果</h1>

      <div style={{ marginTop: 20 }}>
        <h2>主人格：{primary.name}</h2>
        <p>{primary.desc}</p>
      </div>

      <div style={{ marginTop: 20, opacity: 0.8 }}>
        <h3>副人格：{secondary.name}</h3>
        <p>{secondary.desc}</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <p>主占比：{result.ratio.primary * 100}%</p>
        <p>副占比：{result.ratio.secondary * 100}%</p>
      </div>

      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          alert('已复制分享链接')
        }}
        style={{
          marginTop: 20,
          padding: '10px 16px',
          borderRadius: 8,
          background: 'white',
          color: 'black',
          cursor: 'pointer'
        }}
      >
        分享结果
      </button>
    </main>
  )
}