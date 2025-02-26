
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Cards.css';

const Cards = ({ imageSrc, name, position, linkedin, size = "small" }) => {
  return (
    <div className={`card ${size}`}>
      <img src={imageSrc} alt={name} className="card-image" />
      <h3 className="card-name">{name}</h3>
      {position && <p className="card-position">{position}</p>}
      {linkedin && (
        <a href={linkedin} className="card-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      )}
    </div>
  );
};

export default Cards;


// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import "./Cards.css";

// const Cards = ({ imageSrc, name, position, linkedin }) => {
//   return (
//     <div className="card">
//       <img src={imageSrc} alt={name} className="card-image" />
//       <div className="card-overlay">
//         <h3 className="card-name">{name}</h3>
//         <p className="card-position">{position}</p>
//         {linkedin && (
//           <a
//             href={linkedin}
//             className="linkedin-icon"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;




// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import "./Cards.css";

// const Cards = ({ imageSrc, name, position, linkedin, size = "small" }) => {
//   return (
//     <div className={`card ${size}`}>
//       <img src={imageSrc} alt={name} className="card-image" />
//       <div className="card-overlay">
//         <h3 className="card-name">{name}</h3>
//         <p className="card-position">{position}</p>
//         {linkedin && (
//           <a
//             href={linkedin}
//             className="linkedin-icon"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;


