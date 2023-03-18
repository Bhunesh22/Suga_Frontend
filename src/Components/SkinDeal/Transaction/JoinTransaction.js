import React, {useState, useContext} from 'react';
import "./JoinTransaction.css";
import { BiRupee } from 'react-icons/bi';
import GlobalContext from "../../../Context/globalContext";

const Transaction = () => {

  const { deal } = useContext(GlobalContext);
  console.log(deal)
  return (
    <div className="TTcontainer">
    <div className="TTtop">Transaction # 1058965</div>

    <div className="TTmid" style={{marginTop: "70px"}}>
      
      <div className="TTinput">
      <p className="TT3rd">Your Role</p>
      <div className="TTdata">Seller</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Buyer Name</p>
      <div className="TTdata">Bhunesh</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Buyer Contact</p>
      <div className="TTdata">6350139098</div>
      </div>
      
      <div className="TTinput">
      <p className="TT3rd">Payment for  </p>
      <div className="TTdata">AK-47 Redline</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Amount</p>
      <div className="TTdata">1000 <span><BiRupee/></span></div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Description  </p>
      <div className="TTdata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus tempora itaque sed id molestias qui distinctio explicabo, dicta reiciendis quam rem blanditiis voluptatibus pariatur ut commodi unde vitae iusto.</div>
      </div>

      <div className="TTinput" >
      <p className="TT3rd">Your bank account no. or UPI <span style={{color: "red"}}>*</span></p>
      <input type="text" placeholder="enter your UPI...." />
      </div>

      <p className="TTbtn">Agree</p>
      </div>

    </div>
  )
}

export default Transaction