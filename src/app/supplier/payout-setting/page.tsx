// src/app/payout-settings/page.tsx
"use client";
import React, { useState } from "react";

type Address = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

const initialAddress: Address = {
  fullName: "Ahmed Musa",
  email: "ahmedmusa@email.com",
  phone: "+251912345678",
  address: "123 Bole Street, Addis Ababa",
};

export default function AddressPage() {
  const [address, setAddress] = useState<Address>(initialAddress);
  const [form, setForm] = useState<Address>(initialAddress);
  const [mode, setMode] = useState<"view" | "edit" | "add">("view");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setForm(address);
    setMode("edit");
  };

  const handleAddNew = () => {
    setForm({ fullName: "", email: "", phone: "", address: "" });
    setMode("add");
  };

  const handleDelete = () => {
    // In a real app, you'd likely confirm this action and send to a backend
    setAddress({ fullName: "", email: "", phone: "", address: "" });
    setMode("view");
  };

  const handleCancel = () => {
    setForm(address);
    setMode("view");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send 'form' data to a backend API to save/update
    setAddress(form);
    setMode("view");
  };

  return (
    // The outermost div defines the background and horizontal padding for the page
    <div className="bg-[#f7f7f7] py-10 px-4 w-full">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-md shadow-md p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-semibold text-gray-800">MY ADDRESSES</h2>
          <button
            className="bg-blue-900 text-white rounded-full px-6 py-2 font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAddNew}
            disabled={mode !== "view"} // Disable if not in view mode
          >
            <span className="text-lg">+</span> Add New Address
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl p-6 md:p-8 w-full max-w-3xl mx-auto flex flex-col gap-6"
        >
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={mode === "view" ? address.fullName : form.fullName}
              onChange={handleChange}
              className="w-full rounded border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
              disabled={mode === "view"}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={mode === "view" ? address.email : form.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
                disabled={mode === "view"}
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={mode === "view" ? address.phone : form.phone}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
                disabled={mode === "view"}
                placeholder="Phone"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={mode === "view" ? address.address : form.address}
              onChange={handleChange}
              className="w-full rounded border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500"
              disabled={mode === "view"}
              placeholder="Address"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {mode === "view" ? (
              <>
                <button
                  type="button"
                  className="flex-1 border border-gray-300 rounded-full py-2 font-medium text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleDelete}
                  // Disable delete/edit if address is empty (e.g., after a delete or initial empty state)
                  disabled={!address.fullName && !address.email && !address.phone && !address.address}
                >
                  DELETE
                </button>
                <button
                  type="button"
                  className="flex-1 bg-blue-900 text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleEdit}
                  disabled={!address.fullName && !address.email && !address.phone && !address.address}
                >
                  EDIT
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="flex-1 border border-gray-300 rounded-full py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
