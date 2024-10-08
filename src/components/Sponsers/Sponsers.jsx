import React from 'react';
import GoogleDeveloperLogo from '../../assets/SponsorsLogo/googleDevelopers.png';
import DeveloperLogo from '../../assets/SponsorsLogo/crowdsource.png';


export default function Sponsers(){
    return (
        <div id="sponsors" className=" w-screen pt-12 bg-white ">
            <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Our Sponsors</h1>
            <p className="text-gray-500 text-center mt-3 mb-5 text-lg">Thanks to our sponsors for supporting us in making DevFest 2024 spectacular.</p>
            <div className="w-screen flex flex-wrap justify-center ">
                {[
                    {
                        "logo": `${GoogleDeveloperLogo}`,
                        "link": ""
                    }
                ].map((feature, inde)=>(
                    <a href={feature.link} target="_blank" className="ml-4 mr-4 mt-3 mb-3 p-[3px] box-border shadow-[5px, 5px 5px] shadow-black w-[300px] aspect-video bg-[#F9AA00] border-2 border-[black] rounded-lg flex justify-center shadow-[10 10px 10 10px #8723895]"
                    style = {{
                        boxShadow: "3px 3px 0px 0px black",
                    }} >
                        <img 
                        src={feature.logo} 
                        alt="" 
                        className=" h-[200px] border-2 bg-white border-[black] rounded-lg"/>
                    </a>
                ))}
            </div>
        </div>
      )
  }
