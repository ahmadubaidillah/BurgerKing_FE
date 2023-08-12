/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
const Check = ({ Price }) => {
  // const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.filter((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };

  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans += item.amount * item.price));
  //   setPrice(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={12} className="w-75 mx-auto">
          <Card
            //   text={dark}
            style={{ backgroundColor: "#fff" }}
            className="mb-2 mx-auto login-card"
          >
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
              <Card.Title className="mt-5">
                <h1 className="fw-bold  " style={{ color: "#8b542f" }}>
                  Total Rp. {Price}
                </h1>
              </Card.Title>

              <Form>
                <Form.Group
                  className="mb-5 w-75 mx-auto"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="w-75 fs-4 fw-bold"
                    style={{
                      backgroundColor: "#ed7801",
                      borderColor: "#ed7801",
                    }}
                  >
                    Place My Order
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "#fff" }}
              className="d-flex justify-content-center"
            >
              <Card.Text>
                <h3
                  className="fw-bold mt-4 me-3"
                  style={{ color: "#8b542f", backgroundColor: "#fff" }}
                >
                  Not a Member Yet?
                </h3>
              </Card.Text>
              <a
                href="/register"
                className=" fs-4 fw-bold h-50 ms-3 mt-4 btn text-white"
                style={{
                  backgroundColor: "#faaf18",
                  borderColor: "#faaf18",
                }}
              >
                Register
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Check;
