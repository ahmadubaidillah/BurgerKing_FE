/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Img from "../assets/images/ah5i2q3ykgpjkc7cjpzzfb.jpg";
import Nav from "../components/mainNavbar/Navbar";
import Footer from "../components/footer/Footer";

const LargeOrder = () => {
  return (
    <div className="bg">
      <Nav />
      <img src={Img} alt="" className="w-100" />
      <Container>
        <Row>
          <Col lg={12}>
            <Row className="mt-4 mb-4 shadow">
              <Col
                lg={8}
                className="bg-white"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <h1
                  className="fw-bold mt-3 ms-3 mb-3"
                  style={{ color: "#502314" }}
                >
                  RAMEIN ACARAMU BARENG BK!
                </h1>
                <h4
                  className="fw-bold mt-3 ms-3 mb-3"
                  style={{ color: "#502314" }}
                >
                  Pilih Paket (Minimum order 20 pax/Paket)
                </h4>

                <div
                  className=" d-flex justify-content-start  mb-3 mx-3"
                  style={{
                    backgroundColor: "#f9f4f2",
                    borderRadius: "7px",
                    height: "40px",
                  }}
                >
                  <p
                    className="fw-bold  mt-2 ms-3 mb-3"
                    style={{ color: "#502314" }}
                  >
                    1pc Ayam Crispy + Nasi + Mineral Water
                  </p>
                  <Form.Group
                    className="mb-5  ms-auto me-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                </div>
                <div
                  className=" d-flex justify-content-start  mb-3 mx-3"
                  style={{
                    backgroundColor: "#f9f4f2",
                    borderRadius: "7px",
                    height: "40px",
                  }}
                >
                  <p
                    className="fw-bold  mt-2 ms-3 mb-3"
                    style={{ color: "#502314" }}
                  >
                    2pcs Ayam Crispy/ Spicy/ Mix + Nasi
                  </p>
                  <Form.Group
                    className="mb-5  ms-auto me-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                </div>
                <div
                  className="d-flex justify-content-start mb-3 mx-3"
                  style={{
                    backgroundColor: "#f9f4f2",
                    borderRadius: "7px",
                    height: "40px",
                  }}
                >
                  <p
                    className="fw-bold  mt-2 ms-3 mb-3"
                    style={{ color: "#502314" }}
                  >
                    Chicken Burger + Mineral Water
                  </p>
                  <Form.Group
                    className="mb-5  ms-auto me-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                </div>
                <div
                  className="d-flex justify-content-start mb-3 mx-3"
                  style={{
                    backgroundColor: "#f9f4f2",
                    borderRadius: "7px",
                    height: "40px",
                  }}
                >
                  <p
                    className="fw-bold  mt-2 ms-3 mb-3"
                    style={{ color: "#502314" }}
                  >
                    Beef Burger + Mineral Water
                  </p>
                  <Form.Group
                    className="mb-5  ms-auto me-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                </div>

                <hr className=" " style={{ backgroundColor: "#f9f4f2" }} />
                <h5
                  className="fw-bold mt-3 ms-3 mb-3"
                  style={{ color: "#502314" }}
                >
                  Detail Acara!
                </h5>
                <div className=" mb-3 mx-3 ">
                  <Form.Group
                    className="mt-1 ms-auto me-3  "
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Alamat"
                      className=""
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-start mb-3 mx-3">
                  <Form.Group
                    className="mt-1 ms-auto me-3 w-75"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                  <Form.Group
                    className="mt-1 ms-auto me-3 w-50"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Jumlah" />
                  </Form.Group>
                </div>
                <h5
                  className="fw-bold mt-3 ms-3 mb-3"
                  style={{ color: "#502314" }}
                >
                  Catatan
                </h5>
                <div className=" mb-3 mx-3 h">
                  <Form.Group
                    className="mt-1 ms-auto me-3  "
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Alamat"
                      className=""
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </div>
              </Col>
              <Col
                lg={4}
                className=""
                style={{
                  backgroundColor: "#630D06",
                  borderBottomRightRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <h3 className="text-white mt-5">
                  Kamu juga bisa hubungi kami di:
                </h3>
                <div className="text-white mt-3 d-flex">
                  <img
                    className="d-block mt-2 me-3"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/footer-email2x.6866b6e7b141.png"
                    alt="Third slide"
                  />
                  <h4>guestservice@burgerking.co.id</h4>
                </div>
                <div className="text-white mt-3 d-flex">
                  <img
                    className="d-block mt-2 me-3"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-Phone2x.918a358b086f.png"
                    alt="Third slide"
                  />
                  <h4>150025</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LargeOrder;
