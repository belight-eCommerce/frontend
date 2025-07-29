// src/app/inventory-management/layout.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function InventoryManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) { // <--- This opening brace must be here
  return ( // <--- This opening parenthesis must be here
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-[#1e2025] py-4 px-2 sm:px-4 flex items-center justify-between border-b border-[#2d3035] shadow-sm relative z-10">
        <div className="flex items-center space-x-4">
          <span className="text-2xl sm:text-3xl font-bold text-gray-300 uppercase tracking-wider">MAALIIFU</span>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#2d3035] text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-48 md:w-64"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl">
              <FiShoppingCart />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl">
              <FiUser />
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                <Image src="/image1.png" alt="User Avatar" width={36} height={36} className="rounded-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {children}
    </div> // <--- This closing div is critical
  ); // <--- This closing parenthesis for the return statement is critical
} // <--- This closing brace for the function body is critical (This is likely what's missing at line 50)