"use client";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                {/* The children of this layout will automatically inherit the header and footer from the root layout. */}
                <main className="flex-1 grid">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    )
}