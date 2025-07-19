"use client";
import React, { useState } from "react";

export default function AddressPage() {
  const [form, setForm] = useState({
    fullName: "Ahmed Musa",
    email: "ahmedmusa@email.com",
    phone: "+251912345678",
    address: "123 Bole Street, Addis Ababa",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here
    alert("Address saved!");
  };

  const handleAddNew = () => {
    setForm({ fullName: "", email: "", phone: "", address: "" });
  };

  const handleDelete = () => {
    setForm({ fullName: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-[#222] flex items-center justify-center py-8 px-2">
      <div className="bg-white w-full max-w-5xl rounded-md shadow-lg p-6 md:p-10">
        {/* Title and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-normal text-gray-800">MY ADDRESSES</h2>
          <button 
            className="bg-blue-900 text-white rounded-full px-6 py-2 font-medium flex items-center gap-2"
            onClick={handleAddNew}
          >
            <span className="text-lg">+</span> Add New Address
          </button>
        </div>
        {/* Address Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              className="flex-1 border border-gray-300 rounded-full py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={handleDelete}
            >
              DELETE
            </button>
            <button
              type="button"
              className="flex-1 bg-blue-900 text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition"
            >
              EDIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 