'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Background Image */}
      <Image
        src="/theather.jpg"
        alt="Theater stage"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <main className="relative z-20 flex flex-col justify-center items-center h-full text-center">
        <div className="relative flex space-x-2">
          <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 drop-shadow-lg mb-6 animate-rotateIn">
            H
          </span>
          <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 drop-shadow-lg mb-6 animate-slideInFromLeft">
            O
          </span>
          <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 drop-shadow-lg mb-6 animate-slideInFromRight">
            M
          </span>
          <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 drop-shadow-lg mb-6 animate-bounceIn">
            E
          </span>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md mb-8">
          A journey of the soul, where roots run deep and the heart always returns.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row items-center">
          <a className="text-white border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 hover:border-green-400"
            href="/about">
            Learn More
          </a>
          <a className="text-white border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 hover:border-yellow-400"
            href="/tickets">
            Buy Tickets
          </a>
        </div>
      </main>
    </div>
  );
}
