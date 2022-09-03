import React from 'react'
import "./HCard.css"
import logo from "../logos/pngaaa 1.png"
import { AiOutlineDollar } from 'react-icons/ai'

const Card = (props) => {
   
    return (
       
                    <div className="HCcard" key={props.index} style={{cursor:'pointer'}}>
                        <div className="HCtop">
                            <div className="HCimg">
                                <img src={props.list.image} alt="" />
                            </div>
                            {/* <div className="HCbtns">
                                <div className="HCbtn1">Sugaverse</div>
                                <div className="HCbtn2">NFT</div>
                            </div> */}
                            <div className="HCline"></div>
                        </div>
                        <div className="HCmid">
                            <p>{props.list.name}</p>
                            {/* <div className="HCprice">
                            <p>575</p>
                            <p><AiOutlineDollar size='1.1rem' /></p>
                            </div> */}
                        </div>
                        <div className="HCbottom">
                            <div className="HCleft">
                                <img src={logo} alt="" />
                                <p>Counter Strike : Global Offensive</p>
                            </div>
                            <div className="HCright">
                                <p>Quantity:</p>
                                <p>500</p>
                            </div>
                        </div>
                    </div>
    )
}

export default Card