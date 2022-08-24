import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
import { message } from 'antd';
import 'antd/dist/antd.css';
import './SkinDetail.css'
import Navbar from '../navbar/Navbar'


function SkinDetail() {

    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);


    let { index } = useParams();
    let { name } = useParams();
    let { slug } = useParams();
    // console.log(index,"id")
    // console.log(name, "name");
    console.log(slug, "slug");

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

    console.log(selectedData)

    let factoryNew = selectedData.filter(function (el){
        return el.title.toString().includes("Factory")
    })[0]
    console.log(factoryNew?.price.USD);


    let minimalWear = selectedData.filter(function (el){
        return el.title.toString().includes("Minimal")
    })[0]
    console.log(minimalWear?.price.USD);


    let fieldTested = selectedData.filter(function (el){
        return el.title.toString().includes("Field")
    })[0]
    console.log(fieldTested?.price.USD);


    let wellWorn = selectedData.filter(function (el){
        return el.title.toString().includes("Well")
    })[0]
    console.log(wellWorn?.price.USD);

    let battleScarred = selectedData.filter(function (el){
        return el.title.toString().includes("Battle")
    })[0]
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
                                {name === undefined? "loading" : <img className='skin3Logo'  src={data.image} />}
                                
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
                        <div className='skinTitle'> {name === undefined? "loading" : data.title}</div><br />
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
                        style={{borderBottom:"transparent"}}
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
                                <th scope="row"><div></div></th>
                                <td ><div className='skinPrice1'>
                                    {factoryNew === undefined? "NA" : factoryNew?.price.USD}
                                    </div></td>
                                <td><div className='skinPrice1'>
                                    {minimalWear === undefined? "NA" : minimalWear?.price.USD}
                                </div></td>
                                <td><div className='skinPrice1'>
                                    {fieldTested === undefined? "NA" : fieldTested?.price.USD}
                                    </div></td>
                                <td><div className='skinPrice1'>
                                    {wellWorn === undefined? "NA" : wellWorn?.price.USD}
                                    </div></td>
                                <td><div className='skinPrice1'>
                                    {battleScarred === undefined? "NA" : battleScarred?.price.USD}
                                    </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mobileView1'>
                    <div class="accordion accordion-flush, accordian3" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed, accordian3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Factory New
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Minimal Wear
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Field Tested
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                Well-Worn
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                Battle-Scarred
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SkinDetail