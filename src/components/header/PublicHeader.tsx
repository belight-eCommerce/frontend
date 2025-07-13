"use client";
import Link from "next/link";
// import Image from "next/image";
import React, { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16.5" cy="19" r="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 3h2l2.68 12.39A2 2 0 0 0 8.61 17h7.78a2 2 0 0 0 1.93-1.61L20 6H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900">
          MAALIIFU
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-blue-800 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Search and Icons */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-2 py-1 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none bg-transparent px-2 py-1 text-sm w-28"
            />
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 13L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          {/* Cart icon */}
          <Link href="/cart" className="ml-2 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <CartIcon className="w-5 h-5 text-gray-700" />
          </Link>
          {/* User icon */}
          <Link href="/account" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <UserIcon className="w-5 h-5 text-gray-700" />
          </Link>
          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-800"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg flex flex-col p-6 gap-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                MAALIIFU
              </Link>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-800 font-medium text-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 mt-6">
              <Link href="/cart" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                <CartIcon className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href="/account" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                <UserIcon className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex items-center border border-gray-300 rounded-full px-2 py-1 bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-none bg-transparent px-2 py-1 text-sm w-full"
                />
                <button className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M13 13L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        //header
      )}
    </header>
  );
} 