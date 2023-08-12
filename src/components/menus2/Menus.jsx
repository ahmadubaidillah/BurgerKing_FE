/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Button, Card, Stack } from "react-bootstrap";
import cardImg1 from "../../assets/images/amwdjxph9s6gxv93umwicu_product_list.jpg";
import Cards from "../card/card";

const Menus = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col lg={10} className="mx-auto">
          <Row className="mx-auto">
            <Col lg={4} className="" style={{}}>
              <Row>
                <Col lg={12} className="mb-2">
                  {" "}
                  <Button className="w-75 btn-warning">
                    <p
                      className="mt-1 mb-1 fs-4 fw-bold text-start"
                      style={{ color: "#502304" }}
                    >
                      {" "}
                      Special Menu
                    </p>
                  </Button>
                </Col>
                <Col lg={12} className="mb-2">
                  {" "}
                  <Button className="w-75 btn-warning">
                    <p
                      className="mt-1 mb-1 fs-4 fw-bold text-start"
                      style={{ color: "#502304" }}
                    >
                      {" "}
                      Special Menu
                    </p>
                  </Button>
                </Col>
                <Col lg={12} className="mb-2">
                  {" "}
                  <Button className="w-75 btn-warning">
                    <p
                      className="mt-1 mb-1 fs-4 fw-bold text-start"
                      style={{ color: "#502304" }}
                    >
                      {" "}
                      Special Menu
                    </p>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={8} style={{}}>
              <Row className="">
                <Col lg={6} className="mb-3">
                  <Cards />
                </Col>
                <Col lg={6} className="mb-3">
                  <Cards />
                </Col>
              </Row>
            </Col>
            {/* <Col lg={4}></Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Menus;
