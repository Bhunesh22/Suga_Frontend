import React, {useState} from 'react'
import './ForgotPassword.css'
import sugaLogoBw2 from './suga logo bw2.svg'
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

function ForgotPassword() {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        email: ""
      });
    
      const [error, setError] = useState("");
      const [msg, setMsg] = useState("");
  
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true)
    
        setLoading({ loading: true });
    
        try {
          const url = "https://suga-server.herokuapp.com/api/forgetpassword/resetPasswordRequest";
          const { data: res } = await axios.post(url, data);
          setMsg(res.message);
          setLoading(false)
          navigate("/emailverification")
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
            setLoading(false)
            message.warning(error.response.data.message);
          }
        }
      };
    
      const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
      }

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
                    <form onSubmit={handleSubmit}>
                    <div className='inputEmailLabelFlex2'>
                        <label for="inputCredentials" class="form-label1">Enter your email</label>
                        <input 
                        type="email" 
                        class="inputCredential1" 
                        id="inputCredentials" 
                        placeholder="name@example.com"
                        required
                        name='email'
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <button type='submit' className='linkBtn2'>
                        {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Send Email"
            )}
                            </button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword