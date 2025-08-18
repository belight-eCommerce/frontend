"use client";

import React from "react";
import OrderCard from "@/components/orders/OrderCard";

export default function SupplierOrderDetailsPage() {
  return (
    <div className="min-h-[80vh] bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-serif font-semibold mb-8">ORDER DETAILS</h1>
        <div className="flex justify-center">
          <OrderCard />
        </div>
      </div>
    </div>
  );
} 