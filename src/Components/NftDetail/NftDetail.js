import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import './nftdetail.css'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BuyPopup from '../buyPopup/BuyPopup';
import { message } from 'antd';
import 'antd/dist/antd.css';


function Nftdetail() {
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
      setVisibility(false);
    };
    // filter: blur(5px);

    const handleBuy = () =>{
        if(localStorage.getItem('token')){
            setVisibility(true)
        }
        else{
            message.warning("Please login to proceed for next step");
        }
    }
    
    return (
        <>
        <div className='cardInformation' style={{filter: visibility===true ?'blur(5px)':'blur(0px)'}}>

            <Navbar />
            {/* <div className='bar2'></div> */}
            <div className='details'>
                <div className='itemBox2'>
                    <div className='itemBoxTopArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 7L58.5 0H0V47L9.5 7Z" fill="#A3B1E4" />
                    </svg>
                    </div>
                    <div className='itemBoxFlex1'>
                        <div><img className='skin2Logo' src='/logos/imgbin_fortnite-battle-royale-skin-battle-royale-game-epic-games-png 3.png' /></div>
                        <div className='blueLine3'></div>
                    </div>
                    <div className='itemBoxBottomArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49 40L0 47L58.5 47L58.5 0L49 40Z" fill="#A3B1E4" />
                    </svg>
                    </div>
                </div>
                <div className='blueLine2'></div>
                <div className='flexItem2' >
                    <div className='itemTitle'>AWP | Pit Viper</div><br />
                    <div className='itemDetail'>
                        <p className='itemDetail1'>
                            <h2 className='itemDetail2'>Exterior: Field-Tested</h2><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            <br />
                            <br />
                            <h2 className='subTitle1'>The Italy Collection</h2>
                        </p>
                        <div className='opensea1'>
                            {/* <div className='openSea'><img src='/images/opensea logo.png' />Open Sea</div><br /> */}
                            <div className='nft'>NFT</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flexDetails1'>
                <div className='detailsBar2'>
                    <div className='sellerBarTopArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 7L58.5 0H0V47L9.5 7Z" fill="#A3B1E4" />
                    </svg>
                    </div>
                    <div className='detailsBarFlex1'>
                        <div className='seller1'>Price</div>
                        <div className='price2'>575</div>
                        <div className='buy2' onClick={handleBuy}>BUY</div>
                    </div>
                    <div className='sellerBarBottomArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49 40L0 47L58.5 47L58.5 0L49 40Z" fill="#A3B1E4" />
                    </svg>
                    </div>
                </div>
                {/* <div className='sellerDetails1'>
                    <div className='indLogo1'><img src='/images/india logo.png' /></div>
                    <div className='name2'>Yash_Bharani_Roxx</div>
                </div> */}
            </div>
        </div>
         <BuyPopup
         onClose={popupCloseHandler}
         show={visibility}
         />
         </>
    )
}

export default Nftdetail