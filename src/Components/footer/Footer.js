import React, {useState} from 'react'
import './Footer.css'
import { customEvent } from '../utils/analyticsHelper';
// import { Navigate } from 'react-router-dom'

import logo from './logo/suga.png'
import discord from './logo/discord.png'
import twitter from './logo/twitter.png'
import insta from './logo/instagram.png'
import linkedIn from './logo/linkedIn.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd';
import CircularProgress from "@mui/material/CircularProgress";
import 'antd/dist/antd.css';

// import { FaDiscord, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const [msg, setMsg] = useState({ name: "", email: "", message: ""})
    const [loading, setLoading] = useState(false);

    // let navigate = useNavigate();

	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
    setLoading(true)
    
		try {
			const url = "https://suga-server.herokuapp.com/api/message/msg";
			const { data: res } = await axios.post(url, msg);	
        setLoading(false)
        message.success("Message sent successfully!");
        setMsg({ name: "", email: "", message: ""})
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        setLoading(false)
			}
		}
	};

  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   const res = await fetch(`https://suga-server.herokuapp.com/api/message/msg`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     //   'auth-token': localStorage.getItem('token'),
    //     },
    //     body: JSON.stringify({
    //       name: msg.name,
    //       email: msg.email,
    //       message: msg.message,
    //     })
    //   });
    //   const Json = await res.json()
    //   message.success("Message sent successfully!");
    //   console.log(Json);
    // }
  
    const onChange = (e) => {
      setMsg({ ...msg, [e.target.name]: e.target.value })
    }
  

    return (
        <div className='Fcontainer'>
            <div className="Ftop">
                <div className="FsugaLogo">
                    <a href="/"><img src={logo} alt="" style={{width:"74px"}} /></a>
                    <p>
                        <span>Su</span>
                        <span style={{ color: "#4D69FD" }}>Ga</span>
                    </p>
                </div>
                <div className="FsocialLogo">
                    <ul>
                        <li onClick={() => customEvent("Discord","user","From Footer")}><a href="https://discord.gg/68F3AYfE" target="_blank" rel="noreferrer"><img src={discord} alt="" /></a> </li>
                        <li onClick={() => customEvent("Twitter","user","From Footer")}><a href="" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a></li>
                        <li onClick={() => customEvent("Instagram","user","From Footer")}><a href="https://www.instagram.com/sugaverse_infi/" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a></li>
                        <li onClick={() => customEvent("LinkedIn","user","From Footer")}><a href="https://www.linkedin.com/company/suga-verse" target="_blank" rel="noreferrer"><img src={linkedIn} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="Fmid">
                <div className="Fleft">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input 
                        className='Ffirst' 
                        type="text" id="fname"  
                        placeholder='Enter your name'
                        name = "name"
                        value = {msg.name}
                        required
                        onChange={onChange}
                        />
                        <input 
                        className='Fsecond' 
                        type="email" id="lname"  
                        placeholder='Email' 
                        name = "email"
                        value = {msg.email}
                        required
                        onChange={onChange}
                        /> </div><br />
                        <textarea 
                        className='Fthird' 
                        type="text" 
                        id="lname" 
                        placeholder='type your message here........' 
                        name = "message"
                        value = {msg.message}
                        required
                        onChange={onChange}
                        /><br />
                        <button type='submit' className='Fbtn' onClick={() => customEvent("Message","user","From Footer")} >
                        {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "Send"
                )}
                            </button>
                    </form>
                </div>
                <div className="Fright">
                    <div className="Fcol">
                        <p>Discover Games</p>
                        <ul>
                            <li>Counter Strike</li>
                            <li>DOTA</li>
                            <li>League of Legends</li>
                        </ul>
                    </div>
                    <div className="Fcol">
                        <p>Company</p>
                        <ul>
                            <li onClick={() => customEvent("AboutUS","user","From Footer")}><a target="_blank" href="https://merchant.razorpay.com/policy/KkkVi8b6SFV7SP/refund"> Refund policy</a></li>
                            <li> <a target="_blank" href="https://merchant.razorpay.com/policy/KkkVi8b6SFV7SP/shipping">Shipping and Delivery</a></li>
                            <li>Copyright Policy</li>
                            <li>Terms and Conditions </li>
                        </ul>
                    </div>
                    <div className="Fcol">
                        <p>Contact</p>
                        <ul>
                            <li>Discord</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Fbottom">
                <span>
                    <span>Copyright&nbsp;</span>
                    <span><span style={{ fontFamily: "'Goldman', cursive", fontSize: "19px" }}>Su</span>
                        <span style={{ color: "#4D69FD", fontFamily: "'Goldman', cursive", fontSize: "19px" }}>Ga </span></span>
                    <span>@2022</span>
                </span>
            </div>
        </div>
    )
}

export default Footer