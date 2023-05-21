import React, { useState, useEffect, useContext } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../../ConstextApi/CartProvider";
// import {useNavigate } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();

  // let navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  //   const handleCart = () => {
  //     navigate(`/carts/2`)
  //  }
  const handleCart = (product, redirect) => {
    // console.log(localStorage.getItem('cart')  )
    // const cart = JSON.parse(localStorage.getItem('cart')  || "[]");
   

    const isProductExist = cart.find((item) => item.id === product.id);
    console.log(id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCart((prev) => [...prev, updatedCart]);
    } else {
      const data = [...cart, { ...product, quantity: 1 }];
      console.log("data : ", data);
      setCart(data);
    }
    alert("Product added to cart");
    if (redirect) {
      // navigate(`/products/${id}`)
    }
  };

  return (
    <div className="single-product-container ">
      <div className="image-container">
        <img
          src={product?.image}
          alt={product?.title}
          className="product-image"
        />
      </div>
      <div className="description-container">
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
        <b className="d-flex justify-content-between ">
          <p className="">Available Sizes:</p>

          <p className=""> Available Colors:</p>

          <p className="">Available Stock: {product?.stock}</p>
        </b>
        <div>
          <button
            className="btn btn-lg btn-warning w-50"
            onClick={() => handleCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
