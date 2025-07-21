
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, SlidersHorizontal, X } from "lucide-react";

// Types for props
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  subcategory?: string;
  available?: boolean;
  priceValue?: number;
}

interface CategoryGroup {
  label: string;
  subcategories: string[];
}

const placeholderProducts: Product[] = [
  // Jewelry (8)
  { id: 1, name: "Pearl Drop Necklace", price: "$119.00", image: "/images/product/image11.png", subcategory: "Jewelry", available: true, priceValue: 119 },
  { id: 2, name: "Moonstone Harmony Bracelet", price: "$129.00", image: "/images/product/image12.png", subcategory: "Jewelry", available: false, priceValue: 129 },
  { id: 3, name: "Silver Prism Studs", price: "$149.99", image: "/images/product/image13.png", subcategory: "Jewelry", available: true, priceValue: 149.99 },
  { id: 4, name: "Emerald Aura Necklace", price: "$79.50", image: "/images/product/image14.png", subcategory: "Jewelry", available: true, priceValue: 79.5 },
  { id: 5, name: "Diamond Cluster Studs", price: "$1,129.00", image: "/images/product/image15.png", subcategory: "Jewelry", available: false, priceValue: 1129 },
  { id: 6, name: "Rose Gold Stacking Ring", price: "$1,049.99", image: "/images/product/image21.png", subcategory: "Jewelry", available: true, priceValue: 1049.99 },
  { id: 7, name: "Sunset Loom Beaded Earrings", price: "$89.00", image: "/images/product/image24.png", subcategory: "Jewelry", available: true, priceValue: 89 },
  { id: 8, name: "Opal Teardrop Pendant", price: "$210.00", image: "/images/product/image22.png", subcategory: "Jewelry", available: true, priceValue: 210 },

  // Handmade crafts (8)
  { id: 9, name: "Handwoven Basket", price: "$45.00", image: "/images/product/image31.png", subcategory: "Handmade crafts", available: true, priceValue: 45 },
  { id: 10, name: "Clay Pottery Vase", price: "$60.00", image: "/images/product/image32.png", subcategory: "Handmade crafts", available: true, priceValue: 60 },
  { id: 11, name: "Macrame Wall Hanging", price: "$38.00", image: "/images/product/image33.png", subcategory: "Handmade crafts", available: false, priceValue: 38 },
  { id: 12, name: "Beaded Coaster Set", price: "$25.00", image: "/images/product/image34.png", subcategory: "Handmade crafts", available: true, priceValue: 25 },

  // Pottery (8)
  { id: 13, name: "Classic Clay Jug", price: "$32.00", image: "/images/product/image5.png", subcategory: "Pottery", available: true, priceValue: 32 },
  { id: 14, name: "Decorative Pottery Bowl", price: "$40.00", image: "/images/product/image6.png", subcategory: "Pottery", available: true, priceValue: 40 },
  { id: 15, name: "Hand-painted Vase", price: "$55.00", image: "/images/product/image1.png", subcategory: "Pottery", available: false, priceValue: 55 },
  { id: 16, name: "Ceramic Tea Set", price: "$75.00", image: "/images/product/image2.png", subcategory: "Pottery", available: true, priceValue: 75 },

  // Woodwork (8)
  { id: 17, name: "Hand-carved Wooden Bowl", price: "$65.00", image: "/images/product/image13.png", subcategory: "Woodwork", available: true, priceValue: 65 },
  { id: 18, name: "Rustic Wooden Tray", price: "$42.00", image: "/images/product/image14.png", subcategory: "Woodwork", available: false, priceValue: 42 },
  { id: 19, name: "Decorative Wall Panel", price: "$120.00", image: "/images/product/image15.png", subcategory: "Woodwork", available: true, priceValue: 120 },
  { id: 20, name: "Wooden Jewelry Box", price: "$55.00", image: "/images/product/image21.png", subcategory: "Woodwork", available: true, priceValue: 55 },

  // Home decor (8)
  { id: 21, name: "Boho Wall Tapestry", price: "$75.00", image: "/images/product/image12.png", subcategory: "Home decor", available: true, priceValue: 75 },
  { id: 22, name: "Decorative Throw Pillow", price: "$29.00", image: "/images/product/image13.png", subcategory: "Home decor", available: true, priceValue: 29 },
  { id: 23, name: "Hand-painted Vase", price: "$55.00", image: "/images/product/image14.png", subcategory: "Home decor", available: false, priceValue: 55 },
  { id: 24, name: "Macrame Plant Hanger", price: "$22.00", image: "/images/product/image15.png", subcategory: "Home decor", available: true, priceValue: 22 },
  // Add similar blocks for each subcategory as needed...
];

