import React from 'react'
import './commingSoon.css';
import discord from '../footer/logo/discord.png'
import twitter from '../footer/logo/twitter.png'
import insta from '../footer/logo/instagram.png'
import linkedIn from '../footer/logo/linkedIn.png'
import Navbar from '../navbar/Navbar';
function ComingSoon() {
  return (
    <div className='comingSoon'>
      <Navbar />
      <div>

        <div className='comingSoonTxt' ><h1 className='blue2' style={{ fontSize: "60px" }}>Coming</h1><h1 className='white2' style={{ fontSize: "60px" }}>Soon</h1></div>

        <div className='message2'>Don't think twice to reach out and allow us to ring your doors when the launch happens</div>

        <div className='enterEmail3'><input className='email3' type='text' placeholder='Enter Your Email'></input>
          <button className='subscribe3'>Subscribe</button>
        </div>

        <div className='message4'>& Follow us for regular updates</div>

        <div className="socialLogo1">

          <div><a href="https://discord.gg/AYGQtcXb" target="_blank" rel="noreferrer"><img src={discord} alt="" /></a> </div>
          <div><a href="" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a></div>
          <div><a href="https://www.instagram.com/sugaverse_infi/" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a></div>
          <div><a href="https://www.linkedin.com/company/suga-verse" target="_blank" rel="noreferrer"><img src={linkedIn} alt="" /></a></div>

        </div>
      </div>
    </div>
  )
}

export default ComingSoon