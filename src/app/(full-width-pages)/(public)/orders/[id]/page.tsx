"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button/Button";


const order = {
  id: "10231",
  customer: "Helen Tesfaye",
  address: "Bole, Addis Ababa",
  items: [
    { name: "Handmade Basket", qty: 2, price: 50 },
    { name: "Ethiopian Shawl", qty: 1, price: 30 },
  ],
  total: 80,
  tracking: "AB123456ET",
};

const trackingSchema = z.object({
  tracking: z.string().min(3, "Tracking number required"),
});

type TrackingFormValues = z.infer<typeof trackingSchema>;

function OrderCard() {
  const form = useForm<TrackingFormValues>({
    resolver: zodResolver(trackingSchema),
    defaultValues: { tracking: order.tracking },
  });

  const onSubmit = (data: TrackingFormValues) => {
    alert("Tracking submitted: " + data.tracking);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6 w-full max-w-3xl min-w-[300px]">
      <div>
        <div className="mb-1 text-gray-700">Order ID: <span className="font-semibold">{order.id}</span></div>
        <div className="mb-1 text-gray-700">Customer: <span className="font-semibold">{order.customer}</span></div>
        <div className="mb-3 text-gray-700">Address: <span className="font-medium">{order.address}</span></div>
        <div className="border rounded-lg p-4 mb-4">
          <div className="text-lg font-semibold text-blue-700 mb-2">Items Ordered</div>
          {order.items.map((item) => (
            <div key={item.name} className="flex justify-between items-center text-gray-700 mb-1">
              <span>{item.name} ×{item.qty}</span>
              <span className="font-medium text-gray-700">${item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-2 pt-2 border-t">
            <span className="font-semibold text-blue-700">Total:</span>
            <span className="font-bold text-lg text-black">USD ${order.total.toFixed(2)}</span>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="tracking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tracking number" className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 flex flex-col items-center py-6 px-2 text-center mb-2">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-blue-500"><path d="M12 16v-8m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16.5V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <label className="block cursor-pointer">
                <input type="file" multiple className="hidden" />
                <span className="font-semibold text-blue-900">Click To Upload Upload Invoice Or Drag & Drop File</span>
                <div className="text-xs text-gray-500 mt-1">Upload Upto 02 Files At Once</div>
              </label>
            </div>
            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-full py-3 text-base font-semibold">MARK AS SHIPPED</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default function OrderDetailsPage() {
  
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