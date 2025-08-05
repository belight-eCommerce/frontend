"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import DataTable from "@/components/tables/DataTable";
import ReviewItem from "@/components/product-reviews/ReviewItem";
import { FaStar } from "react-icons/fa";

const reviews = [
  { product: "Handmade Basket", reviewer: "Sara A.", rating: 4, text: "Beautiful Quality...", date: "2025-07-10", action: "$135", status: "Delivered" },
  { product: "Clay Coffee Mug", reviewer: "Benyam G.", rating: 3, text: "Nice But Arrived Chipped...", date: "2025-07-10", action: "$135", status: "Processing" },
  { product: "Woven Scarf", reviewer: "Yusuf M.", rating: 5, text: "Absolutely Love It!...", date: "2025-07-10", action: "$135", status: "Cancelled" },
  { product: "Leather Wallet", reviewer: "Hanna T.", rating: 4, text: "Beautiful Quality...", date: "2025-07-10", action: "$135", status: "Delivered" },
  { product: "Clay Coffee Mug", reviewer: "Yusuf M.", rating: 4, text: "Absolutely Love It!...", date: "2025-07-10", action: "$135", status: "Processing" },
  { product: "Handmade Basket", reviewer: "Benyam G.", rating: 4, text: "Nice But Arrived Chipped...", date: "2025-07-10", action: "$135", status: "Cancelled" },
  { product: "Woven Scarf", reviewer: "Hanna T.", rating: 5, text: "Beautiful Quality...", date: "2025-07-10", action: "$135", status: "Delivered" },
  { product: "Leather Wallet", reviewer: "Yusuf M.", rating: 4, text: "Nice But Arrived Chipped...", date: "2025-07-10", action: "$135", status: "Processing" },
];

const statusOptions = [
  { value: "All", label: "All" },
  { value: "Processing", label: "Processing" },
  { value: "Delivered", label: "Delivered" },
  { value: "Cancelled", label: "Cancelled" },
];

const filterSchema = z.object({
  status: z.string(),
});

type FilterFormValues = z.infer<typeof filterSchema>;
type Review = typeof reviews[0];

const columns = [
  { id: "product", header: "Product", accessor: "product" as const, headerClassName: "text-black" },
  { id: "reviewer", header: "Reviewer", accessor: "reviewer" as const, headerClassName: "text-black" },
  {
    id: "rating",
    header: "Rating",
    accessor: (row: Review) => (
      <span className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} className={i <= row.rating ? "text-yellow-500" : "text-gray-300"} />
        ))}
      </span>
    ),
    headerClassName: "text-black",
  },
  { id: "text", header: "Review Text", accessor: "text" as const, headerClassName: "text-black" },
  { id: "date", header: "Date", accessor: "date" as const, headerClassName: "text-black" },
  { id: "action", header: "Action", accessor: "action" as const, headerClassName: "text-black" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Orders", value: "orders" },
  { label: "Promotions", value: "promotions" },
  { label: "System", value: "system" },
];

export default function SupplierProductReviewPage() {
  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: { status: "Processing" },
  });
  const [activeTab, setActiveTab] = useState("all");

  const status = form.watch("status");
  const filteredReviews = status === "All" ? reviews : reviews.filter(r => r.status === status);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold font-serif text-gray-800">PRODUCT REVIEWS</h1>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                    activeTab === tab.value ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-500 text-base mb-6">
            Manage customer feedback on your products to build trust and improve quality.
          </p>

          <div className="flex flex-col md:flex-row md:justify-end mb-8 gap-4">
            <Form {...form}>
              <form className="flex w-full md:w-auto items-center gap-2">
                <span className="text-sm text-gray-600 font-medium">Filter by:</span>
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <select
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          {...field}
                        >
                          {statusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>

          <div className="md:hidden space-y-4">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review, index) => (
                <ReviewItem
                  key={index}
                  product={review.product}
                  reviewer={review.reviewer}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                  action={review.action}
                />
              ))
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500">No reviews match the current filter.</p>
              </div>
            )}
          </div>

          <div className="hidden md:block bg-white rounded-2xl shadow-sm w-full overflow-x-auto">
            <DataTable data={filteredReviews} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
} 