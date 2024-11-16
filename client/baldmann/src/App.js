

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import BlogPage from './pages/BlogPage';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        {/* Home route with main sections */}
        <Route 
          path="/" 
          element={
            <>
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
                <OurTeam />
              </div>
            </>
          } 
        />
        
        {/* Individual blog pages */}
        <Route
          path="/blog/:id" element={<BlogPage />}/>

        {/* Other routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
