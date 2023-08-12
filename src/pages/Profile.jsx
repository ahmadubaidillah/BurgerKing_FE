/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/mainNavbar/Navbar";
import Car from "../components/carousel/Carousel";
import OurMenus from "../components/ourMenus/OurMenus";
import Footer from "../components/footer/Footer";
import ProfileBody from "../components/profile/ProfileBody";
import jwtDecode from "jwt-decode";

const Profile = () => {
  //   const [name, setName] = useState("");

  //   const decode = jwtDecode(localStorage.getItem("token"));
  // console.log(decode);
  //   const id = decode.id;
  //   setName(decode.name);
  return (
    <div className="bg">
      <Nav />
      <ProfileBody />
      <Footer />
    </div>
  );
};

export default Profile;
