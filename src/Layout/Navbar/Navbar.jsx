"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // ✅ Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full w-full mx-auto overflow-hidden">
      <div className="container mx-auto relative mt-2 rounded-xl overflow-hidden">
        {/* Nav */}
        <nav
          className="group shadow-lg fixed mx-auto w-full left-0 z-50 
          bg-white/10 dark:bg-black/30 backdrop-blur-xl 
          border border-white/20 rounded-xl"
        >
          {/*------------- Animate Logo ------------- */}
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 ">
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
                  onClick={toggleMenu}
                  className="relative w-8 h-4 flex flex-col justify-between items-center"
                >
                  {/* Hamburger → X animation */}
                  <span
                    className={`block h-0.5 w-6 bg-green-400 dark:bg-green-600 transform transition duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-green-400 dark:bg-green-600 transition duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-green-400 dark:bg-green-600 transform transition duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={(e) => e.target === e.currentTarget && closeMenu()}
      >
        {/* Mobile Menu bar */}
        <div
          className={`fixed inset-y-0 right-0 backdrop-blur-xl w-64 p-8 pt-24 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full "
          }`}
        >
          <nav className="space-y-4 text-stone-300">
            <a
              href="#home"
              onClick={closeMenu}
              className="block text-green-400 dark:text-green-600"
            >
              Home
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="block hover:text-green-400 dark:hover:text-green-600"
            >
              Experience
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="block hover:text-green-400 dark:hover:text-green-600"
            >
              Testimonials
            </a>
            <a
              href="#clients"
              onClick={closeMenu}
              className="block hover:text-green-400 dark:hover:text-green-600"
            >
              Clients
            </a>
            <a
              href="#fun-facts"
              onClick={closeMenu}
              className="block hover:text-green-400 dark:hover:text-green-600"
            >
              Fun Facts
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
