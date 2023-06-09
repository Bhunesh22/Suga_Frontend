import React, {useState, useEffect, useContext} from 'react'
import "./MyTransaction.css"
import axios from 'axios'
import GlobalContext from "../../../Context/globalContext";
import { Link } from 'react-router-dom';


const MyTransaction = () => {

    const {user, showPage} = useContext(GlobalContext);

    console.log(user , "user")

    const [data, setData] = useState([])

    useEffect(() => {
        loadUserData();
    }, [showPage]);

    // function ucfirst(str) {
    //     var firstLetter = str.substr(0, 1);
    //     return firstLetter.toUpperCase() + str.substr(1);
    // }


    const loadUserData = async () => {
        const responce = await fetch(`https://sugabackend.azurewebsites.net/api/skin_deal/mytransactions`, {
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

    console.log(data, "datamt")
    // console.log(data)
  return (
    <div className="MTcontainer">
    <div className="MTtop">MY Transaction</div>


    <div className="MTmid">
    <table className="table MTtable" >
  <thead>
    <tr style={{background: "rgba(217, 217, 217, 0.4)", border: "1px solid white"}}>
      <th scope="col">Your Role</th>
      <th scope="col">Payment For</th>
      <th scope="col">Amount</th>
      <th scope="col">Payment</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {data && data?.map((list, index) => {
        return (
            <tr>
            <th scope="row">{user && user?._id == list?.userId ? list.role : list.role == "buyer" ? "Seller" : "Buyer"}</th>
            <td>{list.payment_for}</td>
            <td>{list.amount}</td>
            <td>{list.transaction_proof == "pending" ? "Pending" : "Done"}</td>
            <td>{list.buyer_status == "pending" || list.seller_status == "pending" ? <Link to={`/skindeal/deal/${list._id}`}>Click Here</Link> : <Link to={`/skindeal/deal/${list._id}`}>Success</Link>}</td>
          </tr>
        )
    })}
   
  </tbody>
</table>
</div>

        {/* <button
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
        </button> */}
     
  </div>
  )
}

export default MyTransaction