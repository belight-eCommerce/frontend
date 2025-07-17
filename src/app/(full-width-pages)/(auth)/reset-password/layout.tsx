// src/app/(full-width-pages)/(auth)/reset-password/layout.tsx

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      {children}
    </div>
  );
}
