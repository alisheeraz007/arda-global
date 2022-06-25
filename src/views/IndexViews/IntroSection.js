import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
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
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

// import { Home } from '@mui/icons-material';

const carouselItems = [
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Team",
    caption: "",
  },
];

const items = [
  {
    src: require("assets/img/intro4.jpg"),
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Best Leading IT Company",
  },
  {
    src: require("assets/img/intro1.jpg"),
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Assurance and Quality Guranteed",
  },
  {
    src: require("assets/img/intro2.jpg"),
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Bringing Innovative Ways to Solve Complex Challenges",
  },
];

export default function intro() {
  return (
    <>
      <Container className="section new_intro_section">
        <Container>
          <Row className="justify-content-center align-items-center section new_who_we_are">
            <Nav
              className="nav-pills-info nav-pills-icons justify-content-center"
              pills
            >
              <Col lg="4" sm="6">
                <NavItem className="mx-0 mx-lg-4 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#" id="pills">
                    {/* <img src={require("assets/img/work.png")} /> */}
                    <h3 className="display-3 text-white font-weight-normal">
                      What We Do?
                    </h3>
                    <div className="hidDiv">
                      <NavLink href="/technology" > <span>Technology</span></NavLink>
                      <NavLink href="/consulting" ><span>Consulting</span></NavLink>
                      <NavLink href="/services" ><span>Services</span></NavLink>
                      <NavLink href="/hardware" ><span>Hardware</span></NavLink>
                    </div>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                      nulla quibusdam dolor consequuntur deleniti cupiditate dolorum
                      dignissimos odio aliquam voluptates?
                    </p> */}
                    {/* <i className="tim-icons icon-minimal-down font-weight-bold" /> */}
                  </NavLink>
                </NavItem>
              </Col>
              <Col lg="4" sm="6">
                <NavItem className="mx-0 mx-lg-4 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#" id="pills">
                    {/* <img src={require("assets/img/we.png")} /> */}
                    <h3 className="display-3 text-white font-weight-normal">
                      Who We Are?
                    </h3>
                    <div className="hidDiv">
                      <NavLink href="/mission" ><span>About us</span></NavLink>
                      <NavLink href="/partners" ><span>Technology Partners</span></NavLink>
                    </div>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                      nulla quibusdam dolor consequuntur deleniti cupiditate dolorum
                      dignissimos odio aliquam voluptates?
                    </p> */}
                    {/* <i className="tim-icons icon-minimal-down font-weight-bold" /> */}
                  </NavLink>
                </NavItem>
              </Col>
              {/* <Col lg="4" sm="6">
                <NavItem className="mx-0 mx-lg-4 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#" id="pills">
                    <img src={require("assets/img/success.png")} />
                    <h3 className="display-3 text-white font-weight-normal">
                      Success Stories
                    </h3>
                    <div className="hidDiv">
                      <NavLink href="/success" ><span><i className="tim-icons icon-planet" />Industry Verticals</span></NavLink>
                      <NavLink href="/success" ><span><i className="tim-icons icon-paper" />Case Studies</span></NavLink>
                      <NavLink href="/success" ><span><i className="tim-icons icon-satisfied" />Customer Testimonials</span></NavLink>
                    </div>
                    <i className="tim-icons icon-minimal-down font-weight-bold" />
                  </NavLink>
                </NavItem>
              </Col> */}
            </Nav>
          </Row>

          <div className="our_intro">
          <h2>Delivering Digital Innovation</h2>
            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-1.png')} />
              <h3><b>2021</b></h3>
              <p>Founded</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-2.png')} />
              <h3><b>$10 Millions+</b></h3>
              <p>Services Delivered</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-3.png')} />
              <h3><b>30+</b></h3>
              <p>Employees</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-4.png')} />
              <h3><b>2 Offices</b></h3>
              <p>In Two Countries</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-5.png')} />
              <h3><b>8 Global</b></h3>
              <p>Technology Partners</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-6.png')} />
              <h3><b>20 Enterprise</b></h3>
              <p>Clients In 3 Countries</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-7.png')} />
              <h3><b>4 Lines</b></h3>
              <p>Of Technology Services</p>
            </div>

            <div className="columnflex col-md-3 col-sm-6">
              <img src={require('../../assets/iconsForIntro/Icon-8.png')} />
              <h3><b>13 Industry</b></h3>
              <p>Sectors Served</p>
            </div>
          </div>

          {/* <Row className="align-items-center justifu-content-between">
            <Col lg="6" sm="6">
              <div className="title">
                <h3 className="text-muted">Mission Statement</h3>
              </div>
              <h2 className="display-2 text-dark font-weight-bold">
                Redefining IT Solutions
              </h2>
              <p className="description text-dark font-weight-normal">
                Arda - is a digital IT Consulting & Service provider company
                established around 5 years back with the mission to build
                Futuristic products equipped with the best Tools and
                Technologies available in the market.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                reiciendis pariatur incidunt. Cum, cumque alias laudantium iusto
                praesentium ratione similique.
              </p>
            </Col>
            <Col lg="5" sm="5">
              <img src={require("assets/img/intro.gif")} />
            </Col>
          </Row> */}
          {/* <img
            alt="..."
            className="path path1"
            src={require("assets/img/waves.png")}
            style={{ filter: "invert(100%)" }}
          /> */}

          {/* <Row>
            <Col>
              <p className="description title text-dark font-weight-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                nulla quibusdam dolor consequuntur deleniti cupiditate dolorum
                dignissimos odio aliquam voluptates?
              </p>
            </Col>
          </Row> */}
        </Container>
      </Container>
    </>
  );
}
