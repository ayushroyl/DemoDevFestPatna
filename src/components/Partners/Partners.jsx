import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import DeveloperLogo from '../../assets/SponsorsLogo/googleDevelopers.png';



import CodeChampLogo from '../../assets/CommunityPartners/CODECHAMP.jpg';
import GdscBceLogo from '../../assets/CommunityPartners/GDSC_BCE.png';

export default function Partners(){
  return (
    <div id="partners" className=" w-screen pt-12 pb-12 bg-white ">
      <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Community Partners</h1>
      <p className="text-gray-500 text-center mt-3 mb-5 text-lg">Some things are simply better when together!</p>
      <div className="w-screen pl-8[20%]] flex flex-wrap justify-center ">

        {[
          {
            "logo": `${DeveloperLogo}`,
            "link": "https://developers.google.com/"
          },
          {
            "logo": `${CodeChampLogo}`,
            "link": "https://developers.google.com/"
          },
          {
            "logo": `${GdscBceLogo}`,
            "link": "https://developers.google.com/"
          },
          {
            "logo": `${DeveloperLogo}`,
            "link": "https://developers.google.com/"
          }
        ].map((feature,index)=>(
          <div className="ml-4 mr-4 mt-3 mb-3 p-[3px] box-border shadow-[5px, 5px 5px] shadow-black sm:h-[380px] sm:w-[310px] h-[350px] w-[270px] aspect-video bg-[#F9AA00] border-2 border-[black] rounded-lg flex flex-col justify-between	items-start	" 
          style = {{
              boxShadow: "4px 4px 0px 0px black",
          }} >
            <div className="sm:w-[300px] sm:h-[300px] w-[260px] h-[260px] bg-white border-2 border-[black] rounded-lg flex justify-center items-center	overflow-hidden">
                <img 
                src={feature.logo} 
                alt="" 
                className="w-[300px] style:"
                />
            </div>
            <div className="sm:w-[300px] sm:h-[80px] w-[260px]">
                <ul className="h-[80px] w-[100%] flex justify-evenly items-center" >
                  <li className="h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center "  ><a className="bg-[#0A9D58] h-[52px] w-[52px] flex justify-center items-center rounded-full" href=""><AiOutlineGlobal className=" text-4xl text-white"/></a></li>
                  <li className="h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center "  ><a className="bg-[#1B83BA] h-[52px] w-[52px] flex justify-center items-center rounded-full" href=""><FaLinkedinIn className=" text-3xl text-white"/></a></li>
                  <li className="h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center"  ><a className="bg-[#179CF0] h-[52px] w-[52px] flex justify-center items-center rounded-full" href=""><FaTwitter className=" text-3xl text-white" /></a></li>
                </ul>
            </div>
        </div> 
        ))
        }

      </div>
    </div>
    )
} 
