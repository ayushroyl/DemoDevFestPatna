import React from 'react'
import DeveloperLogo from '../../assets/SponsorsLogo/googleDevelopers.png';
import WebsiteLogo from '../../assets/Icons/websiteLogo.png';
import LinkedinLogo from '../../assets/Icons/linkedinLogo.svg';
import TwitterLogo from '../../assets/Icons/twitterLogo.png';



// import CodeChampLogo from '../../assets/CommunityPartners/CODECHAMP.jpg';
// import GdscBceLogo from '../../assets/CommunityPartners/GDSC_BCE.png';

export default function Partners(){
  return (
    <div id="partners" className=" w-screen pt-12 pb-12 bg-white ">
      <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Community Partners</h1>
      <p className="text-gray-500 text-center mt-3 mb-5 text-lg">Some things are simply better when together!</p>
      <div className="w-screen pl-8[20%]] flex flex-wrap justify-center ">
        <PartnersCard logo={DeveloperLogo} link="https://developers.google.com/"/>
        <PartnersCard logo={DeveloperLogo} link="https://developers.google.com/"/>
        <PartnersCard logo={DeveloperLogo} link="https://developers.google.com/"/>
        <PartnersCard logo={DeveloperLogo} link="https://developers.google.com/"/>
      </div>
    </div>
    )
} 

function PartnersCard(props) {

  return (
      <div className="ml-4 mr-4 mt-3 mb-3 p-[3px] box-border shadow-[5px, 5px 5px] shadow-black sm:h-[380px] sm:w-[310px] h-[350px] w-[270px] aspect-video bg-[#F9AA00] border-2 border-[black] rounded-lg flex flex-col justify-between	items-start	" 
        style = {{
            boxShadow: "4px 4px 0px 0px black",
        }} >
          <div className="sm:w-[300px] sm:h-[300px] w-[260px] h-[260px] bg-white border-2 border-[black] rounded-lg flex justify-center items-center	">
              <img 
              src={props.logo} 
              alt="" 
              className="w-[300px] style:"
              />
          </div>
          <div className="sm:w-[300px] sm:h-[80px] w-[260px]">
              <ul className="h-[80px] w-[100%] flex justify-evenly items-center" >
                <li className="sm:h-[60px] sm:w-[60px] h-[45px] w-[45px] bg-white p-1 rounded-full" ><a  href=""><img className='text-white' src={WebsiteLogo} alt="hey" /></a></li>
                <li className="sm:h-[60px] sm:w-[60px] h-[45px] w-[45px] bg-white p-1 rounded-full"  ><a href=""><img src={LinkedinLogo} alt="hey" /></a></li>
                <li className="sm:h-[60px] sm:w-[60px] h-[45px] w-[45px] bg-white p-1 rounded-full"  ><a href=""><img src={TwitterLogo} alt="hey" /></a></li>
              </ul>
          </div>
      </div>
  )
}
