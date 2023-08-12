/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegesterCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      phone_number: phone,
    };
    try {
      const register = await axios.post("http://localhost:4000/register", data);
      console.log(register);
      alert("Register successfully");
      navigate("/login");
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
                  className="fw-bold text-center mb-5"
                  style={{ color: "#8b542f" }}
                >
                  REGISTER
                </h1>
              </Card.Title>
              {/* <Card.Text className="fs-4 text-center mb-5">
                Enter your phone number and password to login
              </Card.Text> */}
              <Form>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-75 mx-auto"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
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
                    onClick={Register}
                    className="w-75 fs-4 fw-bold"
                    style={{
                      backgroundColor: "#ed7801",
                      borderColor: "#ed7801",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegesterCard;
