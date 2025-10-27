import Image from "next/image";
import React from "react";

const Approach = () => {
  return (
    <div className="lg:py-10 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-10">
      <div className="flex justify-center">
        <div className="overflow-hidden relative w-90 h-80 lg:h-110 shadow-2xl rounded-md">
          <Image
            src="/approach.jpg"
            alt="Approach"
            className="object-cover"
            fill
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-0 lg:max-w-2xl">
        <div className="text-brand-black-og text-center [&>h1]:text-3xl lg:[&>h1]:text-4xl [&>h1]:font-serif font-semibold">
          <h1>Our Approach</h1>
          <p>Cinematic & Personal</p>
        </div>
        <p className="mt-5 text-center font-sans lg:text-lg text-brand-black-og/80">
          Our style is a fusion of documentary realism and cinematic beauty. We
          immerse ourselves in your world to understand the nuances that make
          your story unique. This allows us to anticipate moments before they
          happen, capturing the raw emotion and subtle elegance that define you.
          Working as a team allows us to capture your story from multiple
          perspectives, ensuring no moment is missed.
        </p>
      </div>
    </div>
  );
};

export default Approach;
