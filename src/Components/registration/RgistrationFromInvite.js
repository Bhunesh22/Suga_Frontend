import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Registration from invite.css'
import { NavLink, Link } from 'react-router-dom'



function RegistrationFromInvite(props) {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const responce = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await responce.json()
    // console.log(json);
    if (json.success) {
      // save the auth token and redirect(after press login move to home page direct)
      localStorage.setItem('token', json.authtoken);
      navigate("/login");
      // props.showAlert('Account Created Successfully', 'success')
    }
    else {
      // props.showAlert('Invalid Credentials', 'danger')
    }

  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

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

          /><br />
          <span className='Rpassword'>Set Password</span>
          <input
            type="password"
            id="setPassword"
            className='RsetPassword'
            required
            name='password'
            onChange={onChange}
            minLength={5}

          /><br />
          <span className='RcnfrmPassword'>Confirm Password</span>
          <input
            type="password"
            id="confermPassword"
            className='RconfermPassword'
            required
            name='cpassword'
            onChange={onChange}
            minLength={5}

          /><br />
          <button type='submit' className='RproceedBtn'>Proceed</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationFromInvite