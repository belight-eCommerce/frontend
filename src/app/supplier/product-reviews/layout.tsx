// src/app/product-analysis/layout.tsx
'use client';

import React from 'react';

export default function ProductAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This div applies the product analysis page's specific light background to its content area.
    <div className="flex-grow bg-white text-gray-800 py-4 md:py-6 lg:py-8">
      {children}
    </div>
  );
}