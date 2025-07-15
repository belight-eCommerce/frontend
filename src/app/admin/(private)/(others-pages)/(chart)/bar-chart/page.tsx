import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { Metadata } from "next";
import React from "react";

// ✅ Metadata for SEO
export const metadata: Metadata = {
  title: "Next.js Bar Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Bar Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

// ❗ Function components must be PascalCase, so change `page` to `Page`
export default function Page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <ErrorBoundary>
            <BarChartOne />
          </ErrorBoundary>
        </ComponentCard>
      </div>
    </div>
  );
}
