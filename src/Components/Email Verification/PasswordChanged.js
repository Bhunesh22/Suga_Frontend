import React from 'react'
import './VerifyEmail2.css'
// import Navbar from '../navbar/Navbar'
import VerifyLogo2 from './images/verify email logo2.svg'
import SugaLogoEmail from './images/suga logo email.svg'
import OkLogo from './images/ok  logo1.svg'
import { useParams, Link} from 'react-router-dom';
// import { Fragment } from 'react';

function PasswordChanged() {

    return (
        <>
            <div className='verifyEmail2'>
                <div>
                    <div className='emailFlex4'>
                        <div><a className='sugaLogoEmail3' href='/'><img className='sugaLogoEmail3' src={SugaLogoEmail} /></a></div>
                        {/* <div><button className='loginBtn3'>Login</button></div> */}
                        <div><Link to="/login"><button className='loginBtn3'>Login</button></Link></div>
                    </div>
                    <div className='verifyBoxFlex3'>
                        <div className='verifyBox3'>
                            <div><img className='verifyLogo2' src={VerifyLogo2} /></div>
                            <div className='verifyTxt2'>Congratulation your password has been changed</div>
                            <div className='doneTickLogo1'><img src={OkLogo}/></div>
                            {/* <div className='emailName1'>email to: kunaldalotra02@gmail.com</div> */}
                            <div><Link to="/login"><button className='clickToVerify1'>Click to continue</button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordChanged