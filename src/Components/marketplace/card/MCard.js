import React from 'react'
import "./MCard.css"
import logo from "../logos/pngaaa 1.png"
// import binance from "../logos/binance.png"
// import premium from "../logos/premium.png"
import { AiOutlineDollar } from 'react-icons/ai'
import Nftdetail from '../../NftDetail/NftDetail'

const MCard = (props) => {
   
    return (
            <>
                {/* <div style={{display:"none"}}>
                    <Nftdetail  list={props.list}/>
                </div> */}
                    <div className="MNcard" key={props.index}>
                        <div className="MCtop">
                            {/* <div className="Clogo" style={{display:`${props.list.type1 === "null" ? "none": "block"}`}}>
                                <img src={props.list.type} alt="" />
                            </div> */}
                            <div className="MCimg" >
                                <img src={props.list.image} alt="" />
                            </div>
                            {/* <div className="Cbtns">
                                <div className="Cbtn1">
                                    <img src={props.list.categorieLogo} alt="" />
                                    <p>{props.list.categorieName}</p>
                                </div>
                                <div className="Cbtn2">{props.list.categorieName2}</div>
                            </div> */}
                            <div className="MCline"></div>
                        </div>
                        <div className="MCmid">
                            <p>{props.list.title}</p>
                            {/* <p>575</p>
                            <p><AiOutlineDollar size='1.1rem' /></p> */}
                        </div>
                        <div className="MCbottom">
                            <div className="MCleft">
                                <img src={logo} alt="" />
                                <p>Counter Strike : Global Offensive
                                    Ristricted Sniper Rifle</p>
                            </div>
                            {/* <div className="MCright">
                                <p>Quantity</p>
                                <p>458</p>
                            </div> */}
                        </div>
                    </div>
                    </>
    )
}

export default MCard