

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
import Courses from './pages/Courses';
import MLmodel from './pages/MLmodel';
import BrainGame from './pages/BrainGame';
import BaldSphere from './pages/BaldSphere';
import AboutAndTeam from './pages/AboutAndTeam';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      
      <Routes>
        {/* Home route with main sections */}
        <Route 
          path="/" 
          element={
            <>
              <div id="hero">
                <HeroSection />
                <BCI />
              </div>
              <div>
                <AboutUs/>
              </div>
              {/* <div id="courses">
                <Courses/>
              </div> */}
              <div id="model">
                <MLmodel/>
              </div>
              {/* <div id="brain_game">
                <BrainGame/>
              </div> */}
              <div id="baldSphere">
                <BaldSphere/>
              </div>
              <div id="featured">
                <Featured />
              </div>
              {/* <div id="contact">
                <ContactUs />
              </div> */}
              {/* <div id="about">
                <Partners />
              </div> */}
            </>
          } 
        />
        
        <Route path="/blog/:id" element={<BlogPage />}/>

        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/partners" element={<Partners />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/team" element={<AboutAndTeam />} />
        <Route path="/learn" element={<Courses />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
