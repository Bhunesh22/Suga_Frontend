import React, {useState, useEffect, useContext} from 'react'
import "./Deal.css"
import { BiRupee } from 'react-icons/bi';
import GlobalContext from "../../../Context/globalContext";
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from 'react-router-dom';

const Deal = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    const status1 = {
        seller_status: "",
        buyer_status: ""
    }

    const { showPage, user } = useContext(GlobalContext);
    const [status, setStatus] = useState();
    const [confirnation, setConfirmation] = useState()

    // const [role, setRole] = useState("buyer");

    // const [checked, setchecked] = useState(false);
    const [btnColor, SetBtnColor] = useState({ color: "rgb(77, 105, 253, 0.5)" });
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({})

    useEffect(() => {
        loadUserData();
    }, [id]);

    // function ucfirst(str) {
    //     var firstLetter = str.substr(0, 1);
    //     return firstLetter.toUpperCase() + str.substr(1);
    // }


    const loadUserData = async () => {
        const responce = await fetch(`https://suga-backend-0bkm.onrender.com/api/skin_deal/individual_deal/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
    }

    console.log(data)



    let role;

    if(user && user?._id == data.userId){
        role = ucfirst(data.role);
    }
    else{
        if(data.role == "buyer"){
            role = "Seller";
        }
        else{
            role = "Buyer"
        }
    }

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        setLoading(true);
        setConfirmation("disagree");

    let status;

    if(role == "Buyer"){
        status = {
            buyer_status: "disagree"
        }
    }
    else{
        status = {
            seller_status: "disagree",
        }
    }


        try {
          const url = `https://suga-backend-0bkm.onrender.com/api/skin_deal/finalstatus/${id}`;

          await axios
            .patch(url, status,  {
              headers: { "auth-token": localStorage.getItem("token") },
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


    const handleSubmit2 = async (e) => {
        e.preventDefault();
        setLoading(true);
        setConfirmation("agree")


        let status;

        if(role == "Buyer"){
            status = {
                buyer_status: "agree"
            }
        }
        else{
            status = {
                seller_status: "agree",
            }
        }

        try {
          const url = `https://suga-backend-0bkm.onrender.com/api/skin_deal/finalstatus/${id}`;

          await axios
            .patch(url, status,  {
              headers: { "auth-token": localStorage.getItem("token") },
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

    // useEffect(() => {
    //   if (
    //     checked
    //   ) {
    //     SetBtnColor({ color: "#4d69fd" });
    //   } else {
    //     SetBtnColor({ color: "rgb(77, 105, 253, 0.5)" });
    //   }
    // }, [checked]);

    function ucfirst(str) {
        var firstLetter = str.substr(0, 1);
        return firstLetter.toUpperCase() + str.substr(1);
    }

   console.log(role)


  return (
    <div className="TTcontainer">
    <div className="TTtop">Transaction # <span style={{fontSize: "25px", color: "#4d69fd"}}>{id}</span></div>

    <div className="TTmid" style={{marginTop: "70px"}}>

      <div className="TTinput">
      <p className="TT3rd">Your Role</p>
      <div className="TTdata">{role}</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Payment for  </p>
      <div className="TTdata">{data && data.payment_for}</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Amount</p>
      <div className="TTdata">{data && data.amount}<span><BiRupee size={17} style={{paddingTop: "-2px"}}/></span></div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Description  </p>
      <div className="TTdata">{data && data.description}</div>
      </div>

      <div className="TTinput">
      <p className="TT3rd">Payment Status</p>
      <div className="TTdata">{data && data.transaction_proof == "pending" ? "Pending" : "Done"}</div>
      </div>


      <div style={{display: data?.transaction_proof != "pending" && role == "Seller" && data?.seller_status != "agree" ? "block" : "none"}}>

          <div
            className="TTinput"
            // style={{ display: role == "Seller" ? "flex" : "none" }}
          >
           <p className="TT3rd" style={{color: "#4d69fd", fontSize: "22px"}}>
              Confirmation{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <p style={{width: "40vw", fontSize: "18px"}}>Please select "Agree" if you confirm that you have sent the asset to the buyer, or select "Disagree" if you do not want to continue with the deal.</p>
          </div>

        <div className="TTbtns" style={{display: "flex", gap: "4vw"}}>

        <button
            onClick={handleSubmit1}
            className="TTbtn"
            type="submit"
            style={{
             width: "18vw"
            }}
            // disabled={btnColor.color == "rgb(77, 105, 253, 0.5)"}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Disagree"
            )}
          </button>

          <button
          onClick={handleSubmit2}
            className="TTbtn"
            type="submit"
            style={{
                width: "18vw"
               }}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Agree"
            )}
          </button>
        </div>
        </div>


        <div style={{display: data?.seller_status == "agree" && role == "Buyer" && data?.buyer_status == "pending" ? "block" : "none"}}>
      <div
            className="TTinput"
            // style={{ display: role == "Buyer" ? "flex" : "none" }}
          >
            <p className="TT3rd" style={{color: "#4d69fd", fontSize: "22px"}}>
              Confirmation{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <p style={{width: "40vw", fontSize: "18px"}}>Please select "Agree" if you confirm that you received the asset from the seller, or select "Disagree" if you do not agree to receive the asset from the seller.</p>
          </div>

        <div className="TTbtns" style={{display: "flex", gap: "4vw"}}>

        <button
            onClick={handleSubmit1}
            className="TTbtn"
            type="submit"
            style={{
             width: "18vw"
            }}
            // disabled={btnColor.color == "rgb(77, 105, 253, 0.5)"}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Disagree"
            )}
          </button>

          <button
          onClick={handleSubmit2}
            className="TTbtn"
            type="submit"
            style={{
                width: "18vw"
               }}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Agree"
            )}
          </button>
        </div>

       </div>

          </div>
      </div>

  )
}

export default Deal