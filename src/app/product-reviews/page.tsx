// src/app/product-analysis/page.tsx
'use client';

import React from 'react';
// import Image from 'next/image'; // Removed: This was the only cause of ESLint error

export default function ProductAnalysisPage() {
  const productData = [
    { product: 'Handwoven Scarf', views: '1,240', sales: '118', revenue: '$2,360.00', conv: '9.5%' },
    { product: 'Handwoven Scarf', views: '1,240', sales: '118', revenue: '$2,360.00', conv: '9.5%' },
    { product: 'Handwoven Scarf', views: '1,240', sales: '118', revenue: '$2,360.00', conv: '9.5%' },
    { product: 'Handwoven Scarf', views: '1,240', sales: '118', revenue: '$2,360.00', conv: '9.5%' },
  ];

  // Data for Views and Sales (these are now raw values, not percentages)
  // We'll normalize them for SVG viewBox 0-100
  const maxChartValue = 100; // Assuming data points conceptually max out at 100 for visualization
  const rawViewsData = [50, 65, 40, 75, 55, 80, 60]; // Example values (e.g., thousands)
  const rawSalesData = [30, 45, 20, 55, 35, 70, 40]; // Example values

  // Function to convert raw data to SVG points (0-100 scale for Y-axis)
  const getPoints = (data: number[]) => {
    return data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100; // X from 0 to 100
      const y = 100 - (value / maxChartValue) * 100; // Y from 100 (bottom) to 0 (top)
      return `${x},${y}`;
    }).join(' ');
  };

  const viewsPoints = getPoints(rawViewsData);
  const salesPoints = getPoints(rawSalesData);

  // Data for Conversion Rate (visually matching the bar heights in your image)
  // Assuming a max of 80% on the Y-axis for scaling
  const conversionRateData = [
    45, // Mon (Approximate percentage for visual matching)
    60, // Tue
    35, // Wed
    75, // Thu
    50, // Fri
    65, // Sat
    40, // Sun
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-800">PRODUCT ANALYTICS</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Track views, sales, and conversion rates to understand product performance and improve your strategies.
        </p>
      </div>

      {/* Analytics Charts Section (Views Vs. Sales uses SVG Polyline) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Views Vs. Sales Chart (with SVG Polyline for connected lines) */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Views Vs. Sales</h3>
          <div className="relative h-48">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
              {/* These labels are illustrative. Adjust based on your 'maxChartValue' logic */}
              <span>Max</span>
              <span>Mid</span>
              <span>Min</span>
              <span>0m</span>
            </div>
            {/* Chart Area */}
            <div className="ml-8 h-full flex items-end justify-around relative">
              {/* Grid lines */}
              <div className="absolute inset-0 border-t border-r border-dashed border-gray-200"></div>

              {/* SVG for Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Views Line (Blue) */}
                <polyline
                  fill="none"
                  stroke="#3B82F6" // blue-500
                  strokeWidth="2"
                  points={viewsPoints}
                />
                {/* Sales Line (Darker Blue) */}
                <polyline
                  fill="none"
                  stroke="#1D4ED8" // blue-700
                  strokeWidth="2"
                  points={salesPoints}
                />
              </svg>

            </div>
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-around text-xs text-gray-500 pt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Conversion Rate Chart (Recreated based on image) */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Conversion Rate</h3>
          <div className="relative h-48">
            {/* Y-axis labels - Adjusted to represent a percentage scale */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
              <span>80%</span> {/* Adjusted based on perceived max in the image */}
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>
            </div>
            {/* Chart Area */}
            <div className="ml-8 h-full flex items-end justify-around relative">
              {/* Grid lines */}
              <div className="absolute inset-0 border-t border-r border-dashed border-gray-200"></div>
              {/* Bars based on conversionRateData - Styling to match image */}
              {conversionRateData.map((rate, index) => (
                <div
                  key={index}
                  className="bg-[#1D4ED8] rounded-t-md flex-1 mx-1" // Darker blue color like in the image
                  style={{
                    height: `${(rate / 80) * 100}%`, // Scaled to the new max Y-axis value
                    maxWidth: '20px', // Adjust width if needed for spacing
                  }}
                ></div>
              ))}
            </div>
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-around text-xs text-gray-500 pt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Revenue Trends Chart (Simulated Pie Chart - Percentages Highlighted) */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Revenue Trends</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center h-48 sm:h-auto sm:justify-start sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Simulated Pie Chart */}
            <div
              className="w-32 h-32 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-semibold text-gray-900"
              style={{
                background: `conic-gradient(
                  #3B82F6 0% 40%,
                  #FCD34D 40% 65%,
                  #10B981 65% 80%,
                  #6B7280 80% 100%
                )`,
              }}
            >
              {/* Center circle if needed */}
            </div>

            {/* Legend - PERCENTAGES UPDATED */}
            <div className="text-sm space-y-2 sm:mt-0">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                <span>Monthly Revenue <br className="md:hidden"/> <span className="text-gray-700 text-xs font-semibold">40%</span></span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></span>
                <span>Top-Selling Products <br className="md:hidden"/> <span className="text-gray-700 text-xs font-semibold">25%</span></span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span>Revenue by Category <br className="md:hidden"/> <span className="text-gray-700 text-xs font-semibold">15%</span></span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                <span>Seasonal Trends <br className="md:hidden"/> <span className="text-gray-700 text-xs font-semibold">20%</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Analytics Table Section */}
      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Sorting & Filters</span>
            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Processing</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Product List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Product</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Views</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Sales</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Revenue</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Conv. %</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 flex items-center space-x-2">
                    <span>{item.product}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.views}</td>
                  <td className="py-3 px-4 text-gray-700">{item.sales}</td>
                  <td className="py-3 px-4 text-gray-700">{item.revenue}</td>
                  <td className="py-3 px-4 text-gray-700">{item.conv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}