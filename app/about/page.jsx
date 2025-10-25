import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Philosohpy from "./Philosohpy";
import Approach from "./Approach";
import Choose from "./Choose";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-6 md:px-10 lg:px-18 xl:px-28">
        {/* OUR PHILOSOPHY  */}
        <Philosohpy />
        {/* OUR APPROACH */}
        <Approach />
        {/* WHY CHOOSE US? */}
        <Choose />
      </div>
      {/* GALLERY PAGE */}
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutPage;
