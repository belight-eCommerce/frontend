import React from 'react';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { Toaster } from 'sonner';

export default function AdminPrivateLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <ReduxProvider>
                <SidebarProvider>{children}</SidebarProvider>
            </ReduxProvider>
            <Toaster position="top-right" />
        </ThemeProvider>
    )
}