// app/product-analytics/page.tsx
import React from 'react';
import Header from '@/components/header/PublicHeader'; // Keep Header if you want it on this page (similar to your initial request)
import Footer from '@/components/footer/PublicFooter'; // Import the Footer component

const ProductAnalyticsPage: React.FC = () => {
  // Dummy data for the table
  const products = [
    { id: 1, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 2, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 3, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 4, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 5, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 6, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
    { id: 7, name: 'Handwoven Scarf', views: 1240, sales: 118, revenue: 2360.00, conversion: 9.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col"> {/* Added flex-col to push footer to bottom */}
      <Header /> {/* Render Header */}

      <main className="px-4 py-8 md:px-6 lg:px-8 flex-grow"> {/* Added flex-grow */}
        {/* Page Title and Description */}
        <div className="mb-8">
          <h1 className="text-title-2xl font-semibold text-gray-900 dark:text-white">
            PRODUCT ANALYTICS
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track views, sales, and conversion rates to understand product performance and improve your strategies.
          </p>
        </div>

        {/* Analytics Cards Section */}
        <section className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-theme-sm dark:bg-gray-800 dark:border dark:border-gray-700">
            <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-white">Views Vs. Sales</h2>
            <div className="flex items-center justify-center w-full h-40 bg-gray-50 rounded-md dark:bg-gray-700 dark:text-gray-400">
              <p>Line Chart Placeholder</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-theme-sm dark:bg-gray-800 dark:border dark:border-gray-700">
            <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-white">Conversion Rate</h2>
            <div className="flex items-center justify-center w-full h-40 bg-gray-50 rounded-md dark:bg-gray-700 dark:text-gray-400">
              <p>Bar Chart Placeholder</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-theme-sm dark:bg-gray-800 dark:border dark:border-gray-700">
            <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-white">Revenue Trends</h2>
            <div className="flex items-center justify-center w-full h-40 bg-gray-50 rounded-md dark:bg-gray-700 dark:text-gray-400">
              <p>Pie Chart Placeholder</p>
            </div>
          </div>
        </section>

        {/* Table Header and Controls */}
        <div className="flex flex-col items-start justify-between gap-4 mb-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">Sorting & Filters</span>
            <div className="relative">
              <select className="px-4 py-2 pr-8 text-sm bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                <option>Processing</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none dark:text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-theme-sm dark:bg-gray-800 dark:border dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Views
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Conv. %
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {product.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-medium">
                    ${product.revenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {product.conversion}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer /> {/* Render Footer at the end of the page content */}
    </div>
  );
};

export default ProductAnalyticsPage;