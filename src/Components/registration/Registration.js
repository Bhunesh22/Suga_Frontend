import React, { useState } from 'react'
import './Registration.css';
import { useNavigate, Link } from "react-router-dom";


function Registration() {

  let navigate = useNavigate();




  return (
    <div className='registrationPage'>
      <div className='registrationTop1'>
        <div><Link to="/"><img className='sugaLogoBW' src='/images/suga logo bw.svg' /></Link></div>
        <div><img className='sugaText' src='/images/SuGa text.png' /></div>
        <div className='back1'><button className='back' onClick={() => navigate(-1)}>Back</button></div>
      </div>
      <div className='flexregistration1'>
        <span className='enterEmailText'>Enter Email </span>
        <input type="text" id="userEmail" className='enterEmail' ></input> <br />
        <button className='sendInvite' id='sendInvite'>Send Invite</button>
      </div>
    </div>
  )
}

export default Registration