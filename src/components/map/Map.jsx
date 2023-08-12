import React, { useState, useEffect } from "react";
import Cards from "../card/card";
import { Container, Row, Col, Button } from "react-bootstrap";

import axios from "axios";

const Map = ({ handleClick }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/menu");
      console.log(res);
      setList(res.data.rows);
    } catch (error) {
      console.log(error);
    }
  };

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
                      King Deals
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
                      Kids Meal
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
                      Pesta Merdeka
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
                      BEVERAGES
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
                      Double Mantul
                    </p>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={8} style={{}}>
              <Row className="">
                {list.map((item) => (
                  <Col lg={6} className="mb-3">
                    <Cards
                      key={item.id}
                      item={item}
                      handleClick={handleClick}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            {/* <Col lg={4}></Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
