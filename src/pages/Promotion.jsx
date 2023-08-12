/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Img from "../assets/images/ah5i2q3ykgpjkc7cjpzzfb.jpg";
import Nav from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Promotion = () => {
  return (
    <div className="bg">
      <Nav />
      <Container>
        <img
          src="https://bkdelivery.co.id/media/landscape_image/2023/8/1/zugpcjqatrbptcpwom3boj.jpg"
          alt=""
          className="w-100 mt-3 mb-3"
        />
        <img
          src="https://bkdelivery.co.id/media/landscape_image/2023/8/1/9m6q6coxhmizhasbh74umm.jpg"
          alt=""
          className="w-100 mt-3 mb-3"
        />
        <img
          src="https://bkdelivery.co.id/media/landscape_image/2023/7/24/fr5p7hv8bd7hsnt7ma329o.jpg"
          alt=""
          className="w-100 mt-3 mb-3"
        />
        <img
          src="https://bkdelivery.co.id/media/landscape_image/2023/1/18/mez28xqf8xytdfzprxx2an.jpg"
          alt=""
          className="w-100 mt-3 mb-3"
        />
        <img src={Img} alt="" className="w-100 mt-3 mb-3" />
      </Container>
      <Footer />
    </div>
  );
};

export default Promotion;
