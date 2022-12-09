import React, {useState} from 'react'
import './SetPassword.css'
import sugaLogoBw2 from './suga logo bw2.svg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { customEvent } from '../utils/analyticsHelper';


function SetPassword() {

  const param = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    password: ""
  });
  const [cp, setCp] = useState({
    confirmpassword: ""
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [confirm_err, setConfirm_err] = useState(false);

  // const handleChange = ({ currentTarget: input }) => {
  // 	setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)

    if (!confirm_err) {
      setLoading({ loading: true });
    }

    try {
      if (data.password != cp.confirmpassword){
        message.error("Password and Confirm Password are must be same!");
      }
      else{
      const url = `https://sugabackend.azurewebsites.net/api/forgetpassword/${param.id}/resetpassword/${param.token}`;
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      setLoading(false)
      navigate("/password_changed")
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setLoading(false)
        message.error(error.response.data.message);
      }
    }
  };

  const [loading, setLoading] = useState(false);

  const confirm = (confirm) => {
    if (confirm === data.password) {
      setConfirm_err(false);
    } else {
      setConfirm_err(true);
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onInputChange = (e) => {
    setCp({ ...cp, [e.target.name]: e.target.value });
  };


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
        <form onSubmit={handleSubmit} >

        <div className='setPasswordFlex3'>
          <label className='password1'>Set password</label>
          <input 
          type="password" 
          id="enterPassword" 
          className='enterPassword'
          required
            name='password'
            onChange={onChange}
            minLength={8}
          ></input>
        </div>
        <div className='setPasswordFlex3'>

        <div className="Rcp">
            <label className='cnfrmPassword'>Confirm password</label>
          <p>
          {confirm_err && (
                  <div className="text-danger" style={{marginTop:"4px"}}>Password didn't matched</div>
          )}
          </p>
          </div>
          <input 
          type="password" 
          id="confermPassword" 
          className='confermPassword'
          name="confirmpassword"
          value={cp.confirmpassword}
          required
          onChange={(e) => {
            onInputChange(e);
            confirm(e.target.value);
          }}
          minLength={8}
          ></input>
        </div>
        <div><button type='submit' className='proceedBtn' onClick={() => customEvent("Password Edited",`${localStorage.getItem("token")}`,"From SetPassword page")}>
        {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Proceed"
            )}
          </button></div>

        </form>
      </div>

    </div>
  )
}

export default SetPassword