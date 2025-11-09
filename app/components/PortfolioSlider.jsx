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

// A mock array of image data. Replace this with your actual image data.
const images = [
  { id: 1, src: '/196A4943.JPG', alt: 'Project 1' },
  { id: 2, src: '/portrait.JPG', alt: 'Project 2' },
  { id: 3, src: '/portrait-4.JPG', alt: 'Project 3' },
  { id: 4, src: '/196A4952.JPG', alt: 'Project 4' },
  { id: 5, src: '/portrait-2.JPG', alt: 'Project 5' },
];

export default function PortfolioSlider () {
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
      // Enable autoplay
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
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
      {/* Map over your image data to render slides */}
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