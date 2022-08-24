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
import ourTeamBG from './ourTeam bg.svg'

function OurTeam() {
  return (
    <>
      <div className='ourTeamContainer'>
        <div className='pNavbar1'>
          <Navbar />
        </div>
        {/* < div className='ourTeamBG2' /> */}
        <div className='ourTeam1'>
          <h2 className='ourTeamTxt1'>OurTeam</h2>
          <div className='teamDetail1'>
            <div className='teamCard'>
              <div><img src={devesh} alt="misiing" /></div>
              <h2 className='memberName1'>Devesh Kapoor</h2>
              <h3 className='memberPosition1'>CEO</h3>
            </div>
            <div className='teamCard'>
              <div><img src={pranshu} alt="misiing" /></div>
              <h2 className='memberName1'>Pranshu Katiyar</h2>
              <h3 className='memberPosition1'>CFO</h3>
            </div>
            <div className='teamCard'>
              <div><img src={muskan} alt="misiing" /></div>
              <h2 className='memberName1'>Muskan Garg</h2>
              <h3 className='memberPosition1'>CPO</h3>
            </div>
            <div className='teamCard'>
              <div><img src={bharani} alt="misiing" /></div>
              <h2 className='memberName1'>Yash H. Bharani</h2>
              <h3 className='memberPosition1'>VP of Design</h3>
            </div>
            <div className='teamCard'>
              <div><img src={bhunesh} alt="misiing" /></div>
              <h2 className='memberName1'>Bhunesh Gepal</h2>
              <h3 className='memberPosition1'>VP of Technology</h3>
            </div>
            <div className='teamCard'>
              <div><img src={Rohan} alt="misiing" /></div>
              <h2 className='memberName1'>Rohan Kumar</h2>
              <h3 className='memberPosition1'>VP of Marketing</h3>
            </div>
            <div className='teamCard'>
              <div><img src={kunal} alt="misiing" /></div>
              <h2 className='memberName1'>Kunal Dalotra</h2>
              <h3 className='memberPosition1'>Sr. Designer</h3>
            </div><div className='teamCard'>
              <div><img src={Tejveer} alt="misiing" /></div>
              <h2 className='memberName1'>Tejveer Singh</h2>
              <h3 className='memberPosition1'>Sr. SDE</h3>
            </div>
            <div className='teamCard'>
              <div><img src={umang} alt="misiing" /></div>
              <h2 className='memberName1'>Umang Paradkar</h2>
              <h3 className='memberPosition1'>Sr. Designer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam