import React from 'react'
import Headline from './Headline'
import { Carousel } from './Carousel'

const Portfolio = () => {
  return (
    <div className='mt-10'>
        <Headline title={"Our Portfolio"} />
        <Carousel />
    </div>
  )
}

export default Portfolio