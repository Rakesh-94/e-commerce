import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../ConstextApi/CartProvider";
// import {useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  //   let navigate = useNavigate()

  //   const handleClick = () => {
  //     navigate(`/products/${id}`)
  //  }

  console.log("cart : ", cart);

  useEffect(() => {
    if (cart) {
      setTotalPrice(
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      );
      setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cart]);

  return (
    <div className="d-flex justify-content-between">
      <div className="  ">
        <h1>Shopping Cart</h1>
        <h5>{quantity}Itme</h5>
        {cart.map((item, index) => {
          console.log("item : ", item?.quantity);
          return (
            <div className="col-md-3" key={index}>
              <CartItem
                
                title={item?.title}
                price={`${item?.price} $`}
                image={item?.image}
                id={item?.id}
                quantity={item?.quantity}
              />
            </div>
          );
        })}
        <button>Back to shop</button>
      </div>
      <div className="CartPage_Summary">
        <h1>Summary</h1>
        <div className="d-flex justify-content-between">
          <h6>TOTAL ITEM </h6>
          <p>{quantity}</p>
        </div>
        <div className="d-flex justify-content-between">
          <h6>SHIPPING</h6>
          <input type="text" />
        </div>
        <div className="d-flex justify-content-between">
          <h6>TOTAL PRICE</h6>
          <p>${totalPrice }</p>
        </div>
        <button className="btn-warning m-4" onClick={() => clearCart()}>
          Clear Cart
        </button>
        <button
          className="btn-warning m-4 "
          onClick={() => navigate("/Address")}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
