import React, { useContext } from 'react'
import "./ChekoutSummary.css"
import { FormContext } from "../../../ConstextApi/ConstextApi";
import { useNavigate } from "react-router-dom";

const ChekoutSummary = () => {

  const navigate = useNavigate();

  const { shippingAddress, paymentMethod  } = useContext(FormContext);

  return (
    <div className='ChekoutSummary border'>
        <div className='ChekoutSummary_Cart'>
      <h2 >Step 3: Order Summary</h2>
      <div className  ="ChekoutSummary_order-summary">
        <h3>Shipping Address:</h3>
        <ul>
          <li><strong>Name:</strong> <span>{shippingAddress.name}</span></li>
          <li><strong>Address:</strong> <span>{shippingAddress.address}</span></li>
          <li><strong>City:</strong> <span>{shippingAddress.city}</span></li>
        </ul>

        <h3>Payment Details:</h3>
        <ul>
          <li><strong>Card Number:</strong> <span >{paymentMethod.cardNumber}</span></li>
          <li><strong>Expiry Date:</strong> <span >{paymentMethod.expiryDate}</span></li>
          <li><strong>CVV:</strong> <span>{paymentMethod.cvv}</span></li>
        </ul>
      </div>

      <button type="submit" onClick={() => {
        if(shippingAddress.name>0 || shippingAddress.address>0 || shippingAddress.city || paymentMethod.cardNumber || paymentMethod.expiryDate || paymentMethod.cvv){
          
          alert("Thank you for purchase");
          navigate('/')
        }
          }} >
            Next
          </button>
    </div>
    </div>
  )
}

export default ChekoutSummary