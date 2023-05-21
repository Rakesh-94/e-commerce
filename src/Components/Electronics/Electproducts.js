import React, {useEffect, useState } from 'react'

import axios from 'axios';
import Product from './Product';


export default function Electproducts() {
  const [state,setState]= useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/electronics").then((res)=>setState(res.data))
  },[])
    return (
      <div>
        <Product state={state}/>
      </div>
    )
}


