import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import "./Marketplace.css"
import MCard from './card/MCard'

import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from '../navbar/Navbar';
import { customEvent } from '../utils/analyticsHelper';




const options1 = ["Desert-Eagle", "DUAL-BERETTAS", "FIVE-SEVEN", "GLOCK-18", "P2000", "P250", "R8-REVOLVER", "TEC-9", "USP-S"];

const options2 = ["MAC-10", "MP5-SD", "MP7", "MP9", "MP9", "P90", "PP-BIZON", "UMP-45"];

const options3 = ["AK-47", "AWP", "M4A1-S", "FAMAS", "GALIL-AR", "M4A4", "SG-553", "G3SG1", "SCAR-20", "SSG-08"];

const options4 = ["NOVA", "SAWED-OFF", "XM1014", "M249", "NEGEV"];

const options5 = ["HUNTSMAN-KNIFE", "BOWIE-KNIFE", "BUTTERFLY-KNIFE", "M9-BAYONET", "CLASSIC-KNIFE", "FALCHION-KNIFE", "NOMAD-KNIFE", "NAVAJA-KNIFE","FLIP-KNIFE","PARACORD-KNIFE","GUT-KNIFE","SHADOW-KNIFE","SKELETON-KNIFE","STILETTO-KNIFE","SURVIVAL-KNIFE","TALON-KNIFE","URSUS-KNIFE", ];

const options6 = ["HAND-WRAPS", "MOTO-GLOVES","SPECIALIST-GLOVES","SPORT-GLOVES","BLOODHOUND-GLOVES","HYDRA-GLOVES","BROKEN-GLOVES","DRIVER-GLOVES", ];


