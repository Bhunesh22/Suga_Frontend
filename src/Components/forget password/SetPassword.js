import React from 'react'
import './SetPassword.css'
import sugaLogoBw2 from './suga logo bw2.svg'
import { Link } from 'react-router-dom'
function SetPassword() {
  return (
    <div className='setPasswordPage'>
      <div className='setPasswordTopFlex1'>
        <div>
          <Link to='/' ><img className='sugaLogoBw3' src={sugaLogoBw2} alt="sugalogo" /></Link>
        </div>
        <div>
          <Link to='/login'><button className='signInBtn3' >$ign in</button></Link>
        </div>
      </div>
      <div className='setPasswordDetails2'>
        <div className='setPasswordFlex3'>
          <label className='password1'>Set password</label>
          <input type="password" id="enterPassword" className='enterPassword'></input>
        </div>
        <div className='setPasswordFlex3'>
          <label className='cnfrmPassword'>Confirm password</label>
          <input type="password" id="confermPassword" className='confermPassword'></input>
        </div>
        <div><button className='proceedBtn'>Proceed</button></div>
      </div>

    </div>
  )
}

export default SetPassword