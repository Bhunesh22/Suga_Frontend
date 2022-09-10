import React, { useState } from 'react'
import './ForgetPassword.css'
import { useNavigate} from "react-router-dom";
import UserWindow from './UserWindow';

function ForgotPassword() {

    let navigate = useNavigate();

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
   
}
  return (
    <div className='forgetPassword'>
   
        <div><img className='sugaLogoBW' src='/images/suga logo bw.svg'/></div>
        <div><img className='sugaText' src='/images/SuGa text.png'/></div>
        <button className='back' onClick={() => navigate(-1)}>Back</button>
        <span className='sugaUsername'>SuGa username or email</span>
        <input type="text" id="entertUsername" className='enterUsername'></input> <br />
        <button className='shareLink' id='shareLink'>Share the link</button>
    </div>
  )
}

export default ForgotPassword