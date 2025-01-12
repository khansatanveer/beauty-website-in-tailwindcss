'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#86404a] text-white text-sm flex flex-wrap justify-between items-center py-2 px-4">
        <span className="w-full sm:w-auto flex-grow text-center">
          Extra 10% OFF On Your First Order
        </span>
      </div>

      {/* Main header */}
      <div className="bg-[#F5E5E5] flex flex-wrap justify-between items-center py-6 px-4 md:px-8">
        <div className="text-3xl sm:text-4xl font-serif flex-grow text-center sm:text-left">
          BEAUTY
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-black focus:outline-none sm:block md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        {/* Mobile Menu */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:flex gap-6 mt-4 md:mt-0 w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row gap-6 text-sm sm:text-base font-medium">
            <Link href="/Home" 
            className="relative group cursor-pointer">
              Home
              <span className="block h-[2px] w-0 bg-[#86404a] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/About" 
            className="relative group cursor-pointer">
              About
              <span className="block h-[2px] w-0 bg-[#86404a] group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/Contact" 
            className="relative group cursor-pointer">
              Contact
              <span className="block h-[2px] w-0 bg-[#86404a] group-hover:w-full transition-all"></span>
            </Link>
          </div>
        </nav>
      </div>
      <hr className="border-t-2 border-[#86404a]" />
    </header>
  );
};

export default Header;