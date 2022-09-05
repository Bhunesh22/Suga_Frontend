import React, {useState, useEffect} from 'react'
import './VerifyEmail2.css'
import Navbar from '../navbar/Navbar'
import VerifyLogo2 from './images/verify email logo2.svg'
import SugaLogoEmail from './images/suga logo email.svg'
import OkLogo from './images/ok  logo1.svg'
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
// import { Fragment } from 'react';

function VerifyEmail2() {

    const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
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
                            <div><Link to="/login"><button className='clickToVerify1'>Click to continue</button></Link></div>
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