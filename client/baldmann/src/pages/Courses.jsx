// import React, { useState } from "react";
// import Lottie from "lottie-react";
// import CourseAnimation from "./Animation.json";
// import "./Courses.css";
// import baldLearn from "../assests/bald-learn.png"; // Importing background image


// const Courses = () => {
//   const [showVideos, setShowVideos] = useState(false);

//   const videos = [
//     require("../assests/video1.mp4"),
//     require("../assests/video2.mp4"),
//     require("../assests/video3.mp4"),
//     require("../assests/video3.mp4"),
//     require("../assests/video3.mp4")
//   ];

//   return (
//     <div className="courses-container">
//       {/* Background Image */}
//       <div className="background-image">
//         <img src={baldLearn} alt="Learn" />
//       </div>

//       {/* Title */}
//       <h1 className="courses-title">Courses</h1>

//       {/* Course Card */}
//       <div className="course-card" onClick={() => setShowVideos(!showVideos)}>
//         <h2>ABC</h2>
//       </div>

//       {/* Video Section */}
//       {showVideos && (
//         <div className="video-grid">
//           {videos.map((video, index) => (
//             <video key={index} controls className="course-video">
//               <source src={video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;


import React, { useState } from "react";
import "./Courses.css";
import baldLearn from "../assests/bald-learn.png"; // Importing background image

const Courses = () => {
  const [showVideos, setShowVideos] = useState(false);

  const videos = [
    { src: require("../assests/video1.mp4"), title: "Introduction to Signal processing in EEG" },
    { src: require("../assests/video2.mp4"), title: "Importing Data" },
    { src: require("../assests/video3.mp4"), title: "Regerencing and Resampling Teachniques in EEG Data Processing" },
    { src: require("../assests/video4.mp4"), title: "Data Visualisation and Quality Enhancement" },
    { src: require("../assests/video5.mp4"), title: "Fourier Analysis of EEG Data" }
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
        <h2 className="course-name">Course ONE - By Teja</h2>
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
