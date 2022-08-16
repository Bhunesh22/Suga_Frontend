import React from 'react'
import "./Homepage.css"
import img1 from "./logos/Futuristic_pedestal_25.png"
import img2 from "./logos/Artboard-2 1.png"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Carousal1 from "./carousal/Carousal1"
import Carousal2 from "./carousal/Carousal2"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Cards from './card/Cards'
import { Link } from 'react-router-dom'

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
                <div className="Hleft">
                    <h1>Gaming &amp; NFT’s <span style={{color: "white"}}>Universe</span></h1>
                    {/* <h1 style={{ color: "white", marginTop: "0px" }}>OF GAMING AND NFT’S</h1> */}
                    <p>Digital barter! Your one-stop market for all gaming NFTs. Buy and sell at pure ease from the global marketplaces.</p>
                    {!localStorage.getItem('token')? (<Link to="/registrationfrominvite"><button className='Hbtn'>Register</button></Link>) : (<Link to="/commingsoon"><button className='Hbtn'>Explore</button></Link>)
                    }
                    
                </div>
                <div className="Hright">
                    <img className='Himg1' src={img1} alt="" />
                </div>
                <div className="Hellipse1"></div>
            </div>
            <div className="Hmid-box1">
                <div className="Hhead">
                    <p></p>
                    <p>
                        <span style={{ fontFamily: "'Goldman', cursive", fontSize: "33px" }}>Su</span>
                        <span style={{ color: "#4D69FD", fontFamily: "'Goldman', cursive", fontSize: "33px" }}>Ga </span>
                     Premium Collections</p>
                    {/* <p>View All</p> */}
                    {/* <p><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(30px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' style={{ transform: 'translate(15px, 0px)' }} /><MdOutlineKeyboardArrowRight size='1.4rem' /></p> */}
                </div>
                {/* <div className="Hbackground-box1"></div> */}
                <div className="Hslider">
                    <div className="Hcard">
                        <Cards />
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
                <div className="Hleft2">
                    <h1>
                        <span style={{ color: "#00FF94", paddingRight: "15px" }}>Newest</span>
                        <span>Fantasy Games</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <Link to="/commingsoon"><button className='Hbtn'>Play Now</button></Link>
                </div>
                <div className="Hright2">
                    <img className='Himg4' src={img2} alt="" />
                </div>
                <div className="Hellipse2"></div>
            </div>
            {/* <div className="Hbackground-box2"></div> */}
            <div className="Hbg2"></div>
            {/* <div className="Hbackground-box3"></div> */}
            <div className="lowerFooter">
                <div className="Hfooter">
                    <Footer/>
                </div>
                {/* <div className="Hbackground-box4"></div>
                <div className="Hbg3"></div>
                <div className="Hbackground-box5"></div> */}
            </div>
        </div>
        </>
    )
}

export default Homepage