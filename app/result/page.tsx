"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  // 🧠 默认分数
  let score = {
    mouse: 0,
    cactus: 0,
    dog: 0,
    ghost: 0
  };

  // 🧠 读取 quiz 传来的数据
  try {
    if (data) {
      score = JSON.parse(decodeURIComponent(data));
    }
  } catch (e) {}

  // 🧠 找最高人格
  const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];

  // 🧠 人格库（你刚升级的毒鸡汤版本）
  const config: any = {
    mouse: {
      name: "低电量逃逸鼠（社交断电型拖延症患者）",
      tag: "#低电量人格 #社交断电用户 #精神低功耗运行",
      desc: "你不是不想参与世界，你是系统默认进入省电模式。",
      toxic: "你以为你在休息，其实你只是长期待机失败。"
    },

    cactus: {
      name: "工位寄生绿萝（表面稳定实际精神空心）",
      tag: "#伪装正常 #工位植物人 #低存在感打工人",
      desc: "你看起来在成长，其实只是没有死透。",
      toxic: "你不是在上班，你是在工位上进行缓慢光合作用。"
    },

    dog: {
      name: "高频焦虑发疯犬（持续后台运行的精神过载设备）",
      tag: "#精神过载 #高压人格 #脑内群聊爆炸",
      desc: "你的大脑同时运行了20个互相冲突的任务。",
      toxic: "你不是焦虑，你是系统负载过高自动报警。"
    },

    ghost: {
      name: "404失联幽灵（已从现实社交系统注销）",
      tag: "#社交失联 #人间低在线 #存在感消失",
      desc: "你不是消失，你只是没有被系统继续渲染。",
      toxic: "你不是被遗忘，你是从现实缓存中被清理了。"
    }
  };

  const r = config[top];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          padding: 24,
          borderRadius: 16,
          border: "1px solid #333",
          textAlign: "center",
          background: "#15151b"
        }}
      >
        {/* 标题 */}
        <div style={{ fontSize: 12, opacity: 0.6 }}>
          你的互联网人格诊断结果
        </div>

        <h1 style={{ marginTop: 12 }}>{r.name}</h1>

        {/* 标签 */}
        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
          {r.tag}
        </div>

        {/* 描述 */}
        <div
          style={{
            marginTop: 18,
            fontSize: 14,
            opacity: 0.9
          }}
        >
          {r.desc}
        </div>

        {/* 毒鸡汤 */}
        <div
          style={{
            marginTop: 16,
            padding: 12,
            background: "#0b0b0f",
            borderRadius: 10,
            fontSize: 13,
            fontStyle: "italic",
            border: "1px solid #2a2a2a"
          }}
        >
          ⚠️ {r.toxic}
        </div>

        {/* 返回按钮 */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            marginTop: 20,
            padding: "10px 16px",
            borderRadius: 10,
            background: "white",
            color: "black",
            border: "none",
            cursor: "pointer"
          }}
        >
          再测一次
        </button>
      </div>
    </main>
  );
}