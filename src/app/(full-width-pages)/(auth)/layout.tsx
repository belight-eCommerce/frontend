"use client";
import PublicFooter from "@/components/footer/PublicFooter";
import PublicHeader from "@/components/header/PublicHeader";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryProvider } from "@/providers/QueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <QueryProvider>
          <PublicHeader />
          {children}
          <PublicFooter />
        </QueryProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
