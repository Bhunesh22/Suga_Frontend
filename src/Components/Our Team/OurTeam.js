import React from 'react'
import './OurTeam.css'
import Navbar from '../navbar/Navbar'
import muskan from './muskan image.svg'
import pranshu from './pranshu image.svg'
import devesh from './devesh image.svg'
import bharani from './yash bharani image.svg'
import bhunesh from './bhunesh image.svg'
import Rohan from './rohan image.svg'
import kunal from './kunal image.svg'
import umang from './umang image.svg'
import Tejveer from './tejveer image.svg'
import instaLogo1 from './insta logo 2.svg'
import ourTeamBG from './ourTeam bg.svg'
import discord2 from './discord logo1.svg'
import { Link } from 'react-router-dom'

function OurTeam() {
  return (
    <>
      <div className='ourTeamContainer'>
        <div className='pNavbar1'>
          <Navbar />
        </div>
        {/* < div className='ourTeamBG2' /> */}
        <div className='ourTeam1'>
          <h2 className='ourTeamTxt1'>Our Team</h2>
          <div className='teamDetail1'>
            <div className='teamCard'>
              <div><img className='image2' src={devesh} alt="Devesh Kapoor" /></div>
              <h2 className='memberName1'>Devesh Kapoor</h2>
              <div className='socialMediaDetails1'>
                <div className='instaDetails1'><a href='https://instagram.com/d_koy_e?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                  <a href='https://instagram.com/d_koy_e?igshid=YmMyMTA2M2Y='>d_koy_e</a>
                </div>
                <div className='discordDetails1'><a href='#'><img src={discord2} alt="Devesh Kapoor" /></a>
                  <a href='#'>d_koy#1795</a>
                </div>
              </div>
              {/* <h3 className='memberPosition1'>CEO</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={pranshu} alt="Pranshu Katiyar" /></div>
              <h2 className='memberName1'>Pranshu Katiyar</h2>
              <div className='instaDetails1'><a href='https://instagram.com/pranshu_whocares?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://instagram.com/pranshu_whocares?igshid=YmMyMTA2M2Y='>pranshu_whocares</a>
              </div>
              {/* <h3 className='memberPosition1'>CFO</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={muskan} alt="Muskan Garg" /></div>
              <h2 className='memberName1'>Muskan Garg</h2>
              <div className='socialMediaDetails1'>
                <div className='instaDetails1'><a href='https://www.instagram.com/muskan._.garagg/'><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                  <a href='https://www.instagram.com/muskan._.garagg/'>muskan._.garagg</a>
                </div>
                <div className='discordDetails1'><a href='#'><img src={discord2} alt="Devesh Kapoor" /></a>
                  <a href='#'>Muskan_garg#8907</a>
                </div>
              </div>
              {/* <h3 className='memberPosition1'>CPO</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={bharani} alt="Yash H. Bharani" /></div>
              <h2 className='memberName1'>Yash H. Bharani</h2>
              <div className='instaDetails1'><a href='https://instagram.com/yash.bharani?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://instagram.com/yash.bharani?igshid=YmMyMTA2M2Y='>yash.bharani</a>
              </div>
              {/* <h3 className='memberPosition1'>VP of Design</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={bhunesh} alt="Bhunesh Gepal" /></div>
              <h2 className='memberName1'>Bhunesh Gepal</h2>
              <div className='instaDetails1'><a href='https://instagram.com/__bhunesh?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://instagram.com/__bhunesh?igshid=YmMyMTA2M2Y='>__bhunesh</a>
              </div>
              {/* <h3 className='memberPosition1'>VP of Technology</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={Rohan} alt="Rohan Kumar" /></div>
              <h2 className='memberName1'>Rohan Kumar</h2>
              <div className='instaDetails1'><a href='https://instagram.com/rohan.krr?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://instagram.com/rohan.krr?igshid=YmMyMTA2M2Y='>rohan.krr</a>
              </div>
              {/* <h3 className='memberPosition1'>VP of Marketing</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={kunal} alt="Kunal Dalotra" /></div>
              <h2 className='memberName1'>Kunal Dalotra</h2>
              <div className='instaDetails1'><a href='https://instagram.com/kunal_dalotra?igshid=YmMyMTA2M2Y='><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://instagram.com/kunal_dalotra?igshid=YmMyMTA2M2Y='>kunal_dalotra</a>
              </div>
              {/* <h3 className='memberPosition1'>Sr. Designer</h3> */}
            </div><div className='teamCard'>
              <div><img className='image3' src={Tejveer} alt="Tejveer Singh" /></div>
              <h2 className='memberName1'>Tejveer Singh</h2>
              <div className='instaDetails1'><a href='https://www.instagram.com/tezzv_/'><img src={instaLogo1} alt="Devesh Kapoor" /></a>
                <a href='https://www.instagram.com/tezzv_/'>tezzv_</a>
              </div>
              {/* <h3 className='memberPosition1'>Sr. SDE</h3> */}
            </div>
            <div className='teamCard'>
              <div><img className='image2' src={umang} alt="Umang Paradkar" /></div>
              <h2 className='memberName1'>Umang Paradkar</h2>
              {/* <h3 className='memberPosition1'>Sr. Designer</h3> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam