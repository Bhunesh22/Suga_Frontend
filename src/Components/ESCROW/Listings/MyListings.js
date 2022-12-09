import React, { useState, useEffect } from 'react'
import './MyListings.css';
import Navbar from '../../navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import deleteIcon2 from './delete icon.svg';
import CSGOIcon2 from './csgo icon.svg';
import CircularProgress from "@mui/material/CircularProgress";
import { message } from 'antd';
import 'antd/dist/antd.css';
import assetImageIcon from './assetImage1.svg';
import TradeDoneIcon1 from './tradeDoneIcon.svg';
import TradeCancelIcon1 from './tradeCancelIcon.svg';
import axios from 'axios';
// import { Button } from 'antd';


function MyListings() {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);
    const [user, setUser] = useState({ res: "non_valid" });

    const [data1, setData1] = useState({ upi: "", account_number: "", ifsc: "", contact: "" });
	const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setLoading(true)
        try {
            const url = "https://sugabackend.azurewebsites.net/api/register_as_seller";
          
            await axios.post(url, data1, {headers: {'auth-token': localStorage.getItem('token')}} );
            window.location = "/mylistings";
            setLoading(false)
            message.success("Registered as a seller Successfully");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setLoading(false)
                message.error("Please login to register");
               
            }
        }
    };

    const onChange = (e)=>{
        setData1({...data1, [e.target.name]: e.target.value})
    }


    useEffect(() => {
        fetchUser()
        fetchData()
    }, [])


    let fetchUser = async () => {
        const responce = await fetch(`https://sugabackend.azurewebsites.net/api/register_as_seller`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setUser(Json)
    };

    let fetchData = async () => {
        const responce = await fetch(`https://sugabackend.azurewebsites.net/api/sell/individual_listing`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
    };

    // console.log(data);

    return (
        <>
            <div className='myListings'>
                <div>
                    <Navbar />
                </div>
                <div className='myListingsDetails1'>
                    <div className='myListingBar1'>
                        <div><NavLink to='/mylistings' className={({ isActive }) => isActive ? "activeListingBar" : "listingBar"}>My Listings</NavLink></div>
                        <div><NavLink to='/myorders' className={({ isActive }) => isActive ? "activeListingBar" : "listingBar"}>My Orders</NavLink></div>
                    </div>


                    <div className='listingsDetail1'>


                        {/* for new user */}

                        <div className='accountDetails6' style={user.res == 'Valid_Seller' ? { display: 'none' } : { display: "block" }}>

                            <div className='accountDetails4'>
                                <form className="row g-3 container" onSubmit={handleSubmit}>

                                    <div className='accountDetails5'>
                                        <div className="col-md-12">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            name = "upi"
                                            required
                                            onChange={onChange}
                                            placeholder='Enter UPI details to contunue creating list' />
                                        </div>

                                        <div className='listingFlex2'>
                                            <div className='listingLine1' />
                                            <h4 className='orText2'>OR</h4>
                                            <div className='listingLine1' />
                                        </div>

                                        <div className="col-md-12">
                                            <input 
                                            type="text" 
                                            name = "account_number"
                                            required
                                            onChange={onChange}
                                            className="form-control" placeholder='Enter bank account' />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder='Confirm bank account' />
                                        </div>
                                        <div className="col-md-12">
                                            <input 
                                            type="text" 
                                            name = "ifsc"
                                            required
                                            onChange={onChange}
                                            className="form-control" placeholder='IFSC Code' />
                                        </div>
                                        <div className="col-md-12">
                                            <input 
                                            type="text" 
                                            name = "contact"
                                            required
                                            onChange={onChange}
                                            className="form-control" placeholder='Contact' />
                                        </div>


                                        <div>
                                            <button type='submit' className='submitAccDetails1Btn'>
                                            {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : (
                                            "Submit"
                                        )}
                                                </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>




                        {/* for existing user */}
                        <div className='listingsDetail2'>
                            <Link to='/sellskin' className='CreateListing1'>Create Listing</Link>


                            {data.length != 0 ? 
                            (<div>
                                <table class="table">

                                    <thead>
                                        <tr>

                                            <th scope="col" className='listingDetail3'>Asset</th>
                                            <th scope="col" className='listingDetail3'>Price</th>
                                            <th scope="col" className='listingDetail3'>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {data && data.map((list, index) => {
                                            return (

                                                <tr>
                                                    <td>
                                                        <div className='assetDetail1'>
                                                            <div className='assetImage1'><img className='assetImageIcon2' src={list.image} /></div>
                                                            <div className='assetName'>
                                                                <h1 className='assetName1'>M4 A1 - S</h1>
                                                                <img className='CSGOIcon2' src={CSGOIcon2} />
                                                                <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                                    Ristricted Sniper Rifle</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='assetPrice1'>{list.price}</td>
                                                    <td>
                                                        <div className='assetStatus1'>
                                                            <div>{list.status}<button className='tradeButton'><img className='tradeButton1' src={TradeDoneIcon1} /></button><button className='tradeButton'><img className='tradeButton1' src={TradeCancelIcon1} /></button></div>
                                                            <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>) : 
                            (<div style={{display: 'flex', justifyContent:"center", alignItems:"center", fontSize: "30px", color: "white"}}>No item listed</div>)
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyListings