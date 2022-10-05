import React, { useState, useEffect } from 'react'
// import nacl from "tweetnacl";
// import * as https from 'https';
import { Link, useParams } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import "./Marketplace.css"
import MCard from './card/MCard'
// import DropDown from "./dropdown/DropDown"
// import axios from 'axios';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from '../navbar/Navbar';
import { customEvent } from '../utils/analyticsHelper';
// import Nftdetail from '../NftDetail/NftDetail';
// import SkinDetail from '../Skin Detail/SkinDetail';

const options = ["AK-47", "AWP", "M4A1-S", "MP9", "USP-S", "P250", "M249", "NAVAJA", "KARAMBIT", "BUTTERFLY-KNIFE"];



const Marketplace = () => {

    let { type } = useParams();
    // console.log(type, "type of items")


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(type === undefined ? "AK-47" : type);
    const toggling = () => setIsOpen(!isOpen);

    useEffect(() => {
        // setItems(40)
        loadUserData();
    }, [selectedOption]);

    const onOptionClicked = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
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

                    <div className="Mleft">
                        {/* <form onSubmit={handleSearch}> */}
                        {/* <input type="text" onChange={(e) => { setSearchTitle(e.target.value); handleSearch() }} placeholder="&#61442;   search  " /> */}
                        {/* <button type='submit'>Search</button> */}
                        {/* </form> */}
                    </div>

                    <div className="Mright">
                        <p>Category :</p>
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader"  onClick={() => { toggling();  customEvent("Category DropDown of Items",`${localStorage.getItem("token")}`,`${selectedOption}`); }}>
                                    {selectedOption || "AK-47"}
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options.map(option => (
                                                <li onClick={() => { onOptionClicked(option);  customEvent("Item DropDown From Market Page",`${localStorage.getItem("token")}`,`${selectedOption}`); }} key={Math.random()}>
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

                {/* {searchTitle === ""? ( */}
                <div className="Mmarket">
                    <div className="Ccontainer">
                        <InfiniteScroll
                            dataLength={data?.objects.length*1}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<h4 style={{color:"white"}}>Loading...</h4>}
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
