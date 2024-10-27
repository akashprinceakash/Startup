import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Quicksearch() {
    const location = useLocation();
    const queryparams = new URLSearchParams(location.search);
     
    const shopid=queryparams.get('shop');
    const imagesrc=queryparams.get('image')
    const names=queryparams.get('name')
  return (
    <>
    <div style={{textAlign:'center'}}>
    <h1>Welocome to {names}</h1>
    <div>shopid:{shopid}</div>
   <img src={imagesrc} alt="" srcset="" height={'500px'} /> 
   </div>
    </>
  )
}
