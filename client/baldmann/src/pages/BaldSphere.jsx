import React from "react";
import './BaldSphere.css';
import Lottie from "lottie-react";
import brainAnimation from './sphere-animation.json';

const BaldSphere = () =>{
    return(
        <>
        <div className="sphere-main">
            <div className="sphere-div">
                <p className="sphere-title">Bald Sphere</p>
                <Lottie animationData={brainAnimation} className='sphere-animation'/>
            </div>
        </div>
        </>
    );

};

export default BaldSphere;