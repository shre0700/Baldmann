import React from "react";
import './Featured.css';
import esp from './esp.jpg';
import nlp from './karthik.jpg';
import arduino from './arduino.jpg';
import ml from './ml.png';
import p1a from '../pages/Picture1.png';
import sa2 from '../pages/s_a2.jpg';
import k1_a from '../assests/k1_a.jpg';
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
                        <img src={k1_a} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">Brainwaves: What Your Brain is Really Doing...</p>
                            <p className="fb-author">by Khushi Yadav</p>
                            <Link to="/blog/7" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="featured-blog-card">
                        <img src={sa2} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">The Future of Human-Computer Interaction</p>
                            <p className="fb-author">by Sanjana Sudarsan</p>
                            <Link to="/blog/6" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="featured-blog-card">
                        <img src={p1a} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">The Future of Romance: Could a BCI...</p>
                            <p className="fb-author">by Simrat Kaur</p>
                            <Link to="/blog/5" className="fb-read-link">
                                <button className="fb-read">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="featured-blog-card">
                        <img src={nlp} alt="Blog Cover" className="fb-image" />
                        <div className="fb-content">
                            <p className="fb-title">Who should upgrade to ESP32 from Arduino?</p>
                            <p className="fb-author">by Sanjana Sudarsan</p>
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
