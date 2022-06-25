import React from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import Typewriter from "typewriter-effect";

import Slider from "react-slick";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";


export default function PageHeader(props) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className="homeCarousalMain">
      <Slider autoplaySpeed={3000} pauseOnHover={false} pauseOnDotsHover={false} autoplay {...settings}>
        <div className="bgDiv one">
          <div className="container first">
            <h1>Our Mission Statement</h1>
            <p>
              Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
            </p>
          </div>
        </div>
        <div className="bgDiv two">
          <div className="container">
            <h1>Our Vision Statement</h1>
            <p>
              Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
            </p>
          </div>
        </div>
        <div className="bgDiv three">
          <div className="container">
            <h1>Our Core Values</h1>
            <p>
              Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
            </p>
          </div>
        </div>
      </Slider>
    </div>
    // <div className="customCarousel">
    //   <div className="one bg"></div>
    //   <div className="two bg"></div>
    //   <div className="three bg"></div>

    //   <div className="content">
    //     <h1 id="heading1">Our Mission</h1>
    //     <h1 id="heading2">Our Vision</h1>
    //     <h1 id="heading3">Core Values</h1>

    //     <p id="p1">
    //       Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
    //     </p>
    //     <p id="p1">
    //       Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
    //     </p>
    //     <p id="p1">
    //       Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
    //     </p>
    //   </div>
    // </div>
    // <div className="page-header header-filter new_first" id="Hero" style={{ backgroundColor: "#ffffff" }}>
    //   <div className="squares square1" />
    //   <div className="squares square2" />
    //   <div className="squares square3" />
    //   <div className="squares square4" />
    //   <div className="squares square5" />
    //   <div className="squares square6" />
    //   <div className="squares square7" />
    //   <Container>
    //     <div className=" brand">
    //       <h1 className="h1-seo text-dark">WE ARE YOUR <br />
    //         FULL-SERVICE IT COMPANY <br />
    //         <span className="d-flex">
    //           OFFERING &nbsp;
    //           <Typewriter
    //             options={{ autoStart: true, loop: true }}
    //             onInit={(typewriter) => {
    //               typewriter
    //                 .typeString("Mobile Solutions")
    //                 .pauseFor(1000)
    //                 .deleteAll()
    //                 .typeString("E-Commerce Solutions")
    //                 .pauseFor(1000)
    //                 .deleteAll()
    //                 .typeString("Computing Devices")
    //                 .pauseFor(1000)
    //                 .deleteAll()
    //                 .typeString("Hardware Support Services")
    //                 .pauseFor(1000)
    //                 .deleteAll()
    //                 .start();
    //             }}
    //           />
    //         </span>
    //       </h1>
    //       <h4 className="title d-none d-sm-block text-info font-weight-bold">
    //         Arda Technology is Richmond’s complete IT service for any size business and non-profit organization! We not only offer the convenience of a full-service IT Department at a fraction of the cost, we also offer a host of managed services and unlimited flat-fee support.
    //       </h4>
    //     </div>
    //   </Container>
    // </div>
  );
}
