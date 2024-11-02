'use client';

import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when route changes
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo / Home Link */}
          <div className="font-bold text-lg">
            <Link href="/" onClick={handleLinkClick}>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg hover:drop-shadow-2xl transition duration-300">
                Home
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 dark:text-white focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-6 items-center">
            <li>
              <Link href="/gallery" className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/poster" className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300">
                Poster
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/join">
                <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-full transition duration-300">
                  Join Us
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white dark:bg-black shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          style={{
            top: '100%',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-1rem)',
          }}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link 
                href="/gallery" 
                className="block text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/poster" 
                className="block text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300"
                onClick={handleLinkClick}
              >
                Poster
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition duration-300"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/join" onClick={handleLinkClick}>
                <span className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-full transition duration-300 text-center">
                  Join Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
