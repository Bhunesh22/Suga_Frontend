import React, {useState} from "react";
import Logo from "./suga.png";
import Profile from "./profile.png";
import "./SideNavigation.css";
import { BsCreditCard } from 'react-icons/bs';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { TbSettings } from 'react-icons/tb';
import { MdPermPhoneMsg } from 'react-icons/md';
import { MdOutlineLogout } from 'react-icons/md';
import NewTransaction from "../NewTransaction/NewTransaction";

const SideNavigation = () => {

  const [drop, setDrop] = useState(false);
  return (
    <div className="SNcontainer">

      <div className="SNnavigation">

        <div className="SNtop">

          <div className="SNlogo">
            <img src={Logo} alt="" />
          </div>

          <div className="SNdrop" onClick={()=> setDrop(!drop)}>
            <div style={{display: "flex", gap: "20px"}}>
            <p className="SNicon"> <BsCreditCard style={{width: '20px', height: '20px'}} fill="#0D0916"/></p>
            <p className="SNtext" style={{color: "#0D0916"}}>Transactions</p>
            </div>
            <p><MdKeyboardArrowUp fill="#0D0916" size={20} style={{display: drop ? "block" : "none", paddingTop: "2px"}}/><MdKeyboardArrowDown fill="#0D0916" size={20} style={{display: drop ? "none" : "block", paddingTop: "2px"}}/></p>
          </div>

          <div style={{height: drop ? "70px" : "0px", transition: "height 0.5s", overflow: "hidden", marginTop: "10px"}} >
          <div className="SNnew">
              New Transactions
          </div>

          <div className="SNnew">
              My Transactions
          </div>
          </div>

          <div className="SNoptions">
            <p className="SNicon"><CgProfile style={{width: '20px', height: '20px'}}/></p>
            <p className="SNtext">Profile</p>
          </div>


          <div className="SNoptions">
            <p className="SNicon"><MdPermPhoneMsg style={{width: '20px', height: '20px'}}/></p>
            <p className="SNtext">Contact Us</p>
          </div>

          <div className="SNoptions">
            <p className="SNicon"><TbSettings style={{width: '20px', height: '20px'}}/></p>
            <p className="SNtext">Settings</p>
          </div>

        </div>

        <div className="SNbtm"> 
        
        <div className="SNoptions">
            <p className="SNicon"><MdOutlineLogout style={{width: '20px', height: '20px'}}/></p>
            <p className="SNtext">Logout</p>
        </div>

        <div className="SNprofile">
          
            <img src={Profile} alt="" />
          <div className="SNnames">
            <p>Bhunesh</p>
            <p className="SNmail">bhunesh321@gmail.com</p>
          </div>
        </div>
        
        </div>

      </div>
      <div className="SNpages">
          <NewTransaction/>
      </div>
    </div>
  );
};

export default SideNavigation;
