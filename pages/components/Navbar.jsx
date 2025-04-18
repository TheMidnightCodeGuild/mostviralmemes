import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-6">
      <div className="mx-auto flex items-center justify-between rounded-full bg-[#fffff0] px-6 py-4 mt-2 shadow-lg">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-yellow-900">
            MOSTVIRALMEMES
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 uppercase font-medium text-sm">
          <Link
            href="/"
            className="hover:text-yellow-900 transition-colors text-black masiku-font"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-900 transition-colors text-black masiku-font"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-900 transition-colors text-black masiku-font  "
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="hover:text-yellow-900 transition-colors text-black masiku-font"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-900 transition-colors text-black masiku-font"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-xl bg-[#F5BB47] shadow-lg overflow-hidden">
          <div className="flex flex-col space-y-3 px-6 py-4">
            <Link
              href="/"
              className="hover:text-yellow-900 transition-colors text-black"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-900 transition-colors text-black"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-yellow-900 transition-colors text-black"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:text-yellow-900 transition-colors text-black"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-900 transition-colors text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
