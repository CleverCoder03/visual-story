import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative h-screen w-full bg-gray-900'>
        <Image src="/gallery.jpg" alt='about banner' className='absolute object-cover lg:object-top opacity-60' sizes='(max-width: 786px) 100vw, 100vw' fill />
        <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center px-6 md:px-10 lg:px-18 xl:px-28'>
            <div className='mt-20'>
                <h1 className='text-4xl md:text-6xl font-bold text-center mb-4 font-serif leading-[1.2] text-white lg:w-200'>
                    A Curated Collection of Our Visual Stories
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Hero