import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AnuragVerma from '../../assets/img/team/AnuragVerma.jpeg'
import BarkhaAgarwal from '../../assets/img/team/BarkhaAgarwal.jpeg'
import AbhimanyuYadav from '../../assets/img/team/Abhimanyu.jpg'
import BobbyKumar from '../../assets/img/team/bobby.jpg'
import VishhwajeetKumar from '../../assets/img/team/Vishwajeet.jpg'
import HarshKapoor from '../../assets/img/team/HarshKapoor.jpg'
import AmikarAnanya from '../../assets/img/team/Amikar.jpg'
import TanyaGupta from '../../assets/img/team/TanyaGupta.jpeg'
import MohammadZaidKhan from '../../assets/img/team/Zaid.jpg'
import AshishKumar from '../../assets/img/team/AshishKumar.jpg'
import AsifEkhlaque from '../../assets/img/team/Asif.jpg'
import Sakshi from '../../assets/img/team/sakshi.jpg'
import NishantKumar from '../../assets/img/team/Nishant.jpg'
import KhushbooGupta from '../../assets/img/team/Khushboo.jpg'

export default function Team() {
  return (
    <div id="team" className=" w-screen  pt-12 bg-white flex items-center flex-col">
        <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Meet Out Team</h1>
        <div className="w-screen pl-8[20%]] pt-[20px] pb-[20px] flex flex-wrap justify-center ">
            <TeamCard img={AnuragVerma} name="Anurag Verma" role="Organizer" linkedInUrl="https://www.linkedin.com/in/anuragver/" twitterUrl="https://twitter.com/anuragceg`" color="#E1432E"/>
            <TeamCard img={BarkhaAgarwal} name="Barkha Agarwal" role="Co-Organizer" linkedInUrl="" twitterUrl="" color="#E1432E"/>
        </div>
        <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Tech Team</h1>
        <div className="w-screen pl-8[20%]] pt-[20px] pb-[20px] flex flex-wrap justify-center ">
            <TeamCard img={AbhimanyuYadav} name="Abhimanyu Yadav" role="Technical Lead" linkedInUrl="" twitterUrl="" color="#F6BA04"/>
            <TeamCard img={BobbyKumar} name="Bobby Kumar" role="Technical Co-Lead" linkedInUrl="" twitterUrl="" color="#F6BA04"/>
            <TeamCard img={VishhwajeetKumar} name="Vishwajeet Kumar" role="Tech Team" linkedInUrl="" twitterUrl="" color="#F6BA04"/>
        </div>
        <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Operation Team</h1>
        <div className="w-screen pl-8[20%]] pt-[20px] pb-[20px] flex flex-wrap justify-center ">
            <TeamCard img={HarshKapoor} name="Harsh Kapoor" role="Operation Lead" linkedInUrl="" twitterUrl="" color="#49A84C"/>
            <TeamCard img={AmikarAnanya} name="Amikar Ananya" role="Operation Co-Lead" linkedInUrl="" twitterUrl="" color="#49A84C"/>
            <TeamCard img={TanyaGupta} name="Tanya Gupta" role="Operation Team" linkedInUrl="" twitterUrl="" color="#49A84C"/>
            <TeamCard img={MohammadZaidKhan} name="Mohammad Zaid Khan" role="Operation Team" linkedInUrl="" twitterUrl="" color="#49A84C"/>
            <TeamCard img={AshishKumar} name="Ashish Kumar" role="Operation Team" linkedInUrl="" twitterUrl="" color="#49A84C"/>
        </div>
        <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Design Team</h1>
        <div className="w-screen pl-8[20%]] pt-[20px] pb-[20px] flex flex-wrap justify-center ">
            <TeamCard img={AsifEkhlaque} name="Asif Ekhlaque" role="Design Lead" linkedInUrl="" twitterUrl="" color="#4C86F9"/>
            <TeamCard img={Sakshi} name="Sakhshi" role="Design Team" linkedInUrl="" twitterUrl="" color="#4C86F9"/>
            <TeamCard img={NishantKumar} name="Nishant Kumar" role="Design Team" linkedInUrl="" twitterUrl="" color="#4C86F9"/>
            <TeamCard img={KhushbooGupta} name="Khushboo Gupta" role="Design Team" linkedInUrl="" twitterUrl="" color="#4C86F9" />
        </div>
    </div>
  )
}





function TeamCard(props) {
    return (
        <div className="ml-4 mr-4 mt-3 mb-3 p-[3px] box-border shadow-[5px, 5px 5px] shadow-black h-[330px] w-[280px] aspect-video bg-[#F2EBDA] border-2 border-[black] rounded-lg flex flex-col justify-between	items-start	" 

        style = {{
              boxShadow: `6px 6px 0px 0px ${props.color}`,
          }} >
            <div className="w-[280px] h-[320px] overflow-hidden flex justify-start items-center	flex-col">
                {/* <img 
                src={props.img} 
                alt="" 
                className="w-[150px] h-[150px] rounded-full mt-[20px] border-4"
                style ={{
                    borderColor: `${props.color}`
                }}
                /> */}
                <div className=" w-[150px] h-[150px] rounded-full mt-[20px] border-4 "
                style ={{
                    borderColor: `${props.color}`,
                    backgroundImage: `URL(${props.img})`,
                    backgroundSize: "cover"
                }}>

                </div>
                <div className='w-[100%] text-center pt-[10px]pb-[10px]'>
                  <p className='text-black text-2xl font-bold pt-[5px]'>{props.name}</p>
                  <p>{props.role}</p>
                </div>
            </div>
            <div className="w-[280px] h-[80px] pl-[40px] pr-[40px]">
                <ul className="h-[100%] w-[100%] flex justify-center gap-5 items-center" >
                    {/* <li className="h-[60px] w-[60px] p-1 rounded-full"  ><a href=""><img className='bg-white rounded-full' src={GitLogo} alt="hey" /></a></li> */}
                    <li className="h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center "  ><a className="bg-[] h-[52px] w-[52px] flex justify-center items-center rounded-full" href={props.linkedInUrl}><FaLinkedinIn className=" text-3xl text-[black]"/></a></li>
                    <li className="h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center"  ><a className="bg-[] h-[52px] w-[52px] flex justify-center items-center rounded-full" href={props.twitterUrl}><FaTwitter className=" text-3xl text-[black]" /></a></li>

                </ul>
            </div>
        </div>
    )
  }