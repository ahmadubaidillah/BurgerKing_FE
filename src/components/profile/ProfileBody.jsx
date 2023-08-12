/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import cardImg1 from "../../assets/images/amwdjxph9s6gxv93umwicu_product_list.jpg";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const ProfileBody = (props) => {
  const [name, setName] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  // setName(decode.name);
  const getData = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(`http://localhost:4000/user/${id}`);
      console.log(res);
      setNama(res.data.user.rows[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  const edit = async (e) => {
    // e.preventDefault();
    const data = { name: name, email: email };
    const decode = jwtDecode(localStorage.getItem("token"));
    console.log(decode);
    const id = decode.id;
    try {
      // setNama(decode.nama);
      const update = await axios.put(`http://localhost:4000/edit/${id}`, data);
      console.log(update);
      alert("edit data succes");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
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
                  <h1
                    className="mt-1 mb-3  fw-bold text-start "
                    style={{ color: "#502304" }}
                  >
                    {nama}
                  </h1>
                </Col>
                <Col lg={12} className="mb-2">
                  {" "}
                  <Button className="w-75 btn-warning">
                    <p
                      className="mt-1 mb-1 fs-4 fw-bold text-start"
                      style={{ color: "#502304" }}
                    >
                      {" "}
                      Profile
                    </p>
                  </Button>
                </Col>
                <Col lg={12} className="mb-2">
                  {" "}
                  <Button className="w-75 btn-warning" onClick={logout}>
                    <p
                      className="mt-1 mb-1 fs-4 fw-bold text-start"
                      style={{ color: "#502304" }}
                    >
                      {" "}
                      Logout
                    </p>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={8} style={{}}>
              <Card className="shadow ">
                <Card.Body>
                  <Card.Title className="ms-3">
                    <h1 style={{ color: "#8b542f" }} className="fw-bold">
                      {" "}
                      EDIT PROFILE
                    </h1>
                  </Card.Title>
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

                    <div className="d-flex justify-content-center">
                      <Button
                        type="submit"
                        onClick={edit}
                        className="w-75 fs-4 fw-bold"
                        style={{
                          backgroundColor: "#ed7801",
                          borderColor: "#ed7801",
                        }}
                      >
                        Save Change
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col lg={4}></Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileBody;
