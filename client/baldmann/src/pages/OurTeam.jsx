// src/components/OurTeam.jsx
import React from 'react';
import Cards from './Cards.jsx';
import './OurTeam.css';
import ceo from './ceo.jpg';
import cmo from './cmo.jpg';
import coo from './coo.jpg';
import cto from './cto.jpg';

import Ishaan from './ishaan.jpg';
import Kaarthik from './karthik.jpg';
import Dhiyanesh from './Dhiyanesh.jpg';
import Harshith from './harshith.jpg';
import Pritha from './Pritha.jpg';
import Hritika from './hrithika.jpg';
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
import pfp from './prof.png';

const OurTeam = () => {
  return (
    <div className="our-team-main">
      <div className="our-team-title">
        <p>Bald People</p>
      </div>

      <div className="our-team-office">
        {/* <p className='the-office-title'>The Office</p> */}
        <div className="office-ceo">
          <Cards
            imageSrc={ceo}
            name="Ketan Chouhan"
            position="CEO"
            linkedin="https://www.linkedin.com/in/ketan-chouhan-47020826b/"
            size="large"
          />
        </div>

        {/* Office Members (CMO, CTO, COO) */}
        <div className="office">
          <Cards
            imageSrc={cmo}
            name="Sachita Krishnamurthy"
            position="COO"
            linkedin="https://www.linkedin.com/in/sachitakrishnamurthy/"
            size="medium"
          />
          <Cards
            imageSrc={cto}
            name="Akshat Jain"
            position="CTO"
            linkedin="https://www.linkedin.com/in/akshat-jain-362262275/"
            size="medium"
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
            {/* <p className='the-heads-title'>Head of Departments</p> */}
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
            imageSrc={Hritika}
            name="Hritika Pathak"
            position="Head of NeuroScience"
            linkedin="https://www.linkedin.com/in/hritika-pathak-b9b7342aa/"
            size="med"
          />
          <Cards
            imageSrc={Vrisha}
            name="Vrisha Parikh"
            position="Head of Drone Technology"
            linkedin="https://www.linkedin.com/in/vrisha-parikh-7241b726b/"
            size="med"
          />

        </div>
        {/* Other Team Members */}
        <div className="the-bald-team">
        
          <Cards
            imageSrc={Ishaan}
            name="Ishaan Mishra"
            position="Software Developer"
            linkedin="https://www.linkedin.com/in/team-member-1"
            size="small"
          />
          <Cards
            imageSrc={Kaarthik}
            name="Kaarthik M"
            position="ML Specialist"
            linkedin="https://www.linkedin.com/in/kaarthik-m-47198728a/"
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
            imageSrc={Dhiyanesh}
            name="Dhiyanesh S"
            position="NeuroScientist"
            linkedin="https://www.linkedin.com/in/dhiyanesh-srinivasan/"
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
            imageSrc={Latisha}
            name="Latisha Pinjari"
            position="App Developer"
            linkedin="https://www.linkedin.com/in/latisha-pinjari-79470328b"
            size="small"
          />
          <Cards
            imageSrc={Sanjana}
            name="Sanjana Sudersan"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/sanjana-sudarsan-5963ab31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            imageSrc={pfp}
            name="Sathish Sarathy"
            position="VLSI Specialist"
            linkedin="https://www.linkedin.com/in/sathish-sarathy-06357a275/"
            size="small"
          />

          <Cards
            imageSrc={pfp}
            name="Simrat Kaur"
            position="Neuroscientist"
            linkedin="#"
            size="small"
          />

          <Cards
            imageSrc={sree}
            name="Sreelekshmi T U"
            position="Neuroscientist"
            linkedin="#"
            size="small"
          />

          <Cards
            imageSrc={nain}
            name="Nainika Anish"
            position="Drone Engineering"
            linkedin="#"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
