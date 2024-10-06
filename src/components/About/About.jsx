import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import AboutImg from '../../assets/DevFestGDGPatna.jpg';

const WhyDevFest = () => {
  const [typedText, setTypedText] = useState('');
  const devFestText = 'DevFest';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(devFestText.slice(0, index + 1));
      index++;
      if (index === devFestText.length) clearInterval(typingInterval);
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="why-devfest" className="mt-12 bg-[white] py-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center py-4">
        <h3 className="text-3xl text-black font-semibold">
          What is <span className="text-yellow-500">{typedText}</span>?
        </h3>
      </div>

      {/* Enhanced Image and Description Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto ml-5 mr-5 bg-[#F2EBDA] shadow-lg overflow-hidden p-4 md:p-8 mt-6 border-2 border-black"
      style = {{
        boxShadow: "8px 8px 0px 0px black",
      }}>
        {/* Image with Overlay */}
        <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-black"
        style = {{
          boxShadow: "4px 4px 0px 0px #F8A900",
        }}>
          <img
            src={AboutImg}
            alt="DevFest"
            className="object-cover w-full h-full opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>

        {/* Description with Divider */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-8 text-lg text-white space-y-4 ">
          <div className="border-b border-gray-700 pb-2">
            <p className="font-semibold text-2xl text-[#F8A900]">Overview</p>
          </div>
          <p className="leading-relaxed font-medium tracking-wide text-black">
            DevFest is an annual decentralized tech conference hosted by Google Developer Groups (GDG) worldwide. 
            DevFest 2024 marks the 13th year, with the 3rd edition in Patna focusing on knowledge exchange and networking opportunities for the people of Bihar!
          </p>
          <p className="leading-relaxed font-medium tracking-wide text-black">
            DevFest Patna is an initiative by GDG Patna, bringing its 3rd edition 🤩 to the people of Bihar with knowledge exchange, learning, and networking opportunities!
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center text-4xl text-black font-bold mt-10">
        What's there for you? 👀
      </div>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 mt-8">
        {[
          {
            title: "💻 Technical Content",
            description: "Gain insights from top experts and access new technologies.",
            color: "#E1432E"
          },
          {
            title: "🤝 Networking",
            description: "Meet and network with like-minded people from the tech community.",
            color: "#F6BB02"
          },
          {
            title: "🎉 Fun Activities",
            description: "Participate in fun activities and win exciting prizes.",
            color: "#49A84C"
          },
          {
            title: "🌐 Knowledge Sharing",
            description: "Learn from community-led sessions and expand your knowledge.",
            color: "#4C86F9"
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg rounded-xl p-8 transform transition-transform duration-500 hover:scale-105 border-2 border-black"
            style = {{
              boxShadow: `8px 8px 0px 0px ${feature.color}`
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.8 }}
          >
            <p className="text-[24px] font-bold"
            style = {{
              color: `${feature.color}`
            }}
            >{feature.title}
            </p>
            <p className="mt-5 text-[18px] font-medium text-black-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDevFest;