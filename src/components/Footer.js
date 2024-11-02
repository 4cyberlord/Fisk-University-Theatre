'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Play Info */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mt-14">Home</h2>
            <p className="text-gray-400 mt-3">Directed by: Persephone Felder Fentress</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left mt-7">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-400 transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Section */}
          <div className="text-left mt-7">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest news, offers and special announcements.
            </p>
            <div className="flex flex-col items-start space-y-4">
              <div className="relative w-full lg:w-[90%]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded-md bg-gray-800 text-gray-300 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-full lg:w-[90%] p-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you\re accepting to receive promotions.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Little Theater. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
