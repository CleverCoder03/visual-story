import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Gallery from './Gallery'

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* GALLERY */}
      <Gallery />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default GalleryPage