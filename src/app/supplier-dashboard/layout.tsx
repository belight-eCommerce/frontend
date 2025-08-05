// src/app/supplier-dashboard/layout.tsx
'use client';

import React from 'react';

export default function SupplierDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // REMOVED: bg-[#1e2025] from here.
    // The main dashboard background will now be set in page.tsx
    <div className="min-h-screen flex flex-col text-white">
      {children}
    </div>
  );
}