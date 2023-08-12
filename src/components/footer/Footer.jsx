/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div style={{ backgroundColor: "#2d2d2d" }}>
      <Container>
        <Row>
          <Col lg={12} className="mt-3 mx-auto ">
            <p
              className="fs-5 text-white "
              style={{ fontWeight: "900", fontStretch: "50%" }}
            >
              BURGER KING DELIVERY
            </p>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={6} md={12}>
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-Phone2x.918a358b086f.png"
                    alt="Third slide"
                  />
                  <p
                    className="fs-5 text-white"
                    style={{ fontWeight: "900", fontStretch: "50%" }}
                  >
                    1500 25
                  </p>
                  <div className="mx-3"></div>
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/footer-email2x.6866b6e7b141.png"
                    alt="Third slide"
                  />
                  <p
                    className="fs-5 text-white"
                    style={{ fontWeight: "400", fontStretch: "50%" }}
                  >
                    geustservice@burgerking.id
                  </p>
                </div>
              </Col>
              <Col lg={6} md={12} className=" mb-5 w-25 ">
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-FB2x.eaa7a34109b2.png"
                    alt="Third slide"
                  />
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-IG2x.e226750dd678.png"
                    alt="Third slide"
                  />
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-TW2x.3d3e632f4869.png"
                    alt="Third slide"
                  />
                  <img
                    className="d-block mt-2 me-1"
                    style={{ width: "20px", height: "20px" }}
                    src="https://bkdelivery.co.id/static/website/img/Footer-YT2x.adb143f635da.png"
                    alt="Third slide"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
