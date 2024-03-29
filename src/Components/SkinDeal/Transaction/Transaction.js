import React, { useState, useContext, useEffect } from "react";
import "./Transaction.css";
import GlobalContext from "../../../Context/globalContext";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";
import "antd/dist/antd.css";


const Transaction = () => {
  let object;

  const { showPage, JoinCode } = useContext(GlobalContext);
  const [role, setRole] = useState("buyer");

  if(role == "buyer"){
    object = {
    role: role,
    payment_for: "",
    amount: "",
    description: "",
    buyer_trade_url: ""}
    }else{
      object = {
        role: role,
        payment_for: "",
        amount: "",
        description: "",
        seller_upi: ""}
    }


  const [checked, setchecked] = useState(false);
  const [btnColor, SetBtnColor] = useState({ color: "rgb(77, 105, 253, 0.5)" });
  const [deal, setDeal] = useState(object);
  const [loading, setLoading] = useState(false);

  const onchange = (e) => {
    setDeal({ ...deal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "https://suga-backend-0bkm.onrender.com/api/skin_deal";

      await axios
        .post(url, deal, {
          headers: { "auth-token": localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response);
          JoinCode(response.data.id);
        });
      setLoading(false);
      showPage("JC");
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
      deal.payment_for.length > 0 &&
      deal.amount.length > 0 &&
      deal.description.length > 0 &&
      checked
    ) {
      SetBtnColor({ color: "#4d69fd" });
    } else {
      SetBtnColor({ color: "rgb(77, 105, 253, 0.5)" });
    }
  }, [deal, checked]);

  return (
    <div className="TTcontainer">
      <div className="TTtop">Transaction</div>

      <div className="TTmid">
        <p className="TT2nd">Define your role</p>
        <div style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
          <div
            className="TTrole"
            onClick={() => setRole("buyer")}
            style={{
              background:
                role == "buyer" ? "#4d69fd" : "rgba(217, 217, 217, 0.4)",
            }}
          >
            Buyer
          </div>
          <div
            className="TTrole"
            onClick={() => setRole("seller")}
            style={{
              background:
                role == "seller" ? "#4d69fd" : "rgba(217, 217, 217, 0.4)",
            }}
          >
            Seller
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="TTinput">
            <p className="TT3rd">
              Payment for <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="text"
              placeholder="asset details"
              name="payment_for"
              onChange={onchange}
              required
            />
          </div>

          <div className="TTinput">
            <p className="TT3rd">
              Amount <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="text"
              placeholder="enter your amout...."
              name="amount"
              onChange={onchange}
              required
            />
          </div>

          <div
            className="TTinput"
            style={{ display: role == "seller" ? "flex" : "none" }}
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
            style={{ display: role == "buyer" ? "flex" : "none" }}
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

          <div className="TTinput">
            <p className="TT3rd">
              Description <span style={{ color: "red" }}>*</span>
            </p>
            <textarea
              placeholder="asset description..."
              name="description"
              onChange={onchange}
              required
            />
          </div>

          {/* <div className="TTinput" style={{display: role == "seller" ? "flex" : "none"}} >
      <p className="TT3rd">Add image of selling assets <span style={{color: "red"}}>*</span></p>
      <input type="file" style={{padding: "0px", fontSize: "17px"}} />
      </div> */}

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
              " Create"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
