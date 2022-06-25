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

import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";
import Slider from "react-slick/lib/slider";

const items = [
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

const carouselItems = [
  {
    src: require("assets/img/hardware1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/hardware2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/hardware3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function Hardware() {
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
                  High Quality Hardware
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

        <div className="homeCarousalMain5">
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

        {/* <Container className="section listings" id="Hardware"> */}
        {/* <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info down_head">Hardware <i className="tim-icons icon-laptop" /></h2>
              <p className="text-center font-weight-normal down_p">
                Hardware makers and entrepreneurs meet up and share their
                electronics projects on Hackster. There is no better resource
                for finding electronic maker projects to learn from !
              </p>
            </Col>
          </Row> */}

        <div className="section listings" id="Hardware">
          <Row style={{ padding: 0 }} className="justify-content-center">

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card11.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        Computing Devices
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Accelerate your digital transformation journey with the right
                      computing devices. Build a workplace that adapts to new
                      challenges and be more productive and creative wherever you
                      are.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>

            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img width="100%" src={require('../../assets/img/card12.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        Hardware Support Services
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Hardware support is vital to a business's IT. It works to
                      ensure smooth,trouble-free operations.In addition to software,
                      device driver, and firmware updates,hardware can fail,
                      requiring troubleshooting .
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
