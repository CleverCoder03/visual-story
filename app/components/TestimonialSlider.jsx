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
      "They didn’t just take photos, they told our love story. Every picture felt alive, capturing emotions, laughter, and unforgettable moments beautifully.",
    client: "Priya & Rohan Mehta",
    category: "Wedding Couple",
  },
  {
    id: 2,
    review:
      "A Visual Story turns events into timeless memories. Their seamless presence and stunning storytelling make every moment shine with beauty and meaning.",
    client: "Simran Arora",
    category: "Event Curator, Radiant Affairs",
  },
  {
    id: 3,
    review:
      "They understood our vision perfectly. Every photo carried warmth and emotion, turning our wedding chaos into a breathtaking visual masterpiece.",
    client: "Ankit & Neha Sharma",
    category: "Wedding Clients",
  },
  {
    id: 4,
    review:
      "Professional, creative, and human, they made our corporate gala feel alive. Every photo reflected our brand’s culture and vibrant spirit perfectly.",
    client: "Vivek Nair",
    category: "Marketing Head, Horizon Tech Events",
  },
  {
    id: 5,
    review:
      "Every photo made me relive the joy, laughter, and love. A Visual Story gave us the perfect gift, timeless memories.",
    client: "Sneha Kapoor",
    category: "Bride",
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
          "--swiper-pagination-color": "#222", // Your active color
        }}
      >
        {testimonials.map((testy) => (
          <SwiperSlide key={testy.id}>
            <div className="h-full w-full bg-[#fffefc] font-sans flex flex-col justify-center items-center ">
              <div className="w-full lg:w-150 bg-white shadow-md rounded-xl flex flex-col items-center py-10">
                <p className="w-90 lg:w-120 text-center text-brand-black-og/80">{testy.review}</p>
                <div className="mt-10">
                  <p>⭐⭐⭐⭐⭐</p>
                  <h2 className="text-brand-black-og font-semibold mt-2">
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
