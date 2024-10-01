import React from 'react';
import AboutImg from '../../assets/DevFestGDGPatna.jpg';
const About = () => {
  return (
    <section id="why-DevFest"
    style={{
      backgroundColor: "#292929",
      
    }}
  
    className="pt-12 ">
    
      <div className="m-4">
        <h3 className="text-3xl dark:text-white mx-5 text-center">What is DevFest?</h3>
      </div>
      <div className="md:flex p-3">
        <div className="flex md:w-2/3 justify-center p-3 my-4 mx-2">
          <img
            src={AboutImg}
            alt="DevFest"
            className="rounded object-cover"
          />
        </div>
        <div className="flex place-items-center justify-center p-2 my-4 mx-2 text-lg dark:text-white">
          <p>
            DevFest is an annual decentralized tech conference hosted by Google Developer Groups (GDG) around the globe. 
            DevFest 2024 marks the 13th year, with the 3rd edition in Patna focusing on knowledge exchange and networking opportunities for the people of Bihar!
            <br /><br />
            DevFest Patna is an initiative of GDG Patna bringing in the 3rd edition 🤩 to people of Bihar with knowledge exchange,learning and networking opportunities!!"
          </p>
        </div>
      </div>
      <div className="grid place-items-center text-4xl text-white">What's there for you? 👀</div>
      <div className="md:flex p-3 dark:text-white">
        <Feature 
          title="💻 Technical Content" 
          description="Gain insights from top experts and access new technologies."
        />
        <Feature 
          title="🛠️ Workshops & Codelabs" 
          description="Hands-on coding experiences to start your tech journey."
        />
        <Feature 
          title="🌐 Networking" 
          description="Expand your network and collaborate with like-minded developers."
        />
        <Feature 
          title="🍕👕 Swags & Refreshments" 
          description="Enjoy cool goodies and a taste of Patna's culture."
        />
      </div>
    </section>
  );
};

const Feature = ({ title, description }) => (
  <div className="flex justify-center p-3 my-4 mx-2 border-green-600">
    <div>
      <p className="text-2xl">{title}</p>
      <br />
      {description}
    </div>
  </div>
);

export default About;
