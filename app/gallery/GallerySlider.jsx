"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// 1. REMOVE the mock 'images' array.

// 2. Accept 'images' as a prop
export default function GallerySLider ({ images }) {
  return (
    <Swiper
      // Enable infinite loop
      loop={true}
      // Enable navigation
      navigation={true}
      // Enable dynamic pagination
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      // Register the modules
      modules={[Navigation, Pagination, Autoplay]}
      className="!pb-10"
      style={{
          "--swiper-pagination-color": "#222", // Your active color
          "--swiper-navigation-color": "#ffffff"
        }}
      // Add breakpoints
      breakpoints={{
        // when window width is >= 0px (mobile)
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 768px (md)
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 1024px (lg)
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }}
    >
      {/* 3. Map over the 'images' prop you received */}
      {images.map((image) => (
        <SwiperSlide key={image.id} className='shadow-md rounded-xl overflow-hidden'>
          <div className='relative w-full h-130'>
            <Image src={image.src} alt={image.alt} className='object-cover opacity-80' fill/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};