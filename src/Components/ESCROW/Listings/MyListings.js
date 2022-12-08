import React from 'react'
import './MyListings.css';
import Navbar from '../../navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import deleteIcon2 from './delete icon.svg';
import CSGOIcon2 from './csgo icon.svg';
import assetImageIcon from './assetImage1.svg';
import TradeDoneIcon1 from './tradeDoneIcon.svg';
import TradeCancelIcon1 from './tradeCancelIcon.svg';
// import { Button } from 'antd';

function MyListings() {
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

                        <div className='accountDetails6'>

                            <div className='accountDetails4'>
                                <form className="row g-3 container" >

                                    <div className='accountDetails5'>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder='Enter UPI details to contunue creating list' />
                                        </div>

                                        <div className='listingFlex2'>
                                            <div className='listingLine1' />
                                            <h4 className='orText2'>OR</h4>
                                            <div className='listingLine1' />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder='Enter bank account' />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder='Confirm bank account' />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder='IFSC Code' />
                                        </div>


                                        <div>
                                            <button type='submit' className='submitAccDetails1Btn'>Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>





                        {/* for existing user */}
                        <div className='listingsDetail2'>
                            <Link to='/sellskin' className='CreateListing1'>Create Listing</Link>
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
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'><img className='assetImageIcon2' src={assetImageIcon} /></div>
                                                    <div className='assetName'>
                                                        <h1 className='assetName1'>M4 A1 - S</h1>
                                                        <img className='CSGOIcon2' src={CSGOIcon2} />
                                                        <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                            Ristricted Sniper Rifle</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td>
                                                <div className='assetStatus1'>
                                                    <div>Awaiting Confirmation</div>
                                                    <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'><img className='assetImageIcon2' src={assetImageIcon} /></div>
                                                    <div className='assetName'>
                                                        <h1 className='assetName1'>M4 A1 - S</h1>
                                                        <img className='CSGOIcon2' src={CSGOIcon2} />
                                                        <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                            Ristricted Sniper Rifle</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td>
                                                <div className='assetStatus1'>
                                                    <div>Trade offer made?<button className='tradeButton'><img className='tradeButton1' src={TradeDoneIcon1} /></button><button className='tradeButton'><img className='tradeButton1' src={TradeCancelIcon1} /></button></div>
                                                    <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'><img className='assetImageIcon2' src={assetImageIcon} /></div>
                                                    <div className='assetName'>
                                                        <h1 className='assetName1'>M4 A1 - S</h1>
                                                        <img className='CSGOIcon2' src={CSGOIcon2} />
                                                        <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                            Ristricted Sniper Rifle</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td>
                                                <div className='assetStatus1'>
                                                    <div>Listed</div>
                                                    <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'><img className='assetImageIcon2' src={assetImageIcon} /></div>
                                                    <div className='assetName'>
                                                        <h1 className='assetName1'>M4 A1 - S</h1>
                                                        <img className='CSGOIcon2' src={CSGOIcon2} />
                                                        <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                            Ristricted Sniper Rifle</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td>
                                                <div className='assetStatus1'>
                                                    <div>In transit</div>
                                                    <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'><img className='assetImageIcon2' src={assetImageIcon} /></div>
                                                    <div className='assetName'>
                                                        <h1 className='assetName1'>M4 A1 - S</h1>
                                                        <img className='CSGOIcon2' src={CSGOIcon2} />
                                                        <h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                            Ristricted Sniper Rifle</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td>
                                                <div className='assetStatus1'>
                                                    <div>Trade Completed</div>
                                                    <div><button className='deleteIcon2'><img src={deleteIcon2} /></button></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyListings