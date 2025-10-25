import Image from "next/image";
import { events } from "../constants";

const Events = () => {
  return (
    <div className="px-6 md:px-10 lg:px-18 xl:px-28">
      {events.map((event) => (
        <div
          key={event.id}
          className="border-b border-b-gray-400 py-20 lg:py-25"
        >
          <div className="text-pink-600 [&>h1]:text-3xl lg:[&>h1]:text-4xl [&>h1]:font-serif font-semibold">
            <h1>{event.title}</h1>
          </div>

          <div className="mt-5 flex flex-col gap-8">
            <div>
                <div className="relative w-90 h-110 shadow-2xl rounded-2xl overflow-hidden">
                    <Image src={event.imgSrc} alt={`Event Image of ${event.title}`} className="absolute object-cover object-top" fill />
                </div>
            </div>
            <div>
              <p className="font-sans lg:text-lg">{event.desc}</p>
              <div className="mt-5">
                <div className="text-pink-600 text-lg font-serif font-semibold">
                  <h1>{event.headline}</h1>
                </div>
                <ul className="list-disc mt-2 bg-white py-2 px-6 shadow-md rounded-md">
                  {event.services.map((service) => (
                    <li key={service.id}>{service.service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
