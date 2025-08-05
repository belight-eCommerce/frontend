// src/app/supplier-dashboard/page.tsx
'use client';

import React from 'react';
// FiSearch, FiShoppingCart, FiUser imports are commented out as they were for the removed header
// import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'; 

export default function SupplierDashboardPage() {
  // Dummy data for Dashboard Overview Cards
  const overviewData = [
    { value: '02', label: 'Total Orders' },
    { value: '8', label: 'Total Sales' },
    { value: '1', label: 'Net Profit' },
    { value: '0', label: 'Pending Orders' },
    { value: '02', label: 'Reviews' },
    { value: '8', label: 'Commission' },
  ];

  // Dummy data for Sales Over Time Chart
  const salesChartData = [
    { day: 'Day 1', sales: 60 },
    { day: 'Day 5', sales: 80 },
    { day: 'Day 10', sales: 50 },
    { day: 'Day 15', sales: 90 },
    { day: 'Day 20', sales: 70 },
    { day: 'Day 25', sales: 100 },
    { day: 'Day 30', sales: 75 },
  ];

  // Dummy data for Inventory Alerts
  const inventoryAlerts = [
    { id: 1, name: 'Sterling Silver Pearl Drop Earrings', stock: 3 },
    { id: 2, name: 'Handwoven Silk Scarf', stock: 5 },
    { id: 3, name: 'Organic Coffee Beans (500g)', stock: 8 },
  ];

  // Dummy data for Top Selling Products (for table)
  const topSellingProducts = [
    { id: 1, name: 'Handwoven Scarf', unitsSold: 118, revenue: '$2,360.00' },
    { id: 2, name: 'Artisan Ceramic Mug', unitsSold: 92, revenue: '$1,840.00' },
    { id: 3, name: 'Leather Passport Holder', unitsSold: 75, revenue: '$750.00' },
    { id: 4, name: 'Hand-painted Wall Art', unitsSold: 60, revenue: '$1,200.00' },
  ];

  return (
    // The top-level div now only contains content-specific styling,
    // as the overall layout (min-h-screen, flex-col, header, footer) is handled by layout.tsx
    // The bg-gray-100 can be applied here to ensure the background of the dashboard content area
    <div className="flex-grow bg-gray-100 py-4"> {/* flex-grow to fill available space, py for some top/bottom padding */}
      {/* Main Content Area - Adjust padding if needed based on layout.tsx's main grid/padding */}
      {/* The max-w-screen-xl mx-auto handles centering */}
      <div className="p-4 md:p-6 lg:p-8 w-full max-w-screen-xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

        {/* Dashboard Overview Cards */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {overviewData.map((item, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-lg shadow-md flex flex-col items-center justify-center text-center border border-gray-200">
              <p className="text-3xl sm:text-4xl font-bold text-blue-900 mb-1">{item.value}</p> {/* Changed to blue-900 */}
              <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </section>

        {/* Sales Chart & Inventory Alerts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Over Time Chart */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Sales Over Time</h3>
              <div className="flex text-sm border border-gray-300 rounded-lg overflow-hidden">
                {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((label, i) => (
                  <button key={i} className={`px-3 py-1 ${i === 0 ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}> {/* Changed to blue-900 */}
                    {label}
                  </button>
                ))}
              </div>
            </div>
            {/* Enhanced Bar Chart Placeholder */}
            <div className="h-48 relative bg-gray-50 rounded-lg p-2 sm:p-4 flex items-end justify-between border border-gray-200">
                <div className="absolute left-0 top-0 h-full w-8 flex flex-col justify-between text-xs text-gray-500 py-1">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>
                <div className="flex flex-grow ml-8 h-full items-end justify-around border-l border-b border-gray-300">
                    {salesChartData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center h-full justify-end px-1.5">
                        <div
                        className="w-4 sm:w-6 bg-blue-900 rounded-t-sm transition-all duration-300 ease-out" // Changed to blue-900
                        style={{ height: `${(data.sales / 100) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-600 mt-1">{data.day}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="text-xs text-gray-600 mt-4 flex justify-around sm:justify-between px-4">
              <span>Active Users: 120</span>
              <span>New Clients: 5</span>
              <span>Ongoing Tasks: 15</span>
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Inventory Alerts</h3>
            <div className="space-y-3">
              {inventoryAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-sm font-bold">PROD</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{alert.name}</p>
                    <p className="text-sm text-gray-600">Current Stock: {alert.stock}</p>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Low</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full text-center text-blue-900 hover:text-blue-800 font-semibold py-2 rounded-lg border border-blue-900 hover:border-blue-800 transition-colors"> {/* Changed to blue-900 */}
              EDIT INVENTORY
            </button>
          </div>
        </section>

        {/* Top Selling Products Table */}
        <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Top Selling Products</h3>
            <button className="text-blue-900 hover:text-blue-800 font-semibold text-sm">View All</button> {/* Changed to blue-900 */}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600 uppercase text-left bg-gray-50">
                  <th className="py-3 px-4 font-semibold">Product Name</th>
                  <th className="py-3 px-4 font-semibold">Units Sold</th>
                  <th className="py-3 px-4 font-semibold">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topSellingProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 flex items-center space-x-3 text-gray-800">
                      <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-xs font-bold">P</div>
                      <span>{product.name}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{product.unitsSold}</td>
                    <td className="py-3 px-4 text-gray-700">{product.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
      {/* Removed the local footer, as layout.tsx provides PublicFooter */}
    </div>
  );
}