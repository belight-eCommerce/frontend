"use client";
import React, { useState } from "react";
import { logout, selectIsAuth, selectUser } from "@/store/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  ShoppingCartIcon,
  UserIcon,
  Search,
  Menu,
  X,
  LogIn,
  UserPlus,
  User, Settings, LayoutDashboard, LogOut
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleProfileClick = () => {
    console.log("Navigating to Profile...");
    // router.push("/profile");
  };

  const handleSettingsClick = () => {
    console.log("Navigating to Settings...");
    // router.push("/settings");
  };

  const handleDashboardClick = () => {
    console.log("Navigating to Dashboard...");
    // router.push("/dashboard");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900"
        >
          MAALIIFU
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search, Icons, and Auth */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-2 py-1.5 bg-gray-50">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border-none bg-transparent px-2 text-sm w-32 focus:ring-0"
            />
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Cart icon */}
          <Link
            href="/cart"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ShoppingCartIcon className="w-5 h-5 text-gray-700" />
          </Link>

          {/* Desktop Authentication Section */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <DropdownMenu>
                {/* The trigger for the dropdown. Using 'asChild' to pass the Button component directly */}
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost" // Use a ghost variant for a subtle, icon-only button
                    size="icon"    // Make it an icon-sized button
                    className="rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    {/* User icon */}
                    <User className="w-5 h-5 text-gray-700" aria-label="User menu" />
                  </Button>
                </DropdownMenuTrigger>

                {/* The content of the dropdown menu */}
                <DropdownMenuContent className="w-56" align="end"> {/* 'align="end"' positions it to the right */}
                  <DropdownMenuLabel>
                    <p>
                      My Account
                    </p>
                    <p>{`${user?.firstName || ''} ${user?.lastName}`}</p>
                    <p>{user?.email}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator /> {/* A visual separator */}

                  <DropdownMenuGroup> {/* Group related items */}
                    <DropdownMenuItem onClick={handleProfileClick}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      {/* Optional: Add a shortcut hint */}
                      {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDashboardClick}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                      {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSettingsClick}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={handleLogoutClick}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <div className="flex items-center space-x-4">
                  {/* --- Login Dropdown --- */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-blue-800 transition-colors duration-200"
                      >
                        Login
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-48" align="end">
                      <DropdownMenuLabel>Login As</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild>
                        <Link href="/signin">Customer</Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link href="/supplier/login">Seller</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* --- Sign Up Dropdown --- */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors duration-200">
                        Sign Up
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-48" align="end">
                      <DropdownMenuLabel>Sign Up As</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild>
                        <Link href="/signup">Customer</Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link href="/supplier/register">Supplier</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg flex flex-col p-6 gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                MAALIIFU
              </span>
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-800 font-medium text-lg transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-gray-200 mt-auto pt-6">
              {isAuthenticated ? (
                <Link
                  href="/account"
                  className="flex items-center text-gray-800 hover:text-blue-800 font-medium text-lg transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserIcon className="w-5 h-5 mr-3" />
                  <p>
                    My Account
                  </p>
                  <p>{user?.email}</p>
                </Link>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link
                    href="/signin"
                    className="flex items-center text-gray-800 hover:text-blue-800 font-medium text-lg transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-5 h-5 mr-3" />
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center text-gray-800 hover:text-blue-800 font-medium text-lg transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserPlus className="w-5 h-5 mr-3" />
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};