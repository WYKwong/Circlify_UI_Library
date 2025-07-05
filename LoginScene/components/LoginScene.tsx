'use client';

import React, { useEffect, useState } from 'react';
import '../styles/LoginScene.css';

/* ---------- 前 3 个光晕的配置 ---------- */
const HALOS = [
  {
    baseW: 600,
    baseH: 600,
    wMult: 4,
    hMult: 3.5,
    style: { top: -350, background: '#ff359b' } as const,
  },
  {
    baseW: 500,
    baseH: 500,
    wMult: 3.5,
    hMult: 2,
    style: { bottom: -150, left: 100, background: '#fffd87' } as const,
  },
  {
    baseW: 500,
    baseH: 500,
    wMult: 2.5,
    hMult: 1.5,
    style: { bottom: 50, right: 100, background: '#00d2ff' } as const,
  },
];

/* ---------- 按倍率缩放 ---------- */
const scaleLen = (base: number, ratio: number, mult: number) =>
  base * (1 + (ratio - 1) * (mult - 1));

export default function LoginScene() {
  const [sizes, setSizes] = useState(
    HALOS.map(({ baseW, baseH }) => ({ w: baseW, h: baseH })),
  );

  /* 窗口变化时动态调整光晕大小 */
  useEffect(() => {
    const update = () => {
      const wRatio = Math.max(1, window.innerWidth / 1920);
      const hRatio = Math.max(1, window.innerHeight / 1080);
      setSizes(
        HALOS.map(({ baseW, baseH, wMult, hMult }) => ({
          w: scaleLen(baseW, wRatio, wMult),
          h: scaleLen(baseH, hRatio, hMult),
        })),
      );
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className="login-scene">
      {/* 光晕 */}
      {HALOS.map(({ style }, i) => (
        <div
          key={i}
          className="color"
          style={{ ...style, width: sizes[i].w, height: sizes[i].h }}
        />
      ))}

      {/* 方块 + 登录框 */}
      <div className="login-box">
        {/* 5 个浮动方块 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`square square-${i + 1}`}
            style={{ animationDelay: `${-i}s` }}
          />
        ))}

        {/* 登录表单 */}
        <div className="login-container">
          <div className="login-form">
            <h2>Login Form</h2>
            <form>
              <div className="inputBox">
                <input type="text" placeholder="Username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" />
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
              <p className="forget">
                Forget Password ? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Do not have an account ? <a href="#">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
