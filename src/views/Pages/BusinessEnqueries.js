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
import BookingSection from '../IndexViews/BookingSection'

export default function BusinessEnqueries() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      <div style={{ flexDirection: "column !important" }} className="main section new_tech_page">
        {/* <Container className="mt-5">
          <Container> */}
        <BookingSection />
        {/* </Container>
        </Container> */}
        {/* <Enqueries /> */}
        <Footer />
      </div>
    </>
  );
}
