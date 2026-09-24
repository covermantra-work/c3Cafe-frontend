"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919253779999";
  const displayPhone = "092537 79999";

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#ebdcd0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with uploaded logo image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md border-2 border-[#e05326] group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo.jpg"
                alt="Chai Chowk Cafe (C3) Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#1c1917] flex items-center gap-1.5">
                Chai Chowk Cafe
                <span className="w-2 h-2 rounded-full bg-[#e05326] animate-pulse"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e05326]">
                Taste of Tradition.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#3d322c]">
            <Link href="#menu" className="hover:text-[#e05326] transition-colors">
              Menu
            </Link>
            <Link href="#franchise" className="text-[#133e3b] hover:text-[#e05326] transition-colors flex items-center gap-1.5 font-bold">
              <span>Franchise</span>
              <span className="text-[10px] bg-[#e05326]/15 text-[#e05326] border border-[#e05326]/30 px-2 py-0.5 rounded-full font-bold">
                Open
              </span>
            </Link>
            <Link href="#location" className="hover:text-[#e05326] transition-colors">
              Location & Hours
            </Link>
          </nav>

          {/* Right Action: Direct Call Button with Logo Terracotta Color */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e05326] to-[#c84318] hover:from-[#c84318] hover:to-[#b03712] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#e05326]/20 transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Now</span>
              <span className="hidden sm:inline font-semibold">({displayPhone})</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-[#3d322c] hover:text-[#e05326] hover:bg-[#ede4d8] border border-[#ebdcd0] transition-colors"
              aria-label="Toggle Navigation"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#ebdcd0] space-y-3 bg-[#faf8f5] animate-fade-in">
            <Link
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#2d2522] hover:text-[#e05326]"
            >
              Explore Menu
            </Link>
            <Link
              href="#franchise"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-bold text-[#e05326]"
            >
              Franchise Opportunities
            </Link>
            <Link
              href="#location"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#2d2522] hover:text-[#e05326]"
            >
              Location & Hours
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
