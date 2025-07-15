"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categoryTabs = [
  {
    label: "Artisans & Handmade",
    categories: [
      { name: "Handmade Crafts", img: "/images/product/image11.png" },
      { name: "Pottery", img: "/images/product/image12.png" },
      { name: "Woodwork", img: "/images/product/image13.png" },
      { name: "Home Decor", img: "/images/product/image14.png" },
      { name: "Jewelry", img: "/images/product/image15.png" },
    ],
  },
  {
    label: "Clothing & Fashion",
    categories: [
      { name: "Men’s Clothing", img: "/images/product/image21.png" },
      { name: "Women’s Clothing", img: "/images/product/image22.png" },
      { name: "Footwear", img: "/images/product/image23.png" },
      { name: "Accessories", img: "/images/product/image24.png" },
    ],
  },
  {
    label: "Beauty & Personal Care",
    categories: [
      { name: "Skincare", img: "/images/product/image31.png" },
      { name: "Haircare", img: "/images/product/image32.png" },
      { name: "Makeup", img: "/images/product/image33.png" },
      { name: "Fragrances", img: "/images/product/image34.png" },
    ],
  },
  {
    label: "Electronics & Gadgets",
    categories: [
      { name: "Mobile Phones", img: "/images/product/image41.png" },
      { name: "Laptops & Computers", img: "/images/product/image42.png" },
      { name: "Smart Home Devices", img: "/images/product/image43.png" },
      { name: "Audio & Headphones", img: "/images/product/image44.png" },
    ],
  },
  {
    label: "Home & Living",
    categories: [
      { name: "Furniture", img: "/images/product/image6.png" },
      { name: "Kitchenware", img: "/images/product/image2.png" },
      { name: "Bedding & Bath", img: "/images/product/image3.png" },
      { name: "Lighting", img: "/images/product/image4.png" },
      { name: "Storage & Organization", img: "/images/product/image5.png" },
    ],
  },
  {
    label: "Health & Wellness",
    categories: [
      { name: "Supplements", img: "/images/product/image1.png" },
      { name: "Fitness Equipment", img: "/images/product/image2.png" },
      { name: "Medical Supplies", img: "/images/product/image3.png" },
      { name: "Personal Hygiene", img: "/images/product/image4.png" },
    ],
  },
  {
    label: "Food & Beverages",
    categories: [
      { name: "Gourmet & Specialty Foods", img: "/images/product/image5.png" },
      { name: "Organic Produce", img: "/images/product/image6.png" },
      { name: "Snacks", img: "/images/product/image1.png" },
      { name: "Coffee & Tea", img: "/images/product/image2.png" },
      { name: "Wine & Spirits", img: "/images/product/image3.png" },
    ],
  },
  {
    label: "Books & Stationery",
    categories: [
      { name: "Fiction & Non-fiction Books", img: "/images/product/image4.png" },
      { name: "Educational Materials", img: "/images/product/image5.png" },
      { name: "Planners & Journals", img: "/images/product/image6.png" },
      { name: "Office Supplies", img: "/images/product/image1.png" },
    ],
  },
  {
    label: "Toys & Games",
    categories: [
      { name: "Educational Toys", img: "/images/product/image2.png" },
      { name: "Board Games", img: "/images/product/image3.png" },
      { name: "Puzzles", img: "/images/product/image4.png" },
      { name: "Kids' Electronics", img: "/images/product/image5.png" },
    ],
  },
  {
    label: "Sports & Outdoors",
    categories: [
      { name: "Sportswear", img: "/images/product/image6.png" },
      { name: "Outdoor Gear", img: "/images/product/image1.png" },
      { name: "Camping & Hiking", img: "/images/product/image2.png" },
      { name: "Fitness Accessories", img: "/images/product/image3.png" },
    ],
  },
  {
    label: "Automotive",
    categories: [
      { name: "Car Accessories", img: "/images/product/image4.png" },
      { name: "Tools & Equipment", img: "/images/product/image5.png" },
      { name: "Motorcycle Gear", img: "/images/product/image6.png" },
    ],
  },
  {
    label: "Pet Supplies",
    categories: [
      { name: "Pet Food", img: "/images/product/image1.png" },
      { name: "Toys", img: "/images/product/image2.png" },
      { name: "Grooming", img: "/images/product/image3.png" },
      { name: "Beds & Furniture", img: "/images/product/image4.png" },
    ],
  },
  {
    label: "Jewelry & Watches",
    categories: [
      { name: "Fine Jewelry", img: "/images/product/image31.png" },
      { name: "Costume Jewelry", img: "/images/product/image132.png" },
      { name: "Watches", img: "/images/product/image133.png" },
    ],
  },
  {
    label: "Digital Products",
    categories: [
      { name: "eBooks", img: "/images/product/image141.png" },
      { name: "Software", img: "/images/product/image142.png" },
      { name: "Courses", img: "/images/product/image143.png" },
      { name: "Design Assets", img: "/images/product/image144.png" },
    ],
  },
  {
    label: "Baby & Maternity",
    categories: [
      { name: "Baby Clothes", img: "/images/product/image151.png" },
      { name: "Diapers & Wipes", img: "/images/product/image152.png" },
      { name: "Nursing", img: "/images/product/image153.png" },
      { name: "Maternity", img: "/images/product/image154.png" },
    ],
  },
];

