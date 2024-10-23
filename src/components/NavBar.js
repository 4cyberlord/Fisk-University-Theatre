'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 w-full p-4 bg-transparent z-50 mt-3 {`${inter.variable} font-sans`}">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg hover:drop-shadow-2xl transition duration-300">
              Home
            </span>
          </Link>
        </div>

        <ul className="flex space-x-6 text-white items-center">
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
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 transition duration-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/poster" className="hover:text-gray-400 transition duration-300">
              Poster
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
    </nav>
  );
}
