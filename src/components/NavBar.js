'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="p-4 text-white">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
