import React from 'react'
import LinkedinLogo from '../../assets/Icons/linkedinLogo.svg';
import TwitterLogo from '../../assets/Icons/twitterLogo.png';
import AnishKumar from '../../assets/img/speaker/AnishKumar.jpg'

export default  function Speaker() {
  return (
    <div id="speakers" className=" w-screen bg-[red] pt-12 bg-white flex items-center flex-col">
            <h1 className="text-black text-center mt-3 mb-5 text-5xl font-bold">Speakers</h1>
            <a className="h-[50px] w-[200px] bg-[#F9AA00] text-xl font-medium border-2 border-black flex justify-center items-center"
            href='https://sessionize.com/devfest-23-patna/'
            style = {{
              boxShadow: "3px 3px 0px 0px black",
            }}>
              Call For Speakers
            </a>
            <div className="w-screen pt-[20px] flex flex-wrap justify-center item-center">
              <SpeakersCard img={AnishKumar}/>
              <SpeakersCard img={AnishKumar}/>
              <SpeakersCard img={AnishKumar}/>
              <SpeakersCard img={AnishKumar}/>
              <SpeakersCard img={AnishKumar}/>
              <SpeakersCard img={AnishKumar}/>
            </div>
        </div>
  )
}


function SpeakersCard(props) {

  return (
      <div className="ml-4 mr-4 mt-3 mb-3 p-[3px] box-border shadow-[5px, 5px 5px] shadow-black h-[400px] w-[310px] aspect-video bg-[#F2EBDA] border-2 border-[black] rounded-lg flex flex-col justify-between	items-start	" 
        style = {{
            boxShadow: "6px 6px 0px 0px #F9AA00",
        }} >
          <div className="w-[300px] h-[300px] overflow-hidden flex justify-start items-center	flex-col">
              <img 
              src={props.img} 
              alt="" 
              className="w-[150px] h-[150px] rounded-full mt-[20px] border-4 border-[#F9AA00]"
              />
              <div className='w-[100%] text-center '>
                <p className='text-black text-2xl font-bold pt-[5px]'>Anish Kumar</p>
                <p>Co-Founder of Dynopii</p>
                <p>Google Developer Expert</p>
                <p>in GCP, TEDx Speaker</p>
              </div>
          </div>
          <div className="w-[300px] h-[80px] pl-[40px] pr-[40px]">
              <ul className="h-[100%] w-[100%] flex justify-evenly items-center" >
                <li className="h-[60px] w-[60px] p-1 rounded-full"  ><a href=""><img className='bg-white rounded-full' src={LinkedinLogo} alt="hey" /></a></li>
                <li className="h-[60px] w-[60px] p-1 rounded-full"  ><a href=""><img src={TwitterLogo} alt="hey" /></a></li>
              </ul>
          </div>
      </div>
  )
}