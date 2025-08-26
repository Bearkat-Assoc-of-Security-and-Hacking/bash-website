// globals/Navbar.js

// Added this to the very top to enable client-side interactivity (useState)
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Using react-icons for the menu button

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/officers", label: "Officers" },
    { href: "/competitions", label: "Competitions" },
    { href: "/resources", label: "Resources" },
    { href: "/schedule", label: "Schedule" },
    { href: "/sponsors", label: "Sponsors" },
  ];

  return (
    <>
      <nav className="bg-transparent backdrop-blur-lg text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/bearkatpaw-nobg.png"
              alt="BASH Logo"
              width={50} // Slightly increased size for better visibility
              height={50}
            />
            <span className="text-xl md:text-2xl font-bold hidden sm:block">
              Bearkat Association of Security and Hacking
            </span>
            <span className="text-xl font-bold sm:hidden">BASH</span>
          </Link>

          {/* Desktop Links: Hidden on mobile, flex on medium screens and up */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button: Hidden on medium screens and up */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg text-white absolute top-[85px] left-0 w-full z-40">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
