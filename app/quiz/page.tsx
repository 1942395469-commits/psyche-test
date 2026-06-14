"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    q: "周一早上你醒来的第一反应是？",
    options: [
      { text: "再睡5分钟改变人生", score: { mouse: 2 } },
      { text: "灵魂还没加载完成", score: { ghost: 2 } },
      { text: "开始计算今天能不能请假", score: { cactus: 2 } },
      { text: "已经开始焦虑今天所有可能出错的事", score: { dog: 2 } }
    ]
  },
  {
    q: "工作群突然@全体，你的第一反应是？",
    options: [
      { text: "心跳加速但假装没看见", score: { mouse: 2 } },
      { text: "精神抽离现场", score: { ghost: 2 } },
      { text: "开始回忆自己有没有做错事", score: { dog: 2 } },
      { text: "默默打开离职计算器", score: { cactus: 2 } }
    ]
  },
  {
    q: "你最常见的深夜状态是？",
    options: [
      { text: "刷手机刷到意识模糊", score: { mouse: 2 } },
      { text: "突然对人生进行哲学审判", score: { ghost: 2 } },
      { text: "后悔白天所有选择", score: { dog: 2 } },
      { text: "假装自己明天会早起改变人生", score: { cactus: 2 } }
    ]
  },
  {
    q: "面对待办事项，你通常？",
    options: [
      { text: "先拖到不能再拖", score: { mouse: 2 } },
      { text: "假装任务不存在", score: { ghost: 2 } },
      { text: "一边焦虑一边拖延", score: { dog: 2 } },
      { text: "做一个“假装很忙”的计划表", score: { cactus: 2 } }
    ]
  },
  {
    q: "你对消息未读红点的态度是？",
    options: [
      { text: "越积越多越安心", score: { mouse: 2 } },
      { text: "直接忽略现实", score: { ghost: 2 } },
      { text: "会心跳加速但不点开", score: { dog: 2 } },
      { text: "强迫症式清零", score: { cactus: 2 } }
    ]
  },
  {
    q: "周末的你更接近？",
    options: [
      { text: "人类节能模式", score: { mouse: 2 } },
      { text: "人间失联状态", score: { ghost: 2 } },
      { text: "精神恢复失败", score: { dog: 2 } },
      { text: "伪装正常生活的人", score: { cactus: 2 } }
    ]
  },
  {
    q: "你面对压力时的典型反应？",
    options: [
      { text: "逃避但假装处理了", score: { mouse: 2 } },
      { text: "意识离线", score: { ghost: 2 } },
      { text: "焦虑循环播放", score: { dog: 2 } },
      { text: "强行压扁情绪继续运转", score: { cactus: 2 } }
    ]
  },
  {
    q: "别人说你“看起来还好”的时候你？",
    options: [
      { text: "点头但内心在逃跑", score: { mouse: 2 } },
      { text: "已经不在现场了", score: { ghost: 2 } },
      { text: "开始怀疑人生表达能力", score: { dog: 2 } },
      { text: "继续维持表面正常", score: { cactus: 2 } }
    ]
  },
  {
    q: "你最常见的“自我欺骗”是？",
    options: [
      { text: "明天一定开始努力", score: { mouse: 2 } },
      { text: "我其实没问题", score: { ghost: 2 } },
      { text: "焦虑会推动我进步", score: { dog: 2 } },
      { text: "我只是暂时没状态", score: { cactus: 2 } }
    ]
  },
  {
    q: "你对“人生规划”的真实态度？",
    options: [
      { text: "先活过今天再说", score: { mouse: 2 } },
      { text: "已经退出系统思考", score: { ghost: 2 } },
      { text: "规划=焦虑来源", score: { dog: 2 } },
      { text: "有规划但从未执行", score: { cactus: 2 } }
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState<any>({
    mouse: 0,
    cactus: 0,
    dog: 0,
    ghost: 0
  });

  const current = questions[index];

  function handleSelect(option: any) {
    const newScore = { ...score };

    Object.keys(option.score).forEach((key) => {
      newScore[key] = (newScore[key] || 0) + option.score[key];
    });

    setScore(newScore);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const result = encodeURIComponent(JSON.stringify(newScore));
      router.push(`/result?data=${result}`);
    }
  }

  return (
    <main style={{
      height: "100vh",
      backgroundColor: "#0b0b0f",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ marginBottom: 20 }}>
        {current.q}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt)}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #333",
              backgroundColor: "#1a1a1a",
              color: "white",
              cursor: "pointer"
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </main>
  );
}