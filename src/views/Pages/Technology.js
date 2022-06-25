import React, { useEffect } from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import BookingSection from '../IndexViews/BookingSection'
import ReactDatetime from "react-datetime";

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
    src: require("assets/img/technology1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/technology1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/technology1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

const carouselItems = [
  {
    src: require("assets/img/tech1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/tech2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/tech3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function Technology() {
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
      {/* <Navbar /> */}
      <Navbar />
      <div className="main section new_tech_page">
        {/* <Container className="section">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col lg="6" sm="6">
                <h2 className="display-2 text-dark font-weight-bold up_head">
                  Technology at Arda
                </h2>
                <p className="description text-dark font-weight-normal up_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
                <Button className="mt-3 up_but">Explore Areas</Button>
              </Col>
              <Col lg="5" sm="5">
                <UncontrolledCarousel items={carouselItems} />
              </Col>
            </Row>
          </Container>
        </Container> */}
        <div className="homeCarousalMain2">
          <Slider autoplaySpeed={3000} pauseOnHover={false} pauseOnDotsHover={false} autoplay {...settings}>
            {/* <div className="bgDiv two">
              <div className="container">
                <h1>Technology at Arda</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div> */}
            {/* <div className="bgDiv one">
              <div className="container">
                <h1>Technology at Arda</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
              </div>
            </div> */}
            <div className="bgDiv three">
              <div className="container">
                <h1>Technology at Arda</h1>
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
        {/* <Container className="section mt-5 listings" id="Technology"> */}
        {/* <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info down_head">
                Everything We Offer <i className="tim-icons icon-atom" />
              </h2>
              <p className="text-center font-weight-normal down_p">
                We use digital, graphic, and spatial thinking to create
                category-leading brand experiences that are meaningful to our
                clients and deliver value.
              </p>
            </Col>
          </Row> */}
        <div className="section mt-5 listings" id="Technology">
          <Row style={{ padding: 0 }} className="justify-content-between">
            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card1.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">
                        Cloud Hosting & SaaS Solutions
                      </h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Cloud Web Hosting packages with lowest guaranteed prices, that
                      fits to all your business needs. Cloud hosting is the latest
                      form of hosting that has become extremely popular over the
                      past few years.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>


            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div style={{ padding: 0 }} className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card2.jpg')} />
                </div>

                <div className="col-md-7">
                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">Big Data & Analytics</h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Unleash the power of your data, generate transformative
                      insights, optimize processes, and enhance your ROI with
                      enterprise data analytics.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>


            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div style={{ padding: 0 }} className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card3.jpg')} />
                </div>

                <div className="col-md-7">

                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">Enterprise Solutions</h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Our turnkey solutions are custom-designed to fit into your
                      enterprise software ecosystem. Anything you can dream up, from
                      a custom desktop application to a global app, we can build it.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>


            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div style={{ padding: 0 }} className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card4.png')} />
                </div>

                <div className="col-md-7">

                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">Mobile Solutions</h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      When it comes to mobile applications and mobile development
                      services, we are leading this world in Pakistan.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>


            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div style={{ padding: 0 }} className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card5.png')} />
                </div>

                <div className="col-md-7">

                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">E-Commerce Solutions</h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Our exceptionally imaginative and in fact sound group
                      encourages you to fabricate dynamic and appealing eCommerce
                      sites that will pull in more guests and transform clients into
                      faithful clients.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>


            <Col style={{ padding: 0 }} className="cardd p-5" xs="12" sm="12" lg="12">
              <div style={{ padding: 0 }} className="d-flex">
                <div style={{ padding: 0 }} className="col-md-5">
                  <img src={require('../../assets/img/card6.jpg')} />
                </div>

                <div className="col-md-7">

                  <Row className="justify-content-center">
                    <b>
                      <h3 className="title text-center">Tailored Solutions</h3>
                    </b>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center font-weight-normal">
                      Whatever your needs are, regardless of whether it’s another
                      B2B or B2C online business model-based business, we can tailor
                      all your solutions into perfect needs.
                    </p>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Enqueries /> */}
        </div>
        {/* </Container> */}
      </div>
      {/* <BookingSection /> */}
      <Footer />
    </>
  );
}
