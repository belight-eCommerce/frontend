
"use client";
import React, { useState } from "react";

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
    <div className="flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-7xl bg-white rounded-md shadow p-0 md:p-8">
        {/* Payment Methods Section */}
        <div className="bg-[#f7f7f7] py-10 px-2 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 md:mb-0">
              PAYMENT METHODS
            </h2>
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
                  {/* Form Inputs */}
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Type
                      </label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry
                      </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">

Card Number
                    </label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Type
                      </label>
                      <input
                        type="text"
                        value={methods[0].cardType}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100"
                        disabled
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry
                      </label>
                      <input
                        type="text"
                        value={methods[0].expiry}
                        className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
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
                <div className="text-center text-gray-400 py-8">
                  No payment methods found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}