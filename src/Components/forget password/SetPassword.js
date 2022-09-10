import React from 'react'
import './SetPassword.css'
import { NavLink } from 'react-router-dom'
function SetPassword() {
  return (
    <div className='setPasswordPage'>
        <div><img className='sugaLogoBW' src='/images/suga logo bw.svg'/></div>
        <div><img className='sugaText' src='/images/SuGa text.png'/></div>
       <NavLink to='/login'> <button className='signInBtn'>$ign In</button> </NavLink>
        <span className='password'>Set password</span>
        <input type="password" id="enterPassword" className='enterPassword'></input> <br />
        <span className='cnfrmPassword'>Confirm password</span>
        <input type="password" id="confermPassword" className='confermPassword'></input> <br />
        <button className='proceedBtn'>Proceed</button>

    </div>
  )
}

export default SetPassword