/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";
import logo from "../../assets/images/logo_2022.38d01a7c7dd3.png";
import cart from "../../assets/images/BK_TopCart2x.ab793c4833a3.png";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Nav.Link href="/">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/menus" className="text-white fw-bold fs-2 mx-3">
              <div className=" subNav-text" style={{}}>
                Delivery
              </div>
              Order
            </Nav.Link>
            <Nav.Link
              href="/promotion"
              className="text-white fw-bold fs-2 mx-3"
            >
              <div className=" subNav-text" style={{}}>
                Get Fresh
              </div>
              Promotions
            </Nav.Link>
            {/* <Nav.Link href="#features" className="text-white fw-bold fs-2 mx-3">
              <div className=" subNav-text" style={{}}>
                Exclusive
              </div>
              Large Order
            </Nav.Link> */}
          </Nav>
          <div className="d-flex">
            <Navbar.Text>
              <a
                href="/login"
                className="text-white fw-bold fs-4 mx-3"
                style={{ textDecoration: "none" }}
              >
                Login
              </a>
            </Navbar.Text>
            <Navbar.Text className="" style={{}}>
              <Link
                className="text-white fw-bold fs-4 mx-2"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={cart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Link>
            </Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
