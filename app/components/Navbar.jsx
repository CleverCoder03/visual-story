"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Events",
    link: "/events",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="fixed z-5 w-full px-6 py-3">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <div className="relative size-20">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </Link>

          <div></div>

          <div
            className=" cursor-pointer font-sans font-bold text-xl"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Close" : "Menu"}
          </div>
        </div>
      </div>

      {toggle && (
        <div className="absolute z-4 top-0 left-0 h-full w-full bg-white flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-8 font-bold text-2xl">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
