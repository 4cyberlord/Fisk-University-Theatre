'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 w-full p-4 bg-transparent z-50">
      <ul className="flex justify-center space-x-8 text-white">
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
      </ul>
    </nav>
  );
}
