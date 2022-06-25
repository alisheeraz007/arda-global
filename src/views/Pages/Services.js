import React, { useEffect } from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import BookingSection from '../IndexViews/BookingSection'


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

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";
import Slider from "react-slick/lib/slider";

const items = [
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];


const carouselItems = [
  {
    src: require("assets/img/services1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/services2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/services3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function Services() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      <div className="main section new_tech_page">
        {/* <Container className="section">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col lg="6" sm="6">
                <h2 className="display-2 text-dark font-weight-bold up_head">
                  Top notch Services
                </h2>
                <p className="description text-dark font-weight-normal up_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
                <Button className="mt-3 up_but">Explore Areas</Button>
              </Col>
              <Col lg="5" sm="5">
                <UncontrolledCarousel
                  items={carouselItems}
                />
              </Col>
            </Row>
          </Container>
        </Container> */}
        <div className="homeCarousalMain4">
          <Slider autoplaySpeed={3000} pauseOnHover={false} pauseOnDotsHover={false} autoplay {...settings}>
            {/* <div className="bgDiv three">
              <div className="container">
                <h1>Top notch Services</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div> */}
            {/* <div className="bgDiv two">
              <div className="container">
                <h1>Top notch Services</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div> */}
            <div className="bgDiv one">
              <div className="container">
                <h1>Top notch Services</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div>
          </Slider>
        </div>
        {/* <UncontrolledCarousel items={items} /> */}
        {/* <Container className="section listings" id="Services"> */}
        {/* <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info down_head">Services <i className="tim-icons icon-scissors" /></h2>
              <p className="text-center font-weight-normal down_p">
                We provide specialized technology-oriented services by combining
                the processes and functions of software, hardware, networks,
                electronics and infrastructure.
              </p>
            </Col>
          </Row> */}

        <div className="section listings" id="Services">
          <Row style={{ padding: 0 }} className="justify-content-center">

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card9.png')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        IT Support Services
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      We provide functions, maintenance, and support of information
                      technology devices, or services including but not limited to
                      computer systems application development and maintenance;
                      systems integration and interoperability; operating systems
                      maintenance and design
                    </p>
                  </Row>
                </div>
              </div>
            </Col>

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card10.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        IT Security & Network Services
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      IT services are necessary to keep your business running at
                      peak performance. Network security solutions include
                      firewalls, anti-virus software, web filtering, patch
                      management, built-in VPNs, and regularly scheduled check-ups
                      from your IT service provider.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>

          </Row>
          {/* <Enqueries /> */}
          {/* </Container> */}
        </div>
      </div>
      {/* <BookingSection /> */}
      <Footer />
    </>
  );
}
