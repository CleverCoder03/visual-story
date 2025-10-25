import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Events from './Events'

const EventsPage = () => {
  return (
    <div>
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* EVENTS */}
      <Events />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default EventsPage