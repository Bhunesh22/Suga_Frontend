import React, {useContext} from 'react';
import "./Joincode.css";
import { MdOutlineContentCopy } from 'react-icons/md';
import logo1 from "./face.png"
import logo2 from "./mail.png"
import logo3 from "./whatsapp.png"
import GlobalContext from '../../../Context/globalContext';

const Joincode = () => {

  const {showPage} = useContext(GlobalContext);

  return (
    <div className="JCcontainer">
      <div className="JCtop">New Transaction</div>

      <div className="JCmid">
        <p className="JC1st">Great! <span style={{fontSize: "18px", padding: "0px 0px 0px 5px"}}>Share this code with the other party</span></p>

        <div className="JCcode">
            <p>112233445566</p>
            <p><MdOutlineContentCopy size={22}/></p>
        </div>
       
        <div className="JCdash">
            <a href=""><img src={logo3} alt="" /></a>
            <a href=""><img src={logo2} alt="" /></a>
            <a href=""><img src={logo1} alt="" /></a>
        </div>
        <p className="JCbtn" onClick={()=> showPage("TT")}>Back</p>
        </div>

      </div>
  )
}

export default Joincode;