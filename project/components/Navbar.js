"use client";

import { useState } from "react";
import { useCard } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCard();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          UrbanAura
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base">
          <li>
            <Link
              href="/"
              className="text-black font-bold border-b-2 border-red-500 uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-500 hover:text-black transition uppercase"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-gray-500 hover:text-black transition uppercase"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Icons & Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Search & Account (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#333333"
              className="hover:fill-red-500 transition-all"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            {/* Account */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#333333"
              className="hover:fill-red-500 transition-all"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </div>


          {/* Cart (always visible) */}
          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#333333"
              className="hover:fill-red-500 transition-all"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
            {cart.length > 0 && (
              <span className="absolute -right-3 -top-3 rounded-full bg-red-500 text-white flex items-center justify-center w-5 h-5 text-[12px] font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-between h-5 w-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white w-full px-6 py-4 shadow-md flex flex-col gap-4">
          <li>
            <Link
              href="/"
              className="text-black font-bold uppercase border-b border-gray-200 py-2 block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:text-black uppercase py-2 block"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-black uppercase py-2 block"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
