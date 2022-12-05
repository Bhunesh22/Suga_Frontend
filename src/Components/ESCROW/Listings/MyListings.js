import React from 'react'
import './MyListings.css';
import Navbar from '../../navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                        <div className='listingsDetail2'>
                            <a href='/sellskin'><div className='CreateListing1'>Create Listing</div></a>
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
                                                    <div className='assetImage1'></div>
                                                    <div className='assetName'><h1 className='assetName1'>M4 A1 - S</h1><h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                        Ristricted Sniper Rifle</h4></div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td className='assetStatus1'>Awaiting Confirmation</td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className='assetDetail1'>
                                                    <div className='assetImage1'></div>
                                                    <div className='assetName'><h1 className='assetName1'>M4 A1 - S</h1><h4 className='assetName2'>Counter Strike : Global Offensive <br />
                                                        Ristricted Sniper Rifle</h4></div>
                                                </div>
                                            </td>
                                            <td className='assetPrice1'>10000</td>
                                            <td className='assetStatus1'>Awaiting Confirmation</td>
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