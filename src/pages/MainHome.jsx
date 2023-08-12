/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/mainNavbar/Navbar";
import Car from "../components/carousel/Carousel";
import OurMenus from "../components/ourMenus/OurMenus2";
import Footer from "../components/footer/Footer";

const MainHome = () => {
  return (
    <div className="bg">
      <Nav />
      <Car />
      <OurMenus />
      <Footer />
    </div>
  );
};

export default MainHome;
