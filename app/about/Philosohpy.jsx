import Image from "next/image";
import React from "react";

const Philosohpy = () => {
  return (
    <div className="py-15 lg:py-25 lg:flex lg:justify-center lg:items-center lg:gap-10">
      <div className="hidden lg:flex justify-center">
        <div className="overflow-hidden relative w-90 h-80 lg:h-110 shadow-2xl rounded-md">
          <Image
            src="/philosophy.jpg"
            alt="Approach"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="lg:max-w-2xl">
        <div className="text-pink-600 text-center [&>h1]:text-3xl lg:[&>h1]:text-4xl [&>h1]:font-serif font-semibold">
          <h1>Our Philosophy</h1>
          <p>Documentary Artistry</p>
        </div>
        <p className="mt-5 text-center font-sans lg:text-lg">
          At Visual Story, our work is driven by a desire to capture the
          authentic soul of a moment, transforming it into a piece of art that
          will stand the test of time. We see ourselves as visual narrators,
          blending the artistry of documentary photography with a fine-art
          sensibility. We focus on candid moments and natural light to create
          images that are both authentic and beautiful. We believe in being an
          unobtrusive presence, allowing you to be fully present in your moments
          while we take care of preserving them forever.
        </p>
      </div>
    </div>
  );
};

export default Philosohpy;
