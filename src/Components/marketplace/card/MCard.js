import React from 'react'
import "./MCard.css"
import logo from "../logos/pngaaa 1.png"
// import binance from "../logos/binance.png"
// import premium from "../logos/premium.png"
import { AiOutlineDollar } from 'react-icons/ai'

const MCard = (props) => {
   
    return (
       
                    <div className="card" key={props.index}>
                        <div className="Ctop">
                            <div className="Clogo" style={{display:`${props.list.type1 === "null" ? "none": "block"}`}}>
                                <img src={props.list.type} alt="" />
                            </div>
                            <div className="Cimg" >
                                <img src={props.list.image} alt="" />
                            </div>
                            <div className="Cbtns">
                                <div className="Cbtn1">
                                    <img src={props.list.categorieLogo} alt="" />
                                    <p>{props.list.categorieName}</p>
                                </div>
                                <div className="Cbtn2">{props.list.categorieName2}</div>
                            </div>
                            <div className="Cline"></div>
                        </div>
                        <div className="Cmid">
                            <p>{props.list.name}</p>
                            <p>575</p>
                            <p><AiOutlineDollar size='1.1rem' /></p>
                        </div>
                        <div className="Cbottom">
                            <div className="Cleft">
                                <img src={logo} alt="" />
                                <p>Counter Strike : Global Offensive
                                    Ristricted Sniper Rifle</p>
                            </div>
                            <div className="Cright">
                                <p>Quantity</p>
                                <p>458</p>
                            </div>
                        </div>
                    </div>
    )
}

export default MCard