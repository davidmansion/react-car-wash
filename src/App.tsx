import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { MainSection } from "./components/MainSection";
import { MapSection } from "./components/MapSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

const App = () => (
    <div className="App">
      <div className="mx-4">
        <Navbar />
        <MainSection />
        <ServicesSection />
        <ContactSection />
        <MapSection />
        <FooterSection />
      </div>
    </div>
)

export default App;
