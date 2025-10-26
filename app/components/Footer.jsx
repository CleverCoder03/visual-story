import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    id: 1,
    name: "Instagram",
    link: "/",
  },
  {
    id: 2,
    name: "YouTube",
    link: "/",
  },
  {
    id: 3,
    name: "Twitter",
    link: "/",
  },
  {
    id: 4,
    name: "Facebook",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="mt-15 lg:mt-20 bg-white shadow-2xl ">
      <div className="relative px-6 md:px-10 lg:px-18 xl:px-28 flex flex-col gap-8 py-10 md:flex-row md:justify-between">
        <div className="w-fit">
          <Link href="/">
            <div className="relative size-20">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </Link>
        </div>

        <div>
          <h1 className="font-serif font-semibold text-pink-600">Socials</h1>
          <div className="flex flex-col gap-2 mt-2">
            {socials.map((social) => (
              <Link key={social.id} href={social.link} className="underline w-fit">
                {social.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
            <div>
                <h1 className="font-serif font-semibold text-pink-600">Contact</h1>
                <p>+91 9136365831 / +91 7249566227</p>
            </div>
            <div>
                <h1 className="font-serif font-semibold text-pink-600">Email</h1>
                <a href="mailto:contact@visualstory.in">contact@visualstory.in</a>
            </div>
            <div>
                <h1 className="font-serif font-semibold text-pink-600">Location</h1>
                <p>Pune, Maharashtra</p>
            </div>
        </div>
      </div>
      <p className="text-center py-1.5 bg-pink-100">&copy; Visual Story. All rights reserved</p>
    </div>
  );
};

export default Footer;
