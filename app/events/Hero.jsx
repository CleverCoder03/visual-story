import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Wedding",
    link: "#wedding",
  },
  {
    id: 2,
    name: "Events",
    link: "#events",
  },
  {
    id: 3,
    name: "Interior Shoots",
    link: "#interior-shoots",
  },
  {
    id: 4,
    name: "Product & Commercials",
    link: "#product&commercials",
  },
  {
    id: 5,
    name: "Fashion & Portraits",
    link: "#fashion&portraits",
  },
];

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-black/95">
      <Image
        src="/events.jpg"
        alt="Event banner"
        className="absolute object-cover lg:object-top opacity-40"
        sizes="(max-width: 786px) 100vw, 100vw"
        fill
      />
      <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center px-6 md:px-10 lg:px-18 xl:px-28">
        <div className="mt-20 md:mt-25 lg:mt-30 xl:mt-35">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif leading-[1.2] text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-white font-sans">
            From intimate moments to grand designs, we capture the essence of
            every story.
          </p>
        </div>
        <div className="flex justify-center mt-15">
          <div className="w-90 flex gap-5 flex-wrap justify-center">
            {categories.map((category) => (
              <Link
              key={category.id}
                href={`events/${category.link}`}
                className="px-4 py-1.5 bg-[#fff] hover:bg-[#fffefc] text-black font-semibold rounded-lg shadow-lg transition duration-300 cursor-pointer text-sm"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
