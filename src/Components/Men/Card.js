import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ title, description, image, id }) {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="my-2">
      {/* <h1>Card</h1> */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button onClick={handleClick} className="btn btn-primary">View details</button>
        </div>
      </div>
    </div>
  );
}
