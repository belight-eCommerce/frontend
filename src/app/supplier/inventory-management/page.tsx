// app/inventory-management/page.tsx
import React from 'react';
import Header from '@/components/header/PublicHeader'; // Keep Header if you want it on this page (similar to your initial request)
import Footer from '@/components/footer/PublicFooter'; // Import the Footer component
const InventoryManagementPage: React.FC = () => {
  // Dummy data for the table
  const inventoryItems = [
    { id: 1, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Delivered' },
    { id: 2, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Processing' },
    { id: 3, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Cancelled' },
    { id: 4, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Delivered' },
    { id: 5, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Processing' },
    { id: 6, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Cancelled' },
    { id: 7, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Delivered' },
    { id: 8, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Processing' },
    { id: 9, product: 'Handmade Vase X1', sku: 'HB-001', stock: 120, status: 'Cancelled' },
  ];

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success-50 text-success-500 dark:bg-green-700/[0.2] dark:text-green-300';
      case 'Processing':
        return 'bg-orange-50 text-orange-500 dark:bg-yellow-700/[0.2] dark:text-yellow-300';
      case 'Cancelled':
        return 'bg-error-50 text-error-500 dark:bg-red-700/[0.2] dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700/[0.2] dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col"> {/* Added flex-col */}
      <Header /> {/* Render Header */}

      <main className="px-4 py-8 md:px-6 lg:px-8 flex-grow"> {/* Added flex-grow */}
        {/* Page Title and Description */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            INVENTORY MANAGEMENT
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track and update your stock levels in real time. Ensure accurate inventory to prevent overselling or stockouts.
          </p>
        </div>

        {/* Table Header and Controls */}
        <div className="flex flex-col items-start justify-end gap-4 mb-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 ml-auto">
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

        {/* Inventory Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-theme-sm dark:bg-gray-800 dark:border dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Stock Level
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Update Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-gray-500 dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {item.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {item.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <input
                      type="text"
                      placeholder="Type Here"
                      className="px-3 py-1.5 w-32 text-sm border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12v5m7.997-2.997h.007m.007 0l-.007.007-.007-.007M20 20v-5h-.581m0 0a8.001 8.001 0 01-15.357-2.1l-.489.153M4 12V5h.582"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        {item.status === 'Delivered' ? (
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                          </svg>
                        )}
                      </button>
                    </div>
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

export default InventoryManagementPage;