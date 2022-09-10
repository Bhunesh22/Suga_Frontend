import React from 'react'
import './ForgotPassword.css'
import sugaLogoBw2 from './suga logo bw2.svg'
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";

function ForgotPassword() {

    let navigate = useNavigate();

    return (
        <>
            <div className='forgotPassword1'>
                <div className='forgotPasswordTopFlex1'>
                    <div>
                       <Link to='/' ><img className='sugaLogoBw2' src={sugaLogoBw2} alt="sugalogo" /></Link>
                    </div>
                    <div>
                        <button className='backBtn3' onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
                <div class="forgetPasswordDetail2">

                    <div className='inputEmailLabelFlex2'>
                        <label for="inputCredentials" class="form-label1">SuGa username or email</label>
                        <input type="email" class="inputCredential1" id="inputCredentials" placeholder="name@example.com" />
                    </div>
                    <div>
                        <button className='linkBtn2'>Share the link</button>
                    </div>
                </div>




            </div>
        </>
    )
}

export default ForgotPassword