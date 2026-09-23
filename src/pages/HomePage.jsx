import Footer from "../components/Footer.jsx";
import About from "../sections/About.jsx";
import Benefits from "../sections/Benefits.jsx";
import BrandStrip from "../sections/BrandStrip.jsx";
import Contact from "../sections/Contact.jsx";
import Hero from "../sections/Hero.jsx";
import Services from "../sections/Services.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Services />
      <About />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}
