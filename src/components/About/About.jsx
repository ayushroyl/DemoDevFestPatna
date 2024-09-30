import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="why-DevFest" className="pt-12 m-0.5">
      <div className="m-4">
        <h3 className="text-3xl font-extrabold dark:text-white mx-5 text-center">What is DevFest?</h3>
      </div>
      <div className="md:flex p-3">
        <div className="flex md:w-2/3 justify-center p-3 my-4 mx-2">
          <img
            src="/assets/DevFestGDGPatna.55c1a548.jpg"
            alt="DevFest"
            className="rounded object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-3 my-4 mx-2 text-lg">
          <p>
            DevFest is an annual decentralized tech conference hosted by Google Developer Groups (GDG) around the globe. 
            DevFest 2024 marks the 13th year, with the 3rd edition in Patna focusing on knowledge exchange and networking opportunities for the people of Bihar!
          </p>
        </div>
      </div>
      <div className="grid place-items-center text-4xl text-white">What's there for you? 👀</div>
      <div className="md:flex p-3">
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

