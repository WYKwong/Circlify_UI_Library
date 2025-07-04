'use client';

import React from 'react';
import ThemeToggle from '@/app/components/ThemeToggle';

export default function Page() {
  return (
    <>
      <style jsx>{`
        .main-wrapper {
          min-height: 100vh;
          background: rgb(10, 25, 47);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
      `}</style>

      <div className="main-wrapper">
        <ThemeToggle />
      </div>
    </>
  );
}
