import React, {useState, useEffect} from 'react'
import logo from './suga.png'
import profile from './profile.png'
import hamburgur from './Group 146.svg'
import "./navbar.css"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { VscChromeClose } from 'react-icons/vsc';
import Dropdown from './Dropdown'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [openProfile, setProfileOpen] = useState(false);

    const handleClick = () => setClick(!click);

    const [Open, setOpen] = useState(false);
    const toggle = () => {setOpen(!Open)}

    const handleLogout = ()=>{
        setClick(!click);
        localStorage.removeItem('token');
      }
      
      var x = window.matchMedia("(max-width: 700px)")

      const myFunction = (X) => {
        if (x.matches) {
          setProfileOpen(true)
        }
      }

      useEffect((x) => {
       myFunction(x)
      }, [])
      



      console.log(openProfile);
      

  return (
    <>
    <div className="Ncontainer">
        <div className="Nfirst">
        <div className="sugaLogo">
                    <Link to="/" ><img src={logo} alt="" style={{width:"74px"}} /></Link>
                    <p>
                        <span>Su</span>
                        <span style={{ color: "#4D69FD" }}>Ga</span>
                    </p>
                </div>
        </div>
        <div className="Nmid">
        <p><MdOutlineKeyboardArrowLeft size='2.8rem' style={{ transform: 'translate(70px, 0px)' }} /><MdOutlineKeyboardArrowLeft size='2.8rem' style={{ transform: 'translate(35px, 0px)' }} /><MdOutlineKeyboardArrowLeft size='2.8rem' /></p>
            <p className='Nmatches'><Link to="/commingSoon">NFT's</Link></p>
            <p className='Nexchange'><Link to="/">Skins</Link></p>
            <p><MdOutlineKeyboardArrowRight size='2.8rem' style={{ transform: 'translate(70px, 0px)' }} /><MdOutlineKeyboardArrowRight size='2.8rem' style={{ transform: 'translate(35px, 0px)' }} /><MdOutlineKeyboardArrowRight size='2.8rem' /></p>
        </div>

        <div className="Nhamburgur"  onClick={handleClick}>
        {!click ? (<img src={hamburgur} alt="" />) : <VscChromeClose color='white' size="2rem"/>}
            
        </div>
        <div className="NhamDrop">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skins
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                NFT's
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/wallet"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Wallet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/comingsoon"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Help Center
              </NavLink>
            </li>
            {localStorage.getItem('token')?(<li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>) : ""}
            
          </ul>
        </div>

        <div className="Nlast">
            {!localStorage.getItem("token")? (<Link to="/login" className='Nlink' ><div className='Nbtn' style={{cursor:"pointer"}}>Login</div></Link> ) : (<>
            <div className="Nbox"></div>
            {!openProfile ? (<div className="Nimg" style={{cursor:"pointer"}}>
                <img onClick={toggle} src={profile} alt=""/>
            </div>): (<div className="Nimg" style={{cursor:"pointer"}}>
                <Link to="/profile"><img src={profile} alt=""/></Link>
            </div>)}
            {Open? <div className="Ndrop"><Dropdown/></div>: ''}
            </>) }

        </div>
    </div>
    </>
  )
}

export default Navbar