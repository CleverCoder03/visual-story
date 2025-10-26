import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from './Hero'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* FORM */}
      <ContactForm />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default ContactPage