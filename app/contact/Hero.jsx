import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900">
      <Image
        src="/contact.jpg"
        alt="Contact banner"
        className="absolute object-cover lg:object-top opacity-70"
        sizes="(max-width: 786px) 100vw, 100vw"
        fill
      />
      <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center px-6 md:px-10 lg:px-18 xl:px-28">
        <div className="mt-20 md:mt-25 lg:mt-30 xl:mt-35">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif leading-[1.2] text-white">
            Let's Tell Your Story.
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-white font-sans">
            We're ready to listen. Whether you have a clear vision or just the spark of an idea, reach out, and let's start the conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
