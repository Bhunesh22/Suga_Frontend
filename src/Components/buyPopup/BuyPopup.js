import React, { useState,useEffect } from 'react'
import "./buypopup.css"
import { VscChromeClose } from 'react-icons/vsc';
import img from "./imgbin_fortnite-battle-royale-firearm-weapon-battle-royale-game-png 2.svg"
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from "prop-types";

const BuyPopup = (props) => {

  const [orderDetails, setOrderDetails] = useState({ name: "", email: "", contact: "", city: "", state: "", country: "" })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://suga-server.herokuapp.com/api/userdetails/details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: orderDetails.name,
        email: orderDetails.email,
        contact: orderDetails.contact,
        city: orderDetails.city,
        state: orderDetails.state,
        country: orderDetails.country,
      })
    });
    const Json = await res.json()
    console.log(Json);
  }

  const onChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value })
  }

  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);


  return (
    <div className="DPcontainer, overlay" style={{
      visibility: show ? "visible" : "hidden",
      opacity: show ? "1" : "0"
    }}
    >
      <div>

          <div className="DPcancle"><p ><VscChromeClose onClick={closeHandler} style={{ cursor:"pointer" ,width: "30px", height: "30px" }} /></p></div>
        <div className="DPheading">
          <p>Name</p>
          <div className='DPhead-detail'>
            {/* <p>Seller</p> */}
            <p>Price</p>
          </div>
        </div>

        <div className="DPmid">
          <div className="DPleft">
            <img src={img} alt="" />
            <div className='DPinfo'>
              <p>AWP | Pit Viper </p>
              <p>Counter Strike : Global Offensive Ristricted Sniper Rifle</p>
            </div>
          </div>
          <div className='DPprice'>$100</div>
        </div>

        <div className="DPform-container">
          {/* <div className="DPform-details">
                <p>Suga Account:</p>
                <p>Billing Address:</p>
            </div> */}
          <div className="DPform">
            {/* <div className="DPform-name" style={{color:"white"}}>kunalt23#</div> */}
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label mb-2.5">Full Name</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  id="inputEmail4"
                  name="name"
                  required
                  value={orderDetails.name}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label mb-2.5">Email</label>
                <input
                  type="email"
                  className="form-control mb-1"
                  id="inputPassword4"
                  name="email"
                  required
                  value={orderDetails.email}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label mb-2.5">Contact</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  id="inputEmail4"
                  name="contact"
                  required
                  value={orderDetails.contact}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label mb-2.5">City</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  id="inputPassword4"
                  name="city"
                  required
                  value={orderDetails.city}
                  onChange={onChange}
                />
              </div><div className="col-md-6">
                <label for="inputEmail4" className="form-label mb-2.5">State/Province</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  id="inputEmail4"
                  name="state"
                  required
                  value={orderDetails.state}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label mb-2.5">Country</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inputPassword4"
                  name="country"
                  required
                  value={orderDetails.country}
                  onChange={onChange}
                />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" required style={{ borderRadius: "0px", width: "18px" , width: "25px"}} />
                  <label className="form-check-label" for="gridCheck" style={{ color: "white", lineHeight: "25px", margin: "0px 0px 0px 15px" }}>
                    I Agree to the terms of the SUGA Subscriber Agreement (last updated 22 June)
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mb-3" style={{ borderRadius: "0px", height: "48px", width: "220px", fontSize: "20px" }}>Purchase</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyPopup
