// src/app/payout-settings/layout.tsx
'use client';

import React from 'react';

export default function PayoutSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Removed background color from layout, the page.tsx will handle its own background.
    // flex-grow ensures this layout expands to fill available space within the global <main>
    <div className="flex-grow">
      {children}
    </div>
  );
}