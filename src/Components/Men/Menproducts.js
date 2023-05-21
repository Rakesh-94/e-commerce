import React, {useEffect, useState } from 'react'

import axios from 'axios';
import Product from './Product';


export default function Menproducts() {
  const [state,setState]= useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res)=>setState(res.data))
  },[])
    return (
      <div>
        <Product state={state}/>
      </div>
    )
}

