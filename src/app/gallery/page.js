'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    url: "https://lh3.googleusercontent.com/d/1boMHnKPlGLW9ncq1vvM8T1ctsD9Th_r1",
    alt: "Gallery Image 1"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1ATyEndFLRPnjlkPvr_Fnrgs4Zd011wyr",
    alt: "Gallery Image 2"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1jB3MzQfnKq72_En6N_HXR7ojAJUBOGGx",
    alt: "Gallery Image 3"
  },
  {
    url: "https://lh3.googleusercontent.com/d/11PQYkkJ-U5-d6iqTFlBQJVy-42e2J-vD",
    alt: "Gallery Image 4"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1HtLnOGuyFif58GXHSWQlCn7codk4efrq",
    alt: "Gallery Image 5"
  },
  {
    url: "https://lh3.googleusercontent.com/d/13FquVqUvT_Ho2at7T00WkuoYGa47xQSY",
    alt: "Gallery Image 6"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1S4mxyBSjJX1rnhZD4Rq2bBaiovP37KOW",
    alt: "Gallery Image 7"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1B24qDFZjKoJ2SGFbaTTqLUHlYM_3Z43y",
    alt: "Gallery Image 8"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1B5vjpDVFPSGWkG8NHRJfWFxlm2TgVZoP",
    alt: "Gallery Image 9"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1JD5XZJHLQXEfzhf4uKOi77rhDN7v_xmb",
    alt: "Gallery Image 10"
  }
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-lg"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Swiper Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImageIndex(null);
            }
          }}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full hover:bg-opacity-75 transition-opacity z-50"
            onClick={() => setSelectedImageIndex(null)}
          >
            ×
          </button>

          <div className="w-full h-full max-w-6xl mx-auto flex items-center">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              initialSlide={selectedImageIndex}
              loop={true}
              className="w-full h-[80vh]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