const placeholderCategoryGroups: CategoryGroup[] = [
  { label: "Artisans & Handmade", subcategories: ["Handmade crafts", "Pottery", "Woodwork", "Jewelry", "Home decor"] },
  { label: "Clothing & Fashion", subcategories: ["Men's Clothing", "Women's Clothing", "Kids & Baby Clothing", "Footwear", "Accessories (hats, belts, scarves, etc.)"] },
  { label: "Beauty & Personal Care", subcategories: ["Skincare", "Haircare", "Makeup", "Fragrances", "Grooming tools"] },
  { label: "Electronics & Gadgets", subcategories: ["Mobile Phones", "Laptops & Computers", "Smart Home Devices", "Audio & Headphones"] },
  { label: "Home & Living", subcategories: ["Furniture", "Kitchenware", "Bedding & Bath", "Lighting", "Storage & Organization"] },
  { label: "Health & Wellness", subcategories: ["Supplements", "Fitness Equipment", "Medical Supplies", "Personal Hygiene"] },
  { label: "Food & Beverages", subcategories: ["Gourmet & Specialty Foods", "Organic Produce", "Snacks", "Coffee & Tea", "Wine & Spirits"] },
  { label: "Books & Stationery", subcategories: ["Fiction & Non-fiction Books", "Educational Materials", "Planners & Journals", "Office Supplies"] },
  { label: "Toys & Games", subcategories: ["Educational Toys", "Board Games", "Puzzles", "Kids' Electronics"] },
  { label: "Sports & Outdoors", subcategories: ["Sportswear", "Outdoor Gear", "Camping & Hiking", "Fitness Accessories"] },
  { label: "Automotive", subcategories: ["Car Accessories", "Tools & Equipment", "Motorcycle Gear"] },
  { label: "Pet Supplies", subcategories: ["Pet Food", "Toys", "Grooming", "Beds & Furniture"] },
  { label: "Jewelry & Watches", subcategories: ["Fine Jewelry", "Costume Jewelry", "Watches"] },
  { label: "Digital Products", subcategories: ["eBooks", "Software", "Courses", "Design Assets"] },
  { label: "Baby & Maternity", subcategories: ["Baby Clothes", "Diapers & Wipes", "Nursing", "Maternity"] },
];

const MIN_PRICE = 10;
const MAX_PRICE = 1400;
const PRODUCTS_PER_PAGE = 8;

