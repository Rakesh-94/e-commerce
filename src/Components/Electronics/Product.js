import React, {      useEffect, useState } from 'react'
import Cart from './Card'


export default function Product (props) {
  const [state,setState] = useState([])
  useEffect(()=>{
    setState(props.state)
  },[props])
    return (
      <div className='container my-1'>
        <h1>Electornics Product</h1>
        <div className='row'>
          {state.map((item,index)=>{
            console.log(item.price);
              return(
              <div className='col-md-3' key={index}>
                <Cart  title={item.title} description={`${item.price} $`} image={item?.image} id={item.id}/>
              </div>
      )

          })}
        </div>
      </div>
    )
  
}
