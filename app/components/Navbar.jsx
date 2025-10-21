"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname()

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [toggle]);
  return (
    <>
      <div className="fixed z-5 w-full px-6 md:px-10 lg:px-18 xl:px-28 py-3 h-22 bg-white shadow-sm">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/">
            <div className="relative size-20">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </Link>

          <div className="hidden lg:flex lg:gap-6 xl:gap-10 font-sans font-medium">
            {navLinks.map((link) => (
                <Link key={link.id} href={link.link} className={`${pathName === link.link ? "underline decoration-1 underline-offset-4" : ""}`}>
                  {link.name}
                </Link>
              ))}
          </div>

          <div
            className="lg:hidden relative h-7 w-10 cursor-pointer font-sans font-bold text-xl"
            onClick={() => setToggle(!toggle)}
          >
            <div className="absolute h-full w-full top-0 left-0 [&_div]:h-1 [&_div]:bg-black/70 [&_div]:rounded-md flex flex-col justify-between ">
              <div className={`${toggle ? "rotate-45 absolute w-full h-1 top-1/2 transition-all duration-300 ease-out" :""}`}></div>
              <div className={`${toggle ? "hidden" :"block"}`}></div>
              <div className={`${toggle ? "-rotate-45 absolute w-full h-1 top-1/2 transition-all duration-300 ease-out" :""}`}></div>
            </div>
          </div>
        </div>
      </div>

        {toggle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="absolute z-4 top-0 left-0 h-dvh w-full bg-white flex justify-center items-center"
          >
            <div className="flex justify-center items-center flex-col gap-8 font-bold text-2xl">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.link} className={`${pathName === link.link ? "underline decoration-2 underline-offset-6" : ""}`} aria-label={link.name}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
    </>
  );
};

export default Navbar;
