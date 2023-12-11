import React, {useState, useEffect, useContext} from "react";
import "./Payment.css";
import QR from "./qr.jpg";
import GlobalContext from "../../../Context/globalContext";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate ,useParams } from 'react-router-dom';

const Payment = () => {

  let {id} = useParams();
  const navigate = useNavigate();
  const { showPage, JoinCode, joinCode } = useContext(GlobalContext);

  const [btnColor, SetBtnColor] = useState({ color: "rgb(77, 105, 253, 0.5)" });
  const [payment, setPayment] = useState({transaction_proof : ""});
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `https://suga-backend-0bkm.onrender.com/api/skin_deal/paymentstatus/${id}`;

      await axios
        .patch(url, payment, {
          headers: { "auth-token": localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response);
          JoinCode(response.data.id);
        });
      setLoading(false);
      navigate("/skindeal")
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


  useEffect(() => {
    if (
      payment.transaction_proof.length >= 5
    ) {
      SetBtnColor({ color: "#4d69fd" });
    } else {
      SetBtnColor({ color: "rgb(77, 105, 253, 0.5)" });
    }
  }, [payment]);


  return (
    <div className="PMcontainer">
      <div className="PMtop">Payment</div>

      <div className="PMmid">
        <img className="PMqr" src={QR} alt="" />
        <p className="PM2nd">
          Confrim your payment by sharing the transaction id
          <span style={{ color: "red", padding: "2px" }}>*</span>
        </p>

        <form onSubmit={handleSubmit}>
        <div className="PMcode">
          <input
            type="text"
            name="transaction_proof"
            placeholder="transaction id..."
            onChange= {onChange}
            required
          ></input>
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
              " Confirm"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
