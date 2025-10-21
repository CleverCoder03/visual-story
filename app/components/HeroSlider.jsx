// components/HeroSlider.jsx
"use client"; // This component will use client-side hooks

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

// Your list of background images
const images = [
  "/header-bg.jpg", // Make sure these paths are correct
  "/header-bg-2.jpg",
  "/header-bg-3.jpg",
  "/header-bg-4.jpg",
];

const HeroSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideInterval = 5000; // Change image every 5 seconds (5000ms)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index} // Unique key for each image
          src={src}
          alt={`Hero Background ${index + 1}`}
          fill // Makes the image fill its parent
          priority={index === 0} // Prioritize loading the first image
          className={`
            absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? "opacity-100" : "opacity-0"}
          `}
          sizes="(max-width: 768px) 100vw, 100vw" // Good for responsive image loading
        />
      ))}

      {/* Optional: Add content on top of the slider */}
      <div className="absolute inset-0 z-2 flex flex-col items-center justify-center text-amber-50 bg-black/50 bg-opacity-40 p-4 mt-20 px-6 md:px-10 lg:px-18 xl:px-28">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif leading-[1.2]">
          Crafting Your Timeless Visual Legacy.
        </h1>
        <p className="hidden lg:block text-lg md:text-xl text-center max-w-2xl">
          We don't just take pictures; we tell stories. Your story.
        </p>
        <Link href="/gallery">
            <Button title={"View Our Work"} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;