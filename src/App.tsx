import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { MainSection } from "./components/MainSection";
import { MapSection } from "./components/MapSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { Weather } from "./components/Weather";

const App = () => (
    <div className="App">
      <div className="mx-4">
        <Navbar />
        <Weather />
        <MainSection />
        <ServicesSection />
        <TestimonialSection />
        <ContactSection />
        <MapSection />
        <FooterSection />
      </div>
    </div>
)

export default App;
