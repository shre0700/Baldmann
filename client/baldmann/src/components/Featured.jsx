import React from "react";
import './Featured.css';
import esp from './esp.jpg';
import nlp from './karthik.jpg';
import arduino from './arduino.jpg';
import ml from './ml.png';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <>
            <div className="featured-main">
                <div className="featured-title">
                    <p className="f-title">Featured Blogs</p>
                </div>
                <div className="featured-blogs">
                    <div className="featured-blog-card">
                        <img src={nlp} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">Who should upgrade to ESP32 from Arduino?</p>
                            <p className="fb-author">by Sanjana Sudersan</p>
                            <Link to="/blog/1" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="featured-blog-card">
                        <img src={arduino} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">hula-Looping with Arduino</p>
                            <p className="fb-author">by Pritha Sharma</p>
                            <Link to="/blog/3" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="featured-blog-card">
                        <img src={ml} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">Importance of Balanced Datasets in Emotion Prediction Model.</p>
                            <p className="fb-author">by Rakesh Prajapati</p>
                            <Link to="/blog/4" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="featured-blog-card">
                        <img src={esp} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">Mind the Gap: How Neurotransmitter affect brain computer interfaces</p>
                            <p className="fb-author">by Hritika Pathak</p>
                            <Link to="/blog/2" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;
