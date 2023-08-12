/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const Login = async (e) => {
    e.preventDefault();
    try {
      const data = { phone_number: phone, password: password };
      const login = await axios.post("http://localhost:4000/login", data);
      console.log(login);
      localStorage.setItem("token", login.data.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

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
                <h1
                  className="fw-bold text-center "
                  style={{ color: "#8b542f" }}
                >
                  WELCOME!
                </h1>
              </Card.Title>
              <Card.Text className="fs-4 text-center mb-5">
                Enter your phone number and password to login
              </Card.Text>
              <Form>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="number"
                    placeholder="Enter your number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-5 w-75 mx-auto"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    onClick={Login}
                    className="w-75 fs-4 fw-bold"
                    style={{
                      backgroundColor: "#ed7801",
                      borderColor: "#ed7801",
                    }}
                  >
                    Login
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

export default LoginCard;
