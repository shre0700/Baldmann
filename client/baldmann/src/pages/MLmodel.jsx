import React from "react";
import './MLmodel.css';
import Lottie from "lottie-react";
import mlAnimation from './ml_animation.json';

const MLmodel = () => {
    return(
        <>
<<<<<<< HEAD
        <p className="title-main">Upcoming</p>
=======
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
        <div className="model-main">
            <div className="model-div">
                <p className="model-title">Machine Learning Models</p>
                <Lottie animationData={mlAnimation} className='ml-animation'/>
            </div>
        </div>
        </>
    );
};

export default MLmodel;