const Category = () => {
  const category = "Jewelry";
  const products = placeholderProducts;
  const categoryGroups = placeholderCategoryGroups;
  // State for selected subcategory
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  // State for filter sidebar toggle
  const [showFilters, setShowFilters] = useState(false);
  // State for price filter
  const [price, setPrice] = useState<number>(MAX_PRICE);
  // State for availability filter
  const [inStock, setInStock] = useState<boolean>(false);
  // Carousel page for products
  const [productPage, setProductPage] = useState(0);

  // Handler for subcategory checkbox
  const handleSubcategoryChange = (sub: string) => {
    setSelectedSubcategory(sub);
    setProductPage(0); // Reset carousel when subcategory changes
  };

  // Handler for removing badges
  const removeBadge = (type: string) => {
    if (type === "subcategory") setSelectedSubcategory(null);
    if (type === "price") setPrice(MAX_PRICE);
    if (type === "inStock") setInStock(false);
  };

  // Handler for clearing all filters
  const clearAll = () => {
    setSelectedSubcategory(null);
    setPrice(MAX_PRICE);
    setInStock(false);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const priceOk = product.priceValue !== undefined ? product.priceValue <= price : true;
      const subOk = selectedSubcategory ? product.subcategory === selectedSubcategory : true;
      const stockOk = inStock ? product.available : true;
      return priceOk && subOk && stockOk;
    });
  }, [products, price, selectedSubcategory, inStock]);

  // Carousel logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const canGoLeft = productPage > 0;
  const canGoRight = productPage < totalPages - 1;
  const paginatedProducts = filteredProducts.slice(productPage * PRODUCTS_PER_PAGE, (productPage + 1) * PRODUCTS_PER_PAGE);

  // Animation classes for sidebar/overlay
  const sidebarAnim = showFilters ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0';
  const overlayAnim = showFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between md:hidden p-4 border-b border-gray-200">
        <h1 className="text-2xl font-extrabold">
          {selectedSubcategory ? selectedSubcategory : category}
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow hover:bg-gray-100 transition"
          onClick={() => setShowFilters((v) => !v)}
          aria-label="Toggle filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium">Filters</span>
        </button>
      </div>
      {/* Sidebar (Filters) */}
      <aside
        className={`
          fixed md:static top-[5rem] left-0 z-40 h-[calc(100vh-5rem)] md:h-auto w-80 md:w-64 bg-white border-r border-gray-200 p-4 md:p-6 flex-shrink-0 max-h-[80vh] rounded-lg flex flex-col
          transition-all duration-300 ease-in-out
          ${sidebarAnim}
          md:translate-x-0 md:opacity-100
        `}
        style={{ boxShadow: showFilters ? '0 2px 16px rgba(0,0,0,0.08)' : undefined }}
        aria-label="Sidebar filters"
      >
        {/* Close button on mobile */}
        <div className="flex md:hidden justify-end mb-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setShowFilters(false)}
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Scrollable Categories */}
        <div className="mb-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{maxHeight: 'calc(60vh)'}}>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <div className="space-y-4">
            {categoryGroups.map((group) => (
              <div key={group.label} className="mb-2">
                <div className="font-semibold text-gray-800 text-sm mb-1">{group.label}</div>
                <ul className="ml-2 space-y-1">
                  {group.subcategories.map((sub) => (
                    <li key={sub} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 accent-blue-600"
                        id={sub}
                        checked={selectedSubcategory === sub}
                        onChange={() => handleSubcategoryChange(sub)}
                      />
                      <label htmlFor={sub} className="cursor-pointer select-none text-gray-700 text-sm">{sub}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Price and Availability filters below the scrollable categories */}
        <div className="mb-8 mt-2">
          <h3 className="font-semibold text-lg mb-2">Price</h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">$10.00</span>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-gray-500">${MAX_PRICE.toLocaleString()}</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">Up to ${price}</div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Availability</h3>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="in-stock"
              className="mr-2 accent-blue-600"
              checked={inStock}
              onChange={e => setInStock(e.target.checked)}
            />
            <label htmlFor="in-stock" className="cursor-pointer select-none">In Inventory</label>
          </div>
        </div>
        {/* Clear All Button */}
        {(selectedSubcategory || price !== MAX_PRICE || inStock) && (
          <button
            className="mt-2 w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
            onClick={clearAll}
          >
            Clear All Filters
          </button>
        )}
      </aside>
      {/* Overlay for mobile when filters are open */}
      <div
        className={`fixed inset-x-0 top-[5rem] bottom-0 bg-black/30 z-30 md:hidden transition-opacity duration-300 ${overlayAnim}`}
        onClick={() => setShowFilters(false)}
        aria-label="Close filters overlay"
      />
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10">
        {/* Desktop filter toggle and heading */}
        <div className="hidden md:flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold">
            {selectedSubcategory ? selectedSubcategory : category}
          </h1>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow hover:bg-gray-100 transition"
            onClick={() => setShowFilters((v) => !v)}
            aria-label="Toggle filters"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="font-medium">Filters</span>
          </button>
        </div>
        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedSubcategory && (
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {selectedSubcategory}
              <button
                className="ml-2 text-blue-600 hover:text-blue-900"
                onClick={() => removeBadge("subcategory")}
                aria-label="Remove subcategory filter"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {price !== MAX_PRICE && (
            <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {`≤ $${price}`}
              <button
                className="ml-2 text-green-600 hover:text-green-900"
                onClick={() => removeBadge("price")}
                aria-label="Remove price filter"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          {inStock && (
            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              In Inventory
              <button
                className="ml-2 text-yellow-600 hover:text-yellow-900"
                onClick={() => removeBadge("inStock")}
                aria-label="Remove availability filter"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
        </div>
        {/* Filtered Product Count */}
        <div className="mb-4 text-gray-700 font-medium">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
        </div>
        {/* Search Bar */}
        <div className="flex items-center mb-8 gap-2">
          <input
            type="text"
            placeholder="Search items"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Search</button>
        </div>
        {/* Carousel controls for all products (category or subcategory) */}
        {filteredProducts.length > PRODUCTS_PER_PAGE && (
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              className={`p-2 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition ${!canGoLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
              onClick={() => canGoLeft && setProductPage(productPage - 1)}
              disabled={!canGoLeft}
              aria-label="Previous products"
            >
              <ChevronLeft size={22} />
            </button>
            <span className="text-sm text-gray-600">
              Page {productPage + 1} of {totalPages}
            </span>
            <button
              className={`p-2 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition ${!canGoRight ? 'opacity-40 cursor-not-allowed' : ''}`}
              onClick={() => canGoRight && setProductPage(productPage + 1)}
              disabled={!canGoRight}
              aria-label="Next products"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
               
                <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow hover:bg-white">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
                </button>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-medium mb-1 truncate">{product.name}</div>
                <div className="text-gray-700 font-semibold mb-2">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category; 