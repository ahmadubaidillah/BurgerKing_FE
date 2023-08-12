/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import RegisterCard from "../components/register/RegisterCard";

const Register = () => {
  return (
    <div className="bg">
      <Navbar />
      <RegisterCard />
      <Footer />
    </div>
  );
};

export default Register;
