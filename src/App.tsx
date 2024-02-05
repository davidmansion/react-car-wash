import { useEffect } from "react";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { GallerySection } from "./components/GallerySection";
import { MainSection } from "./components/MainSection";
import { MapSection } from "./components/MapSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { Weather } from "./components/Weather";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Weather />
      <MainSection />
      <ServicesSection />
      <TestimonialSection />
      <GallerySection />
      <ContactSection />
      //<MapSection />
      <FooterSection />
    </div>
  )
}

export default App;
