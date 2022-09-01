import React from 'react'
import './VerifyEmail.css'
import Navbar from '../navbar/Navbar'
import VerifyLogo from './images/verify email img.svg'
import { Link } from 'react-router-dom'

function VerifyEmail() {
    return (
        <>
            <div className='verifyEmail1'>
                <div>
                    <div>
                        <Navbar />
                    </div>
                    <div className='verifyBoxFlex2'>
                        <div className='verifyBox1'>
                            <div><img className='verifyLogo1' src={VerifyLogo} /></div>
                            <div className='verifyTxt1'>verify your email address</div>
                            <div className='emailName1'>email to: kunaldalotra02@gmail.com</div>
                            <div><a href=''><div className='clickToVerify1'>Click to verify</div></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmail
