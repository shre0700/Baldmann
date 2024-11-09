import React from "react";
import './Featured.css';
import esp from './esp.jpg';
import nlp from './karthik.jpg';
import arduino from './arduino.jpg';
import ml from './ml.png';
import { useState, useEffect } from 'react';

const Featured = () => {
    return(
        <>
        <div className="featured-main">
            <div className="featured-title">
                <p className="f-title">Featured Blogs</p>
            </div>
            <div className="featured-blogs">
                <div className="featured-blog-card">
                    <img src={nlp} alt="Blog Cover" className="fb-image"/>
                    <p className="fb-title">Cracking the Code: Overcoming Challenges on the Journey to Explore NLP</p>
                    <p className="fb-author">Kaarthik M</p>
                    <button className="fb-read">Read..</button>
                </div>
                <div className="featured-blog-card">
                    <img src={esp} alt="Blog Cover" className="fb-image"/>
                    <p className="fb-title">Who should upgrade to ESP32 from Arduino?</p>
                    <p className="fb-author">Sanjana Sudarsan</p>
                    <button className="fb-read">Read..</button>
                </div>
                <div className="featured-blog-card">
                    <img src={arduino} alt="Blog Cover" className="fb-image"/>
                    <p className="fb-title">hula-Looping with Arduino</p>
                    <p className="fb-author">Pritha Sharma</p>
                    <button className="fb-read">Read..</button>
                </div>
                <div className="featured-blog-card">
                    <img src={ml} alt="Blog Cover" className="fb-image"/>
                    <p className="fb-title">Importance of Balanced Datasets in Emotion Prediction Model.</p>
                    <p className="fb-author">Rakesh Prajapati</p>
                    <button className="fb-read">Read..</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Featured;


  

