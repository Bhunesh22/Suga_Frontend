import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
// import { message } from 'antd';
// import axios from 'axios';
import 'antd/dist/antd.css';
import '../Skin Detail/SkinDetail.css'
import Navbar from '../navbar/Navbar'
import { message } from 'antd';
import 'antd/dist/antd.css';
import CircularProgress from "@mui/material/CircularProgress";
import { customEvent } from '../utils/analyticsHelper';

import { set } from 'react-ga';

import axios from 'axios';
import './EscrowSkinDetail.css'

function EscrowSkinDetail() {

    let { index } = useParams();

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const [data1, setData1] = useState({trade_url : "", username_seller: ""});
    // console.log(data[index].username);

    useEffect(() => {
        fetchData()
    }, [])
    

    let fetchData = async () => {
        const responce = await fetch(`https://suga-server.herokuapp.com/api/sell`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setLoading(true)
        try {
            const url = "https://suga-server.herokuapp.com/api/buy";
          
           
            await axios.post(url, data1 , {headers: {'auth-token': localStorage.getItem('token')}} );
            // window.location = "/";
            setLoading(false)
            message.success("Success");
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setLoading(false)
                message.error("Please Login to Buy");
               
            }
        }
    };


    const handleChange = (e) => {
        setData1({trade_url: e.target.value, username_seller : data[index] == undefined ? "none" : data[index].username})
    }



   
    return (
        <>
            <div className='skinDetail1'>
                <div>
                    <Navbar />
                </div>


                    <div className="allWindow" style={{display: "flex", justifyContent: "space-around"}}>

                <div className='details1'>
                    <div className='skinBox5'>
                        {/* <div className='skinBoxTopArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 7L58.5 0H0V47L9.5 7Z" fill="#A3B1E4" />
                        </svg>
                        </div> */}
                        <div className='skinBoxFlex1'>
                            <div>
                                
                                {data[index] == undefined ? <img className='skin3Logo' style={{marginTop:"0px", width:"600px", height: "auto"}} src="" alt="Loading..."/> :  
                                <img className='skin3Logo' style={{marginTop:"0px", width:"600px", height: "auto"}}  src={data[index].image} />}
                            </div>

                            {/* <div className='skinBlueLine1'></div> */}

                        </div>
                        {/* <div className='skinBoxBottomArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49 40L0 47L58.5 47L58.5 0L49 40Z" fill="#A3B1E4" />
                        </svg>
                        </div> */}
                    </div>
                    <div className='skinBlueLine2'></div>
                   
                </div>



                <div className='orderDetails' style={{alignItems: "flex-start", marginTop:"50px"}}>
                    {/* <div className='orderDetails2'>
                        <div className='orderDetails2Flex1'>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Offer id:</label>
                                <label className='orderDetailValue1'>#362723527</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>StatTrak:</label>
                                <label className='orderDetailValue1'>Yes</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Exterior:</label>
                                <label className='orderDetailValue1'>Minimal Wear</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Market Hash Name:</label>
                                <label className='orderDetailValue1'>Minimal Wear</label>
                            </div>

                        </div>
                    </div> */}
                      <form onSubmit={handleSubmit} >
                    <div className='orderQuantity'>
                        <div className='orderUnitprice'>
                    
                            <label>Unit Price:</label>
                            <label className='orderPrice1'>{data[index] == undefined? "loading...": data[index].price}</label>
                      
                        </div>
                        <div className='orderDeleveryDetails'>
                            <div className='orderDeleveryDetailsFlex3'>
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Delivery Speed:</label>
                                    <label className='orderPrice2'>1HR</label>
                                </div>
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Stock:</label>
                                    <label className='orderPrice2'>10</label>
                                </div>
                                <div className='orderLine1' />
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Total Price:</label>
                                    <label className='orderPrice2'>{data[index] == undefined? "loading...": data[index].price}</label>
                                </div>

                              
                                <input 
                                type="text"
                                className='buyTradeURL'  
                                placeholder='Enter Your Trade URL.......' 
                                name = "trade_url"
                                onChange={handleChange}
                                required
                                />
                                <button type='submit' className='buyItemBtn1'>
                                {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : (
                                            "Buy"
                                        )}
                                    </button>

                            </div>
                        </div>
                    </div>

                    </form>
                    
                </div>


                </div>
            </div>
        </>
    )
}

export default EscrowSkinDetail