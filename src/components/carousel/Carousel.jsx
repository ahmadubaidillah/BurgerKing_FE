/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Carousel } from "react-bootstrap";
import img1 from "../../assets/images/epvsnbhvcy7crg34wktfdz.jpg";
import img2 from "../../assets/images/ijzniet93cwzputznoevuh.jpg";
import img3 from "../../assets/images/urjuzyzwnjzcf2ys8snrsr.jpg";

const Index = () => {
  return (
    // <Container fluid>
    //   <Carousel className="">
    //     <Carousel.Item>
    //       <img
    //         src={img1}
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         src={img2}
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //       <Carousel.Caption>
    //         <h3>Second slide label</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         src={img3}
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //       <Carousel.Caption>
    //         <h3>Third slide label</h3>
    //         <p>
    //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </Container>
    <div>
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
