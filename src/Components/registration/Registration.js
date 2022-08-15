import React,  { useState } from 'react'
import './Registration.css';
import { useNavigate, Link} from "react-router-dom";


function Registration() {

  let navigate = useNavigate();

  
  

  return (
    <div className='registrationPage'>
    
    <Link  to="/"><img className='sugaLogoBW' src='/images/suga logo bw.svg'/></Link>
    <div><img className='sugaText' src='/images/SuGa text.png'/></div>
    <button className='back' onClick={() => navigate(-1)}>Back</button>
    
    <span className='enterEmailText'>Enter Email </span>
    <input type="text" id="userEmail" className='enterEmail' ></input> <br />
      
  
  <button className='sendInvite' id='sendInvite'>Send Invite</button>
    </div>
    
  )
}

export default Registration