import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
// import { message } from 'antd';
import 'antd/dist/antd.css';
import './SkinDetail.css'
import Navbar from '../navbar/Navbar'
import { customEvent } from '../utils/analyticsHelper';
import dmarketLogo from './dmart logo.svg'


function SkinDetail() {

    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);


    let { index } = useParams();
    let { name } = useParams();
    let { slug } = useParams();
    // console.log(index,"id")
    // console.log(name, "name");
    // console.log(slug, "slug");

    useEffect(() => {
        loadUserData();
    }, []);

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

    // console.log(data.slug, "slug");


    // console.log(selectedData)

    let factoryNew = selectedData.filter(function (el) {
        return el.title.toString().includes("Factory")
    })[0]
    // console.log(factoryNew?.price.USD);
    // console.log(factoryNew?.slug);


    let minimalWear = selectedData.filter(function (el) {
        return el.title.toString().includes("Minimal")
    })[0]
    // console.log(minimalWear?.price.USD);
    // console.log(minimalWear?.slug);


    let fieldTested = selectedData.filter(function (el) {
        return el.title.toString().includes("Field")
    })[0]
    // console.log(fieldTested?.price.USD);


    let wellWorn = selectedData.filter(function (el) {
        return el.title.toString().includes("Well")
    })[0]
    // console.log(wellWorn?.price.USD);

    let battleScarred = selectedData.filter(function (el) {
        return el.title.toString().includes("Battle")
    })[0]

    // console.log(battleScarred?.price.USD)
    console.log(battleScarred?.price.USD);




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
                                <h2 className='skinDetail2'>Exterior: Field-Tested</h2><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.
                                <br />
                                <br />
                                <div className='skinBuyFlex1'>
                                    <div><h2 className='skinSubTitle1'>The Italy Collection</h2></div>
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
                            <tr style={{borderBottom:"transparent"}}>
                            <th scope="row"><div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div></th>

                                <td ><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined? "ak-47-asiimov" : data.slug} + "-factory-new"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail","Dmarket","user",name === undefined? "ak-47-asiimov" : data.slug)}>
                                    {factoryNew === undefined? "NA" : factoryNew?.price.USD}
                                    </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined? "ak-47-asiimov" : data.slug + "-minimal-wear"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail","Dmarket","user",name === undefined? "ak-47-asiimov" : data.slug)}>
                                    {minimalWear === undefined? "NA" : minimalWear?.price.USD}
                                </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined? "ak-47-asiimov" : data.slug + "-field-tested"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail","Dmarket","user",name === undefined? "ak-47-asiimov" : data.slug)}>
                                    {fieldTested === undefined? "NA" : fieldTested?.price.USD}
                                    </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined? "ak-47-asiimov" : data.slug + "-well-worn"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail","Dmarket","user",name === undefined? "ak-47-asiimov" : data.slug)}>
                                    {wellWorn === undefined? "NA" : wellWorn?.price.USD}
                                    </div></a></td>

                                <td><a href={`https://dmarket.com/ingame-items/item-list/csgo-skins?title=${name === undefined? "ak-47-asiimov" : data.slug + "-battle-scarred"}`} target="_blank"><div className='skinPrice1' onClick={() => customEvent("SkinDetail","Dmarket","user",name === undefined? "ak-47-asiimov" : data.slug)}>
                                    {battleScarred === undefined? "NA" : battleScarred?.price.USD}
                                    </div></a></td>

                                
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                                <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                <div>$100</div>
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
                                                <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                <div>$100</div>
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
                                                <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                <div>$100</div>
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
                                                <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                <div>$100</div>
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
                                                <div><img className='logoimages1' src={dmarketLogo} alt="Dmarket" /></div>
                                                <div>$100</div>
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