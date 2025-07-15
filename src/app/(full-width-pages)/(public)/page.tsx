"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button"; 
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


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
const howItWorks = [ { title: "Discover Unique Products", desc: "Browse curated collections from Ethiopian creators.", icon: "/images/brand/brand-02.svg" }, { title: "Create Your Orders", desc: "Add your favorite items to cart and checkout securely.", icon: "/images/brand/brand-03.svg" }, { title: "Enjoy Secure and WorldWide Delivery", desc: "Track your order and receive it at your doorstep.", icon: "/images/brand/brand-04.svg" }, ];
const reviews = [ { name: "Alemu T.", role: "Artisan from Addis Ababa", avatar: "/images/user/user-06.jpg", text: "Thanks to Maaliifu, I now sell my handmade pottery to buyers in Europe and the US. It’s changed my business forever.", rating: 5, }, { name: "Hana W.", role: "Jewelry Designer", avatar: "/images/user/user-07.jpg", text: "Managing my store has never been this simple. The dashboard is smooth and the Maaliifu team is so supportive.", rating: 4, }, { name: "Kebede M.", role: "Artisan", avatar: "/images/user/user-08.jpg", text: "I sold my first wood carving overseas within days. Maaliifu made it simple.", rating: 3, }, ];

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

export default function HomePage() {
  const [[activeTab, direction], setPage] = useState([0, 0]);

  // State and Ref for the category photo scroller
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

 
  const howItWorksScrollRef = useRef<HTMLDivElement>(null);
  const [howItWorksScrollState, setHowItWorksScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

  const paginate = (newDirection: number) => {
    setPage((prevPage) => {
      const newPage = (prevPage[0] + newDirection + categoryTabs.length) % categoryTabs.length;
      return [newPage, newDirection];
    });
  };

  // Function to check if scrolling is possible for categories
  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setScrollState({
        canScrollLeft: el.scrollLeft > 0,
        canScrollRight: hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
      });
    }
  };

  // Function to handle scroll button clicks for categories
  const handlePhotoScroll = (scrollDirection: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({
        left: scrollDirection === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to check scrollability for "How It Works" photos
  const checkHowItWorksScrollability = () => {
    const el = howItWorksScrollRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setHowItWorksScrollState({
        canScrollLeft: el.scrollLeft > 0,
        canScrollRight: hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
      });
    }
  };

  // Function to handle scroll for "How It Works" photos
  const handleHowItWorksScroll = (scrollDirection: "left" | "right") => {
    const el = howItWorksScrollRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({
        left: scrollDirection === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const timer = setTimeout(() => checkScrollability(), 100);
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        clearTimeout(timer);
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [activeTab]);


  useEffect(() => {
    const el = howItWorksScrollRef.current;
    if (el) {
      const timer = setTimeout(() => checkHowItWorksScrollability(), 100);
      el.addEventListener('scroll', checkHowItWorksScrollability);
      window.addEventListener('resize', checkHowItWorksScrollability);
      return () => {
        clearTimeout(timer);
        el.removeEventListener('scroll', checkHowItWorksScrollability);
        window.removeEventListener('resize', checkHowItWorksScrollability);
      };
    }
  }, []);


  return (
    <main className="bg-white min-h-screen w-full">
      {/* ... (Hero Section) ... */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden group">
        <Image src="/images/product/image.png" alt="Ethiopian Artistry" fill priority className="object-cover object-center z-0 transition-transform duration-[4000ms] ease-in-out group-hover:scale-105"/>
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl md:max-w-2xl py-10 sm:py-16 md:py-24">
            <span className="block h-1 w-20 bg-yellow-400 mb-6"></span>
            <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Discover <br /> Ethiopia's Artistry</h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 text-center md:text-left max-w-lg">Shop authentic handmade crafts, traditional clothing, and unique creations from passionate artisans across Ethiopia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
              <Button size="md" variant="primary" className="w-full sm:w-auto">Shop Now</Button>
              <Button size="md" variant="outline" className="w-full sm:w-auto">Become a Seller</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t my-8" />
      
      
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-base font-semibold">
              <span className="text-blue-600">EXPLORE BY</span>{" "}
              <span className="text-yellow-400">CATEGORY</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              FROM HANDCRAFTED ITEMS TO <br className="hidden sm:block" /> DIGITAL DOWNLOADS
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4 w-full max-w-lg mx-auto mb-12">
            <button
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
              onClick={() => paginate(-1)}
              aria-label="Previous category"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <div className="relative flex-1 h-14 overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeTab}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="px-6 py-3 text-base md:text-lg font-semibold rounded-full bg-yellow-400 text-black shadow-md whitespace-nowrap">
                    {categoryTabs[activeTab].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              className="p-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
              onClick={() => paginate(1)}
              aria-label="Next category"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
          
          <div className="relative">
            <button
              onClick={() => handlePhotoScroll('left')}
              className={`absolute top-1/2 -left-4 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-opacity duration-300 hover:bg-white
                ${scrollState.canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scroll-smooth py-2 -mx-2 px-2 gap-4 md:gap-6 scrollbar-hide"
            >
              {categoryTabs[activeTab].categories.map((cat) => (
                <div key={cat.name} className="flex-shrink-0 w-2/5 sm:w-1/4 md:w-1/5">
                  <Link
                    href={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                    className="group block overflow-hidden rounded-2xl relative"
                  >
                    <div className="aspect-[3/4] bg-gray-200 relative">
                      <Image
                        src={cat.img}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 768px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition duration-300" />
                      <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm sm:text-base group-hover:-translate-y-1 transition-transform">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <button
              onClick={() => handlePhotoScroll('right')}
              className={`absolute top-1/2 -right-4 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-opacity duration-300 hover:bg-white
                ${scrollState.canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </section>
      
    
      <div className="w-full border-t my-8" />
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-16 max-w-7xl mx-auto border-t">
        <div className="flex-1">
          <div className="text-base font-semibold mb-2 md:text-left text-center">
            <span style={{ color: '#0000FF' }}>ABOUT</span>{' '}
            <span style={{ color: '#FFC300' }}>MAALIIFU</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">EMPOWERING <br /> ETHIOPIA'S CREATIVE <br /> ECONOMY</h2>
          <p className="text-gray-600 mb-6">Maaliifu is more than an Online marketplace—it's a movement. We connect Ethiopian artisans, crafters, and small businesses to the global market, turning their creativity into sustainable livelihoods. From handmade pottery to traditional garments, every item on Maaliifu tells a story of heritage, passion, and craftsmanship.</p>
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

      
      <section className="px-6 py-16 max-w-7xl mx-auto border-t">
        <div className="text-center text-base font-semibold mb-2">
          <span style={{ color: '#0000FF' }}>HOW IT</span>{' '}
          <span style={{ color: '#FFC300' }}>WORKS</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">HOW MAALIIFU CONNECTS CREATORS <br /> TO THE WORLD</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {howItWorks.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center max-w-xs w-full flex-1 min-h-[240px]">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-3xl font-bold shadow-lg">
                {`0${idx + 1}`}
              </div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        
        
        <div className="relative mt-16">
            <button
              onClick={() => handleHowItWorksScroll('left')}
              className={`absolute top-1/2 -left-4 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-opacity duration-300 hover:bg-white
                ${howItWorksScrollState.canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            
            <div
              ref={howItWorksScrollRef}
              className="flex justify-center items-end gap-6 sm:gap-8 md:gap-10 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-2 -mx-2"
            >
              <div className="group transition-all flex-shrink-0 sm:mt-10">
                <Image src="/images/product/image1.png" alt="Artisan Product 1" width={320} height={400} className="rounded-xl object-cover shadow-lg w-full max-w-[180px] sm:max-w-[140px] md:max-w-[240px] aspect-[4/5] h-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"/>
              </div>
              <div className="group transition-all flex-shrink-0 z-10">
                <Image src="/images/product/image3.png" alt="Artisan Product 2" width={500} height={650} className="rounded-xl object-cover shadow-2xl w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] aspect-[4/5] h-auto transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"/>
              </div>
              <div className="group transition-all flex-shrink-0 sm:mt-10">
                <Image src="/images/product/image11.png" alt="Artisan Product 3" width={320} height={400} className="rounded-xl object-cover shadow-lg w-full max-w-[180px] sm:max-w-[140px] md:max-w-[240px] aspect-[4/5] h-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"/>
              </div>
            </div>

           
            <button
              onClick={() => handleHowItWorksScroll('right')}
              className={`absolute top-1/2 -right-4 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-opacity duration-300 hover:bg-white
                ${howItWorksScrollState.canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
        </div>
        
      </section>
      <div className="w-full border-t my-8" />
      <section className="px-6 py-16 max-w-7xl mx-auto border-t">
   <div className="text-center text-base font-semibold mb-2">
          <span style={{ color: '#0000FF' }}>CLIENTS</span>{' '}
          <span style={{ color: '#FFC300' }}>REVIEWS</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">WHAT THEY ARE SAYING</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center text-center">
              <Image src={review.avatar} alt={review.name} width={64} height={64} className="rounded-full mb-4 object-cover" priority={idx === 0}/>
              <p className="text-gray-700 mb-4 italic">“{review.text}”</p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} width="20" height="20" fill="#FFC107" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
                  </svg>
                ))}
              </div>
              <h5 className="font-semibold">{review.name}</h5>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          ))}
  </div>
</section>
      <div className="w-full border-t my-8" />
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">STAY UPDATED</h3>
          <p className="mb-6 text-gray-300">Get the latest on new arrivals, featured artisans, and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg text-white w-full sm:w-auto bg-gray-700 placeholder-gray-300" required/>
            <Button size="md" variant="primary" type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
}