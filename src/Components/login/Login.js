import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { NavLink, Link } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
import { customEvent } from '../utils/analyticsHelper';
import axios from 'axios';


function Login(props) {
  // const [credentials, setCredentials] = useState({email:"", password:""})

  const [loading, setLoading] = useState(false);

  // let navigate = useNavigate();

  //   const handleSubmit = async (e)=>{
  //       e.preventDefault();
  //       setLoading({ loading: true });
  //       const responce = await fetch(`https://suga-server.herokuapp.com/api/auth/login`, {
  //           method: 'POST',
  //           headers: {
  //            'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({email: credentials.email, password: credentials.password})
  //         });
  //         const json = await responce.json()
  //         // console.log(json);
  //         setLoading({ loading: false });
  //         if (json.success){
  //               localStorage.setItem('token', json.authtoken);
  //               // props.showAlert('Logged in Successfully', 'success')
  //               setLoading({ loading: false });
  //               navigate("/");
  //           }
  //           else{
  //               setLoading({ loading: false });
  //               message.warning("Invalid Credentials");
  //           }
  //   }

    // const onChange = (e)=>{
    //     setCredentials({...credentials, [e.target.name]: e.target.value})
    // }

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
    setLoading(true)
		try {
			const url = "https://suga-server.herokuapp.com/api/auth1";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
      setLoading(false)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        setLoading(false)
        message.error("Invalid Credentials");
			}
		}
	};

    const onChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

  return (
    
    <div className='loginPage'>
     
      <Link  to="/"><img className='LsugaLogoBW' src='/images/suga logo bw.svg'/></Link>
      <div><img className='LsugaText' src='/images/SuGa text.png'/></div>

      <div className="Lform">

      <form onSubmit={handleSubmit}>

      <span className='sugaUsername'>Email</span>
      <input 
      type="email" 
      id="setUsername" 
      className='setUsername' 
      name="email" 
      // value={credentials.email} 
      onChange={onChange}  

      /><br />     

      <span className='password'>Password</span>
      <input 
      type="password" 
      id="setPassword" 
      className='setPassword' 
      name='password' 
      // value={credentials.password} 
      onChange={onChange}
      /><br/>
      <NavLink to="/forgotpassword" className={({isActive}) => isActive ? "": "frgtPassword" }>Forgot Password?</NavLink>
      <button type='submit' className='signIn' onClick={() => customEvent("login","buttonClick","user","value")}>
      {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "Sign In"
                )}
        </button>
      <div className="Lbottom">
      <span className='account'>don't have an account?</span>
      <span>
      <NavLink to="/registrationfrominvite" className={({isActive}) => isActive ? "": "registration" }>Register Now</NavLink></span>
      </div>
      {/* <span className='blankPassword'></span> */}
      </form>
      </div>
    </div>
  
  )
}

export default Login