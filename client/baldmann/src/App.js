import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Featured from './components/Featured';
import BCI from './components/BCI';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="featured">
        <Featured />
      </div>
      <div id="about">
        <BCI />
        <AboutUs />
        <Partners />
      </div> 
      <div id="contact">
        <ContactUs />
        <OurTeam/>
      </div>
      <Footer />
    </>
  );
}

export default App;
