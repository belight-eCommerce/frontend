// src/app/inventory-management/page.tsx
'use client';

import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // FiTrash2 is now used

export default function InventoryManagementPage() {
  const inventoryItems = [
    { id: 1, name: 'Handwoven Scarf - Blue', sku: 'HWS-B-001', stock: 15, price: '$25.00', status: 'In Stock' },
    { id: 2, name: 'Ceramic Mug - Floral', sku: 'CM-F-002', stock: 8, price: '$18.50', status: 'Low Stock' },
    { id: 3, name: 'Leather Wallet - Brown', sku: 'LW-B-003', stock: 22, price: '$40.00', status: 'In Stock' },
    { id: 4, name: 'Art Print - Abstract', sku: 'AP-A-004', stock: 3, price: '$35.00', status: 'Out of Stock' },
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit item with ID: ${id}`);
    // Implement your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with ID: ${id}`);
    // Implement your delete logic here, e.g., filter out the item from state
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-800">INVENTORY MANAGEMENT</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage your product stock, update details, and track inventory levels.
        </p>
      </div>

      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Current Stock</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add New Item
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Product Name</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">SKU</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Stock</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Price</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">{item.name}</td>
                  <td className="py-3 px-4 text-gray-700">{item.sku}</td>
                  <td className="py-3 px-4 text-gray-700">{item.stock}</td>
                  <td className="py-3 px-4 text-gray-700">{item.price}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                      item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>
                      {/* FiTrash2 is now used here */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}