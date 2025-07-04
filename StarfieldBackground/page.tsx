'use client';

import React from 'react';
import { StarfieldBackground } from '@/components/StarfieldBackground';

import '@/app/styles/site.css';
import '@/app/styles/primer.css';
import '@/app/styles/signup.css';

export default function page() {
  return (
    <>
      <style>{`
        .main-wrapper {
          position: relative;
          min-height: 100vh;
          color: white;
          overflow: hidden;
        }
      `}</style>

      <main className="main-wrapper">
        <StarfieldBackground />

        {/* content */}
      </main>
    </>
  );
}