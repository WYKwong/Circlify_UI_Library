'use client';

import React from 'react';
import '@/app/styles/style.css'; // 保留原样式
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入 FontAwesome 图标库

export default function Page() {
  return (
    <div className="wrapper">
      <div className="button">
        <div className="icon"><i className="fab fa-facebook-f" /></div>
        <span>Facebook</span>
      </div>

      <div className="button">
        <div className="icon"><i className="fab fa-qq" /></div>
        <span>QQ</span>
      </div>

      <div className="button">
        <div className="icon"><i className="fab fa-instagram" /></div>
        <span>Instagram</span>
      </div>

      <div className="button">
        <div className="icon"><i className="fab fa-github" /></div>
        <span>Github</span>
      </div>

      <div className="button">
        <div className="icon"><i className="fab fa-youtube" /></div>
        <span>Youtube</span>
      </div>
    </div>
  );
}
