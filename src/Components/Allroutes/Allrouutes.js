import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Allproducts from '../Allproducts/Allproducts';
import Menproducts from '../Men/Menproducts';
import Jewelproducts from '../Jewelery/Jewelproducts';
import Electproducts from '../Electronics/Electproducts';
import Womenproducts from '../Women/Womenproducts';
import ProductDetails2 from '../ProductDetails/ProductDetails2';
// import { CartItem } from '../Cart/CartItem';
import CartPage from '../Cart/CartPage';
// import Checkout from './Checkout';
// import Chekout from '../Chekout/Chekout';
import ChekoutAddress from '../Chekout/ChekoutAddress/ChekoutAddress';
import ChekoutPyment from '../Chekout/ChekoutPyment/ChekoutPyment';
import ChekoutSummary from '../Chekout/ChekoutSummary/ChekoutSummary';


const Allrouutes = () => {  
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Allproducts" element={<Allproducts />} />
      <Route exact path="/Womenproducts" element={<Womenproducts />} />
      <Route exact path="/Menproducts" element={<Menproducts />} />
      <Route exact path="/Jewelproduct" element={<Jewelproducts />} />
      <Route exact path="/Electproducts" element={<Electproducts />} />
      <Route exact path="/products/:id" element={<ProductDetails2 />} />
      <Route exact path="/Cartcart" element={<CartPage />} />
      {/* <Route exact path="/Chekout" element={<Chekout />} />      */}
      <Route exact path="/Address" element={<ChekoutAddress />} />      
      <Route exact path="/Pyment" element={<ChekoutPyment />} />      
      <Route exact path="/Summary" element={<ChekoutSummary />} />      

    </Routes>
    <Footer />
  </Router>
  </>
  )
}

export default Allrouutes