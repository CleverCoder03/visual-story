import React from 'react'
import Headline from './Headline'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div className='mt-15 lg:mt-20'>
        <Headline title={"What Our Clients Say"} />
        <div className='relative px-6 md:px-10 lg:px-18 xl:px-28'>
            <TestimonialSlider />
        </div>
    </div>
  )
}

export default Testimonial