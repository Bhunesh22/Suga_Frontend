import React, {useState, useEffect} from 'react'
import Navbar from '../../navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import deleteIcon2 from './delete icon.svg';
import CSGOIcon2 from './csgo icon.svg';
import assetImageIcon from './assetImage1.svg';
import TradeDoneIcon1 from './tradeDoneIcon.svg';
import TradeCancelIcon1 from './tradeCancelIcon.svg';
// import { Button } from 'antd';

function MyOrders() {

  const [data, setData] = useState();
  const [user, setUser] = useState({ res: "non_valid" });

  useEffect(() => {
      fetchData()
  }, [])


  let fetchData = async () => {
      const responce = await fetch(`https://suga-backend-0bkm.onrender.com/api/buy/order`, {
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

  console.log(data)
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

          {data ?
          (<div className='listingsDetail1'>
            <div className='listingsDetail2'>

              <div>

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
                            <h4 className='assetName2'>{list.username_seller}</h4>
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

                  )})}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          ): (<div style={{display: 'flex', justifyContent:"center", alignItems:"center"}}>No item listed</div>)}

        </div>
      </div>
    </>
  )
}

export default MyOrders