'use client';

import React from 'react';
import Image from 'next/image';
import '@/app/styles/cards.css';

const cards = [
  {
    img: '/assest/img1.png',
    title: 'name',
    desc: 'content',
  },
];

export function CardGallery() {
  return (
    <div className="container">
      {cards.map(({ img, title, desc }) => (
        <div className="card" key={title}>
          <div className="img-box">
            <Image src={img} alt={title} fill style={{ objectFit: 'cover', borderRadius: '15px' }} />
          </div>
          <p>{desc}</p>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
}
