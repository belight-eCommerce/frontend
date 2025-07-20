"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PaymentMethod {
  cardType: string;
  expiry: string;
  cardNumber: string;
}

const initialMethod: PaymentMethod = {
  cardType: "ahmedmusa@email.com",
  expiry: "+251912345678",
  cardNumber: "123 Bole Street, Addis Ababa",
};

export default function PaymentMethodPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>([initialMethod]);
  const [form, setForm] = useState<PaymentMethod>(initialMethod);
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setForm({ cardType: "", expiry: "", cardNumber: "" });
    setShowForm(true);
    setIsEditing(false);
  };

  const handleEdit = (idx: number) => {
    setForm(methods[idx]);
    setShowForm(true);
    setIsEditing(true);
  };

  const handleRemove = (idx: number) => {
    setMethods(methods.filter((_, i) => i !== idx));
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setMethods(methods.map((m, i) => (i === 0 ? form : m)));
    } else {
      setMethods([...methods, form]);
    }
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#222] flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-7xl bg-white rounded-md shadow p-0 md:p-8">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 px-6 py-6 md:py-0 md:h-28">
          <span className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">MAALIIFU</span>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-100"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M20 20l-3-3"/></svg>
              </span>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="8.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/><circle cx="16.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/><path d="M2 3h2l2.68 12.39A2 2 0 0 0 8.61 17h7.78a2 2 0 0 0 1.93-1.61L20 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <Image
              src="/images/user/user-01.jpg"
              alt="User"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border border-gray-200"
            />
          </div>
        </div>
        {/* Payment Methods Section */}
        <div className="bg-[#f7f7f7] min-h-[calc(100vh-120px)] py-10 px-2 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 md:mb-0">PAYMENT METHODS</h2>
            <button
              className="bg-blue-900 text-white rounded-full px-6 py-2 font-medium flex items-center gap-2 self-end"
              onClick={handleAdd}
            >
              <span className="text-lg">+</span> Add Payment Method
            </button>
          </div>
          {/* Payment Method Card/Form */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl">
              {showForm ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
                      <input
                        type="text"
                        name="cardType"
                        value={form.cardType}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                      <input
                        type="text"
                        name="expiry"
                        value={form.expiry}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <button
                      type="button"
                      className="flex-1 border border-gray-300 rounded-full py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-900 text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              ) : methods.length > 0 ? (
                <div>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
                      <input
                        type="text"
                        value={methods[0].cardType}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100"
                        disabled
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                      <input
                        type="text"
                        value={methods[0].expiry}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      value={methods[0].cardNumber}
                      className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <button
                      type="button"
                      className="flex-1 border border-gray-300 rounded-full py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => handleRemove(0)}
                    >
                      REMOVE
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-blue-900 text-white rounded-full py-2 font-semibold hover:bg-blue-800 transition"
                      onClick={() => handleEdit(0)}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">No payment methods found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 