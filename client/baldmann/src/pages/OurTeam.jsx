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
import balaji from './balaji.jpg';
<<<<<<< HEAD
import garv from './garv.jpg';
=======
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a

const OurTeam = () => {
  return (
    <div className="our-team-main">
      <div className="our-team-title">
        <p><a href="https://www.linkedin.com/company/baldmann/posts/?feedView=all">Bald People</a></p>
      </div>

      <div className="our-team-office">
<<<<<<< HEAD
=======
        {/* <div className="office-ceo">
          
        </div> */}
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a

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
<<<<<<< HEAD
          <Cards
            imageSrc={Joshua}
            name="Joshua Williams"
            position="Head of Verse"
            linkedin="https://www.linkedin.com/in/joshuarolandwilliams/"
            size="med"
          />
          <Cards
            imageSrc={Teja}
            name="Tejashwan Gangishetty"
            position="Head of Electronics"
            linkedin="https://www.linkedin.com/in/tejashwan-gangishetty-318b9728a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            size="med"
          />
=======
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a

        </div>
        {/* Other Team Members */}
        <div className="the-bald-team">
<<<<<<< HEAD
          <div className='the-bald-t'>
          <Cards
            imageSrc={Ishaan}
            name="Ishaan Mishra"
            position="Senior ML Specialist"
=======
        
          <Cards
            imageSrc={Ishaan}
            name="Ishaan Mishra"
            position="ML Specialist"
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
            linkedin="https://www.linkedin.com/in/team-member-1"
            size="small"
          />
          <Cards
            imageSrc={khushi}
            name="Khushi Yadav"
<<<<<<< HEAD
            position="ML Trainee"
=======
            position="ML Specialist"
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
            linkedin="https://www.linkedin.com/in/khushi-yadav-34b237317/"
            size="small"
          />
          <Cards
            imageSrc={aditi}
            name="Aditi Krishnan"
<<<<<<< HEAD
            position="Senior ML Specialist"
=======
            position="ML Specialist"
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
            linkedin="https://www.linkedin.com/in/aditi-krishnan-ab509028b/"
            size="small"
          />
          <Cards
            imageSrc={mrithula}
            name="N Mrithula"
<<<<<<< HEAD
            position="Neuroscientist"
=======
            position="ML Specialist"
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
            linkedin="https://www.linkedin.com/in/mrithula-n-92199b284/"
            size="small"
          />
          <Cards
            imageSrc={naina}
            name="Nainika Pathak"
<<<<<<< HEAD
            position="ML Trainee"
            size="small"
          />
          </div>
          <div className='the-bald-t'>
=======
            position="ML Specialist"
            size="small"
          />
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
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
<<<<<<< HEAD
          
=======
          <Cards
            imageSrc={Joshua}
            name="Joshua Williams"
            position="Game Developer"
            linkedin="https://www.linkedin.com/in/joshuarolandwilliams/"
            size="small"
          />
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
          <Cards
            imageSrc={Anisha}
            name="Anisha Plawat"
            position="Game Developer"
            linkedin="https://www.linkedin.com/in/anisha-plawat-19b693259/"
            size="small"
          />
          <Cards
            imageSrc={balaji}
            name="Arjun Balaji"
            position="Cyber Security Analyst"
            size="small"
          />
          <Cards
            imageSrc={Pritha}
            name="Pritha Sharma"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/prithasharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            size="small"
          />
<<<<<<< HEAD
          </div>
          <div className='the-bald-t'>
=======
          <Cards
            imageSrc={Teja}
            name="Tejashwan Gangishetty"
            position="Robotics Engineer"
            linkedin="https://www.linkedin.com/in/tejashwan-gangishetty-318b9728a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            size="small"
          />
          
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
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
<<<<<<< HEAD
            position="Blogger"
=======
            position="Neuroscientist"
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
            linkedin="https://www.linkedin.com/in/simrat-kaur-8a4017332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
            linkedin="https://www.linkedin.com/in/atmajo-thakurta-b58a09277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            size="small"
          />
          <Cards
            imageSrc={niki}
            name="Nikhilesh puri"
            position="Neuroscientist"
            linkedin="https://www.linkedin.com/in/nikhilesh-puri-b7a3542a8/"
            size="small"
          />
<<<<<<< HEAD
          </div>
          <div className='the-bald-t'>
          <Cards
=======
         <Cards
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
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
            linkedin="https://www.linkedin.com/in/sanchitha-v-5898b7225/"
            size="small"
          />
<<<<<<< HEAD
          <Cards
            imageSrc={garv}
            name="Garv Bansal"
            position="AR/VR Dev"
            linkedin="#"
            size="small"
          />
          </div>
=======
          

>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
<<<<<<< HEAD



=======
>>>>>>> 9aab31cc7eb1d3254cf883195f3efd249361518a
