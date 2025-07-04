// src/app/components/StarfieldBackground.tsx
'use client';

import React, { useMemo } from 'react';

export function StarfieldBackground() {
  const starLayers = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="signup-stars absolute inset-0" />
      )),
    []
  );

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#0a192f]" />
      <div className="signup-space w-full h-full relative pointer-events-none">
        {starLayers}
      </div>
    </div>
  );
}
