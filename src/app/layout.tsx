// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// CORRECTED PATHS:
// PublicHeader component is in src/components/header/PublicHeader.tsx
import PublicHeader from '../components/header/PublicHeader';

// PublicFooter component is in src/components/footer/PublicFooter.tsx
import PublicFooter from '../components/header/PublicFooter';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maaliifu Application',
  description: 'E-commerce Platform for Maaliifu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-100 text-gray-900`}>

        {/* Render the existing PublicHeader component */}
        <PublicHeader />

        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Render the existing PublicFooter component */}
        <PublicFooter />

      </body>
    </html>
  );
}