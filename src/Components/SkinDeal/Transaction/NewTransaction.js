import React, {useContext, useState, useEffect} from "react";
import "./NewTransaction.css";
import GlobalContext from "../../../Context/globalContext";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
// import { customEvent } from '../utils/analyticsHelper';
import axios from 'axios';

const NewTransaction = () => {

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnColor , SetBtnColor] = useState({color : "rgb(77, 105, 253, 0.5)"})

  const {showPage} = useContext(GlobalContext);

  const formData = new FormData();
  formData.append("join_code",code);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const url = "https://sugabackend.azurewebsites.net/api/users";
      await axios.post(url, formData, {headers: {'auth-token': localStorage.getItem('token')}} );
      setLoading(false)
      showPage("JT")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setLoading(false)
        message.error("Enter a valid code");
      }
    }
  };

  useEffect(() => {
    if(code.length >= 5){
        SetBtnColor({color : "#4d69fd"})
    }
    else{
        SetBtnColor({color : "rgb(77, 105, 253, 0.5)"})
    }

}, [code])

  return (
    <div className="NTcontainer">
      <div className="NTtop">New Transaction</div>

      <div className="NTmid">
        <p className="NT1st">Create or Join Transaction</p>
        <p className="NT2nd">You want to</p>
        <p className="NTbtn" onClick={()=> showPage("TT")}>Create Transaction</p>
        <div className="NTdash"></div>

        <form onSubmit={handleSubmit}>
        <div className="NTinput">
        <p className="NT3rd">Join Transaction</p>
        <input 
        type="text" 
        required 
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste the transaction code here" />
        </div>
        <button className="NTbtn" type="submit"  style={{
                                        background:`${btnColor.color}` }}
                                      disabled = {btnColor.color == "rgb(77, 105, 253, 0.5)"} >
        {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  " Join"
                )}
          </button>
        </form>
        </div>

      </div>
  );
};

export default NewTransaction;
