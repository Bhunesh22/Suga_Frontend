import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
// import { message } from 'antd';
// import axios from 'axios';
import 'antd/dist/antd.css';
import '../Skin Detail/SkinDetail.css'
import Navbar from '../navbar/Navbar'
import { customEvent } from '../utils/analyticsHelper';

import { set } from 'react-ga';

import axios from 'axios';
import './EscrowSkinDetail.css'

function EscrowSkinDetail() {

    const [data, setData] = useState([]);
    // const [hName, setHName] = useState(
    //      setHName({
    //     ww : itemName + "(Well-Worn)",
    //     mw : itemName + "(Minimal Wear)",
    //     fn : itemName + "(Factory New)",
    //     ft : itemName + "(Field-Tested)",
    //     bs : itemName + "(Battle-Scarred)",
    // })
    // );
    const [skinName, setSkinName] = useState(data?.title);
    const [selectedData, setSelectedData] = useState([]);
    const [skinWalletData, setSkinWalletData] = useState([]);
    const [skinPortData, setSkinPortData] = useState([]);
    const [lootFarmData, setLootFarmData] = useState([]);
    const [steamData, setSteamData] = useState([]);
    const [inr, setInr] = useState(80);

    let { index } = useParams();
    let { name } = useParams();
    let { slug } = useParams();



    useEffect(() => {
        loadUserData();
        skinWallet();
        lootFarm();
        skinPort();
        currency();
        steam();
    }, []);


    // Dmarket Main data show on page 

    const loadUserData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${name}&Limit=1000`, {
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


        let selectedItem = Json?.objects?.filter(function (el) {
            // console.log(el.itemId,"data//",index)
            return el.slug === slug
        });
        // console.log(selectedObj,"dnifidfn");
        setSelectedData(selectedItem)
    }

    let rl = data?.slug?.length + 3
    let itemName = data?.title?.toString()?.slice(0, rl)
    // let sdsadds = itemName.toString()
    // console.log(itemName, "name")


    // console.log(itemName);
    // console.log(rl)

    // console.log(data.slug, "slug");
    // console.log(selectedData)


    //    Dmarket Price Details--------------------------------------------------------------------

    let factoryNew = selectedData.filter(function (el) {
        return el.title.toString().includes("Factory")
    })[0]
    // console.log(factoryNew?.title, "name");

    let minimalWear = selectedData.filter(function (el) {
        return el.title.toString().includes("Minimal")
    })[0]

    let fieldTested = selectedData.filter(function (el) {
        return el.title.toString().includes("Field")
    })[0]

    let wellWorn = selectedData.filter(function (el) {
        return el.title.toString().includes("Well")
    })[0]

    let battleScarred = selectedData.filter(function (el) {
        return el.title.toString().includes("Battle")
    })[0]


    //  Skin Wallet Price Details --------------------------------------------------------------------

    const skinWallet = async () => {
        const res = await fetch(`https://suga-server.herokuapp.com/api/skinwallet`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json1 = await res.json()
        // console.log(json, "key")
        setSkinWalletData(json1)
    }


    let sw_fn = skinWalletData?.filter(function (el) {
        return el?.marketHashName === itemName + "(Factory New)"
    })
    // console.log(sw_fn[0]?.cheapestOffer.price?.amount)

    let sw_mw = skinWalletData?.filter(function (el) {
        return el?.marketHashName === itemName + "(Minimal Wear)"
    })

    let sw_ft = skinWalletData?.filter(function (el) {
        return el?.marketHashName === itemName + "(Field-Tested)"
    })

    let sw_ww = skinWalletData?.filter(function (el) {
        return el?.marketHashName === itemName + "(Well-Worn)"
    })

    let sw_bs = skinWalletData?.filter(function (el) {
        return el?.marketHashName === itemName + "(Battle-Scarred)"
    })


    // console.log(sw_ww[0]?.marketHashName)




    //  lootfarm Price Details --------------------------------------------------------------------

    const lootFarm = async () => {
        const res = await fetch(`https://suga-server.herokuapp.com/api/lootfarm`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json2 = await res.json()
        // console.log(json, "key")
        setLootFarmData(json2)
    }


    let lf_fn = lootFarmData?.filter(function (el) {
        return el?.name === itemName + "(Factory New)"
    })
    // console.log(lf_fn[0]?.price)

    let lf_mw = lootFarmData?.filter(function (el) {
        return el?.name === itemName + "(Minimal Wear)"
    })

    let lf_ft = lootFarmData?.filter(function (el) {
        return el?.name === itemName + "(Field-Tested)"
    })

    let lf_ww = lootFarmData?.filter(function (el) {
        return el?.name === itemName + "(Well-Worn)"
    })

    let lf_bs = lootFarmData?.filter(function (el) {
        return el?.name === itemName + "(Battle-Scarred)"
    })



    //  SkinPort Price Details --------------------------------------------------------------------

    const skinPort = async () => {
        const res = await fetch(`https://suga-server.herokuapp.com/api/skinport`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json3 = await res.json()
        setSkinPortData(json3)
    }
    console.log(skinPortData)


    let sp_fn = skinPortData?.filter(function (el) {
        return el?.market_hash_name === itemName + "(Factory New)"
    })
    // console.log(sp_fn[0]?.min_price)

    let sp_mw = skinPortData?.filter(function (el) {
        return el?.market_hash_name === itemName + "(Minimal Wear)"
    })

    let sp_ft = skinPortData?.filter(function (el) {
        return el?.market_hash_name === itemName + "(Field-Tested)"
    })

    let sp_ww = skinPortData?.filter(function (el) {
        return el?.market_hash_name === itemName + "(Well-Worn)"
    })

    let sp_bs = skinPortData?.filter(function (el) {
        return el?.market_hash_name === itemName + "(Battle-Scarred)"
    })



    //  Steam Price Details --------------------------------------------------------------------


    useEffect(() => {
        steam();
    }, [itemName]);

    const steam = async () => {

        const hName = await {
            ww: itemName + "(Well-Worn)",
            mw: itemName + "(Minimal Wear)",
            fn: itemName + "(Factory New)",
            ft: itemName + "(Field-Tested)",
            bs: itemName + "(Battle-Scarred)",
        }

        const url = "https://suga-server.herokuapp.com/api/steam";
        const res = await axios.post(url, hName);

        setSteamData(res.data)

    }

    // console.log(steamData[0].slice(2));



    //  currency exchnage Details --------------------------------------------------------------------

    const currency = async () => {
        const res = await fetch(`https://suga-server.herokuapp.com/api/exchange`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json1 = await res.json()
        setInr(json1.data)

    }

    // console.log(inr)

    return (
        <>
            <div className='skinDetail1'>
                <div>
                    <Navbar />
                </div>

                <div className='details1'>
                    <div className='skinBox1'>
                        <div className='skinBoxTopArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 7L58.5 0H0V47L9.5 7Z" fill="#A3B1E4" />
                        </svg>
                        </div>
                        <div className='skinBoxFlex1'>
                            <div>
                                {name === undefined ? "loading" : <img className='skin3Logo' src={data.image} />}

                            </div>
                            <div className='skinBlueLine1'></div>
                        </div>
                        <div className='skinBoxBottomArrow1'><svg width="59" height="47" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49 40L0 47L58.5 47L58.5 0L49 40Z" fill="#A3B1E4" />
                        </svg>
                        </div>
                    </div>
                    <div className='skinBlueLine2'></div>
                    <div className='skinFlexItem2'>
                        <div className='skinTitle'> {name === undefined ? "loading" : data.title}</div><br />
                        <div className='skinDetail4'>
                            <p className='skinDetail3'>
                                {/* <h2 className='skinDetail2'>Exterior: Field-Tested</h2><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. */}
                                <br />
                                <br />
                                <div className='skinBuyFlex1'>
                                    {/* <div><h2 className='skinSubTitle1'>The Italy Collection</h2></div> */}
                                    {/* <div><button className='askBuy1'>Ask SuGa to Buy</button></div> */}

                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='orderDetails'>
                    <div className='orderDetails2'>
                        <div className='orderDetails2Flex1'>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Offer id:</label>
                                <label className='orderDetailValue1'>#362723527</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>StatTrak:</label>
                                <label className='orderDetailValue1'>Yes</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Exterior:</label>
                                <label className='orderDetailValue1'>Minimal Wear</label>
                            </div>
                            <div className='orderDetails2Flex2'>
                                <label className='orderDetailName1'>Market Hash Name:</label>
                                <label className='orderDetailValue1'>Minimal Wear</label>
                            </div>

                        </div>
                    </div>

                    <div className='orderQuantity'>
                        <div className='orderUnitprice'>
                    
                            <label>Unit Price:</label>
                            <label className='orderPrice1'>200000</label>
                          
                      
                        </div>
                        <div className='orderDeleveryDetails'>
                            <div className='orderDeleveryDetailsFlex3'>
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Delivery Speed:</label>
                                    <label className='orderPrice2'>1HR</label>
                                </div>
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Stock:</label>
                                    <label className='orderPrice2'>10</label>
                                </div>
                                <div className='orderLine1' />
                                <div className='deliveryDetailsFlex2'>
                                    <label className='deliveryDetails3'>Total Price:</label>
                                    <label className='orderPrice2'>200000</label>
                                </div>


                                <input className='buyTradeURL' placeholder='Buyer Trade URL.......' />
                                <button className='buyItemBtn1'>BUY</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EscrowSkinDetail