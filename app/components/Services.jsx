import React from "react";
import Headline from "./Headline";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "Weddings & Pre-Wedding",
    desc: "Capturing the grand gestures and intimate whispers of your biggest day.",
    image: "/services-1.jpg",
  },
  {
    id: 2,
    name: "Events & Parties",
    desc: "From birthdays to baby showers, we preserve the joy of every celebration.",
    image: "/services-3.jpg",
  },
  {
    id: 3,
    name: "Portraits & Fashion",
    desc: "Expressive, artistic portraiture that captures the soul of the subject.",
    image: "/services-2.jpg",
  },
  {
    id: 4,
    name: "Commercial",
    desc: "High-end photography for Products, Food, Architecture, and Interiors.",
    image: "/services-4.jpg",
  },
];

const Services = () => {
  return (
    <div className="mt-10 relative px-6 md:px-10 lg:px-18 xl:px-28">
      <Headline title={"Our Services"} />

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {services.map((service) => (
          <div key={service.id} className="w-90 overflow-hidden shadow-xl rounded-md">
            <div className="relative w-full h-60">
              <Image
                src={service.image}
                alt={service.name}
                className="object-cover"
                fill
              />
            </div>
            <div className="relative rounded-t-2xl bg-white -mt-5 py-8 px-4">
              <h1 className="font-serif text-pink-600 font-semibold text-xl">
                {service.name}
              </h1>
              <p className="mt-4">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link href="/events">
            <button className="mt-8 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer">
          More Events
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
