import React, { useEffect } from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

export default function Partners() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Navbar />
      <div className="section section-nucleo-icons new_tech_page our_partner_page" id="Partners">
        {/* <img
          alt="..."
          className="path"
         src={require("assets/img/path3.png").default}
        /> */}
        <Container className="section">
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="display-2 text-info text-center up_head">Technology Partners</h2>
              {/* <h4 className="description font-weight-normal up_p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                eligendi dolore ad eum magni ratione, enim dolor ipsam veritatis
                modi velit et porro hic explicabo. Aspernatur temporibus sint ut,
                tempore corrupti impedit, facilis asperiores commodi aperiam
                eveniet velit facere natus.
              </h4>
              <div className="btn-wrapper">
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
            </Col>
          </Row>
          <div className="d-flex">
            <img  className="col-md-2" src={require("assets/img/aws-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/gcp-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/ibm-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/microsoft-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/hp-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/dell-logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/Microsoft_Azure-Logo.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/vmware.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/fortinet.png")} alt="" />

            <img  className="col-md-2" src={require("assets/img/acronis.png")} alt="" />

          </div>

        </Container>
      </div>
      <Footer />
    </>
  );
}
