import React from 'react'
import "./ECard.css"
import logo from "../marketplace/logos/pngaaa 1.png"
// import binance from "../logos/binance.png"
// import premium from "../logos/premium.png"
import { AiOutlineDollar } from 'react-icons/ai'


const MCard = (props) => {
   
    return (
            <>
                {/* <div style={{display:"none"}}>
                    <Nftdetail  list={props.list}/>
                </div> */}
                    <div className="MNcard" key={props.index}>
                        <div className="ECtop">
                            {/* <div className="Clogo" style={{display:`${props.list.type1 === "null" ? "none": "block"}`}}>
                                <img src={props.list.type} alt="" />
                            </div> */}
                            <div className="ECimg" >
                                <img src={props.list.image} alt="" />
                            </div>
                            {/* <div className="Cbtns">
                                <div className="Cbtn1">
                                    <img src={props.list.categorieLogo} alt="" />
                                    <p>{props.list.categorieName}</p>
                                </div>
                                <div className="Cbtn2">{props.list.categorieName2}</div>
                            </div> */}
                            <div className="ECline"></div>
                        </div>
                        <div className="ECmid">
                            {/* <p>{props.list.title}</p> */}
                            <p>Rs : {props.list.price}</p>
                            {/* <p><AiOutlineDollar size='1.1rem' /></p> */}
                        </div>
                        <div className="ECbottom">
                            <div className="ECleft">
                                <img src={logo} alt="" />
                                <p>{props.list.username}</p>
                            </div>
                            {/* <div className="ECright">
                                <p>Quantity</p>
                                <p>458</p>
                            </div> */}
                        </div>
                    </div>
                    </>
    )
}

export default MCard