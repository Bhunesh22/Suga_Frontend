import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './nftdetail.css'
import { Link, useParams } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BuyPopup from '../buyPopup/BuyPopup';
import { message } from 'antd';
import 'antd/dist/antd.css';

function Nftdetail() {
    const [visibility, setVisibility] = useState(false);
    const [data, setData] = useState([]);

    let { index } = useParams();
    let { name } = useParams();
    // console.log(index,"id")
    console.log(name);
    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${name}&Limit=500`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086",
            }
        });
        const Json = await responce.json()
        //    console.log(Json)

        let selectedObj = Json?.objects?.filter(function (el) {
            // console.log(el.itemId,"data//",index)
            return el.itemId === index
        })[0];
        // console.log(selectedObj,"dnifidfn");
        setData(selectedObj)
    }

    // console.log(data, "title");

    // if(data)

    // console.log(data,"data//")





    // function getResult(filterBy, objList) {
    //     return objList.objects.filter(function(obj) {
    //      return obj.itemId == index
    //    });
    //   }
    //   getResult(itemId, yourObject);

    // Object.filter = (obj, predicate) =>
    //     Object.keys(obj)
    //         .filter(key => predicate(obj[key]))
    //         .reduce((res, key) => (res[key] = obj[key], res), {});

    // var filtered = Object.filter(data, itemId => itemId === index);
    // console.log(filtered);


    const popupCloseHandler = () => {
        setVisibility(false);
    };
    // filter: blur(5px);



    const handleBuy = () => {
        if (localStorage.getItem('token')) {
            setVisibility(true)
        }
        else {
            message.warning("Please login to proceed for next step");
        }
    }

    return (
        <>
            <div className='cardInformation' style={{ filter: visibility === true ? 'blur(5px)' : 'blur(0px)' }}>

                <Navbar />
                {/* <div className='bar2'></div> */}
                <div className='details'>
                    <div className='itemBox2'>
                        <div className='itemBoxTopArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 7L58.5 0H0V47L9.5 7Z" fill="#A3B1E4" />
                        </svg>
                        </div>
                        <div className='itemBoxFlex1'>
                            <div>
                                <img className='skin2Logo' src={data.image} />
                            </div>
                            <div className='blueLine3'></div>
                        </div>
                        <div className='itemBoxBottomArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49 40L0 47L58.5 47L58.5 0L49 40Z" fill="#A3B1E4" />
                        </svg>
                        </div>
                    </div>
                    <div className='blueLine2'></div>
                    <div className='flexItem2' >
                        <div className='itemTitle'>title</div><br />
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
                                <h2>The Italy Collection</h2>
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