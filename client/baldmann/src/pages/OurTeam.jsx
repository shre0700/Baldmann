// src/components/OurTeam.jsx
import React from 'react';
import Cards from './Cards.jsx';
import './OurTeam.css';
import ceo from './ceo.jpg';
import coo from './coo.jpg';
import cto from './cto.jpg';

import Ishaan from './ishaan.jpg';
import Dhiyanesh from './Dhiyanesh.jpg';
import Harshith from './harshith.jpg';
import Pritha from './Pritha.jpg';
import Vrisha from './vrisha.jpg';
import Teja from './Teja.jpg';
import Rakesh from './Rakesh.jpg';
import Sanjana from './sanjana.jpg';
import Latisha from './Latisha.jpg';
import Shreya from './shreya.jpg';
import Joshua from './Joshua.jpg';
import Anisha from './Anisha.jpg';
import nain from './nain.jpg';
import sree from './sree.jpg';
import sathish from './sathish.jpg';
import simrat from './simrat.jpg';
import khushi from './khushi.jpg';
import aditi from './Aditi.jpg';
import naina from './naina.jpg';
import atmajo from './atmajo.jpg';
import sanchita from './sanchita.jpg';
import mrithula from './mrithula.jpg';
import niki from './niki.jpg';

const OurTeam = () => {
  return (
    <div className="our-team-main">
      <div className="our-team-title">
        <p>Bald People</p>
      </div>

      <div className="our-team-office">
        {/* <div className="office-ceo">
          
        </div> */}

        <div className="office">
        
          <Cards
            imageSrc={cto}
            name="Akshat Jain"
            position="CTO"
            linkedin="https://www.linkedin.com/in/akshat-jain-362262275/"
            size="medium"
          />
          <Cards
            imageSrc={ceo}
            name="Ketan Chouhan"
            position="CEO"
            linkedin="https://www.linkedin.com/in/ketan-chouhan-47020826b/"
            size="large"
          />
          <Cards
            imageSrc={coo}
            name="Aditya Katoch"
            position="CMO"
            linkedin="https://www.linkedin.com/in/aditya-katoch-071b9324a/"
            size="medium"
          />
        </div>
        <div className='the-head-dep'>
        <Cards
            imageSrc={Rakesh}
            name="Rakesh Prajapati"
            position="Head of Machine Learning"
            linkedin="https://www.linkedin.com/in/team-member-2"
            size="med"
          />
        <Cards
            imageSrc={Shreya}
            name="Shreya Agarwal"
            position="Head of Development"
            linkedin="https://www.linkedin.com/in/shreya-agarwal-276bb6276/"
            size="med"
          />
          <Cards
            imageSrc={Vrisha}
            name="Vrisha Parikh"
            position="Head of Drone Technology"
            linkedin="https://www.linkedin.com/in/vrisha-parikh-7241b726b/"
            size="med"
          />
          <Cards
            imageSrc={Dhiyanesh}
            name="Dhiyanesh S"
            position="Head of Neuroscience"
            linkedin="https://www.linkedin.com/in/dhiyanesh-srinivasan/"
            size="med"
          />

        </div>
        {/* Other Team Members */}
        <div className="the-bald-team">
        
          <Cards
            imageSrc={Ishaan}
            name="Ishaan Mishra"
            position="ML Specialist"
            linkedin="https://www.linkedin.com/in/team-member-1"
            size="small"
          />
          <Cards
            imageSrc={khushi}
            name="Khushi Yadav"
            position="ML Specialist"
            size="small"
          />
          <Cards
            imageSrc={aditi}
            name="Aditi Krishnan"
            position="ML Specialist"
            size="small"
          />
          <Cards
            imageSrc={mrithula}
            name="N Mrithula"
            position="ML Specialist"
            size="small"
          />
          <Cards
            imageSrc={naina}
            name="Nainika Pathak"
            position="ML Specialist"
            size="small"
          />
          <Cards
            imageSrc={Harshith}
            name="Harshith B"
            position="App Developer"
            linkedin="https://www.linkedin.com/in/harshith-b-02396627a/"
            size="small"
          />
          <Cards
            imageSrc={Latisha}
            name="Latisha Pinjari"
            position="App Developer"
            linkedin="https://www.linkedin.com/in/latisha-pinjari-79470328b"
            size="small"
          />
          <Cards
            imageSrc={Joshua}
            name="Joshua Williams"
            position="Game Developer"
            linkedin="https://www.linkedin.com/in/joshuarolandwilliams/"
            size="small"
          />
          <Cards
            imageSrc={Anisha}
            name="Anisha Plawat"
            position="Game Developer"
            linkedin="https://www.linkedin.com/in/anisha-plawat-19b693259/"
            size="small"
          />
          <Cards
            imageSrc={Pritha}
            name="Pritha Sharma"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/prithasharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            size="small"
          />
          <Cards
            imageSrc={Teja}
            name="Tejashwan Gangishetty"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/tejashwan-gangishetty-318b9728a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            size="small"
          />
          
          <Cards
            imageSrc={Sanjana}
            name="Sanjana Sudarsan"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/sanjana-sudarsan-5963ab31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            size="small"
          />
          
          <Cards
            imageSrc={simrat}
            name="Simrat Kaur"
            position="Neuroscientist"
            size="small"
          />

          <Cards
            imageSrc={sree}
            name="Sreelekshmi T U"
            position="Neuroscientist"
            size="small"
          />
          <Cards
            imageSrc={atmajo}
            name="Atmajo Thakurta"
            position="Neuroscientist"
            size="small"
          />
          <Cards
            imageSrc={niki}
            name="Nikhilesh puri"
            position="Neuroscientist"
            size="small"
          />
         <Cards
            imageSrc={sathish}
            name="Sathish Sarathy"
            position="VLSI Specialist"
            linkedin="https://www.linkedin.com/in/sathish-sarathy-06357a275/"
            size="small"
          />

          <Cards
            imageSrc={nain}
            name="Nainika Anish"
            position="Drone Engineer"
            linkedin="https://www.linkedin.com/in/nainika-anish-74001b27a/"
            size="small"
          />
          
          <Cards
            imageSrc={sanchita}
            name="Sanchita V"
            position="Drone Engineer"
            size="small"
          />
          


        </div>
      </div>
    </div>
  );
};

export default OurTeam;
