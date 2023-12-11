import React, { useState, useEffect } from 'react'

import "./EscrowMarketplace.css"
import ECard from './ECard.js';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { customEvent } from '../utils/analyticsHelper';




const EscrowMarketplace = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetchData()
    }, [])


    let fetchData = async () => {
        const responce = await fetch(`https://suga-backend-0bkm.onrender.com/api/sell`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
    };

    console.log(data);

    return (
        <>
            <div className="Mcontainer">
                <div className="NMcontainer"><Navbar /></div>

                <div className="Mmarket">
                    <div className="Ccontainer">
                    {data && data.map((list, index) => {
                                return (
                                    <Link to={`/escrowskindetail/${index}`} ><ECard list={list} index={index} /></Link>
                                )
                            })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default EscrowMarketplace
