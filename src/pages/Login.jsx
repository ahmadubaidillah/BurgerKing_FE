/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import LoginCard from "../components/Login/LoginCard";
const Login = () => {
  return (
    <div className="bg">
      <Navbar />
      <LoginCard />
      <Footer />
    </div>
  );
};

export default Login;
