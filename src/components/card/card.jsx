/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Button, Card, Stack } from "react-bootstrap";
import cardImg1 from "../../assets/images/amwdjxph9s6gxv93umwicu_product_list.jpg";

const Cards = ({ item, handleClick }) => {
  const { name, price, image } = item;
  return (
    <Card className="shadow " style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={image}
        className=" mx-auto mt-3"
        style={{ width: "280px" }}
      />
      <Card.Body>
        <Card.Title className="">
          <Row>
            <Col md={12}>
              <div className="fw-bold fs-5" style={{ color: "#8B542f" }}>
                {name}
              </div>
            </Col>
            <Col md={8}>
              <p className="fw-bold fs-5 mt-2" style={{ color: "#d72300" }}>
                Rp. {price}
              </p>
            </Col>
            <Col md={4}>
              <button className="btn" onClick={() => handleClick(item)}>
                Add to Cart
              </button>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Cards;
