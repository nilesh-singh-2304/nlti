import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // ✅ Fixed import

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Crash Course", href: "#crash" },
    { name: "Videos", href: "#videos" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#inquiry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isSticky ? "bg-black/60 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center text-white">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text"
        >
          CLATNLTI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black text-white px-6 pb-6"
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block py-2 border-b border-white/10"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
