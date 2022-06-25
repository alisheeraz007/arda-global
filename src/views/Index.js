import React, { useEffect } from "react";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Header/Hero.js";
import Heading from "components/Header/Heading.js";
import Footer from "components/Footer/Footer.js";

// Index Sections
import CompaniesSection from "views/IndexViews/CompaniesSection.js";
import IntroSection from "views/IndexViews/IntroSection";
import TechnologySection from "views/IndexViews/TechnologySection.js";
import ConsultingSection from "views/IndexViews/ConsultingSection.js";
import ServicesSection from "views/IndexViews/ServicesSection.js";
import HardwareSection from "views/IndexViews/HardwareSection.js";
import EndingSection from "views/IndexViews/EndingSection.js";
import BookingSection from "views/IndexViews/BookingSection.js";

// Pages
import Partners from "views/Pages/Partners.js";

export default function Index() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="mainHome">
      <Navbar />
      <div className="wrapper new_home">
        <Hero
          title="The Future Is Digital"
          btn="Book a Call"
          btn_color="success"
          desc="We are Ready to Take your Business to new Heights"
          link="/#Booking"
        />
        <div className="main">
          {/* <Heading title="Trusted By Top Leading Companies" /> */}
          <IntroSection />
          <Partners />
          <CompaniesSection />
          {/* <Heading title="Leading Top notch IT Services" />
          <TechnologySection />
          <hr style={{ width: "100%", borderTopWidth: 5 }} />
          <ConsultingSection />
          <hr style={{ width: "100%", borderTopWidth: 5 }} />
          <ServicesSection />
          <hr style={{ width: "100%", borderTopWidth: 5 }} />
          <HardwareSection />
          <Heading title="Transforming Business Across the Globe" /> */}
          {/* <EndingSection /> */}
          {/* <Heading title="Top Maintained Support by Our Team" /> */}
          {/* <BookingSection /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
