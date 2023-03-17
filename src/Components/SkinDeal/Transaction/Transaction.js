import React, {useState, useContext} from 'react';
import "./Transaction.css";
import GlobalContext from '../../../Context/globalContext';

const Transaction = () => {
    
    const { showPage } = useContext(GlobalContext);

    const [role, setRole] = useState("buyer")

  return (
    <div className="TTcontainer">
    <div className="TTtop">Transaction</div>

    <div className="TTmid">

      <p className="TT2nd">Define your role</p>
      <div style={{display: "flex", gap: "30px", marginBottom: '30px'}}>
        <div className="TTrole" onClick={()=> setRole("buyer")} style={{background: role == "buyer" ? "#4d69fd" : "rgba(217, 217, 217, 0.4)"}}>Buyer</div>
        <div className="TTrole" onClick={()=> setRole("seller")} style={{background: role == "seller" ? "#4d69fd" : "rgba(217, 217, 217, 0.4)"}}>Seller</div>
      </div>
      
      <div className="TTinput">
      <p className="TT3rd">Payment for <span style={{color: "red"}}>*</span></p>
      <input type="text" placeholder="asset details" />
      </div>

      <div className="TTinput">
      <p className="TT3rd">Amount <span style={{color: "red"}}>*</span></p>
      <input type="text" placeholder="enter your amout...." />
      </div>

      <div className="TTinput">
      <p className="TT3rd">Description <span style={{color: "red"}}>*</span></p>
      <textarea placeholder="asset description..." />
      </div>

      <p className="TTbtn" onClick={()=> showPage("JC")}>Create</p>
      </div>

    </div>
  )
}

export default Transaction