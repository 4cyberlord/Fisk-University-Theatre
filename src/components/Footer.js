'use client';

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Grid layout that changes based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Play Title and Director */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Home</h2>
            <p className="text-gray-400">Directed by Persephone Felder Fentress</p>
          </div>

          <div className="text-center">
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

          {/* Column 3: Contact Us */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex justify-center lg:justify-end items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-gray-400" />
                <span>(615) 329-8672</span>
              </li>
              <li className="flex justify-center lg:justify-end items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                <span>pffentress@fisk.edu</span>
              </li>
              <li className="flex justify-center lg:justify-end items-center space-x-2">
                <MapPinIcon className="w-5 h-5 text-gray-400" />
                <span>998 Dr Todd Jr Blvd. Nashville, TN 37208</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Theater. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
