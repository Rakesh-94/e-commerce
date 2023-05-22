import React, { useContext } from "react";
import "./ChekoutAdress.css";
import { FormContext } from "../../../ConstextApi/ConstextApi";
import { useNavigate } from "react-router-dom";

const ChekoutAddress = () => {

  const navigate = useNavigate();

  const { shippingAddress, setShippingAddress } = useContext(FormContext);
  // console.log("this is foor testing",address);
  return (
    <div className="ChekoutAddress border">
      <div className="ChekoutAddress_Cart">
        <h2>Step 1: Shipping Address</h2>
        <form id="ChekoutAddress_form">
          <div className="chekoutAddress_input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingAddress?.name}
              onChange={(e) =>
                setShippingAddress((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="chekoutAddress_input">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={shippingAddress?.address}
              onChange={(e) =>
                setShippingAddress((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }  required />
          </div>
          <div className="chekoutAddress_input">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={shippingAddress?.city}
              onChange={(e) =>
                setShippingAddress((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              } required />
          </div>
          <button className="ChekoutAddress_form_button" type="submit" onClick={(e) => {
            if(shippingAddress.name>0 || shippingAddress.address>0 || shippingAddress.city){
            e.preventDefault();
            navigate('/Pyment')
          }
          }} >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChekoutAddress;
