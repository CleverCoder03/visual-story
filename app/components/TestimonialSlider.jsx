"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a sed ea et voluptate nisi consequatur. Aspernatur enim rerum consequuntur.",
    client: "Anisha & Rohan",
    category: "Wedding Photography",
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a sed ea et voluptate nisi consequatur. Aspernatur enim rerum consequuntur.",
    client: "Jared M.",
    category: "Corporate Headshots",
  },
  {
    id: 3,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a sed ea et voluptate nisi consequatur. Aspernatur enim rerum consequuntur.",
    client: "Leena & Priya",
    category: "Event Coverage",
  },
  {
    id: 4,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a sed ea et voluptate nisi consequatur. Aspernatur enim rerum consequuntur.",
    client: "Carlos G.",
    category: "Real Estate Photography",
  },
  {
    id: 5,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit a sed ea et voluptate nisi consequatur. Aspernatur enim rerum consequuntur.",
    client: "The Kim Family",
    category: "Family Portraits",
  },
];

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="!pb-10 !mt-5"
        style={{
          "--swiper-pagination-color": "oklch(59.2% 0.249 0.584)", // Your active color
        }}
      >
        {testimonials.map((testy) => (
          <SwiperSlide key={testy.id}>
            <div className="h-full w-full bg-amber-50 font-sans flex flex-col justify-center items-center ">
              <div className="lg:w-150 bg-white shadow-md rounded-xl flex flex-col items-center py-10">
                <p className="w-90 lg:w-120 text-center">{testy.review}</p>
                <div className="mt-10">
                  <p>⭐⭐⭐⭐⭐</p>
                  <h2 className="text-pink-600 font-semibold mt-2">
                    {testy.client}
                  </h2>
                  <p className="text-sm font-serif text-black/60">
                    {testy.category}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
