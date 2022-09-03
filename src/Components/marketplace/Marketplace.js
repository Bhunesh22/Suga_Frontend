import React, { useState, useEffect } from 'react'
// import nacl from "tweetnacl";
// import * as https from 'https';
import { Link, useParams } from 'react-router-dom';

import "./Marketplace.css"
import MCard from './card/MCard'
// import DropDown from "./dropdown/DropDown"
// import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from '../navbar/Navbar';
// import Nftdetail from '../NftDetail/NftDetail';
// import SkinDetail from '../Skin Detail/SkinDetail';

const options = ["AK-47", "AWP", "M4A1-S", "MP9", "USP-S", "P250", "M249", "NAVAJA", "KARAMBIT", "BUTTERFLY-KNIFE"];

const Marketplace = () => {

    let { type } = useParams();
    console.log(type, "type of items")

    // if(type === undefined){
    //     var A = "AK-47"
    // }
    // else{
    //     let A = type
    // }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(type === undefined? "AK-47" : type);
    const toggling = () => setIsOpen(!isOpen);

    useEffect(() => {
        // console.log("run")
        loadUserData();
    }, [selectedOption]);

    const onOptionClicked = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
    };
    // console.log(selectedOption); 
    // const handleFilter = async (value) =>{
    //     if(value === "All Items"){
    //         return await axios.get("http://localhost:5000/cardDetails").then((response) => setData(response.data)).catch((err) => console.log(err));
    //     }
    //     else{
    //     return await axios.get(`http://localhost:5000/cardDetails?type1=${value.toLowerCase()}`).then((response) => {
    //         setData(response.data);
    //     }).catch((err) => console.log(err));
    // }
    // }

    const [searchTitle, setSearchTitle] = useState("");
    const [data, setData] = useState([]);

    // const handleSearch = async () => {
    //     if(selectedOption === null || selectedOption === "All Items"){
    //         return await axios.get(`http://localhost:5000/cardDetails?q=${searchTitle}`).then((response) => setData(response.data)).catch((err) => console.log(err));
    //     }
    //     else
    //     return await axios.get(`http://localhost:5000/cardDetails?type1=${selectedOption.toLowerCase()}&q=${searchTitle}`).then((response) => {
    //         setData(response.data);
    //     }).catch((err) => console.log(err));
    // };

    const loadUserData = async () => {
        const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=${selectedOption}&Limit=500`, {
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


    // console.log(data.objects)

    // const loadUserData = async () => {
    //     return await axios.get("http://localhost:5000/cardDetails").then((response) => setData(response.data)).catch((err) => console.log(err));}



    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.toString().slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.toString().length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data.objects]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.objects.length;
        setItemOffset(newOffset);
    };

    return (
        <>
        <div style={{display:"none"}}>
            {/* <SkinDetail  option={selectedOption}/> */}
        </div>
            <div className="Mcontainer">
                <div className="NMcontainer"><Navbar/></div>
                <div className="Mbackground-box1"></div>
                <div className="Mbg1"></div>
                <div className="Mbackground-box2"></div>

                <div className="Mtop">

                    <div className="Mleft">
                        {/* <form onSubmit={handleSearch}> */}
                        <input type="text" onChange={(e) => { setSearchTitle(e.target.value); /*handleSearch()*/ }} placeholder="&#61442;   Looking  for  something  specific?  Type  here" />
                        {/* <button type='submit'>Search</button> */}
                        {/* </form> */}
                    </div>

                    <div className="Mright">
                        <p>Category :</p>
                        <div className="Mdropdown">
                            <div className="MheadContainer">
                                <div className="Mheader" onClick={toggling}>
                                    {selectedOption || "AK-47"}
                                </div>
                                <span className="Marrow"><AiFillCaretDown style={{ color: "#4D69FD" }} /></span>
                                {isOpen && (
                                    <div className="MlistContainer">
                                        <ul>
                                            {options.map(option => (
                                                <li onClick={() => { onOptionClicked(option); /*handleFilter(option)*/; }} key={Math.random()}>
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
                        {data.length === 0 ? (<div style={{ color: "white", fontSize: "20px", textAling: "center" }}>NO Data Found</div>) : data.objects.map((list, index) => {
                            return (
                                <Link to={`/skindetail/${list.itemId}/${selectedOption}/${list.slug}`}><MCard list={list} index={index} /></Link>
                            )
                        })}
                    </div>
                    {pageCount > 1 ? (<ReactPaginate
                        breakLabel="..."
                        nextLabel="NEXT"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={8}
                        pageCount={pageCount}
                        previousLabel=""
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="li-page-num"
                        pageLinkClassName="a-page-num"
                        previousLinkClassName="page-cng"
                        nextClassName="li-page-next"
                        nextLinkClassName="a-page-next"
                        activeLinkClassName="active"
                    />) : "null"}

                </div>
                {/* ) : (
                    <div className="Mmarket">
                    <div className="Ccontainer">
                        {currentItems.length === 0 ? (<div style={{ color: "white", fontSize: "20px", textAling: "center" }}>NO Data Found</div>) : currentItems.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }).map((list, index) => {
                            return (
                                <MCard list={list} index={index} />
                            )
                        })}
                    </div>
                    {pageCount > 1? (<ReactPaginate
                        breakLabel="..."
                        nextLabel="NEXT"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={8}
                        pageCount={pageCount}
                        previousLabel=""
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="li-page-num"
                        pageLinkClassName="a-page-num"
                        previousLinkClassName="page-cng"
                        nextClassName="li-page-next"
                        nextLinkClassName="a-page-next"
                        activeLinkClassName="active"
                    />) : "null" }
                    
                </div>

                )

                }                                    
                 */}

            </div>
        </>
    )
}

export default Marketplace