const howItWorks = [
  { title: "Discover Unique Products", desc: "Browse curated collections from Ethiopian creators.", icon: "/images/brand/brand-02.svg" },
  { title: "Create Your Orders", desc: "Add your favorite items to cart and checkout securely.", icon: "/images/brand/brand-03.svg" },
  { title: "Enjoy Secure and WorldWide Delivery", desc: "Track your order and receive it at your doorstep.", icon: "/images/brand/brand-04.svg" },
];

const reviews = [
  { name: "Alemu T.", role: "Artisan from Addis Ababa", avatar: "/images/user/user-06.jpg", text: "Thanks to Maaliifu, I now sell my handmade pottery to buyers in Europe and the US. It’s changed my business forever.", rating: 5 },
  { name: "Hana W.", role: "Jewelry Designer", avatar: "/images/user/user-07.jpg", text: "Managing my store has never been this simple. The dashboard is smooth and the Maaliifu team is so supportive.", rating: 4 },
  { name: "Kebede M.", role: "Artisan", avatar: "/images/user/user-08.jpg", text: "I sold my first wood carving overseas within days. Maaliifu made it simple.", rating: 3 },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabStart, setTabStart] = useState(0);
  const TABS_VISIBLE = 4;
  const tabListRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (dir: 'left' | 'right') => {
    if (dir === 'left' && tabStart > 0) {
      setTabStart(tabStart - 1);
    } else if (dir === 'right' && tabStart < categoryTabs.length - TABS_VISIBLE) {
      setTabStart(tabStart + 1);
    }
  };

  return (
    <div className="bg-white min-h-screen">


      {/* Hero Section - Final Version */}
      <section className="relative group w-full h-screen overflow-hidden flex items-center justify-center md:justify-start">
        {/* Background Image with Ken Burns Effect */}
        <Image
          src="/images/product/image.png"
          alt="Vibrant handmade crafts from Ethiopia"
          fill
          className="object-cover object-center z-0 transition-transform duration-[4000ms] ease-in-out group-hover:scale-105"
          priority
        />

        {/* Strong Gradient Overlay for Readability */}
        <div
          className="absolute inset-0 z-10 
               bg-gradient-to-t from-black/90 via-black/60 to-transparent 
               md:bg-gradient-to-r md:from-black/95 md:via-black/70 md:to-transparent"
        ></div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">


            <span className="block h-1 w-20 bg-yellow-400 mb-6"></span>

      <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
      DISCOVER <br />ETHIOPIA'S ARTISTRY
      </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Shop authentic handmade crafts, traditional clothing, and unique creations from passionate artisans across Ethiopia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="md" variant="primary">Shop Now</Button>
              <Button size="md" variant="outline">Become a Seller</Button>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t my-8" />

      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center text-base font-semibold mb-2">
          <span style={{ color: '#0000FF' }}>EXPLORE BY</span>{' '}
          <span style={{ color: '#FFC300' }}>CATEGORY</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">FROM HANDCRAFTED ITEMS TO <br />DIGITAL DOWNLOADS</h2>
        <div className="flex items-center justify-center mb-8 gap-2">
          <button
            className="p-2 rounded-full bg-white border shadow hover:bg-slate-100 transition disabled:opacity-40"
            onClick={() => scrollTabs('left')}
            aria-label="Scroll left"
            type="button"
            disabled={tabStart === 0}
          >
            <FaChevronLeft size={20} />
          </button>
          <div className="flex gap-2 md:gap-4">
            {categoryTabs.slice(tabStart, tabStart + TABS_VISIBLE).map((tab, idx) => {
              const realIdx = tabStart + idx;
              return (
                <button
                  key={tab.label}
                  className={`text-base font-semibold px-2 py-1 transition focus:outline-none ${activeTab === realIdx ? 'text-black font-bold border-b-2 border-[#FFC300]' : 'text-slate-600 hover:text-black'}`}
                  onClick={() => setActiveTab(realIdx)}
                  style={{ background: 'none', border: 'none' }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <button
            className="p-2 rounded-full bg-white border shadow hover:bg-slate-100 transition disabled:opacity-40"
            onClick={() => scrollTabs('right')}
            aria-label="Scroll right"
            type="button"
            disabled={tabStart >= categoryTabs.length - TABS_VISIBLE}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {categoryTabs[activeTab].categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
              className="group flex flex-col items-center text-center"
            >
              <div
                className="
            relative w-full aspect-square 
            bg-slate-100 rounded-2xl
            overflow-hidden
            transition-all duration-300 ease-in-out
            group-hover:shadow-xl group-hover:scale-105
          "
              >
                <Image
                  src={cat.img || "/images/product/image.png"}
                  alt={cat.name}
                  fill
                  className="
              object-cover 
              transition-transform duration-300 group-hover:scale-110
            "
                />
              </div>
              <span className="
          mt-4 font-semibold text-sm text-slate-700 
          transition-colors duration-300 
          group-hover:text-blue-600
        ">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full border-t my-8" />


      {/* About/Empowerment Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 max-w-7xl mx-auto border-t">
        <div className="flex-1">
          <div className="text-base font-semibold mb-2 md:text-left text-center">
            <span style={{ color: '#0000FF' }}>ABOUT</span>{' '}
            <span style={{ color: '#FFC300' }}>MAALIIFU</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">EMPOWERING <br /> ETHIOPIA&apos;S CREATIVE <br /> ECONOMY</h2>
          <p className="text-gray-600 mb-6">Maaliifu is more than an Online marketplace—it&apos;s a movement. We connect Ethiopian artisans, crafters, and small businesses to the global market, turning their creativity into sustainable livelihoods. From handmade pottery to traditional garments, every item on Maaliifu tells a story of heritage, passion, and craftsmanship.</p>
          <Button size="md" variant="primary">READ MORE</Button>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center">
          <Image src="/images/product/image4.png" alt="Artisan Product 1" width={480} height={336} className="rounded-xl object-cover shadow-lg" style={{ width: 480, height: 336 }} />
          <p className="text-gray-600 text-center mt-4" style={{ maxWidth: 480 }}>
            To foster cultural exchange and economic empowerment by providing a trustworthy e-commerce platform that elevates Ethiopian craftsmanship.
          </p>
        </div>
      </section>


      <div className="w-full border-t my-8" />

      {/* How It Works */}
      <section className="px-6 py-16 max-w-7xl mx-auto border-t">
        <div className="text-center text-base font-semibold mb-2">
          <span style={{ color: '#0000FF' }}>HOW IT</span>{' '}
          <span style={{ color: '#FFC300' }}>WORKS</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">HOW MAALIIFU CONNECTS CREATORS <br /> TO THE WORLD</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {howItWorks.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center max-w-xs w-full flex-1 min-h-[240px]">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-brand-600 text-white text-3xl font-bold shadow-lg">
                {`0${idx + 1}`}
              </div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        {/* Artisan Product Photos*/}
        <div className="flex justify-center items-end gap-10 mt-16">
          <Image src="/images/product/image1.png" alt="Artisan Product 1" width={400} height={900} className="rounded-xl object-cover shadow-lg max-w-xs w-full h-auto" />
          <Image src="/images/product/image3.png" alt="Artisan Product 2" width={500} height={1100} className="rounded-xl object-cover shadow-xl max-w-sm w-full h-auto" />
          <Image src="/images/product/image11.png" alt="Artisan Product 3" width={400} height={900} className="rounded-xl object-cover shadow-lg max-w-xs w-full h-auto" />
        </div>
      </section>


      <div className="w-full border-t my-8" />

      {/* Client Reviews */}
      <section className="px-6 py-16 max-w-7xl mx-auto border-t">
        <div className="text-center text-base font-semibold mb-2">
          <span style={{ color: '#0000FF' }}>CLIENTS</span>{' '}
          <span style={{ color: '#FFC300' }}>REVIEWS</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">WHAT THEY ARE SAYING</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center">
              <Image src={review.avatar} alt={review.name} width={56} height={56} className="rounded-full mb-3 object-cover" />
              <p className="text-gray-700 text-center mb-2">“{review.text}”</p>
              <div className="flex gap-1 mb-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} width="18" height="18" fill="#FFD700" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" /></svg>
                ))}
              </div>
              <span className="font-semibold text-sm text-brand-700">{review.name}</span>
              <div className="text-xs text-gray-500 mt-0.5">{review.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter/Stay Updated*/}
      <section className="bg-gray-900 text-white py-15 px-6 mb-0">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4">STAY UPDATED</h3>
          <p className="mb-6 text-gray-300">Get the latest on new arrivals, featured artisans, and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="Search" className="px-4 py-2 rounded-lg text-white w-full sm:w-auto bg-gray-700 placeholder-gray-300" required />
            <Button size="md" variant="primary" type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

