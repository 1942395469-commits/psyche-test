'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Score = {
  mouse: number
  ghost: number
  dog: number
  cactus: number
}

const questions = [
  {
    q: "周一早上你的状态？",
    options: [
      { text: "再睡5分钟", score: { mouse: 2 } },
      { text: "精神抽离", score: { ghost: 2 } },
      { text: "焦虑启动", score: { dog: 2 } },
      { text: "开始计划人生", score: { cactus: 2 } }
    ]
  },
  {
    q: "面对任务你通常？",
    options: [
      { text: "拖延到最后", score: { mouse: 2 } },
      { text: "假装没看到", score: { ghost: 2 } },
      { text: "焦虑 + 拖延", score: { dog: 2 } },
      { text: "列清单但不做", score: { cactus: 2 } }
    ]
  },
  {
    q: "深夜状态？",
    options: [
      { text: "刷手机停不下", score: { mouse: 2 } },
      { text: "思考人生意义", score: { ghost: 2 } },
      { text: "后悔今天所有选择", score: { dog: 2 } },
      { text: "假装明天会改变", score: { cactus: 2 } }
    ]
  },
  {
    q: "别人找你聊天？",
    options: [
      { text: "已读不回", score: { mouse: 2 } },
      { text: "精神离线", score: { ghost: 2 } },
      { text: "紧张回复", score: { dog: 2 } },
      { text: "礼貌但冷淡", score: { cactus: 2 } }
    ]
  },
  {
    q: "面对压力？",
    options: [
      { text: "逃避现实", score: { mouse: 2 } },
      { text: "抽离状态", score: { ghost: 2 } },
      { text: "焦虑循环", score: { dog: 2 } },
      { text: "强行控制情绪", score: { cactus: 2 } }
    ]
  },
  {
    q: "周末你通常？",
    options: [
      { text: "躺平刷剧", score: { mouse: 2 } },
      { text: "发呆一天", score: { ghost: 2 } },
      { text: "焦虑补任务", score: { dog: 2 } },
      { text: "假装自律", score: { cactus: 2 } }
    ]
  },
  {
    q: "你对未来的感觉？",
    options: [
      { text: "先活今天", score: { mouse: 2 } },
      { text: "不太真实", score: { ghost: 2 } },
      { text: "有点焦虑", score: { dog: 2 } },
      { text: "有计划但不执行", score: { cactus: 2 } }
    ]
  },
  {
    q: "社交状态？",
    options: [
      { text: "能躲就躲", score: { mouse: 2 } },
      { text: "不在场", score: { ghost: 2 } },
      { text: "紧张参与", score: { dog: 2 } },
      { text: "维持表面正常", score: { cactus: 2 } }
    ]
  },
  {
    q: "你的常见情绪？",
    options: [
      { text: "拖延 + 自责", score: { mouse: 2 } },
      { text: "空白", score: { ghost: 2 } },
      { text: "焦虑内耗", score: { dog: 2 } },
      { text: "稳定压抑", score: { cactus: 2 } }
    ]
  },
  {
    q: "你对自己的评价？",
    options: [
      { text: "我需要逃一下", score: { mouse: 2 } },
      { text: "我不太真实", score: { ghost: 2 } },
      { text: "我有点焦虑过头", score: { dog: 2 } },
      { text: "我还在控制中", score: { cactus: 2 } }
    ]
  }
]

export default function Quiz() {
  const router = useRouter()

  const [index, setIndex] = useState(0)

  const [score, setScore] = useState<Score>({
    mouse: 0,
    ghost: 0,
    dog: 0,
    cactus: 0
  })

  function handleSelect(option: any) {
    const newScore: Score = { ...score }

    Object.keys(option.score).forEach((key) => {
      const k = key as keyof Score
      newScore[k] += option.score[k]
    })

    setScore(newScore)

    if (index < questions.length - 1) {
      setIndex(index + 1)
    } else {
      const result = computeResult(newScore)

      router.push(
        `/result?data=${encodeURIComponent(JSON.stringify(result))}`
      )
    }
  }

  function computeResult(score: Score) {
    const total = Object.values(score).reduce((a, b) => a + b, 0)

    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1])

    return {
      primary: sorted[0][0],
      secondary: sorted[1][0],
      ratio: {
        primary: Number((sorted[0][1] / total).toFixed(2)),
        secondary: Number((sorted[1][1] / total).toFixed(2))
      }
    }
  }

  const q = questions[index]

  return (
    <main style={{
      height: '100vh',
      background: '#0b0b0f',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      padding: 20
    }}>
      <h2 style={{ textAlign: 'center' }}>{q.q}</h2>

      <div style={{ marginTop: 20 }}>
        {q.options.map((o, i) => (
          <button
            key={i}
            onClick={() => handleSelect(o)}
            style={{
              display: 'block',
              margin: 10,
              padding: 12,
              borderRadius: 10,
              background: '#1a1a1a',
              color: 'white',
              border: '1px solid #333',
              cursor: 'pointer',
              width: 280
            }}
          >
            {o.text}
          </button>
        ))}
      </div>
    </main>
  )
}