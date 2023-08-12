/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Nav from "../components/mainNavbar/Navbar";
import Footer from "../components/footer/Footer";
import Map from "../components/map/Map";
import Cart from "../components/cart/cart";
import { Container, Row, Col, Button } from "react-bootstrap";

const MainOrder = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div className="bg">
      <Nav setShow={setShow} size={cart.length} />
      {show ? (
        <Map handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer />
    </div>
  );
};

export default MainOrder;
