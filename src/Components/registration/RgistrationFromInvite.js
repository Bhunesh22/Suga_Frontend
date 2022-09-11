import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registration from invite.css'
import { NavLink, Link } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

function RegistrationFromInvite() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
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

    if (data.password != cp.confirmpassword) return;

    try {
      const url = "http://localhost:5000/api/users";
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

  //   const [credentials, setCredentials] = useState({name:"" ,email:"", password:""})
  // let navigate = useNavigate();

  //   const handleSubmit = async (e)=>{
  //       e.preventDefault();
  //       setLoading({ loading: true });

  //       try{
  //       const {name, email, password} = credentials;
  //       const responce = await fetch(`https://suga-server.herokuapp.com/api/auth/createuser`, {
  //           method: 'POST',
  //           headers: {
  //            'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({name, email, password})
  //         });
  //         const json = await responce.json()

  //         if (json.success){
  //           localStorage.setItem('token', json.authtoken);
  //           setLoading({ loading: false });
  //           navigate("/login");
  //       }
  //       setLoading({ loading: false });
  //       }catch(err){
  //         setLoading({ loading: false });
  //             message.warning("This email is alredy registered");
  //         }

  // }

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value })
  // }
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onInputChange = (e) => {
    setCp({ ...cp, [e.target.name]: e.target.value });
  };

  return (
    <div className='RegistrationFromInvite'>
      <div className='registrationfrominviteTop1'>
        <div className='sugaLogoAndText1'>
          <div><Link to="/"><img className='LsugaLogoBW1' src='/images/suga logo bw.svg' /></Link></div>
          <div><img className='LsugaText1' src='/images/SuGa text.png' /></div>
        </div>
        <div><Link to='/login'> <button className='signInBtn'>Sign In</button> </Link></div>
      </div>
      <div className="Rform">
        <form onSubmit={handleSubmit}>
          <span className='Rusername'>SuGa Username</span>
          <input
            type="text"
            id="setUsername"
            className='RsetUsername'
            required
            name='name'
            onChange={onChange}

          /><br />
          <span className='Remail'>Enter Email</span>
          <input
            type="email"
            id="setEmail"
            className='RsetEmail'
            required
            name='email'
            onChange={onChange}

          />
          <br />
          <span className='Rpassword'>Set Password</span>
          <input
            type="password"
            id="setPassword"
            className='RsetPassword'
            required
            name='password'
            onChange={onChange}
            minLength={5}

          />
          <h6 className='passwordRules1'>Use 8 or more characters, must contain upper case, lower case, numbers & special symbols</h6>
          <br />
          <div className="Rcp">
          <span className='RcnfrmPassword'>Confirm Password</span>
          <p>
          {confirm_err && (
                  <div className="text-danger" style={{marginTop:"4px"}}>Password didn't matched</div>
          )}
          </p>
          </div>
          <input
            type="password"
            id="confermPassword"
            className='RconfermPassword'
            name="confirmpassword"
            value={cp.confirmpassword}
            required
            onChange={(e) => {
              onInputChange(e);
              confirm(e.target.value);
            }}
          />
          <br />
          <button type='submit' className='RproceedBtn'>
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Proceed"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationFromInvite