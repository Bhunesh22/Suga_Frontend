import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
// import { message } from 'antd';
// import axios from 'axios';
import 'antd/dist/antd.css';
import './SkinDetail.css'
import Navbar from '../navbar/Navbar'
import { customEvent } from '../utils/analyticsHelper';
import dmarketLogo from './dmart logo.svg'
import skinwallet from './skinwallet.svg'
import lootfarm from './lootfarm.svg'
import skinport from './skinport.svg'
import { set } from 'react-ga';


function SkinDetail() {

    const [data, setData] = useState([]);
    const [skinName, setSkinName] = useState(data?.title);
    const [selectedData, setSelectedData] = useState([]);
    const [skinWalletData, setSkinWalletData] = useState([]);
    const [skinPortData, setSkinPortData] = useState([]);
    const [lootFarmData, setLootFarmData] = useState([]);
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
    }, []);



    // Dmarket Main data show on page 

    const loadUserData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${name}&Limit=100`, {
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


    const currency = async () => {
        const res = await fetch(`http://localhost:5000/api/exchange`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json1 = await res.json()
        // console.log(json1.data, "key")
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
                <div className='skinDetails2'>
                    <table class="table">
                        <thead
                            style={{ borderBottom: "transparent" }}
                        >
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"><div className='skinType1'>Factory New</div></th>
                                <th scope="col"><div className='skinType1'>Minimal Wear</div></th>
                                <th scope="col"><div className='skinType1'>Field Tested</div></th>
                                <th scope="col"><div className='skinType1'>Well-Worn</div></th>
                                <th scope="col"><div className='skinType1'>Battle-Scarred</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: "transparent" }}>

                                <th scope="row"><div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div></th>

                                <td ><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug} + "-factory-new"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {factoryNew === undefined ? "NA" : (factoryNew?.price.USD / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-minimal-wear"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {minimalWear === undefined ? "NA" : (minimalWear?.price.USD / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-field-tested"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {fieldTested === undefined ? "NA" : (fieldTested?.price.USD / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-well-worn"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {wellWorn === undefined ? "NA" : (wellWorn?.price.USD / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-battle-scarred"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {battleScarred === undefined ? "NA" : (battleScarred?.price.USD / 100)*inr}
                                </div></a></td>
                            </tr>




                            <tr style={{ borderBottom: "transparent" }}>

                                <th scope="row"><div><img className='logoimages1' src={skinwallet} alt="skinwallet" /></div></th>

                                <td ><a href={`https://www.skinwallet.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_fn[0]?.marketHashName === undefined ? "NA" : sw_fn[0]?.cheapestOffer.price?.amount*inr}
                                </div></a></td>

                                <td><a href={`https://www.skinwallet.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_mw[0]?.marketHashName === undefined ? "NA" : sw_mw[0]?.cheapestOffer.price?.amount*inr}
                                </div></a></td>

                                <td><a href={`https://www.skinwallet.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ft[0]?.marketHashName === undefined ? "NA" : sw_ft[0]?.cheapestOffer.price?.amount*inr}
                                </div></a></td>

                                <td><a href={`https://www.skinwallet.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ww[0]?.marketHashName === undefined ? "NA" : sw_ww[0]?.cheapestOffer.price?.amount*inr}
                                </div></a></td>

                                <td><a href={`https://www.skinwallet.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_bs[0]?.marketHashName === undefined ? "NA" : sw_bs[0]?.cheapestOffer.price?.amount*inr}
                                </div></a></td>


                            </tr>
                            <tr style={{ borderBottom: "transparent" }}>

                                <th scope="row"><div><img className='logoimages1' src={skinport} alt="Skinport" /></div></th>

                                <td ><a href={`https://skinport.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_fn === undefined ? "NA" : sp_fn[0]?.min_price*inr}
                                </div></a></td>

                                <td><a href={`https://skinport.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_mw === undefined ? "NA" : sp_mw[0]?.min_price*inr}
                                </div></a></td>

                                <td><a href={`https://skinport.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ft === undefined ? "NA" : sp_ft[0]?.min_price*inr}
                                </div></a></td>

                                <td><a href={`https://skinport.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ww === undefined ? "NA" : sp_ww[0]?.min_price*inr}
                                </div></a></td>

                                <td><a href={`https://skinport.com/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_bs === undefined ? "NA" : sp_bs[0]?.min_price*inr}
                                </div></a></td>

                            </tr>


                            <tr style={{ borderBottom: "transparent" }}>

                                <th scope="row"><div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div></th>

                                <td ><a href={`https://loot.farm/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_fn === undefined ? "NA" : (lf_fn[0]?.price / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://loot.farm/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_mw === undefined ? "NA" : (lf_mw[0]?.price / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://loot.farm/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ft === undefined ? "NA" : (lf_ft[0]?.price / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://loot.farm/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_ww === undefined ? "NA" : (lf_ww[0]?.price / 100)*inr}
                                </div></a></td>

                                <td><a href={`https://loot.farm/`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                    {sw_bs === undefined ? "NA" : (lf_bs[0]?.price / 100)*inr}
                                </div></a></td>


                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* mobile view */}
                <div className='mobileView1'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item, accordianBackground1">
                            <h2 class="accordion-header, accordianBackground1" id="flush-headingOne">
                                <button class="accordion-button collapsed, accordianBackground1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Factory New
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <a href='/#'>
                                    <div class="accordion-body">
                                        <div className='skinDetailAccordian1'>
                                            <div className='skinDetailAccordian2'>
                                                <div className='mobileViewSkinLogos1'>
                                                    <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                    <div><img className='logoimages1' src={skinwallet} alt="Skinwallet" /></div>
                                                    <div><img className='logoimages1' src={skinport} alt="Skinport" /></div>
                                                    <div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div>
                                                </div>
                                                <div className='mobileViewSkinPrices1'>
                                                    <a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug} + "-factory-new"}`} target="_blank"><div onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {factoryNew === undefined ? "NA" : (factoryNew?.price.USD/100)*inr}</div>
                                                    </a>
                                                    <a href={`https://www.skinwallet.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_fn === undefined ? "NA" : sw_fn[0]?.cheapestOffer.price?.amount*inr}</div>
                                                    </a>
                                                    <a href={`https://skinport.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_fn === undefined ? "NA" : sp_fn[0]?.min_price*inr}
                                                    </div>
                                                    </a>
                                                    <a href={`https://loot.farm/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_fn === undefined ? "NA" : (lf_fn[0]?.price / 100)*inr}
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item, accordianBackground1">
                            <h2 class="accordion-header, accordianBackground1" id="flush-headingTwo">
                                <button class="accordion-button collapsed, accordianBackground1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Minimal Wear
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <a href='/#'>
                                    <div class="accordion-body">

                                        <div className='skinDetailAccordian1'>
                                            <div className='skinDetailAccordian2'>
                                                <div className='mobileViewSkinLogos1'>
                                                    <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                    <div><img className='logoimages1' src={skinwallet} alt="Skinwallet" /></div>
                                                    <div><img className='logoimages1' src={skinport} alt="Skinport" /></div>
                                                    <div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div>
                                                </div>
                                                <div className='mobileViewSkinPrices1'>
                                                    <a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-minimal-wear"}`} target="_blank"><div onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {minimalWear === undefined ? "NA" : (minimalWear?.price.USD/100)*inr}</div>
                                                    </a>
                                                    <a href={`https://www.skinwallet.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_mw === undefined ? "NA" : sw_mw[0]?.cheapestOffer.price?.amount*inr}</div>
                                                    </a>
                                                    <a href={`https://skinport.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_mw === undefined ? "NA" : sp_mw[0]?.min_price*inr}
                                                    </div></a>
                                                    <a href={`https://loot.farm/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_mw === undefined ? "NA" : (lf_mw[0]?.price / 100)*inr}
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item, accordianBackground1">
                            <h2 class="accordion-header, accordianBackground1" id="flush-headingThree">
                                <button class="accordion-button collapsed, accordianBackground1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Field Tested
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <a href='/#'>
                                    <div class="accordion-body">
                                        <div className='skinDetailAccordian1'>
                                            <div className='skinDetailAccordian2'>
                                                <div className='mobileViewSkinLogos1'>
                                                    <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                    <div><img className='logoimages1' src={skinwallet} alt="Skinwallet" /></div>
                                                    <div><img className='logoimages1' src={skinport} alt="Skinport" /></div>
                                                    <div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div>
                                                </div>
                                                <div className='mobileViewSkinPrices1'>
                                                    <a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-field-tested"}`} target="_blank"><div onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {fieldTested === undefined ? "NA" : (fieldTested?.price.USD/100)*inr}</div>
                                                    </a>
                                                    <a href={`https://www.skinwallet.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ft === undefined ? "NA" : sw_ft[0]?.cheapestOffer.price?.amount*inr}</div>
                                                    </a>
                                                    <a href={`https://skinport.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ft === undefined ? "NA" : sp_ft[0]?.min_price*inr}
                                                    </div></a>
                                                    <a href={`https://loot.farm/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ft === undefined ? "NA" : (lf_ft[0]?.price / 100)*inr}
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item, accordianBackground1">
                            <h2 class="accordion-header, accordianBackground1" id="flush-headingFour">
                                <button class="accordion-button collapsed, accordianBackground1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Well-Worn
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <a href='/#'>
                                    <div class="accordion-body">
                                        <div className='skinDetailAccordian1'>
                                            <div className='skinDetailAccordian2'>
                                                <div className='mobileViewSkinLogos1'>
                                                    <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                    <div><img className='logoimages1' src={skinwallet} alt="Skinwallet" /></div>
                                                    <div><img className='logoimages1' src={skinport} alt="Skinport" /></div>
                                                    <div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div>
                                                </div>
                                                <div className='mobileViewSkinPrices1'>
                                                    <a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-well-worn"}`} target="_blank"><div onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {wellWorn === undefined ? "NA" : (wellWorn?.price.USD/100)*inr}</div>
                                                    </a>
                                                    <a href={`https://www.skinwallet.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ww === undefined ? "NA" : sw_ww[0]?.cheapestOffer.price?.amount*inr} </div>
                                                    </a>
                                                    <a href={`https://skinport.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ww === undefined ? "NA" : sp_ww[0]?.min_price*inr}
                                                    </div></a>
                                                    <a href={`https://loot.farm/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_ww === undefined ? "NA" : (lf_ww[0]?.price / 100)*inr}
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item, accordianBackground1">
                            <h2 class="accordion-header, accordianBackground1" id="flush-headingFive">
                                <button class="accordion-button collapsed, accordianBackground1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Battle-Scarred
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <a href='/#'>
                                    <div class="accordion-body">
                                        <div className='skinDetailAccordian1'>
                                            <div className='skinDetailAccordian2'>
                                                <div className='mobileViewSkinLogos1'>
                                                    <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                    <div><img className='logoimages1' src={skinwallet} alt="Skinwallet" /></div>
                                                    <div><img className='logoimages1' src={skinport} alt="Skinport" /></div>
                                                    <div><img className='logoimages1' src={lootfarm} alt="Lootfarm" /></div>
                                                </div>
                                                <div className='mobileViewSkinPrices1'>
                                                    <a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined ? "ak-47-asiimov" : data.slug + "-battle-scarred"}`} target="_blank"><div onClick={() => customEvent("SkinDetail", "Dmarket", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {battleScarred === undefined ? "NA" : (battleScarred?.price.USD/100)*inr}</div>
                                                    </a>
                                                    <a href={`https://www.skinwallet.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinWallet", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_bs === undefined ? "NA" : sw_bs[0]?.cheapestOffer.price?.amount*inr}</div>
                                                    </a>
                                                    <a href={`https://skinport.com/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "SkinPort", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_bs === undefined ? "NA" : sp_bs[0]?.min_price*inr}
                                                    </div></a>
                                                    <a href={`https://loot.farm/`} target="_blank"><div onClick={() => customEvent("SkinDetail", "LootFarm", "user", name === undefined ? "ak-47-asiimov" : data.slug)}>
                                                        {sw_bs === undefined ? "NA" : (lf_bs[0]?.price / 100)*inr}
                                                    </div></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SkinDetail