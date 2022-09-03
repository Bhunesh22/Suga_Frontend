import React from 'react'
import './VerifyEmail2.css'
import Navbar from '../navbar/Navbar'
import VerifyLogo2 from './images/verify email logo2.svg'
import SugaLogoEmail from './images/suga logo email.svg'
import OkLogo from './images/ok  logo1.svg'

function VerifyEmail2() {
    return (
        <>
            <div className='verifyEmail1'>
                <div>
                    <div className='emailFlex3'>
                        <div><a className='sugaLogoEmail2' href='/'><img className='sugaLogoEmail3' src={SugaLogoEmail} /></a></div>
                        <div><button className='loginBtn2'>Login</button></div>
                    </div>
                    <div className='verifyBoxFlex2'>
                        <div className='verifyBox2'>
                            <div><img className='verifyLogo2' src={VerifyLogo2} /></div>
                            <div className='verifyTxt2'>Congratulation your email ID is verified</div>
                            <div className='doneTickLogo1'><img src={OkLogo}/></div>
                            {/* <div className='emailName1'>email to: kunaldalotra02@gmail.com</div> */}
                            <div><button className='clickToVerify1'>Click to continue</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmail2