import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("bg-white");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-white");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("bg-white");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToBooking = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  let [dropdown, setDropdown] = useState(false)

  const toggle = () => {
    if (dropdown) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseEnter = () => {
    if(window.screen.width > 600){
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if(window.screen.width > 600){
      setDropdown(false)
    }
  }

  let [dropdown2, setDropdown2] = useState(false)

  const toggle2 = () => {
    if (dropdown2) {
      setDropdown2(false)
    } else {
      setDropdown2(true)
    }
  }

  const onMouseEnter2 = () => {
    if(window.screen.width > 600){
      setDropdown2(true)
    }
  }

  const onMouseLeave2 = () => {
    if(window.screen.width > 600){
      setDropdown2(false)
    }
  }

  let [dropdown3, setDropdown3] = useState(false)

  const toggle3 = () => {
    if (dropdown3) {
      setDropdown3(false)
    } else {
      setDropdown3(true)
    }
  }

  const onMouseEnter3 = () => {
    setDropdown3(true)
  }

  const onMouseLeave3 = () => {
    setDropdown3(false)
  }

  return (
    <Navbar
      className={"shadow-sm fixed-top new_navbar " + color}
      color-on-scroll="100"
      expand="lg"
      id="topbar"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>
              <img width={180} src={require("assets/img/logo_transparent_background.png")} />
            </span>
          </NavbarBrand>

          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            The Future Is Digital
          </UncontrolledTooltip>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"bg-white justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a
                  href="#"
                  className="bg-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <img width={180} src={require("assets/img/logo_transparent_background.png")} />
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler text-dark font-weight-bold"
                  onClick={toggleCollapse}
                >
                  <i className="text-dark font-weight-bold tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar>
            {/* Dropdowns */}
            {/* About Us */}
            <UncontrolledDropdown onMouseOver={onMouseEnter2} onMouseLeave={onMouseLeave2} isOpen={dropdown2} toggle={toggle2} nav>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                {/* <i className="fa fa-cogs d-lg-none d-xl-none" /> */}
                <span className="text-dark font-weight-normal">Who we are</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/mission">
                  {/* <i className="tim-icons icon-user-run" /> */}
                  <span className="text-dark">About us</span>
                </DropdownItem>
                {/* <DropdownItem href="/about#Team">
                  <i className="tim-icons icon-heart-2" />
                  <span className="text-dark">Meet the Team</span>
                </DropdownItem> */}
                <DropdownItem href="/partners">
                  {/* <i className="tim-icons icon-single-02" /> */}
                  <span className="text-dark">Technology Partners</span>
                </DropdownItem>
                {/* <DropdownItem href="/enqueries">
                  <i className="tim-icons icon-send" />
                  <span className="text-dark">Business Enqueries</span>
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Solutions */}
            <UncontrolledDropdown onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdown} toggle={toggle} nav>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                {/* <i className="fa fa-cogs d-lg-none d-xl-none" /> */}
                <span className="text-dark font-weight-normal">What we do</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/technology">
                  {/* <i className="tim-icons icon-atom" /> */}
                  <span className="text-dark">Technology</span>
                </DropdownItem>
                <DropdownItem href="/consulting">
                  {/* <i className="tim-icons icon-bulb-63" /> */}
                  <span className="text-dark">Consulting</span>
                </DropdownItem>
                <DropdownItem href="/services">
                  {/* <i className="tim-icons icon-settings" /> */}
                  <span className="text-dark">Services</span>
                </DropdownItem>
                <DropdownItem href="/hardware">
                  {/* <i className="tim-icons icon-laptop" /> */}
                  <span className="text-dark">Hardware</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Success Stories */}
            {/* <UncontrolledDropdown onMouseOver={onMouseEnter3} onMouseLeave={onMouseLeave3} isOpen={dropdown3} toggle={toggle3} nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <span className="text-dark font-weight-normal">Success Stories</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/success">
                  <i className="tim-icons icon-planet" />
                  <span className="text-dark">Industry Verticals</span>
                </DropdownItem>
                <DropdownItem href="/success">
                  <i className="tim-icons icon-paper" />
                  <span className="text-dark">Case Studies</span>
                </DropdownItem>
                <DropdownItem href="/success">
                  <i className="tim-icons icon-satisfied" />
                  <span className="text-dark">Customer Testimonials</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

            <NavItem className="mr-0 mr-lg-3">
              <NavLink href="/contact-us" style={{ cursor: "pointer" }}>
                <span className="font-weight-normal">
                  Contact Us
                </span>
              </NavLink>
            </NavItem>
            
            {/* <NavItem className="mr-0 mr-lg-3">
              <NavLink href="/careers" style={{ cursor: "pointer" }}>
                <span className="font-weight-normal">
                  Careers
                </span>
              </NavLink>
            </NavItem> */}

            {/* Socials */}
            {/* Twitter Handle */}
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none text-dark">Twitter</p>
              </NavLink>
            </NavItem> */}
            {/* Facebook Handle */}
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none text-dark">Facebook</p>
              </NavLink>
            </NavItem> */}
            {/* Instagram Handle */}
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none text-dark">Instagram</p>
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
