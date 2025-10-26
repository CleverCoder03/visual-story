"use client"
import Image from "next/image";
import {motion} from "motion/react"
import { events } from "../constants";
import Link from "next/link";
import Button from "../components/Button";

const Events = () => {
  return (
    <div className="px-6 md:px-10 lg:px-18 xl:px-28">
      {events.map((event) => (
        <motion.div
        initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
          id={event.alt}
          key={event.id}
          className="border-b border-b-gray-400 py-20 lg:py-25"
        >
          <div className="text-pink-600 [&>h1]:text-3xl lg:[&>h1]:text-4xl [&>h1]:font-serif font-semibold lg:text-center">
            <h1>{event.title}</h1>
          </div>

          <div className="mt-5 lg:mt-15 flex flex-col lg:justify-center lg:flex-row lg:items-end gap-8 lg:gap-12">
            <div>
                <div className="relative w-90 h-110 lg:h-130 lg:w-120 shadow-2xl rounded-2xl overflow-hidden">
                    <Image src={event.imgSrc} alt={`Event Image of ${event.title}`} className="absolute object-cover object-top" fill />
                </div>
            </div>
            <div className="lg:max-w-110 lg:pb-5">
              <p className="font-sans lg:text-lg">{event.desc}</p>
              <div className="mt-5">
                <div className="text-pink-600 text-lg font-serif font-semibold">
                  <h1>{event.headline}</h1>
                </div>
                <ul className="list-disc mt-2 bg-white py-2 px-6 shadow-md rounded-md lg:space-y-2">
                  {event.services.map((service) => (
                    <li key={service.id}>{service.service}</li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button title={"Book now"} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Events;
