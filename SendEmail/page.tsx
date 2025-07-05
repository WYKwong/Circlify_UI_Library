// src/app/page.tsx
'use client';

import React from 'react';
import '@/app/styles/style.css';  // ← 样式文件导入（确保路径正确）

export default function Page() {
  return (
    <div className="main-wrapper">
      <div id="wrap">
        <h1>SEND A MESSAGE</h1>
        <div id="form-wrap">
          <form>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" id="message" defaultValue="Your Message" />
            
            <p>BEST,</p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />

            <input type="submit" name="submit" value="NOW, I SEND THANKS!" />
          </form>
        </div>
      </div>
    </div>
  );
}
