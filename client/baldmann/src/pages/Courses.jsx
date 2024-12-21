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