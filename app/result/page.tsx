'use client'

import { useSearchParams } from 'next/navigation'

const map: any = {
  mouse: { name: "逃逸鼠 🐭", desc: "拖延型" },
  ghost: { name: "幽灵 👻", desc: "抽离型" },
  dog: { name: "焦虑狗 🐶", desc: "内耗型" },
  cactus: { name: "仙人掌 🌵", desc: "控制型" }
}

export default function ResultPage() {
  const params = useSearchParams()
  const raw = params.get('data')

  if (!raw) {
    return <div style={{ color: 'white' }}>没有数据</div>
  }

  const result = JSON.parse(decodeURIComponent(raw))

  const primary = map[result.primary]
  const secondary = map[result.secondary]

  return (
    <main style={{ padding: 24, color: 'white', background: '#0b0b0f', minHeight: '100vh' }}>
      <h1>🧠 人格结果</h1>

      <h2>主：{primary.name}</h2>
      <p>{primary.desc}</p>

      <h3>副：{secondary.name}</h3>
      <p>{secondary.desc}</p>

      <p>主占比：{result.ratio.primary * 100}%</p>
      <p>副占比：{result.ratio.secondary * 100}%</p>

      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          alert('已复制')
        }}
      >
        分享
      </button>
    </main>
  )
}