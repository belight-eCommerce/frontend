"use client";

import withAuth from "@/components/auth/withAuth";
import { useSidebar } from "@/context/SidebarContext";
import AppFooter from "@/layout/AppFooter";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import { QueryProvider } from "@/providers/QueryProvider";
import React from "react";

export default function AdminPrivateLayout({ children }: {
    children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <QueryProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Backdrop (position it absolutely if it's an overlay) */}
        <Backdrop />

        {/* Main Content Area */}
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />

          {/* Page Content */}
          <div className="p-4 flex-1 md:p-6">
            {children}
          </div>

          {/* Footer */}
          <AppFooter />
        </div>
      </div>
    </QueryProvider>
  );
}

export default withAuth(AdminLayout);