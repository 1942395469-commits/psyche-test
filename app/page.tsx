"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <main style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b0b0f",
        color: "white",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: 24
      }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>
          互联网精神污染检测中心
        </h1>

        <p style={{ opacity: 0.7, marginBottom: 30 }}>
          测测你是哪种逃逸型互联网生物
        </p>

        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "12px 24px",
            backgroundColor: "white",
            color: "black",
            borderRadius: 10,
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          开始测试
        </button>
      </main>
    );
  }

  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0b0b0f",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: 24
    }}>
      <div>
        <h2 style={{ fontSize: 24 }}>
          第一题还没接入 😈
        </h2>

        <p style={{ opacity: 0.6, marginTop: 10 }}>
          下一步我们就会做：10题人格测试系统
        </p>
      </div>
    </main>
  );
}