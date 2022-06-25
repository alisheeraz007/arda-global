import React, { useEffect } from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import BookingSection from '../IndexViews/BookingSection'


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
  Nav,
} from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";
import Slider from "react-slick/lib/slider";

const items = [
  {
    src: require("assets/img/consulting1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/consulting1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/consulting1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

const carouselItems = [
  {
    src: require("assets/img/consult1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/consult2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/consult3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function Consulting() {
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
                  Get Best Consulting
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
        <div className="homeCarousalMain3">
          <Slider autoplaySpeed={3000} pauseOnHover={false} pauseOnDotsHover={false} autoplay {...settings}>
            <div className="bgDiv two">
              <div className="container">
                <h1>Get Best Consulting</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div>
            {/* <div className="bgDiv one">
              <div className="container">
                <h1>Get Best Consulting</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div>
            <div className="bgDiv three">
              <div className="container">
                <h1>Get Best Consulting</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div> */}
          </Slider>
        </div>
        {/* <UncontrolledCarousel items={items} /> */}
        {/* <Container className="section listings" id="Consulting"> */}
        {/* <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info down_head">Consulting <i className="tim-icons icon-bulb-63" /></h2>
              <p className="text-center font-weight-normal down_p">
                We advises clients, businesses and companies on how to best use
                information technology (IT) practices to achieve their business
                objectives.
              </p>
            </Col>
          </Row> */}

        <div className="section listings" id="Consulting">
          <Row style={{ padding: 0 }} className="justify-content-center">

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card7.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        Digital Transformation Advisory
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Digital Transformation Services engage senior business leaders
                      in the changing world of industrial technology to define and
                      accelerate their digital agenda.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card8.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        Enterprise - ERP, ICT & BI
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Enterprise resource planning (ERP) is a mainstay technology in
                      businesses that want to gather, analyze and share insights
                      among multiple departments, such as accounting, operations.
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
