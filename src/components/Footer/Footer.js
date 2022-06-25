// import React from "react";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md="3">
//             <h1 className="title">Arda
//             <br />
//             <span className="lead">The Future is Digital</span>
//             </h1>
//           </Col>
//           <Col md="3">
//             <Nav>
//               <NavItem>
//                 <NavLink to="/" tag={Link}>
//                   Home
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink to="/landing-page" tag={Link}>
//                   Landing
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink to="/register-page" tag={Link}>
//                   Register
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink to="/profile-page" tag={Link}>
//                   Profile
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Col>
//           <Col md="3">
//             <Nav>
//               <NavItem>
//                 <NavLink href="#">
//                   Contact Us
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">
//                   About Us
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">
//                   Blog
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">
//                   License
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Col>
//           <Col md="3">
//             <h3 className="title text-white">Follow us:</h3>
//             <div className="btn-wrapper profile">
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="#"
//                 id="tooltip622135962"
//                 target="_blank"
//               >
//                 <i className="fab fa-twitter" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip622135962">
//                 Follow us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="#"
//                 id="tooltip230450801"
//                 target="_blank"
//               >
//                 <i className="fab fa-facebook-square" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip230450801">
//                 Like us
//               </UncontrolledTooltip>
//               <Button
//                 className="btn-icon btn-neutral btn-round btn-simple"
//                 color="default"
//                 href="#"
//                 id="tooltip318450378"
//                 target="_blank"
//               >
//                 <i className="fab fa-instagram" />
//               </Button>
//               <UncontrolledTooltip delay={0} target="tooltip318450378">
//                 Follow us
//               </UncontrolledTooltip>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }


import Logo from '../../assets/img/footLogo.png'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='divOne container'>
        <div className='col-md-3 first'>
          <img src={Logo} />
          {/* <p>Whatever your vision of digital is, we can help you make it a
            reality. We focus on technology so that you can focus on
            your business..</p> */}
          <div className='contactDiv'>
            {/* <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26">
              <path id="Path_278" data-name="Path 278" d="M23.914,17.066a14.762,14.762,0,0,1-4.636-.738,2.119,2.119,0,0,0-2.061.434l-2.923,2.207A16.156,16.156,0,0,1,7.03,11.707L9.172,8.859A2.1,2.1,0,0,0,9.689,6.73a14.784,14.784,0,0,1-.741-4.644A2.089,2.089,0,0,0,6.861,0H2.086A2.089,2.089,0,0,0,0,2.086,23.941,23.941,0,0,0,23.914,26,2.089,2.089,0,0,0,26,23.914V19.152A2.089,2.089,0,0,0,23.914,17.066Z" fill="#feed06" />
            </svg> +92 336 822 0062
            </p> */}
            {/* <p className='iconDiv'>
              <a target="_blank" href="https://www.linkedin.com/company/GlobalArda"><i class="fab fa-linkedin"></i></a>
              <a target="_blank" href="https://www.facebook.com/ArdaPakistan"> <i className="fab fa-facebook-square" /></a>
              <a target="_blank" href="https://twitter.com/GlobalArda"> <i className="fab fa-twitter" /></a>
            </p> */}
            {/* <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26">
              <g id="Group_29" data-name="Group 29" transform="translate(-150 -4345)">
                <circle id="Ellipse_6" data-name="Ellipse 6" cx="13" cy="13" r="13" transform="translate(150 4345)" fill="#feed06" />
                <path id="Path_280" data-name="Path 280" d="M13.364,12.784v-6.6a1.182,1.182,0,1,0-2.364,0v7.091a1.182,1.182,0,0,0,.346.835l3.546,3.546a1.182,1.182,0,1,0,1.671-1.671Z" transform="translate(150.818 4344.728)" fill="#572d8e" stroke="#572d8e" stroke-width="1" />
              </g>
            </svg> Monday - Sunday 10:00 - 22:00. <br />&nbsp;&nbsp;&nbsp;&nbsp; Friday - OFF
            </p> */}
          </div>
        </div>
        <div className='col-md-3 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>Quick Links.</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>WhatsApp</h4>
            <div className='whats'>
              <h6>Arda - UAE</h6>
              <a target="_blank" href="https://wa.me/971529333781">
                <img src={require('../../assets/img/WhatsApp.png')} /> +971 52 933 3781
              </a>
            </div>
            <hr />
            <div className='whats'>
              <h6>Arda - Pakistan</h6>
              <a target="_blank" href="https://wa.me/923462749449">
                <img src={require('../../assets/img/WhatsApp.png')} /> +923 46 274 9449
              </a>
            </div>
          </div>
        </div>
        <div className='col-md-2 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>Social Links.</h4>
            <a target="_blank" href="https://www.linkedin.com/company/GlobalArda"><i class="fab fa-linkedin"></i>&nbsp;&nbsp;Linkedin</a>
            <a target="_blank" href="https://www.facebook.com/ArdaPakistan"> <i className="fab fa-facebook-square" />&nbsp;&nbsp;Facebook</a>
            <a target="_blank" href="https://twitter.com/GlobalArda"> <i className="fab fa-twitter" />&nbsp;&nbsp;Twitter</a>
          </div>
        </div>
        {/* <div className='col-md-2 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>What we do.</h4>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/consulting">Consulting</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/hardware">Hardware</NavLink>
          </div>
        </div> */}
        {/* <div className='col-md-2 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>Who we are.</h4>
            <NavLink to="/mission">About us</NavLink>
            <NavLink to="/partners">Our Partners</NavLink>
            <NavLink to="/enqueries">Enqueries</NavLink>
          </div>
        </div> */}
        {/* <div className='col-md-2 col-sm-6 second'>
          <div className='linkDiv'>
            <h4>Success Stories</h4>
            <NavLink to="/success">Industry Verticals</NavLink>
            <NavLink to="/success">Case Studies</NavLink>
            <NavLink to="/success">Customer Testimonials</NavLink>
          </div>
        </div> */}
      </div>
      <div className='divTwo'>
        <div className='container'>
          <div style={{ zIndex: 99 }}>
            <p>© 2022 Arda Global. All Rights Reserved</p>
            {/* <p>Developed by &nbsp; <a className='yellow' target="_blank" href='https://tech-soft-tech.web.app/' > TechSoftTech</a></p> */}
          </div>
          {/* <p><a target="_blank" href='/privacy-policies'>Privacy Policy</a></p> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;