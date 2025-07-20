"use client";

import React, { useState } from 'react';
import Image from "next/image";

const TABS = [
  { label: 'Submitted Reviews', value: 'submitted' },
  { label: 'Pending Reviews', value: 'pending' },
];

const mockProduct = {
  image: '/images/product/image1.png',
  name: 'Sterling Silver Pearl Drop Earrings',
  purchasedOn: '2026-05-08',
  rating: 4.5,
  review: '',
};

const ProductReviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [review, setReview] = useState('');

  return (
    <div className="min-h-screen bg-[#f8f8f8] p-8">
      <h1 className="text-2xl font-serif mb-8">PRODUCT REVIEWS</h1>
      <div className="flex justify-end mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`px-6 py-2 rounded-full mx-1 font-medium ${
              activeTab === tab.value
                ? 'bg-blue-900 text-white'
                : 'bg-[#f2f2f2] text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Review Card */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center mb-8 max-w-xl">
        <Image
          src={mockProduct.image}
          alt={mockProduct.name}
          width={96}
          height={96}
          className="w-24 h-24 rounded-lg object-cover mr-6 border"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold mb-1">{mockProduct.name}</h2>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700">{mockProduct.rating}</span>
              <span className="text-yellow-500 text-lg ml-1">★★★★★</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm mb-2">
            Purchased on: {mockProduct.purchasedOn}
          </div>
          <a href="#" className="text-blue-700 underline text-sm font-medium">Rate Now</a>
        </div>
      </div>
     
      <div className="max-w-xl">
        <h3 className="text-lg font-semibold mb-2">Write Review</h3>
        <div className="bg-white rounded-xl shadow p-6">
          <textarea
            className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
            placeholder="Write your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold" type="button">
              SUBMIT REVIEW
            </button>
            <button className="bg-[#f2f2f2] text-gray-700 px-6 py-2 rounded-full font-semibold" type="button">
              EDIT
            </button>
            <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded-full font-semibold" type="button">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews; 