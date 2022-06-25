import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

export default function Partners() {
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
          slidesToShow: 4,
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
      <div className="section section-nucleo-icons new_intro_section new_partner_section" id="Partners">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path3.png").default}
        />
        <Container className="section">
          <Container>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" md="12">
                <h2 className="display-2 text-info text-center">Technology Partners</h2>
                {/* <h4 className="description font-weight-normal">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  eligendi dolore ad eum magni ratione, enim dolor ipsam veritatis
                  modi velit et porro hic explicabo. Aspernatur temporibus sint ut,
                  tempore corrupti impedit, facilis asperiores commodi aperiam
                  eveniet velit facere natus.
                </h4> */}

              </Col>
            </Row>
            <Slider className="partnerSlide" autoplaySpeed={2000} autoplay {...settings}>
              {/* <i className="fab fa-google text-default" />

            <i className="fab fa-facebook display-1 text-default" />
            <i className="fab fa-amazon display-1 text-default" />
            <i className="fab fa-microsoft display-1 text-default" />

            <i className="fab fa-spotify display-1 text-default" />
            <i className="fab fa-apple display-1 text-default" />

            <i className="fab fa-linkedin display-1 text-default" />
            <i className="fab fa-snapchat display-1 text-default" />
            <i className="fab fa-github display-1 text-default" />

            <i className="fab fa-instagram display-1 text-default" />
            <i className="fab fa-youtube display-1 text-default" />
            <i className="fab fa-skype display-1 text-default" /> */}
              <img className="aws" src={require("assets/img/aws-logo.png")} alt="" />

              <img src={require("assets/img/gcp-logo.png")} alt="" />

              <img src={require("assets/img/ibm-logo.png")} alt="" />

              <img src={require("assets/img/microsoft-logo.png")} alt="" />

              <img src={require("assets/img/hp-logo.png")} alt="" />

              <img src={require("assets/img/dell-logo.png")} alt="" />

              <img src={require("assets/img/Microsoft_Azure-Logo.png")} alt="" />

              <img src={require("assets/img/vmware.png")} alt="" />

              <img src={require("assets/img/fortinet.png")} alt="" />

              <img className="acronis" src={require("assets/img/acronis.png")} alt="" />

            </Slider>
            {/* <div className="btn-wrapper">
            <Button
              className="btn-round"
              color="info"
              href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read More
            </Button>
            <Button
              className="btn-simple btn-round"
              color="info"
              href="https://nucleoapp.com/?ref=1712"
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              View Testimonials
            </Button>
          </div> */}
            {/* <div className="blur-hover"> */}
            {/* <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"> */}
            {/* <div className="icons-container blur-item on-screen mt-5">
             
              <i className="fab fa-google text-default" />
            
              <i className="fab fa-facebook display-1 text-default" />
              <i className="fab fa-amazon display-1 text-default" />
              <i className="fab fa-microsoft display-1 text-default" />
            
              <i className="fab fa-twitte display-1 text-default" />
              <i className="fab fa-spotify display-1 text-default" />
              <i className="fab fa-apple display-1 text-default" />
             
              <i className="fab fa-linkedin display-1 text-default" />
              <i className="fab fa-snapchat display-1 text-default" />
              <i className="fab fa-github display-1 text-default" />
           
              <i className="fab fa-instagram display-1 text-default" />
              <i className="fab fa-youtube display-1 text-default" />
              <i className="fab fa-skype display-1 text-default" />
            </div> */}
            {/* <span className="blur-hidden h5 text-warning">
              Read Customer Testimonials
            </span> */}
            {/* </a> */}
            {/* </div> */}

          </Container>
        </Container>
        </Container>
      </div>
    </>
  );
}
