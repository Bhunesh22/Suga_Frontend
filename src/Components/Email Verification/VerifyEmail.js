import React from 'react'
import './VerifyEmail.css'
import VerifyLogo from './images/verify email logo2.svg'
import SugaLogoEmail from './images/suga logo email.svg'


function VerifyEmail() {
    return (
        <>
            <div className='verifyEmail1'>
                <div>
                    <div className='emailFlex3'>
                        <div><a className='sugaLogoEmail2' href='/'><img className='sugaLogoEmail1' src={SugaLogoEmail} /></a></div>
                        <div><button className='loginBtn2'>Login</button></div>
                    </div>
                    <div className='verifyBoxFlex2'>
                        <div className='verifyBox1'>
                            <div><img className='verifyLogo1' src={VerifyLogo} /></div>
                            <div className='verifyTxt1'>We have sent you a verification link </div>
                            <div className='emailName1'>email to: kunaldalotra02@gmail.com</div>
                            {/* <div><button className='clickToVerify1'>Click to verify</button></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmail
