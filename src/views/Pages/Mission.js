import React, { useEffect } from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
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

const carouselItems = [
  {
    src: require("assets/img/mission1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/mission2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/mission3.png"),
    altText: "Team",
    caption: "",
  },
];

export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      {/* <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      /> */}
      <div className="main section new_tech_page">
        <Container className="section" id="Mission">
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col lg="6" sm="6">
                <h2 className="display-2 text-info up_head">Our Mission</h2>
                <p className="description font-weight-normal up_p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, minus. Distinctio laboriosam doloremque magnam cum
                  voluptate unde aliquam architecto laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima vero necessitatibus sunt repellendus ducimus quos animi
                  laboriosam libero natus, aspernatur provident ullam at
                  dolores, laudantium exercitationem, cum veniam reiciendis ut!
                </p>
              </Col>
              <Col lg="5" sm="5">
                <UncontrolledCarousel items={carouselItems} />
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row className="align-items-center justify-content-between">
              {window.screen.width > 600 &&
                <Col lg="5" sm="5">
                  <UncontrolledCarousel items={carouselItems} />
                </Col>
              }
              <Col lg="6" sm="6">
                <h2 className="display-2 text-info up_head">Our Vision</h2>
                <p className="description font-weight-normal up_p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, minus. Distinctio laboriosam doloremque magnam cum
                  voluptate unde aliquam architecto laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima vero necessitatibus sunt repellendus ducimus quos animi
                  laboriosam libero natus, aspernatur provident ullam at
                  dolores, laudantium exercitationem, cum veniam reiciendis ut!
                </p>
              </Col>
              {window.screen.width < 600 &&
                <Col lg="5" sm="5">
                  <UncontrolledCarousel items={carouselItems} />
                </Col>
              }
            </Row>
          </Container>

          <Container className="mt-5">
            <Row className="align-items-center justify-content-between">
              <Col lg="6" sm="6">
                <h2 className="display-2 text-info up_head">Our Values</h2>
                <p className="description font-weight-normal up_p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, minus. Distinctio laboriosam doloremque magnam cum
                  voluptate unde aliquam architecto laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima vero necessitatibus sunt repellendus ducimus quos animi
                  laboriosam libero natus, aspernatur provident ullam at
                  dolores, laudantium exercitationem, cum veniam reiciendis ut!
                </p>
              </Col>
              <Col lg="5" sm="5">
                <UncontrolledCarousel items={carouselItems} />
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row className="align-items-center justify-content-between">
              <Col lg="12" sm="12">
                <h2 className="display-2 text-info up_head message">Message from CEO</h2>
                <p className="description font-weight-normal up_p message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo, minus. Distinctio laboriosam doloremque magnam cum
                  voluptate unde aliquam architecto laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima vero necessitatibus sunt repellendus ducimus quos animi
                  laboriosam libero natus, aspernatur provident ullam at
                  dolores, laudantium exercitationem, cum veniam reiciendis ut!
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    </>
  );
}
