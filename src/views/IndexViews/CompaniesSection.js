import React from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

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

export default function CompaniesSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        }
      },
    ]
  };
  return (
    <>
      <Container style={{ marginBottom: 50 }}>
        <Container className=" new_company_section">
          <Row className="justify-content-center">
            <Col className="justify-content-center" lg="12">
              <h1>Our Customers</h1>
              {/* <p className="description text-dark font-weight-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                nostrum, eligendi ducimus doloribus deserunt reprehenderit, enim
                sapiente facilis quasi ullam similique recusandae consequuntur
                dolor a!
              </p> */}
            </Col>
            {/* <Col lg="12" className="mt-5 justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center align-items-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/aws-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/gcp-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/ibm-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/microsoft-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/hp-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/companiesimages/Logos/Customers/dell-logo.png")} alt="" />
                </Col>
              </Row>
            </Col> */}

          </Row>
          <div className="new_slider_up">
            <Slider autoplaySpeed={2000} autoplay {...settings}>
              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo1" src={require("assets/companiesimages/Logos/Customers/logo1.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo2" src={require("assets/companiesimages/Logos/Customers/logo2.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo3" src={require("assets/companiesimages/Logos/Customers/logo3.jpg")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo3" src={require("assets/companiesimages/Logos/Customers/logo4.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo4" src={require("assets/companiesimages/Logos/Customers/logo5.jpg")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UAE.png")} />
                <img className="logo logo5" src={require("assets/companiesimages/Logos/Customers/logo6.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UK.webp")} />
                <img className="logo logo6" src={require("assets/companiesimages/Logos/Customers/logo7.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UK.webp")} />
                <img className="logo logo7" src={require("assets/companiesimages/Logos/Customers/logo8.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/UK.webp")} />
                <img className="logo logo8" src={require("assets/companiesimages/Logos/Customers/logo9.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/PAK.png")} />
                <img className="logo logo9" src={require("assets/companiesimages/Logos/Customers/logo10.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/PAK.png")} />
                <img className="logo logo10" src={require("assets/companiesimages/Logos/Customers/logo11.png")} alt="" />
              </div>

              <div className="divv">
                <img className="flag" src={require("assets/companiesimages/Logos/Customers/PAK.png")} />
                <img className="logo logo11" src={require("assets/companiesimages/Logos/Customers/logo12.jpg")} alt="" />
              </div>
            </Slider>
          </div>
        </Container>
      </Container>
    </>
  );
}
