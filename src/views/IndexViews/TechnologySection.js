import React from "react";
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

export default function TechnologySection() {
  return (
    <>
      <Container className="section new_tech_section" id="wwd">
        {/* <h1>Leading Top notch IT Services</h1> */}
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg="5">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            <Col lg="6">
              <h2 className="mt-2 mt-lg-0 display-2 text-dark font-weight-bold">
                Technology <i className="tim-icons icon-atom" />
              </h2>
              <p className="description text-dark font-weight-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                consequuntur, doloribus quisquam accusantium ducimus tenetur quo
                maiores, quis unde laborum dolorum magni amet pariatur odio
                nesciunt voluptas provident sunt aut!
              </p>
              <Button className="mt-3" color="warning" href="/technology">
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}
