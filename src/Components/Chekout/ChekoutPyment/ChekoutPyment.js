import React, { useContext } from 'react'
import "./ChekoutPyment.css"
import { FormContext } from "../../../ConstextApi/ConstextApi";
import { useNavigate } from "react-router-dom";

const ChekoutPyment = () => {


  const navigate = useNavigate();

  const { paymentMethod, setPaymentMethod } = useContext(FormContext);

  return (
    <div className='ChekoutPyment border'>
            <div className="ChekoutPyment_Cart">
      <h2>Step 2: Payment Details</h2>
      <form id="ChekoutPyment_form">
        <div className="ChekoutPyment_input">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="cardNumber"value={paymentMethod?.cardNumber}
              onChange={(e) =>
                setPaymentMethod((prev) => ({
                  ...prev,
                  cardNumber: e.target.value,
                }))
              } required/>
        </div>
        <div className="ChekoutPyment_input">
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiryDate"value={setPaymentMethod?.expiryDate}
              onChange={(e) =>
                setPaymentMethod((prev) => ({
                  ...prev,
                  expiryDate: e.target.value,
                }))
              } required/>
        </div>
        <div className="ChekoutPyment_input">
          <label htmlFor="cvv">CVV:</label>
          <input type="password" id="cvv" name="cvv"value={setPaymentMethod?.cvv}
              onChange={(e) =>
                setPaymentMethod((prev) => ({
                  ...prev,
                  cvv: e.target.value,
                }))
              } required/>
        </div>
        <button className='ChekoutPyment_form_button' type="submit" onClick={(e) => {
          if(paymentMethod.cardNumber || paymentMethod.expiryDate || paymentMethod.cvv){
            e.preventDefault();
            navigate('/Summary')
          }
          }} >
            Next
          </button>
      </form>
    </div>
    </div>
  )
}

export default ChekoutPyment