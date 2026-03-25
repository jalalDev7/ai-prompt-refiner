"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Text to Prompt", href: "#text-prompt" },
    { label: "Text to Image", href: "#text-image" },
    { label: "Text to App", href: "#text-app" },
    { label: "Examples", href: "#examples" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 border-b border-purple-500/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hidden sm:inline">
              PromptRefiner
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#login"
              className="px-4 py-2 text-gray-300 border border-purple-500/50 rounded-lg hover:border-purple-400 hover:text-purple-400 transition font-medium text-sm"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition font-medium text-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-purple-500/20 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-purple-400 transition font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-4 flex gap-2 border-t border-purple-500/20">
              <Link
                href="#login"
                className="flex-1 px-4 py-2 text-center text-gray-300 border border-purple-500/50 rounded-lg hover:border-purple-400 hover:text-purple-400 transition text-sm"
              >
                Login
              </Link>
              <Link
                href="#signup"
                className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
