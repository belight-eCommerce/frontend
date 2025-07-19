"use client";

import React, { useState } from "react";

const wishlistData = [
  {
    id: 1,
    image: "/images/product/image11.png",
    category: "Jewelry",
    name: "Emerald Aura Necklace",
    seller: "Addis Carvings",
    price: "$79.99",
  },
  {
    id: 2,
    image: "/images/product/image23.png",
    category: "Jewelry",
    name: "Handcrafted Leather Watch",
    seller: "Addis Carvings",
    price: "$77.9",
  },
  {
    id: 3,
    image: "/images/product/image24.png",
    category: "Jewelry",
    name: "Sunset Loom Beaded Earrings",
    seller: "Addis Carvings",
    price: "$65",
  },
  {
    id: 4,
    image: "/images/product/image21.png",
    category: "Jewelry",
    name: "Rose Gold Stacking Ring",
    seller: "Addis Carvings",
    price: "$58",
  },
];

const categories = ["Jewelry", "Handmade crafts", "Pottery", "Woodwork", "Home decor"];

const Wishlist: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Jewelry");

  
  const filteredWishlist = wishlistData.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Category</span>
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredWishlist.map(item => (
          <div key={item.id} className="flex flex-col">
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs text-gray-500 mb-1">{item.category}</div>
            <div className="font-semibold mb-1 text-base text-gray-900 truncate">{item.name}</div>
            <div className="text-xs text-gray-500 mb-1">By {item.seller}</div>
            <div className="text-base font-medium text-gray-900">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist; 