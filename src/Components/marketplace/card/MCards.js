import React, {useState, useEffect} from 'react'
import MCard from './MCard'
import { McardDetails } from './MCardDetails'
import './MCards.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


const MCards = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
   loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios.get("http://localhost:5000/cardDetails").then((response) => setData(response.data)).catch((err) => console.log(err));
  }

  // console.log("data", data);
  


  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
 
  // const cat = "premium"

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className="Ccontainer">
         {currentItems? currentItems.map((list, index) => {
              return (
                  <MCard list={list} index={index} />
                  )
                    }): null}
                  </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName = "pagination"
        pageClassName = "li-page-num"
        pageLinkClassName = "a-page-num"
        previousLinkClassName	= "page-cng"
        nextClassName = "li-page-next"
        nextLinkClassName = "a-page-next"
        activeLinkClassName = "active"
      />
    </>
  );
}

export default MCards

// .filter(data => data.type1 == cat)
