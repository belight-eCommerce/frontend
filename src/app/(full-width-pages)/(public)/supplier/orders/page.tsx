"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import DataTable from "@/components/tables/DataTable";
import Link from "next/link";

const orderStatusColors: Record<string, string> = { 
  Delivered: "bg-green-100 text-green-800", 
  Processing: "bg-yellow-100 text-yellow-800", 
  Cancelled: "bg-red-100 text-red-800" 
};

const orders = [ 
  { id: "#ORD-1023", date: "Jul 12, 2025", customer: "Amina Tesfaye", total: "$120.00", status: "Delivered" }, 
  { id: "#ORD-1024", date: "Jul 14, 2025", customer: "John Doe", total: "$85.50", status: "Processing" }, 
  { id: "#ORD-1025", date: "Jul 15, 2025", customer: "Jane Smith", total: "$250.00", status: "Cancelled" }, 
  { id: "#ORD-1026", date: "Jul 16, 2025", customer: "Carlos Rey", total: "$35.75", status: "Delivered" }, 
  { id: "#ORD-1027", date: "Jul 18, 2025", customer: "Amina Tesfaye", total: "$199.99", status: "Delivered" }, 
  { id: "#ORD-1028", date: "Jul 20, 2025", customer: "Kenji Tanaka", total: "$50.00", status: "Processing" } 
];

const statusOptions = [ 
  { value: "All", label: "All" }, 
  { value: "Delivered", label: "Delivered" }, 
  { value: "Processing", label: "Processing" }, 
  { value: "Cancelled", label: "Cancelled" } 
];

const filterSchema = z.object({ status: z.string() });
type FilterFormValues = z.infer<typeof filterSchema>;
type Order = typeof orders[0];

const columns = [
  { id: "id", header: "Order ID", accessor: "id" as const },
  { id: "date", header: "Date", accessor: "date" as const },
  { id: "customer", header: "Customer", accessor: "customer" as const },
  { id: "total", header: "Total", accessor: "total" as const, cellClassName: "font-medium" },
  { 
    id: "status", 
    header: "Status", 
    accessor: (row: Order) => (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${orderStatusColors[row.status]}`}>
        {row.status}
      </span>
    ) 
  },
  { 
    id: "actions", 
    header: "Actions", 
    accessor: (row: Order) => (
      <Link href={`/supplier/orders/${row.id.replace("#", "")}`} className="text-blue-700 hover:underline text-sm font-medium">
        View Detail
      </Link>
    ) 
  },
];

export default function SupplierOrdersPage() {
  const form = useForm<FilterFormValues>({ 
    resolver: zodResolver(filterSchema), 
    defaultValues: { status: "All" } 
  });
  
  const status = form.watch("status");
  const filteredOrders = status === "All" ? orders : orders.filter(o => o.status === status);

  return (
    <div className="min-h-[80vh] bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold font-serif text-gray-800 mb-1">ORDER LIST</h1>
            <p className="text-gray-500 text-base">View and manage incoming orders.</p>
          </div>
          <Form {...form}>
            <form className="flex items-center gap-2 self-start md:self-center">
              <span className="text-sm text-gray-600 font-medium hidden sm:inline">Sorting & Filters:</span>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" {...field}>
                        {statusOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm w-full overflow-x-auto">
          <DataTable data={filteredOrders} columns={columns} />
        </div>
      </div>
    </div>
  );
} 