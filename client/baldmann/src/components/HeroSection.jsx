import React from "react";
import './HeroSection.css';
import Lottie from "lottie-react";
import animationData from './wCPnd8mSYA.json';

const HeroSection = () => {
    return(
        <>
        <div className="hero-section-main">
            <div className="hero-section-text">
                <p>"Your <span>Brain</span>, <br></br>Our Interface, Limitless <span>Potential</span>" <br></br><br></br></p>
                {/* <p className="hero-section-line">Mind over Matter!</p> */}
            </div>
            <div className="hero-section-animation">
                <Lottie animationData = {animationData}/>
            </div>
            
        </div>
        </>
    );
}
export default HeroSection;