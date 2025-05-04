<<<<<<< HEAD



import React, { useState } from "react";
import "./Courses.css";
import baldLearn from "../assests/bald-learn.png"; // Importing background image

const Courses = () => {
  const [showVideos, setShowVideos] = useState(false);


  const videos = [
        {
          id: 1,
          title: "Introduction to Signal processing in EEG",
          url: "#",
        },
        {
          id: 2,
          title: "Importing Data",
          url: "#",
        },
        {
          id: 3,
          title: "Regerencing and Resampling Teachniques in EEG Data Processing",
          url: "#",
        },
        {
          id: 4,
          title: "Data Visualisation and Quality Enhancement",
          url: "#",
        },
        {
          id: 5,
          title: "Fourier Analysis of EEG Data",
          url: "#"
        }
      ];

  return (
    <div className="courses-container">
      {/* Background Image */}
      <div className="background-image">
        <img src={baldLearn} alt="Learn" />
      </div>

      {/* Title */}
      <h1 className="courses-title">Courses</h1>

      {/* Course Section */}
      <div className="course-section">
        <h2 className="course-name">Signal Processing of EEG Data</h2>
        <div className="course-card" onClick={() => setShowVideos(!showVideos)}>
          <h3>Click to View Videos</h3>
        </div>
      </div>

      {/* Video Section */}
      {showVideos && (
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <video controls className="course-video">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-title">
                <span className="video-number">Video {index + 1}:</span> {video.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

=======
import React from "react";
import Lottie from "lottie-react";
import CourseAnimation from './Animation.json';
import './Courses.css';

const Courses =  () => {
    return(
        <>
        <p className="title-main">Upcoming</p>
        <div className="courses-main">
            <div className="upcoming-courses">
            <Lottie animationData={CourseAnimation} className='course-animation'/>
            <p className="coming-soon">Courses coming soon...</p>
            </div>
            
        </div>

        </>
    );
};

export default Courses;
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
