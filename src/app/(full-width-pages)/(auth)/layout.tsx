"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryProvider } from "@/providers/QueryProvider";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 p-4">
          {children}
        </div>
      </QueryProvider>
    </ThemeProvider>
  );
}
