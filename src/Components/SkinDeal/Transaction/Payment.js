import React from "react";
import "./Payment.css";
import QR from "./qr.jpg";

const Payment = () => {
  return (
    <div className="PMcontainer">
      <div className="PMtop">Payment</div>

      <div className="PMmid">
        <img className="PMqr" src={QR} alt="" />
        <p className="PM2nd">
          Confrim your payment by sharing the screen shot of transaction
        </p>

        <div className="PMcode">
          <input
            type="file"
            class="form-control, fileInput1"
            id="inputGroupFile04"
            name="image"
            aria-describedby="inputGroupFileAddon04"
            // onChange={handleFileChange}
            aria-label="Upload"
          ></input>
        </div>

        <p className="PMbtn">Confirm</p>
      </div>
    </div>
  );
};

export default Payment;
