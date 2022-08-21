import React from 'react'
import Card from './Card'
import { cardDetails } from './CardDetails'
import './Cards.css';
import { Link } from 'react-router-dom';


const Cards = () => {
  return (
    <div className="Ccontainer">
         {cardDetails? cardDetails.map((list, index) => {
             return (
                 <Link to={`/nftdetail/${index}`}><Card list={list} index={index} /></Link>
                 )
                   }): null}
                 </div>
  )
}

export default Cards