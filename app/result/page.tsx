'use client'

import { useSearchParams } from 'next/navigation'

const map: any = {
  mouse: {
    name: "逃逸鼠 🐭",
    desc: "高延迟执行 + 逃避型人格"
  },
  ghost: {
    name: "缓冲幽灵 👻",
    desc: "思考过载 + 行动冻结"
  },
  dog: {
    name: "焦虑狗 🐶",
    desc: "情绪驱动 + 内耗型人格"
  },
  cactus: {
    name: "防御仙人掌 🌵",
    desc: "稳定压抑 + 控制型人格"
  }
}

export default function Result() {
  const params = useSearchParams()
  const raw = params.get('data')

  if (!raw) {
    return <div style={{ padding: 24 }}>没有结果</div>
  }

  const result = JSON.parse(decodeURIComponent(raw))

  const primary = map[result.primary]
  const secondary = map[result.secondary]

  return (
    <main style={{
      minHeight: '100vh',
      background: '#0b0b0f',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: 24
    }}>
      <h1>🧠 你的互联网人格</h1>

      <div style={{ marginTop: 20 }}>
        <h2>主人格：{primary.name}</h2>
        <p>{primary.desc}</p>
        <p>占比 {result.ratio.primary * 100}%</p>
      </div>

      <div style={{ marginTop: 20, opacity: 0.8 }}>
        <h3>副人格：{secondary.name}</h3>
        <p>{secondary.desc}</p>
        <p>影响 {result.ratio.secondary * 100}%</p>
      </div>

      <div style={{
        marginTop: 30,
        padding: 16,
        background: '#1a1a1a',
        borderRadius: 10
      }}>
        💬 结论：你不是单一人格，而是混合逃逸系统
      </div>

      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          alert('已复制分享链接')
        }}
        style={{
          marginTop: 20,
          padding: '10px 16px',
          borderRadius: 10,
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