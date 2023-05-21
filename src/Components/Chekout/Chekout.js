import React from 'react'
import "./Chekout.css"

const Chekout = () => {
  return (
    <div className='Container'>
              <div className="step active" id="step1">
      <h2 className="step-title">Step 1: Shipping Address</h2>
      <form id="shipping-form">
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" required/>
        </div>
        <div className="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" required/>
        </div>
        <div className="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" required/>
        </div>
        <input type="submit" value="Next"/>
      </form>
    </div>


    <div class="step" id="step2">
      <h2 class="step-title">Step 2: Payment Details</h2>
      <form id="payment-form">
        <div class="form-group">
          <label for="card-number">Card Number:</label>
          <input type="text" id="card-number" required/>
        </div>
        <div class="form-group">
          <label for="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" required/>
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" required/>
        </div>
        <input type="submit" value="Next"/>
      </form>
    </div>


    <div class="step" id="step3">
      <h2 class="step-title">Step 3: Order Summary</h2>
      <div class="order-summary">
        <h3>Shipping Address:</h3>
        <ul>
          <li><strong>Name:</strong> <span id="summary-name"></span></li>
          <li><strong>Address:</strong> <span id="summary-address"></span></li>
          <li><strong>City:</strong> <span id="summary-city"></span></li>
        </ul>

        <h3>Payment Details:</h3>
        <ul>
          <li><strong>Card Number:</strong> <span id="summary-card-number"></span></li>
          <li><strong>Expiry Date:</strong> <span id="summary-expiry-date"></span></li>
          <li><strong>CVV:</strong> <span id="summary-cvv"></span></li>
        </ul>
      </div>

      <input type="submit" value="Confirm Order" id="confirm-btn"/>
    </div>


    </div>
  )
}

export default Chekout;