/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/mainNavbar/Navbar";
import Carts from "../components/cart/cart";
import Footer from "../components/footer/Footer";
import Check from "../components/cart/check";

const Cart = () => {
  return (
    <div className="bg">
      <Nav />
      <Carts />
      <Footer />
    </div>
  );
};

export default Cart;
