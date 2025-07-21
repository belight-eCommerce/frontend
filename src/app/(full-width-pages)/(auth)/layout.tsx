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
        <div className="min-h-screen w-full items-center justify-center">
          {children}
        </div>
      </QueryProvider>
    </ThemeProvider>
  );
}
