import React from "react";
import Headline from "./Headline";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative px-6 md:px-10 lg:px-18 xl:px-28">
      <div>
        {/* <Headline title={"About us"} /> */}
        <div className="py-15 lg:py-20">
          <h1 className="text-center font-serif font-black text-pink-600 text-4xl">
            More Than Photographers, <br /> We Are Visual Narrators.
          </h1>
        </div>
        <div className="lg:flex lg:justify-center lg:gap-[10vw] lg:items-center">
          <div className="flex justify-center items-center">
            <div className="relative h-120 w-90">
              <div className="absolute top-0 h-full w-full right-0 bg-red-600 shadow-2xl rounded-md overflow-hidden">
                <Image
                  src="/about-1.jpg"
                  alt="about-2"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-center font-sans text-lg lg:max-w-90">
              At Visual Story, we believe photography is an art form a delicate
              balance of light, emotion, and narrative. Founded on the simple
              belief that every story is unique, our passion is to find that
              story and translate it into timeless, emotional imagery. We are a
              collective of artists dedicated to crafting more than just images;
              we craft visual legacies.{" "}
              <span>
                <Link
                  href="/about"
                  className="cursor-pointer text-pink-600 font-sans font-bold underline"
                >
                  Learn more
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
