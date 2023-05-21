import React, { useContext, useEffect, useState } from "react";
import "./CartItem.css";
import { CartContext } from "../../ConstextApi/CartProvider";
// import man from './LogoI.png'

export const CartItem = ({ image, price, title, quantity, id }) => {
  let [count, Setcount] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  let decrement = () => {
    quantity > 0 &&
      setCart((prev) => {
        return prev.map((item) => {
          const product = { ...item };
          if (product.id === id) {
            product.quantity -= 1;
          }
          return product;
        });
      });
  };

  let increment = () => {
    setCart((prev) => {
      return prev.map((item) => {
        const product = { ...item };
        if (product.id === id) {
          product.quantity += 1;
        }
        return product;
      });
    });
  };

  // const itemRemove =()=>{

  // }
  const itemRemove = () => {
    const updatedCart = cart.filter((item) => item.id !== id);
    console.log("deleted cart : ", updatedCart);
    setCart(updatedCart);
  };

  useEffect(() => {
    if (quantity) {
      Setcount(quantity);
    }
  }, [quantity]);

  return (
    <div className="CartPage">
      <div className="d-flex">
        <div className="CartPageImage">
          <img src={image} className="card_Img" alt="..." />
        </div>
        <div className="m-4">
          <div>
            <h5 className="">{title}</h5>
            <p className="">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>price:{price}</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <button onClick={decrement}>-</button>
              <h4>{count}</h4>
              <button onClick={increment}>+</button>
            </div>
            <h5>total price:{Number(price.split(" ")[0]) * count}</h5>
            <button
              className="btn btn-warning float"
              onClick={() => itemRemove()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
