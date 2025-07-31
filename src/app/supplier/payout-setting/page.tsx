// src/app/payout-settings/page.tsx
'use client'; // This is a client component

import React from 'react';

export default function PayoutSettingsPage() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-800">PAYOUT SETTINGS</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage your preferred payout method.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Preferred Payout Method */}
          <div>
            <label htmlFor="payoutMethod" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Payout Method
            </label>
            <select
              id="payoutMethod"
              name="payoutMethod"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select</option>
              {/* Add more options here as needed, e.g., Bank Transfer, PayPal, etc. */}
              <option value="bank_transfer">Bank Transfer</option>
              <option value="mobile_wallet">Mobile Wallet</option>
            </select>
          </div>

          {/* Account Name */}
          <div>
            <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="Type Here"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Account Number */}
          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="Type Here"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Bank Name / Mobile Wallet */}
          <div>
            <label htmlFor="bankMobileWallet" className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name / Mobile Wallet
            </label>
            <input
              type="text"
              id="bankMobileWallet"
              name="bankMobileWallet"
              placeholder="Type Here"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* SWIFT / IBAN (Optional) */}
          <div className="md:col-span-2"> {/* This input spans both columns on medium screens and up */}
            <label htmlFor="swiftIban" className="block text-sm font-medium text-gray-700 mb-1">
              SWIFT / IBAN (Optional)
            </label>
            <input
              type="text"
              id="swiftIban"
              name="swiftIban"
              placeholder="Type Here"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Save Settings Button */}
          <div className="md:col-span-2 mt-4"> {/* Button spans both columns and has top margin */}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              SAVE SETTINGS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}