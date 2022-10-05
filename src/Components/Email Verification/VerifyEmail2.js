import React, {useState, useEffect} from 'react'
import './VerifyEmail2.css'
import Navbar from '../navbar/Navbar'
import VerifyLogo2 from './images/verify email logo2.svg'
import SugaLogoEmail from './images/suga logo email.svg'
import OkLogo from './images/ok  logo1.svg'
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
// import { Fragment } from 'react';
import { customEvent } from '../utils/analyticsHelper';

function VerifyEmail2() {

    const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://suga-server.herokuapp.com/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(true);
			}
		};
		verifyEmailUrl();
	}, [param]);

    return (
        <>
        {validUrl ? (
            <div className='verifyEmail2'>
                <div>
                    <div className='emailFlex4'>
                        <div><a className='sugaLogoEmail3' href='/'><img className='sugaLogoEmail3' src={SugaLogoEmail} /></a></div>
                        {/* <div><button className='loginBtn3'>Login</button></div> */}
                        <div><Link to="/login"><button className='loginBtn3' onClick={() => customEvent("Login","user","From (email verified page) page ")}>Login</button></Link></div>
                    </div>
                    <div className='verifyBoxFlex3'>
                        <div className='verifyBox3'>
                            <div><img className='verifyLogo2' src={VerifyLogo2} /></div>
                            <div className='verifyTxt2'>Congratulation your email ID is verified</div>
                            <div className='doneTickLogo1'><img src={OkLogo}/></div>
                            {/* <div className='emailName1'>email to: kunaldalotra02@gmail.com</div> */}
                            <div><Link to="/login"><button className='clickToVerify1' onClick={() => customEvent("Login","user","From (email verified page) page ")}>Click to continue</button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
				<h1>404 Not Found</h1>
			)}
        </>
    )
}

export default VerifyEmail2