"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Note: You must install `lucide-react` for the icons:
 * npm install lucide-react
 */

export const Carousel = ({ children, scrollAmount }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const amount = scrollAmount || clientWidth;

      const newScrollLeft =
        direction === 'left' ? scrollLeft - amount : scrollLeft + amount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="
          flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory 
          gap-4 px-4 py-4
          
          // Hide scrollbar utility classes
          [&::-webkit-scrollbar]:hidden 
          [-ms-overflow-style:'none'] 
          [scrollbar-width:'none']
        "
      >
        {children}
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="
          absolute left-0 top-1/2 -translate-y-1/2 z-10 
          p-2 bg-white/80 rounded-full shadow-md 
          hover:bg-white transition-all duration-200
          focus:outline-none -ml-2
        "
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="
          absolute right-0 top-1/2 -translate-y-1/2 z-10 
          p-2 bg-white/80 rounded-full shadow-md 
          hover:bg-white transition-all duration-200
          focus:outline-none -mr-2
        "
        aria-label="Scroll right"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>
    </div>
  );
};