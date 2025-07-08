import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maaliifu',
  description: 'Ethiopian E-commerce Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
