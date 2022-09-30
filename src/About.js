import React from 'react'
import "./About.css";
import Header from './component/Header';
import Profile from './component/Profile';

function About() {
  return (
    <>

        <Header/>
        <div className='about'>
          <h3>MEET TEAM</h3>
          <img src='coletDRK.png' alt='logo'/>


          <div className='profile__cardd' >
            <div id='boi1' className='ccard'>
            <Profile
              pfp="pfp.png"
              name="Siddhant Patel"
              reg_no="21BCE10511"
              linkedIn="https://www.linkedin.com/in/siddhantt10/"
              gitHub="https://github.com/siddhantt10"
              gmail="siddhant.patel2021@vitbhopal.ac.in"
            />
            </div>
            <div id='boi2' className='ccard'>
            <Profile
              pfp="pfp.png"
              name="Shashwat Malewar"
              reg_no="21BCE10320"
              linkedIn="https://www.linkedin.com/in/siddhantt10/"
              gitHub="https://github.com/shashwatM33"
              gmail="shashwat.malewar2021@vitbhopal.ac.in"
            />
            </div>
            <div id='boi3' className='ccard'>
            <Profile
              pfp="pfp.png"
              name="Sonu Alex Antony"
              reg_no="21BCE10221"
              linkedIn="https://www.linkedin.com/in/sonu-antony-b737b821b"
              gitHub="https://github.com/SonuAlex"
              gmail="sonu.antony2021@vitbhopal.ac.in"
            />
            </div>
            <div id='boi4' className='cardd'>
            <Profile
              pfp="pfp.png"
              name="Akash Sinha"
              reg_no="21BCE10271"
              linkedIn="ttps://www.linkedin.com/mwlite/in/akash-sinha-7512a6252"
              gitHub="https://github.com/Aka-ash"
              gmail="akash.sinha0720@gmail.com"
            />
            </div>
            <div id='boi5' className='ccard'>
            <Profile
              pfp="pfp.png"
              name="Anant Krishna"
              reg_no="21BCE10083"
              linkedIn="https://www.linkedin.com/in/anant-krishna-429a12222"
              gitHub="https://github.com/AnantK21"
              gmail="anant.krishna2021@vitbhopal.ac.in"
            />
            </div>
          </div>
        </div>
        
    </>
  )
}

export default About;