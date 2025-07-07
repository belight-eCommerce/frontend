import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Support",
  description: "This is Support Page",
};

export default function Support() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Support" />
    </div>
  );
}
