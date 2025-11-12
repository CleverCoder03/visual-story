import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import PopupForm from "./components/PopupForm";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <PopupForm />
      <Footer />
    </>
  );
}
