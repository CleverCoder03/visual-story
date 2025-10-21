import About from "./components/About";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <Services />
      <div className="h-dvh"></div>
    </>
  );
}
