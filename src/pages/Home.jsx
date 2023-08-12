/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/navbar/Navbar";
import Car from "../components/carousel/Carousel";
import OurMenus from "../components/ourMenus/OurMenus";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="bg">
      <Nav />
      <Car />
      <OurMenus />
      <Footer />
    </div>
  );
};

export default Home;
