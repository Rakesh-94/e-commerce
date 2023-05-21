import React, { useEffect, useState } from "react";

import axios from "axios";
import Product2 from "./Product2";

export default function Allproducts() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setState(res.data));
  }, []);
  return (
    <div>
      <Product2 state={state} />
    </div>
  );
}
