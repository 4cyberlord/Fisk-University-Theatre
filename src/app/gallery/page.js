'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
  { src: "https://www.ie.edu/insights/wp-content/uploads/2020/10/Hindi-Art-for-Busniness-Leaders.jpg", width: 300, height: 300 },
  { src: "https://www.artfactory.in/public/product_pictures/CP-M191.jpg", width: 400, height: 300 },
  { src: "https://img.freepik.com/free-photo/nature-beauty-colors-meadow-daisy-blossoms-generated-by-ai_188544-10116.jpg", width: 300, height: 400 },
  { src: "https://img.artpal.com/165072/7-23-2-7-14-37-33m.jpg", width: 500, height: 300 },
  { src: "https://i.natgeofe.com/n/ffb1b220-9ad7-4f79-ab6f-d236c6d397df/08-love-and-beauty.jpg", width: 300, height: 500 },
  { src: "https://www.pastelbrush.com/49495/woman-with-scarf-and-flowers.jpg", width: 400, height: 400 },
  { src: "https://www.thoughtco.com/thmb/O2M3jC_tr3WkkqRMBBPKvU5m_zw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impulse-85150127-593ea43f5f9b58d58a0f8008.jpg", width: 450, height: 450 },
  { src: "https://trendyartideas.com/wp-content/uploads/2021/10/val-campagna-mandala.jpg", width: 350, height: 400 },
  { src: "https://scrambledeggsinglese.it/wp-content/uploads/2019/09/deanna-j-3GZlhROZIQg-unsplash-e1591267847133.jpg", width: 400, height: 500 },
  { src: "https://t3.ftcdn.net/jpg/07/25/47/86/360_F_725478693_FUIZY5dnOf5FGj9iSYIhEq9AjiVTQufc.jpg", width: 350, height: 350 },
  { src: "https://t3.ftcdn.net/jpg/08/25/06/08/360_F_825060851_j3N3ou22qq9hA781JD11POwwvRiIClMu.jpg", width: 350, height: 350 },
  { src: "https://t4.ftcdn.net/jpg/07/47/79/77/360_F_747797798_5J1ASPNtnabfV3I5xZvmni2aPk4gOrmQ.jpg", width: 350, height: 350 },
  { src: "https://img.freepik.com/premium-photo/woman39s-face-is-painted-with-bright-colors-splatters-paint_718046-17564.jpg", width: 350, height: 350 },
];

const Gallery = () => {
  const [swiperOpen, setSwiperOpen] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSwiper = (index) => {
    setSwiperIndex(index);
    setSwiperOpen(true);
    setLoading(true);
  };

  const closeSwiper = () => {
    setSwiperOpen(false);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <header className="mb-8 text-center mt-10">
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
        <p className="mt-2 text-lg text-gray-600">
           Random rehearsal and stage development images
        </p>
      </header>


      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid cursor-pointer opacity-100 transform translate-y-0 transition-all duration-500 ease-out fade-in-on-scroll"
            onClick={() => openSwiper(index)}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              layout="responsive"
            />
          </div>
        ))}
      </div>

      {swiperOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full md:w-3/4 md:h-3/4">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}

            <Swiper
              initialSlide={swiperIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-full"
              onSwiper={() => setLoading(false)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-auto h-full object-contain"
                      layout="responsive"
                      onLoadingComplete={() => setLoading(false)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={closeSwiper}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
