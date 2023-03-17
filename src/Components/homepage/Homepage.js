import React, {useEffect} from 'react'
import "./Homepage.css"
import img1 from "./logos/Futuristic_pedestal_25.png"
import img2 from "./logos/Artboard-2 1.png"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import Carousal1 from "./carousal/Carousal1"
// import Carousal2 from "./carousal/Carousal2"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Cards from './card/Cards'
import { Link, useNavigate } from 'react-router-dom'
import { customEvent } from '../utils/analyticsHelper';

const Homepage = () => {

    
    return (
        <>
        <div className="Hnavbar">
            <Navbar/>
        </div>
        <div className="Hcontainer">
            <div className="Hbg1"></div>
            {/* <div className="Hbackground-box0"></div> */}
            <div className="Htop-box">
                <div className="Hright">
                    <img className='Himg1' src={img1} alt="" />
                    <div className="Hellipse1"></div>
                </div>
                <div className="Hleft">
                    <h1>Gaming Assets &amp; Skins <span style={{color: "white"}}>Universe</span></h1>
                    {/* <h1 style={{ color: "white", marginTop: "0px" }}>OF GAMING AND NFT’S</h1> */}
                    <p>A one-stop market for your gaming inventory. Compare gaming assets at pure ease from the global marketplaces.</p>
                    {!localStorage.getItem('token')? (<Link to="/registrationfrominvite"><button onClick={() => customEvent("Register","user","From Home page to do Register")} className='Hbtn'>Register</button></Link>) : (<Link to="/skindeal"><button className='Hbtn' onClick={() => customEvent("Explore",`${localStorage.getItem("token")}`,"From Home Page")}>Explore</button></Link>)
                    }
                    
                </div>
            </div>
            <div className="Hmid-box1">
                <div className="Hhead">
                    <p></p>
                    <p>
                        <span style={{ color: "#4D69FD", fontFamily: "'Goldman', cursive" }}>CS:GO </span>
                        {/* <span style={{ color: "#4D69FD", fontFamily: "'Goldman', cursive" }}>Ga </span> */}
                     Premium Collections</p>

                    <p><Link to="/marketplace">View All</Link></p>
                    <p><Link to="/marketplace"><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(30px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(15px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' /></Link></p>
                    
                </div>
                
                <div className="Hslider">
                    <div className="Hcard">
                        <Cards/>
                    </div>
                </div>
            </div>
            {/* <div className="Hmid-box2">
                <div className="Hhead2">
                    <p></p>
                    <p><span>Su</span><span style={{ color: "#4D69FD" }}>Ga</span></p>
                    <p>Premium Collections</p>
                    <p>View All</p>
                    <p><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(30px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(15px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' /></p>
                </div>
                <div className="Hslider2">
                    <div className="Hcard2">
                        <Carousal2 />
                    </div>
                </div>
            </div> */}
            <div className="Hend-box">
                <div className="Hright2">
                    <img className='Himg4' src={img2} alt="" />
                </div>
                <div className="Hleft2">
                    <h1>
                        <span style={{ color: "#00FF94", paddingRight: "15px" }}>Newest</span>
                        <span>Fantasy Section</span>
                    </h1>
                    <p>Making NFT's accessible at ease for next million people</p>
                    <Link to="/comingsoon"><button className='Hbtn' onClick={() => customEvent("Wander",`${localStorage.getItem("token")}`,"From Home Page")}>Wander</button></Link>
                </div>
                <div className="Hellipse2"></div>
            </div>

            <div className="Hbg2"></div>

                <div className="Hfooter">
                    <Footer/>
                </div>
        </div>
        </>
    )
}

export default Homepage