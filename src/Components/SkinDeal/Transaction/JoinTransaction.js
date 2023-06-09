import React, {useState, useContext, useEffect} from 'react';
import "./JoinTransaction.css";
import { BiRupee } from 'react-icons/bi';
import GlobalContext from "../../../Context/globalContext";
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";


const Transaction = () => {

  const { deal, showPage, joinCode } = useContext(GlobalContext);
  let object;

  // const [role, setRole] = useState("buyer");

  if(deal.role == "seller"){
    object = {buyer_trade_url: ""}
    }else{
      object = {seller_upi: ""}
    }
  

  const [checked, setchecked] = useState(false);
  const [btnColor, SetBtnColor] = useState({ color: "rgb(77, 105, 253, 0.5)" });
  const [data, setData] = useState(object);
  const [loading, setLoading] = useState(false);

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `https://sugabackend.azurewebsites.net/api/skin_deal/updatestatus/${joinCode}`;

      await axios
        .patch(url, data, {
          headers: { "auth-token": localStorage.getItem("token") },
        });
      setLoading(false);
      showPage("MT");
      e.target.reset();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setLoading(false);
      }
    }
  };

  const handleCheck = () => {
    setchecked(!checked);
  };
  
  
  useEffect(() => {
    if (
      checked 
    ) {
      SetBtnColor({ color: "#4d69fd" });
    } else {
      SetBtnColor({ color: "rgb(77, 105, 253, 0.5)" });
    }
  }, [checked]);

  
  return (
    <div className="TTcontainer">
    <div className="TTtop">Transaction # 1058965</div>

    <div className="TTmid" style={{marginTop: "70px"}}>
      
      <div className="TTinput">
      <p className="TT3rd">Your Role</p>
      <div className="TTdata">{deal.role == "buyer" ? "Seller" : "Buyer"}</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Dealer Name</p>
      <div className="TTdata">{deal.username}</div>
      </div>

      {/* <div className="TTinput">
      <p className="TT3rd">Buyer Contact</p>
      <div className="TTdata">6350139098</div>
      </div> */}
      
      <div className="TTinput">
      <p className="TT3rd">Payment for  </p>
      <div className="TTdata">{deal.payment_for}</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Amount</p>
      <div className="TTdata">{deal.amount}<span><BiRupee size={17} style={{paddingTop: "-2px"}}/></span></div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Description  </p>
      <div className="TTdata">{deal.description}</div>
      </div>


      <form onSubmit={handleSubmit}>
      <div
            className="TTinput"
            style={{ display: deal.role == "buyer" ? "flex" : "none" }}
          >
            <p className="TT3rd">
              Your bank account no. or UPI{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <input 
            type="text" 
            placeholder="enter your UPI...." 
            name="seller_upi"
            onChange={onchange}
            />
          </div>

          <div
            className="TTinput"
            style={{ display: deal.role == "seller" ? "flex" : "none" }}
          >
            <p className="TT3rd">
              Your steam trade url <span style={{ color: "red" }}>*</span>
            </p>
            <input 
            type="text" 
            placeholder="enter your trade url...." 
            name="buyer_trade_url"
            onChange={onchange}
            />
          </div>

          <div className="TTcheck">
            <input
              type="checkbox"
              id="check"
              checked={checked}
              className="TTbig"
              onChange={handleCheck}
            />
            <label htmlFor="check">
              Agree the terms and conditions{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <button
            className="TTbtn"
            type="submit"
            style={{
              background: `${btnColor.color}`,
            }}
            disabled={btnColor.color == "rgb(77, 105, 253, 0.5)"}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Agree"
            )}
          </button>

          </form>
      </div>

    </div>
  )
}

export default Transaction