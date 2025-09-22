"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="h-full w-full mx-auto overflow-hidden">
      <div className="container mx-auto relative mt-2 rounded-xl overflow-hidden  ">
        {/* Nav */}
        <nav
          className="group shadow-lg fixed mx-auto w-full left-0  z-50 
          bg-white/10 dark:bg-black/30 backdrop-blur-xl 
          border border-white/20 rounded-xl"
        >
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 ">
              {/*------------- Animate Logo ------------- */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="lg:text-xl md:text-lg text-sm font-bold text-cyan-100 capitalize"
                >
                  <span className="px-1 bg-lime-400 dark:bg-green-600 rounded-full animate-[ping_1.5s_linear_infinite]">
                    S
                  </span>
                  <span className="px-1 bg-green-400 dark:bg-red-600 rounded-full animate-[ping_2s_linear_infinite]">
                    H
                  </span>
                  <span className="px-1 bg-green-400 dark:bg-yellow-400 rounded-full animate-[ping_2.1s_linear_infinite]">
                    U
                  </span>
                  <span className="px-1 bg-green-400 dark:bg-sky-600 rounded-full animate-[ping_2.21s_linear_infinite]">
                    V
                  </span>
                  <span className="px-1 bg-green-400 dark:bg-orange-500 rounded-full animate-[ping_2.3s_linear_infinite]">
                    O
                  </span>
                </a>
              </div>

              {/*------------ Desktop Menu --------- */}
              <div className="hidden md:flex space-x-8 text-stone-300">
                <a href="#home" className="text-green-400 dark:text-green-600">
                  Home
                </a>
                <a
                  href="#experience"
                  className="hover:text-green-400 dark:hover:text-green-600"
                >
                  Experience
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-green-400 dark:hover:text-green-600"
                >
                  Testimonials
                </a>
                <a
                  href="#clients"
                  className="hover:text-green-400 dark:hover:text-green-600"
                >
                  Clients
                </a>
                <a
                  href="#fun-facts"
                  className="hover:text-green-400 dark:hover:text-green-600"
                >
                  Fun Facts
                </a>
              </div>

              {/*------------- Mobile Menu Button ---------- */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={openMenu}
                  className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay (Full Screen) */}
      {isOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && closeMenu()}
          className="fixed inset-0 bg-black/50 z-50"
        >
          <div className="fixed inset-y-0 right-0 backdrop-blur-xl w-54 p-8 transform transition-transform">
            <button
              onClick={closeMenu}
              className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none mb-4"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4 text-stone-300">
              <a
                href="#home"
                className="block text-green-400 dark:text-green-600"
              >
                Home
              </a>
              <a
                href="#experience"
                className="block hover:text-green-400 dark:hover:text-green-600"
              >
                Experience
              </a>
              <a
                href="#testimonials"
                className="block hover:text-green-400 dark:hover:text-green-600"
              >
                Testimonials
              </a>
              <a
                href="#clients"
                className="block hover:text-green-400 dark:hover:text-green-600"
              >
                Clients
              </a>
              <a
                href="#fun-facts"
                className="block hover:text-green-400 dark:hover:text-green-600"
              >
                Fun Facts
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