const Marketplace = () => {

    let { type } = useParams();
    // console.log(type, "type of items")

    const [selectedOption, setSelectedOption] = useState(type === undefined ? "AK-47" : type);

    const [isOpen1, setIsOpen1] = useState(false);
    const toggling1 = () => setIsOpen1(!isOpen1);

    const [isOpen2, setIsOpen2] = useState(false);
    const toggling2 = () => setIsOpen2(!isOpen2);

    const [isOpen3, setIsOpen3] = useState(false);
    const toggling3 = () => setIsOpen3(!isOpen3);

    const [isOpen4, setIsOpen4] = useState(false);
    const toggling4 = () => setIsOpen4(!isOpen4);

    const [isOpen5, setIsOpen5] = useState(false);
    const toggling5 = () => setIsOpen5(!isOpen5);

    const [isOpen6, setIsOpen6] = useState(false);
    const toggling6 = () => setIsOpen6(!isOpen6);

    useEffect(() => {
        // setItems(40)
        loadUserData();
    }, [selectedOption]);

    const onOptionClicked1 = (value) => {
        setSelectedOption(value);
        setIsOpen1(false);
    };
    const onOptionClicked2 = (value) => {
        setSelectedOption(value);
        setIsOpen2(false);
    };
    const onOptionClicked3 = (value) => {
        setSelectedOption(value);
        setIsOpen3(false);
    };
    const onOptionClicked4 = (value) => {
        setSelectedOption(value);
        setIsOpen4(false);
    };
    const onOptionClicked5 = (value) => {
        setSelectedOption(value);
        setIsOpen5(false);
    };
    const onOptionClicked6 = (value) => {
        setSelectedOption(value);
        setIsOpen6(false);
    };


    const [items, setItems] = useState(24);
    const [data, setData] = useState();


    const loadUserData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${selectedOption}&Limit=${items}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086",
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
    }

    let fetchMoreData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${selectedOption}&Limit=${items + 24}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086",
            }
        });
        const Json = await responce.json()
        //    console.log(Json)
        setData(Json)
        setItems(items + 24)
    };

    // useEffect(() => {
    //     // fetchMoreData()
    // }, [items])
    // console.log(items);

    // const total_items = data?.objects.length;

    // console.log(total_items);


    return (
        <>
            <div style={{ display: "none" }}>
                {/* <SkinDetail  option={selectedOption}/> */}
            </div>
            <div className="Mcontainer">
                <div className="NMcontainer"><Navbar /></div>
                <div className="Mbackground-box1"></div>
                <div className="Mbg1"></div>
                <div className="Mbackground-box2"></div>

                <div className="Mtop">

                    {/* <div className="Mleft"> */}
                        {/* <form onSubmit={handleSearch}> */}
                        {/* <input type="text" onChange={(e) => { setSearchTitle(e.target.value); handleSearch() }} placeholder="&#61442;   search  " /> */}
                        {/* <button type='submit'>Search</button> */}
                        {/* </form> */}
                    {/* </div> */}
                    <div className="Mright">
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling1();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                    PISTOLS
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen1 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options1.map(option => (
                                                <li onClick={() => { onOptionClicked1(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling2();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                SMG
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen2 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options2.map(option => (
                                                <li onClick={() => { onOptionClicked2(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling3();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                RIFLE
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen3 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options3.map(option => (
                                                <li onClick={() => { onOptionClicked3(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling4();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                HEAVY
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen4 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options4.map(option => (
                                                <li onClick={() => { onOptionClicked4(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling5();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                KNIVES
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen5 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options5.map(option => (
                                                <li onClick={() => { onOptionClicked5(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling6();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                GLOVES
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen6 && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options6.map(option => (
                                                <li onClick={() => { onOptionClicked6(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>




                    </div>
                </div>

                {/* <div className='Mtop2'>
                    
                    <div>
                        <div class="dropdown" >
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PISTOLS
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">CZ75-Auto</a></li>
                                <li><a class="dropdown-item" href="#">Desert Eagle</a></li>
                                <li><a class="dropdown-item" href="#">Dual Berettas</a></li>
                                <li><a class="dropdown-item" href="#">Five-SeveN</a></li>
                                <li><a class="dropdown-item" href="#">Glock-18</a></li>
                                <li><a class="dropdown-item" href="#">P2000</a></li>
                                <li><a class="dropdown-item" href="#">P250</a></li>
                                <li><a class="dropdown-item" href="#">R8 Revolver</a></li>
                                <li><a class="dropdown-item" href="#">Tec-9</a></li>
                                <li><a class="dropdown-item" href="#">USP-S</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SMG
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">MAC-10</a></li>
                                <li><a class="dropdown-item" href="#">MP5-SD</a></li>
                                <li><a class="dropdown-item" href="#">MP7</a></li>
                                <li><a class="dropdown-item" href="#">MP9</a></li>
                                <li><a class="dropdown-item" href="#">P90</a></li>
                                <li><a class="dropdown-item" href="#">PP-Bizon</a></li>
                                <li><a class="dropdown-item" href="#">UMP-45</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                RIFLE
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">AK-47</a></li>
                                <li><a class="dropdown-item" href="#">AUG</a></li>
                                <li><a class="dropdown-item" href="#">FAMAS</a></li>
                                <li><a class="dropdown-item" href="#">Galil AR</a></li>
                                <li><a class="dropdown-item" href="#">M4A1-S</a></li>
                                <li><a class="dropdown-item" href="#">M4A4</a></li>
                                <li><a class="dropdown-item" href="#">SG 553</a></li>
                                <li><a class="dropdown-item" href="#">AWP</a></li>
                                <li><a class="dropdown-item" href="#">G3SG1</a></li>
                                <li><a class="dropdown-item" href="#">SCAR-20</a></li>
                                <li><a class="dropdown-item" href="#">SSG 08</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                HEAVY
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Nova</a></li>
                                <li><a class="dropdown-item" href="#">Sawed-Off</a></li>
                                <li><a class="dropdown-item" href="#">XM1014</a></li>
                                <li><a class="dropdown-item" href="#">M249</a></li>
                                <li><a class="dropdown-item" href="#">Negev</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                KNIVES
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Bayonet</a></li>
                                <li><a class="dropdown-item" href="#">Huntsman Knife</a></li>
                                <li><a class="dropdown-item" href="#">Bowie Knife</a></li>
                                <li><a class="dropdown-item" href="#">Karambit</a></li>
                                <li><a class="dropdown-item" href="#">Butterfly Knife</a></li>
                                <li><a class="dropdown-item" href="#">M9 Bayonet</a></li>
                                <li><a class="dropdown-item" href="#">Classic Knife</a></li>
                                <li><a class="dropdown-item" href="#">Navaja Knife</a></li>
                                <li><a class="dropdown-item" href="#">Falchion Knife</a></li>
                                <li><a class="dropdown-item" href="#">Nomad Knife</a></li>
                                <li><a class="dropdown-item" href="#">Flip Knife</a></li>
                                <li><a class="dropdown-item" href="#">Paracord Knife</a></li>
                                <li><a class="dropdown-item" href="#">Gut Knife</a></li>
                                <li><a class="dropdown-item" href="#">Shadow Daggers</a></li>
                                <li><a class="dropdown-item" href="#">Skeleton Knife</a></li>
                                <li><a class="dropdown-item" href="#">Stiletto Knife</a></li>
                                <li><a class="dropdown-item" href="#">Survival Knife</a></li>
                                <li><a class="dropdown-item" href="#">Talon Knife</a></li>
                                <li><a class="dropdown-item" href="#">Ursus Knife</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GLOVES
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                {/* {searchTitle === ""? ( */}
                <div className="Mmarket">
                    <div className="Ccontainer">
                        <InfiniteScroll
                            dataLength={data?.objects.length * 1}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4 style={{ color: "white" }}>Loading...</h4>}
                        >
                             {data && data.objects.map((list, index) => {
                            return (
                                <Link to={`/skindetail/${list.itemId}/${selectedOption}/${list.slug}`}  onClick={() => customEvent("Asset Card From Market",`${localStorage.getItem("token")}`,`${list.slug}`)}><MCard list={list} index={index} /></Link>
                            )
                        })}
                        </InfiniteScroll>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Marketplace
